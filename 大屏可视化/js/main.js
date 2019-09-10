
$(function(){
 //天气
  //$('#J_weatherImg')
  $.ajax({
    type:'get',
      url:'js/weather.json',  // 这里改成后台请求天气的接口
      dataType:'json',
      success:function (result) {
      setWeatherDetail(result);
      },
    error:function (err) {
      console.log(err)
    }
    }
  )
});

function setWeatherDetail(result){
  console.log(result);
  var forecast=result.data.forecast[0]; //天气类型
  $('#J_city').text(result.cityInfo.city);
  $('#J_type').text(forecast.type);
  // $('#J_ymd').text(forecast.ymd);
  // $('#J_week').text(forecast.week);
  $('#J_wendu').text(result.data.wendu+'℃');
  $('#J_shidu').text('湿度：'+result.data.shidu);
  $('#J_fl').text('风力：'+forecast.fl);
  $('#J_pm').text('pm2.5：'+result.data.pm25);
  $('#J_quality').text(result.data.quality);
  $('#J_weatherImg').attr('src','images/weather1/'+forecast.type+'.png');
 /* switch (type){
    case '晴':
      console.log(1);
      break;
    case '多云':
      break;
    case '阴':
      break;
    case '阵雨':
      break;
    case '雷阵雨','雷阵雨并伴有冰雹':
      break;
    case '小雨','中雨','大雨':
      break;
    case '暴雨','大暴雨','特大暴雨':
      break;

    case '阵雪','小雪','中雪':
      break;
    case '大雪','暴雪':
      break;
    default: '';
  }*/
}