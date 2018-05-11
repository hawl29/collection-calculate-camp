'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  var letter_table=['0','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var output=new Array();
  var a=number_a,b=number_b;
  var i;
  if(a>b && (a<=26 && b>=0))
  {
    for(i=a;i>=b;i--)
    {
      output.push(letter_table[i]);
    }
  }
  else if(a<b && (a>=0 && b<=26))
  {
    for(i=a;i<=b;i++)
    {
      output.push(letter_table[i]);
    }
  }
  else if(a==b)
      output.push(letter_table[a]);
  return output;
}

module.exports = get_letter_interval;
