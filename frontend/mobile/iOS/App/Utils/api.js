// https://fetch.spec.whatwg.org/

var API_ROOT = 'http://localhost:8080/';

var api = {

  submitLogin(postData) {
    var url = `${ API_ROOT }users/login`;
    return fetch(url, {
      method: 'POST',
      body: postData
    }).then((response) => {
      return response.json();
    }).catch((error) => {
      console.error(error);
    });
  }

};

module.exports = api;