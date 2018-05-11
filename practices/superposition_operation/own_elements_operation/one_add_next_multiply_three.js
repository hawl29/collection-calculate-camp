'use strict';
function one_add_next_multiply_three(collection)
{
  var output=new Array();
  for(var i=0;i<collection.length-1;i++)
  {
     var temp=(collection[i]+collection[i+1])*3;
     output.push(temp);
  }
  return output;
}
module.exports = one_add_next_multiply_three;
