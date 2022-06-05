

const baseURL = 'http://localhost:3000'
let plants = []
let checkOutNum = 0;
let basket = []
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
let favorites = []
let cTotal = 0



//Node Getters
const mainDiv = () => document.getElementById('main');
const plantsLink = () => document.getElementById('plants-list');
const itemNumber = () => document.getElementById('item-number');
const checkOut = () => document.getElementById('check-out');
const shoppingBasket = () => document.getElementById('shopping-cart');
const favoritePlants = () => document.getElementById('favorite-plants')
const homePage = () => document.getElementById("home")


//Functions

const fetchplants = () => {
    fetch(baseURL + "/plants")
    .then(resp => resp.json())
    .then(data => {
        plants = data;
    })
}

const renderPlants = () => {

    const row = document.createElement('row')
    row.className = "row"

    plants.forEach(plant => {
        const col = renderPlant(plant);

        row.appendChild(col);

    });   

    mainDiv().appendChild(row)

}

const renderPlant = plant => {
    const col = document.createElement("div");
    col.className = "col s12 m4 l6"

    col.appendChild(createCard(plant))

    return col;
}

const renderBasketPlants = () => {
    // const deleteBtn = document.createElement("button")
    // deleteBtn.textContent = " x "
    
    basket.forEach((plant)=> {
    let cartPlant = renderPlant(plant)
    // cartPlant.appendChild(deleteBtn)

    
    mainDiv().appendChild(cartPlant)

    
    })

    mainDiv().className = "mini-card"

    

    const getTotalPrice = basket.map(plants => plants.price)
        cTotal = getTotalPrice.reduce((currentValue, total) => currentValue + total)
       
    document.getElementById('price-id').innerText = cTotal
    
     
}


// EVENT HANDLER

const loadHome = (e) => {
    e.preventDefault()
    resetMain();

    const h1 = document.createElement("h1")
    const img = document.createElement('img')

    h1.className = "center-align";
    img.className = "center-align"

    h1.innerText = "Welcome to Pothos!"
    img.setAttribute("src", "https://images.unsplash.com/photo-1563917774416-9f516a3b2fad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80")

    mainDiv().appendChild(h1);
    mainDiv().appendChild(img);

}
 

function checkOutNumber(e) {
    e.preventDefault();
    basket.push(this);
    itemNumber().style.display = 'inline-block';
    checkOut().innerText = basket.length;
   

}


const renderPlantsPage = (e) => {
   e.preventDefault();


    resetMain();

    const h3 = document.createElement("h3")
    h3.innerText = "Plant Selection";
    mainDiv().appendChild(h3);


    renderPlants();
}

const renderBasketPage = (e) => {
    e.preventDefault();

    resetMain();

    const h3 = document.createElement("h3")
    h3.innerText = "Basket Items";

    const div = document.createElement('div')
    const div2 = document.createElement('div')
    const totalPrice = document.createElement('h4')
    const price = document.createElement('h4')
    const checkOutBtn = document.createElement('button')


    div.className = "product-container"
    div2.className="product-header"
    totalPrice.className="total"
    price.className = "price-total"
    checkOutBtn.className="check-out"
    

    price.id = "price-id"
    totalPrice.innerText="TOTAL: $"
    price.innerText = cTotal
    checkOutBtn.innerText = "Check Out"

    checkOutBtn.addEventListener("mouseover", (e) => {
        checkOutBtn.style.background = "gold";
    })

    checkOutBtn.addEventListener("mouseout", (e) => {
        checkOutBtn.style.background = "";
    })

    checkOutBtn.addEventListener('click', function (e) {
        e.preventDefault();
        resetMain();
        
    
        const h3 = document.createElement("h3")
        h3.innerText = "Check-Out";
        mainDiv().appendChild(h3);
    
        const checkOutDiv = document.createElement('div');
        const paymentDiv = document.createElement('div');
        const methodCard = document.createElement('label');
        const visaLogo = document.createElement('img');
        const radioInput = document.createElement('div');
        const radioPayment = document.createElement('input')
        const methodPaypal = document.createElement('label');
        const paypalLogo = document.createElement('img');
        const radioInputPaypal = document.createElement('div');
        const radioPaypal = document.createElement('input');
        
        
                //Input Fields
        const inputFields = document.createElement('div');
        const column = document.createElement('div');
        const cardHolder = document.createElement('label');
        const cardHolderInput = document.createElement("input");
        const smallInputs = document.createElement('div');
        const cardExpirationDate = document.createElement('div');
        const validCard = document.createElement('label')
        const validCardDate = document.createElement('input')
        const verificationDiv = document.createElement('div')
        const verificationLabel = document.createElement('label')
        const verificationInput = document.createElement('input')
        const column2 = document.createElement('div')
        const cardNumber = document.createElement ('label')
        const cardNumberInput = document.createElement('input')
        const cardInfo = document.createElement('span')
        const panelFooter = document.createElement('div')
        const submitBtn = document.createElement('button')
    
    
        checkOutDiv.className = "checkout-panel";
        paymentDiv.className = "payment-method";
        methodCard.className = "method card";
        radioInput.className = "radio-input";
        methodPaypal.className = "method paypal";
        radioInputPaypal.className = "radio-input";
        radioPaypal.id = "paypal"
        radioPaypal.type = "radio"

                //Input Infields
        inputFields.className = "input-fields"
        column.className = "column-1"
        cardHolder.for = "cardholder"
        cardHolder.innerText = "Cardholder's Name"
        cardHolderInput.type = "text"
        cardHolderInput.id = "cardholder"
        smallInputs.className = "small-inputs"
        validCard.for = "date"
        validCard.innerText = "Valid Thru"
        validCardDate.type = "text"
        validCardDate.id = "date"
        validCardDate.placeholder = "MM / YY"
        verificationLabel.for = "verification"
        verificationLabel.innerText= "CVV / CVC *"
        verificationInput.type = "password"
        verificationInput.id = "verification"
        column2.className = "column-2"
        cardNumber.for= "cardnumber"
        cardNumber.innerText = "Card Number"
        cardNumberInput.type = "password"
        cardNumberInput.id = "cardNumber"
        cardInfo.className = "info"
        cardInfo.innerText = " * CVV or CVC is the card security code, unique three digits number on the back of your card separate from its number."
        panelFooter.className = "panel-footer"
        submitBtn.className = "btn submit-btn"
        submitBtn.innerText = "SUBMIT"

        
    
    
        visaLogo.setAttribute("src", "https://cdn2.vectorstock.com/i/thumb-large/63/66/delhi-india-february-27-2021-popular-credit-vector-36496366.jpg")
        radioPayment.id = "card"
        radioPayment.type = "radio"
        paypalLogo.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdMsntvPU4rjVdQNCq07IMSTpUppW3ujAjUg&usqp=CAU")
        cardHolder.innterText = "Cardholder's Name"


        submitBtn.addEventListener('click', (e) => {
            e.preventDefault();
            alert("Payment Recieved")
        })

    
        checkOutDiv.appendChild(paymentDiv);
        paymentDiv.appendChild(methodCard);
        methodCard.appendChild(visaLogo);
        methodCard.appendChild(radioInput);
        radioInput.appendChild(radioPayment);
        paymentDiv.appendChild(methodPaypal);
        methodPaypal.appendChild(paypalLogo);
        methodPaypal.appendChild(radioInputPaypal);
        radioInputPaypal.appendChild(radioPaypal);

                //Input Fields
        checkOutDiv.appendChild(inputFields);
        inputFields.appendChild(column);
        column.appendChild(cardHolder);
        column.appendChild(cardHolderInput)
        column.appendChild(smallInputs);
        smallInputs.appendChild(cardExpirationDate);
        cardExpirationDate.appendChild(validCard);
        cardExpirationDate.appendChild(validCardDate);
        smallInputs.appendChild(verificationDiv);
        verificationDiv.appendChild(verificationLabel);
        verificationDiv.appendChild(verificationInput);
        inputFields.appendChild(column2)
        column2.appendChild(cardNumber)
        column2.appendChild(cardNumberInput);
        column2.appendChild(cardInfo);
        checkOutDiv.appendChild(panelFooter);
        panelFooter.appendChild(submitBtn);




        mainDiv().appendChild(checkOutDiv);
    })
    

    mainDiv().appendChild(h3);

    div.appendChild(div2)
    div2.appendChild(totalPrice)
    div2.appendChild(price)
    div2.appendChild(checkOutBtn)

    mainDiv().appendChild(div)


    renderBasketPlants()
   

}



const heartClick = (plant, e) => {
    e.preventDefault()
    const heart = e.target
    console.log(plant)
    
    if (e.target.innerText === EMPTY_HEART) {
        (e.target.innerText = FULL_HEART) 
        favorites.push(plant)
        
    }
    else {
      e.target.innerText = EMPTY_HEART
      favorites.filter(favPlant.id !== plant.id)
    }

}


const renderFavoritesPage = (e) => {
    e.preventDefault();

    resetMain();

    const h3 = document.createElement("h3")
    h3.innerText = "Saved For Later";
    mainDiv().appendChild(h3);

    favorites.forEach((plant)=> {
        let favoritePlant = renderPlant(plant)
        mainDiv().appendChild(favoritePlant)
    })


}




//HELPER
const createCard = (plant) => {
    const divCard = document.createElement('div');
    const divImage = document.createElement('div');
    const img = document.createElement('img');
    const span = document.createElement('span');
    const divCardContent = document.createElement('div');
    const pDescription = document.createElement('p')
    const divCardAction = document.createElement('div');
    const link1 = document.createElement('a');
    const heart = document.createElement('li');
    const price = document.createElement("li")
    


    divCard.className = "card";
    divImage.className = "card-image";
    span.className = "card-titl"
    divCardContent.className = "card-content";
    divCardAction.className = "card-action";
    heart.className = "favorite";
    price.className = "item-price"

   

    img.setAttribute("src", plant.imageURL);
    link1.setAttribute("href", "#");
    


    span.innerText = plant.name;
    pDescription.innerText = plant.description;
    link1.innerText = "Add to Basket"
    heart.innerText = "♡"
    price.innerText = `\$ ${plant.price}`;
    

    link1.addEventListener('click', checkOutNumber.bind(plant));
    heart.addEventListener('click', heartClick.bind(plant, plant))
    


    divImage.appendChild(img);
    divImage.appendChild(span);



    divCardContent.appendChild(pDescription);
    pDescription.appendChild(price)

    divCardAction.appendChild(link1);

    divCard.appendChild(divImage);
    divCard.appendChild(divCardContent);
    divCard.appendChild(divCardAction);

    divImage.appendChild(heart);

    return divCard

}


// EVENT LISTENER

const homeLink = () => {
    homePage().addEventListener('click', loadHome)
}
const attachPlantsLinkEvent = () => {
    plantsLink().addEventListener('click', renderPlantsPage);
}

const resetMain = () => {
    mainDiv().innerHTML = ""
}

const hideItemNumber = () => {
    itemNumber().style.display = 'none'

}

const seeBasket = () => {
    shoppingBasket().addEventListener('click', renderBasketPage);
}

const viewFavorites = () => {
    favoritePlants().addEventListener('click', renderFavoritesPage)
}




document.addEventListener('DOMContentLoaded', () => {
    homeLink()
    fetchplants();
    attachPlantsLinkEvent();
    hideItemNumber();
    seeBasket();
    viewFavorites();
    
    
})