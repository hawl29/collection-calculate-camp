'use strict';
function compute_average(collection) {
  //在这里写入代码
  var sum=0;
  for(var i=0;i<collection.length;i++)
  {
    sum+=collection[i];
  }
  return sum/collection.length;
}
function choose_uneven(collection)
{
  var output=new Array();
  for(var i=0;i<collection.length;i++)
  {
    if(collection[i]%2==1)
    {
      output.push(collection[i]);
    }
  }
  return output;
}
function average_uneven(collection)
{
   var temp=choose_uneven(collection);
   var ave=compute_average(temp);
   return ave;

}

module.exports = average_uneven;
