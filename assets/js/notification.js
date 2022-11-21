$("#send").click(function(e){
    e.preventDefault();
    let email_jobbi = $("#email_jobbi").val();
    $.ajax({
        type: 'POST',
        url: 'assets/php/email.php',
        data: {
            email_jobbi: email_jobbi,
        },
        success: function(r){
            console.log(r);
        }
    });
    $(".jobbi-notification-body").animate({
                opacity: "0",
            },500, function(){
                $(".jobbi-notification-body").removeAttr("style");
            });
            $("#email_jobbi").val("");
            setTimeout(function(){
                alert("Gracias!");
            },1000);
});

$(".activar-noti").click(function(){
    $(".jobbi-notification-body").css("display", "flex");
    $(".jobbi-notification-body").animate({
        opacity: "1",
    },500);
});

$(".close-notification").click(function(){
    $(".jobbi-notification-body").css("display", "none");
    $(".jobbi-notification-body").animate({
        opacity: "0",
    },500);
});