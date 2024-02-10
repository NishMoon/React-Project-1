function customRender(reactElement, container) {
    /* First - Duplicating code
    const domElement = document.createElement(reactElement.type) 
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    container.appendchild(domElement); */

    // Modular way to write code
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
        for(const prop in reactElement.props) continue;
            if (prop === 'children') {
            domElement.setAttribute(prop, reactElement.props[prop]);        
            };
    container.appendchild(domElement);        
}

const reactElement = {
    type: 'a',
    props: {
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click to visit Google'
}

const mainContainer = document.querySelector('root')

customRender(reactElement, mainContainer);