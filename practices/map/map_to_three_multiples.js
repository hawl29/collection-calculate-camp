'use strict';
var map_to_three_multiples = function(collections)
{
  var output=new Array();
  for(var i=0;i<collections.length;i++)
  {
    output.push(collections[i]*3);
  }
  return output;
};

module.exports = map_to_three_multiples;
