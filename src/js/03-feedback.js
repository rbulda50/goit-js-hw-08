import throttle from "lodash.throttle";

const STORAGE_KEY = 'feedback-form-state';

const formData = {};

const form = document.querySelector('.feedback-form');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

savedFormMessage();


function onFormSubmit(event) {
    event.preventDefault();

    // console.log('Відправляємо форму');
    event.currentTarget.reset();
    console.log(formData);
    localStorage.removeItem(STORAGE_KEY);
};


function onFormInput(event) {

    formData[event.target.name] = event.target.value;
    const savedData = JSON.stringify(({ formData }));
    localStorage.setItem(STORAGE_KEY, savedData);
};

function savedFormMessage(event) {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    const parsedMessage = JSON.parse(savedMessage);

    // console.log(parsedMessage.formData.email);
    // console.log(parsedMessage.formData.message);

    if (savedMessage) {
        form.elements.email.value = parsedMessage.formData.email;
        // console.log(form.elements.email.value);
        form.message.value = parsedMessage.formData.message;
        // console.log(form.message.value);
    };
};




