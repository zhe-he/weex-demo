new Vue({
	el: "#v-box",
	data: {
		today_all: data_today_all
	}
})


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