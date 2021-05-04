var basicFields = document.querySelectorAll(".basic_field");
var mailField = document.querySelector(".mail_field");
var telField = document.querySelector(".tel_field");
var form = document.querySelector("form");
var submit = document.querySelector("#subm");


form.addEventListener("submit",function(event){
    checkMailFieldC(mailField, event);
    checkTelFieldC(telField, event);
    for(basicField of basicFields){
        checkBasicFieldC(basicField, event);
    }
    
    document.querySelector(".form__st").style.color = "rgb(204, 235, 28)"; 
        document.querySelector(".form__st").innerHTML = "Su formulario se está siendo enviado"; 

          setTimeout(function(){
            form.reset();
            document.querySelector(".form__st").innerHTML = "Todo se ha enviado correctamente";
            document.querySelector(".form__st").style.color = "rgb(28, 235, 56)" 
          }, 3000);
          
    
});

mailField.addEventListener("blur",function(){
   checkMailField(this);
});

telField.addEventListener("blur", function(){
    checkTelField(this);
})

for(basicField of basicFields){
    basicField.addEventListener("blur", function(){
        checkBasicField(this);
    })
}

function checkBasicFieldC(element, event){
  let error = element.nextElementSibling;
  if(element.validity.valid){
      console.log(element.validity)
      error.innerHTML = ' ';
      document.querySelector(".form__st").style.display = 'block';

  }else{
      if(event){
          event.preventDefault();
          document.querySelector(".form__st").style.display = 'none';
      }
      error.innerHTML = 'Este campo es obligatorio';
  }
};

function checkBasicField(element, event){
  let error = element.nextElementSibling;
  if(element.validity.valid){
      console.log(element.validity)
      error.innerHTML = ' ';

  }else{
      if(event){
          event.preventDefault();
          document.querySelector(".form__st").style.display = 'none';
      }
      error.innerHTML = 'Este campo es obligatorio';
  }
};

function checkMailFieldC(element, event){
    let error = element.nextElementSibling;
    if(element.validity.valid){
        error.innerHTML = ' ';
        document.querySelector(".form__st").style.display = 'block';

    }else{
        if(event){
            event.preventDefault();
            document.querySelector(".form__st").style.display = 'none';
        }
        if(element.validity.valueMissing){
            error.innerHTML = 'Este campo es obligatorio';
        }else{
           error.innerHTML = 'Este formato es erróneo';
        }
        
    }
  };
function checkMailField(element, event){
    let error = element.nextElementSibling;
    if(element.validity.valid){
        error.innerHTML = ' ';

    }else{
        if(event){
            event.preventDefault();
            document.querySelector(".form__st").style.display = 'none';
        }
        if(element.validity.valueMissing){
            error.innerHTML = 'Este campo es obligatorio';
        }else{
           error.innerHTML = 'Este formato es erróneo';
        }
        
    }
  };

  function checkTelFieldC(element, event){
    let error = element.nextElementSibling;
    console.log(error);
    if(element.validity.valid){
        error.innerHTML = ' ';
        document.querySelector(".form__st").style.display = 'block';

    }else{
        if(event){
            event.preventDefault();
            document.querySelector(".form__st").style.display = 'none';
        }
        if(element.validity.valueMissing){
            error.innerHTML = 'Este campo es obligatorio';
        }else{
           error.innerHTML = 'Este formato es erróneo';
        }
        
    }
  };
  function checkTelField(element, event){
    let error = element.nextElementSibling;
    console.log(error);
    if(element.validity.valid){
        error.innerHTML = ' ';

    }else{
        if(event){
            event.preventDefault();
            document.querySelector(".form__st").style.display = 'none';
        }
        if(element.validity.valueMissing){
            error.innerHTML = 'Este campo es obligatorio';
        }else{
           error.innerHTML = 'Este formato es erróneo';
        }
        
    }
  };







