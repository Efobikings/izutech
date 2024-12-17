
document.getElementById('bookingForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Retrieve form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const counselor = document.getElementById('counselor').value;
  
    // Basic validation (can be extended)
    if (!name || !email || !phone || !date || !time || !counselor) {
      alert('Please fill in all fields.');
      return;
    }
  
    // Confirmation message
    const confirmationMessage = `
      Appointment Booked Successfully!<br>
      <strong>Name:</strong> ${name}<br>
      <strong>Email:</strong> ${email}<br>
      <strong>Phone:</strong> ${phone}<br>
      <strong>Date:</strong> ${date}<br>
      <strong>Time:</strong> ${time}<br>
      <strong>Counselor:</strong> ${counselor}
    `;
  
    document.getElementById('confirmationMessage').innerHTML = confirmationMessage;
  
    // Reset the form
    document.getElementById('bookingForm').reset();
  });
  