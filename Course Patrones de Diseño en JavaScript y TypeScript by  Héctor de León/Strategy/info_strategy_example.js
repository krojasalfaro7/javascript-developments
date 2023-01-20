class InfoContext {

    constructor(strategy, data, htmlElement) {
        this.setStrategy(strategy);
        this.data = data;
        this.htmlElement = htmlElement;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    show() {
        this.strategy.show(this.data, this.htmlElement);
    }
}

class ListStrategy {

    show(data, htmlElement) {
        htmlElement.innerHTML = data.reduce((ac, item) => {
            return ac + 
            `<div>
                <h2>${item.name}</h2>
            </div>
            <hr/>`
        }, "")
    }
}

class ListDetailsStrategy {

    show(data, htmlElement) {
        htmlElement.innerHTML = data.reduce((ac, item) => {
            return ac + 
            `<div>
                <h2>${item.name}</h2>
                <p>${item.content}</p>
                <p>${item.detail}</p>
            </div>
            <hr/>`
        }, "")
    }
}

class ListDetailsWithImageStrategy {

    show(data, htmlElement) {
        htmlElement.innerHTML = data.reduce((ac, item) => {
            return ac + 
            `<div>
                <img src="${item.src}" width="50%"></img>
                <h2>${item.name}</h2>
                <p>${item.content}</p>
                <p>${item.detail}</p>
            </div>
            <hr/>`
        }, "")
    }
}

// Data to swho
data = [
    {
        'name': 'Elemento 1',
        'content': 'Contenido del elemento 1',
        'detail': 'Este es el detalle del elemento 1',
        'src': 'https://pm1.narvii.com/6298/06bd1b9129fdd960b43905a3bd1c80cac4e40c23_00.jpg'
    },
    {
        'name': 'Elemento 2',
        'content': 'Contenido del elemento 2',
        'detail': 'Este es el detalle del elemento 2',
        'src': 'https://pngimg.com/d/pokemon_PNG37.png'
    },
    {
        'name': 'Elemento 3',
        'content': 'Contenido del elemento 3',
        'detail': 'Este es el detalle del elemento 3',
        'src': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq6ZYThtuxQQyL_BWeYATGujlCoNN_5MIrdW3dYAoH3Yil06XbdXm0PJ0hfFvc694NFks&usqp=CAU'
    }
]
const htmlElement = contenido;

// Strategies
const strategies = {
    'list': new ListStrategy(),
    'list-with-details': new ListDetailsStrategy(),
    'list-with-details-and-image': new ListDetailsWithImageStrategy(),
}

// Show as List
const info = new InfoContext(new ListStrategy(), data, htmlElement);
info.show();

// Listener info type represent
selection.addEventListener("change", (event) => {
    const showOption = event.target.value;
    info.setStrategy(strategies[showOption]);
    info.show();
});