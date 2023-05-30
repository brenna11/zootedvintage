/* constructor for store item */
function StoreItem(id, name, price, qoh, max, category, cos, reviewItem, description, image) {
    this.id = id; // string
    this.name = name; // string
    this.price = price; // number
    this.qoh = qoh; // number
    this.max = max; // number
    this.category = category; // string
    this.cos = cos; // number
    this.reviewItem = reviewItem; // array  
    this.description = description; // string
    this.image = image; // string
}

/* constructor for cart item */
function CartItem(id, price, quantity, subtotal,shipping) {
    this.id = id; // string
    this.price = price; // number 
    this.quantity = quantity; // number 
    this.subtotal = subtotal; // number
    this.shipping = shipping; // number
}

/* constructor for review item */
function reviewItem(review, rating) {
    this.review = review; // string
    this.rating = rating; // number
}

// add item to StoreItem
var item1 = new StoreItem("C001","The North Face Puffer Coat Black",200,7,2,"Coat",14,[],"Packable lightweight puffer coat perfect for carrying along on a hike or cold weather.","coat1.jpg");
var item2 = new StoreItem("C002","Moncler Coat Orange",210,5,1,"Coat",17,[],"This style is characterized by the micro ripstop nylon's elegant texture with classic boudin quilting and a detachable hood to face any weather.","coat2.jpg");
var item3 = new StoreItem("C003","Burberry Fleece Lined Coat Beige",245,10,4,"Coat",20,[],"Very good condition vintage Burberry Fleece Lined Coat Beige Large.","coat3.jpg");
var item4 = new StoreItem("C004","Calvin Klein Coat Beige",89,25,5,"Coat",8,[],"Elegant and effortless features refined wool overcoats.","coat4.jpg");
var item5 = new StoreItem("H001","Champion Hooded Jacket",190,17,3,"Hoodies",13,[],"Champion Packable Half-zip Hooded Water-resistant Jacket.","hood1.jpg");
var item6 = new StoreItem("H002","Carhartt Hoodie Black",91,8,4,"Hoodies",7,[],"A straightforward sense of style makes this Carhartt Hoodie Black ideal for everyone who values quality above all else.","hood2.jpg");
var item7 = new StoreItem("H003","Adidas Hoodie Grey",75,30,5,"Hoodies",5,[],"Strong, dynamic, fierce and diverse, the adidas grey hoodie can be used as multi-functional accessory, perfect for wearing in the gym, evening walks or even to social events.","hood3.jpg");
var item8 = new StoreItem("H004","Balenciaga Logo Print Distressed-finish Hoodie",1650,3,1,"Hoodies",299,[],"Knitted from soft cotton for a signature oversized fit with slightly dropped shoulders. It's purposefully distressed with artful slashes and lined with soft jersey.","hood4.jpg");
var item9 = new StoreItem("S001","Adidas Sweatshirt Blue",82,11,5,"Sweatshirt",6,[],"Blue sweatshirt by adidas is carefully designed according to the latest trends and styles.","sweat1.jpg");
var item10 = new StoreItem("S002","Champion Reverse Weave Sweatshirt",75,19,10,"Sweatshirt",5,[],"Classic unisex fit and signature ribbed stretch side panels for mobility. Reverse weave fleece is cut on the cross-grain to resist vertical shrinkage, so the fit stays true.","sweat2.jpg");
var item11 = new StoreItem("S003","Puma Sweatshirt Charcoal",69,37,16,"Sweatshirt",4,[],"The perfect addition to your athletic wardrobe these soft, plush toppers look great thank to their fun, modern styles and bright colors.","sweat3.jpg");
var item12 = new StoreItem("S004","Nike Sweatshirt Black",200,22,7,"Sweatshirt",11,[],"Black sweatshirt with the softly brushed fabric, these are ideal for morning jogs, it's versatile enough to get straight into your wardrobe","sweat4.jpg");
var item13 = new StoreItem("P001","Tommy Hilfiger Jeans Navy",72,15,4,"Pants",4,[],"Skinny, denim, slim fit jeans in navy perfect for everyday looks.","pants1.jpg");
var item14 = new StoreItem("P002","Versace Jeans Blue",110,4,1,"Pants",9,[],"A wardrobe staple, this slim fit jeans are easily dressed up or down.","pants2.jpg");
var item15 = new StoreItem("P003","Moschino Jeans Pink",125,8,2,"Pants",10,[],"Pink denim jeans perfect for a girls night out.","pants3.jpg");
var item16 = new StoreItem("P004","Palm Angel Straight-leg Track Pants",580,9,1,"Pants",79,[],"Long track pants in pink. Elasticized waistband. Two-pocket styling. Central pinch seams and Palm Angels logo printed at front.","pants4.jpg");
var item17 = new StoreItem("J001","Timberland Suede Jacket Brown",175,6,3,"Jacket",12,[],"Vintage Timberland Suede Jacket, excellent quality.","jacket1.jpg");
var item18 = new StoreItem("J002","Dickies Deadstock Jacket White",135,13,1,"Jacket",11,[],"Deadstock Dickies quilt lined white jacket in good condition.","jacket2.jpg");
var item19 = new StoreItem("J003","Guess Denim Jacket Blue",105,20,5,"Jacket",9,[],"A classic wardrobe staple, this denim jacket features a button-front closure and folded collar.","jacket3.jpg"); 

// global variable
var all = [item1,item2,item3,item4,item5,item6,item7,item8,item9,item10,item11,item12,item13,item14,item15,item16,item17,item18,item19];
var cart = [];
var storeItem = all.length;

// initialize function when page loads
function loads() {
    displayDateTime();
    displayStoreItems();
    showCart();
}

// display current day/time 
function displayDateTime() {
    var dateTime = new Date();
    document.getElementById("dateTime").innerHTML = dateTime;
    console.log(dateTime);
}

// change currency on the dropdown menu
function changeCurrency(){
    displayStoreItems();
    showCart();
}

// set the currency price
function currencySelection(price) {
    this.price = price;
    let choseCurrency = document.getElementById("currencySelector").value;
    let realprice;
    if (choseCurrency === "USD") {
        realprice = price * 0.79;
        realprice = realprice.toFixed(2);
    }
    else if (choseCurrency === "GBP") {
        realprice = price * 0.61;
        realprice = realprice.toFixed(2);
    }
    else {
        realprice = price * 1;
        realprice = realprice.toFixed(2);
    }
    return realprice;
}

// change the currency code 
function currencyCode() {
    let choseCurrency = document.getElementById("currencySelector").value;
    let currencyCode;
    if (choseCurrency === "USD") {
        currencyCode = "USD"
    }
    else if (choseCurrency === "GBP") {
        currencyCode = "GBP"
    }
    else {
        currencyCode = "CAD"
    }
    return currencyCode;
}

// add to cart 
function addCart() {
    // get the value from the user
    let addID = document.getElementById("addItemId").value;
    let count = document.getElementById("addItemQty").value * 1;
    let status = "fail";
    let have = false;
    let index;
    
    for (let i = 0 ; i < storeItem ; i++) {
        if (addID === all[i].id) {
            status = "ok";
        }
    }

    if (status === "fail") {
        // validation of product ID
        document.getElementById("addIDValidationMessage").innerHTML = "Sorry this item isn't available in our shop";
    }
    else {
        // clear input fields
        document.getElementById("addIDValidationMessage").innerHTML = "";
        document.getElementById("addQtyValidationMessage").innerHTML = "";
        if (count <= 0) {
            // check if user enter something in the field
            document.getElementById("addQtyValidationMessage").innerHTML = "Add at least 1 item to cart!"
        }
        else {
            for (let i = 0 ; i < cart.length ; i++) {
                if (addID === cart[i].id) {
                    have = true;
                    index = i;
                }
            }

            if (have === true) {
                for (let i = 0 ; i < storeItem ; i++) {
                    if (addID === all[i].id) {
                        if ((cart[index].quantity + count) <= all[i].max) {
                            cart[index].quantity += count;
                            cart[index].subtotal += (count * cart[index].price);
                        }
                        else {
                            document.getElementById("addQtyValidationMessage").innerHTML = `This item is only available for ${all[i].max} pieces per customer!`
                        }
                    }
                }
            }
            else {
                for (let i = 0 ; i < storeItem ; i++) {
                    if (addID === all[i].id) {
                        if (count <= all[i].max) {
                            cart.push(new CartItem(addID, all[i].price, count, all[i].price * count, all[i].cos))
                        }
                        else {
                            document.getElementById("addQtyValidationMessage").innerHTML = `This item is only available for ${all[i].max} pieces per customer!`
                        }
                    }
                }
            }
            showCart();
        }
    }
    console.log(cart)  
}

// remove item from cart
function removeCart() {
    let addID = document.getElementById("addItemId").value;
    let count = document.getElementById("addItemQty").value * 1;
    let status = "fail";
    let have = false;
    let index;
    
    for (let i = 0 ; i < storeItem ; i++) {
        if (addID === all[i].id) {
            status = "ok";
        }
    }

    if (status === "fail") {
        // user entering wrong product ID
        document.getElementById("addIDValidationMessage").innerHTML = "ID not valid! Please try again.";
    }
    else {
        // clear input fields
        document.getElementById("addIDValidationMessage").innerHTML = "";
        document.getElementById("addQtyValidationMessage").innerHTML = "";
        if (count <= 0) {
            document.getElementById("addQtyValidationMessage").innerHTML = "Enter the amount of item to remove!"
        }
        else { 
            for (let i = 0 ; i < cart.length ; i++) {
                if(addID === cart[i].id) {
                    have = true;
                    index = i;
                }
            }

            if (have === true) {
                if (cart[index].quantity < count) {
                    document.getElementById("addQtyValidationMessage").innerHTML = `You only have ${cart[index].quantity} of this item in the cart!`
                }
                else {
                    cart[index].quantity -= count;
                    cart[index].subtotal -= (cart[index].price * count);
                }
            }
            else {
                document.getElementById("addIDValidationMessage").innerHTML = "This item is not in the cart!";
            }

            //check if there's nothing in the cart
            if (cart[index].quantity <= 0) {
                cart.splice(index,1);
                document.getElementById("addItemId").value = "";
                document.getElementById("addItemQty").value = "";
            }

            showCart();
        }
    }
    console.log(cart)
}

// display alert of each product details
function showDetails() {
    let addID = document.getElementById("addItemId").value;
    let have = false;
    let index;

    let details = "";
    let avg = 0;
    let reviews = "";

    for (let i = 0 ; i < storeItem ; i++) {
        if(addID === all[i].id){
            have = true;
            index = i;
        }
    }

    if (have === true) {
        details = `Item details:\n\nID: ${all[index].id}\nName: ${all[index].name}\nPrice: $${currencySelection(all[index].price)} (${currencyCode()})\nQuantity on hand: ${all[index].qoh}\nMax per customer: ${all[index].max}\nCategory: ${all[index].category}\nShipping cost: $${currencySelection(all[index].cos)} (${currencyCode()})\nDescription: ${all[index].description} \n\nReviews:\n`
        
        // reviews and ratings
        for (let i = 0 ; i < all[index].reviewItem.length ; i++) {
            avg += all[index].reviewItem[i].rating;
            reviews += `Review ${i+1}: ${all[index].reviewItem[i].review}\n`
        }

        if (all[index].reviewItem.length > 0) {
            avg = avg / all[index].reviewItem.length;
            avg = avg.toFixed(2);
        }
        console.log(avg);
        alert(`${details}${reviews}\nAverage Rating: ${avg}`);

        document.getElementById("addItemId").value = "";
        document.getElementById("addItemQty").value = "";
    }
    else {
        document.getElementById("addIDValidationMessage").innerHTML = "This item doesn't exist!";
    }

}

// display item in cart
function showCart() {
    let cartItem = document.getElementById("cart");

    if (cart.length > 0) {
        document.getElementById("nocart").innerHTML = "";
        cartItem.innerHTML = `<th>ID</th><th>Price</th><th>Quantity</th><th>Subtotal</th>`

        let data;
        for (let i = 0 ; i < cart.length ; i++) {
            // create cart table 
            data = document.createElement('tr');
            data.innerHTML = `
                                <th>${cart[i].id}</th>
                                <th>${currencySelection(cart[i].price)} (${currencyCode()})</th>
                                <th>${cart[i].quantity}</th>
                                <th>${currencySelection(cart[i].subtotal)} (${currencyCode()})</th>
                            `
            cartItem.appendChild(data);
        }

        // set the item subtotal and shipping cost to 0
        let itemSubtotal = 0;
        let shipping = 0;

        for (let i = 0 ; i < cart.length ; i++) {
            itemSubtotal += cart[i].subtotal;
            shipping += cart[i].quantity * cart[i].shipping;
        }

        // calculation
        let subTotal = itemSubtotal + shipping;
        let estimatedTax = Math.ceil(subTotal * 0.13);
        let totalOrder = subTotal + estimatedTax;
       

        document.getElementById("subTotal").innerHTML = `Items Subtotal: $${currencySelection(itemSubtotal)} (${currencyCode()})`
        document.getElementById("etmShipping").innerHTML = `Estimated Shipping: $${currencySelection(shipping)} (${currencyCode()})`
        document.getElementById("allTotal").innerHTML = `Subtotal: $${currencySelection(subTotal)} (${currencyCode()})`
        document.getElementById("tax").innerHTML = `Taxes: $${currencySelection(estimatedTax)} (${currencyCode()})`
        document.getElementById("finalTotal").innerHTML = `Total: $${currencySelection(totalOrder)} (${currencyCode()})` 
    } 
    else {
        document.getElementById("nocart").innerHTML = "No items selected! Add something to your cart!";
        cartItem.innerHTML = "";
        document.getElementById("subTotal").innerHTML = `Items Subtotal: $0.00 (${currencyCode()})`
        document.getElementById("etmShipping").innerHTML = `Estimated Shipping: $0.00 (${currencyCode()})`
        document.getElementById("allTotal").innerHTML = `Subtotal: $0.00 (${currencyCode()})`
        document.getElementById("tax").innerHTML = `Taxes: $0.00 (${currencyCode()})`
        document.getElementById("finalTotal").innerHTML = `Total: $0.00 (${currencyCode()})`
    }

}

// display store items
function displayStoreItems() {
    // get selected value from store items dropdown
    let filter = document.getElementById("displayFilter").value;
    // create table to display item
    let table = document.getElementById("item");
    // show all item category
    if (filter === "All") {
        table.innerHTML =  `<tr><th>ID</th><th>Product Name</th><th>Price</th><th>Quantity on Hand</th><th>Max</th><th>Category</th><th>Image</th></tr>`

        let data;
        
        for (let i = 0 ; i < storeItem ; i++) {
            data = document.createElement('tr');
                data.innerHTML = `
                                    <th>${all[i].id}</th>
                                    <th>${all[i].name}</th>
                                    <th>$${currencySelection(all[i].price)} (${currencyCode()})</th>
                                    <th>${all[i].qoh}</th>
                                    <th>${all[i].max}</th>
                                    <th>${all[i].category}</th>
                                    <th><img src="./img/${all[i].image}" alt="image" width="120px" height="120px"></th>
                                    `
                table.appendChild(data);
        }
    }
    // show selected category
    else {
        table.innerHTML = `<tr><th>ID</th><th>Product Name</th><th>Price</th><th>Quantity on Hand</th><th>Max</th><th>Category</th><th>Image</th></tr>`

        let data;
        let storeItem = all.length;
        for (let i = 0 ; i < storeItem ; i++) {
            if (all[i].category === filter) {
                data = document.createElement('tr');
                data.innerHTML = `
                                    <th>${all[i].id}</th>
                                    <th>${all[i].name}</th>
                                    <th>$${currencySelection(all[i].price)} (${currencyCode()})</th>
                                    <th>${all[i].qoh}</th>
                                    <th>${all[i].max}</th>
                                    <th>${all[i].category}</th>
                                    <th><img src="./img/${all[i].image}" alt="image" width="120px" height="120px"></th>
                                    `
                table.appendChild(data);
            }
        }
    
    }
}

// review items
function addReviews() {
    // get customer's reviews
    let pID = document.getElementById("reviewId").value;
    let review = document.getElementById("reviewText").value;
    let rate = document.getElementById("ratingNum").value;
    let have = false;
    let index;

    for (let i = 0 ; i < storeItem ; i++) {
        if (pID === all[i].id) {
            have = true;
            index = i;
        }
    }    
    
    document.getElementById("reviewIdCode").innerHTML = "";
    document.getElementById("reviewItemText").innerHTML = "";
    document.getElementById("addRatingValidationMessage").innerHTML = "";

    // review validation
    if (have == false) {
        document.getElementById("reviewItemText").innerHTML = "Type something to review!";
    }
    else {
        document.getElementById("reviewItemText").innerHTML = "";
        if (review == "") {
            document.getElementById("reviewIdCode").innerHTML = "Please review something!";
        }
        else {
            document.getElementById("reviewIdCode").innerHTML = "";
            if (rate < 1 || rate > 5) {
                document.getElementById("addRatingValidationMessage").innerHTML = "Rate 1-5!";
            }
            else {
                document.getElementById("addRatingValidationMessage").innerHTML = "";
                all[index].reviewItem.push(new reviewItem(review, rate * 1));
                alert(`Thank you for your review of the ${all[index].name}!`);

                document.getElementById("reviewId").value = "";
                document.getElementById("reviewText").value = "";
                document.getElementById("ratingNum").value = "";
            }
        }
    }
    
}