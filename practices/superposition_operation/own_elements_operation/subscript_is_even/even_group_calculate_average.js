'use strict';
function choose_no_even(collection)                       //挑选第偶数个元素
{
  var output=new Array();
  for(var i=0;i<collection.length;i++)
  {
    if((i+1)%2==0)
    {
      output.push(collection[i]);
    }
  }
  return output;
}
function choose_even(collection)                          //挑选偶数
{
  var output=new Array();
  for(var i=0;i<collection.length;i++)
  {
    if(collection[i]%2==0)
    {
      output.push(collection[i]);
    }
  }
  return output;
}
function compute_average(collection) {
  //在这里写入代码
  var sum=0;
  for(var i=0;i<collection.length;i++)
  {
    sum+=collection[i];
  }
  return sum/collection.length;
}
var even_group_calculate_average = function(collection)
{
   var collection_temp_1=choose_no_even(collection);
   var collection_temp_2=choose_even(collection_temp_1);
   var col_1=new Array();                                              //保存1位数
   var col_2=new Array();                                              //保存2位数
   var col_3=new Array();                                              //保存3位数
   var result=new Array();                                             //保存输出
   for(var i=0;i<collection_temp_2.length;i++)
   {
       var  num=collection_temp_2[i];
       if(num/10<1)  col_1.push(num);
       else if(num/10<10) col_2.push(num) ;
       else if(num/10<100)  col_3.push(num);
   }
   if(collection_temp_2.length==0)   result.push(0);                   //如果collection中第偶数位置没有偶数，则输出[0]
   else
   {
     if(col_1.length != 0) result.push(compute_average(col_1));        //一次判断是否由1，2,3位数，若有则求出其平均值
     if (col_2.length != 0) result.push(compute_average(col_2));
     if (col_3.length != 0) result.push(compute_average(col_3));
   }
   return result;
};
module.exports = even_group_calculate_average;
