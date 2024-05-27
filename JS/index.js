// Menu de un restaurante 



//MENU 
const ENTRADAS = [
    { codigo: 'A1', nombre: 'Pan con queso', precio: 1500 },
    { codigo: 'A2', nombre: 'Picada para 4 personas', precio: 5500 },
    { codigo: 'A3', nombre: 'Picada para 2 personas', precio: 3500 },
    { codigo: 'A4', nombre: 'Empanadas (6)', precio: 4000 }
];

const PLATOS_PRINCIPALES = [
    { codigo: 'B1', nombre: 'Pizza', precio: 7000 },
    { codigo: 'B2', nombre: 'Hamburguesa', precio: 5000 },
    { codigo: 'B3', nombre: 'Tacos', precio: 4000 },
    { codigo: 'B4', nombre: 'Asado', precio: 10500 }
];

const POSTRES = [
    { codigo: 'C1', nombre: 'Gelatina', precio: 2000 },
    { codigo: 'C2', nombre: 'Helado', precio: 3000 },
    { codigo: 'C3', nombre: 'Flan', precio: 2500 },
    { codigo: 'C4', nombre: 'Torta', precio: 3500 }
];

const BEBIDAS = [
    { codigo: 'D1', nombre: 'Agua', precio: 1000 },
    { codigo: 'D2', nombre: 'Jugo', precio: 1500 },
    { codigo: 'D3', nombre: 'Coca-Cola', precio: 2000 },
    { codigo: 'D4', nombre: 'Cerveza', precio: 3000 }
];


const menu = {
    entrada: ENTRADAS,
    platoPrincipal: PLATOS_PRINCIPALES,
    postre: POSTRES,
    bebidas: BEBIDAS
};
// Mostrar Menu 

function mostrarMenu() {
    console.log('Menú del Restaurante');
    for (let seccion in menu) {
        console.log(`\n${seccion.charAt(0).toUpperCase() + seccion.slice(1)}`);
        menu[seccion].forEach(item => {
            console.log(`${item.codigo} - ${item.nombre}: $${item.precio}`);
        });
    }
}


// Función para verificar si un código es válido
function esCodigoValido(codigo) {
    for (let seccion in menu) {
        if (menu[seccion].some(item => item.codigo === codigo)) {
            return true;
        }
    }
    return false;
}

// Función para calcular el total del pedido
function calcularTotal(pedidos) {
    let total = 0;
    for (let pedido of pedidos) {
        let { codigo, cantidad } = pedido;
        for (let seccion in menu) {
            let item = menu[seccion].find(item => item.codigo === codigo);
            if (item) {
                total += item.precio * cantidad;
                break;
            }
        }
    }
    return total;
}

// Función para iniciar el pedido
function iniciarPedido() {
    const pedidos = [];
    let continuar = true;

    while (continuar) {
        let codigo;
        do {
            codigo = prompt('Ingrese el código del producto que desea:').toUpperCase();
            if (!esCodigoValido(codigo)) {
                alert('Código no válido. Por favor, ingrese un código válido.');
            }
        } while (!esCodigoValido(codigo));

        let cantidad;
        do {
            cantidad = parseInt(prompt('Ingrese la cantidad deseada:'));
            if (isNaN(cantidad) || cantidad <= 0) {
                alert('Cantidad no válida. Por favor, ingrese una cantidad válida.');
            }
        } while (isNaN(cantidad) || cantidad <= 0);

        pedidos.push({ codigo, cantidad });

        let respuesta;
        do {
            respuesta = prompt('¿Desea agregar otro producto? (s/n)').toLowerCase();
            if (respuesta !== 's' && respuesta !== 'n') {
                alert('Respuesta no válida. Por favor, ingrese "s" para sí o "n" para no.');
            }
        } while (respuesta !== 's' && respuesta !== 'n');

        continuar = (respuesta === 's');
    }

    const total = calcularTotal(pedidos);
    console.log(`El total de su pedido es: $${total}`);
}

// mostrar menu y empezar el pedido 

mostrarMenu();
iniciarPedido();

