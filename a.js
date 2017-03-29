
function isJSON (str, pass_object) {
  // if (pass_object && isObject(str)) return true;
  //
  // if (!isString(str)) return false;

  str = str.replace(/\s/g, '').replace(/\n|\r/, '');
  console.log('str;', str);
  if (/^\{(.*?)\}$/.test(str))
    return /"(.*?)":(.*?)/g.test(str);

  if (/^\[(.*?)\]$/.test(str)) {
    return str.replace(/^\[/, '')
      .replace(/\]$/, '')
      .replace(/},{/g, '}\n{')
      .split(/\n/)
      .map(function (s) { return isJSON(s); })
      .reduce(function (prev, curr) { return !!curr; });
  }

  return false;
}

let a = `{'dk': "b  b",kk: [], 'lll': "dd"}`
let b = 'aaa'
let re = isJSON(b)
console.log(re);
