let r = document.querySelector(':root');        
const container = document.querySelector('.container');
const button  = document.querySelector('button');

let size = 16;
let fsize = size * size;

Grid();

button.addEventListener('click', () => {
    
    do {
        size = parseInt(prompt("Enter Width and Height of Grid!"))
        
    } while (size > 100);
    Grid();
    
    
});

function Grid(){
    r.style.setProperty('--size', size);
    r.style.setProperty('--height', size);
    container.setAttribute("style", " grid-template-rows: repeat(var(--size), 0.5   fr); grid-template-columns: repeat(var(--size), 0.5fr);");
    
    console.log(fsize)
    console.log(typeof(fsize))
    
    
    for(let i = 0; i < fsize; i++)
    {
        let elm = document.createElement('div');
        // elm.classList.add = "elm";
        container.appendChild(elm);
    }
    
}



    
    