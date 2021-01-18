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
      form.innerHTML = `
      <div class="bg-green-100 rounded-md p-3 flex">
      <svg
          class="stroke-2 stroke-current text-green-600 h-8 w-8 mr-2 flex-shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
      >
          <path d="M0 0h24v24H0z" stroke="none" />
          <circle cx="12" cy="12" r="9" />
          <path d="M9 12l2 2 4-4" />
      </svg>
  
      <div class="text-green-700">
          <div class="font-bold text-xl">Thank you!</div>
  
          <div>We will be in touch soon! Looking forward to working with you!</div>
      </div>
      </div>
      `;
    })
    .catch(error => {
      form.innerHTML = `
      <div class="bg-red-100 rounded-md p-3 flex">
      <svg
          class="stroke-2 stroke-current text-red-600 h-8 w-8 mr-2 flex-shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
      >
          <path d="M0 0h24v24H0z" stroke="none" />
          <circle cx="12" cy="12" r="9" />
          <path d="M9 12l2 2 4-4" />
      </svg>
  
      <div class="text-red-700">
          <div class="font-bold text-xl">There's been a problem with the form!</div>
  
          <div>Please try again at another time or reach out via email!  Sorry for the inconvenience.</div>
      </div>
      </div>
      `;
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