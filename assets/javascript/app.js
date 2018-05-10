var trivia = {
    question1: {
        question: "Question1",
        answers: ["1Answer1", "1Answer2", "1Answer3", "1Answer4"],
        correctanswer: "Answer1",
        src: "https://media.giphy.com/media/fAnEC88LccN7a/giphy.gif"
    },
    question2: {
        question: "Question2",
        answers: ["2Answer1", "2Answer2", "2Answer3", "2Answer4"],
        correctanswer: "Answer2",
        src: "https://media.giphy.com/media/fAnEC88LccN7a/giphy.gif"
    },
    question3: {
        question: "Question3",
        answers: ["3Answer1", "3Answer2", "3Answer3", "3Answer4"],
        correctanswer: "Answer3",
        src: "https://media.giphy.com/media/fAnEC88LccN7a/giphy.gif"
    }
}

var correct = 0;
var incorrect = 0;
var timedout = 0;
var QuestionObj;
var Qcounter = 0;
var number = 11;
var intervalId;

$(".Time").hide();
NewGame();
StartButton();

function StartButton()
{
    var starth3 = $("<h3>");
    starth3.attr("class", "start");
    starth3.text("Start");
    $(".Answers").append(starth3);
}

function NewGame()
{
    correct = 0;
    incorrect = 0;
    timedout = 0;
    Qcounter = 0;

    $("#Question").empty();
    $(".Answers").empty();
}

$(".Answers").on("click", ".start", function ()
{
    $(".Time").show();
    GetQuestion();

}).on("click", ".Answer", function ()
{
    stop();
    var ans = $(this).text();
    console.log(ans);
    if (ans === QuestionObj.correctanswer)
    {
        correct++;
        AfterAnswer("CORRECT!");
        setTimeout(GetQuestion, 4000);
    }
    else
    {
        incorrect++;
        AfterAnswer("NOPE!");
        setTimeout(GetQuestion, 4000);
    }
}).on("click", ".startover", function ()
{
    NewGame();
    GetQuestion();
});

function GetQuestion()
{
    var length = Object.keys(trivia).length;
    console.log("Count" + Qcounter)
    console.log(length)
    if (Qcounter < length)
    {
        number = 11;
        QuestionObj = trivia[Object.keys(trivia)[Qcounter]];
        DisplayQuestion(QuestionObj);
        Qcounter++;
    }
    else if (Qcounter >= length)
    {
        FinalDisplay();
    }
}

function DisplayQuestion(QObj)
{
    run();
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

function AfterAnswer(answer)
{
    $(".Answers").empty();
    var ansh3 = $("<h3>");
    ansh3.text(answer);
    $(".Answers").append(ansh3);

    if (answer === "NOPE!")
    {
        var ansh5 = $("<h6>");
        ansh5.text("The correct answer was: " + QuestionObj.correctanswer);
        $(".Answers").append(ansh5);
    }

    drawGif();
}

function drawGif()
{
    var gif = $("<img>");
    gif.attr("src", QuestionObj.src);
    $(".Answers").append(gif);
}

//Final Screen after all questions.
function FinalDisplay()
{
    console.log("Final")
    $(".Answers").empty();

    $("#Question").text("All Done, Heres how you did!");

    var crt = $("<h6>");
    crt.text("Correct: " + correct);
    $(".Answers").append(crt);

    var wrg = $("<h6>");
    wrg.text("Incorrect: " + incorrect);
    $(".Answers").append(wrg);

    var tm = $("<h6>");
    tm.text("Unanswered: " + timedout);
    $(".Answers").append(tm);

    var startover = $("<h3>");
    startover.attr("class", "startover");
    startover.text("Start Over?");
    $(".Answers").append(startover);
}

function run()
{
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function decrement()
{
    number--;
    $("#seconds").text(number);

    if (number === 0)
    {
        stop();
        timedout++
        AfterAnswer("Out Of Time!");
        setTimeout(GetQuestion, 4000);
    }
}

function stop()
{
    clearInterval(intervalId);
}



