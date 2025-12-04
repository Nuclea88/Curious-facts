import {favArray} from './fav-array.js';
function addFavs (newFact){
    const localKey = 'favoriteFacts';
    let message = null;
    let added = false;
    for ( let fact of favArray){
             if (fact == newFact){
            message = 'You love this fact, you already added it!';
            added = true;
        }
    }
    if (added == false){
        favArray.push(newFact);
        message = 'fact added to your favorites';
    }
    const favArrayLocal = JSON.stringify(favArray);
    localStorage.setItem(localKey,favArrayLocal);
    return {favArray, message}; 
    }
    export {addFavs};