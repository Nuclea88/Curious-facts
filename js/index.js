import { newFact } from '../js/fact-button.js';
import {addFavs} from '../js/fav-button.js';
import { favArray } from '../js/fav-array.js';
let contentViewer = document.getElementById('fact');
let favPart = document.getElementById('favorite-viewer');
let initialFactButton = document.getElementById("new-fact-btn");
let addFavButton = document.getElementById("save-fact-btn");
let fact = null;
let favButton = document.getElementById("favorites-btn");


function favViewer (fact) {
        let view = document.createElement('p');
        view.classList.add('fav-text');
        view.id ='fav-text';
        view.textContent = fact;
        favPart.appendChild(view);
    }

initialFactButton?.addEventListener("click", async () => {
        fact = await newFact();
        contentViewer.innerHTML = '';
        favPart.innerHTML = '';
        const factViewer = document.createElement('p');
        factViewer.classList.add('fact-text');
        factViewer.id ='fact-text';
        factViewer.textContent = fact;
        contentViewer.appendChild(factViewer);
        initialFactButton.textContent = "get another curious fact";
        addFavButton.hidden = false;
});


addFavButton?.addEventListener("click",() =>{
        const fav = addFavs(fact);
        favPart.innerHTML = '';
        favViewer(fav.error);
});

favButton?.addEventListener("click",() =>{
    
    favPart.innerHTML = '';
    favArray.forEach((phrase, index) => {
        favViewer(phrase);
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.id = "fav" + index;
        deleteButton.textContent = "X";
        favPart.appendChild(deleteButton);

});

});