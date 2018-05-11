'use strict';
var rank_desc = function(collection)
{
  var output=collection;
  var temp;
  for(var i=1;i<collection.length;i++)  //直插排序
  {
    temp=output[i];
    for(var j=i-1;j>=0&&output[j]>temp;j--)
    {
       output[j+1]=output[j];
    }
    output[j+1]=temp;
  }
  return output;
};

module.exports = rank_desc;
