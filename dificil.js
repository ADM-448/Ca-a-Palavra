function checkAnswer(operationIndex, expectedResult) {
    let isCorrect = false;
    let isClose = false;
    let boxValue1, boxValue2, boxValue3, actualResult;

    switch (operationIndex) {
        case 0:
            boxValue1 = parseInt(document.getElementById('box00').value);
            boxValue2 = parseInt(document.getElementById('box01').value);
            boxValue3 = parseInt(document.getElementById('box02').value);
            actualResult = (boxValue1 * boxValue2) + boxValue3;
            break;
        case 1:
            boxValue1 = parseInt(document.getElementById('box10').value);
            boxValue2 = parseInt(document.getElementById('box11').value);
            boxValue3 = parseInt(document.getElementById('box12').value);
            actualResult = (boxValue1 * boxValue2) + boxValue3;
            break;
        case 2:
            boxValue1 = parseInt(document.getElementById('box20').value);
            boxValue2 = parseInt(document.getElementById('box21').value);
            boxValue3 = parseInt(document.getElementById('box22').value);
            actualResult = (boxValue1 * boxValue2) + boxValue3;
            break;
        case 3:
            boxValue1 = parseInt(document.getElementById('box30').value);
            boxValue2 = parseInt(document.getElementById('box31').value);
            boxValue3 = parseInt(document.getElementById('box32').value);
            actualResult = (boxValue1 * boxValue2) - boxValue3;
            break;
        case 4:
            boxValue1 = parseInt(document.getElementById('box40').value);
            boxValue2 = parseInt(document.getElementById('box41').value);
            boxValue3 = parseInt(document.getElementById('box42').value);
            actualResult = (boxValue1 * boxValue2) - boxValue3;
            break;
        case 5:
            boxValue1 = parseInt(document.getElementById('box50').value);
            boxValue2 = parseInt(document.getElementById('box51').value);
            boxValue3 = parseInt(document.getElementById('box52').value);
            actualResult = (boxValue1 * boxValue2) + boxValue3;
            break;
    }

    if (!isNaN(boxValue1) && !isNaN(boxValue2) && !isNaN(boxValue3) &&
        boxValue1 !== 0 && boxValue2 !== 0 && boxValue3 !== 0) {
        if (actualResult === expectedResult) {
            isCorrect = true;
        } else if (Math.abs(actualResult - expectedResult) <= 5) {
            isClose = true;
        }
    }

    let messageElement = document.getElementById(`message${operationIndex}`);

    if (isCorrect) {
        messageElement.textContent = "Parabéns, você acertou!";
        messageElement.style.color = 'green';
        messageElement.style.display = 'block';

        document.getElementById(`box${operationIndex}0`).style.backgroundColor = 'lightgreen';
        document.getElementById(`box${operationIndex}1`).style.backgroundColor = 'lightgreen';
        document.getElementById(`box${operationIndex}2`).style.backgroundColor = 'lightgreen';
        document.getElementById(`box${operationIndex}0`).disabled = true;
        document.getElementById(`box${operationIndex}1`).disabled = true;
        document.getElementById(`box${operationIndex}2`).disabled = true;

    } else if (isClose) {
        messageElement.textContent = "Você está perto. Tente novamente!";
        messageElement.style.color = 'crimson';
        messageElement.style.display = 'block';

        document.getElementById(`box${operationIndex}0`).style.backgroundColor = 'lightcoral';
        document.getElementById(`box${operationIndex}1`).style.backgroundColor = 'lightcoral';
        document.getElementById(`box${operationIndex}2`).style.backgroundColor = 'lightcoral';

    } else {
        messageElement.style.display = 'none';

        if (!isNaN(boxValue1) && !isNaN(boxValue2) && !isNaN(boxValue3)) {
            document.getElementById(`box${operationIndex}0`).style.backgroundColor = 'lightcoral';
            document.getElementById(`box${operationIndex}1`).style.backgroundColor = 'lightcoral';
            document.getElementById(`box${operationIndex}2`).style.backgroundColor = 'lightcoral';
        }
    }
}