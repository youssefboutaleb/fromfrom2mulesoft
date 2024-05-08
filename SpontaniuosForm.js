const applicationForm = document.getElementById('applicationForm');
function onSubmit() {
  event.preventDefault(); // Prevent default form submission

  // Collect form data
  const civility = document.querySelector('input[name="civility"]:checked').value;
  const firstName = document.getElementById('FirstName').value;
  const lastName = document.getElementById('lastname').value;
  const email = document.getElementById('email').value;
  const application_type = document.querySelector('input[name="work"]:checked').value;
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
    application_type : application_type,
    country: country,
    phoneNumber: fullPhoneNumber
  };

  // Log the JSON object to the console
  console.log(JSON.stringify(formData, null, 2));

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
  
  // Get references to form and select elements

  
  // Attach event listeners
  applicationForm.addEventListener('submit', onSubmit);
  const countrySelect = document.getElementById('country');
countrySelect.addEventListener('change', onCountryChange);
 