var trivia = {
    question1: {
        question: "Question1",
        answers: ["1Answer1", "1Answer2", "1Answer3", "1Answer4"],
        correctanswer: "Answer1"
    },
    question2: {
        question: "Question2",
        answers: ["2Answer1", "2Answer2", "2Answer3", "2Answer4"],
        correctanswer: "Answer2"
    },
    question3: {
        question: "Question3",
        answers: ["3Answer1", "3Answer2", "3Answer3", "3Answer4"],
        correctanswer: "Answer3"
    }
}

var correct = 0;
var incorrect = 0;
var timedout = 0;
var QuestionObj;

//Start Button on Click remove and draw questions
//On Answer Click capture answer and 

StartButton();

$(".Answers").on("click", "Start", function(){
    StartGame();

}).on("click", "Answer", function(){
    var ans = $(this).text();
    if(ans === QuestionObj.correctanswer)
    {
        correct++;
    }
    else{
        incorrect++;
    }
});

function StartGame(){


    DisplayQuestion(trivia.question1)



}


function DisplayQuestion(QuestionObj)
{
    $("#Question").text(QuestionObj.question);

    $(".Answers").empty();

    for (var i = 0; i < 4; i++)
    {
        var ansh3 = $("<h3>");
        ansh3.attr("class", "Answer");
        ansh3.text(QuestionObj.answers[i]);
        $(".Answers").append(ansh3);
    }
}

function StartButton()
{
    var starth3 = $("<h3>");
    ansh3.attr("class", "start");
    ansh3.text("Start");
    $(".Answers").append(starth3);

}