var lineChart1=echarts.init(document.getElementById('J_line1'));
option = {
  title:{
    text:'最近24小时温湿度趋势图',
    left:'center',
    bottom:25,
    textStyle:{
      color:'#b6c7cc',
      fontSize:16,
      fontWeight:700
    },
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    data: ['温度', '湿度'],
    top:40,
    right:'center',
    itemWidth: 20,
    itemHeight: 10,
    itemGap: 25,
    textStyle:{
      color:'#d3f2ff'
    },
    orient:'horizontal',
  },
  grid: {
    left: '10',
    top:'18%',
    right: '10',
    bottom: '70',
    containLabel: true
  },
  xAxis: [{
    type: 'category',
    data: ['0点','1点', '2点', '3点', '4点', '5点', '6点', '7点','8点','9点','10点','11点','12点','13点','14点','15点','16点','17点','18点','19点','20点','21点','22点','23点','24点'],
    offset:4,
    axisLine: {
      lineStyle: {
        color: '#3b347c',
        fontSize:'12'
      }
    },
    axisLabel: {
      show: true,
      textStyle: {
        color: "#b6c7cc",
      }
    },
    axisTick: {
      show: false,
    },
    splitLine: {
      show:false,
      lineStyle: {
        color: "#c9cfda",
      }
    },
  }],
  yAxis: [{
    type: 'value',
    name:'温度',
    nameTextStyle:{
      color:'#2676C7',
      fontWeight:'bolder',
      fontSize:14
    },
    position:'left',
    axisLabel: {
      formatter: '{value}',
      textStyle: {
        color: "#b6c7cc",
      }
    },
    splitLine:{
      lineStyle:{
        color:'#392a7c',
        type:'dashed'
      }
    },
    splitArea:{
      show:true,
      areaStyle:{
        color: ['rgba(37, 3, 124,0.2)','rgba(38, 118, 199,0.03)']
      }
    },
    axisTick: {
      show: false,
    },

    axisLine: {
      show: true,
      lineStyle: {
        color: "#392a7c",
        // width: 1,
        type: "dashed"
      },
    },
  },
    {
      type : 'value',
      name : '湿度%rh',
      min:10,
      max:100,
      nameTextStyle:{
        color:'#2676C7',
        fontWeight:'bolder',
        fontSize:14
      },
      axisLabel : {
        formatter: '{value}',
        textStyle:{
          color:'#b6c7cc',
          type:'dashed'
        }
      },
      axisLine:{
        lineStyle:{
          color:'#392a7c',
          type:'dashed'
        }
      },
      axisTick:{
        show:false,
      },
      splitLine:{
        show:false,
        lineStyle:{
          color:'#11366e',

        }
      }
    }
    ],
  series: [{
    name: '温度',
    type: 'line',
    smooth:true,
    symbolSize:5,
    data: [50,98, 70, 60, 61, 75, 77, 60, 62,66, 61,50, 60, 60, 61, 75,  76, 46,50, 70,87, 60, 62, 56, 46],
    lineStyle: {
      normal: {
        color: "#ff5a60"   // 线条颜色
      }
    },
    areaStyle: { //区域填充样式
      normal: {
        // shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
        color:  new echarts.graphic.LinearGradient(
          0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(255,62,70,.3)'
          },
            {
              offset: 1,
              color: 'rgba(255,62,70,.1)'
            }
          ]
        )
      }
    }
  }, {
    name: '湿度',
    type: 'line',
    smooth:true,
    symbolSize:5,
    yAxisIndex: 1,
    data: [10, 30,69, 45, 21, 15, 37, 30, 42, 26, 34,50, 60, 29, 36,26, 60,35, 31, 35, 36,26, 46,20, 50],
    lineStyle: {
      normal: {
        color: "#2676C7"   // 线条颜色
      }
    },
    areaStyle: { //区域填充样式
      normal: {
        // shadowBlur: 10 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
        color:  new echarts.graphic.LinearGradient(
          0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(38, 118, 199,.6)'
          },
            {
              offset: 1,
              color: 'rgba(38, 118, 199,.1)'
            }
          ]
        )
      }
    },
  }]
};
lineChart1.setOption(option);