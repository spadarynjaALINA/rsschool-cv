
let menuLink = document.querySelectorAll('.nav-link')
let menuToggle = document.querySelector('input')

menuLink.forEach(element => {element.addEventListener
 ('click', () => {
 console.log('menuLink.namespaceURI')
 menuToggle.checked = false
})
});