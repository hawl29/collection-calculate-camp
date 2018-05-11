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
function rebuild_uneven(collection)
{

  //在这里写入代码
  var output=new Array();
  for(var i=0;i<collection.length;i++)
  {
    if(collection[i]%2==1) output.push(collection[i]*3+5);
  }
  return output;
}

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  var temp=rebuild_uneven(collection);
  return calculate_elements_sum(temp);
}

module.exports = hybrid_operation_to_uneven;

