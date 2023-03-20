const url = 'https://api.datamuse.com/words?sl=';

const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

const getSuggestions = () => {
  const wordQuery = inputField.value;
  const endpoint = `${url}${wordQuery}`;
  console.log(endpoint);

  fetch(endpoint, { cashe: 'no-cache' })
    .then(
      (response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Request failed!');
      },
      (networkError) => {
        console.log(networkError.message);
      }
    )
    .then((jsonResponse) => {
      renderResponse(jsonResponse);
    });
};

const displaySuggestions = (event) => {
  event.preventDefault();
  while (responseField.firstChild) {
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
};

submit.addEventListener('click', displaySuggestions);
