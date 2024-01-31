let obj = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }

const answer = Object.entries(obj).map(value => value.join(" ")).join(' ');

console.log(answer);