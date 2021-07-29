
/// HOME

$(function(){
    
    $(".checkmark, .check label").on("click", function () {
        
        if($(this).siblings('input').prop("checked") == false){
            $(this).parent(".check").siblings('.error-input').hide().removeClass("show");
            $(this).parent(".check").siblings('input').prop("checked");
        }
        
        else {
             $(this).parent(".check").siblings('input').removeAttr("checked");
             $(this).parent(".check").siblings('.error-input').addClass("show");
        }
    });
     
    //validacionSesion();

});

    

