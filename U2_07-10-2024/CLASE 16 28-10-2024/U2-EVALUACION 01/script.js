// Noyola Gómez Emilio Damian - 5IV9

// Selecciona el contenedor principal
const app = document.getElementById('app');

// Función para crear el formulario de entrada
const createForm = () => {
  // Crear elementos del formulario
  const form = document.createElement('form');
  form.style.marginBottom = '20px';

  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.placeholder = 'Nombre';
  nameInput.style.margin = '10px';

  const occupationInput = document.createElement('input');
  occupationInput.type = 'text';
  occupationInput.placeholder = 'Ocupación';
  occupationInput.style.margin = '10px';

  const colorPicker = document.createElement('input');
  colorPicker.type = 'color';
  colorPicker.style.margin = '10px';

  const saveButton = document.createElement('button');
  saveButton.type = 'button';
  saveButton.textContent = 'Guardar';
  saveButton.style.margin = '10px';
  
  // Añadir evento al botón de guardar
  saveButton.addEventListener('click', () => {
    if (nameInput.value === '' || occupationInput.value === '') {
      alert('Por favor, completa todos los campos.');
      return;
    }
    createProfileCard(nameInput.value, occupationInput.value, colorPicker.value);
    nameInput.value = '';
    occupationInput.value = '';
    colorPicker.value = '#ffffff';
  });

  // Añadir elementos al formulario
  form.append(nameInput, occupationInput, colorPicker, saveButton);
  app.appendChild(form);
};

// Función para crear una tarjeta de perfil
const createProfileCard = (name, occupation, bgColor) => {
  // Crear el contenedor de la tarjeta
  const card = document.createElement('div');
  card.style.width = '300px';
  card.style.height = '200px';
  card.style.backgroundColor = bgColor;
  card.style.padding = '15px';
  card.style.marginBottom = '10px';
  card.style.borderRadius = '8px';
  card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
  card.style.color = '#333';

  // Crear y añadir los elementos de la tarjeta
  const nameElem = document.createElement('h3');
  nameElem.textContent = name;

  const occupationElem = document.createElement('p');
  occupationElem.textContent = occupation;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Eliminar';
  deleteButton.style.backgroundColor = '#ff4d4d';
  deleteButton.style.color = '#fff';
  deleteButton.style.border = 'none';
  deleteButton.style.padding = '5px 10px';
  deleteButton.style.cursor = 'pointer';
  deleteButton.style.borderRadius = '4px';
  deleteButton.addEventListener('click', () => {
    card.remove();
  });

  // Añadir los elementos a la tarjeta
  card.append(nameElem, occupationElem, deleteButton);
  
  // Añadir la tarjeta al contenedor principal
  app.appendChild(card);
};

// Ejecuta la función para crear el formulario al cargar la página
createForm();
