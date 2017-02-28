<template>
	<scroller>
		<div class="v-time"><text>{{ $t("vtime") }}: {{now | format_time}}</text></div>

		<div class="mt10">
			<div class="title"><text>{{ $t("Portal.hourly") }}</text></div>
			<div class="row">
				<div class="item"><text></text></div>
				<div class="item"><text>{{ $t("Portal.train") }}</text></div>
				<div class="item"><text>{{ $t("Portal.bus") }}</text></div>
				<div class="item"><text>{{ $t("Portal.ytj") }}</text></div>
				<div class="item"><text>{{ $t("Portal.total") }}</text></div>
			</div>
			<div v-for="(item,index) in today_all" :key="index" class="row">
				<div class="item">
					<text class="center" v-if="index==0">{{ $t("Portal.actual") }}</text>
					<text class="center" v-if="index==1">{{ $t("Portal.connect") }}</text>
					<text class="center" v-if="index==2">{{ $t("Portal.active") }}</text>
				</div>
				<div class="item"><text>{{item.trainUser}}</text></div>
				<div class="item"><text>{{item.busUser}}</text></div>
				<div class="item"><text>{{item.ytjUser}}</text></div>
				<div class="item"><text>{{item.trainUser+item.ytjUser+item.busUser}}</text></div>
			</div>
		</div>

        <div class="mt10">
            <div class="title"><text>{{ $t("Portal.yesterday") }}</text></div>
            <div class="row">
                <div class="item"><text></text></div>
                <div class="item"><text>{{ $t("Portal.train") }}</text></div>
                <div class="item"><text>{{ $t("Portal.bus") }}</text></div>
                <div class="item"><text>{{ $t("Portal.ytj") }}</text></div>
                <div class="item"><text>{{ $t("Portal.total") }}</text></div>
            </div>
            <div v-for="(item,index) in yesterday_all" :key="index" class="row">
                <div class="item">
                    <text class="center" v-if="index==0">{{ $t("Portal.actual") }}</text>
                    <text class="center" v-if="index==1">{{ $t("Portal.connect") }}</text>
                    <text class="center" v-if="index==2">{{ $t("Portal.active") }}</text>
                </div>
                <div class="item"><text>{{item.trainUser|number}}</text></div>
                <div class="item"><text>{{item.busUser|number}}</text></div>
                <div class="item"><text>{{item.ytjUser|number}}</text></div>
                <div class="item"><text>{{(item.trainUser+item.ytjUser+item.busUser)|number}}</text></div>
            </div>
        </div>

        <div class="mt10">
            <div class="title"><text>{{ $t("equip.title") }}</text></div>
            <div class="row">
                <div class="item"><text></text></div>
                <div class="item"><text>{{ $t("Portal.train") }}</text></div>
                <div class="item"><text>{{ $t("Portal.bus") }}</text></div>
                <div class="item"><text>{{ $t("Portal.ytj") }}</text></div>
                <div class="item"><text>{{ $t("Portal.total") }}</text></div>
            </div>
            <div v-for="(item,index) in device_all" :key="index" class="row">
                <div class="item">
                    <text class="center" v-if="index==0">{{ $t("equip.active") }}</text>
                    <text class="center" v-if="index==1">{{ $t("equip.online") }}</text>
                    <text class="center" v-if="index==2">{{ $t("equip.install") }}</text>
                </div>
                <div class="item"><text>{{item.trainUser}}</text></div>
                <div class="item"><text>{{item.busUser}}</text></div>
                <div class="item"><text>{{item.ytjUser}}</text></div>
                <div class="item"><text>{{item.trainUser+item.ytjUser+item.busUser}}</text></div>
            </div>
        </div>
        <div>
            <div class="title"><text>{{ $t("wangfan.application") }}</text></div>
            <div class="row">
                <div class="item"><text></text></div>
                <div class="item"><text class="center">{{ $t("wangfan.newU") }}</text></div>
                <div class="item"><text class="center">{{ $t("wangfan.active") }}</text></div>
                <div class="item"><text class="center">{{ $t("wangfan.total") }}</text></div>
                <div class="item"><text class="center">{{ $t("wangfan.duration") }}</text></div>
            </div>
            <div v-for="(item,index) in user_all" :key="index" class="row">
                <div class="item"><text class="center">{{item.date}}</text></div>
                <div class="item"><text>{{item.new|number}}</text></div>
                <div class="item"><text>{{item.active|number}}</text></div>
                <div class="item"><text>{{item.total|number}}</text></div>
                <div class="item"><text>{{item.duration|minute}}</text></div>
            </div>
            <div class="row">
                <div class="item"><text>{{ $t("wangfan.increase") }}</text></div>
                <div class="item"><text>{{newAmp}}</text></div>
                <div class="item"><text>{{activeAmp}}</text></div>
                <div class="item"><text>{{totalAmp}}</text></div>
                <div class="item"><text>{{durationAmp}}</text></div>
            </div>
        </div>

        <div class="p10">
            <text>{{ $t("explain[0]") }}</text>
            <text>{{ $t("explain[1]") }}</text>
            <text>{{ $t("explain[2]") }}</text>
            <text>{{ $t("explain[3]") }}</text>
            <text>{{ $t("explain[4]") }}</text>
            <text>{{ $t("explain[5]") }}</text>
        </div>
        
        <div class="v-language" @click="lang()"><text>{{ $t("language") }}</text></div>
	</scroller>
</template>

<style scope>
    *{margin: 0; padding: 0;}
    .mt10{
        margin-bottom: 20px;
    }
    .p10{
        padding: 20px;
    }
	.v-time{
		padding: 20px;
	}
	.title{
		height: 60px;
        line-height: 60px;
        text-align: center;
		justify-content: center;
		align-items: center;
		border-top-width: 1px;
        border-bottom-width: 1px;
		border-style: solid;
		border-color: #dadfea;
	}
	.item{
		flex: 1;
		justify-content: center;
		align-items: center;
		border-width: 1px;
		border-color: #dadfea;
		border-style: solid;
		margin-left: -1px;
		margin-top: -1px;
	}
	.row{
		flex-direction: row;
		height: 80px;
	}
    .v-language{
        justify-content: flex-end;
        align-items: flex-end;
        padding: 20px;
    }
    .center{
        text-align: center;
    }

</style>

<script>
const storage = weex.requireModule('storage');
const stream = weex.requireModule('stream');
const picker = weex.requireModule('picker'); // not Support Browser
import VueI18n from "vue-i18n";
import dataFormat from 'dataFormat';
const Y_URL = 'http://139.217.29.222:6060/largeScreen/portalapp/queryBIbizTDeviceUserDaily.action';
const T_URL = 'http://139.217.29.222:6060/largeScreen/portalapp/getPortalTrainBusUser.action';
const D_URL = 'http://139.217.29.222:6060/largeScreen/portalapp/getTrainBusYtjDevNum.action';
const U_URL = 'http://139.217.23.179:8080/metrics/talkingdata/users/daily';
import locales from "./data/locales.json";
import e_locales from "./data/echarts_locales.json";
Vue.use(VueI18n);
Vue.config.lang = 'cn';
storage.getItem('language',ev=>{
    Vue.config.lang=(ev.data && ev.data != 'undefined')?ev.data:'cn';
});
Object.keys(locales).forEach(function (lang) {
    Vue.locale(lang, locales[lang]);
});

Vue.filter("format_time",function (str){
    return dataFormat(str,"YYYY-MM-DD hh:mm");
});
Vue.filter("number",function (n){
    return n>10000?(n/10000).toFixed(1) + 'W':n;
});
Vue.filter("minute",function (n){
    return (n/60).toFixed(1) + 'min';
});

export default {
    data(){
    	return {
	        now: Date.now(),
	        today_detail: {},
	        yesterday_all: [],
	        today_all: [],
	        device_all: [],
	        user_all: []
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
        this.get();
        
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
            stream.fetch({
                method: 'GET',
                type: 'json',
                url: Y_URL,
                body: ''
            },data=>{
                if (data.ok) {
                    let arr = data.data;
                    var yesterday_all = [{},{},{}];
                    arr.sort((a,b)=>a.userType-b.userType);
                    for (var i = 0; i < arr.length; i++) {
                        yesterday_all[i].trainUser = arr[i].trainUser - 0;
                        yesterday_all[i].busUser = arr[i].busUser - 0;
                        yesterday_all[i].ytjUser = arr[i].ytjUser - 0;
                    }
                    this.yesterday_all = yesterday_all;
                }else{
                    console.error(data);
                }
            });

            stream.fetch({
                method: 'GET',
                type: 'json',
                url: T_URL,
                body: ''
            },data=>{
                if (data.ok) {
                    let arr = data.data;
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
                    for (var i = 0; i < arr.length; i++) {
                        let json = arr[i];
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
                }else{
                    console.error(data);
                }
            });

            stream.fetch({
                method: 'GET',
                type: 'json',
                url: D_URL,
                body: ''
            },data=>{
                if (data.ok) {
                    let arr = data.data;
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
                }else{
                    console.error(data);
                }
            });

            stream.fetch({
                method: 'GET',
                type: 'json',
                url: U_URL,
                body: ''
            },data=>{
                if (data.ok) {
                    let arr = data.data.result.data;
                    var user_all = [];
                    for(let name in arr){
                        let json = Object.assign({date:name},arr[name]);
                        user_all.push(json);
                    }
                    this.user_all = user_all.sort((a,b)=>this.format2Time(b.date)-this.format2Time(a.date)).slice(0,3);
                }else{
                    console.error(data);
                }
            });
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
        lang(){
            let index = Vue.config.lang=='en'?0:1;
            picker.pick({
                index: index,
                items: ['English','中文']
            },ret=>{
                if (ret.result=='success') {
                    Vue.config.lang = ret.data==0?'en':'cn';
                    stream.setItem('language',Vue.config.lang);
                }
            });
        }
    }
}
</script>