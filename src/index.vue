<template>
	<article>
		<time class="v-time">{{ $t("vtime") }}: {{now | format_time}}</time>

		<table border="0" cellspacing="0" cellpadding="0" class="v-box">
			<thead>
				<tr><th colspan="5">{{ $t("Portal.hourly") }}</th></tr>
				<tr>
					<th></th>
					<th>{{ $t("Portal.train") }}</th>
					<th>{{ $t("Portal.bus") }}</th>
					<th>{{ $t("Portal.ytj") }}</th>
					<th>{{ $t("Portal.total") }}</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(item,index) in today_all" :key="index">
					<td v-if="index==0">{{ $t("Portal.actual") }}</td>
					<td v-if="index==1">{{ $t("Portal.connect") }}</td>
					<td v-if="index==2">{{ $t("Portal.active") }}</td>
					<td v-text="item.trainUser"></td>
					<td v-text="item.busUser"></td>
					<td v-text="item.ytjUser"></td>
					<td v-text="item.trainUser+item.ytjUser+item.busUser"></td>
				</tr>
			</tbody>
		</table>


		<table border="0" cellspacing="0" cellpadding="0" class="v-box mt10">
			<thead>
			<tr><th colspan="5">{{ $t("Portal.yesterday") }}</th></tr>
			<tr>
				<th></th>
				<th>{{ $t("Portal.train") }}</th>
				<th>{{ $t("Portal.bus") }}</th>
				<th>{{ $t("Portal.ytj") }}</th>
				<th>{{ $t("Portal.total") }}</th>
			</tr>
			</thead>
			<tbody>
			<tr v-for="(item,index) in yesterday_all" :key="index">
				<td v-if="index==0">{{ $t("Portal.actual") }}</td>
				<td v-if="index==1">{{ $t("Portal.connect") }}</td>
				<td v-if="index==2">{{ $t("Portal.active") }}</td>
				<td>{{item.trainUser|number}}</td>
				<td>{{item.busUser|number}}</td>
				<td>{{item.ytjUser|number}}</td>
				<td>{{item.trainUser+item.ytjUser+item.busUser|number}}</td>
			</tr>
			</tbody>
		</table>

		<table border="0" cellspacing="0" cellpadding="0" class="v-box mt10">
			<thead>
				<tr><th colspan="5">{{ $t("equip.title") }}</th></tr>
				<tr>
					<th></th>
					<th>{{ $t("Portal.train") }}</th>
					<th>{{ $t("Portal.bus") }}</th>
					<th>{{ $t("Portal.ytj") }}</th>
					<th>{{ $t("Portal.total") }}</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(item,index) in device_all" :key="index">
					<td v-if="index==0">{{ $t("equip.active") }}</td>
					<td v-if="index==1">{{ $t("equip.online") }}</td>
					<td v-if="index==2">{{ $t("equip.install") }}</td>
					<td v-text="item.trainUser"></td>
					<td v-text="item.busUser"></td>
					<td v-text="item.ytjUser"></td>
					<td v-text="item.trainUser+item.ytjUser+item.busUser"></td>
				</tr>
			</tbody>
		</table>
		<table border="0" cellspacing="0" cellpadding="0" class="v-box mt10">
			<thead>
				<tr><th colspan="5">{{ $t("wangfan.application") }}</th></tr>
				<tr>
					<th></th>
					<th>{{ $t("wangfan.newU") }}</th>
					<th>{{ $t("wangfan.active") }}</th>
					<th>{{ $t("wangfan.total") }}</th>
					<th>{{ $t("wangfan.duration") }}</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(items,index) in user_all" :key="index">
					<td v-text="items.date"></td>
					<td>{{items.new|number}}</td>
					<td>{{items.active|number}}</td>
					<td>{{items.total|number}}</td>
					<td>{{items.duration|minute}}</td>
				</tr>
				<tr>
					<td>{{ $t("wangfan.increase") }}</td>
					<td>{{newAmp}}</td>
					<td>{{activeAmp}}</td>
					<td>{{totalAmp}}</td>
					<td>{{durationAmp}}</td>
				</tr>
			</tbody>
		</table>

		<footer class="v-explain">
			<p>{{ $t("explain[0]") }}</p>
			<p>{{ $t("explain[1]") }}</p>
			<p>{{ $t("explain[2]") }}</p>
			<p>{{ $t("explain[3]") }}</p>
			<p>{{ $t("explain[4]") }}</p>
			<p>{{ $t("explain[5]") }}</p>
		</footer>
		
		<div class="v-language clearfix">
			<div class="select-lang">
				<a @click="showLanguage=!showLanguage" href="javascript:;">
					{{ $t("language") }}<span class="caret"></span>
				</a>
				<ul :class="showLanguage?'show':''">
					<li>
						<a @click="lang('en')" href="javascript:;">English</a>
					</li>
					<li>
						<a @click="lang('cn')" href="javascript:;">中文</a>
					</li>
				</ul>
			</div>
		</div>
		
	</article>
</template>

<style lang="sass">
	@import "reset";

	html,body{
		overflow-x: hidden;
		background-color: #EFF2F8;
	}

	.v-box{
		width: 100%;
		margin: 0 auto 20px;
		text-align: center;
		background-color: #fff;
		box-sizing: border-box;
		*{
			box-sizing: border-box;
		}
		.thead{
			background-color: #EFF2F9;
		}
		th,td{
			width: 20%;
			border-left: 1px solid #dadfea;
			border-bottom: 1px solid #dadfea;
			padding: 6px;
		}
		thead > tr:first-child > th{
			border-top: 1px solid #dadfea;
		}
	}
	#v-box .mt10{
		margin-bottom: 10px;
	}

	.v-time{
		padding: 10px;
		display: block;
	}
	.v-explain{
		line-height: 24px;
		padding: 0 10px;
		text-align: justify;
	}
	.v-language{
		padding: 10px;
	}
	.select-lang{
		position: relative;
	    float: right;
	    width: 105px;
	    height: 25px;
	    line-height: 25px;
	    > a{
	    	display: block;
	    	border: 1px solid #999ba4;
		    font-size: 14px;
		    text-align: center;
		    box-sizing: border-box;
		    background-color: #fff;
	    }
	    .caret{
	    	display: inline-block;
		    margin-left: 2px;
		    width: 0;
		    height: 0;
		    vertical-align: middle;
		    border-left: 4px solid transparent;
		    border-right: 4px solid transparent;
		    border-top: 4px solid #000;
	    }
	    > ul{
	    	display: none;
		    position: absolute;
		    margin-top: -90px;
	    	width: 105px;
	    	border: 1px solid #999ba4;
		    top: 100%;
		    left: 0;
		    z-index: 999;
		    float: left;
		    padding: 5px 0;
		    font-size: 14px;
		    text-align: left;
		    list-style: none;
		    background-color: #fff;
		    background-clip: padding-box;
		    box-sizing: border-box;
		    a{
		    	display: block;
			    padding: 3px 20px;
			    clear: both;
			    font-weight: 400;
			    line-height: 1.42857143;
			    color: #363539;
			    white-space: nowrap;
			    box-sizing: border-box;
			    &:hover{
			    	color: #363539;
			        text-decoration: none;
			        background-color: #f5f5f5;
			    }
		    }

		    &.show{
		    	display: block;
		    }
	    }
	}
</style>

<script>
import VueI18n from "vue-i18n";
import dataFormat from 'dataFormat';
const Y_URL = 'http://139.217.29.222:6060/largeScreen/portalapp/queryBIbizTDeviceUserDaily.action';
const T_URL = 'http://139.217.29.222:6060/largeScreen/portalapp/getPortalTrainBusUser.action';
const D_URL = 'http://139.217.29.222:6060/largeScreen/portalapp/getTrainBusYtjDevNum.action';
const U_URL = 'http://139.217.23.179:8080/metrics/talkingdata/users/daily';
import locales from "./data/locales.json";
import e_locales from "./data/echarts_locales.json";
Vue.use(VueI18n);
Vue.config.lang  = 'cn';
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
	        showLanguage: false,
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
        lang(language){
            this.showLanguage = false;
            Vue.config.lang = language;
        }
    }
}
</script>