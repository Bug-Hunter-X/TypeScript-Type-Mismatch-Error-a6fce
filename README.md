# TypeScript Type Mismatch Bug

This repository demonstrates a common TypeScript error: a type mismatch. The `add` function is defined to accept two numbers, but the code attempts to call it with a string and a number.  This results in a compile-time error.

## How to reproduce

1. Clone this repository.
2. Compile the code using the TypeScript compiler (tsc).
3. Observe the compiler error indicating the type mismatch.

## Solution

The solution is to ensure that the arguments passed to the `add` function are of the correct type (numbers).  This can be done through type checking, type conversion, or refactoring the function.