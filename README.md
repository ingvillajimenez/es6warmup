# Practice Some New ES6 Syntax

## How to Get Started

+ These directions assume you are comfortable using Node Package Manager (npm), GitHub, and Terminal.

+ Clone this repository from Github

+ Open Terminal and navigate to the es6_warmup/ directory

+ Make sure you have installed all needed packages

+ From the es6_warmup directory type on terminal `npm t` to run the tests

+ Open app.js and follow the directions at the top of the file

Note: Jasmine is used to run the tests. The first 6 tests should pass, the ES6 versions are the ones you should make pass You should see output similar to the following (you will see more failure details than this, I have truncated the output here) :

```sh
Started
......FFFFFF

Failures:
1) Es6 Version: it should swap the values for the given indices
  Message:
    Expected [ 1, 2, 3 ] to equal [ 2, 1, 3 ].
  Stack:
    Error: Expected [ 1, 2, 3 ] to equal [ 2, 1, 3 ].
        at Object.swapEs6Spec (/es6warmup/app.spec.js:41:17)


12 specs, 6 failures
Finished in 0.016 seconds
```
