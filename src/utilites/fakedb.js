// Use localStorage as your database for now
const addToDb = id =>{
    const exists = getDb(); //localStorage a shopping_cart nam a kisu ache ki nai check krse

    let shopping_cart ={};
    console.log(exists);
    if(!exists){
        shopping_cart[id] =1; // line 5 er empty object a 'id' dia value set kore disse 1
    }
    else{
        shopping_cart = JSON.parse(exists); // "exists" = Covert into javaScript Object
        if(shopping_cart[id]){
            const newCount = shopping_cart[id] + 1;
            shopping_cart[id] = newCount;
        }
        else{
            shopping_cart[id] =1;
        }
    }
  updateDb(shopping_cart);
}

const getDb = () => localStorage.getItem('shopping_cart'); ////localStorage a shopping_cart nam a kisu ache ki nai check krse
const updateDb = cart =>  // Convert into a String
{
    localStorage.setItem('shopping_cart', JSON.stringify(cart));
} 

const removeFromDb = id =>{
    const exists = getDb()
    if(!exists){

    }
    else{
        const shopping_cart = JSON.parse(exists);
        delete shopping_cart[id];
        updateDb(shopping_cart);
    }
}
export {addToDb, removeFromDb as deleteFromDb}