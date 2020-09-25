const draggable_list = document.getElementById('draggable-list');
const check = document.getElementById('check');
const popup = document.getElementById('popup-container');
const finalMessage = document.getElementById('final-message');
const playAgainBtn = document.getElementById('play-button');

const richestPeople = [
    'Jeff Bezoz',
    'Bill Gates',
    'Warren Buffet',
    'Bernanrd Arnault',
    'Carlos Slim Helu',
    'Amancio Ortega',
    'Larry Ellison',
    'Mark zuckerberg',
    'Michael Bloomberg',
    'Larry Page'   
];

// Store list items
const listItems = [];

let dragStartIndex;

createList();



// Insert List item into DOM
function createList() {
    [...richestPeople]
    .map( a => ({ value: a, sort: Math.random()}))
    .sort((a, b) => a.sort - b.sort) 
    .map( a => a.value)
    .forEach((person, index) => {
        const listItem = document.createElement('li');
        listItem.setAttribute('data-index', index);

        listItem.innerHTML = `
        <span class="number">${index + 1}</span>
        <div class="draggable" draggable="true">
            <p class="person-name">${person}</p>
            <i class="fas fa-grip-lines"></i>           
        </div>
        `;

        listItems.push(listItem);
        draggable_list.appendChild(listItem);
    });

    addEventListeners();
}

function dragStart() {
    dragStartIndex = +this.closest('li').getAttribute('data-index');
}

function dragEnter() {
    this.classList.add('over');
}

function dragLeave() {
    this.classList.remove('over');
}

function dragOver(e) {
    e.preventDefault();
}

function dragDrop() {
    const dragEndIndex = +this.getAttribute('data-index');
    swapItems(dragStartIndex, dragEndIndex);
    this.classList.remove('over');
    checkOrder();
}

function swapItems(start, end) {
    const itemOne = listItems[start].querySelector('.draggable');
    const itemTwo = listItems[end].querySelector('.draggable');

    listItems[start].appendChild(itemTwo);
    listItems[end].appendChild(itemOne);
}

// Check the order of the list
function checkOrder() {
    let number = 0;
    listItems.forEach( (listItem, index) => {
        const personName = listItem.querySelector('.draggable').innerText.trim();

        if (personName !== richestPeople[index]) {
            listItem.classList.add('wrong');
        } else {
            listItem.classList.remove('wrong');
            listItem.classList.add('right');
            number = number + 1;
        }
        
        
    });
    if (number == 10) {
        finalMessage.innerHTML = 'You have sorted correctly. <br /> Congrats!'
        popup.style.display = 'flex'
    }
}

function reload() {
    location.reload(true);
}

function addEventListeners(){
    const draggables = document.querySelectorAll('.draggable');
    const dragListItems = document.querySelectorAll('.draggable-list li');

    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', dragStart);
    });

    dragListItems.forEach(item => {
        item.addEventListener('dragover', dragOver);
        item.addEventListener('drop', dragDrop);
        item.addEventListener('dragenter', dragEnter);
        item.addEventListener('dragleave', dragLeave);
    });
    playAgainBtn.addEventListener('click', reload);
}
