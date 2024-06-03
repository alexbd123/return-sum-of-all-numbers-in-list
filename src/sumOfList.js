// Psceudocode:

// Declare funcion sumOfList, with parameters
// inputNumbers.

//     Declare TOTAL variable and set to 0.

//     Start for of loop
//     For each number in inputNumbers parameter:
//         Add number to TOTAL

//     Return TOTAL

function sumOfList(inputNumbers) {
    let total = 0;
    for (let num of inputNumbers) {
        total += num;
    }
    return total;
}

export { sumOfList };