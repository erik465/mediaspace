var basicFields = document.querySelectorAll(".basic_field");
var mailField = document.querySelector(".mail_field");
var telField = document.querySelector(".tel_field");
var form = document.querySelector("form");


form.addEventListener("submit",function(event){
    checkMailField(mailField, event);
    checkTelField(telField, event);
    for(basicField of basicFields){
        checkBasicField(basicField, event);
    }
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

function checkBasicField(element, event){
  let error = element.nextElementSibling;
  if(element.validity.valid){
      console.log(element.va)
      error.innerHTML = ' ';
  }else{
      if(event){
          event.preventDefault();
      }
      error.innerHTML = 'Este campo es obligatorio';
  }
};

function checkMailField(element, event){
    let error = element.nextElementSibling;
    if(element.validity.valid){
        error.innerHTML = ' ';
    }else{
        if(event){
            event.preventDefault();
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
        }
        if(element.validity.valueMissing){
            error.innerHTML = 'Este campo es obligatorio';
        }else{
           error.innerHTML = 'Este formato es erróneo';
        }
        
    }
  };







