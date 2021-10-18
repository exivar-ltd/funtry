
import { asyncTry, syncTry } from '../lib/fnTry';

const promiseTrue = new Promise((resolve, _) => {
  setTimeout(()=>{
    resolve({ ok: true })
  }, 1000)
})
const promiseFalse = new Promise((_,reject) => {
  setTimeout(()=>{
    reject(Error('error'))
  }, 1000)
})
const functionTrue = (a: number,b: number) => a + b;
const functionFalse = (a: number,b: number) => Error('error');


test('Async Function Test Truthy', async () => {
  expect(await asyncTry(promiseTrue)).toEqual(expect.arrayContaining([{ok: true}, null]));
  expect(await asyncTry(promiseFalse)).toEqual(expect.arrayContaining([null, Error('error')]));
});
test('Async Function Test Falsy', async () => {
  expect(await asyncTry(promiseFalse)).toEqual(expect.arrayContaining([null, Error('error')]));
});

test('Function Test True', () => {
  expect(syncTry(functionTrue(1,2))).toEqual(expect.arrayContaining([3, null]));
});
test('Function Test False', () => {
  expect(syncTry(functionFalse(1,2))).toEqual(expect.arrayContaining([null, Error('error')]));
});
