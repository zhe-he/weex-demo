import Vue from "../lib/vue.common.js";
import echarts from "../lib/echarts.common.js";
import dataFormat from 'dataFormat';
import "babel-polyfill";

const T_URL = 'http://139.217.29.222:6060/largeScreen/portalapp/getPortalTrainBusUser.action';
import e_locales from "../data/echarts_locales.json";

var vEcharts;
new Vue({
    el: "#main",
    data: {
        language: 'cn',
        today_detail: {}
    },
    watch: {
        today_detail: {
            handler(){
                this.updata_echarts();
            },
            deep: true
        }
    },
    mounted(){
        this.$nextTick(()=>{
            vEcharts = echarts.init(document.getElementById("v-echarts"));
            this.get();

            var hash = window.location.hash.substr(1);
            this.language=hash=='en'?'en':'cn';
            window.addEventListener('hashchange',this.hashchange.bind(this),false);
        });
        setInterval(()=>{
            this.get();
        },60000);
    },
    methods: {
        hashchange(){
            var hash = window.location.hash.substr(1);
            this.language=hash=='en'?'en':'cn';
            this.updata_echarts();
        },
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

                    const LAST_DAY = dataFormat(Date.now()-1000*3600*24,"YYYYMMDD");
                    for(let json of arr){
                        if (json.dayId==LAST_DAY) {
                            json.timeId = '\u6628'+json.timeId;
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
                })
                .catch((e)=>{
                    console.error(`error ${e}`)
                });
        },
        updata_echarts(){
            let {e_title,e_actual,e_connect,e_active} = e_locales[this.language];
            let {x_data,r_user,c_user,a_user} = this.today_detail;
            for (var i = 0; i < x_data.length; i++) {
                x_data[i] = this.language=="en"?x_data[i].replace("\u6628","Y"):x_data[i].replace("Y","\u6628");
            }
            var option = {
                title : {
                    text: e_title,
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
                            formatter: function (value){
                                return value/10000+"W";
                            }
                        }
                    }
                ],
                series : [
                    {
                        name: e_actual,
                        type: 'line',
                        data: r_user
                    },
                    {
                        name: e_connect,
                        type: 'line',
                        data: c_user
                    },
                    {
                        name: e_active,
                        type: 'line',
                        data: a_user
                    }
                ]
            };
            vEcharts.setOption(option);
        }
    }
})
