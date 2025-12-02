import {favArray} from './fav-array.js';
function addFavs (newFact){
    let error = null;
    let added = false;
    for ( let fact of favArray){
             if (fact == newFact){
            error = 'You love this fact, you already added it!';
            added = true;
        }
    }
    if (added == false){
        favArray.push(newFact);
        error = 'added fact to favorite list';
    }
    return {favArray, error}; 
    }
    export {addFavs};