var myHeaders = new Headers();

var myInit = {
  method: "GET",
  headers: myHeaders,
  mode: "no-cors",
  cache: "default"
};

//when we call fetch and assign it to a variable, that value is called a promise.
// const data = fetch(
//   "https://api.usa.gov/jobs/search.json?query=nursing+jobs+with+veterans+affairs+in+albany+ny"
// ).then(response => console.log(response.json()));

// console.log(data);

fetch("https://swapi.co/api/people/1")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.error("ERROR:", err));
