/*
  just replace the given character of given string
  by lowerCase, then substract the char by 97
  A B C D E ... 
  0 1 2 3 4 ...
  to know the column that the character begin with
  e.g. number of characters befroe C is 2 ----> 2 * width => 2 * 4 = column 8
*/
function AsciiArt(width, height, test, alphabet) {
  test = test.toLowerCase();

  let ans = "";
  for(let row = 0; row < height; row++)
  {
    for(let i = 0; i < test.length; i++)
    {
      let asc = test.charCodeAt(i) - 97;
      asc = (asc < 0 || asc > 25) ?
      alphabet[row].length - width :
      asc * width;

      ans +=  alphabet[row].slice(asc, asc + width);
    }
    if(row < height - 1)
      ans += "\n";
  }
  return ans;
}

module.exports = AsciiArt;
