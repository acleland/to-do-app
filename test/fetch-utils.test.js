// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { getTodos } from '../fetch-utils.js';

const test = QUnit.test;

test('time to test getToDos', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
