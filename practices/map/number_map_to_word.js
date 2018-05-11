'use strict';
var number_map_to_word = function(collection)
{
  //在这里写入代码
  var letter_table=['','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var output=new Array();
  var m,n,temp;
  for(var i=0;i<collection.length;i++)
  {
    m = Math.floor(collection[i]/26);
    n = collection[i]-(m * 26);
    if (n == 0) m = m - 1, n = 26;//对 26,52...等能被26整除的位号的修正
    temp = letter_table[m] + letter_table[n];
    output.push(temp);
  }
  return output;
};

module.exports = number_map_to_word;
