
let root = document.querySelector("#root");
const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank'
    },
    children: "click me to get to google"
}

function customRender(element, container) {
 // custom render method
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = element.children;
        //---------------------- Not the best way to set attributes-------------------------------------
        //   domElement.setAttribute('href', reactElement.props.href);
        //   domElement.setAttribute('target', reactElement.props.target);
    for (const prop in reactElement.props) {
        domElement.setAttribute(prop,reactElement.props[prop])   //Better way
    }
    console.log(domElement);
    container.appendChild(domElement);
}

customRender(reactElement, root);