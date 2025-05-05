// Array inicial de productos
let productos = [
    { descripcion: "Teclado" , precio: 5000   },
    { descripcion: "Monitor" , precio: 150000 },
    { descripcion: "CPU"     , precio: 350000 },
    { descripcion: "Pendrive", precio: 8000   }
  ];
  
  // 1 - Mostrar productos
  function mostrarProductos(array = productos) {
    const contenedor = document.getElementById("productos-lista");
    contenedor.innerHTML = " ";
    if (array.length === 0) {
      contenedor.innerHTML += "<p>No hay productos para mostrar.</p>";
    } else {
      array.forEach(p => {
        contenedor.innerHTML += `<p>Producto: ${p.descripcion} - Precio: $${p.precio.toFixed(2)}</p>`;
      });
    }
  }
  
  mostrarProductos();

  const boton1 = document.getElementById('Agregar' ); 
  const boton2 = document.getElementById('Filtrar' ); 
  const boton3 = document.getElementById('Iva'     ); 
  const boton4 = document.getElementById('Ordenar' ); 
  const boton5 = document.getElementById('Eliminar'); 
  
  boton1.addEventListener('click', agregarProducto  ); 
  boton2.addEventListener('click', filtrarProductos ); 
  boton3.addEventListener('click', agregarIVA       ); 
  boton4.addEventListener('click', ordenarProductos ); 
  boton5.addEventListener('click', eliminarMasBarato); 


  // 2 - Filtrar productos con precio > $10.000
  function filtrarProductos() {
    const filtrados = productos.filter(p => p.precio > 10000);
    mostrarProductos(filtrados);
  }
  
  // 3 - Mostrar productos con precio con IVA (21%)
  function agregarIVA() {
    const conIVA = productos.map(p => ({
      descripcion: p.descripcion,
      precio: p.precio * 1.21
    }));
    mostrarProductos(conIVA);
  }
  
  // 4 - Ordenar por precio ascendente
  function ordenarProductos() {
    productos.sort((a, b) => a.precio - b.precio);
    mostrarProductos();
  }
  
  // 5 - Agregar producto desde inputs
  function agregarProducto() {
    const descripcionInput = document.getElementById("descripcion");
    const precioInput = document.getElementById("precio");
  
    const descripcion = descripcionInput.value.trim();
    const precio = parseFloat(precioInput.value);
  
    if (!descripcion || isNaN(precio) || precio < 0) {
      alert("Por favor, ingrese una descripción válida y un precio mayor o igual a 0.");
      return;
    }
  
    productos.push({ descripcion, precio });
  
    descripcionInput.value = "";
    precioInput.value = "";
  
    mostrarProductos();
  }
  
  // 6 - Eliminar el producto con el precio más bajo
  function eliminarMasBarato() {
    if (productos.length === 0) return;
  
    const precioMin = Math.min(...productos.map(p => p.precio));
    const indexMin = productos.findIndex(p => p.precio === precioMin);
  
    if (indexMin !== -1) {
      productos.splice(indexMin, 1);
      mostrarProductos();
    }
  }