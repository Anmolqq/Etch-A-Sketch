let r = document.querySelector(':root');        
const container = document.querySelector('.container');
const button  = document.querySelector('button');


Grid(16);

button.addEventListener('click', () => {
    let size;
    deleteChild();
    
    do {
        size = parseInt(prompt("Enter Width and Height of Grid!"))
        
    } while (size > 100);
    Grid(size);
    
    
});

function Grid(size){
    let fsize = size * size;

    r.style.setProperty('--size', size);
    container.setAttribute("style", " grid-template-rows: repeat(var(--size), 1fr); grid-template-columns: repeat(var(--size), 1fr);");
    
    for(let i = 0; i < fsize; i++)
    {
        let elm = document.createElement('div');
        // elm.classList.add = "elm";
        container.appendChild(elm);
    }
    
}

function deleteChild() {
    
    
    //e.firstElementChild can be used.
    let child = container.lastElementChild; 
    while (child) {
        container.removeChild(child);
        child = container.lastElementChild;
    }
}



    
    