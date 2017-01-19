import "../../css/index.scss";

import Vue from "vue";
import echarts from "echarts";
import dataFormat from 'dataFormat';
import "babel-polyfill";

const T_URL = 'http://139.217.29.222:6060/largeScreen/portalapp/getPortalTrainBusUser.action';

window.addEventListener('DOMContentLoaded',function (){
    var vEcharts = echarts.init(document.getElementById("v-echarts"));

    Vue.filter("format_time",function (str){
        return dataFormat(str,"YYYY-MM-DD hh:mm:ss");
    });

    new Vue({
        el: "#v-box",
        data: {
            now: Date.now(),
            today_detail: {},
            today_all: []
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
            vEcharts.showLoading();
            this.get();
            setInterval(this.get.bind(this),60000);
            setInterval(()=>{
                this.now = Date.now();
            }, 1000);
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
                            a_user: []          // active_users
                        };
                        var today_all = [
                            {"type": "real_users","trainUser":0,"busUser":0},
                            {"type": "connected_users","trainUser":0,"busUser":0},
                            {"type": "active_users","trainUser":0,"busUser":0}
                        ];
                        for (var i = arr.length-3; i < arr.length; i++) {
                            switch(arr[i].userType){
                                case 1: 
                                    today_all[0].trainUser=arr[i].trainUser;
                                    today_all[0].busUser=arr[i].busUser;
                                    break;
                                case 2: 
                                    today_all[1].trainUser=arr[i].trainUser;
                                    today_all[1].busUser=arr[i].busUser;
                                    break;
                                case 3: 
                                    today_all[2].trainUser=arr[i].trainUser;
                                    today_all[2].busUser=arr[i].busUser;
                                    break;
                            }
                        }

                        for(let json of arr){
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
                    .catch((e)=>console.error(`error ${e}`));
            },
            updata_echarts: function (){
                let {x_data,r_user,c_user,a_user} = this.today_detail;
                var option = {
                    title : {
                        text: 'USERS DETAIL',
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
                                formatter: '{value}'
                            }
                        }
                    ],
                    series : [
                        {
                            name:'real_all',
                            type:'line',
                            data: r_user,
                            markLine : {
                                data : [
                                    {type : 'average', name: 'average'}
                                ]
                            }
                        },
                        {
                            name:'connected_all',
                            type:'line',
                            data: c_user,
                            markLine : {
                                data : [
                                    {type : 'average', name : 'average'}
                                ]
                            }
                        },
                        {
                            name:'active_all',
                            type:'line',
                            data: a_user,
                            markLine : {
                                data : [
                                    {type : 'average', name : 'average'}
                                ]
                            }
                        }
                    ]
                };

                vEcharts.hideLoading();
                vEcharts.setOption(option);
            }
        }
    })


},false);