//1 Desafio Entregable de Backend

class ProductManager {
    
    static ultId = 0;


   
    constructor() {
        this.products = [];
    }

    //Métodos: 

    addProduct(title, description, price, img, code, stock) {

        
        
        //Validamos todos los campos: 
        if(!title || !description || !price || !img || !code || !stock){
            console.log("Todos los campos son obligatorios"); 
            return;
        }

        //Validamos el código: 
        if(this.products.some(item => item.code === code)){
            console.log("el codigo tiene que ser unico");
            return;
        }

        //Creamos un nuevo objeto

        const newProduct = {
            id: ++ProductManager.ultId,
            title,
            description,
            price,
            img,
            code,
            stock
        }

        //Lo agrego al array: 

        this.products.push(newProduct);

    }

    getProducts() {
        console.log(this.products);
    }

    getProductById(id) {
        const product = this.products.find(item => item.id === id);

        if(!product) {
            console.log("Producto no encontrado!");
        } else {
            console.log("Producto encontrado ", product);
        }
        
    }


}



//testing: 


const manager = new ProductManager();



manager.getProducts();



manager.addProduct("producto prueba", "este es un producto prueba", 200, "sin imagen", "abc123", 25);





manager.addProduct("Futbol", "mundial 2010", 200, "sin imagen", "abc124", 50);


manager.addProduct("futbol", "mundial 2022", 200, "sin imagen", "abc125", 50);

//5)Se llamará el método “getProducts” 

manager.getProducts();


//6) Se llamará al método “addProduct” con los mismos campos de arriba

manager.addProduct("futbol", "mundial 2022", 200, "sin imagen", "abc125", 50);

//7) Se evaluará que getProductById devuelva error si no encuentra el producto o el producto en caso de encontrarlo

manager.getProductById(2);
manager.getProductById(50);