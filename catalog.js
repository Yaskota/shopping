document.querySelector(".shirts").style=`display:grid-block;`
  document.querySelector(".kurthas").style=`display:none;`
  document.querySelector(".sports").style=`display:none;`
  document.querySelector(".shoes").style=`display:none;`
document.querySelector(".cartpage").style=`display:none;`
function teashirt(){
  document.querySelector(".shirts").style=`display:grid-block;`
  document.querySelector(".kurthas").style=`display:none;`
  document.querySelector(".sports").style=`display:none;`
  document.querySelector(".shoes").style=`display:none;`
}
function kurthas(){
  document.querySelector(".shirts").style=`display:none;`
  document.querySelector(".kurthas").style=`display:grid-block;`
  document.querySelector(".sports").style=`display:none;`
  document.querySelector(".shoes").style=`display:none;`
}
function sports(){
  document.querySelector(".shirts").style=`display:none;`
  document.querySelector(".kurthas").style=`display:none;`
  document.querySelector(".sports").style=`display:grid-block;`
  document.querySelector(".shoes").style=`display:none;`
}
function shoes(){
  document.querySelector(".shirts").style=`display:none;`
  document.querySelector(".kurthas").style=`display:none;`
  document.querySelector(".sports").style=`display:none;`
  document.querySelector(".shoes").style=`display:grid-block;`
}
function cartpage()
{
  document.querySelector(".products").style=`display:none;`
  document.querySelector(".cartpage").style=`display:block;`
  cartitemdata.forEach(item =>{

    createitem(item.name,item.quantity,item.price);
  
   });
  

}
function productpage()
{
  document.querySelector(".cartpage").style=`display:none;`
  document.querySelector(".products").style=`display:block;`
  document.getElementById('cart').innerHTML="";
  totalprice=0;
}
let totalprice=0;
function createitem(itemname,quantity,price)
{ 
  
  const itemdiv = document.createElement('div');
  itemdiv.classList.add('itemsincart');

  itemdiv.style.width="800px";
  itemdiv.style.height="50px";
  itemdiv.style.display="flex";
  itemdiv.style.justifyContent="space-around";
  itemdiv.style.alignItems="center";
  itemdiv.style.border="2px solid black"
  itemdiv.style.margin="10px";

  const itemnameelement=document.createElement('span');
  itemnameelement.textContent=itemname;
  itemnameelement.style.width="200px";
  itemnameelement.style.height="50px";
  itemnameelement.style.display="flex";
  itemnameelement.style.justifyContent="space-around";
  itemnameelement.style.alignItems="center";
  
  itemdiv.appendChild(itemnameelement);

  const itempriceelement=document.createElement('div');

  const itemprice=document.createElement('span');
  itemprice.textContent="Price   : ";

  const itemprice1=document.createElement('span');
  itemprice1.textContent=price;
  
  itempriceelement.appendChild(itemprice);
  itempriceelement.appendChild(itemprice1);

  itemdiv.appendChild(itempriceelement);

  const quantity1=document.createElement('div');
  
  const quantityelement1=document.createElement('span');
  quantityelement1.textContent="Quantity :";

  
  // const itemquantityelement=document.createElement('input');
  // itemquantityelement.type='number'
  // itemquantityelement.value=quantity;

  // itemquantityelement.addEventListener('keydown',function(event){
  //     if(event.key==='Enter'){

  //         totalprice=totalprice-Number(itemprice1.textContent);

  //         itemprice1.textContent=Number(price)*itemquantityelement.value;
  //         totalprice=totalprice+Number(itemprice1.textContent);
          
  //     }
      
  // })

  // itemquantityelement.style.width="50px";
  // itemquantityelement.style.height="46px";


      const itemquantityelement1=document.createElement('span')
      itemquantityelement1.textContent=quantity

  quantity1.appendChild(quantityelement1);
  quantity1.appendChild(itemquantityelement1);

  itemdiv.appendChild(quantity1);


  const removebutton=document.createElement('button');

  removebutton.textContent='Remove';

  removebutton.addEventListener('click' , () => {
      itemdiv.remove();
      totalprice=totalprice-quantity*price;
      document.getElementById('total').innerHTML=`Total Price : ${totalprice}`
  });

  itemdiv.appendChild(removebutton);

  totalprice=totalprice+quantity*price;
  console.log(itemdiv);
  document.getElementById('cart').appendChild(itemdiv);
  document.getElementById('total').innerHTML=`Total Price : ${totalprice}`

 }

   const cartitemdata=[];

   function additemcart(itemname,itemquantity,itemprice)
   {
    const itemproduct=cartitemdata.find(item => itemname === item.name)
    if(itemproduct)
    {
      itemproduct.quantity++;
    }
    else{
      cartitemdata.push({name:itemname , quantity:itemquantity , price:itemprice });
      console.log(itemname,itemquantity,itemprice);
    }
    
   }
   document.getElementById('total').innerHTML=`Total Price : ${totalprice}`;

 
 


