function count_same_elements(collection) {
  //在这里写入代码
  var output=new Array();
  var count;
  var i=0;
  var str;
  while(i<collection.length)
  {
    count=0;
    for(var j=i;j<collection.length;j++)
    {
      if(collection[i].length>1)  //对长度大于1的字符分类讨论
      {
        count=collection[i].substr(-1,1);
        count=Number(count);      //强制类型转换
      }
      else if(collection[j]==collection[i])
        count++;
      else
        break;
    }
    var temp=new Object();  //为什么这句需要放在循环内才行？
    temp.key=collection[i].substr(0,1);
    temp.count=count;
    output.push(temp);
    i=j;
  }
  return output;
}

module.exports = count_same_elements;
