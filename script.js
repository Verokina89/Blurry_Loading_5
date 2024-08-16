// Selecciona el elemento con la clase 'loadText' y lo guarda en la constante 'loadText'.
const loadText = document.querySelector('.loadText')

// Selecciona el elemento con la clase 'bg' (el fondo) y lo guarda en la constante 'bg'.
const bg = document.querySelector('.bg')

// Inicializa la variable 'load' con 0, que representará el porcentaje de carga.
let load = 0

// Configura un intervalo que se ejecuta cada 30 milisegundos.
let int = setInterval(() => {
    // Incrementa el valor de 'load' en 1.
    load++

    // Si 'load' supera 99, se detiene el intervalo para que no siga incrementando.
    if (load > 99) {
        clearInterval(int)
    }

    // Actualiza el contenido de 'loadText' para mostrar el valor actual de 'load' seguido de '%'.
    loadText.innerHTML = `${load}%`;

    // Ajusta la opacidad de 'loadText' basándose en el valor de 'load', para hacer que desaparezca a medida que aumenta.
    loadText.style.opacity = scale(load, 0, 100, 1, 0)

    // Ajusta el desenfoque del fondo 'bg' basándose en el valor de 'load', para que el fondo se vuelva más nítido.
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}, 30)

// Define la función 'scale' que convierte un número de un rango de entrada (inMin a inMax) a un rango de salida (outMin a outMax).
const scale = (num, inMin, inMax, outMin, outMax) => 
    // Calcula el valor escalado según la fórmula.
    ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin



/*solucion code STA*/
/*--->
 // Selecciona el elemento con el ID 'loading' y lo guarda en la variable 'loading'
const loading = document.getElementById('loading');

// Selecciona el elemento con el ID 'mainBg' y lo guarda en la variable 'mainBg'
const mainBg = document.getElementById('mainBg');

// Inicializa la variable 'load' en 0 para manejar la opacidad del fondo
let load = 0;

// Inicializa la variable 'percentage' en 0 para manejar el porcentaje de carga que se muestra
let percentage = 0;

// Define la función 'updateBackgroundAndCounter' que se ejecuta repetidamente para actualizar la opacidad y el contador
const updateBackgroundAndCounter = () => {
    // Incrementa 'load' en 0.01, lo que se utilizará para la opacidad del fondo
    load += 0.01;

    // Incrementa 'percentage' en 1 para actualizar el porcentaje de carga mostrado
    percentage += 1;

    // Actualiza la opacidad del fondo (mainBg) en función del valor de 'load'
    mainBg.style.opacity = load;

    // Actualiza el contenido de texto del elemento 'loading' para mostrar el porcentaje de carga
    loading.innerHTML = `${percentage}%`;

    // Si 'percentage' alcanza o supera 100, detiene la ejecución repetitiva del intervalo
    if (percentage >= 100) {
        clearInterval(interval);

        // Hace desaparecer el contador de carga ajustando su opacidad a 0
        loading.style.opacity = 0;
    }
};

// Establece un intervalo que ejecuta la función 'updateBackgroundAndCounter' cada 1 milisegundo
// Esto permite que el porcentaje alcance el 100% en 100 milisegundos
const interval = setInterval(updateBackgroundAndCounter, 1);

<---*/

/* 
// Selecciona el elemento con la clase 'bg' y lo guarda en la variable 'bg'
const bg = document.querySelector('.bg')

// Selecciona el elemento con la clase 'loadText' y lo guarda en la variable 'loadText'
const loadText = document.querySelector('.loadText')

// Inicializa una variable 'load' en 0 para llevar un conteo del porcentaje de carga
let load = 0

// Establece un intervalo que ejecuta la función 'blurring' cada 30 milisegundos
let int = setInterval(blurring, 30)

// Define la función 'blurring' que se ejecuta repetidamente para simular la carga
function blurring() {
    // Incrementa el valor de 'load' en 1
    load++

    // Si 'load' supera el valor de 99, detiene la ejecución repetitiva del intervalo
    if (load > 99) 
        clearInterval(int)

    // Actualiza el contenido de texto del elemento 'loadText' para mostrar el porcentaje de carga
    loadText.innerHTML = `${load}%`

    // Ajusta la opacidad de 'loadText' en función del valor de 'load', haciendo que desaparezca gradualmente
    loadText.style.opacity = scale(load, 0, 100, 1, 0)

    // Aplica un filtro de desenfoque al fondo ('bg'), reduciendo el desenfoque a medida que 'load' aumenta
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

// Función 'scale' que convierte un número de un rango a otro rango
const scale = (num, inMin, inMax, outMin, outMax) => {
    // Realiza la conversión proporcional entre los rangos especificados
    return ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}

el return puede obviarse */
