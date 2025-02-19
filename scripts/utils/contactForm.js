function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
   // document.removeEventListener('keyup', this.onKeyUp)

}

const firstname = document.querySelector('#first_name');
const lastname = document.querySelector('#last_name');
const email = document.querySelector('#personnal_email');
const messageform = document.querySelector('#message_form');

function printdata() {
    console.log(firstname.value);
    console.log(lastname.value);
    console.log(email.value);
    console.log(messageform.value);
}

const contactbtn = document.querySelector('#contact_button');
contactbtn.addEventListener("click", validateSubmit);

function validateSubmit(){  
    if (validateFirst()*
    validateLast()*
    validateEmail() 
    === 1){
        printdata();
        closeModal();
    }
    else{
    }   
}

function validateFirst(){  
    if (firstname.value.length < 2 ){
        alert("Votre prénom doit comporter au moins 2 lettres")
    }
    else {
      return true;
  } 
}

function validateLast(){  
    if (lastname.value.length < 2 ){
        alert("Votre Nom doit comporter au moins 2 lettres")
    }
    else {
      return true;
  } 
}

function validateEmail() {  
    const regexpEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regexpEmail.test(email.value.toLowerCase())) {
      return true;
    } else {
      alert("Votre email doit être valide");
      return false;
    }
  }

document.addEventListener("keyup", (e) => {
    if (e.key === "Escape"){
        closeModal()
    }
})
