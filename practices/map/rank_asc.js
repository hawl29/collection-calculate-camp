'use strict';
var rank_asc = function(collection)
{
  var output=collection;
  var temp;
  for(var i=0;i<output.length;i++)  //冒泡排序
  {
    for(var j=0;j<output.length-i-1;j++)
    {
       if(output[j]<output[j+1])
       {
         temp=output[j];
         output[j]=output[j+1];
         output[j+1]=temp;
       }
    }
  }
  return output;
};

module.exports = rank_asc;
