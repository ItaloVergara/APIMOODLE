const axios = require('axios');
const qs = require('qs');


async function createCourse() {
let data = qs.stringify({
  'wstoken': 'ed18f8dcbf1b420c59eacbc526609019',
  'wsfunction': 'core_course_create_courses',
  'moodlewsrestformat': 'json',
  'courses[0][fullname]': 'Curso DTIC',
  'courses[0][shortname]': 'DTICPRUEBA',
  'courses[0][categoryid]': '501103142',
  //'courses[0][format]': 'topics',
  //'courses[0][startdate]': '1686370560'
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

createCourse();














// const axios = require('axios');


// async function createCourse(courseData) {
//     try {
//       const response = await axios.post('https://aulavirtualprueba.uv.cl/webservice/rest/server.php', {
//         wstoken: 'ed18f8dcbf1b420c59eacbc526609019',
//         wsfunction: 'core_course_create_courses',
//         moodlewsrestformat: 'json',
//         // courses[0][fullname] : coursesData.fullname,
//         // courses[0][shortname] : coursesData.fullname,
//         // courses[0][category] : coursesData.fullname
//         courses: [
//           {
//             fullname: courseData.fullname,
//             shortname: courseData.shortname,
//             category: courseData.categoryid,
//             // Otros parámetros opcionales
//           }
//         ]
//       });
  
//       // Procesar la respuesta
//       console.log('Curso creado:', response.data);
//     } catch (error) {
//       console.error('Error al crear el curso:', error);
//     }
//   }
  
//   // Datos del curso a crear
//   const courseData = {
//     fullname: 'CursodeNode.js',
//     shortname: 'cursonodejs',
//     category: 501103142
//   };
  
//   // Llamar a la función para crear el curso
//   createCourse(courseData);














// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

// async function createCourse(courseName, courseCategory, Node) {
//     try {
//       const params = new URLSearchParams({
//         wstoken: token,
//         wsfunction: 'core_course_create_courses',
//         moodlewsrestformat: 'json',
//         courses: JSON.stringify([{ fullname: courseName, shortname: Node, categoryid: courseCategory,
//            }])
//       });
  
//       const response = await axios.post(baseUrl, params);
//       console.log(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   createCourse('CursoNodejs', 'node', 501103142); // Reemplaza con el nombre y la categoría del curso que deseas crear