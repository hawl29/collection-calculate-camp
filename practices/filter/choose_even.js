'use strict';

function choose_even(collection)
{
  var output=new Array();
  for(var i=0;i<collection.length;i++)
  {
    if(collection[i]%2==0)
    {
      output.push(collection[i]);
    }
  }
  return output;
}

module.exports = choose_even;
