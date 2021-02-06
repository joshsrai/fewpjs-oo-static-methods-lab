class Formatter {
  //add static methods here

static capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

static sanitize(str) {
  return str.replace(/[^A-Za-z0-9- ']+/g, '');
}

static titleize(str) {
  let newArr = []
  let arr = str.split(' ')
  newArr.push(arr[0].charAt(0).toUpperCase() + arr[0].slice(1))
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== 'the' && arr[i] !== 'a' && arr[i] !== 'an' && arr[i] !== 'but' && arr[i] !== 'of' && arr[i] !== 'and' && arr[i] !== 'for' && arr[i] !== 'at' && arr[i] !== 'by' && arr[i] !== 'from') {
      newArr.push(Formatter.capitalize(arr[i]))
    } else {
      newArr.push(arr[i])
    }
  }
  return newArr.join(' ')
}



}