// 0.- Creacion del array de 5 objetos.

const productos = [ 
    { descripcion: "Monitor", precio: 51800 },
    { descripcion: "Mouse", precio: 25000 },
    { descripcion: "Teclado", precio: 19200 },
    { descripcion: "Auriculares", precio: 32500 },
    { descripcion: "Webcam", precio: 15100 },
];

// 1.- Mostrar en consola cada producto en el formato: "Producto: [descripción] - Precio: $[precio]", usando forEach.

productos.forEach(producto => {
    console.log(`Producto: ${producto.descripcion} - Precio: $${producto.precio}`);
});

// 2.- Crear un nuevo array con los productos cuyo precio sea mayor a $20, usando filter.

const productosCaros = productos.filter(producto => producto.precio > 20000);

console.log("Productos con precio mayor a $20000:");
productosCaros.forEach(producto => {
    console.log(`Producto: ${producto.descripcion} - Precio: $${producto.precio}`);
});

// 3.- Crear un array con los productos, pero con el precio con IVA incluido (21%), usandomap.

// Array original con precios sin IVA  
const productosSinIva = [  
    { descripcion: "Auriculares", precio: 49000 },  
    { descripcion: "Teclado", precio: 30000 },  
    { descripcion: "Ratón", precio: 15000 }  
  ];  
  
  // Crear array con precio con IVA incluido  
  const productosConIVA = productos.map(producto => {  
    const precioConIVA = producto.precio * 1.21;  
    return { ...producto, precio: precioConIVA.toFixed(2) };  
  });  
  
  console.log(productosConIVA);  

// 4.- Ordenar el array original de productos por precio de menor a mayor, usando sort.

// Ordenar array original de menor a mayor  

const productosOrdenados = [...productos].sort((a, b) => a.precio - b.precio);  

console.log(productosOrdenados);  

// 5.- Agregar un nuevo producto al final del array (por ejemplo, { descripcion: "Parlante Bluetooth", precio: 59000.90 }).

productos.push({ descripcion: "Parlante Bluetooth", precio: 59000.90 });
console.log("Producto agregado: ");
console.log(productos);

// 6.- Eliminar el producto con el precio más bajo del array. Mostrar cómo queda el array.

let precioMasBajo = 0;

productos.forEach((producto, minimo) => {
  if (producto.precio < productos[precioMasBajo].precio) {
    precioMasBajo = minimo;
}
});

console.log("Producto con menor precio eliminado: ");
console.log(productos);