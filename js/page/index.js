import "../../css/index.scss";

import Vue from "vue";
import echarts from "echarts";

window.addEventListener('DOMContentLoaded',function (){
    new Vue({
        el: "#v-box",
        data: {
            today_all: [
                {
                    "type": "real_users",
                    "train":    5000,
                    "bus":      300
                },
                {
                    "type": "connected_users",
                    "train":    3000,
                    "bus":      120
                },
                {
                    "type": "active_users",
                    "train":    800,
                    "bus":      30
                }   
            ]
        }
    })


},false);

var data_today_detail = [
    {
        "now_time": 0,
        "real_all": 0,
        "connected_all": 0,
        "active_all": 0
    },
    {
        "now_time": 3,
        "real_all": 100,
        "connected_all": 30,
        "active_all": 10
    },
    {
        "now_time": 6,
        "real_all": 200,
        "connected_all": 50,
        "active_all": 20
    },
    {
        "now_time": 9,
        "real_all": 500,
        "connected_all": 280,
        "active_all": 140
    },
    {
        "now_time": 12,
        "real_all": 1200,
        "connected_all": 600,
        "active_all": 320
    },
    {
        "now_time": 15,
        "real_all": 2000,
        "connected_all": 1400,
        "active_all": 300
    },
    {
        "now_time": 18,
        "real_all": 1200,
        "connected_all": 700,
        "active_all": 350
    },
    {
        "now_time": 21,
        "real_all": 300,
        "connected_all": 130,
        "active_all": 50
    },
    {
        "now_time": 24,
        "real_all": 30,
        "connected_all": 10,
        "active_all": 3
    }
];



var x_data = [],
	r_user = [],
	c_user = [],
	a_user = [];
for (var i = 0; i < data_today_detail.length; i++) {
	x_data[i] = data_today_detail[i].now_time;
	r_user[i] = data_today_detail[i].real_all;
	c_user[i] = data_today_detail[i].connected_all;
	a_user[i] = data_today_detail[i].active_all;
}

var option = {
    title : {
        text: 'USERS DETAIL',
        subtext: ''
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['最高人次','最低人次']
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

echarts.init(document.getElementById("v-echarts")).setOption(option);