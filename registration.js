// Array to store the submitted registration data
let registrations = [];

// Function to handle form submission
function submitForm(){
// Retrieving form input values 
  const Name = document.getElementById("Name").value;
  const roll = document.getElementById("roll").value;
  const email = document.getElementById("email").value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const college = document.getElementById("college").value;
  const branch = Array.from(document.getElementById("branch").options)
                      .filter(option => option.selected)
                      .map(option => option.value);
  const state = document.getElementById("state").value;
 
// Creating an object to store the registration data
  const registrationData = {
    Name,
    roll,
    email,
    phoneNumber,
    gender,
    college,
    branch,
    state,
    
  };

 // Adding the registration data to the registrations array
  registrations.push(registrationData);

// Displaying the results of submitted data
  displayResults();

// Resetting the form after submission
  document.getElementById("registration").reset();
}

// Function to display the results of submitted data
function displayResults() {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  for (let i = 0; i < registrations.length; i++) {
    const data = registrations[i];
    const resultDiv = document.createElement("div");
    resultDiv.classList.add("result");

// Creating HTML content for displaying the registration data
    const resultHeading = document.createElement("h3");
    resultHeading.textContent = `Registration ${i + 1}`;                    
    resultDiv.appendChild(resultHeading);

    const resultDetails = document.createElement("p");
    resultDetails.innerHTML = `<strong>Name:</strong> ${data.Name}<br>
      <strong>Roll number:</strong> ${data.roll}<br>
      <strong>Email:</strong> ${data.email}<br>
      <strong>Phone Number:</strong> ${data.phoneNumber}<br>
      <strong>Gender:</strong> ${data.gender}<br>
      <strong>Branch:</strong> ${data.branch.join(", ")}<br>
      <strong>College details:</strong> ${data.college}, ${data.state}<br>`;
    resultDiv.appendChild(resultDetails);

// Appending the registration data div to the results container
    resultsDiv.appendChild(resultDiv);
  }
}