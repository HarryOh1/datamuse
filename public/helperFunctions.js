const renderRawResponse = (res) => {
  let trimmedResponse = res.slice(0, 10);
  responseField.innerHTML = `<text>${JSON.stringify(trimmedResponse)}</text>`;
};
