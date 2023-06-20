const axios = require('axios');
const qs = require('qs');

async function createCategory() {
let data = qs.stringify({
  'wstoken': '4291d2b448369e42440a1c19cf0351b7',
  'wsfunction': 'core_course_create_categories',
  'moodlewsrestformat': 'json',
  'categories[0][name]': 'NODEJS2',
  'categories[0][parent]': '501103148' 
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://aulavirtualprueba.uv.cl/webservice/rest/server.php',
  headers: { 
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});

}

createCategory();



