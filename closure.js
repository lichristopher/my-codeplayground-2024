function closure() {
  let count = 0;
  function logCount() {
    console.log(count);
  }
  function increment() {
    count++;
  }
  return { logCount, increment };
}
