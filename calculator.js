// Array to store results
let resultsArray = [];

// Handling OK button
function okButton() {
    var xinput = document.getElementById('xinput').value;
    var opinput = document.getElementById('opinput').value;
    var yinput = document.getElementById('yinput').value;

    let x = parseInt(xinput);
    let y = parseInt(yinput);
    let result;

    if (isNaN(x) || isNaN(y)) { // Check if numbers are valid integers
        result = "Wrong Input Number";
    } else {
        switch (opinput) {
            case "+":
                result = x + y;
                resultsArray.push(result); // Store result if valid calculation
                break;
            case "-":
                result = x - y;
                resultsArray.push(result); // Store result if valid calculation
                break;
            case "*":
                result = x * y;
                resultsArray.push(result); // Store result if valid calculation
                break;
            case "/":
                result = x / y;
                resultsArray.push(result); // Store result if valid calculation
                break;
            case "%":
                result = x % y;
                resultsArray.push(result); // Store result if valid calculation
                break;
            default:
                result = "Invalid Operand";
                break;  
        }
    }

    // Display result in the table regardless
    let basicInfoBody = document.getElementById('basicInfo');
    let newRow = basicInfoBody.insertRow();
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);

    cell1.textContent = xinput;
    cell2.textContent = opinput;
    cell3.textContent = yinput;
    cell4.textContent = result;

    // Update statistics only if the result is a valid integer
    if (!isNaN(result) && Number.isInteger(result)) {
        updateStatistics();
    }

    // Clear the input fields for new input
    document.getElementById('xinput').value = '';
    document.getElementById('opinput').value = '';
    document.getElementById('yinput').value = '';
}

function updateStatistics() {
    let min = Math.min(...resultsArray);
    let max = Math.max(...resultsArray);
    let sum = resultsArray.reduce((acc, curr) => acc + curr, 0);
    let avg = sum / resultsArray.length;

    // Display min, max, avg, and total at the bottom of the table
    document.getElementById('minout').textContent = parseInt(min).toString(); 
    document.getElementById('maxout').textContent = parseInt(max).toString(); 
    document.getElementById('avgout').textContent = avg.toFixed(2);
    document.getElementById('totout').textContent = parseInt(sum).toString(); 
}


function Cancel() {
    // Hide the Input area when finished by pressing Cancel
    document.querySelector('.inputArea').style.display = 'none';
}

