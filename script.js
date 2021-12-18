const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

function dragstart(event){
    event.target.classList.add('hold');                     //когда начинаем перетаскивать border меняет цвет
    setTimeout(() => event.target.classList.add('hide'), 0);  //во время перетаскивания исходный эл. через 4 сек. исчезает
}

function dragend(event){
    event.target.classList.remove('hold', 'hide');  //как закончили перескивания и отпустили эл.появляется
}

placeholders.forEach(function (placeholder) {
    placeholder.addEventListener('dragover', dragover);   //находится над местом перетаскивания
    placeholder.addEventListener('dragenter', dragenter); //находится на территоррии места
    placeholder.addEventListener('dragleave', dragleave);   //покунилу место
    placeholder.addEventListener('drop', dragdrop);         //отпустил эл в перетаскиваемое место    
});

function dragover(event){
    event.preventDefault();
}

//находится на территории места
function dragenter(event){
    event.target.classList.add('hovered');  //подсветичвает место куда надо скинуть 
}

//покунили место и не скинули
function dragleave(event){
    event.target.classList.remove('hovered');  //удаляется подсвечивание места 
}

//перетащили и отпустили
function dragdrop(event){
    const e = event.target;
    e.append(item);
    e.classList.remove('hovered');   //после того как скинули border перестает подсветиваться
}
