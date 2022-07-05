const form = document.getElementById('form');
const first = document.getElementById('firstname');
const last = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
    e.preventDefault();
    const firstName = form[('firstname')].value;
    const lastName = form[('lastname')].value;
    const email = form[('email')].value;
    const password = form[('password')].value;
    if (firstName === '') {
        addErrorTo('firstname', 'First Name cannot be empty')
    } else removeError('firstname')

    if (lastName === '') {
        addErrorTo('lastname', 'Last Name cannot be empty')
    } else removeError('lastname')

    if (email === '') {
        addErrorTo('email', 'Email cannot be empty')
    } else if (!validateEmail(email)) {
        addErrorTo('email', 'Looks like this is not an email')
    } else removeError('email')

    if (!password) {
        addErrorTo('password', 'Password cannot be empty')
    } else removeError('password')


    function addErrorTo(field, message) {
        const formControl = form[field].parentNode;
        formControl.classList.add('error');
        const small = formControl.querySelector('small');
        small.innerText = message;
        small.style.opacity = '1';


        // const img = formControl.querySelector('img');
        // img.style.opacity = '1';
    }

    function removeError(field) {
        const formControl = form[field].parentNode;
        formControl.classList.remove('error');
        const small = formControl.querySelector('small');
        small.style.opacity = '0';

        // const img = formControl.querySelector('img');
        // img.style.opacity = '0';
    }
    function validateEmail(email) {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };

});