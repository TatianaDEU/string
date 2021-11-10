
let result = '';

function showVerticalMessage(str) {
    if (str.length > 10) {
        str = str.slice(0, 10);
    } else if (str[0].toLowerCase() === true) {
            str = str[0].toUpperCase() + str.slice(1);
       }
        for (let i = 0; i < str.length; i++) {
            
            result = str[i] + '\n';
            console.log(result);
    }
   
}

showVerticalMessage('marathonmmmmmmm');