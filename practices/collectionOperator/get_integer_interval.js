'use strict';

function get_integer_interval(number_a, number_b) {
  //在这里写入代码
  var output=new Array();
  var i;
  var a=number_a,b=number_b;
  if(a<b)
  {
    for (i=a;i<=b;i++)
      output.push(i);
  }
  else if(a>b)
  {
    for(i=a;i>=b;i--)
        output.push(i);
  }
  else
    output.push(a);
  return output;
}

module.exports = get_integer_interval;

