score=0;
question=1;

$(document).ready(main);
function main()
{
    hideQuestions();
    $('button').click(select);
}

function select()
{
    var clickID;
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
        $("#wrongAns").hide();
        $("#correctAns").hide();
    }
}

function hideQuestions()
{
    $("#wrongAns").hide();
    $("#correctAns").hide();
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