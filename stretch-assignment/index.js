function moveTop() {
    // assign the clicked block to variable
    clickedBlock = event.target
    // remove the 'block' class from the clicked block
    clickedBlock.classList.remove('block')
    // assign the remaining 'color' class name to variable 
    clickedBlockClass = clickedBlock.classList.value
    // create new DIV element
    newBlock = document.createElement('DIV')
    // add class name of 'block' to new div 
    newBlock.classList.add('block')
    // add custom 'color' class name got from clicked block, to newly created div
    newBlock.classList.add(clickedBlockClass)
    // delete the original clicked element (div)
    clickedBlock.remove()
    // grab all the blocks divs that are present
    currentStack = document.querySelector('.blocks')
    // add newly created div to the start of the nodelist of divs currently present
    currentStack.insertBefore(newBlock, currentStack.childNodes[0])

    // grab updated list of current blocks
    newStack = document.querySelectorAll('.block')
    // loop though new nodelist of blocks adding the click event listener calling this function
    newStack.forEach(block => block.addEventListener('click', moveTop))
}

// grab all colored blocks
blocksStack = document.querySelectorAll('.block')

// loop through nodelist adding click event listeners calling moveTop function
blocksStack.forEach(block => block.addEventListener('click', moveTop))
