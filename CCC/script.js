document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const queryType = document.querySelector('input[name="queryType"]:checked').value;
    const message = document.getElementById('message').value;
    const consent = document.getElementById('consent').checked;

    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Query Type:', queryType);
    console.log('Message:', message);
    console.log('Consent:', consent);

    // نمایش پیام موفقیت پس از ارسال فرم
    const successMessage = document.createElement('div');
    successMessage.textContent = 'Form successfully submitted!';
    successMessage.style.color = 'green';
    successMessage.style.marginTop = '20px';

    // اضافه کردن پیام موفقیت به انتهای فرم
    const form = document.getElementById('contactForm');
    form.appendChild(successMessage);

    
    form.reset();
});