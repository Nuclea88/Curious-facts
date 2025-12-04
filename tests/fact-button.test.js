import {newFact} from '../js/fact-button.js';
import{describe,it,expect, vi} from'vitest';

vi.mock('../js/fact-button.js',() => ({
    newFact: vi.fn(() => Promise.resolve('this is NOT a fact. Beee!')),
}))
describe('test to fact button',() =>{
    it('should be take a random fact', async () =>{
        const result = await newFact();
        expect(result).toBe('this is NOT a fact. Beee!');
    });
});