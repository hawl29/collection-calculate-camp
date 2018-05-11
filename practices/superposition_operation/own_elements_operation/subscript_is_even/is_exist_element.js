'use strict';
function choose_no_even_2(collection)             // 选出下标为偶数的元素
{
  var output=new Array();
  for(var i=0;i<collection.length;i++)
  {
    if(i%2==0)
    {
      output.push(collection[i]);
    }
  }
  return output;
}
var is_exist_element = function(collection,element)
{
  var conllection_no_even_2=choose_no_even_2(collection);
  for(var i=0;i<conllection_no_even_2.length;i++)
  {
      if(conllection_no_even_2[i]==element)  return true;
  }
  return false;
};
module.exports = is_exist_element;
