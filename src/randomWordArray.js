const randomWordArray = () => {
  let result           = '';
  const characters       = 'AABCDEEFGHIIJKLMNOOPQRSTUUVWXYZ';
  const charactersLength = characters.length;
  for ( var i = 0; i < 10; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result.split('');
}
const Resultarray = randomWordArray();

// export { randomWordArray };
export { Resultarray };