var form= document.getElementById('item-form');
var itemList=document.getElementById('items');

form.addEventListener('submit',addItem);

itemList.addEventListener('click',removeItem);

function addItem(e)
{
  e.preventDefault();
  var newInput = document.getElementById('form-input').value; //Stores the input value of the form
  var li=document.createElement('li'); //Creates a new li

  li.ClassName='item-list'; //Adds the class name same as the other li's
  li.style.fontSize='1.5rem';
  li.style.padding='10px 19px';
  li.style.borderBottom= '1px solid black';

  li.appendChild(document.createTextNode(newInput)); //Creates a text node(i.e the data input from the form is attached with the li)

  var delButton=document.createElement('button');

  delButton.ClassName='item-button dlt';
  delButton.TypeName='button';
  delButton.Name='button';
  delButton.style.float='right';
  delButton.style.height='30px';
  delButton.style.backgroundColor='#fa1616';
  //delButton.style.hover.backgroundcolor='#d7385e';

  delButton.appendChild(document.createTextNode('X'));

  li.appendChild(delButton);

  itemList.appendChild(li); //li becomes the child of ul,i.e another data is input to the form
}

function removeItem(e)
{
  if(e.target.classList.contains('dlt')){

    if (confirm('Are U Sure to Delete?'))
    {
        var li=e.target.parentElement;
        items.removeChild(li);
    }
  }
}
