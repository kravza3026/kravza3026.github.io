 $(document).ready(function SendPost(){
     customForm.lib.domReady(function(){
         customForm.customForms.replaceAll();
     });
$('.contact_form').validate({
    rules: {
        name: {required:true,
              minlength:2},
        email: {
            required: true,
            email: true,
            minlength: 6
        },
        phone: {
            required: true,
            digits: true,
            minlength:8
        }     
    }
});
   
   
$(function(){
    $('#send').click(function(e){
        SendPost();
        var  send = true;
        $('form#orderForm input[type="text"]').each(function(){
            if(!$(this).val() || $(this).val() == ''){
                $(this).css('border-color','red');//Сделаем бордер красным
                send = false;
            }
        });

        if(!send) return false;
        e.preventDefault();
        $.ajax({
            url: "https://formspree.io/kravza3026@gmail.com", 
            method: "POST",
            data: {
                name: $('#name').val(),
                email: $('#email').val(),
                phone: $('#phone').val(),
                message: $('#message').val(),
            },
            dataType: "json"
        }).done(function(){
            $('.contact-form').html('<h2>Thank you for getting in touch!</h2><h4>I will respond as soon as possible. Have a great day!</h4>');
        });
    });
    
});
     
 });