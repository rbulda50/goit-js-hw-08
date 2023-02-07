import throttle from "lodash.throttle";

const STORAGE_KEY = 'feedback-form-state';

const savedData = localStorage.getItem(STORAGE_KEY);
const parsedData = JSON.parse(savedData);
// console.log(parsedData);

const formData = {...parsedData};

const form = document.querySelector('.feedback-form');
savedMessage();


form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(event) {

    formData[event.target.name] = event.target.value;

    const parsedData = JSON.stringify(formData);
    localStorage.setItem(STORAGE_KEY, parsedData);
};

function savedMessage() {
    const parseForm = parsedData;

    if (parseForm) {
        const objectKeys = Object.entries(parseForm);
        
        objectKeys.forEach(([keys, values]) => {

            form.elements[keys].value = values;
        });
    };
};

function onFormSubmit(event) {

    if (form.elements.email.value === '' || form.elements.message.value === '') {
        alert('Заповніть усі поля вводу!')
    } else {
        event.preventDefault();
        event.currentTarget.reset();
        localStorage.clear('feedback-form-state');
        console.log(formData);
    }
};