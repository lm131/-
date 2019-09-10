// var bar1Fun=function () {
  var bar1Chart = echarts.init(document.getElementById('J_bar1'));
  option = {
    title:{
      show:false,
      text:'设备运行状态',
      left:10,
      top:0,
      textStyle:{
        color:'#b4c9d2',
        fontSize:20,
        fontWeight:700
      },
      textAlign:'left',
    },
    grid: {
      containLabel: true,
      left:10,
      right:'-10',
      top: '50',
      bottom:'10',
    },
    legend: {
      data: ['设备总线', '在线', '离线','正常','报警'],
      top:0,
      right:15,
      itemWidth: 20,
      itemHeight: 10,
      itemGap: 15,
      textStyle:{
        color:'#d3f2ff'
      },
      orient:'horizontal',
    },
    xAxis: [{
      type: 'category',
      axisTick: {
        alignWithLabel: true
      },
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
      data: ['UPS', '市电检测', '环境检测', '消防检测', '安防检测']
    }],
    yAxis: [{
      type: 'value',
      name: '台',
      min: 0,
      position: 'left',
      nameTextStyle:{
        color:'#2676C7',
        fontWeight:'bolder',
        fontSize:14
      },
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
      axisTick: {
        show:false
      },
      axisLine: {
        lineStyle: {
          color: '#3b347c',
            fontSize:'12'
        }
      },
    }, {
      show:false,
      type: 'value',
      name: '台',
      min: 0,
      position: 'right',
      axisLabel: {
        formatter: '{value}',
        textStyle: {
          color: "#b6c7cc",
        }
      },
      splitLine:false,
      axisLine: {
        lineStyle: {
          color: '#3b347c'
        }
      }

    }],
    series: [ {
      name: '在线',
      type: 'bar',
      yAxisIndex: 1,
      barWidth:18,
      itemStyle:{
        normal:{
          color: '#1f67ef',
          barBorderRadius: 3,
        },
        emphasis: {
          barBorderRadius: 3
        }
      },
      data: [122, 192, 153, 97, 124]
    }, {
      name: '离线',
      type: 'bar',
      yAxisIndex: 1,
      barWidth:18,
      itemStyle:{
        normal:{
          color: '#55b4cc',
          barBorderRadius: 3
        },
        emphasis: {
          barBorderRadius: 3
        },
      },
      data: [21, 122, 23, 77, 244]
    },{
      name: '正常',
      type: 'bar',
      yAxisIndex: 1,
      barWidth:18,
      itemStyle:{
        normal:{
          color: '#47e528',
          barBorderRadius: 3
        },
        emphasis: {
          barBorderRadius: 3
        },
      },
      data: [21, 12, 63, 42, 10]
    },  {
        name: '报警',
        type: 'bar',
        yAxisIndex: 1,
        barWidth:18,
        itemStyle:{
          normal:{
            color: '#e55954',
            barBorderRadius: 3
          },
          emphasis: {
            barBorderRadius: 3
          },
        },
        data: [21, 52, 33, 32, 10]
      }, {
        name: '设备总线',
        type: 'line',
        smooth:true,
        label: {
          normal: {
            show: true,
            position: 'top',
          }
        },
        lineStyle: {
          normal: {
            width: 3,
            color:'#d9e501',
            shadowColor: 'rgba(201,233,247,0.4)',
            shadowBlur: 4,
            shadowOffsetY: 4
          }
        },
      itemStyle:{
        normal:{
          color:'#d9e501'
        },
        symbol:'#5882ff',
      },
      data: [110, 103, 87, 65, 85]
      }]
  };
  bar1Chart.setOption(option);
// }