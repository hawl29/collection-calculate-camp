'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  var output=new Array();
  for(var i=0;i<collection_b.length;i++)
  {
    for(var j=0;j<collection_a.length;j++)
    {
      if (collection_b[i] == collection_a[j])
      {
         output.push(collection_b[i]);
      }
    }
  }
  return output;
}

module.exports = get_intersection;
