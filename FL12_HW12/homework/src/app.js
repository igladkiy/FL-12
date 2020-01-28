let getId = x => document.getElementById(x);
let getClass = x => document.getElementsByClassName(x);

function warn(){
    getId('warning').style.display = 'none';
}
function createElements(){
    let li = document. createElement('li');
    li.classList.add('liItems');
    let checkBox = document.createElement('i');
    checkBox.innerHTML = 'check_box_outline_blank';
    checkBox.classList.add('material-icons');
    checkBox.classList.add('checkBoxCheck');

    let spanTxt = document.createElement('span');
    spanTxt.classList.add('spanTxt');
    spanTxt.innerHTML = getId('addItem').value;

    let pen = document.createElement('i');
    pen.classList.add('material-icons');
    pen.classList.add('pen');
    pen.innerHTML = 'edit';

    let basket = document.createElement('i');
    basket.classList.add('material-icons');
    basket.classList.add('basket');
    basket.innerHTML = 'delete';

    let div = document.createElement('div');
    div.classList.add('changeBlock');
    let inputChangeTxt = document.createElement('input');
    inputChangeTxt.type = 'text';
    inputChangeTxt.classList.add('changeTxt');
        
    let save = document.createElement('i');
    save.classList.add('material-icons');
    save.classList.add('save');
    save.innerHTML = 'save';

    let container = document.createElement('div');
    container.classList.add('container');
    container.appendChild(checkBox);
    container.appendChild(spanTxt);
    container.appendChild(pen);

    div.appendChild(inputChangeTxt);
    div.appendChild(save);

    getId('listItems').appendChild(li);
    li.appendChild(container);
    li.appendChild(basket);
    li.appendChild(div);
    getId('addItem').value = '';
}
let firstChild = 0;
getClass('addBox')[firstChild].addEventListener('click', function(){
    if(getId('addItem').value === ''){
        getId('warning').style.display = 'block';
        let times = 3000;
        setTimeout(warn, times);
        }else{
            let maxItem = 10;
            if(getClass('liItems').length === maxItem){
                getClass('addBox')[firstChild].style.display = 'none';
                getId('addItem').disabled = true;
            }else{
                createElements();
            }
        }
        changeCheckBox();
        editTxt();
        deleteItem();
        save();
    })
function changeCheckBox(){
    for(let i=0; i<getClass('checkBoxCheck').length; i++){
        getClass('checkBoxCheck')[i].addEventListener('click', function(){
            getClass('checkBoxCheck')[i].innerHTML = 'done';
        })
    }
}
function editTxt(){
    for(let i = 0; i < getClass('liItems').length; i++){
        getClass('pen')[i].addEventListener('click', function(){
            getClass('changeTxt')[i].value = getClass('spanTxt')[i].innerHTML;
            getClass('changeBlock')[i].style.display = 'block';
            getClass('container')[i].style.display = 'none';
        })
    }
}
function deleteItem(){
    for(let i = 0; i < getClass('basket').length; i++){
        getClass('basket')[i].addEventListener('click', function(){
            this.parentElement.remove();
            getClass('addBox')[firstChild].style.display = 'block';
            getId('addItem').disabled = false;
        })
    }
}
function save(){
    for(let i = 0; i < getClass('save').length; i++){
        getClass('save')[i].addEventListener('click', function(){
            if(getClass('changeTxt')[i].value !== ''){
                getClass('spanTxt')[i].innerHTML = getClass('changeTxt')[i].value;
                getClass('changeBlock')[i].style.display = 'none';
                getClass('container')[i].style.display = 'block';
            }else{
                getClass('changeTxt')[i].placeholder = 'input smth';
                getClass('changeTxt')[i].style.border = '1px solid red';
            }
        })
    }
}