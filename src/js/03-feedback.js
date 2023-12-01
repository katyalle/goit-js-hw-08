
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const storageKey = 'feedback-form-state';


const saveState = () => {
  const formData = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  localStorage.setItem(storageKey, JSON.stringify(formData));
};

const loadState = () => {
  const storedData = localStorage.getItem(storageKey);
  if (storedData) {
    const formData = JSON.parse(storedData);
    form.elements.email.value = formData.email || '';
    form.elements.message.value = formData.message || '';
  }
};

const clearForm = () => {
  localStorage.removeItem(storageKey);
};

form.addEventListener(
  'input',
  throttle(() => {
    saveState();
  }, 500)
);

form.addEventListener('submit', (event) => {
  event.preventDefault();
  // Log form data and clear state
  console.log('Form Data:', {
    email: form.elements.email.value,
    message: form.elements.message.value,
  });
  form.reset ()
});

document.addEventListener('DOMContentLoaded', () => {
  loadState();
});
