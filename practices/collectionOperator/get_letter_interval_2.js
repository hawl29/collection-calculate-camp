'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  var letter_table=['','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var output=new Array();
  var a=number_a,b=number_b;
  var i,m,n,temp;
  if(a>0&&b>0)
  {
    if(a > b)
    {
      for (i = a; i >= b; i--)
      {
        m = Math.floor(i / 26);
        n = i - (m * 26);
        if (n == 0) m = m - 1, n = 26;//对 26,52...等能被26整除的位号的修正
        temp = letter_table[m] + letter_table[n];
        output.push(temp);
      }
    }
    else if (a < b)
    {
      for (i = a; i <= b; i++)
      {
        m = Math.floor(i / 26);
        n = i - (m * 26);
        if (n == 0) m = m - 1, n = 26; //对 26,52...等能被26整除的位号的修正
        temp = letter_table[m] + letter_table[n];
        output.push(temp);
      }
    }
    else if (a == b)
    {
      m = Math.floor(a / 26);
      n = a - (m * 26);
      if (n == 0) m = m - 1, n = 26;//对 26,52...等能被26整除的位号的修正
      temp = letter_table[m] + letter_table[n];
      output.push(temp);
    }
  }
  return output;
}

module.exports = get_letter_interval_2;

