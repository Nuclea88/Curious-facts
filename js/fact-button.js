async function newFact() {
    try {
        const response = await fetch("https://uselessfacts.jsph.pl/random.json?language=en");
        const data = await response.json();
        return data.text;


        }catch (error) {
            console.error('Error fetching new fact:', error);
        return 'Could not fetch a new fact at this time.';
        }}


    export { newFact };