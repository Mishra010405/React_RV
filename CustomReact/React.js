function customRender(reactElement, container) {

//     // Create HTML element
//     const domElement = document.createElement(reactElement.type);

//     // Add text
//     domElement.innerHTML = reactElement.children;

//     // Add attributes
//     domElement.setAttribute("href", reactElement.props.href);
//     domElement.setAttribute("target", reactElement.props.target);

//     // Add to DOM
//     container.appendChild(domElement);
// }


    // Another Wys To Set the Attributes....

    

// React-like Object
const reactElement = {
    type: "a",
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children: "Click Me to Visit Google"
};


// Select root div
const mainContainer = document.querySelector("#root");

// Render element
customRender(reactElement, mainContainer);
