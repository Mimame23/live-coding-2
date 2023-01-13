
const API_ENDPOINT = 'https://yesno.wtf/api';

// 1. Construye una función fetchAnswer que realice una petición al API https://yesno.wtf/api.
function fetchAnswer() {
    fetch('https://yesno.wtf/api')
      .then(response => response.json())
      .then(data => {
// 2. Muestra la respuesta del API en el HTML, en el div con id answer.
        document.getElementById('answer').innerHTML = data.answer;
      });
  }
  
// 3. Agrega la función fetchAnswer a un eventListener, para que sea disparado cuando se de click al botón.
  document.getElementById('button').addEventListener('click', fetchAnswer);

  
  
// 4. Limpia la pregunta y la respuesta despues de 5 segundos.
  setTimeout(() => {
    document.getElementById('answer').innerHTML = '';
    document.getElementById('input').innerHTML = '';
  }, 5000);
  
//no se borra la pregunta :(