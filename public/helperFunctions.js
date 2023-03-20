const renderRawResponse = (res) => {
  let trimmedResponse = res.slice(0, 10);
  responseField.innerHTML = `<text>${JSON.stringify(trimmedResponse)}</text>`;
};

const renderJsonResponse = (res) => {
  let rawJson = {};
  for (let key in res) {
    rawJson[key] = res[key];
  }
  rawJson = JSON.stringify(rawJson).replace(/,/g, ', \n');
  responseField.innerHTML = `<pre>${rawJson}</pre>`;
};

const renderResponse = (res) => {
  if (!res) {
    console.log(res.status);
  }
  if (!res.length) {
    responseField.innerHTML =
      '<p>Try again!</p><p>There were no suggestions found!</p>';
    return;
  }

  let wordList = [];
  for (let i = 0; i < Math.min(res.length, 10); i++) {
    wordList.push(`<li>${res[i].word}</li>`);
  }
  wordList = wordList.join('');

  responseField.innerHTML = `<p>You might be interested in:</p><ol>${wordList}</ol>`;
  return;
};
