"use strict";
import Circle from './Circle.js';
import Figure from './Figure.js';
import Rectangle from './Rectangle.js';
import Square from './Square.js';

const form = {
    changeSelect(e) {
        
        let htmlString = ``;
        const inputsHtml = document.getElementById('otherInputs');
        inputsHtml.innerHTML = htmlString;

    

        if(this.value == 'rectangle'){
            const inputElement =`<label>
            Width
            <input id="width" type="number">
            </label>
            `
            const inputElementHeight =`<label>
            Height
            <input id="height" type="number">
            </label>
            `
            console.log(inputElement+inputElementHeight);
            document.querySelector('#otherInputs').insertAdjacentHTML('beforeend',inputElement+inputElementHeight)

        }else if(this.value == 'square'){
            const inputElement =`<label>
                Size
                <input id="size" type="number">
            </label>
                `
            console.log(inputElement);
            document.querySelector('#otherInputs').insertAdjacentHTML('beforeend',inputElement)

        }else if(this.value == 'circle'){
            const inputElement =`<label>
                Radius
                <input id="radius" type="number">
            </label>
                `
            console.log(inputElement);
            document.querySelector('#otherInputs').insertAdjacentHTML('beforeend',inputElement)
        }   

    },
    init() {
        document.querySelector('#select').addEventListener("change", this.changeSelect)
        document.querySelector('#form').addEventListener("submit", this.submitForm)

    },
    inputElementsWithLabel(label, id) {


    },
    submitForm(e) {
        e.preventDefault();
        console.log('form submitted');

        const figureSelected = document.getElementById('select').value;


        let figure;

        if(figureSelected == 'rectangle') {
            const width = document.getElementById('width').value;
            const height = document.getElementById('height').value;

            figure = new Rectangle("Rectangle", width, height);

        } else if(figureSelected == 'square') {
            const size = document.getElementById('size').value;
            figure = new Square("Square",size);

        } else if(figureSelected == 'circle') {
            const radius = document.getElementById('radius').value;
            figure = new Circle("Circle",radius);
        }

        console.log(figure);
        const results = document.getElementById('results');
        results.innerHTML += figure.innerHtml;
    }
};


form.init();