const {sum} = require("../app")

test('adds 14 + 9 to equal 23',()=>{

    let total = sum(14,9)

    expect(total).toBe(23)

})

test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('../app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("One Dollar should be 146.26 Yen", function() {
    // Import the function from app.js
    const { fromDollarToYen } = require('../app.js');

    // Use the function like its supposed to be used
    const yen = fromDollarToYen(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 146.26; 
    
    // This is the comparison for the unit test
     expect(fromDollarToYen(3.5)).toBe(511.90999999999997); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("One Pound should be 179.89 Yen", function() {
    // Import the function from app.js
    const { fromYenToPound } = require('../app.js');

    // Use the function like its supposed to be used
    const pound = fromYenToPound(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 179.89; 
    
    // This is the comparison for the unit test
     expect(fromYenToPound(3.5)).toBe(629.615); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})