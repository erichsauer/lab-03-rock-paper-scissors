// IMPORT MODULES under test here:
import { didUserWin } from '../utils.js';

const test = QUnit.test;

test('tests if user wins vs computer', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expectedWin = 'win';
    const expectedLose = 'lose';
    const expectedDraw = 'draw';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actualWin = didUserWin('rock', 'scissors');
    const actualLose = didUserWin('rock', 'paper');
    const actualDraw = didUserWin('rock', 'rock');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actualWin, expectedWin);
    expect.equal(actualLose, expectedLose);
    expect.equal(actualDraw, expectedDraw);
});
