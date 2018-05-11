'use strict';

function choose_no_common_elements(collection_a, collection_b)
{
  var output=new Array();
  for(var i=0;i<collection_a.length;i++)
  {
    for(var j=0;j<collection_b.length;j++)
    {
      if(collection_a[i]==collection_b[j])
        break;
    }
    if(j==collection_b.length)
      output.push(collection_a[i]);
  }
  return output;
}

module.exports = choose_no_common_elements;
