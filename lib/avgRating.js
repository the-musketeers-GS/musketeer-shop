export default function avgRating(array) {
  return array.reduce((a, b) => a + b) / array.length;
}
