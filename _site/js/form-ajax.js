
  // Helper function to get form data in the supported format
    function getFormDataString(formEl) {
      var formData = new FormData(formEl),
        data = [];

      for (var keyValue of formData) {
        data.push(encodeURIComponent(keyValue[0]) + "=" + encodeURIComponent(keyValue[1]));
      }

      return data.join("&");
    }

    // Fetch the form element
    var formEl = document.getElementsByTagName("form")[0];
    console.log(formEl);
    
    // Override the submit event
    formEl.addEventListener("submit", function (e) {
      e.preventDefault();

      // if (grecaptcha) {
      //   var recaptchaResponse = grecaptcha.getResponse();
      //   if (!recaptchaResponse) { // reCAPTCHA not clicked yet
      //     return false;
      //   }
      // }

      var request = new XMLHttpRequest();

      request.addEventListener("load", function () {
        if (request.status === 302) { // CloudCannon redirects on success
          // It worked
        }
      });

      request.open(formEl.method, formEl.action);
      request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      request.send(getFormDataString(formEl));
      alert("Thanks! We'll be in touch shortly");
      formEl.reset()
    });