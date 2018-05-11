'use strict';

function double_to_one(collection)
{
  var output=new Array();
  var i,j;
  for(i=0;i<collection.length;i++)
  {
    if(collection[i].length>0)
    {
      for(var j=0;j<collection[i].length;j++)
      {
        output.push(collection[i][j]);
      }
    }
    else
      output.push(collection[i]);
  }
  for(i=0;i<output.length;i++)
  {
    for(j=i+1;j<output.length;j++)
    {
      if(output[i]==output[j])
      {
        for(var k=j+1;k<output.length;k++)
        {
           output[k-1]=output[k];
        }
        output.pop();
      }
    }
  }
  return output;

}

module.exports = double_to_one;
