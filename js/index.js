import { newFact } from '../js/fact-button.js';
let contentViewer = document.getElementById('viewer');




document.getElementById("new-fact-btn")?.addEventListener("click", async () => {
    let fact = await newFact();
   /* fact.then((text) => {
        contentViewer.textContent = text;*/
        contentViewer.innerHTML = '';
        const factViewer = document.createElement('p');
        factViewer.classList.add('fact-text');
        factViewer.textContent = fact;
        contentViewer.appendChild(factViewer);
});
