// Your code goes here
const heroPhoto = document.querySelector('header img')

heroPhoto.addEventListener('mouseover', () => {
    heroPhoto.setAttribute('src', "https://picsum.photos/id/11/1000/300")
})

heroPhoto.addEventListener('mouseout', () => {
    heroPhoto.setAttribute('src', "img/fun-bus.jpg")
})

const letsGoImage = document.querySelectorAll('.img-content img')[0]
const adventureAwaitsImage = document.querySelectorAll('.img-content img')[1]

document.addEventListener('keydown', () => {
    letsGoImage.setAttribute('src', 'https://picsum.photos/id/1/400/300')
    adventureAwaitsImage.setAttribute('src', 'https://picsum.photos/id/2/400/300')
})

document.addEventListener('keyup', () => {
    letsGoImage.setAttribute('src', 'img/adventure.jpg')
    adventureAwaitsImage.setAttribute('src', 'img/fun.jpg')
})

const pNodeList = document.querySelectorAll('p')
pNodeList.forEach(function(pElement) {
    pElement.addEventListener('copy', () => {
        window.alert("No copying!");
    })
})

const mainLogo = document.querySelector('h1.logo-heading')
mainLogo.addEventListener('dblclick', () => {
    mainLogo.innerText = 'DBL CLICKED'
})


// letsGoImage.addEventListener('contextmenu', (event) => {
//     event.preventDefault()
//     letsGoImage.hidden = true
// })

// const h2NodeList = document.querySelectorAll('h2')
// h2NodeList.forEach(function(h2Element) {
//     h2Element.addEventListener("select", () => {
//         window.alert("selected")
//     })
// })

let lastScrollPosition = 0;
let letsGoSubtitle = document.querySelector('.content-section h2')

window.addEventListener('scroll', function(event) {
    lastScrollPosition = window.scrollY
    if (lastScrollPosition != 0) {
        letsGoSubtitle.innerText = 'Last Scroll Position: ' + lastScrollPosition
    } else {
        letsGoSubtitle.innerText = 'Let\'s Go!'
    }
})


