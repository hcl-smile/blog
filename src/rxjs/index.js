const { Observable, from } = require('rxjs');

// const observable = new Observable((subscriber) => {
//   subscriber.next(1);
//   subscriber.next(2);
//   subscriber.next(3);
//   setTimeout(() => {
//     subscriber.next(4);
//     subscriber.complete();
//   }, 1000);
// });

const observable = from([function fn() {}]);

observable.subscribe((x) => console.log(x, 'render'));
observable.subscribe((x) => console.log(x, 'xxx'));
observable.subscribe((x) => console.log(x, 'aaa'));
