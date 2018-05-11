'use strict';

function collect_last_element(collection) {
  //在这里写入代码
  if(collection.length>0)
    var i=collection.length-1;
    var output=collection[i];
    return output;
}

module.exports = collect_last_element;
