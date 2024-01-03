// ------------------------------------------------------JavaScript Cards-------------------------------------------------------------------- //
export const JSTopics = [
    {
      link : '',
      imgsrc : '../images/JavaScript/variables.jpg',
      h3 : 'Variables',
      para : [
        {p : '‣ Variables are Containers for Storing Data'},
        {p : '‣ JavaScript Variables can be declared in 4 ways:'},
        {p : '● Automatically '},
        {p : '● var'},
        {p : '● let'},
        {p : '● const'}
      ]
    },
    {
      link : '',
      imgsrc : '../images/JavaScript/datatypes.jpg',
      h3 : 'Data Types',
      para : [
        {p : '‣ JavaScript provides different data types to hold different types of values.'},
        {P : 'There are two types of data types in JavaScript.'},
        {p : '1. Primitive data type'},
        {p : '2. Non-primitive (reference) data type'},
      ]
    },
    {
      link : '',
      imgsrc : '../images/JavaScript/operators.jpg',
      h3 : 'Operators',
      para : [
        {p : '‣ JavaScript operators are symbols that are used to perform operations on operands.'},
        {p : '1. Assignment Operators'},
        {p : '2. Arithmetic Operators'},
        {p : '3. Comparison (Relational) Operators'},
        {p : '4. Logical Operators'},
        {p : '5. Bitwise Operators'},
        {p : '6. String Operators'},     
      ]
    },
    {
      link : '',
      imgsrc : '../images/JavaScript/typeConversion.jpg',
      h3 : ' Type Conversions',
      para : [
        {p : '‣ In programming, type conversion is the process of converting data of one type to another. For example: converting String data to Number.'},
        {p : '● Implicit Conversion - automatic type conversion'},
        {p : '● Explicit Conversion - manual type conversion'},      
    ]
    },
    {
      link : '',
      imgsrc : '../images/JavaScript/conditionalStatements.png',
      h3 : 'conditional statements',
      para : [
        {p : '‣ Conditional statements in JavaScript allow you to execute specific blocks of code based on conditions. If the condition meets then a particular block of action will be executed otherwise it will execute another block of action that satisfies that particular condition'},
        {p : '1. If statement'},
        {p : '2. else statement'},
        {p : '3. else if statement'},
        {p : '4. switch statement'},
        {p : '5. Ternary Operator'}
        
      ]
    },
      {
      link : '',
      imgsrc : '../images/JavaScript/loops.jpg',
      h3 : ' Loops ',
      para : [
        {p : '‣ Loops offer a quick and easy way to do something repeatedly.'},
        {p : '● For, for in, for of, Break, try-catch, continue, block'},
        {p : '●  While, do while.'},
        
      ]
    },
    {
      link : '',
      imgsrc : '../images/JavaScript/functions.png',
      h3 : 'Functions',
      para : [
        {p : '‣ JavaScript function is a set of statements that take inputs, do some specific computation, and produce output.'},
        {p : ''},
        {p : 'Function declaration'},
        {p : 'Function Expression'},
        {p : 'Arrow Function'},
        {p : 'immediate invoked'},
        
      ]
    },
    {
      link : '',
      imgsrc : '../images/JavaScript/objects.jpg',
      h3 : 'Objects',
      para : [
        {p : '‣ A javaScript object is an entity having state and behavior (properties and method). For example: car, pen, bike, chair, glass, keyboard, monitor etc.'},
        {p : '‣ JavaScript is an object-based language. Everything is an object in JavaScript.'},
        {p : "‣ JavaScript is template based not class based. Here, we don't create class to get the object. But, we direct create objects'"},
        {p : ' Definition, Methods, Constructors, Accessors'},
        
      ]
    },
    {
      link : '',
      imgsrc : '../images/JavaScript/array.jpg',
      h3 : ' Arrays',
      para : [
        {p : '‣ JavaScript Array is a single variable that is used to store elements of different data types. JavaScript arrays are zero-indexed. Javascript Arrays are not associative in nature.'},
        {p : ' Array Methods'},
        {p : 'Array sort'},
        {p : 'Array iteration'},
        
      ]
    },
    {
      link : '',
      imgsrc : '../images/JavaScript/events.jpg',
      h3 : 'Events',
      para : [
        {p : '‣ Javascript has events to provide a dynamic interface to a webpage. These events are hooked to elements in the Document Object Model(DOM). '},
        {p : '● mouse events'},
        // {p : ' : mousedown, mouseup, click, dblclick, mousemove, mouseover, mousewheel, mouseout, contextmenu'},
        {p : '● touch events'},
        // {p : ' : touchstart, touchmove, touchend, touchcancel.'},
        {p : '● keyboard events'},
        // {p : ': keydown, keypress, keyup. form events: focus, blur, change, submit.'},
        {p : ''},
        {p : '● Form events'},
        {p : '● Window events'},
        {p : '● Drag events'},
        {p : '● Media events'},
        {p : '● other events'}
      ]
    },
    {
      link : '',
      imgsrc : '../images/JavaScript/numbers.jpg',
      h3 : 'Numbers',
      para : [
        {p : '‣ The JavaScript number object enables you to represent a numeric value. It may be integer or floating-point. JavaScript number object follows IEEE standard to represent the floating-point numbers.'},
        {p : ''},
        
      ]
    },
    {
      link : '',
      imgsrc : '../images/JavaScript/string.jpg',
      h3 : 'String',
      para : [
        {p : '‣ The String object is used to represent and manipulate a sequence of characters.'},
        {p : '1. methods'},
        {p : '2. Search'},
        {p : '3. Templates'},      
      ]
    },
    {
      link : '',
      imgsrc : '../images/JavaScript/scopenclouser.jpg',
      h3 : 'Scope & Clouser',
      para : [
        {p : '‣ A scope can be defined as the region of the execution, a region where the expressions and values can be referenced.'},
        {p : '● Global Scope'},
        // {p : ': In the global scope, the variable can be accessed from any part of the JavaScript code.'},
        {p : '● Local Scope'},
        // {p : ': In the local scope, the variable can be accessed within a function where it is declared.'},
        {p : '● Block'},
        
        // {p : '‣ Closures allow a function to access variables from its enclosing scope, even after that scope has finished executing.'},
        {p : '‣ Closure is created when a child function keep the environment of the parent scope even after the parent function has already executed '},
      ]
    },
    {
      link : '',
      imgsrc : '../images/JavaScript/hoisting.png',
      h3 : 'Hoisting',
      para : [
        {p : "‣ In JavaScript, hoisting allows you to use functions and variables before they're declared"},
        
      ]
    },
    {
      link : '',
      imgsrc : '../images/JavaScript/get&set.jpg',
      h3 : 'Get method & Set method',
      para : [
        {p : '‣ The Set object lets you store unique values of any type, whether primitive values or object references.'},
        {p : '‣ The get syntax binds an object property to a function that will be called when that property is looked up. '},      
      ]
    },
    {
      link : '',
      imgsrc : '../images/JavaScript/this.png',
      h3 : 'this.',
      para : [
        {p : "‣ The 'this' keyword in JavaScript refers to the currently calling object. It is commonly used in constructors to assign values to object properties"},
        // {p : '‣ “This” keyword refers to an object that is executing the current piece of code. It references the object that is executing the current function. If the function being referenced is a regular function, “this” references the global object. If the function that is being referenced is a method in an object, “this” references the object itself.'},
        
      ]
    },
    {
      link : '',
      imgsrc : '../images/JavaScript/modules.jpg',
      h3 : 'Modules',
      para : [
        {p : '‣ As our program grows bigger, it may contain many lines of code. Instead of putting everything in a single file, you can use modules to separate codes in separate files as per their functionality. This makes our code organized and easier to maintain.'},
        {p : "‣ Module is a file that contains code to perform a specific task. A module may contain variables, functions, classes etc. Let's see an example"},      
      ]
    },
    {
      link : '',
      imgsrc : '../images/JavaScript/debugging.png',
      h3 : 'Debugging',
      para : [
        {p : "‣ Sometimes a code may contain certain mistakes. Being a scripting language, JavaScript didn't show any error message in a browser. But these mistakes can affect the output."},
        {p : 'The best practice to find out the error is to debug the code. The code can be debugged easily by using web browsers like Google Chrome, Mozilla Firebox.'},     
      ]
    },
    {
      link : '',
      imgsrc : '../images/JavaScript/reserved.jpg',
      h3 : 'Reserved Key Words',
      para : [
        {p : '‣ In JavaScript, you cannot use these reserved words as variable names, label names, or function names.'},      
      ]
    },
    {
      link : '',
      imgsrc : '../images/JavaScript/setMap.jpg',
      h3 : 'Sets and Maps',
      para : [
        {p : '‣ In JavaScript, Set and Map are two types of objects that are used for storing data in an ordered manner.'},
        {p : '‣ Both these data structures are used to store distinct types of data inside the same object.'},
        {p : '‣ In Maps, the data is stored as a key-value pair whereas in Set data is a single collection of values that are unique.'},      
      ]
    },
    {
      link : '',
      imgsrc : '../images/JavaScript/json.jpg',
      h3 : ' JSON',
      para : [
        {p : '‣ The JavaScript JSON is an acronym of JavaScript Object Notation. It provides a format for storing and transporting data. It is a lightweight human readable collection of data that can be accessed in a logical manner.'},
        {p : '● It generates and stores the data from user input.'},
        {p : '● It can transport the data from the server to client, client to server, and server to server.'},
        {p : '● It can also build and verifying the data.'},
      ]
    },
    {
      link : '',
      imgsrc : '../images/JavaScript/asyncawait.png',
      h3 : 'Async/Await',
      para : [           
        {p : '‣ Async simply allows us to write promises-based code as if it was synchronous and it checks that we are not breaking the execution thread.'}, 
        {p : '‣ "async and await make promises easier to write"'},
        {p : '● async makes a function return a Promise'},
        {p : '● await makes a function wait for a Promise'},
      ]
    },
    {
      link : '',
      imgsrc : '../images/JavaScript/callback.png',
      h3 : 'Call-back',
      para : [
        {p : '‣ A callback is a function passed as an argument to another function. This technique allows a function to call another function. A callback function can run after another function has finished.'},
        {p : 'syntax : (x) => x >= 0'},      
      ]
    },
    {
      link : '',
      imgsrc : '../images/JavaScript/class.png',
      h3 : 'Class',
      para : [
        {p : '‣ Classes are in fact "special functions", and just as you can define function expressions and function declarations, a class can be defined in two ways: a class expression or a class declaration.'},
        {p : '● A class is a type of object template.'},
        {p : '● The class statement initiates a JavaScript class.'},
        {p : '● Properties and methods are assigned in the constructor() method.'},
        {p : '● The constructor() method is called each time a class object is initialized.'},
        
      ]
    },
    {
      link : '',
      imgsrc : '../images/JavaScript/strict1.jpg',
      h3 : 'Strict Mode JS',
      para : [
        {p : "‣ In JavaScript, 'use strict'; states that the code should be executed in 'strict mode'. This makes it easier to write good and secure JS code. "},
        {p : '‣ Being a scripting language, sometimes the JavaScript code displays the correct result even it has some errors. To overcome this problem we can use the JavaScript strict mode.'},
        {p : '‣ The JavaScript provides "use strict"; expression to enable the strict mode. If there is any silent error or mistake in the code, it throws an error.'},
        {p : ''},
        
      ]
    },
    // {
    //   link : '',
    //   imgsrc : '../images/JavaScript/dom.jpg',
    //   h3 : 'JavaScript DOM',
    //   para : [
    //     {p : '‣ The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.'},
    //     {p : ''},
    //     {p : ''},
    //     {p : ''},
        
    //   ]
    // },
    // {
    //   link : '',
    //   imgsrc : '../images/JavaScript/.jpg',
    //   h3 : '',
    //   para : [
    //     {p : ''},
    //     {p : ''},
    //     {p : ''},
    //     {p : ''},
        
    //   ]
    // },
  ];
  
// ------------------------------------------------------JavaScript Cards-------------------------------------------------------------------- //
  
// ------------------------------------------------------------- React-F A Q --------------------------------------------------------------------//

export const JSfaq = [
  {
    title : 'Questions - 3',
    desc: [{a : ''}],
    word : [{t :''}],
    output : [{p : ''}]
  },
  {
    title: "1. W.A.P to find largest of 3 numbers using else if statement?",
    desc: [
      {a : 'let x = 100;'},
      {a : 'let y = 180;'},
      {a : 'let z = 54;'},
      {a : 'if (x >= y && x >= z) {'},
      {a : '{'},
      {a : '     console.log(`Largest fo three is : ${x}`);'},
      {a : '} else if (y >= x && y >= z) {'},
      {a : '    console.log(`Largest fo three is : ${y}`);'},
      {a : '} else {'},
      {a : '    console.log(`Largest fo three is : ${z}`);'},
      {a : '}'},
    ],
    word : [{t:'output'}],
    output : [
      {p : 'Largest fo three is : 180'},
    ],
  },
  {
    title: "2. W.A.P to find smallest of 3 numbers using else if statement?",
    desc: [
      {a : 'let x = 100;'},
      {a : 'let y = 180;'},
      {a : 'let z = 54;'},
      {a : 'if (x <= y && x <= z) {'},
      {a : '{'},
      {a : '     console.log(`Largest fo three is : ${x}`);'},
      {a : '} else if (y <= x && y <= z) {'},
      {a : '    console.log(`Largest fo three is : ${y}`);'},
      {a : '} else {'},
      {a : '    console.log(`Largest fo three is : ${z}`);'},
      {a : '}'},
    ],
    word : [{t:'output'}],
    output : [
      {p : 'Smallest fo three is : 54'}
    ],
  },
  {
    title: "3. W.A.P to find greatest number among 2 number using if else statement?",
        desc: [
      {a : 'let a = 654;'},
      {a : 'let b = 32545;'},
      {a : 'if (a > b) {'},
      {a : '    console.log("Gratest value is : " + a);'},
      {a : '} else {'},
      {a : '    console.log("Gratest value is : " + b);'},
      {a : '} '},
    ],
    word : [{t:'output'}],
    output : [
      {p : 'Gratest value is : 32545'}
    ]
  },
  {
    title: "4. W.A.P to display age and height of a person?",
        desc: [
      {a : 'var age = 18;'},
      {a : 'var height = 6;'},
      {a : 'console.log("You entered:\nAge: " + age + " years\nHeight: " + height + " ft");'},
    ],
    word : [{t:'output'}],
    output : [
      {p : 'You entered:'},
      {p : 'Age: 18 years'},
      {p : 'Height: 6 ft'},
    ]
  },
  {
    title: "5. W.A.P to calculate arithmetic operations using switch statement?",
        desc: [
      {a : 'var number1 = 654;'},
      {a : 'var number2 = 54;'},
      {a : "operator  = ('addition');"},
      {a : 'switch (operator) {'},
      {a : '  case "addition":'},
      {a : '    console.log(number1 + number2);'},
      {a : '    break;'},
      {a : '  case "subtraction":'},
      {a : '    console.log(number1 - number2);'},
      {a : '    break;'},
      {a : 'default:'},
      {a : '    console.log("Invalid operation choice");'},
      {a : '}'},
    ],
    word : [{t:'output'}],
    output : [
      {p : '708'},
    ]
  },
  {
    title: "6. W.A.P to check person is eligible to vote or not if else statement?",
        desc: [
      {a : 'var age = 65;'},
      {a : ' '},
      {a : 'if (age >= 18) {'},
      {a : '  console.log("You are eligible to vote. Go ahead and cast your vote!");'},
      {a : '} else {'},
      {a : '  console.log("Sorry, you are not eligible to vote. You must be 18 years or older.");'},
      {a : '}'},
    ],
    word : [{t:'output'}],
    output : [
      {p : 'You are eligible to vote. Go ahead and cast your vote!'},
    ]
  },
  {
    title: " 7. W.A.P to add two numbers using function in js?",
      desc: [
      {a : 'function add(num1, num2) {'},
      {a : '    console.log(num1 + num2);'},
      {a : '}'},
      {a : 'add(10,30);'},
    ],
    word : [{t:'output'}],
    output : [
      {p : '40'},
    ]
  },
  {
    title: " 8. W.A.P to find square of a number using function in js?",
      desc: [
      {a : 'function square(num1) {'},
      {a : '    console.log(num1 * num1);'},
      {a : '}'},
      {a : 'square(5);'},
    ],
    word : [{t:'output'}],
    output : [
      {p : '25'},
    ]
  },
  {
    title: "9. W.A.P to calculate simple interest using function in js?",
      desc: [
      {a : 'function intrest(p, t, r) {'},
      {a : '    console.log((p*t*r)/100);'},
      {a : '}'},
      {a : 'intrest(64, 5, 6);'},
    ],
    word : [{t:'output'}],
    output : [
      {p : '19.2'},
    ]
  },
  {
    title: " 10)W.A.P to check if a number is even using Arrow functions?",
        desc: [
      {a : 'const findEven = (num) => {'},
      {a : '    if (num % 2 == 0) {'},
      {a : '        console.log(`${num} is even`);'},
      {a : '    } else {'},
      {a : '        console.log(`${num} is odd`);'},
      {a : '    }'},
      {a : '}'},
      {a : 'findEven(5)'},
    ],
    word : [{t:'output'}],
    output : [
      {p : '5 is odd'}
    ]
  },
  // {
  //   title: "",
  //       desc: [
  //     {a : ''},
  //     {a : ''},
  //     {a : ''},
  //     {a : ''},
  //     {a : ''},
  //   ],
  //   word : [{t:'output'}],
  //   output : [
  //     {p : ''},
  //     {p : ''}
  //   ]
  // },
  // {
  //   title: "",
  //       desc: [
  //     {a : ''},
  //     {a : ''},
  //     {a : ''},
  //     {a : ''},
  //     {a : ''},
  //   ],
  //   word : [{t:'output'}],
  //   output : [
  //     {p : ''},
  //     {p : ''}
  //   ]
  // },
];

// ------------------------------------------------------------- F A Q --------------------------------------------------------------------//