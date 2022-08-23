# lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install osallam/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function(head)`: returns the head of an array
* `function(tail)`: returns the tail of an array
* `function(middle)`: returns the middle of an array
* `function(assertArrayEqual)`: asserts arrays are equal
* `function(assertEqual)`: asserts if strings are equal
* `function(countLetters)`: counts Letters within a string and returns results
* `function(countOnly)`: count itmes within an array
* `function(eqArrays)`: compares if 2 arrays are equal
* `function(eqObjects)`: compares if 2 objects are equal
* `function(findKey)`: finds a key within an object
* `function(findKeybyValue)`: find a key by vale value within an object
* `function(flatten)`: flattens an array
* `function(map)`: * returns a new array based on the results of the callback function
