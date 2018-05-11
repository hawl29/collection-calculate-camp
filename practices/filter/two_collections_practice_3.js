'use strict';

function choose_divisible_integer(collection_a, collection_b)
{
  var output=new Array();
  for(var i=0;i<collection_a.length;i++)
  {
    for(var j=0;j<collection_b.length;j++)
    {
      if(collection_a[i]%collection_b[j]==0)
        output.push(collection_a[i]);
    }
  }
  return output;
}

module.exports = choose_divisible_integer;
