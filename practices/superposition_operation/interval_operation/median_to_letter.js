'use strict';
var number_map_to_word_over_26 = function(collection)          //数字映射字母
{
  var letter_table=['','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var output=new Array();
  var m,n,temp;
  for(var i=0;i<collection.length;i++)
  {
    m = Math.floor(collection[i]/26);
    n = collection[i] - (m * 26);
    if (n == 0) m = m - 1, n = 26;//对 26,52...等能被26整除的位号的修正
    temp = letter_table[m] + letter_table[n];
    output.push(temp);
  }
  return output;
};
function compute_median(collection) {
  //在这里写入代码
  var output=collection;
  var temp;
  for(var i=1;i<collection.length;i++)  //直插排序
  {
    temp = output[i];
    for (var j = i - 1; j >= 0 && output[j] > temp; j--) {
      output[j + 1] = output[j];
    }
    output[j + 1] = temp;
  }
  var n=collection.length;  //找中位数
  var mid;
  if(n%2==0)
  {
    n=n/2;
    mid=Math.ceil((collection[n]+collection[n-1])/2);
  }
  else
  {
    n=Math.floor(n/2);
    mid=collection[n];
  }
  return mid;
}
function median_to_letter(collection)
{
   var temp=new Array();
   temp.push(compute_median(collection));
   var result=number_map_to_word_over_26(temp);
   return result[0];
}

module.exports = median_to_letter;
