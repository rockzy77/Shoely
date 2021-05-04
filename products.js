if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready);
}

else{
    ready();
}

function ready(){
    var removeCartItemButtons = document.getElementsByClassName('removebtn');
console.log(removeCartItemButtons);
for(var i = 0; i < removeCartItemButtons.length; i++){
    var button = removeCartItemButtons[i];
    button.addEventListener('click', removeCartItem)
}
    var quantityInputs = document.getElementsByClassName('proquantity');
    for(var i = 0; i < quantityInputs.length; i++){
        var input = quantityInputs[i];
        input.addEventListener('change', quantityChanged)
    }
    
    var addToCartButtons = document.getElementsByClassName('orderbtn');
    for(var i = 0; i < addToCartButtons.length; i++){
        var button = addToCartButtons[i];
        button.addEventListener('click', addToCartClicked);
    }
    
    document.getElementsByClassName('purchasebtn')[0].addEventListener('click', purchaseClicked);
};

function purchaseClicked(){
    alert('Thankyou For Your Purchase');
    var cartItems = document.getElementsByClassName('cartTable')[0];
    while (cartItems.hasChildNodes()){
        cartItems.removeChild(cartItems.firstChild);
    }
    updateCartTotal();
}
function removeCartItem(event) {
    var buttonClicked = event.target;
        buttonClicked.parentElement.parentElement.parentElement.parentElement.remove();
        updateCartTotal();
}

function quantityChanged(event){
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateCartTotal(); 
}

function addToCartClicked(event){
    var button = event.target;
    var shopItem = button.parentElement.parentElement;
    var title = shopItem.getElementsByClassName('h3')[0].innerText;
    var price = shopItem.getElementsByClassName('spanprice')[0].innerText;
    var image = shopItem.getElementsByClassName('spanImage')[0].src;
    console.log(title, price, image);
    addItemToCart(title, price, image);
    updateCartTotal();
}

function addItemToCart(title, price, image){
    var cartRow = document.createElement('tr');
    cartRow.classList.add('cart-row'); 
    var cartItems = document.getElementsByClassName('cartTable')[0];
    var cartItemNames = cartItems.getElementsByClassName('h3');
    for (var i = 0; i < cartItemNames.length; i++){
        if(cartItemNames[i].innerText == title) {
            alert('This Item Is Already In The Cart');
            return;
        }
    }
    var cartRowContents = `
      <td>
         <div class="cart-info">
           <img src="${image}">
            <div>
            <p>${title}</p> 
            <small>Price: ${price}</small><br>
            <a class="removebtn">Remove</a>    
            </div> 
        </div>
        </td>
        <td><input type="number" class="proquantity" value="1"></td>
        <td class="proprice">${price}</td>`
    cartRow.innerHTML = cartRowContents;
    cartItems.append(cartRow);
    cartRow.getElementsByClassName('removebtn')[0].addEventListener('click', removeCartItem);
    cartRow.getElementsByClassName('proquantity')[0].addEventListener('change', quantityChanged);
}

function updateCartTotal(){
    var cartItemContainer = document.getElementsByClassName('cartTable')[0];
    var cartRows = cartItemContainer.getElementsByClassName('cart-row');
    var total = 0;
    for(var i = 0; i < cartRows.length; i++){
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName('proprice')[0];
        var quantityElement = cartRow.getElementsByClassName('proquantity')[0];
        var price = parseFloat(priceElement.innerText.replace('$', ''));
        var quantity = quantityElement.value;
        total = total + (price * quantity);
    }
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName('cart-totalprice')[0].innerText = '$' + total;
    
}



function showCart(){
    $('#blackscreen').css("display", "block");
    $('#cartbody').css("display", "block");
}

function closeCart(){
    $('#blackscreen').css("display", "none");
    $('#cartbody').css("display", "none");
}