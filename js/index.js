import { newFact } from '../js/fact-button.js';
let contentViewer = document.getElementById('fact');

document.getElementById("new-fact-btn")?.addEventListener("click", async () => {
    let fact = await newFact();
        contentViewer.innerHTML = '';
        const factViewer = document.createElement('p');
        factViewer.classList.add('fact-text');
        factViewer.textContent = fact;
        contentViewer.appendChild(factViewer);
});
