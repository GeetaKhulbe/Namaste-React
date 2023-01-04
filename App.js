import React from "react";
import ReactDOM from "react-dom/client";


const heading = React.createElement("h1",{
    id:"title",
} , "Namaste");

const heading2 = React.createElement("h2",{},"Heading2");

const container = React.createElement("div",{
    id:"wrapper"
},[heading,heading2]);

console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);