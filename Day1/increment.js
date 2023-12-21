const domContainer = document.querySelector("#root");
const domContainer1 = document.querySelector("#root1");

//3 parameter, 1. What, 2. ki data pass korte chacche, 3. element er content
const myElement = React.createElement("div", null, "Huma");

//Array of elements o add kora jay
const myElement1 = React.createElement("div", null, [
    React.createElement("p", null, "Shafia Nur Huma"),
    React.createElement("p", null, "Shafia")
]);

//pass 2 parameter, 1. what will be printed, 2. where will be printed
ReactDOM.render(myElement, domContainer);
ReactDOM.render(myElement1, domContainer1);