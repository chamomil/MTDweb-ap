const man = document.querySelector('#man');
const popcorn = document.querySelector('#popcorn');
const text = document.querySelector('#text');
const woman = document.querySelector('#woman');
const lights = document.querySelector('#lights');

window.addEventListener('scroll',()=>{
    let value = scrollY;
    man.style.left = `-${value/0.8}px`
    popcorn.style.top = `-${value/9}px`
    text.style.top = `${-150 + value*2}px`
    //woman.style.height = `${window.innerHeight - value}px`
    woman.style.top = `${value}px`
    lights.style.opacity = `${1 - value/200}`
})