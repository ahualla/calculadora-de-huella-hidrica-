document.getElementById("start-btn").addEventListener("click", function() {
    document.getElementById("welcome-content").style.display = "none";
    document.getElementById("quiz-content").style.display = "block";
});

// Incrementar y decrementar valores
const incrementButtons = document.querySelectorAll('.increment');
const decrementButtons = document.querySelectorAll('.decrement');
const values = document.querySelectorAll('.value');

incrementButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        let currentValue = parseInt(values[index].innerText);
        values[index].innerText = currentValue + 1;
    });
});

decrementButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        let currentValue = parseInt(values[index].innerText);
        if (currentValue > 0) {
            values[index].innerText = currentValue - 1;
        }
    });
});
function startQuiz() {
    // Oculta la sección de introducción
    document.getElementById("intro-section").style.display = "none";
    // Muestra la sección del cuestionario
    document.getElementById("quiz-section").style.display = "block";
}

function increaseValue(inputId) {
    let input = document.getElementById(inputId);
    input.value = parseInt(input.value) + 1;
}

function decreaseValue(inputId) {
    let input = document.getElementById(inputId);
    if (parseInt(input.value) > 0) {
        input.value = parseInt(input.value) - 1;
    }
}
document.getElementById('next').addEventListener('click', function() {
    // Ocultar la primera sección
    document.getElementById('section1').style.display = 'none';
    
    // Mostrar la segunda sección
    document.getElementById('section2').style.display = 'block';
  });
  function startQuiz() {
    // Oculta la sección de introducción y muestra el cuestionario
    document.getElementById('intro-section').style.display = 'none';
    document.getElementById('quiz-section').style.display = 'block';
}

function goToSection2() {
    // Oculta la sección 1 y muestra la sección 2
    document.getElementById('section1').style.display = 'none';
    document.getElementById('section2').style.display = 'block';
}

function decreaseValue(id) {
    let input = document.getElementById(id);
    let value = parseInt(input.value, 10);
    if (value > 0) {
        input.value = value - 1;
    }
}

function increaseValue(id) {
    let input = document.getElementById(id);
    input.value = parseInt(input.value, 10) + 1;
}
function startQuiz() {
    // Oculta la sección de introducción y muestra el cuestionario
    document.getElementById('intro-section').style.display = 'none';
    document.getElementById('quiz-section').style.display = 'block';
}

function goToSection(sectionNumber) {
    // Oculta todas las secciones
    const sections = document.querySelectorAll('[id^="section"]');
    sections.forEach(section => section.style.display = 'none');
    
    // Muestra la sección correspondiente
    document.getElementById(`section${sectionNumber}`).style.display = 'block';
}

// Función para aumentar el valor de un input
function increaseValue(id) {
    const input = document.getElementById(id);
    input.value = parseInt(input.value) + 1;
}

// Función para disminuir el valor de un input
function decreaseValue(id) {
    const input = document.getElementById(id);
    if (input.value > 0) {
        input.value = parseInt(input.value) - 1;
    }
}

// Función para cambiar de sección
function goToSection(sectionNumber) {
    // Ocultar todas las secciones
    for (let i = 1; i <= 7; i++) {
        document.getElementById(`section${i}`).style.display = 'none';
    }
    // Mostrar la sección actual
    document.getElementById(`section${sectionNumber}`).style.display = 'block';
}

// Función para iniciar el cuestionario
function startQuiz() {
    document.getElementById('intro-section').style.display = 'none';
    document.getElementById('quiz-section').style.display = 'block';
    goToSection(1);
}

// Función para calcular la huella hídrica (ejemplo básico)
function calculateFootprint() {
    // Obtener valores de las preguntas
    const showerTime = parseInt(document.getElementById('shower-time').value);
    const bathTapTime = parseInt(document.getElementById('bath-tap-time').value);
    const kitchenTapTime = parseInt(document.getElementById('kitchen-tap-time').value);
    const dishwasherTimes = parseInt(document.getElementById('dishwasher-times').value);
    const handwashingTimes = parseInt(document.getElementById('handwashing-times').value);
    const laundryTimes = parseInt(document.getElementById('laundry-times').value);
    const beefConsumption = parseInt(document.getElementById('beef-consumption').value);
    const chickenConsumption = parseInt(document.getElementById('chicken-consumption').value);
    const porkConsumption = parseInt(document.getElementById('pork-consumption').value);
    const lambConsumption = parseInt(document.getElementById('lamb-consumption').value);
    const vegetablesConsumption = parseInt(document.getElementById('vegetables-consumption').value);
    const legumesConsumption = parseInt(document.getElementById('legumes-consumption').value);
    const tubersConsumption = parseInt(document.getElementById('tubers-consumption').value);
    const dairyConsumption = parseInt(document.getElementById('dairy-consumption').value);
    const softDrinksConsumption = parseInt(document.getElementById('soft-drinks-consumption').value);
    const energyDrinksConsumption = parseInt(document.getElementById('energy-drinks-consumption').value);
    const alcoholConsumption = parseInt(document.getElementById('alcohol-consumption').value);

    // Obtener valores de las respuestas de reciclaje y coche
    const recyclePaper = document.querySelector('input[name="recycle-paper"]:checked');
    const recyclePlastic = document.querySelector('input[name="recycle-plastic"]:checked');
    const hasCar = document.querySelector('input[name="has-car"]:checked');

    // Asignar valores según las respuestas seleccionadas
    let recyclePaperValue = 0;
    if (recyclePaper) {
        recyclePaperValue = recyclePaper.value === "Todo" ? 1000 :
                            recyclePaper.value === "Algo" ? 8000 :
                            16000;
    }

    let recyclePlasticValue = 0;
    if (recyclePlastic) {
        recyclePlasticValue = recyclePlastic.value === "Todo" ? 1000 :
                              recyclePlastic.value === "Algo" ? 6000 :
                              12000;
    }

    let hasCarValue = 0;
    if (hasCar) {
        hasCarValue = hasCar.value === "Sí" ? 40000 : 0;
    }

    // Realiza cálculos básicos (ajusta según lo que necesites)
    const total = (showerTime * 10 + bathTapTime * 8 + kitchenTapTime * 20 +
                  dishwasherTimes * 15 + handwashingTimes * 30 + laundryTimes * 20 +
                  beefConsumption * 15000 + chickenConsumption * 600 + porkConsumption * 8000 +
                  lambConsumption * 6000 + vegetablesConsumption * 300 + legumesConsumption * 1500 +
                  tubersConsumption * 500 + dairyConsumption * 1000 + softDrinksConsumption * 1500 +
                  energyDrinksConsumption * 1000 + alcoholConsumption * 900 +
                  recyclePaperValue + recyclePlasticValue + hasCarValue)*12;

    // Mostrar el resultado
    document.getElementById('result-message').textContent = `Tu huella hídrica es de ${total} litros al año.`;
    document.getElementById('result-section').style.display = 'block';
}
function showResults() {
    const result = calculateFootprint(); // Calcula la huella hídrica
    const resultMessage = `Consumo de Litros al año: ${result}`; // Mensaje a mostrar

    // Muestra el mensaje en la sección de resultados
    document.getElementById('result-message').innerText = resultMessage;
    document.getElementById('result-section').style.display = 'block'; // Muestra la sección de resultados

    // Asegúrate de que la sección 8 sea visible
    document.getElementById('section8').style.display = 'block';
}
