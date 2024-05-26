let error = document.querySelector("#error")
let email = document.querySelector("#email")
let popup = document.querySelector('.popup')

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  if(email.value.match(validateEmail)) {
    openPopup()
  }else{
    error.style.display = "block"
  }


function openPopup() {
    popup.classList.add(".open-popup")
}

function closePopup() {
    popup.classList.remove(".open-popup")
}
