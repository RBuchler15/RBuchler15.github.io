/* 
Name: Robin Martinez
File Name: script.js
Date: 07/15/2024
*/

//Hamburger menu function
function hamburger() {
    var menu = document.getElementById("menu-links");
    var logo = document.getElementById("logo-container");
    if (menu.style.display === "block" && logo.style.display === "none") {
        menu.style.display = "none";
        logo.style.display = "block";
    } else {
        menu.style.display = "block";
        logo.style.display = "none";
    }
    
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this); // Collect form data

    fetch('send_email.php', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(data => {
        document.getElementById('responseMessage').innerText = data;
    })
    .catch(error => {
        document.getElementById('responseMessage').innerText = 'An error occurred: ' + error.message;
    });
});


function calculateMortgage() {
    var loanAmount = parseFloat(document.getElementById('loan-amount').value);
    var interestRate = parseFloat(document.getElementById('interest-rate').value) / 100 / 12;
    var loanTerm = parseFloat(document.getElementById('loan-term').value) * 12;

    // Input validation
    if (isNaN(loanAmount) || loanAmount <= 0) {
        alert('Please enter a valid loan amount greater than 0.');
        return;
    }
    if (isNaN(interestRate) || interestRate <= 0) {
        alert('Please enter a valid interest rate greater than 0.');
        return;
    }
    if (isNaN(loanTerm) || loanTerm <= 0) {
        alert('Please enter a valid loan term greater than 0.');
        return;
    }

    var numerator = interestRate * Math.pow(1 + interestRate, loanTerm);
    var denominator = Math.pow(1 + interestRate, loanTerm) - 1;
    var monthlyPayment = loanAmount * (numerator / denominator);
    monthlyPayment = monthlyPayment.toFixed(2);

    document.getElementById('results').innerHTML = "<h3>Monthly Payment: $" + monthlyPayment + "</h3>";
}


function clearForm() {
    document.getElementById('loan-amount').value = '';
    document.getElementById('interest-rate').value = '';
    document.getElementById('loan-term').value = '';
    document.getElementById('results').innerHTML = '';
}

