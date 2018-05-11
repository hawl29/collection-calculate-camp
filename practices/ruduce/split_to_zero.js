'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  var output=new  Array();
  output.push(number);
  while(number>0)
  {
    number=Math.round((number-interval)*10)/10; //number-interval 结果保留一位小数。
    output.push(number);
  }
  return output;
}

module.exports = spilt_to_zero;
