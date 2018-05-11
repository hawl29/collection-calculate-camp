'use strict';
var rank_desc = function(collection)
{
  var output=collection;
  var temp;
  for(var i=1;i<collection.length;i++)                    //直插排序
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
var even_asc_odd_desc = function(collection)
{
   var temp=rank_desc(collection);
   var result=new Array(collection.length);
   var i,p,q;
   for(i=0,p=0,q=temp.length-1;i<temp.length;i++)
   {
     if(temp[i]%2==0)
     {
       result[p]=temp[i];
       p++;
     }
     else
     {
       result[q]=temp[i];
       q--;
     }
   }
   return result;

};
module.exports = even_asc_odd_desc;
