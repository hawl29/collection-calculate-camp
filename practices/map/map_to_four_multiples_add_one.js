'use strict';
var map_to_four_multiples_add_one = function(collection)
{
  var output=new Array();
  for(var i=0;i<collection.length;i++)
  {
    output.push(collection[i]*4+1);
  }
  return output;
};

module.exports = map_to_four_multiples_add_one;
