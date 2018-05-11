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
function create_updated_collection(collection_a, object_b)
{
  var collection_c=count_same_elements(collection_a);        //调用函数count_same_elements统计集合 collection_a中相同元素，将结果返回给collection_c
  var temp=object_b.value;
  for(var i=0;i<temp.length;i++)
  {
    for(var j=0;j<collection_c.length;j++)
    {
      if(temp[i]==collection_c[j].key)
      {
        var m=Math.floor(collection_c[j].count/3)
        collection_c[j].count-=m;
      }
    }
  }
  return collection_c;
}

module.exports = create_updated_collection;
