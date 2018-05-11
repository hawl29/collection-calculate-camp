'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  var output=new Array();
  for(var i=0;i<collection.length;i++)
  {
    if(collection[i]%2==1) output.push(collection[i]*3+2);
  }
  return output;
}

module.exports = hybrid_operation_to_uneven;

