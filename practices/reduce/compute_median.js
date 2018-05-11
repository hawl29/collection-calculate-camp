'use strict';

function compute_median(collection) {
  //在这里写入代码
  var output=collection;
  var temp;
  for(var i=1;i<collection.length;i++)  //直插排序
  {
    temp = output[i];
    for (var j = i - 1; j >= 0 && output[j] > temp; j--) {
      output[j + 1] = output[j];
    }
    output[j + 1] = temp;
  }
  var n=collection.length;  //找中位数
  var mid;
  if(n%2==0)
  {
    n=n/2;
    mid=(collection[n]+collection[n-1])/2;
  }
  else
  {
    n=Math.floor(n/2);
    mid=collection[n];
  }
  return mid;
}

module.exports = compute_median;


