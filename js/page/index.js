import "../../css/index.scss";

import Vue from "vue";
import echarts from "echarts";
import dataFormat from 'dataFormat';
import "babel-polyfill";

const T_URL = 'http://139.217.29.222:6060/largeScreen/portalapp/getPortalTrainBusUser.action';
const D_URL = 'http://139.217.29.222:6060/largeScreen/portalapp/getTrainBusYtjDevNum.action';
const isMobile = /android|webos|ip(hone|ad|od)|opera (mini|mobi|tablet)|iemobile|windows.+(phone|touch)|mobile|fennec|kindle (Fire)|Silk|maemo|blackberry|playbook|bb10\; (touch|kbd)|Symbian(OS)|Ubuntu Touch/i.test(window.navigator.userAgent); 


window.addEventListener('DOMContentLoaded',function (){
    var vEcharts;

    Vue.filter("format_time",function (str){
        return dataFormat(str,"YYYY-MM-DD hh:mm");
    });

    new Vue({
        el: "#v-box",
        data: {
            now: Date.now(),
            today_detail: {},
            today_all: [],
            device_all: []
        },
        watch: {
            today_detail: {
                handler(val,oldVal){
                    this.updata_echarts();
                },
                deep: true
            }
        },
        mounted(){
            this.$nextTick(()=>{
                vEcharts = echarts.init(document.getElementById("v-echarts"))
                vEcharts.showLoading();
                this.get();
            });
            
            setInterval(()=>{
                this.now = Date.now();
                this.get();
            },60000);
        },
        methods: {
            get(){
                fetch(T_URL)
                    .then(response=>response.json())
                    .then(arr=>{
                        var today_detail = {
                            x_data: [],         // time
                            r_user: [],         // real_users
                            c_user: [],         // connected_users
                            a_user: []         // active_users
                        };
                        var today_all = [
                            {"type":"实际用户","trainUser":0,"busUser":0,"ytjUser":0},
                            {"type":"已连接用户","trainUser":0,"busUser":0,"ytjUser":0},
                            {"type":"活跃用户","trainUser":0,"busUser":0,"ytjUser":0}
                        ];
                        var iNow = arr.length;
                        for (var i = iNow-3; i < iNow; i++) {
                            switch(arr[i].userType){
                                case 1: 
                                    today_all[0].trainUser=arr[i].trainUser;
                                    today_all[0].busUser=arr[i].busUser;
                                    today_all[0].ytjUser=arr[i].ytjUser;
                                    break;
                                case 2: 
                                    today_all[1].trainUser=arr[i].trainUser;
                                    today_all[1].busUser=arr[i].busUser;
                                    today_all[1].ytjUser=arr[i].ytjUser;
                                    break;
                                case 3: 
                                    today_all[2].trainUser=arr[i].trainUser;
                                    today_all[2].busUser=arr[i].busUser;
                                    today_all[2].ytjUser=arr[i].ytjUser;
                                    break;
                            }
                        }
                        
                        const LAST_DAY = dataFormat(Date.now()-1000*3600*24,"YYYYMMDD");
                        for(let json of arr){
                            if (json.dayId==LAST_DAY) {
                                json.timeId = '昨'+json.timeId;
                            }
                            switch(json.userType){
                                case 1:
                                    today_detail.x_data.push(json.timeId);
                                    today_detail.r_user.push(json.totalUser);                       
                                    break;
                                case 2:
                                    today_detail.c_user.push(json.totalUser);
                                    break;
                                case 3:
                                    today_detail.a_user.push(json.totalUser);
                                    break;
                            }
                        }
                        this.today_detail = today_detail;
                        this.today_all = today_all;
                    })
                    .catch((e)=>{
                        console.error(`error ${e}`)
                    });
                fetch(D_URL)
                    .then(response=>response.json())
                    .then(arr=>{
                        var device_all = [];

                        // 只取最后一条数据
                        for (var i = arr.length-3; i < arr.length; i+=3) {
                            var json = {
                                "type": "设备安装数",
                                "statDate": arr[i].statDate,
                                "statHour": arr[i].statHour
                            };
                            for (var j = 0; j < 3; j++) {
                                switch(arr[i+j].carType){
                                    case 1:
                                        json.trainUser = arr[i+j].sumOnline;
                                        break;
                                    case 2:
                                        json.busUser = arr[i+j].sumOnline;
                                        break;
                                    case 11:
                                        json.ytjUser = arr[i+j].sumOnline;
                                        break;
                                }
                            }
                            device_all.push(json);
                        }
                        this.device_all = device_all;
                    })
                    .catch((e)=>{
                        console.error(`error ${e}`)
                    });
            },
            updata_echarts: function (){
                let {x_data,r_user,c_user,a_user} = this.today_detail;
                let formatter = isMobile?"":"{value}";
                var option = {
                    title : {
                        text: '用户详情',
                        subtext: ''
                    },
                    tooltip : {
                        trigger: 'axis'
                    },
                    calculable : true,
                    xAxis : [
                        {
                            type : 'category',
                            boundaryGap : false,
                            data : x_data,
                            axisLabel: {
                                formatter: "{value}h"
                            }
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value',
                            axisLabel : {
                                formatter: formatter
                            }
                        }
                    ],
                    series : [
                        {
                            name:'实际用户',
                            type:'line',
                            data: r_user
                            /*,markLine : {
                                data : [
                                    {type : 'average', name: '平均'}
                                ]
                            }*/
                        },
                        {
                            name:'已连接用户',
                            type:'line',
                            data: c_user
                            /*,markLine : {
                                data : [
                                    {type : 'average', name : '平均'}
                                ]
                            }*/
                        },
                        {
                            name:'活跃用户',
                            type:'line',
                            data: a_user
                            /*,markLine : {
                                data : [
                                    {type : 'average', name : '平均'}
                                ]
                            }*/
                        }
                    ]
                };

                vEcharts.hideLoading();
                vEcharts.setOption(option);
            }
        }
    })


},false);