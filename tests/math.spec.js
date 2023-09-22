const {sum, divide, product, subtract} = require('../math')




describe('#Math', () => {
describe('#sum', () => {
    it('returns the sum of 8 and 9', () => {
        const num1 = 8
        const num2 = 9
        const result = 17

        expect(sum(num1,num2)).toBe(result)
    });
});

 describe('#divide', () => { 
    it('returns the quotient of 10 and 2', () => {
        const num1 = 10
        const num2 = 2
        const result = 5

        expect(divide(num1, num2 )).toBe(result)
    });
    
});


 describe('#product', () => {
    it('returns the multiplied value of 11 and 6', () => {
        const num1 = 11
        const num2 = 6
        const result = 66

        expect(product(num1,num2)).toBe(result)
    });
    
 });

  describe('#subtraction', () => {
    it('returns the remainder of 102 an 10', () => {
        const num1 = 102
        const num2 = 10
        const result = 92

        expect(subtract(num1,num2)).toBe(92)
    });
    
 });

});
