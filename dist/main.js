"use strict";
const reverseOrRotate_1 = require('./reverseOrRotate');
function startProgram() {
    // let answer2 = revrot("2244", 0);
    let answer1 = reverseOrRotate_1.default("213171", 3);
    let answer2 = reverseOrRotate_1.default("733049910872815764", 5);
    console.log("A1", answer1, "A2", answer2);
}
startProgram();
