var score=0;
var question=1;
var index=0;
var answers=["0", "octopus", "daffodil", "cats", "12", "1971", "force", "Abraham Lincoln", "Alexandrina", "red blood cell"];

$(document).ready(main);
function main()
{
    hideQuestions();
    $('button').click(select);
}

function select()
{
    var clickID;
    var correct=answers[index];
    clickID=$(this).attr("id");
    if(clickID=="correct")
    {
        score+=5;
        $("#wrongAns").hide();
        $("#correctAns").show();
    }
    else
    {
        $("#wrongAns").show();
        $("#correctAns").hide();
    }
    $(scoreNum).text("Score: "+score);
    $(answer).text("The correct answer was "+correct);
    $("#answer").show();
    index++;
    change();
}

function change()
{
    $("#q"+question).hide();
    $("#q"+(question+1)).show();
    question++;
    if(question==11)
    {
        $("#done").show();
        $("#again").show();
        $("#wrongAns").hide();
        $("#correctAns").hide();
        $("#answer").hide();
        $("#scoreNum").hide();
        $(scoreDiv).text(score+"/50");
        $("#scoreDiv").show();
        if(score>40)
        {
            $(rank).text("That's awesome dude!");
            $("#rank").show();
        }
        else if(score>30)
        {
            $(rank).text("Not too horrible!");
            $("#rank").show();
        }
        else if(score>20)
        {
            $(rank).text("You're pretty average.");
            $("#rank").show();
        }
        else if(score>10)
        {
            $(rank).text("You could do better.");
            $("#rank").show();
        }
        else
        {
            $(rank).text("Did you even read the questions?");
            $("#rank").show();
        }
    }
}

function hideQuestions()
{
    $("#wrongAns").hide();
    $("#correctAns").hide();
    $("#again").hide();
    $("#scoreDiv").hide();
    $("#rank").hide();
    $("#answer").hide();
    $("#done").hide();
    $("#q2").hide();
    $("#q3").hide();
    $("#q4").hide();
    $("#q5").hide();
    $("#q6").hide();
    $("#q7").hide();
    $("#q8").hide();
    $("#q9").hide();
    $("#q10").hide();
}