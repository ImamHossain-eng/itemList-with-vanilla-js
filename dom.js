
/*
var btn = document.getElementById('btn').addEventListener('click', btnClick);
function btnClick(){
    console.log(123);
    document.getElementById('header-title').textContent = "Changed";
}
var input = document.getElementById('input-text');
input.addEventListener('input', runevent);
function runevent(e){
    var value = e.target.value;
    document.getElementById('baby').innerHTML = "<h2>" + value + "</h2>"
    
}*/

var form = document.querySelector('#main form');
var itemList = document.getElementById('items');
var folter = document.getElementById('filter')
//form submit event
form.addEventListener('submit', addItem);
//delete event
itemList.addEventListener('click', removeItem);
folter.addEventListener('keyup', filterItem);
//event's function
function addItem(e){
    e.preventDefault();
    //get value from input
    var itemValue = document.getElementById('input-text').value;
    //create new li element
    var li = document.createElement('li');
    //add class
    li.className = 'list-group-item';
    //add input value
    li.appendChild(document.createTextNode(itemValue));
    //create button 
    var deleteBtn = document.createElement('button');
    //add the button class
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);
    itemList.appendChild(li);

}
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}
function filterItem(e){
    //conver into lower
    var text = e.target.value.toLowerCase();
    //get list
    var items = itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }
        else{
            item.style.display = 'none';
        }
    });


}
