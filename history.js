var question1 = document.querySelector("#question1");
var question2 = getRadioVal(document.forms[0], 'question2');
var question3 = getRadioVal(document.forms[0], 'question3');
var correct = 0;

const result = document.querySelector("#result");
const score = document.querySelector("#score");

function getRadioVal(form, name) {
    var val;
    var radios = form.elements[name];

    for (var i = 0, xVar = radios.length; i < xVar; i++) {
        if (radios[i].checked) {
            val = radios[i].value;
            break;
        }
    }
    return val;
};

score.addEventListener("click", checkMyPoints);

function checkMyPoints(e) {

    var question2 = getRadioVal(document.forms[0], 'question2');
    var question3 = getRadioVal(document.forms[0], 'question3');

    if (e.target.id == 'score') {
        if (question1.value == 'Babelonia') {
            correct++
        }
        if (question2 == 'Hattusa') {
            correct++;
        }
        if (question3 == 'The underfloor heating system in buildings') {
            correct++;
        }
    }
    result.value = `You're score is ${correct}`
};