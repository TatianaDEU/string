
let result = '';
let newStr = '';

function isLang(str) {
    if (str.length > 10) {
        str = str.slice(0, 10);
        console.log(str);
    }
}


function toUpCase(str) {
    if (str[0].toLowerCase() == true) {
        str = str[0].toUpperCase() + str.slice(1);

    }
    console.log(str);
}


function showVerticalMessage(str) {
    if (isLang(str) && toUpCase(str)) {
        for (let i = 0; i < str.length; i++) {

            result = str[i] + '\n';
            console.log(result);
        }
    }
}

//toUpCase('dndndn');
showVerticalMessage('marathonmmmmmmm');