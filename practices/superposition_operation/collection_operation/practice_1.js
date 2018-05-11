'use strict';
function calculate_elements_sum(collection)
{
  //在这里写入代码
  var sum=0;
  for(var i=0;i<collection.length;i++)
  {
    sum+=collection[i];
  }
  return sum;
}
function hybrid_operation(collection)
{
  for(var i=0;i<collection.length;i++)
  {
    collection[i]=collection[i]*3+2;
  }
  var output=calculate_elements_sum(collection);
  return output;
}

module.exports = hybrid_operation;

