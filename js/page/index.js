import "../../css/index.scss";

import Vue from "vue";
import VueI18n from "vue-i18n";
import echarts from "echarts";
import dataFormat from 'dataFormat';
import "babel-polyfill";

const Y_URL = 'http://139.217.29.222:6060/largeScreen/portalapp/queryBIbizTDeviceUserDaily.action';
const T_URL = 'http://139.217.29.222:6060/largeScreen/portalapp/getPortalTrainBusUser.action';
const D_URL = 'http://139.217.29.222:6060/largeScreen/portalapp/getTrainBusYtjDevNum.action';
const U_URL = 'http://139.217.23.179:8080/metrics/talkingdata/users/daily';
const isMobile = /android|webos|ip(hone|ad|od)|opera (mini|mobi|tablet)|iemobile|windows.+(phone|touch)|mobile|fennec|kindle (Fire)|Silk|maemo|blackberry|playbook|bb10\; (touch|kbd)|Symbian(OS)|Ubuntu Touch/i.test(window.navigator.userAgent); 

import locales from "../data/locales.json";
import e_locales from "../data/echarts_locales.json";

Vue.use(VueI18n);
Vue.config.lang  = window.localStorage.getItem('language')||'cn';

Object.keys(locales).forEach(function (lang) {
    Vue.locale(lang, locales[lang]);
});

window.addEventListener('DOMContentLoaded',function (){
    var vEcharts;
    Vue.filter("format_time",function (str){
        return dataFormat(str,"YYYY-MM-DD hh:mm");
    });
    Vue.filter("number",function (n){
        return n>10000?(n/10000).toFixed(1) + 'W':n;
    });
    Vue.filter("minute",function (n){
        return (n/60).toFixed(1) + 'min';
    });

    new Vue({
        el: "#v-box",
        data: {
            showLanguage: false,
            now: Date.now(),
            today_detail: {},
            yesterday_all: [],
            today_all: [],
            device_all: [],
            user_all: []
        },
        watch: {
            today_detail: {
                handler(){
                    this.updata_echarts();
                },
                deep: true
            }
        },
        computed: {
            newAmp(){
                return this.countAmp("new");
            },
            activeAmp(){
                return this.countAmp("active");
            },
            totalAmp(){
                return this.countAmp("total");
            },
            durationAmp(){
                return this.countAmp("duration");
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
            countAmp(name){
                if (this.user_all.length==0) {return ""}
                return ((this.user_all[1][name]-this.user_all[2][name])/this.user_all[2][name]*100).toFixed(2)+'%';
            },
            get(){
                fetch(Y_URL)
                    .then(response=>response.json())
                    .then(arr=>{
                        var yesterday_all = [{},{},{}];
                        arr.sort((a,b)=>a.userType-b.userType);
                        for (var i = 0; i < arr.length; i++) {
                            yesterday_all[i].trainUser = arr[i].trainUser - 0;
                            yesterday_all[i].busUser = arr[i].busUser - 0;
                            yesterday_all[i].ytjUser = arr[i].ytjUser - 0;
                        }
                        this.yesterday_all = yesterday_all;

                    })
                    .catch((e)=>{
                        console.error(`error ${e}`)
                    });
                fetch(T_URL)
                    .then(response=>response.json())
                    .then(arr=>{
                        var today_detail = {
                            x_data: [],         // time
                            r_user: [],         // real_users
                            c_user: [],         // connected_users
                            a_user: []         // active_users
                        };
                        var today_all = [{},{},{}];

                        for (var i = 0; i < arr.length; i++) {
                            switch(arr[i].userType){
                                case 1: 
                                    today_all[0].trainUser=arr[i].trainUser - 0;
                                    today_all[0].busUser=arr[i].busUser - 0;
                                    today_all[0].ytjUser=arr[i].ytjUser - 0;
                                    break;
                                case 2: 
                                    today_all[1].trainUser=arr[i].trainUser - 0;
                                    today_all[1].busUser=arr[i].busUser - 0;
                                    today_all[1].ytjUser=arr[i].ytjUser - 0;
                                    break;
                                case 3: 
                                    today_all[2].trainUser=arr[i].trainUser - 0;
                                    today_all[2].busUser=arr[i].busUser - 0;
                                    today_all[2].ytjUser=arr[i].ytjUser - 0;
                                    break;
                            }
                        }
                        
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
                        this.today_all = today_all;
                    })
                    .catch((e)=>{
                        console.error(`error ${e}`)
                    });
                fetch(D_URL)
                    .then(response=>response.json())
                    .then(arr=>{
                        var device_all = [{},{},{}];
                        for (var i = 0; i < arr.length; i+=3) {
                            for (var j = 0; j < 3; j++) {
                                switch(arr[i+j].carType){
                                    case 1:
                                        device_all[0].trainUser = arr[i+j].sumTodayActive;
                                        device_all[1].trainUser = arr[i+j].sumTodayOnline;
                                        device_all[2].trainUser = arr[i+j].sumOnline;
                                        break;
                                    case 2:
                                        device_all[0].busUser = arr[i+j].sumTodayActive;
                                        device_all[1].busUser = arr[i+j].sumTodayOnline;
                                        device_all[2].busUser = arr[i+j].sumOnline;
                                        break;
                                    case 11:
                                        device_all[0].ytjUser = arr[i+j].sumTodayActive;
                                        device_all[1].ytjUser = arr[i+j].sumTodayOnline;
                                        device_all[2].ytjUser = arr[i+j].sumOnline;
                                        break;
                                }
                            }
                        }
                        this.device_all = device_all;
                    })
                    .catch((e)=>{
                        console.error(`error ${e}`)
                    });
                fetch(U_URL)
                    .then(response=>response.json())
                    .then(arr=>{
                        var data = arr.result.data;
                        var user_all = [];
                        for(let name in data){
                            let json = Object.assign({date:name},data[name]);
                            user_all.push(json);
                        }
                        this.user_all = user_all.sort((a,b)=>this.format2Time(b.date)-this.format2Time(a.date)).slice(0,3);
                    })
                    .catch((e)=>{
                        console.error(`error ${e}`)
                    })
            },
            format2Time(time){
                var y = time.substr(0,4),
                    M = time.substr(5,2)-1,
                    d = time.substr(8,2),
                    h = time.substr(11,2) || 0,
                    m = time.substr(14,2) || 0,
                    s = time.substr(17,2) || 0;
                var nowDate = new Date();
                nowDate.setFullYear(y,M,d);
                nowDate.setHours(h,m,s);
                return nowDate.getTime();
            },
            updata_echarts(){
                let {e_title,e_actual,e_connect,e_active} = e_locales[Vue.config.lang];

                let {x_data,r_user,c_user,a_user} = this.today_detail;
                for (var i = 0; i < x_data.length; i++) {
                    x_data[i] = Vue.config.lang=="en"?x_data[i].replace("\u6628","Y"):x_data[i].replace("Y","\u6628");
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
                                    if(isMobile){
                                        return value/10000+"W";
                                    }else {
                                        return value;
                                    }
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

                vEcharts.hideLoading();
                vEcharts.setOption(option);
            },
            lang(language){
                this.showLanguage = false;
                window.localStorage.setItem('language',language);
                Vue.config.lang = language;
                this.updata_echarts();
            }
        }
    })


},false);