// Your code goes here
let heroPhoto = document.querySelector('header img')

heroPhoto.addEventListener('mouseover', () => {
    heroPhoto.setAttribute('src', "https://picsum.photos/id/11/1000/300")
})

heroPhoto.addEventListener('mouseout', () => {
    heroPhoto.setAttribute('src', "img/fun-bus.jpg")
})

let letsGoImage = document.querySelectorAll('.img-content img')[0]
let adventureAwaitsImage = document.querySelectorAll('.img-content img')[1]

console.log(letsGoImage)
console.log(adventureAwaitsImage)
