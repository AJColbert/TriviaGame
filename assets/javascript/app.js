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
var Qcounter = 0;



StartButton();


function StartButton()
{
    $("#Question").empty();
    $(".Answers").empty();
    var starth3 = $("<h3>");
    starth3.attr("class", "start");
    starth3.text("Start");
    $(".Answers").append(starth3);
}

$(".Answers").on("click", ".start", function ()
{
    StartGame();

}).on("click", ".Answer", function ()
{
    var ans = $(this).text();
    console.log(ans);
    if (ans === QuestionObj.correctanswer)
    {
        correct++;
        //Display Correct 
        //Display Gif
    }
    else
    {
        incorrect++;
        //Display Nope
        //Display Correct answer
        //Display Gif
    }
});

function StartGame()
{
    var length = Object.keys(trivia).length;
    if(Qcounter < length)
    {
        QuestionObj = trivia[Object.keys(trivia)[Qcounter]];
        DisplayQuestion(QuestionObj);
        Qcounter++;
    }
    else if(Qcounter > length)
    {
        //display end game
    }
}

function DisplayQuestion(QObj)
{
    $("#Question").text(QObj.question);

    $(".Answers").empty();

    for (var i = 0; i < 4; i++)
    {
        var ansh3 = $("<h3>");
        ansh3.attr("class", "Answer");
        ansh3.text(QObj.answers[i]);
        $(".Answers").append(ansh3);
    }
}

