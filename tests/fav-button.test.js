import {addFavs} from '../js/fav-button.js';
import {describe, it, expect} from 'vitest';

describe('Test from add to favs button', () =>{
const fact = 'do you know?';
    it('should be add the fact to fav array facts',()=>{
        const result = addFavs(fact);
        expect(result.favArray).toContain(fact);
        expect(result.message).toContain('fact added to your favorites');

    });
    it('should not to be add the fact if this fact is in fav array facts', () =>{
         const result = addFavs(fact);
        expect(result.favArray).toContain(fact);
        expect(result.message).toContain('You love this fact, you already added it!');

    });
});