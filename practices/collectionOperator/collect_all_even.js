'use strict';

function collect_all_even(collection) {
  //在这里写入代码
  let output=new Array();
  for (let i=0;i<collection.length;i++)
  {
       if(collection[i]%2==0)
         output.push(collection[i]);
  }
  return output;
}

module.exports = collect_all_even;
