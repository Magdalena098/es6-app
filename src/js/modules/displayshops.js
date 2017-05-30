import {
    getData
} from '../api/ajax';

export default class Shops {

    constructor(element) {
        this.element = element;
        this.getShops();
        this.element.addEventListener('input', this.onInput.bind(this));
    }

    getShops() {
        getData().then(suggestions => {
            this.renderData(suggestions);
        });
    }

    renderData(suggestions) {

        let list = this.element.querySelector('.recipes');

        suggestions.forEach((filtered) => {
            let li = document.createElement('li');
            let liTwo = document.createElement('li');
            list.appendChild(li);
            list.appendChild(liTwo);
            let a = document.createElement('a');
            let aTwo = document.createElement('a');
            a.innerHTML = filtered.name;
            aTwo.innerHTML = filtered.cookingTime;
            li.appendChild(a);
            liTwo.appendChild(aTwo);
            filtered.mainIngredients.forEach((ingredient) => {
                let liThree = document.createElement('li');
                list.appendChild(liThree);
                let aThree = document.createElement('a');
                aThree.innerHTML = ingredient;
                liThree.appendChild(aThree);
            });
            filtered.ingredients.forEach((values) => {
                let liFour = document.createElement('li');
                list.appendChild(liFour);
                let aFour = document.createElement('a');
                aFour.innerHTML = values.quantity + "" + values.name;
                liFour.appendChild(aFour);
            });
        });
    }

    onInput(event) {
        const input = event.target;
        const query = this.element.querySelector('.user_input').value;

        this.searchQuery(query);      
    }

    searchQuery(query) {
        let list = this.element.querySelector('.recipes');
        let re = new RegExp("(" + query + ")");
        let aTag;
        let li;

        li = list.getElementsByTagName('li');

        for (var i = 0; i < li.length; i++) {
            aTag = li[i].getElementsByTagName("a")[0];

            if (aTag.innerHTML.toLowerCase().match(re) !== null) {
                li[i].style.display = "block";
            } else {
                li[i].style.display = "none";
            }
        }     
    }
}