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
function compute_chain_median(collection) {
  //在这里写入代码
  var str='0';
  var temp=new Array();
  for(var i=0;i<collection.length;i++)                           // 该循环将字符串中的数字提取出来存入temp数组中。
  {                                                              // 遍历字符串，若是数字则拼接到str之后，若遇到‘-’则将str转换为数字
    if(collection[i]!='-'&&collection[i]!='>')                   // 存入数组temp中，并将str重置，i++跳过'>'
      str+=collection[i];
    else
    {
      temp.push(Number(str));
      i++;
      var str='0';
    }
    if(i==collection.length-1)  temp.push(Number(str));          //对最后一个数字的修正
  }
  var result=compute_median(temp);
  return result;
}

module.exports = compute_chain_median;
