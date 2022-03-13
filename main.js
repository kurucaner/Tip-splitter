function Calculate()
{
    var BillAmount=$("#bill_input").val();
    var PeopleNumber=($("#people_input").val());
    var TipPercentage;

$('.button-tip').each(function(i, obj) {
        if($(this).hasClass('button-active') && $(".input-custom").val()==="" )
        {   
            var TipButtonValue=$(this).text();
            console.log(TipButtonValue);
            const TipButtonValueEdited = TipButtonValue.slice(0, -1);
            console.log(TipButtonValueEdited);
            TipPercentage=parseInt(TipButtonValue)/100;
        }
});

if($(".input-custom").val()!="")
{
    $(".button-tip").removeClass("button-active");
    var customTip= parseInt($(".input-custom").val());
    TipPercentage=customTip/100;
}

    console.log(TipPercentage);
    let CalculatedTip=(BillAmount*TipPercentage)/PeopleNumber;
    if(BillAmount!=0 && PeopleNumber!=0)
    {
    $("#tip_amount_output").text("$"+CalculatedTip.toFixed(2));
    $("#total_amount_output").text("$"+((BillAmount/PeopleNumber)+CalculatedTip).toFixed(2));
    }

    if(BillAmount!=0 && PeopleNumber===0 || PeopleNumber==="" || PeopleNumber==="0")
    {
        $("#people_input").addClass("alert");
        $(".alert-text").addClass("alert-text-active");
        $("#tip_amount_output").text("$0.00");
        $("#total_amount_output").text("$0.00");
    }
    else
    {
        $("#people_input").removeClass("alert");
        $(".alert-text").removeClass("alert-text-active");
    }
}


$(".button-tip").click(function () {
    $(".button-tip").removeClass("button-active");
    $(this).addClass("button-active");
    Calculate();
})



$( "#reset" ).click(function() {
location.reload();
});

$("#bill_input").on("change keyup paste", function(){
Calculate();
})
$("#people_input").on("change keyup paste", function(){
Calculate();
})

$(".input-custom").on("change keyup paste", function(){
Calculate();
})
