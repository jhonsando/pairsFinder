import calculatePairs from './pairsFinder';

describe('pairs finder algorithm', ()=>{
    
    it('Test case 1', () => {
        const chainOfNumbers = '1,9,5,0,20,-4,12,16,7';
        const expectedPairSum = '12';
        const result = calculatePairs(chainOfNumbers, expectedPairSum).trim();
        expect(result).toEqual('[5,7] [0,12] [-4,16]');
      });

    it('Test case 2: Repeated values', () => {
        const chainOfNumbers = '16,1,9,5,0,20,-4,9,12,16,7,5,5,5,-4,16';
        const expectedPairSum = '12';
        const result = calculatePairs(chainOfNumbers, expectedPairSum).trim();
        expect(result).toEqual('[5,7] [0,12] [16,-4]');
    });

    it('Test case 3:other values', () => {
        const chainOfNumbers = '3,3,3,8,4,9,-16,4,13,-1,-1,1';
        const expectedPairSum = '12';
        const result = calculatePairs(chainOfNumbers, expectedPairSum).trim();
        expect(result).toEqual('[8,4] [3,9] [13,-1]');
    });

    it('Test case 4:single value', () => {
        const chainOfNumbers = '37';
        const expectedPairSum = '37';
        const result = calculatePairs(chainOfNumbers, expectedPairSum).trim();
        expect(result).toEqual('');
    });

    it('Test case 5:single pair', () => {
        const chainOfNumbers = '4,8';
        const expectedPairSum = '12';
        const result = calculatePairs(chainOfNumbers, expectedPairSum).trim();
        expect(result).toEqual('[4,8]');
    });
})