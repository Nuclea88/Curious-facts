const localKey = 'favoriteFacts';
let favArray;
const storedFavs = localStorage.getItem(localKey);
if (storedFavs) {
    favArray = JSON.parse(storedFavs);
} else {
    favArray = [];
}

export { favArray};