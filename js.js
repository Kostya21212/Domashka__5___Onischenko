const field = document.getElementById('textField')
const oldDiv = document.getElementById('oldDiv')
const newDiv = document.createElement('div')
const samuelImg = document.getElementById('samuelImg')
console.log(field)
field.addEventListener('mouseenter',function(){
    newDiv.innerHTML = 'Hi MOTHERFUCKER!!'
    oldDiv.appendChild(newDiv)
    newDiv.classList.add('new-Div')
    console.log(newDiv)
    samuelImg.style.display = 'flex'
})
field.addEventListener('mouseleave',function(){
  newDiv.innerHTML = ''
  samuelImg.style.display = 'none'
})