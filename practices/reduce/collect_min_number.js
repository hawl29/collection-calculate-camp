'use strict';

function collect_min_number(collection) {
  var min=collection[0];
  for(var i=1;i<collection.length;i++)
  {
    if(collection[i]<min)
      min=collection[i];
  }
  return min;
}

module.exports = collect_min_number;

