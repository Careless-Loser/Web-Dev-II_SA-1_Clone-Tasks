window.onload = function() {
    alert("Welcome to Spec Petrol Station!");
    alert("Please select the type of petrol you need and enter the amount.");
};

document.getElementById('calculateBtn').addEventListener('click', function() {
    var pricePerLiter;
    var petrolType = document.getElementById('petrolType').value;
    switch (petrolType) {
        case 'super':
            pricePerLiter = 2.00;
            break;
        case 'special':
            pricePerLiter = 1.72; 
            break;
        case 'diesel':
            pricePerLiter = 1.50; 
            break;
        case 'e-plus':
            pricePerLiter = 1.60;
            break;
        default:
            alert("Invalid petrol type!");
            return;
    }

    var litersNeeded = parseFloat(document.getElementById('litersNeeded').value);
    var totalPrice = pricePerLiter * litersNeeded;

    var tax = totalPrice * 0.01; 
    totalPrice += tax;

    var needCleaningProducts = document.querySelector('input[name="cleaningProducts"]:checked').value === 'yes';
    var cleaningProductCost = 0;
    if (needCleaningProducts) {
        cleaningProductCost = parseInt(document.getElementById('cleaningProductOptions').value) * parseInt(document.getElementById('quantity').value);
        totalPrice += cleaningProductCost;
    }

    document.getElementById('response').innerHTML = "Total Price (including tax and cleaning products): $" + totalPrice.toFixed(2);

    var receiptContent = "Petrol Type: " + petrolType.toUpperCase() + "<br>" +
                         "Liters Needed: " + litersNeeded.toFixed(2) + " liters<br>";
    if (needCleaningProducts) {
        receiptContent += "Cleaning Product Cost: $" + cleaningProductCost.toFixed(2) + "<br>";
    }
    receiptContent += "Total Price (including tax and cleaning products): $" + totalPrice.toFixed(2);
    document.getElementById('receiptContent').innerHTML = receiptContent;
    document.getElementById('receipt').style.display = 'block';
});

document.getElementById('petrolType').addEventListener('change', function() {
    document.getElementById('litersNeeded').value = "1.72";
    document.getElementById('response').innerHTML = "";
    document.getElementById('receipt').style.display = 'none';
});

document.querySelectorAll('input[name="cleaningProducts"]').forEach(function(radio) {
    radio.addEventListener('change', function() {
        var cleaningProductsOptions = document.getElementById('cleaningProductsOptions');
        if (this.value === 'yes') {
            cleaningProductsOptions.style.display = 'block';
        } else {
            cleaningProductsOptions.style.display = 'none';
        }
    });
});
