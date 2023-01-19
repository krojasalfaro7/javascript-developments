class SingletonTS {

    private static instance: SingletonTS;
    name: string;

    private constructor(name: string) {
        this.name = name;
    }

    static getInstance(): SingletonTS {
        if (!SingletonTS.instance) {
            SingletonTS.instance = new SingletonTS('Unico');
        }
        return SingletonTS.instance; 
    }

}

const sin = SingletonTS.getInstance();
const sin2 = SingletonTS.getInstance();
console.log(sin.name)
console.log(sin2.name)
console.log(sin == sin2)

sin.name = 'Nuevo Nombre';
console.log(sin.name)
console.log(sin2.name)
console.log(sin == sin2)