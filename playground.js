var products = [
    { name:'tomatos' , type:'vegetable' , quantity: 0 , price: 1 },
    { name:'banana' , type:'fruit' , quantity: 10 , price: 15  },
    { name:'garlic' , type:'vegetable' , quantity: 30 , price: 10  },
    { name:'apple' , type:'fruit' , quantity: 3 , price: 5  },
    { name:'beans' , type:'vegetable' , quantity: 35 , price: 9  },
];

var filteredProducts = [] ; 

filteredProducts = products.filter(product => {
    return product.type ==='fruit' && product.quantity > 0 && product.price <= 10
});

console.log(filteredProducts);


