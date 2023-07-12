#      **** MERN ****
## 1) What is the MERN stack?
Ans:- MERN stands for MongoDB, Express, React, Node, after the four key technologies that make up the stack.
- i)MongoDB — document database
- ii)Express(.js) — Node.js web framework
- iii)React(.js) — a client-side JavaScript Library 
- iv)Node(.js) — the premier JavaScript web server

## 2) How does the MERN stack work? 
Ans:-The MERN architecture allows you
to easily construct a three-tier architecture (front end, back end, database)
entirely using JavaScript and JSON

## 3) Is MERN a full-stack solution?
Ans:-Yes, MERN is a full stack, following the
traditional three-tier architectural pattern, including. 
- front-end tier (React.js),
- application tier (Express.js and Node.js), 
- database tier (MongoDB).

## 4) Why choose the MERN stack? 
Ans:-start with MongoDB, the document database at the root of the MERN stack. MongoDB was designed to store JSON data.

# **** Node.js ****
## 1. What is Node.js? Where can you use it?
Ans:- Node.js is an open-source, crossplatform JavaScript runtime environment and library to run web applications outside the client’s browser. It is used to create server-side web applications.

## 2. Why use Node.js? 
Ans:- Node.js makes building scalable network programs easy.
- It is generally fast 
- It rarely blocks 
- It offers a unified programming language and data type Everything is asynchronous 
- It yields great concurrency

## 3. How does Node.js work? 
Ans:- Clients send requests to the webserver to interact with the web application.
- Requests can be non-blocking or blocking:- Querying for data Deleting data Updating the data Node.js retrieves the incoming requests and adds those to the Event Queue The requests are then passed one-by-one through the Event Loop.

## 4. What are the features of NodeJS?
And:-Few features of NodeJS :-
- No buffering 
- Library used is JavaScript 
- Very fast in code execution 
- Single thread ascendibl

## 5. Why is Node.js Single-threaded? 
Ans :- Node.js is single-threaded for async processing. By
doing async processing on a single-thread under typical web loads, more performance and scalability can be achieved instead of the typical thread-based
implementation.

## 6. If Node.js is single-threaded, then how does it handle concurrency? 
Ans :- Single-Threaded Event Loop Model. JavaScript Eventbased model and the JavaScript callback system. A Node.js can easily manage more concurrent client requests. 

## 7. Explain callback in Node.js?
Ans :- A callback function is called after a given task. It allows other code to be run in the meantime and prevents any blocking. Being an asynchronous platform, Node.js heavily relies on callback. All APIs of Node are written to support callbacks.

## 8. How is Node.js most frequently used? 
Ans :- Node.js is widely used in the following
applications: Real-time chats Internet of Things Complex SPAs (Single-Page Applications)
Real-time collaboration tools Streaming applications Microservices architecture.

## 9. Why is Node.js preferred over other backend technologies like Java and PHP? 
Ans:- Node.js is very fast Node Package Manager has over 50,000 bundles available at
the developer’s disposal Perfect for data-intensive, real-time web applications,
as Node.js never waits for an API to return data Better synchronization of code
between server and client due to same code base Easy for web developers to start using Node.js.

##  10. What are some of the most commonly used libraries in Node.js? 
Ans:- There are two commonly used libraries in Node.js:
- ExpressJS :- Express is a flexible Node.js web application framework that provides a wide set of features to develop web and mobile applications. 
- Mongoose :- Mongoose is also a Node.js web application framework that makes it easy to connect an application to a database. 

## 11. What is the command used to import external libraries? 
Ans:- The “require” command is used for importing external libraries. 
- Ex:- “var http=require (“HTTP”).”  This will load the HTTP library and the single exported objectthrough the HTTP variable.

## 12. What is the control flow function? 
Ans:- The control flow function is a piece of
code that runs in between several asynchronous function calls.
## 13. How does control flow manage the function calls?
Ans:- function-calls.

## 14. Explain the concept of middleware in Node.js.?
Ans :- Middleware is a function that receives the request and response objects. Most tasks that the middleware functions perform are:
Execute any code Update or modify the request and the response objects Finish the request-response cycle Invoke the next middleware in the stack.
## 15. What are the different types of HTTP requests? 
Ans:- HTTP defines a set of request methods used to perform desired actions. The request methods include:
- GET: Used to retrieve the data
- POST: Generally used to make a change in state or reactions on the server
- HEAD: Similar to the GET method, but asks for the response without the response body
- DELETE: Used to delete the predetermined resource
## 16. How is Node.js better than other frameworks? 
Ans:- Node.js is a server-side JavaScript runtime environment built on top of the V8 JavaScript engine, the same engine that powers Google Chrome. It makes Node.js very fast and efficient, as well as highly scalable.

## 17. What is the difference between JavaScript and Node.js? 
Ans:- Node.js is a runtime environment for executing JavaScript code outside of a web browser,
while JavaScript is a programming language that can be executed in both web
browsers and Node.js environments.

## 18. Does Node run on Windows?
Ans:- Yes, Node.js runs on Windows. Node.js is a
cross-platform runtime environment, which means that it can run on a variety
of operating systems, including Windows, macOS, and Linux.
 
## 19. Can you access DOM in Node?
Ans:- No.
## 20. What are global objects in Node.js? 
Ans:- process, console, and buffer.

## 21. Why is ExpressJS used? 
Ans:- Express is a great choice for building web applications in Node.js, and its popularity and active community make it a safe and
reliable choice for developers of all levels.

## 22. What is an Event Emitter in Node.js? 
Ans:- An Event Emitter is a
Node.js module that facilitates communication between objects in a Node.js application. 

## 23. Where is package.json used in Node.js? 
Ans:- The package.json file is located in the root directory of an application and it is used by the npm package manager to install and manage the dependencies of an application.

## 24. Does Node.js provide any Debugger?
Ans:-  Yes.

#  **** Express.js ****
## 1) What is Express.js?
Ans:- Express.js is a freeopen-source,
lightweight, and fast backend web application framework for Node.js. Released as open-source software under the MIT License.

## 2) What is features of Express? 
Ans:- Express is a lightweight, and flexible Node.js web application framework, it provides a robust
set of features for web and mobile applications.

## 3) Is Express.js front-end or backend framework? 
Ans :- Express.js is a Node.js backend framework. It is mainly designed to develop complete web
applications (single-page, multi-page, and hybrid web applications).

## 4) Why do we use Express.js? 
Ans:- Express.js is an automatically prebuilt Node.js
framework. create server-side web applications faster. The main reason for choosing Express simplicity and flexibility.

## 5) What is the difference between Express.js and Node.js? 
- Node.js is an opensource, cross-platform run-time environment used for executing JavaScript code outside of a browser. Node.js is not a framework not programming language.

- Express.js is a lightweight and fast backend web application framework And Express.js is used to develop complete web applications such as singlepage, multi-page, and hybrid web applications and APIs.

## 6) Which template engines do Express support? 
Ans:- Express.js supports any template engine that follows the (path, locals, callback) signature.

#  **** React.js ****
## 1. What is React? 
Ans:- React is a front-end JavaScript library developed by Facebook in 2011. It follows the component based approach which helps in building reusable UI components.
## 2. What are the features of React?
Ans:- 
- It uses the virtual DOM 
- uses server-side rendering 
- follows uni-directional data flow 
- data binding
- JSX (JavaScript Syntax)
- One-way data binding
- Components
## 3 Why to used React.js? 
- virtual DOM
- Easy to Learn
- Reusable Components
- Fast rendering
- Strong community support
- Great Developer tools
## 4 When to used React.js?
- React’s use in web development
- Mobile App 
## 5 Folder Structure in React.js?
- my-app :- This is your project Name (npx create-react-app ajit).
- node-modules :- It contains all packages and dependencies installed.
### public 
- favicon.ico:- It is a favicon for website.
- index.html :- This file holds the THML template of our app.
- mainfest.json:- Provides metadata used when your web app is installed on a user's mobile device or desktop.
### src 
- App.css:- It's a css file related to App.js but its global.
- App.js:- It's parent component of your react app(main file, program start,pointer start).
- App.test.js:- It's Test environment.
- index.css:- It's a css file related to index.js but its global.
- index.js:- It's the javascript entry point.
- logo.svg:- React logo file.
- serviceWorker.js:- It can help to access website offline.
### .gitignore
- It is used when you want to igonore git push.
### package-lock.json
- It's version control package json file.
### package.json
- All dependencies mentioned in this file.
### README.md 
- It readme file.
## 6 Differentiate between Real DOM and Virtual DOM.
####  Angular.js
- Real DOM.
- It updates slow.
- Directly update HTML.
- Creates a new DOM if element updates.  
- memory wastage. 
#### React.js
- Virtual DOM.
- It updates faster.
- Can not directly update HTML.
- Updates the JSX if element updates.
-  No memory wastage
## 7 How to work  Virtual DOM in React?
- Ans:- Render an application user interface, React creates a virtual DOM tree representing that UI and stores in memory.

## 8 How React.js Works?
- Ans:- React one virtual dom create karata hai or all components ko vertual dom me rakh kar next time kuchh change karate hai component me to new vertual dom create hota hai fir old or new dom me compare karata hai or change hota hai.

## 9 What are the limitations of React? 
Ans:- React is just a library not framework. 
## 10 Why can not browsers read JSX? 
Ans:- Browsers can only read JavaScript objects
but JSX in not a regular JavaScript object.
JavaScript object using JSX transformers like Babel and then pass it to the browser.
## 11 What is the purpose of render() in React? 
Ans :- Each React component must have a render() mandatorily. It returns a single React element.
## 12 What is Props?
Ans:- Props is the shorthand for Properties in React. They are read-only components. passed down from the parent to the child components throughout the application. A child component can never send a prop back to the parent component. 

## 13. What is a state in React and how is it used? 
Ans:- States are the heart of React components. States are the source of data and must be kept as simple as
possible. Basically, states are the objects which determine components rendering and behavior. 
## 14 What is an event in React? 
Ans:- specific actions like mouse hover, mouse click, key press, etc. Handling.
## 15 What do you understand by refs in React?
Ans:- Refs is the short hand for References in React. It is an attribute which helps to store a reference to a particular React element or component, which will be returned by the components render configuration function. It is used to return references to a particular element or component returned by render(). They come in handy when we need DOM measurements or to add methods to the components.
## 16 List some of the cases when you should use Refs?
Ans:- Select text or media playback.
## 17 What are Higher Order Components(HOC)? 
Ans:- Higher Order Component is an advanced way of reusing the component logic. are custom components which wrap another component.

## 18 What are Pure Components?
Ans:- Pure components are the simplest and fastest components which can be written.They can replace any component which only has a render(). 

## What is lifecycle methods ?/ ReactJS Lifecycle of Components?
Ans:- There are  fours stages in React.
### Initialization:- 
Ans:- There are two main Things like Props and State.
### Mounting: -
Ans:- There are three Lifecycle methodes like componentWillMount(),render() and componentDidMount()
### Updating: - 
Ans:- shouldComponentUpdate() , componentWillUpdate() and componentDidUpdate().
### Unmounting: -
Ans:- componentWillUnmount().

## 19. What is the significance of keys in React?
Ans:- Keys are used for identifying unique Virtual DOM Elements with their corresponding data driving the UI.
## 20 Explain the concept of a Higher Order Component (HOC) in React ?
Ans:- A Higher-Order Component (HOC) is an advanced technique in React for reusing component logic. 
HOCs are common in third-party React libraries.
A  HOC is a function that takes a component and returns a new component.
Syntax:- 
const EnhancedComponent = higherOrderComponent(WrappedComponent);
Ex:- 
const FacebookJob = withLanguage(ReactJS)
const Army = withArm(Men) { training }
const Army = (Men) => { training }

## what is React Router?
Ans :- React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
Let us create a simple application to React to understand how the React Router works. The application will contain three components: home component, about a component, and contact component. We will use React Router to navigate between these components.

## 21 How do you handle routing in a React application?
Ans:- In a React application, routing is typically handled using a library such as React Router. React Router allows you to define specific routes for different parts of your application and map them to specific components. When the user navigates to a specific route, the corresponding component is displayed on the page.For example, you could have a route for the homepage that maps to a “Home”
component and a route for a user’s profile that maps to a “Profile” component. When the user navigates to the “/” route, the Home component would be displayed, and when they navigate to the “/profile” route, the Profile component would be displayed.
## Need for React Router?
Ans:- React Router is a JavaScript framework that lets us handle client and server-side routing in React applications. It enables the creation of single-page web or mobile apps that allow navigating without refreshing the page. It also allows us to use browser history features while preserving the right application view.
## 22 Explain the concept of a Pure Component in React?
Ans:- A “pure component” in React is a component that updates only when its properties or state have changed. In contrast, a “non-pure component” re-renders
each time the parent component re-renders, regardless of whether its props or state have changed. Pure components are more productive since they do not
needlessly re-render. By extending React, a component in React can be made pure. React is substituted by PureComponent. Component. This prompts the
should Component Update method, which decides whether or not to re-render, to provide an automatic shallow comparison of the component’s props and state.

## 23 How do you handle error handling in a React application?
Ans:- A React application can handle errors in a few different ways. To handle problems that happen during rendering, one typical solution is to utilise a try-catch block within a component’s lifecycle functions, such as componentDidCatch.
Use the Error Boundaries feature to design a component that detects errors that happen inside its child components as an alternative strategy. In addition, you may manage errors that happen inside a functional component by combining the useEffect hook with a try-catch block.There are several ways that an error can be handled in a React application.
Using a try-catch block in a component’s lifecycle routines, like component DidCatch, is a common way to manage rendering-related issues. An alternate
approach is to construct a component that detects problems that occur inside its child components using the Error Boundaries feature. Additionally, you
may control errors that occur inside a functional component by combining a try-catch block with the useEffect hook

# ****JavaScript ****
## 1) What is a first order function?  
 Ans:- First-order function is a function that
doesn’t accept another function as an argument and doesn’t return a function.

## 2) What is a higher order function?
 Ans:- Higher-order function is a accepts another function as an argument or returns a function as a return value. 

## 4)What is web storage?
 Ans:-i)Local storage: It stores data for current  origin with no expiration date. 
ii)Session storage: It stores data for one session and
the data is lost when the browser tab is closed.

## 5)What is a Cookie?
 Ans:-A cookie is a piece of data that is stored on your computer to be accessed by your browser. Cookies are saved as key/value pairs.
## 6)Why do you need a Cookie?
 Ans:-Cookies are used to remember information
about the user profile(such as username). It basically involves two steps,
 - i)When a user visits a web page, the user profile can be stored in a cookie.
  - ii)Next time the user visits the page, the cookie remembers the user profile.
## 7)What is a callback hell?
 Ans:-Callback Hell is an anti-pattern with multiple nested callbacks which makes code hard to read and debug.

## 8)What is undefined property?
 Ans:-The undefined property indicates that a
variable has not been assigned a value.
Ex:-var user;  console.log(typeof user);
//undefined
## 9)What is null value?
 Ans:-The value null represents the intentional absence of any object value. It is one of JavaScript’s primitive values. The type of null
value is object. You can empty the variable by setting the value to null.
Ex:-var user = null; console.log(typeof user); //object
## 10)What is isNaN?
Ex:-The isNaN() function is used to determine whether a
value is an illegal number (Not-a-Number) or not. i.e, This function returns
true if the value equates to NaN. Otherwise it returns false.
Ex:-isNaN(”Hello”); //true isNaN(”100”); //false

## 13)What is JSON?
 Ans:-JSON (JavaScript Object Notation) is a lightweight
format that is used for data interchanging. It is based on a subset of JavaScript
language in the way objects are built in JavaScript.
## 14)What are the syntax rules of JSON?
 Ans:-Below are the list of syntax rules
of JSON
i)The data is in name/value pairs
ii)The data is separated by commas 
iii)Curly braces hold objects 
iv)Square brackets hold arrays
## 15)What is the purpose JSON stringify?
 Ans:-When sending data to a web
server, the data has to be in a string format. You can achieve this by converting
JSON object into a string using stringify() method.
Ex:-var userJSON = { name: ”John”, age: 31 }; var userString = JSON.stringify(userJSON); console.log(userString); //”{”name”:”John”,”age”:31}”
## 16)How do you parse JSON string?
Ex:-When receiving the data from a web
server, the data is always in a string format. But you can convert this string value to a javascript object using parse() method.
Ex:-var userString = ’{”name”:”John”,”age”:31}’; var userJSON = JSON.parse(userString); console.log(userJSON); // {name: ”John”, age:22}
## 17)Why do you need JSON?
Ans:-When exchanging data between a browser and
a server, the data can only be text. Since JSON is text only, it can easily be sent
to and from a server, and used as a data format by any programming language.
## 18)How do you define JSON arrays?
 Ans:-JSON arrays are written inside
square brackets and arrays contain javascript objects. For example, the
JSON array of users would be as below, Ex: ”users”:[ {”firstName”:”John”,”lastName”:”Abrahm”}, {”firstName”:”Anna”, ”lastName”:”Smith”}, {”firstName”:”Shane”, ”lastName”:”Warn”} ]

## 21)What is a Regular Expression?
 Ans:-A regular expression is a sequence of
characters that forms a search pattern. You can use this search pattern for searching data in a text. These can be used to perform all types of text search and text replace operations.
## 22)What is the purpose of breakpoints in debugging?
 Ans:-You can set breakpoints in the javascript code once the debugger statement is executed and the
debugger window pops up. At each breakpoint, javascript will stop executing, and let you examine the JavaScript values. After examining values, you can
resume the execution of code using the play button.
## 23)What are the various statements in error handling
Ans:-Below are the list
of statements used in an error handling,
i)try: This statement is used to test a block of code for errors 
ii)catch: This statement is used to handle the error iii)throw: This statement is used to create custom errors.
vi)finally: This statement is used to execute code after try and catch regardless of the result.

## 24)What are the two types of loops in javascript?
 1)Entry Controlled loops: In
this kind of loop type, the test condition is tested before entering the loop body.
For example, For Loop and While Loop comes under this category.
2)Exit Controlled Loops: In this kind of loop type, the test condition is tested
or evaluated at the end of the loop body. i.e, the loop body will execute at
least once irrespective of test condition true or false. For example, do-while
loop comes under this category.
## 25)What is an Iterator?
 Ans:-An iterator is an object which defines a sequence
and a return value upon its termination. It implements the Iterator protocol with a next() method which returns an object with two properties: value (the next value in the sequence) and done (which is true if the last value in the sequence has been consumed).

## 27)What is an event loop?
 Ans:-The event loop is a process that continuously
monitors both the call stack and the event queue and checks whether or not the
call stack is empty. If the call stack is empty and there are pending events in
the event queue, the event loop dequeues the event from the event queue and
pushes it to the call stack. The call stack executes the event, and any additional
events generated during the execution are added to the end of the event queue.
Note: The event loop allows Node.js to perform non-blocking I/O operations,
even though JavaScript is single-threaded, by offloading operations to the system
kernel whenever possible. Since most modern kernels are multi-threaded, they
can handle multiple operations executing in the background.
## 28)What is call stack? 
Ans:-Call Stack is a data structure for javascript interpreters to keep track of function calls(creates execution context) in the program.
It has two major actions,
i)Whenever you call a function for its execution, you are pushing it to the stack.
ii)Whenever the execution is completed, the function is popped out of the stack.


# Theory Js
## 1 What is JavaScript Hoisting?
Ans:- JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.
## 2 What is closure function ?
Ans:- closure gives you access to an outer function's scope from an inner function. 
## 3 Difference between Map, Reduce, and Filter JavaScript?
Ans:- map() method is used for creating a new array from an existing one, applying a function to each one of the elements of the first array.
- Syntax var new_array = arr.map(function callback(element index, array) {//Return value for new_array}[,thisArg])

filter() method takes each element in an array and it applies a conditional statement against it. If this conditional returns true, the element gets pushed to the output array. If the condition returns false, the element does not get pushed to the output array.

- Syntax :- var new_array = arr.filter(function callback(element, index, array) {
    // Return true or false}[, thisArg])

reduce() method reduces an array of values down to just one value. To get the output value, it runs a reducer function on each element of the array.

- Syntax:- arr.reduce(callback[, initialValue])
## 4 JavaScript Prototypes?
Ans:- All JavaScript objects inherit properties and methods from a prototype.


# Theory Js
## 1 What is JavaScript Hoisting?
Ans:- JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.
## 2 What is closure function ?
Ans:- closure gives you access to an outer function's scope from an inner function. 
## 3 Difference between Map, Reduce, and Filter JavaScript?
Ans:- map() method is used for creating a new array from an existing one, applying a function to each one of the elements of the first array.
- Syntax var new_array = arr.map(function callback(element index, array) {//Return value for new_array}[,thisArg])

filter() method takes each element in an array and it applies a conditional statement against it. If this conditional returns true, the element gets pushed to the output array. If the condition returns false, the element does not get pushed to the output array.

- Syntax :- var new_array = arr.filter(function callback(element, index, array) {
    // Return true or false}[, thisArg])

reduce() method reduces an array of values down to just one value. To get the output value, it runs a reducer function on each element of the array.

- Syntax:- arr.reduce(callback[, initialValue])
## 4 JavaScript Prototypes?
Ans:- All JavaScript objects inherit properties and methods from a prototype.


# Theory Js
## 1 What is JavaScript Hoisting?
Ans:- JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.
## 2 What is closure function ?
Ans:- closure gives you access to an outer function's scope from an inner function. 
## 3 Difference between Map, Reduce, and Filter JavaScript?
Ans:- map() method is used for creating a new array from an existing one, applying a function to each one of the elements of the first array.
- Syntax var new_array = arr.map(function callback(element index, array) {//Return value for new_array}[,thisArg])

filter() method takes each element in an array and it applies a conditional statement against it. If this conditional returns true, the element gets pushed to the output array. If the condition returns false, the element does not get pushed to the output array.

- Syntax :- var new_array = arr.filter(function callback(element, index, array) {
    // Return true or false}[, thisArg])

reduce() method reduces an array of values down to just one value. To get the output value, it runs a reducer function on each element of the array.

- Syntax:- arr.reduce(callback[, initialValue])
## 4 JavaScript Prototypes?
Ans:- All JavaScript objects inherit properties and methods from a prototype.


# **** React.js Theory ****
## 1 Interceptors ?
Ans:-  Intercept every request or response that is being sent by Axios Interceptors in a React application.

## 2 What is lazy loading?
Ans:- Lazy loading is a design pattern for optimizing web and mobile apps. The concept of lazy loading is simple: initialize objects that are critical to the user interface first and quietly render noncritical items later.

## How to use lazy loading in React?
Ans:- React.lazy() is a function that enables you to render a dynamic import as a regular component. Dynamic imports are a way of code-splitting, which is central to lazy loading.

## Using React.lazy()
Ans:- React.lazy() makes it easy to create components that are loaded using dynamic import() but rendered like regular components. This automatically causes the bundle containing the component to load when the component is rendered.

React.lazy() takes as its argument a function that must return a promise by calling import() to load the component. The returned promise resolves to a module with a default export containing the React component.

## How to manage nested routes?
ANs:- To manage nested routes in React, you can use the React Router library, which provides a declarative way to handle routing in your application. Here's a step-by-step guide on how to manage nested routes using React Router

### 1.
Install React Router: Start by installing the React Router library using npm or Yarn. Open your terminal and run one of the following commands:
- npm install react-router-dom
### 2.
Set up the Router: In your main application file (often App.js), import the necessary components from React Router:
- import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
Wrap your entire application with the Router component:

function App() {
  return (
    <Router>
      {/* Your application components */}
    </Router>
  );
}
### 3.
Define your routes: Inside the Router, define your routes using the Route component. You can nest routes by placing Route components within each other. For example:

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
In this example, the /products route is nested within the main route /.
### 4.
Create nested routes: To create nested routes, define additional Route components within the component that corresponds to the parent route. For example, in the Products component, you can define nested routes as follows:

function Products() {
  return (
    <div>
      {/* Other components and content for       the  Products page */}
      <Switch>
        <Route exact path="/products" component={ProductList} />
        <Route path="/products/:id" component={ProductDetails} />
        <Route component={ProductNotFound} />
      </Switch>
    </div>
  );
}
In this example, the /products/:id route is nested within the /products route.

### 5.
Access nested route parameters: If you have nested routes with parameters, you can access them using the useParams hook provided by React Router. For example, in the ProductDetails component, you can access the id parameter as follows:

import { useParams } from 'react-router-dom';

function ProductDetails() {
  const { id } = useParams();

  // Use the `id` parameter in your component logic
  // ...

  return (
    <div>
      {/* Component content */}
    </div>
  );
}
The useParams hook returns an object containing the parameters specified in the route.

That's it! With these steps, you can manage nested routes in your React application using React Router. Make sure to import the necessary components and wrap your routes in the Router component to enable routing functionality.
## Q What is hooks?
Ans:- Hooks in three category.First one will be like basic hooks like  useState , useEffect and useContext, after that there will be sum additional hooks like useReducer,useMemo , useRef and there is also.
## Q React Custom Hooks?
Ans:- When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook.
- Custom Hooks start with "use". Example: useFetch.
## How to Update a component in avery second?
Ans:- we can used set interval method in useEffect hook you can Update component.
## How be can pass data between chield to parent component? and parent to chield?
Ans:- Passing data parent to chiled we can used props.
Ans:- Chield to parent we can used call back function and we can used call back function in parent component and then can be send data is a props.
- Not:- React data flowing from one direction only.
## How to pass data in sibling component?
Ans:- By using react router we can do that.
- there are two things.
- 1:-history.push.
- 2:-match.params.

# **** projects explaine ****

## Can yuo explaine in job role in your current company?
Ans:- Currently, I am working as a full-stack developer, handling frontend and backend, so I have done three projects. The first one was a domain project, so it was started from scratch, and I was handling the UI part. It was basically about handling employee data, so where that employee can login with the employee ID and give one specific password, they can login, check, and apply for leaves from Portel. And after that, I am working on KDA and HRI client projects, so where am I handling that UI part and adding some features?
## like :-
- Search box , Calender , Chart Graphs , video player , popup window , Accordin , Animated sliders , Dropdow menu , Zoom Effect , Login page and Pegistration fome.

