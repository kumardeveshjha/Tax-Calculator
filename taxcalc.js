document.getElementById('tax-form').addEventListener('submit', function(event) {
     event.preventDefault();
 
     let grossIncome = document.querySelector('.gross-income').value;
     let extraIncome = document.querySelector('.extra-income').value;
     let deductions = document.querySelector('.deductions').value;
     let age = document.querySelector('.age').value;
 
     if (grossIncome == '' || extraIncome === '' || deductions === '' || isNaN(grossIncome) || isNaN(extraIncome) || isNaN(deductions)) {
         showErrors('Please enter a valid number.');
         return;
     }
 
     if (age === '') {
         showErrors('Please select an age range.');
         return;
     }
 
     let totalIncome = parseFloat(grossIncome) + parseFloat(extraIncome) - parseFloat(deductions);
     let tax = 0;
    //  let overAllIncome = grossIncome + extraIncome - deductions;
     if(totalIncome > 800000) {
        if (age < 40) {
            tax = 0.3 * (totalIncome - 800000);
        } else if (age >= 40 && age < 60 ) {
            tax = 0.4 * (totalIncome - 800000);
        } else {
            tax = 0.1 * (totalIncome - 800000);
        } 
     }
   
     
     
    
    
     document.querySelector('.container-popup').style.display = "block";
     document.querySelector('#income').innerText = totalIncome - tax.toFixed(2);
 });

 document.querySelector('.close-popup').addEventListener('click', () => {
    document.querySelector('.popup').style.display = "none";

 })
 
 function showErrors(message) {
     let errorIcons = document.querySelectorAll('.error-icon');
     errorIcons.forEach(function(icon) {
         icon.style.display = 'inline-block';
         icon.setAttribute('data-error-for', message);
     });
 }