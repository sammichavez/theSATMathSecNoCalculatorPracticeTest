
var position = 0, test_status, question,choice,choices,choiceA,choiceB,choiceC, correct = 0;
var questions = [
  ["what is you?", "you", "me" , "ay", "B"],
  ["to be determined", "almost", "k", "t" , "A"],
  ["to be determined", "almost", "k", "t" , "A"]],
  ["to be determined","almost","k","t","B"]
];

function_(x){
    return document.getElementById(x);
}
function renderQuestion(){
    test = _("test");
    _("test_status").innerHTML = "Question" + (pos+1) + " of " + questions.length;
    question = question[pos][0];
    choiceA = questions[pos][1];
    choiceB = questions[pos][2];
    choiceC = questions[pos][3];
    test.innerHTML = "<h3>"+question+"</h3>";
    test.innerHTML += "<input type = 'radio' name  = 'choices' value = 'A'> "+choiceA+"<br>";
    test.innerHTML += "<input type = 'radio' name  = 'choices' value = 'B'> "+choiceB+"<br>";
    test.innerHTML += "<input type = 'radio' name  = 'choices' value = 'C'> "+choiceC+"<br>";
}





