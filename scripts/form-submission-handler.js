(function() {
  // get all data in form and return object
  function getFormData(form) {
    var formData = Object.values(form).reduce((obj,field) => {
      if(field.name) {
        obj[field.name] = field.value;
      }
      return obj
    }, {})

    formData.formGoogleSheetName = "responses"; // default sheet name
    formData.formGoogleSendEmail = "karlandmiriam@aol.com"

    return {data: formData};
  }

  function handleFormSubmit(buttonValue) {  // handles form submit without any jquery
    var form = document.getElementById("RSVP-form");
    var formData = getFormData(form);
    var data = formData.data;
    data.response = buttonValue;
    disableAllButtons(form);
    var url = form.action;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);

    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
          form.reset();
          var formElements = document.getElementById("RSVP-form")
          formElements.style.display = "none"; // hide form

          var thankYouMessage = document.getElementById("thankyou_message");
          thankYouMessage.style.display = "flex";
        }
    };
    // url encode form data for sending as post data
    var encoded = Object.keys(data).map(function(k) {
        return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
    }).join('&');
    xhr.send(encoded);
  }
  function handleButtonClick(event) {
    event.preventDefault();
    var value = event.target.value
    handleFormSubmit(value)
  }
  function loaded() {
    // bind to the submit event of our form
    var attendbutton = document.getElementById("modal-button-confirm")
    attendbutton.addEventListener("click", handleButtonClick, false)

    var attendbutton = document.getElementById("modal-button-cancel")
    attendbutton.addEventListener("click", handleButtonClick, false)
  };
  document.addEventListener("DOMContentLoaded", loaded, false);

  function disableAllButtons(form) {
    var buttons = form.querySelectorAll("button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
  }
})();
