import { Question } from "@/types/Question";

export const questions: Question[] = [
    {
        question: 'What is the purpose of the "use strict" directive in JavaScript?',
        options: [
            'It enables strict mode for the script or function in which it is placed.',
            'It makes JavaScript less strict and more forgiving.',
            'It allows the use of global variables without declaration.',
            'It disables all ES6 features.'
        ],
        answer: 0
    },
    {
        question: 'Which keyword is used to define a function in JavaScript?',
        options: [
            'func',
            'def',
            'function',
            'funct'
        ],
        answer: 2
    },
    {
        question: 'What does the "this" keyword refer to in a method?',
        options: [
            'The object that called the method',
            'The method itself',
            'The global object',
            'Undefined'
        ],
        answer: 0
    },
    {
        question: 'Which data type is not a primitive type in JavaScript?',
        options: [
            'Number',
            'String',
            'Object',
            'Boolean'
        ],
        answer: 2
    },
    {
        question: 'How do you declare a constant in JavaScript?',
        options: [
            'Use the "constant" keyword',
            'Use the "let" keyword',
            'Use the "var" keyword',
            'Use the "const" keyword'
        ],
        answer: 3
    },
    {
        question: 'What is the output of the following code? `console.log(5 + "5");`',
        options: [
            '10',
            '55',
            'Error',
            'undefined'
        ],
        answer: 1
    },
    {
        question: 'What is the difference between "==" and "===" in JavaScript?',
        options: [
            'They are the same.',
            'Both compare value and type, but "===" is strict.',
            '"==" compares value and type, while "===" only compares value.',
            '"==" compares value loosely, while "===" compares value and type strictly.'
        ],
        answer: 3
    },
    {
        question: 'What is the correct way to create an object in JavaScript?',
        options: [
            'const obj = [key: value];',
            'const obj = {key: value};',
            'const obj = (key: value);',
            'const obj = key: value;'
        ],
        answer: 1
    },
    {
        question: 'Which function is used to remove the last item from an array in JavaScript?',
        options: [
            'pop()',
            'push()',
            'shift()',
            'unshift()'
        ],
        answer: 0
    },
    {
        question: 'Which event is triggered when a user clicks an element in JavaScript?',
        options: [
            'mouseover',
            'mouseout',
            'click',
            'mousedown'
        ],
        answer: 2
    },
    {
        question: 'What does JSON stand for?',
        options: [
            'JavaScript Output Notation',
            'JavaScript Object Notation',
            'JavaScript Only Notation',
            'JavaScript Object Nodes'
        ],
        answer: 1
    },
    {
        question: 'What is the purpose of the "try" statement in JavaScript?',
        options: [
            'To handle synchronous errors',
            'To handle asynchronous errors',
            'To handle both synchronous and asynchronous errors',
            'To execute code without error handling'
        ],
        answer: 0
    },
    {
        question: 'Which method is used to convert an array to a string in JavaScript?',
        options: [
            'split()',
            'join()',
            'concat()',
            'toString()'
        ],
        answer: 3
    },
    {
        question: 'Which loop is used to iterate over the properties of an object in JavaScript?',
        options: [
            'for loop',
            'while loop',
            'do-while loop',
            'for...in loop'
        ],
        answer: 3
    },
    {
        question: 'Which method is used to merge arrays in JavaScript?',
        options: [
            'push()',
            'concat()',
            'merge()',
            'join()'
        ],
        answer: 1
    },
    {
        question: 'What does the "null" value represent in JavaScript?',
        options: [
            'An empty array',
            'A non-existent or invalid value',
            'A zero value',
            'An undefined variable'
        ],
        answer: 1
    },
    {
        question: 'What is a promise in JavaScript?',
        options: [
            'A built-in object for making HTTP requests',
            'A function that resolves when a condition is met',
            'An object representing the eventual completion or failure of an asynchronous operation',
            'A type of loop in JavaScript'
        ],
        answer: 2
    },
    {
        question: 'Which loop is best used for iterating over an array in JavaScript?',
        options: [
            'while loop',
            'for loop',
            'do-while loop',
            'for...of loop'
        ],
        answer: 3
    },
    {
        question: 'Which keyword is used to handle errors in JavaScript?',
        options: [
            'catch',
            'handle',
            'throw',
            'error'
        ],
        answer: 0
    },
    {
        question: 'What is the purpose of the "event.preventDefault()" method in JavaScript?',
        options: [
            'It stops the event from propagating further.',
            'It prevents the default action of the event.',
            'It prevents errors from occurring.',
            'It prevents the page from loading.'
        ],
        answer: 1
    },
    {
        question: 'What is the purpose of the "finally" block in JavaScript?',
        options: [
            'It is executed only if an error occurs.',
            'It is executed only if no error occurs.',
            'It is executed regardless of whether an error occurs.',
            'It is not used in JavaScript.'
        ],
        answer: 2
    },
    {
        question: 'What is the difference between "let" and "var" in JavaScript?',
        options: [
            '"let" has block-level scope while "var" has function-level scope.',
            '"let" has function-level scope while "var" has block-level scope.',
            'They are identical in terms of scope.',
            '"var" is newer than "let".'
        ],
        answer: 0
    },
    {
        question: 'What is the output of the following code? `console.log("5" - 3);`',
        options: [
            '2',
            '53',
            'Error',
            'undefined'
        ],
        answer: 0
    },
    {
        question: 'Which method is used to add an element to the beginning of an array in JavaScript?',
        options: [
            'push()',
            'pop()',
            'shift()',
            'unshift()'
        ],
        answer: 3
    },
    {
        question: 'What is the purpose of the "setTimeout()" function in JavaScript?',
        options: [
            'To pause the execution of code for a set amount of time',
            'To execute a function after a set amount of time',
            'To repeat a function at regular intervals',
            'To stop a function from executing'
        ],
        answer: 1
    },
    {
        question: 'How do you declare a class in JavaScript?',
        options: [
            'Use the "class" keyword',
            'Use the "object" keyword',
            'Use the "constructor" keyword',
            'Use the "function" keyword'
        ],
        answer: 0
    },
    {
        question: 'What is the purpose of the "Array.prototype.map()" method?',
        options: [
            'To iterate over an array and perform a function on each element',
            'To filter elements in an array based on a condition',
            'To concatenate two arrays',
            'To reverse the order of elements in an array'
        ],
        answer: 0
    },
    {
        question: 'What is the purpose of the "bind()" method in JavaScript?',
        options: [
            'To bind one function to another',
            'To bind an object to a function, setting the value of "this"',
            'To bind an event to a DOM element',
            'To bind one variable to another'
        ],
        answer: 1
    },
    {
        question: 'What is the result of the expression `typeof []` in JavaScript?',
        options: [
            '"array"',
            '"object"',
            '"function"',
            '"undefined"'
        ],
        answer: 1
    },
    {
        question: 'What is the purpose of the "filter()" method in JavaScript?',
        options: [
            'To iterate over an array and filter elements based on a condition',
            'To concatenate two arrays',
            'To reverse the order of elements in an array',
            'To sort an array in ascending or descending order'
        ],
        answer: 0
    }
];
