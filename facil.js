function checkAnswer(operationIndex, expectedResult) {
    let isCorrect = false;
    let isClose = false;
    let boxValue1, boxValue2, actualResult;

    switch (operationIndex) {
        case 0:
            boxValue1 = parseInt(document.getElementById('box00').value);
            boxValue2 = parseInt(document.getElementById('box01').value);
            actualResult = boxValue1 + boxValue2;
            break;
            
        case 1:
            boxValue1 = parseInt(document.getElementById('box10').value);
            boxValue2 = parseInt(document.getElementById('box11').value);
            actualResult = boxValue1 - boxValue2;
            break;

        case 2:
            boxValue1 = parseInt(document.getElementById('box20').value);
            boxValue2 = parseInt(document.getElementById('box21').value);
            actualResult = boxValue1 * boxValue2;
            break;

        case 3:
            boxValue1 = parseInt(document.getElementById('box30').value);
            boxValue2 = parseInt(document.getElementById('box31').value);
            actualResult = boxValue1 * boxValue2;
            break;

        case 4:
            boxValue1 = parseInt(document.getElementById('box40').value);
            boxValue2 = parseInt(document.getElementById('box41').value);
            actualResult = boxValue1 + boxValue2;
            break;

        case 5:
            boxValue1 = parseInt(document.getElementById('box50').value);
            boxValue2 = parseInt(document.getElementById('box51').value);
            actualResult = boxValue1 - boxValue2;
            break;
    }

    if (!isNaN(boxValue1) && !isNaN(boxValue2) && boxValue1 !== 0 && boxValue2 !== 0) {
        if (actualResult === expectedResult) {
            isCorrect = true;

        } else if (Math.abs(actualResult - expectedResult) <= 5) {
            isClose = true;
        }
    }

    let messageElement = document.getElementById(`message${operationIndex}`);

    if (isCorrect) {
        messageElement.textContent = "Parabéns, Você acertou!!";
        messageElement.style.color = 'green';
        messageElement.style.display = 'block';

        document.getElementById(`box${operationIndex}0`).style.backgroundColor = 'lightgreen';
        document.getElementById(`box${operationIndex}1`).style.backgroundColor = 'lightgreen';
        document.getElementById(`box${operationIndex}0`).disabled = true;
        document.getElementById(`box${operationIndex}1`).disabled = true;

    } else if (isClose) {
        messageElement.textContent = "Você está perto. Tente novamente";
        messageElement.style.color = 'orange';
        messageElement.style.display = 'block';

        document.getElementById(`box${operationIndex}0`).style.backgroundColor = 'lightcoral';
        document.getElementById(`box${operationIndex}1`).style.backgroundColor = 'lightcoral';

    } else {
        messageElement.style.display = 'none';

        if (!isNaN(boxValue1) && !isNaN(boxValue2)) {
            document.getElementById(`box${operationIndex}0`).style.backgroundColor = 'lightcoral';
            document.getElementById(`box${operationIndex}1`).style.backgroundColor = 'lightcoral';
        }
    }
}
