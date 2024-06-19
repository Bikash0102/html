function calculate() {
    var input1 = parseFloat(document.getElementById('input1').value);
    var input2 = parseFloat(document.getElementById('input2').value);
    var operation = document.getElementById('op1').value;
    var rr= document.getElementById('result');
    var result;

    switch(operation) {
        case 'ADD':
            result = input1 + input2;
            break;
        case 'SUB':
            result = input1 - input2;
            break;
        case 'MUL':
            result = input1 * input2;
            break;
        case 'DIV':
            result = input1 / input2;
            break;
        default:
            console.log('Invalid operation');
    }

    // Display the result
   rr.innerHTML = 'Result: ' + result;
}
