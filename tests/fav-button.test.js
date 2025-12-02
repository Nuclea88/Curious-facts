import {addFavs} from '../js/fav-button.js';
import {describe, it, expect} from 'vitest';

describe('Test from add to favs button', () =>{
const fact = 'do you know?';
    it('should be add the fact to fav array facts',()=>{
        const result = addFavs(fact);
        expect(result.favArray).toContain(fact);
        expect(result.error).toContain('added fact to favorite list');

    });
    it('should not to be add the fact if this fact is in fav array facts', () =>{
         const result = addFavs(fact);
        expect(result.favArray).toContain(fact);
        expect(result.error).toContain('You love this fact, you already added it!');

    });
});