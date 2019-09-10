var pie1=echarts.init(document.getElementById('J_pie1'));
var sdMax=100,sdMin=10,sdVal=40;   // 需要设置最大值，最小值，当前值
var perData=sdVal/(sdMin+sdMax);
if(perData>0.8) perData=0.8;
else if(perData<0.2) perData=0.2;
console.log(perData);
// 指定图表的配置项和数据
var optionPie1 = {
  series: [{
    type: 'liquidFill',
    data: [perData, perData],
    color:['#2BADFF', '#2676C8'],
    amplitude:10,
    radius: '71%',
    center:['31%','40%'],
    direction:'right',
    waveLength:80,
    outline:{
      show:false
    },
    backgroundStyle: {
      borderColor: '#294A98',
      borderWidth: 4,
      shadowColor: '#294A98',
      shadowBlur: 20,
      color: '#3F5CA3'
    },
    shape: 'path://M50 100 A 41 41, 0, 1, 0, 126 100 L 88 20 Z',

    label: {
      show:false,
    }
  }]};
// 使用刚指定的配置项和数据显示图表。
pie1.setOption(optionPie1);

$(function () {
  $('#J_max').text(sdMax+'%rh');
  $('#J_min').text(sdMin+'%rh');
  $('#J_val').text(sdVal+'%rh');
})