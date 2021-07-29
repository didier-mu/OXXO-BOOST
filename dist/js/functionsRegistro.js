
function inputs(nameInput){
    if (nameInput.val().length < 1 || nameInput.val() == " ") {
        nameInput.siblings("span").remove();
        nameInput.after("<span class='error-input'>Campo requerido");
    }

    else {
        nameInput.siblings("span").remove();
    }
}

/// VALIDACION TEXTO Y NUMERO

function valTextNum(nameInput) {

    if (nameInput.val().length < 1 || nameInput.val() == " ") {
        nameInput.siblings("span").remove();
        nameInput.after("<span class='error-input'>Campo requerido");
    }

    else {
        nameInput.siblings("span").remove();
        var regEx = /^[A-Za-zÁÉÍÓÚáéíóúñÑ0-9 ,.!¡?¿"']+$/g;
        var validText = regEx.test(nameInput.val());

        if (!validText) {
            nameInput.siblings("span").remove();
            nameInput.after('<span class="error-input"> No se permiten caracteres especiales </span>');
            nameInput.siblings("span").show();
        } else {
            nameInput.siblings("span").remove();
        }
    }

}

/// VALIDACION FECHA
function valFecha(nameInput){
    if (nameInput.val().length < 1) {
        nameInput.siblings("span").remove();
        nameInput.after("<span class='error-input'>Campo requerido");
    }
        
    else{
        nameInput.siblings("span").remove();
    }
}

/// VALIDACION CHECK
function validacionCheck(nameCheck){
    
    if($(nameCheck).prop("checked") == false){
        nameCheck.parent(".check").siblings(".error-input").css("display","block");
    }
   
    else {
        nameCheck.parent(".check").siblings(".error-input").hide().removeClass("show");
    }
}


$(function(){
    var tienda = $("#tienda");
    var fecha = $("#fecha");
    var folio = $("#folio");
    var id = $("#id");
    var checkLegales = $("#checkLegale");

    $(".form__input").each(function(){
        var input = $(this).children("input");
        input.on("blur", function(){
            inputs(input);
        });
        
    });

    $('#btnEnviar').on("click", function (e) {
        
        valTextNum(tienda);
        valTextNum(folio);
        valTextNum(id);
        valFecha(fecha);
        validacionCheck(checkLegales);
              
        // VALIDATE ALL
 
        if ($('form .error-input').length == 0) {
            // console.log("hecho");
            
            return true;
        }
        
        else{
            // console.log("no hecho");
            return false;
            
        }
        
    });
});