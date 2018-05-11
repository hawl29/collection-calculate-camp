'use strict';
function calculate_elements_sum(collection) {
  //在这里写入代码
  var sum=0;
  for(var i=0;i<collection.length;i++)
  {
    sum+=collection[i];
  }
  return sum;
}
function choose_even(collection)
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
function amount_even(collection) {

  var temp=choose_even(collection);
  var add=calculate_elements_sum(temp);
  return add;
}

module.exports = amount_even;
