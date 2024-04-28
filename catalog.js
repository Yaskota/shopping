
  document.querySelector(".cartpage").style=`display:none;`
  function cartpage()
  {
    document.querySelector(".products").style=`display:none;`
    document.querySelector(".cartpage").style=`display:block;`


  }
  function productpage()
  {
    document.querySelector(".cartpage").style=`display:none;`
    document.querySelector(".products").style=`display:block;`
  }
  totalprice=0;
  function createitem(itemname,quantity,price)
  { 
    
    const itemdiv = document.createElement('div');
    itemdiv.classList.add('item');

    itemdiv.style.width="800px";
    itemdiv.style.height="50px";
    itemdiv.style.display="flex";
    itemdiv.style.justifyContent="space-around"
    itemdiv.style.alignItems="center";
    itemdiv.style.border="2px solid black"
    itemdiv.style.margin="10px";

    const itemnameelement=document.createElement('span');
    itemnameelement.textContent=itemname;

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
    });

    itemdiv.appendChild(removebutton);

     totalprice=totalprice+Number(itemprice1.textContent);
    console.log(itemdiv);
    document.getElementById('cart').appendChild(itemdiv);
    document.getElementById('total').innerHTML=`Total Price : ${totalprice}`

   }

//    const cartitemdata=[];

//    function additemcart(itemname,itemquantity,itemprice)
//    {
//     cartitemdata.push({name:itemname , quantity:itemquantity , price:itemprice });
//     console.log(itemname,itemquantity,itemprice);
//    }

  //  cartitemdata.forEach(item =>{

  //   createitem(item.name,item.quantity,item.price);

  //  });
  
   

  