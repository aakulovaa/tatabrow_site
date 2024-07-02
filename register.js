const {form} = document.forms

function retrieveFromValue(event){
    event.preventDefault();

    const formData = new FormData(form);
    const values = Object.fromEntries(formData.entries())

    console.log('>>', values);
}

form.addEventListener('submit', retrieveFromValue);