function customRender(reactElement , Container) {
    const domElement = document.createElement(reactElement, type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props)
    
}

const reactElement = {
    type : 'a',
    props : {
        href : 'http://google.com',
        target : '_blank',
    },
    children: 'CLick ME to Visit the Google'
}

const mainContainer = document.querySelector('#root')
customReact(reactElement, mainContainer)