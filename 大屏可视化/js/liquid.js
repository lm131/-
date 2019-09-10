function getWeather(w_min,w_max,value){
var liquid1Chart = echarts.init(document.getElementById('J_liquid1'));
//var w_min=0,w_max=50,value=10;  /// 设置最大温度，最小温度,当前温度

// leftColor = Gradient[Gradient.length - 1].color;
// 因为柱状初始化为0，温度存在负值，所以加上负值60和空出距离10
var TP_value = value;
var kd = [];
var Gradient = [];
var leftColor = '';
var showValue = '';
var boxPosition = [-100, 104];
var TP_txt = '';
var w_min=w_min,w_max=w_max;  /// 设置最大温度，最小温度
var w_len=Math.abs(w_max)+Math.abs(w_min);
// 刻度使用柱状图模拟，短设置1，长的设置3；构造一个数据
for(var i = 0, len = w_len+20; i <= len; i++) {
  if(i < 10 || i > w_len+10) {
    kd.push('')
  } else {
    if((i - 10) % 10 === 0) {
      kd.push('-3');
    } else if((i - 10) % 2 === 0) {
      kd.push('-1');
    } else {
      kd.push('');
    }
  }

}
//中间线的渐变色和文本内容
if(TP_value > 30) {
  TP_txt = '温度偏高';
  Gradient.push({
    offset: 0,
    color: '#FF3E46'
  }, {
    offset: 0.5,
    color: '#FF3E46'
  }, {
    offset: 1,
    color: '#FF3E46'
  })
} else if(TP_value > 20) {
  TP_txt = '温度正常';
  Gradient.push({
    offset: 0,
    color: '#FF3E46'
  }, {
    offset: 1,
    color: '#FF3E46'
  })
} else {
  TP_txt = '温度偏低';
  Gradient.push({
    offset: 1,
    color: '#FF3E46'
  })
}
if(TP_value > w_max) {
  showValue = w_max
} else {
  if(TP_value < w_min) {
    showValue = w_min
  } else {
    showValue = TP_value
  }
}
/*if(TP_value < 10) {
  boxPosition = ['30%', -100];
}*/
leftColor = Gradient[Gradient.length - 1].color;
// 因为柱状初始化为0，温度存在负值，所以加上负值30和空出距离10
var option2 = {
  title: {
    text: '温度计',
    show: false
  },
  yAxis: [{
    show: true,
    data: [],
    min: 0,
    max: w_len+20,
    axisLine: {
      show: false
    }
  }, {
    show: false,
    min: 0,
    max: 50,
  }, {
    type: 'category',
    data: ['', '', '', '', '', '', '', '', '', '', '°C'],
    position: 'left',
    offset: 2,
    axisLabel: {
      fontSize: 10,
      color: 'white'
    },
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
  }],
  xAxis: [{
    show: false,
    min: -30,
    max: 80,
    data: []
  }, {
    show: false,
    min: -30,
    max: 80,
    data: []
  }, {
    show: false,
    min: -30,
    max: 80,
    data: []
  }, {
    show: false,
    min: 1,
    max: 80,

  }],
  grid:{
    left:70,
    top:30,
    bottom:'45%'
  },
  series: [{
    name: '条',
    type: 'bar',
    // 对应上面XAxis的第一个对)象配置
    xAxisIndex: 0,
    data: [{
      value: (showValue + Math.abs(w_min)+10),
      label: {
        normal: {
          show: true,
          position:boxPosition,
          // bottom:-120,
          backgroundColor: {
            // image: 'plugin/subway_beijing/images/power/bg5Valuebg.png',//文字框背景图
          },
          width: 200,
          height: 100,
          formatter: '{back| ' + TP_value + ' }{unit|°C}\n{downTxt|' + TP_txt + '}',
          rich: {
            back: {
              align: 'center',
              fontSize: 20,
              fontFamily: 'digifacewide',
              color: leftColor
            },
            unit: {
              fontFamily: '微软雅黑',
              fontSize: 20,
              lineHeight: 40,
              color: leftColor
            },
            downTxt: {
              fontSize: 16,
              align: 'center',
              color: '#d3f2ff'
            }
          }
        }
      }
    }],

    barWidth: 16,
    itemStyle: {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, Gradient)
      }
    },
    z: 2
  }, {
    name: '白框',
    type: 'bar',
    xAxisIndex: 1,
    barGap: '-100%',
    data: [w_len+10],
    barWidth: 22,
    itemStyle: {
      normal: {
        color: '#0C2E6D',
        barBorderRadius: 50,
      }
    },
    z: 1
  }, {
    name: '外框',
    type: 'bar',
    xAxisIndex: 2,
    barGap: '-100%',
    data: [w_len+15],
    barWidth: 32,
    itemStyle: {
      normal: {
        color: '#315aba',
        barBorderRadius: 50,
      }
    },
    z: 0
  }, {
    name: '圆',
    type: 'scatter',
    hoverAnimation: false,
    data: [0],
    xAxisIndex: 0,
    symbolSize: 44,
    itemStyle: {
      normal: {
        color: '#FF3E46',
        opacity: 1,
      }
    },
    z: 2
  }, {
    name: '白圆',
    type: 'scatter',
    hoverAnimation: false,
    data: [0],
    xAxisIndex: 1,
    symbolSize: 55,
    itemStyle: {
      normal: {
        color: '#0C2E6D',
        opacity: 1,
      }
    },
    z: 1
  }, {
    name: '外圆',
    type: 'scatter',
    hoverAnimation: false,
    data: [0],
    xAxisIndex: 2,
    symbolSize: 65,
    itemStyle: {
      normal: {
        color: '#4577BA',
        opacity: 1,
      }
    },
    z: 0
  }, {
    name: '刻度',
    type: 'bar',
    yAxisIndex: 0,
    xAxisIndex: 3,
    label: {
      normal: {
        show: true,
        position: 'left',
        distance: 15,
        color: '#d3f2ff',
        fontSize: 12,
        formatter: function(params) {
          if(params.dataIndex > w_len+20 || params.dataIndex < 10) {
            return '';
          } else {
            if((params.dataIndex - 10) % 20 === 0) {
              return params.dataIndex -Math.abs(w_min) - 10;
            } else {
              return '';
            }
          }
        }
      }
    },
    barGap: '-100%',
    data: kd,
    barWidth: 1,
    itemStyle: {
      normal: {
        color: '#d3f2ff',
        barBorderRadius: 120,
      }
    },
    z: 0
  }]
};
liquid1Chart.setOption(option2);
}

getWeather(-10,80,25);
/*var arr=[[0,40,15],[0,30,10],[0,50,28]];

var i=0;
function getW(){
	// console.log(arr[i][0],arr[i][1],arr[i][2]);
	getWeather(arr[i][0],arr[i][1],arr[i][2]);
	i++;
	if(i>=arr.length){i=0;}
	
}
setInterval(getW,3000);*/




