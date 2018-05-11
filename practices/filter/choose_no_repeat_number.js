'use strict';

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
    if(box[i]!=0)
      output.push(i);
  }
  return output;
}

module.exports = choose_no_repeat_number;
