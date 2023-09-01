$(function(){
    
    $('.code').on('click', function(e) {
        //
        const product_name = $(this).data('product');
        const product_code = $(this).data('code');
        
        // preload audio
        var toast = new Audio('toast.wav');
        e.preventDefault();
        // first pause the audio (in case it is still playing)
        toast.pause();
        // reset the audio
        toast.currentTime = 0;
        // play audio
        toast.play();
        $('#liveToast').toast({ autohide: false }).toast('show');

        // hides discount if esc key is pressed
        $(document).keyup(function(e){
            if(e.key === "Escape")
            {
                $('#liveToast').toast({ autohide: false }).toast('hide');
            }
        });

        // displays correct discount code and product name
        $(".discount-code").text(product_code);
        $(".product-name").text(product_name);
    });
});