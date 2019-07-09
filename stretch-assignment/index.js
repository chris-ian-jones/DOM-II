blocksStack = document.querySelectorAll('.block')

function moveTop() {
    clickedBlock = event.target
    clickedBlock.classList.remove('block')
    clickedBlockClass = clickedBlock.classList.value
    newBlock = document.createElement('DIV')
    newBlock.classList.add('block')
    newBlock.classList.add(clickedBlockClass)
    
    clickedBlock.remove()
    
    currentStack = document.querySelector('.blocks')
    currentStack.insertBefore(newBlock, currentStack.childNodes[0])
}


blocksStack.forEach(block => block.addEventListener('click', moveTop))