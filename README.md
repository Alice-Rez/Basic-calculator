# Basic Calculator

## Description

[Live Demo](https://alice-rez.github.io/Basic-calculator/)

Small project that was done during my web development course just after 9 days of learning Javascript. Calculator was designed just for using mouse, not keyboard, and do not use _eval_ method. Details:

- Calculator has basic mathematic operations and modulo (placed at _%_ key)
- User can add decimal point just once
- Sign (_+/-_) of the number can be changed anytime during inserting of the numbers
- After getting result using _=_, user can continue in calculation using another operation key (the result will be used as first number in new calculation) or start new calculation by typing number
- User can also continue calculation without using _=_ just by clicking on the one of the operation keys
- All calculation can be also restarted using by _A/C_ key
- If the result of the operations has more characters that is possible to get at display, it will be displayed with scientific notation
- The operation, that was used last, is highlighted at the calculator

## Implementation

**Used technologies**: Vanilla JS, DOM, HTML, CSS,

**Basic principles:**

- I have two variables for numbers (number 1 and number two - they are both operands of the calculation) - both are types of string and one for operation (operator)
- After pressing of each number key, the value of the key is added at the end of string
- If the operation variable is still empty, the value will be add to number1, otherwise in number2
- After pressing operation key, its value is added to operation variable (but just in case the operation variable was empty when the key was pressed)
- After pressing _=_ or another operation key, the result is calculated and shown at display
- operation and number 2 are nulled, number1 is assigned value of result as a string
- decimal point is added to number just if the number does not include it already
- clicking on _+/-_ key means multiplying number by -1
