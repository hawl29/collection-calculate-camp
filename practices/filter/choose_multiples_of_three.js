'use strict';

function choose_multiples_of_three(collection)
{
  var output=new Array();
  for(var i=0;i<collection.length;i++)
  {
    if(collection[i]%3==0)
    {
      output.push(collection[i]);
    }
  }
  return output;
}

module.exports = choose_multiples_of_three;
