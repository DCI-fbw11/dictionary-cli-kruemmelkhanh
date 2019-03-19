const axios = require("axios");
const search = word => {
  axios({
    method: "get",
    headers: {
      app_id: "7e89dc76",
      app_key: "c0aba735532f360b4ca788ae6a8edde2"
    },
    url: "https://od-api.oxforddictionaries.com/api/v1/entries/en/" + word,
    responseType: "json"
  })
    .then(response => {
      let all;
      [all] = response.data.results;
      ({ id, lexicalEntries } = all);
      console.log("\n");
      for (i = 0; i < lexicalEntries.length; i++) {
        console.log(word + " " + "(" + lexicalEntries[i].lexicalCategory + ")");
        console.log(
          "1. " +
            lexicalEntries[i].entries[0].senses[0].short_definitions +
            "\n\n"
        );
      }
    })
    .catch(error => {
      console.log(error.response.status + " " + error.response.statusText);
    });
};

module.exports = search;
