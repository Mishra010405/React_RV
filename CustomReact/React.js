

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