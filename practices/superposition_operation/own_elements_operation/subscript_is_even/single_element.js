'use strict';
function choose_no_even(collection) {
  var output = new Array();
  for (var i = 0; i < collection.length; i++) {
    if ((i + 1) % 2 == 0) {
      output.push(collection[i]);
    }
  }
  return output;
}
function choose_no_repeat_number(collection)
{
  var output=new Array();
  var box=new Array(1000);
  var i;
  for(i=0;i<1000;i++) box[i]=0;
  for(i=0;i<collection.length;i++)
  {
    box[collection[i]]++;
  }
  for(i=0;i<1000;i++)
  {
    if(box[i]==1)
      output.push(i);
  }
  return output;
}
var single_element = function(collection){
    var collection_no_even=choose_no_even(collection);
    var collection_temp=choose_no_repeat_number(collection_no_even);
    var result=new Array();
    for(var i=0;i<collection_no_even.length;i++)              //为了使最终输出的single元素的顺序与其在原序列中相同，使用两层for循环，
    {                                                         //外层遍历原始序列，内层遍历经初步筛选的single序列，将符合的元素输出到result中。
      for(var j=0;j<collection_temp.length;j++)
      {
        if(collection_temp[j]==collection_no_even[i])
          result.push(collection_temp[j]);
      }
    }
    return result;
};
module.exports = single_element;
