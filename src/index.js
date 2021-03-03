import React from 'react';

import ReactDOM from 'react-dom';

var name = 12;
const fname = "arefin";
const lname = "ahmed";
ReactDOM.render(<>
{/* This works as div , doesn create extra node */}
   
   
    {     
        /* // <    
            // h1 > My name is arefin ahmed < /h1>  <
            // p > Who are you < /p>    <
            // h2 > Please put some water. < /h2>
            // <  */
    }
      
    {/* <h1> My name is {fname + lname }</h1> */}
    <h1> {`My name is ${fname} ${lname}`} </h1>
    <h1> My lucky number is {5+5} </h1>
</> ,
    
    // var fname = "arefin";

    // ReactDOM.render(,

    //     document.getElementById("root");
    // );

    // [ <
    //     h1 > My name is arefin ahmed < /h1>, <
    //     p > Who are you < /p> , <
    //     h2 > Please put some water. < /h2>
    // ],
    // div > 
    // <
    // h1 > My name is arefin ahmed < /h1> <
    // p > Who are you < /p> <
    // h2 > Please put some water. < /h2> <
    // /div> ,
    document.getElementById('root')

);

// var h1 = document.createElement("h1");
// h1.innerHTML = "I am H1";
// document.getElementById("root").appendChild(h1);