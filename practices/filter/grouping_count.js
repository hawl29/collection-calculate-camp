'use strict';

function grouping_count(collection)
{
  var output=new Array();
  var output_obj=new Object();
  var box=new Array(1000);
  var i;
  for(i=0;i<1000;i++) box[i]=0;
  for(i=0;i<collection.length;i++)
  {
    box[collection[i]]++;
  }
  for(i=0;i<1000;i++)
  {
    if(box[i]!=0)
      output.push(i);
  }
  for(i=0;i<output.length;i++)
  {
    output_obj[output[i]]=box[output[i]];
  }
  return output_obj;

}

module.exports = grouping_count;
