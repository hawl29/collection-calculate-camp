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
function rank_by_two_large_one_small(collection){
  //这里写代码。。
  var temp;
  var collection_temp=rank_desc(collection);
  for(var i=0;i<collection_temp.length;i+=3)
  {
    if(i+2<collection_temp.length)
    {
      temp=collection_temp[i];
      collection_temp[i]=collection_temp[i+1];
      collection_temp[i + 1] = collection_temp[i + 2];
      collection_temp[i + 2] = temp;
    }
  }
  return collection_temp;
}
module.exports = rank_by_two_large_one_small;
