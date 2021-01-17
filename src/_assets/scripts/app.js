document.getElementById('nav-toggle').onclick = function(){
    document.getElementById("nav-content").classList.toggle("hidden");
}

const processForm = form => {
    console.log("woo");
    const data = new FormData(form);
    data.append('form-name', 'becomeastudent');
    fetch('/', {
      method: 'POST',
      body: data,
    })
    .then(() => {
      form.innerHTML = `<div class="form--success">Almost there! Check your inbox for a confirmation e-mail.</div>`;
    })
    .catch(error => {
      form.innerHTML = `<div class="form--error">Error: ${error}</div>`;
    })
  }

const emailForm = document.querySelector('.email-form');
if (emailForm) {
  emailForm.addEventListener('submit', e => {
    console.log("submitted");
    e.preventDefault();
    processForm(emailForm);
  })
}