import { newFact } from '../js/fact-button.js';
import {addFavs} from '../js/fav-button.js';
import { favArray } from '../js/fav-array.js';
let contentViewer = document.getElementById('fact');
let favPart = document.getElementById('favorite-viewer');
let initialFactButton = document.getElementById("new-fact-btn");
let addFavButton = document.getElementById("save-fact-btn");
let fact = null;
let favButton = document.getElementById("favorites-btn");
let intro = document.getElementById("intro");

function favViewer (fact) {
        let view = document.createElement('p');
        view.classList.add('fav-text');
        view.id ='fav-text';
        view.textContent = fact;
        return view;
    }

initialFactButton?.addEventListener("click", async () => {
        fact = await newFact();
        contentViewer.innerHTML = '';
        favPart.innerHTML = '';
        intro.textContent ='Do you know this?';

        const factViewer = document.createElement('p');
        factViewer.classList.add('fact-text');
        factViewer.id ='fact-text';
        factViewer.textContent = fact;
        contentViewer.appendChild(factViewer);
        initialFactButton.textContent = "Get another curious fact";
        addFavButton.hidden = false;
         favButton.hidden = false;
        initialFactButton.classList.add('flex-1');
        favButton.classList.add('flex-1');
});


addFavButton?.addEventListener("click",() =>{
        const fav = addFavs(fact);
        favPart.innerHTML = '';
        let messageElement = favViewer(fav.message);
        favPart.appendChild(messageElement);
});

favButton?.addEventListener("click",() =>{
    
    favPart.innerHTML = '';
    contentViewer.innerHTML = '';
    addFavButton.hidden = true;
    favButton.hidden = true;
    intro.textContent ='Your favorite facts:';

    favArray.forEach((phrase, index) => {
        const favContainer = document.createElement('div');
        favContainer.classList.add('favorite-item-container');
        favContainer.dataset.index = index;
        const phraseElement =favViewer(phrase);

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.textContent = "X";
        deleteButton.addEventListener('click', (event) => {
            const itemIndex = parseInt(favContainer.dataset.index);
            favArray.splice(itemIndex, 1);
            favContainer.remove();
            favButton.click();
            });
        favContainer.appendChild(phraseElement);
        favContainer.appendChild(deleteButton);
        contentViewer.appendChild(favContainer);
});

});