function count_same_elements(collection) {
  //在这里写入代码
  var output=new Array();
  var count;
  var i=0;
  var str;
  while(i<collection.length)                                         //注意到数组中字符均有序排列，用i记录遍历数组，
  {
    count=0;
    for(var j=i;j<collection.length;j++)                             //j从i位置开始，寻找i之后是否有相同字符
    {
      if(collection[j].substr(0,1)==collection[i].substr(0,1))       //判断i，j下标所指字符串的首字符是否相同，相同则开始计数
      {
        if (collection[j].length>1)                                  //判断j下标所指是否时一串字符
        {
          if(collection[j].substr(-1, 1)!=']')                      //判断j所指是否为x:[y]格式，若不是，则截取字符串中第2个到末尾的字符，并强制转换为数字
            count+=Number(collection[j].substr(2));
          else                                                      // 若j所指字符串为x:[y]格式，则截取字符串中第2个到倒数第1个的字符，并强制转换为数字
            count+=Number(collection[j].slice(2,collection[j].length-1));
        }
        else                                                       //若j下标所指为单个字符
          count++;
      }
      else
        break;
    }
    var temp=new Object();                                        //为什么这句需要放在循环内才行？
    temp.name=collection[i].substr(0,1);                          //将i所指字符串首字符放入 name 键值中，将count放入 summary 键值中
    temp.summary=count;
    output.push(temp);
    i=j;                                                          //将i重新定位到j所指位置，也就是i之后第一个与i所指字符串相异的位置。
  }
  return output;
}

module.exports = count_same_elements;
