const h1 = document.getElementById('h1')
const button = document.getElementById('btn')
const body = document.querySelector('body')


const randomColor = () => {
   return Math.floor(Math.random()*255)
}


button.addEventListener('click', ()=> {
    body.style.backgroundColor = `rgb( ${randomColor()},${randomColor()},${randomColor()} )`
    h1.innerHTML = body.style.backgroundColor
})


