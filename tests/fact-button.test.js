import {newFact} from '../js/fact-button.js';
import{describe,it,expect, vi, afterEach} from'vitest';

let fetchSpy;
describe('test to fact button',() =>{
    afterEach(() => {
        if (fetchSpy) {
            fetchSpy.mockRestore(); 
        }
    });
        it('should be take a random fact', async () =>{
        const mockSuccessResponse = { text: 'this is NOT a fact. Beee!' };
        fetchSpy = vi.spyOn(global, 'fetch').mockResolvedValue({
            json: vi.fn().mockResolvedValue(mockSuccessResponse),
        });
        const result = await newFact();
        expect(result).toBe('this is NOT a fact. Beee!');
        expect(fetchSpy).toHaveBeenCalledTimes(1)
        });
        it("should to be an error message if the API don't works", async() =>{
        fetchSpy = vi.spyOn(global, 'fetch').mockRejectedValue(new Error('Simulated network failure'));
        const result = await newFact();
        expect(result).toBe('Could not fetch a new fact at this time.');
       
        });
});