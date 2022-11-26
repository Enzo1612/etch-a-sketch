//create the container of the grid
let container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

//ask the user how many square per side he want
let n = 16
let sizeButton = document.createElement('button');
sizeButton.classList.add('sizeButton');
sizeButton.textContent = 'Change Square Size'
document.body.appendChild(sizeButton);
sizeButton.addEventListener('click', function() {
    n = prompt('Size(less than a hundred): ')
    redefineSize()
    })
//create a reset button
resetButton = document.createElement('button');
resetButton.classList.add('resetButton');
resetButton.textContent ='Reset';
resetButton.addEventListener('click', function reset(){
    container.innerHTML = '';
    size();
})
document.body.appendChild(resetButton);
//create a function that define the size
//of the squares inside the container
function size() {
    for (i=0; i<n; i++){
        if (n<100){
        let cols = document.createElement('div');
        cols.classList.add('cols');
        cols.textContent = ''
        container.appendChild(cols);
        for(j=0; j<n; j++){
            let rows = document.createElement('div')
            rows.classList.add('rows');
            rows.textContent = ''
            rows.style.border = 'solid 1px black'; 
            cols.appendChild(rows);
            //create the hover effect so
            //the cursor act like a pen
            rows.addEventListener('mouseenter', function color(){
                rows.style.backgroundColor = 'black';
            })
        }
}
    }
}
size()
//create a function that redefine the size
//of the squares inside the container
function redefineSize() {
    container.innerHTML = '';
    size();
}
