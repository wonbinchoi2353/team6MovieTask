const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem("items")) || [];

function addItem(e){
    const text = this.querySelector('[name=item]').value;
    const item = {
        text,
        done : false
    }
    items.push(item);
    e.preventDefault();
    localStorage.setItem("items", JSON.stringify(items));
    populateList(items, itemsList);
    this.reset();
}

function populateList(items, itemsList){
    itemsList.innerHTML = items.map((item, i) => {
        return `
        <li>
            <input type="checkbox" id=item${i} data-index=${i} 
			${item.done ? 'checked' : ""}/>							
            <label for="item${i}">${item.text}</label>
        </li>
        `
    }).join('');
}

function toggleDown(e){
    if(!e.target.matches('input')) return;
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem("items", JSON.stringify(items));
}

populateList(items, itemsList);
itemsList.addEventListener('click', toggleDown)
addItems.addEventListener('submit', addItem);