import {favArray} from './fav-array.js';
function addFavs (newFact){
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
    return {favArray, message}; 
    }
    export {addFavs};