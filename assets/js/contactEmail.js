document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault();
  const loading = document.querySelector('.loading');
  const errorMessage = document.querySelector('.error-message');
  const sentMessage = document.querySelector('.sent-message');

  loading.style.display = 'block';
  errorMessage.style.display = 'none';
  sentMessage.style.display = 'none';

  const serviceID = 'service_323tuu8'; // Replace with your Service ID
  const templateID = 'template_j9lxozn'; // Replace with your Template ID

  const templateParams = {
    from_user_name: document.getElementById('from_user_name').value,
    from_user_email: document.getElementById('from_user_email').value,
    subject: document.getElementById('subject').value,
    message: document.querySelector('textarea[name="message"]').value
  };

  emailjs.send(serviceID, templateID, templateParams)
    .then((response) => {
      loading.style.display = 'none';
      sentMessage.style.display = 'block';
      console.log('SUCCESS!', response.status, response.text);
      document.getElementById('contact-form').reset(); // Reset form fields
    }, (error) => {
      loading.style.display = 'none';
      errorMessage.style.display = 'block';
      console.log('FAILED...', error);
    });
});