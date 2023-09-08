$(function(){
    $('#birthday').pickadate({ format: 'mmmm, d' });
    // uncheck all checkboxes (FireFox)
    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });
    // event listener for check/uncheck
    $('.form-check-input').on('change', function () {
        // make the image visible
        $('#' + this.id + 'Img').css('visibility', 'visible')
        // animate balloon in/out based on checkbox
        $(this).is(':checked') ?
         $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
         $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');
    });

    // event listener for submit button click
    $('#submit').on('click', function(e){
        var checkbox1 = document.getElementById("red");
        var checkbox2 = document.getElementById("blue");
        var checkbox3 = document.getElementById("green");

        //checks if atleast 1 checkbox is checked
        if(!(checkbox1.checked || checkbox2.checked || checkbox3.checked))
        {
            //preload audio
            var toast = new Audio('toast.wav');
            e.preventDefault();
            // first pause the audio (in case it is still playing)
            toast.pause();
            // reset the audio
            toast.currentTime = 0;
            // play audio
            toast.play();
        }
        
    });

    //event listener for reseting checkboxes
    $('#reset').on('click', function(){
        //resets checkboxes
        document.getElementById("red").checked = false;
        document.getElementById("blue").checked = false;
        document.getElementById("green").checked = false;
        
        //animate all images out
        $('#redImg').addClass('animate__animated animate__bounceOutUp');
        $('#blueImg').addClass('animate__animated animate__bounceOutUp');
        $('#greenImg').addClass('animate__animated animate__bounceOutUp');
    });

    //event listener if label is being hovered
    $(".form-check-label").on("mouseover", function(){
        document.querySelector('label[for="red"]').addEventListener("mouseover", function(){
            document.getElementById("h1").style.color = "#FF0000";
        });
        document.querySelector('label[for="green"]').addEventListener("mouseover", function(){
            document.getElementById("h1").style.color = "#00FF00";
        });
        document.querySelector('label[for="blue"]').addEventListener("mouseover", function(){
            document.getElementById("h1").style.color = "#0000FF";
        });
    });
    //event listener if label is not being hovered
    $(".form-check-label").on("mouseout", function(){
        document.getElementById("h1").style.color = "";

    });

    //randomizes attention seeker when page loads 
    var items = ["bounce", "flash", "pulse", "rubberBand", "shakeX", "shakeY", "headShake", "swing", "tada", "wobble", "jello", "heartBeat"]
    var rand = Math.floor(Math.random() * 12);
    //applies random attention seeker to Happy Birthday h1
    $('#h1').addClass('animate__'+items[rand]);

});