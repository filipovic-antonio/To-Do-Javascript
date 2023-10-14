const inputText = document.getElementById('inputText');
const listItems = document.getElementById('listItems');


function addTask(){
    if(inputText.value === ''){
        alert('You must write something!');
    } else{
        let li = document.createElement('li');
        li.classList.add('list-styles');
        li.innerText = inputText.value;
        listItems.appendChild(li);      
        inputText.value = '';  

        li.addEventListener('click', function(){
            li.style.textDecoration = 'line-through';
        });
        li.addEventListener('dblclick', function(){
            li.remove().appendChild();
        });
  }
}

