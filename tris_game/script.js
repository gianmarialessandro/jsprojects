var blocks = document.querySelectorAll('.i')

console.log(blocks.length)

function choosenBlock(){
    this.setAttribute('class', 'i choosen')
    // console.log(p)
}
for(let i=0; i < blocks.length; i++) {
    // console.log(blocks[i])
    blocks[i].addEventListener('click', choosenBlock)
}
// blocks.addEventListener('click', prova) 