// Explicacion: Cada vez que se llama a new se invoca a constructor y aqui es donde se guarda en una variable estatica la primera creacion del objeto
// ya la segunda vez que se invoca a new, igual pasa por el constructor pero se verifica en la variable estatica sio previamente se ha creado un objeto
// si es asi, se retorna dicho objecto previamente creado.

class Singleton {

    static getInstance() {
        return Singleton.instance;
    }

    constructor() {
        console.log("Construyendo")
        this.random = Math.random();
        console.log(this.random)
        if (Singleton.instance) {
            return Singleton.instance;
        }
        Singleton.instance = this;
    }
}

const sin1 = new Singleton();
const sin2 = new Singleton();
console.log(sin1.random);
console.log(sin2.random);
const sin3 = Singleton.getInstance();
