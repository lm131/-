var liquid1Chart = echarts.init(document.getElementById('J_gauge1'));
var tickColor = ['#BC090E','#CA6F0E','#722291','#3B24A4','#254EC9','#1973B4','#2BDAD2','#64D41D'];
var startAngle = 225;
var endAngle = -45;
var splitWidth = 15;
var splitNumber = 5;
var data=180;
var series = getSeries(data).concat(getAxisTick()); // 默认初始值 data=180

option = {
  title: {
    show:false,
    text: '烟雾传感器',
    top:0,
    // left:10,
    left:'center',
    textStyle:{
      color:'#b6c7cc',
      fontSize:16,
      fontWeight:700
    },
  },
  series: series
};

function getSeries(data){
  return [
    {
      name: '数据',
      type: 'gauge',
      startAngle: startAngle,
      endAngle: endAngle,
      radius: '43%',
      center: ['50%','45%'],
      min: 0,
      max: 2000,
      splitNumber:splitNumber,
      axisLine: {
        lineStyle: {
          width: 2,
          color: [[1, '#f5d2ff']]
        }
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: true,
        distance:-62,
        fontSize:14
      },
      splitLine: {
        lineStyle: {
          width: 0
        }
      },
      itemStyle:{
        color:'#04A4CE'
      },
      pointer: {
        show:true,
        length: '90%'
      },
      detail: {
        offsetCenter: [0, '185%'],
        textStyle: {
          fontSize: 20,
          color:'#04A4CE'
        },
        formatter: '{b|烟雾值:}{a|{value}ppm}',
        rich:{
          a:{
              fontSize: 14,
              color:'#d3f2ff',
          },
          b:{
              color:'#d3f2ff',
              fontSize:16,

          }
        }
      },
      data: [{
        name: "",
        value: data
      }]
    }
  ];
}

function getAxisTick(){
  var tickWidth = (startAngle - endAngle - (splitNumber - 1) * splitWidth) / splitNumber;
  var ticks = [];
  for(var i=0; i<splitNumber; i++){
    ticks.push({
      name: "刻度",
      type: 'gauge',
      splitNumber: 1,
      startAngle: startAngle-i*(tickWidth+splitWidth),
      endAngle: startAngle-tickWidth-i*(tickWidth+splitWidth),
      radius: '80%',
      center:['50%','45%'],
      axisLine: {
        lineStyle: {
          width: 0,
          shadowBlur: 0
        }
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: tickColor[i],
          width: 3
        },
        length: '10%',
        splitNumber: 10
      },
      splitLine: {
        show: true,
        length: '5%',
        lineStyle: {
          width: 3,
          color: tickColor[i]
        }
      },
      axisLabel: {
        show: false
      },
      detail: {
        show: false
      },
      markPoint: {
        symbol:'circle',
        symbolSize:5,
        itemStyle: {
          color: "#fff",
          fontSize:12
        },
        data: [
          {
            x: "50%",
            y: "45%"
          }
        ]
      }
    });
  }

  return ticks;
}


liquid1Chart.setOption(option);