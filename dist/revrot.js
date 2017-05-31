"use strict";
function revrot(str, sz) {
    if (str === "" || sz === 0 || sz > str.length) {
        return "";
    }
    let pointer = sz;
    let sumOfCubes = 0;
    let answer = "";
    for (let i = 0; i < str.length; i++) {
        console.log("i", i, "str[i]", str[i], "pointer", pointer);
        if (i < pointer) {
            sumOfCubes += str[i] * str[i];
            console.log("summing", sumOfCubes);
        }
        if (i === pointer - 1) {
            if (sumOfCubes % 2 === 0) {
                for (let k = pointer - 1; k > i - sz; k--) {
                    console.log("k", k, "i - sz", i - sz);
                    answer += str[k];
                }
            }
            else {
                let tempStr = str.substring(i - (sz - 2), i + 1);
                answer += tempStr;
                console.log("temp", tempStr, "[i - (sz - 1)]", i - (sz - 1));
                answer += str[i - (sz - 1)];
            }
            pointer += sz;
            sumOfCubes = 0;
        }
        console.log("Answer", answer);
        console.log("_______________");
    }
    return answer;
}
exports.revrot = revrot;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = revrot;
