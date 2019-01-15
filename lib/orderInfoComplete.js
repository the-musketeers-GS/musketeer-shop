export default function(info) {
  // debugger;
  const checks = [
    'firstName',
    'lastName',
    'address1',
    'city',
    'zip',
    'country'
  ];
  for (let i = 0; i < checks.length; ++i) {
    if (info[checks[i]] === '') return false;
  }

  return true;
}
