'use strict';
function map_to_even(collection)
{
  var output=new Array();
  for(var i=0;i<collection.length;i++)
  {
    output.push(collection[i]*2);
  }
  return output;
}
module.exports = map_to_even;
