const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//displaying content
console.log(shoppingCart);

//adding Meat to infront of array
shoppingCart.unshift("Meat")
console.log(shoppingCart);

//adding Sugar to end of array
shoppingCart.push('Sugar')
console.log(shoppingCart);

//Removing Honey from array
shoppingCart.splice(4,1)
console.log(shoppingCart);

//Modifying Tea to 'Green Tea'
shoppingCart[3]='Green Tea'
console.log(shoppingCart);
