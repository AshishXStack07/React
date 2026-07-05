/* import React from "react"
import ReactDOM from "react-dom/client"
import { a, sum } from "./main.js"
 */


/* let h1 = document.createElement("h1");

h1.textContent = "Hello";

document.body.append(h1);






let rh1 = React.createElement('h1', {}, 
    React.createElement("span", {}, "i m under h1")
);

let realDom = document.querySelector("#root");

let rootofreact = ReactDOM.createRoot(realDom);

rootofreact.render(rh1);

 */
/* console.log(a);
let res = sum(10,20);
console.log(res);
 */

let rDom = document.querySelector('#root');



let reactSa = React.createElement('span',{},[
    React.createElement('h1',{},"this is h1")
    ,React.createElement('h2',{},"this is h2")

])

ReactDOM.createRoot(rDom).render(reactSa)
