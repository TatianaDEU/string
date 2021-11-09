
let result = '';
let newStr = '';

function isLang(str) {
    if (str.length > 10) {
        newStr = str.slice(0, 10);
        console.log(newStr);
    }
}


function toUpCase(str) {
    if (str[0].toLowerCase()) {
        newStr = str[0].toUpperCase() + str.slice(1);

    }
    console.log(newStr);
}


function showVerticalMessage(str) {
    if (isValid && toUpCase) {
        for (let i = 0; i < str.length; i++) {

            result = str[i] + '\n';
            console.log(result);
        }
    }
}

//toUpCase('dndndn');
showVerticalMessage('marathonmmmmmmm');