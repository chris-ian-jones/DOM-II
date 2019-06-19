//#1 'Mouseover' event listener
//#2 'Mouseout' event listener

// Update the img src for the hero photo when mouse overed
const heroPhoto = document.querySelector('header img')
heroPhoto.addEventListener('mouseover', () => {
    heroPhoto.setAttribute('src', "https://picsum.photos/id/11/1000/300")
})
heroPhoto.addEventListener('mouseout', () => {
    heroPhoto.setAttribute('src', "img/fun-bus.jpg")
})

//#3 'Keydown' event listener
//#4 'Keyup' event listener

// Update the img src for two middle photos upon a key pressing down
// Used .querySelectorAll to select the [nth] instance of that element to edit
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

//#5 'Copy' event listener

// Defined variable for a NodeList of p elements
const pNodeList = document.querySelectorAll('p')
// Loop through NodeList and added a copy event listener to each p element
pNodeList.forEach(function(pElement) {
    pElement.addEventListener('copy', () => {
        window.alert("No copying!");
    })
})

//#6 'Dblclick' event listener

// Update the inner text of main logo upon double click
const mainLogo = document.querySelector('h1.logo-heading')
mainLogo.addEventListener('dblclick', () => {
    mainLogo.innerText = 'DBL CLICKED'
})

//#7 'Scroll' event listener

// Create Scroll Variable
let lastScrollPosition = 0;
let letsGoSubtitle = document.querySelector('.content-section h2')

// Add the 'scroll' event handler to the window object
window.addEventListener('scroll', function(event) {
    // sets the number of pixels scrolled vertically
    lastScrollPosition = window.scrollY
    // updates a subtitle's inner text with dynamic string if scroll is not at default position
    if (lastScrollPosition != 0) {
        letsGoSubtitle.innerText = 'Last Scroll Position: ' + lastScrollPosition
        letsGoSubtitle.style.color = 'blue'
    } else {
        letsGoSubtitle.innerText = 'Let\'s Go!'
        letsGoSubtitle.style.color = 'black'
    }
})

//#8 'Resize' event listener

// Add the 'resize' event handler to the window object
window.addEventListener('resize', function(event) {
    // Loop though NodeList of p elements, and set their color to purple
    pNodeList.forEach(function(pElement) {
        pElement.style.color = 'purple'
        })
})

//#9 'Drag' event lister

let headerMain = document.querySelector('header.main-navigation')
let firstNavLink =  document.querySelector('header.main-navigation .nav-link')

headerMain.addEventListener("drag", function(event) {
    firstNavLink.style.color = 'pink'
})

//#10 'Cut' event listener

// Loop through NodeList and added a cut event listener to each p element
pNodeList.forEach(function(pElement) {
    pElement.addEventListener('cut', () => {
        pElement.style.transform = 'rotate(1.5deg)'
    })
})