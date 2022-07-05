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
        addErrorTo('email', 'Looks like this is not an email')
    } else removeError('email')

    if (!password) {
        addErrorTo('password', 'Password cannot be empty')
    } else removeError('password')


    function addErrorTo(field, message) {
        const small = form[field].parentNode.querySelector('small');
        small.innerText = message;
        small.style.opacity = '1';
    }

    function removeError(field) {
         const small =form[field].parentNode.querySelector('small');
         small.style.opacity = '0';
    }

});