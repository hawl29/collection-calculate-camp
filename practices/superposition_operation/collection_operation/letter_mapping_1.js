'use strict';
var letter_table=[0,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
function even_to_letter(collection)
{
  var output=new Array();
  for(var i=0;i<collection.length;i++)
  {
    if(collection[i]%2==0)
    {
      output.push(letter_table[collection[i]]);
    }
  }
  return output;
}

module.exports = even_to_letter;
