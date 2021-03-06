# FunTry

Super lightweight Async/Sync function handler that provides a one liner replacement to traditional try...catch block.

## Installation

```shell
npm install @exivar/funtry
#or
yarn add @exivar/funtry
```

## Usage

Common Js

```js
const asyncTry = require('@exivar/funtry').asyncTry

// returns array [result, error]
var response = await asyncTry(<promise>);

if(response[1]) { //if error
  throw Error('this is error');
}

var result = response[0];

```

ES Module

```js
import {asyncTry, syncTry} from '@exivar/funtry';

const [result, error] = await asyncTry(<promise>);
if(error){
  // validate returned error and return a custom error;
  throw Error('custom error');
}
// or do something with result

```
