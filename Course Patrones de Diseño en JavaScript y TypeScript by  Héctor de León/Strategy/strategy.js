class SaleContext {

    constructor(strategy) {
        this.strategy = strategy;
    }

    setContext(strategy) {
        this.strategy = strategy;
    }

    calculate(amount) {
        return this.strategy.calculate(amount);
    }
}

class RegularStrategy {

    constructor(tax) {
        this.tax = tax;
    }

    calculate(amount) {
        return amount + (amount * this.tax)
    }
}

class DiscountStrategy {

    constructor(tax, discount) {
        this.tax = tax;
        this.discount = discount;
    }

    calculate(amount) {
        return amount + (amount * this.tax) - this.discount;
    }
}

class ForeingSaleStrategy {

    getDollarRate() {
        return 20;
    }

    calculate(amount) {
        return amount / this.getDollarRate();
    }
}

// Sale Context
const saleContext = new SaleContext(new RegularStrategy(0.24));

// Regular Sale
let saleRes = saleContext.calculate(200);
console.log("Regular sale result: ", saleRes);

// Discount Sale
saleContext.setContext(new DiscountStrategy(0.24, 100));
saleRes = saleContext.calculate(200);
console.log("Discount sale result: ", saleRes);

// Foreing Sale
saleContext.setContext(new ForeingSaleStrategy())
saleRes = saleContext.calculate(210);
console.log("Foreing sale result: ", saleRes);
