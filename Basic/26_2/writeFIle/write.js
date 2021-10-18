const fs = require('fs').promises;

fs.writeFile('./my-text.txt', 'Its the story about little guy who lives in the blue world')
  .then(() => {
    console.log('Arquivo escrito com sucesso!');
  })
  .catch((err) => {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
});

// ps: Remember to first use node write.js to change my-text.txt content, then you can use a npm start to show that content.