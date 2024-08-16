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
// const loading = document.getElementById('loading');
//     const mainBg = document.getElementById('mainBg');
//     let load = 0;
//     let percentage = 0;
//     const updateBackgroundAndCounter = () => {
//         load += 0.01;
//         percentage += 1;
//         mainBg.style.opacity = load;
//         loading.innerHTML = `${percentage}%`;
//         if (percentage >= 100) {
//             clearInterval(interval);
//             loading.style.opacity = 0; // Desaparece el contador
//         }
//     };
//     const interval = setInterval(updateBackgroundAndCounter, 1); // 1ms interval to reach 100% in 100ms
// };

/* 
const bg = document.querySelector('.bg')
// const loadText = document.querySelector('.loadText')

// let load = 0

// let int = setInterval(blurring, 30)

// function blurring () {
//     load++

//     if (load > 99) 
//         clearInterval(int)

//     loadText.innerHTML = `${load}%`
//     loadText.style.opacity = scale(load, 0, 100, 1, 0)
//     bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
// }

// const scale = (num, inMin, inMax, outMin, outMax) => {
//     return ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
// } 
el return puede obviarse */
