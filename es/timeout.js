console.log('start');

setTimeout(() => console.log('1'), 2000);
setTimeout(() => console.log('2'), 0);
setTimeout(() => console.log('3'), 1000);

console.log('end');