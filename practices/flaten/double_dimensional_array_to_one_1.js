'use strict';

function double_to_one(collection)
{
  var output=new Array();
  for(var i=0;i<collection.length;i++)
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
  return output;
}

module.exports = double_to_one;
