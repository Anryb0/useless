function Check() {
    var correct = 0;
    var totalPoints = 10;
    var grade;
    let q1 = document.getElementById('q1');
    let a1 = document.getElementById('a1');
    let q2 = document.getElementById('q2');
    let a2 = document.getElementById('a2');
    let q3 = document.getElementById('q3');
    let a3 = document.getElementById('a3');
    let q4 = document.getElementById('q4');
    let a4 = document.getElementById('a4');
    let q5 = document.getElementById('q5');
    let a5 = document.getElementById('a5');
    let q6 = document.getElementById('q6');
    let a6 = document.getElementById('a6');
    let q7 = document.getElementById('q7');
    let a7 = document.getElementById('a7');
    let q8 = document.getElementById('q8');
    let a8 = document.getElementById('a8');
    let q9 = document.getElementById('q9');
    let a9 = document.getElementById('a9');
    let q10 = document.getElementById('q10');
    let a10 = document.getElementById('a10');
    if (a1.value == '2' || a1.value == '7') {
        q1.style.border = '7px solid green ';
        q1.style.borderRadius = "5px";
        correct++;
        var cells = q1.getElementsByTagName('td');
        for (var i = 0; i < cells.length; i++) {
            cells[i].style.border = '3px solid green';
            cells[i].style.borderRadius = "5px";
        }
        var cell1 = q1.getElementById("c1");
        cell1.style.border = "3px solid green";
        cell1.style.raduis = "5px";
    }
    else {
        q1.style.border = '7px solid red';
        q1.style.borderRadius = "5px";
        var cells = q1.getElementsByTagName('td');
        for (var i = 0; i < cells.length; i++) {
            cells[i].style.border = '3px solid red';
            cells[i].style.borderRadius = "5px";
        };
        var cell1 = q1.getElementById("c1");
        cell1.style.border = "3px solid green";
        cell1.style.raduis = "5px";
    }
    if (a2.value == '2') {
        q2.style.border = '7px solid green ';
        q2.style.borderRadius = "5px";
        correct++;
        var cells = q2.getElementsByTagName('td');
        for (var i = 0; i < cells.length; i++) {
            cells[i].style.border = '3px solid green';
            cells[i].style.borderRadius = "5px";
        }
    }
    else {
        q2.style.border = '7px solid red';
        q2.style.borderRadius = "5px";
        var cells = q2.getElementsByTagName('td');
        for (var i = 0; i < cells.length; i++) {
            cells[i].style.border = '3px solid red';
            cells[i].style.borderRadius = "5px";
        }
    }
    if (a3.value == '18') {
        q3.style.border = '7px solid green ';
        q3.style.borderRadius = "5px";
        correct++;
        var cells = q3.getElementsByTagName('td');
        for (var i = 0; i < cells.length; i++) {
            cells[i].style.border = '3px solid green';
            cells[i].style.borderRadius = "5px";
        }
    }
    else {
        q3.style.border = '7px solid red';
        q3.style.borderRadius = "5px";
        var cells = q3.getElementsByTagName('td');
        for (var i = 0; i < cells.length; i++) {
            cells[i].style.border = '3px solid red';
            cells[i].style.borderRadius = "5px";
        }
    }
    if (a4.value == '16') {
        q4.style.border = '7px solid green ';
        q4.style.borderRadius = "5px";
        correct++;
        var cells = q4.getElementsByTagName('td');
        for (var i = 0; i < cells.length; i++) {
            cells[i].style.border = '3px solid green';
            cells[i].style.borderRadius = "5px";
        }
    }
    else {
        q4.style.border = '7px solid red';
        q4.style.borderRadius = "5px";
        var cells = q4.getElementsByTagName('td');
        for (var i = 0; i < cells.length; i++) {
            cells[i].style.border = '3px solid red';
            cells[i].style.borderRadius = "5px";
        }
    }
    if (a5.value == '2') {
        q5.style.border = '7px solid green ';
        q5.style.borderRadius = "5px";
        correct++;
        var cells = q5.getElementsByTagName('td');
        for (var i = 0; i < cells.length; i++) {
            cells[i].style.border = '3px solid green';
            cells[i].style.borderRadius = "5px";
        }
    }
    else {
        q5.style.border = '7px solid red';
        q5.style.borderRadius = "5px";
        var cells = q5.getElementsByTagName('td');
        for (var i = 0; i < cells.length; i++) {
            cells[i].style.border = '3px solid red';
            cells[i].style.borderRadius = "5px";
        }
    }
    if (a6.value == '46') {
        q6.style.border = '7px solid green ';
        q6.style.borderRadius = "5px";
        correct++;
        var cells = q6.getElementsByTagName('td');
        for (var i = 0; i < cells.length; i++) {
            cells[i].style.border = '3px solid green';
            cells[i].style.borderRadius = "5px";
        }
    }
    else {
        q6.style.border = '7px solid red';
        q6.style.borderRadius = "5px";
        var cells = q6.getElementsByTagName('td');
        for (var i = 0; i < cells.length; i++) {
            cells[i].style.border = '3px solid red';
            cells[i].style.borderRadius = "5px";
        }
    }
    if (a7.value == '3') {
        q7.style.border = '7px solid green ';
        q7.style.borderRadius = "5px";
        correct++;
        var cells = q7.getElementsByTagName('td');
        for (var i = 0; i < cells.length; i++) {
            cells[i].style.border = '3px solid green';
            cells[i].style.borderRadius = "5px";
        }
    }
    else {
        q7.style.border = '7px solid red';
        q7.style.borderRadius = "5px";
        var cells = q7.getElementsByTagName('td');
        for (var i = 0; i < cells.length; i++) {
            cells[i].style.border = '3px solid red';
            cells[i].style.borderRadius = "5px";
        }
    }
    if (a8.value == '1') {
        q8.style.border = '7px solid green ';
        q8.style.borderRadius = "5px";
        correct++;
        var cells = q8.getElementsByTagName('td');
        for (var i = 0; i < cells.length; i++) {
            cells[i].style.border = '3px solid green';
            cells[i].style.borderRadius = "5px";
        }
    }
    else {
        q8.style.border = '7px solid red';
        q8.style.borderRadius = "5px";
        var cells = q8.getElementsByTagName('td');
        for (var i = 0; i < cells.length; i++) {
            cells[i].style.border = '3px solid red';
            cells[i].style.borderRadius = "5px";
        }
    }
    if (a9.value == '5') {
        q9.style.border = '7px solid green ';
        q9.style.borderRadius = "5px";
        correct++;
        var cells = q9.getElementsByTagName('td');
        for (var i = 0; i < cells.length; i++) {
            cells[i].style.border = '3px solid green';
            cells[i].style.borderRadius = "5px";
        }
    }
    else {
        q9.style.border = '7px solid red';
        q9.style.borderRadius = "5px";
        var cells = q9.getElementsByTagName('td');
        for (var i = 0; i < cells.length; i++) {
            cells[i].style.border = '3px solid red';
            cells[i].style.borderRadius = "5px";
        }
    }
    if (a10.value == '13') {
        q10.style.border = '7px solid green ';
        q10.style.borderRadius = "5px";
        correct++;
        var cells = q10.getElementsByTagName('td');
        for (var i = 0; i < cells.length; i++) {
            cells[i].style.border = '3px solid green';
            cells[i].style.borderRadius = "5px";
        }
    }
    else {
        q10.style.border = '7px solid red';
        q10.style.borderRadius = "5px";
        var cells = q10.getElementsByTagName('td');
        for (var i = 0; i < cells.length; i++) {
            cells[i].style.border = '3px solid red';
            cells[i].style.borderRadius = "5px";
        }
    }   
    if (correct >= 9) {
        grade = 5;
    } else if (correct >= 7) {
        grade = 4;
    } else if (correct >= 5) {
        grade = 3;
    } else {
        grade = 2;
    }
    var resultText = "Результат: " + correct + " из " + totalPoints + " баллов. Отметка: " + grade;
    var resultElement = document.getElementById("result");
    resultElement.innerText = resultText;
    resultElement.style.display = "block";
}
