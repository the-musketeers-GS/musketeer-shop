export default function noUserCart(array) {
  let noUserCartObj = {};
  for (let i = 0; i < array.length; i++) {
    let key = array[i].toString();
    if (noUserCartObj[key]) {
      noUserCartObj[key]++;
    } else {
      noUserCartObj[key] = 1;
    }
  }
  return noUserCartObj;
}
