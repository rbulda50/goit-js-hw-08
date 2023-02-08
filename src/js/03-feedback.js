const STORAGE_KEY = "feedback-form-state";

const formData = {};
const form = document.querySelector('.feedback-form');


savedMessage();

form.addEventListener('input', onFormInput);
form.addEventListener('submit', onSubmitForm);


function onFormInput(event) {
    // console.log(event.target.value);
    formData[event.target.name] = event.target.value;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};


function savedMessage() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);

    if (savedMessage) {

        const parsedData = JSON.parse(savedMessage);
        // console.log(parsedData);

        Object.entries(parsedData).forEach(([name, value]) => {
            form.elements[name].value = value;

            formData[name] = value;
        });  
    };
};


function onSubmitForm(event) {
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(formData);
};