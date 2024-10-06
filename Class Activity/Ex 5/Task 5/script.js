document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();  

    const email = document.getElementById('email').value;
    const number = document.getElementById('number').value;
    const date = document.getElementById('date').value;
    const range = document.getElementById('range').value;
    const color = document.getElementById('color').value;

    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `
        <h3>Submitted Data:</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Number:</strong> ${number}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Range:</strong> ${range}</p>
        <p><strong>Color:</strong> <span style="background-color:${color}; padding: 5px 10px;">${color}</span></p>
    `;

    outputDiv.style.display = 'block'; 
});
