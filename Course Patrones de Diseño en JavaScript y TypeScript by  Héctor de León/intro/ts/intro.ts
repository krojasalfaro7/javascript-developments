class Drink {

    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    info(): string {
        return this.name;
    }
}

const drink = new Drink('Agua');
console.log(drink.info());

interface Product {
    price: number;
    getPrice(): string;
}

// Herencia
class Beer extends Drink implements Product {

    price: number;
    private alcohol: number;

    constructor(name: string, alcohol: number, price: number) {
        super(name);
        this.alcohol = alcohol;
        this.price = price;
    }

    info() {
        return super.info() + ', alcohol: ' + this.alcohol;
    }

    getPrice(): string {
        return `El precio de la cerveza ${this.info()} es: $${this.price}`;
    }
}

const beer = new Beer('Zulia', 7, 90);
console.log(beer.info());
console.log('Ver precio', beer.getPrice());

class Snak implements Product {

    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price
    }

    getPrice(): string {
        return `El precio del producto ${this.name} es: $${this.price}`;
    }
}

const snak = new Snak('Savoy', 900);
console.log(snak.getPrice());

const products: Product[] = [
    new Snak('Cocosete', 90),
    new Beer('Morena', 4.5, 200)
]

// console.log(products)

function getPrices(items: Product[]) {
    for (const item of items) {
        console.log(item.getPrice());
    }
}

getPrices(products);