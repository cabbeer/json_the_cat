const { jar } = require('request');
const request = require('request');





const fetchBreedDescription = (breedName, callback) => {

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function (error, response, body) {
  

  if (error) {
    console.log('Your cat is in another catsle')
    console.error('error:', error); // Print the error if one occurredsole.log()
  }

  catInfo = (JSON.parse(body));

  catInfo[0] ? callback(null, catInfo[0].description) : callback(error, `SORRY. But your cat is in another catsle!`);


});
};


module.exports = { fetchBreedDescription };