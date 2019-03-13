
var position = 0,test, test_status, question,choice,choices,choiceA,choiceB,choiceC, correct = 0;
var questions = [
  ["what is you?", "you", "me" , "ay", "B"],
  ["to be determined", "almost", "k", "t" , "A"],
  ["to be determined", "almost", "k", "t" , "A"],
  ["to be determined","almost","k","t","B"]

];

function _ (x){
    return document.getElementById(x);
}
function renderQuestion(){
    test = _("test");
    _("test_status").innerHTML = "Question" + (pos+1) + " of " + questions.length;
    question = question[position][0];
    choiceA = questions[position][1];
    choiceB = questions[position][2];
    choiceC = questions[position][3];
    test.innerHTML = "<h3>"+question+"</h3>";
    test.innerHTML += "<input type = 'radio' name  = 'choices' value = 'A'> "+choiceA+"<br>";
    test.innerHTML += "<input type = 'radio' name  = 'choices' value = 'B'> "+choiceB+"<br>";
    test.innerHTML += "<input type = 'radio' name  = 'choices' value = 'C'> "+choiceC+"<br><br>";
    test.innerHTML += "<button onclick = ' checkAnswer() '> Submit Answer</button>";
}
function checkAnswer(){
    choices = document.getElementsByName("choices");
    for(var i = 0; i<choices.length; i++){
        if(choices[i].checked){
            choices = choices[i].value;
        }
        if(choice == questions[position[4]]){
            i++
        }
    }
    position++;
    renderQuestion();
}
window.addEventListener("load", renderQuestion , false );




