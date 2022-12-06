// PRODUCTOS
const productos = [
    // Abrigos
    {
        id: "procesador-01",
        titulo: "procesador 01",
        imagen: "./img/procesadores/01.jpg",
        categoria: {
            nombre: "procesador",
            id: "procesador"
        },
        precio: 7000
    },
    {
        id: "procesador-02",
        titulo: "procesador 02",
        imagen: "./img/procesadores/02.jpg",
        categoria: {
            nombre: "procesador",
            id: "procesador"
        },
        precio: 4000
    },
    {
        id: "procesador 03",
        titulo: "procesador",
        imagen: "./img/procesadores/03.jpg",
        categoria: {
            nombre: "procesador",
            id: "procesador"
        },
        precio: 8000
    },
    {
        id: "procesador 04",
        titulo: "procesador 04",
        imagen: "./img/procesadores/04.jpg",
        categoria: {
            nombre: "procesador",
            id: "procesador"
        },
        precio: 10000
    },
    {
        id: "procesador 05",
        titulo: "procesador 05",
        imagen: "./img/procesadores/05.jpg",
        categoria: {
            nombre: "procesador",
            id: "procesador"
        },
        precio: 5000
    },
    // Camisetas
    {
        id: "laptop-01",
        titulo: "laptop 01",
        imagen: "./img/laptops/01.jpg",
        categoria: {
            nombre: "laptop",
            id: "laptop"
        },
        precio: 14000
    },
    {
        id: "laptop-02",
        titulo: "laptop 02",
        imagen: "./img/laptops/02.jpg",
        categoria: {
            nombre: "laptop	",
            id: "laptop"
        },
        precio: 20000
    },
    {
        id: "laptop-03",
        titulo: "laptop 03",
        imagen: "./img/laptops/03.jpg",
        categoria: {
            nombre: "laptop",
            id: "laptop"
        },
        precio: 23000
    },
    {
        id: "laptop-04",
        titulo: "laptop 04",
        imagen: "./img/laptops/04.jpg",
        categoria: {
            nombre: "laptop",
            id: "laptop"
        },
        precio: 35000
    },
    {
        id: "laptop-05",
        titulo: "laptop 05",
        imagen: "./img/laptops/05.jpg",
        categoria: {
            nombre: "laptops",
            id: "laptop"
        },
        precio: 6890
    },
    {
        id: "videojuego-06",
        titulo: "videojuego 06",
        imagen: "./img/videojuegos/01.jpg",
        categoria: {
            nombre: "videojuego",
            id: "videojuego"
        },
        precio: 7000
    },
    {
        id: "videojuego-07",
        titulo: "videojuego 07",
        imagen: "./img/videojuegos/02.jpg",
        categoria: {
            nombre: "videojuego",
            id: "videojuego"
        },
        precio: 8000
    },
  
    // Pantalones
    {
        id: "videojuego-01",
        titulo: "videojuego 01",
        imagen: "./img/videojuegos/03.jpg",
        categoria: {
            nombre: "videojuego",
            id: "videojuego"
        },
        precio: 1000
    },
    {
        id: "videojuego-02",
        titulo: "videojuego 02",
        imagen: "./img/videojuegos/04.jpg",
        categoria: {
            nombre: "videojuego",
            id: "videojuego"
        },
        precio: 6500
    },
    {
        id: "videojuego-03",
        titulo: "videojuego 03",
        imagen: "./img/videojuegos/05.jpg",
        categoria: {
            nombre: "videojuego",
            id: "videojuego"
        },
        precio: 1000
    },
    {
        id: "videojuego-04",
        titulo: "videojuego 04",
        imagen: "./img/videojuegos/06.jpg",
        categoria: {
            nombre: "videojuego",
            id: "videojuego"
        },
        precio: 1000
    },
    {
        id: "videojuego-05",
        titulo: "videojuego 05",
        imagen: "./img/videojuegos/07.jpg",
        categoria: {
            nombre: "videojuego",
            id: "videojuego"
        },
        precio: 1000
    },

     /**Electronica**/
     {
        id: "electronica-01",
        titulo: "electronica 01",
        imagen: "./img/electronica/01.jpg",
        categoria: {
            nombre: "Electronica",
            id: "electronica"
        },
        precio: 2500
    },
    {
        id: "electronica-02",
        titulo: "electronica 02",
        imagen: "./img/electronica/02.jpg",
        categoria: {
            nombre: "Electronica",
            id: "electronica"
        },
        precio: 500
    },
    {
        id: "electronica-03",
        titulo: "electronica 03",
        imagen: "./img/electronica/03.jpg",
        categoria: {
            nombre: "Electronica",
            id: "electronica"
        },
        precio: 870
    },
    {
        id: "electronica-04",
        titulo: "electronica 04",
        imagen: "./img/electronica/04.jpg",
        categoria: {
            nombre: "Electronica",
            id: "electronica"
        },
        precio: 500
    },
    {
        id: "electronica-05",
        titulo: "electronica 05",
        imagen: "./img/electronica/05.jpg",
        categoria: {
            nombre: "Electronica",
            id: "electronica"
        },
        precio: 250
    },
    {
        id: "electronica-06",
        titulo: "electronica 06",
        imagen: "./img/electronica/06.jpg",
        categoria: {
            nombre: "Electronica",
            id: "electronica"
        },
        precio: 90
    }

];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal=document.querySelector("#titulo-principal");
let botonesAgregar =document.querySelectorAll(".producto-agregar");
const numerito=document.querySelector("#numerito");


function cargarProductos(productosElegidos){

    contenedorProductos.innerHTML="";

    productosElegidos.forEach(producto =>{

            const div=document.createElement("div");
        div.classList.add("producto");
        div.innerHTML=`
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="producto-detalles">
            <h3 class="producto-titulo">${producto.titulo} </h3>
            <p class="producto-precio">$${producto.precio}</p>
            <button class="producto-agregar" id="${producto.id}">Agregar</button>
        </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);


botonesCategorias.forEach(boton =>{
    boton.addEventListener("click",(e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));

        e.currentTarget.classList.add("active");
            if(e.currentTarget.id !="todos"){
                const productoCategoria=productos.find(producto => producto.categoria.id === e.currentTarget.id );

                tituloPrincipal.innerText=productoCategoria.categoria.nombre;

                    const productosBoton =productos.filter(producto => producto.categoria.id == e.currentTarget.id);
                            cargarProductos(productosBoton);

            }else{
                tituloPrincipal.innerText="Todos los productos";
                    cargarProductos(productos);
            }
       


    })
})


function actualizarBotonesAgregar(){
    botonesAgregar=document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click",agregarAlCarrito);
    });

}

const productosEnCarrito=[];


function agregarAlCarrito(e){
    const idBoton=e.currentTarget.id;
    const productosAgregado=productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)){
            const index=productosEnCarrito.findIndex(producto => producto.id === idBoton);
            productosEnCarrito[index].cantidad++;
    }else{
            productosAgregado.cantidad=1;
            productosEnCarrito.push(productosAgregado);

    }

actualizarNumerito();
localStorage.setItem("productos-en-carrito",JSON.stringify(productosEnCarrito));
}

function actualizarNumerito(){
 let nuevoNumerito=productosEnCarrito.reduce((acc,producto) => acc + producto.cantidad , 0);
 numerito.innerText=nuevoNumerito;
}