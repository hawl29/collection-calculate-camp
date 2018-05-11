'use strict';
function choose_no_even(collection)
{
  var output=new Array();
  for(var i=0;i<collection.length;i++)
  {
    if((i+1)%2==0)
    {
      output.push(collection[i]);
    }
  }
  return output;
}
function compute_average(collection) {
  //在这里写入代码
  var sum=0;
  for(var i=0;i<collection.length;i++)
  {
    sum+=collection[i];
  }
  return sum/collection.length;
}
var calculate_average = function(collection){
    var collection_temp=choose_no_even(collection);
    var ave_even=compute_average(collection_temp);
    return ave_even;
};
module.exports = calculate_average;
