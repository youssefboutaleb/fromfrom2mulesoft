const applicationForm = document.getElementById('applicationForm');
function onSubmit() {
  event.preventDefault(); // Prevent default form submission

  // Collect form data
  const civility = document.querySelector('input[name="civility"]:checked').value;
  const firstName = document.getElementById('FirstName').value;
  const lastName = document.getElementById('lastname').value;
  const email = document.getElementById('email').value;
  const univercity = document.getElementById('univercity').value;
  const univercity_type = document.querySelector('input[name="univercitytype"]:checked').value;
  const work_prefrence = document.querySelector('input[name="work"]:checked').value;
  const country = document.getElementById('country').value;
  const countryCodeSpan = document.getElementById('countryCode');
  const countryCode = countryCodeSpan.textContent; // Includes the "+" prefix
  const phoneNumberInput = document.getElementById('phone');
  const phoneNumber = phoneNumberInput.value;

  // Combine country code and phone number
  const fullPhoneNumber = countryCode + phoneNumber;

formData = {
    civility: civility,
    firstName: firstName,
    lastName: lastName,
    email: email,
    univercity: univercity,
    univercity_type: univercity_type,
    work_prefrence : work_prefrence,
    country: country,
    phoneNumber: fullPhoneNumber
  };

  // Log the JSON object to the console
  console.log(JSON.stringify(formData, null, 2));

  fetch('http://localhost:8082/testform', {
    method: 'POST',
   
    headers: {
        'Content-Type': 'application/json',
        
    
    },
    body: JSON.stringify(formData),
    
})


.then(data => {
    
    console.log('Form submission successful:', data);
    // Optionally, you can handle the response data here
})
.catch(error => {
    console.error("There was problem with form submission",error);
});
};

function onCountryChange() {
    console.log('the oncountrychang function begin to work');
    const countrySelect = document.getElementById('country');
    const selectedCountry = countrySelect.value;
    const countryCodeSpan = document.getElementById('countryCode');
    
    switch (selectedCountry) {
      case 'tunisia':
       countryCode = '216';
        break;
      case 'france':
        countryCode = '33';
        break;
        case '':
        countryCode = '33';
        break;
      // Add cases for other countries as needed
      default:
       countryCode = ''; // Reset or set a default
    }
  
    // Update the country code display in the input field
    console.log(countryCode);
    countryCodeSpan.textContent = '+' + countryCode;
  }
  function updateFileMessage() {
    var span = document.getElementById('filemessage');
    console.log("file uploaded ")
    const fileinput = document.getElementById('avatar');
    if (fileinput.files.length > 0) {
        span.textContent = fileinput.files[0].name;
    } else {
        span.textContent = 'No file uploaded';
    }
}
  
  // Get references to form and select elements
  function toggleExpand() {
    var content = document.getElementById("expandContent");
    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}
  
  // Attach event listeners
  applicationForm.addEventListener('submit', onSubmit);
  const countrySelect = document.getElementById('country');
  const fileinput = document.getElementById('avatar');
  fileinput.addEventListener('change',updateFileMessage);
countrySelect.addEventListener('change', onCountryChange);

 
