'use strict';
var letter_table=[0,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
function compute_average(collection) {
  //在这里写入代码
  var sum=0;
  for(var i=0;i<collection.length;i++)
  {
    sum+=collection[i];
  }
  return sum/collection.length;
}
function average_to_letter(collection)
{
   var average=Math.ceil(compute_average(collection));  //调用函数compute_average计算出数组collection中元素的平均值
   return letter_table[average];

}

module.exports = average_to_letter;

