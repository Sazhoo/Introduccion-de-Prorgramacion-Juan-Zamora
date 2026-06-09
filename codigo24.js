function agregarJuego(nombre, consola, categoria, precio, stock) {

    let videojuegos = JSON.parse(localStorage.getItem("videojuegos")) || [];

    const nuevoJuego = {
        id: Date.now(),
        nombre: nombre,
        consola: consola,
        categoria: categoria,
        precio: Number(precio),
        stock: Number(stock),
        estado: "Disponible"
    };

    videojuegos.push(nuevoJuego);

    localStorage.setItem("videojuegos", JSON.stringify(videojuegos));

    alert("🎮 Videojuego agregado con éxito");

    return nuevoJuego;
}

function registrarUsuario(nombre, correo, contraseña) {

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const nuevoUsuario = {
        id: Date.now(),
        nombre,
        correo,
        contraseña,
        fechaRegistro: new Date().toISOString()
    };

    usuarios.push(nuevoUsuario);

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("✅ Usuario registrado con éxito");

    return nuevoUsuario;
}

// REGISTRO DE USUARIOS
document.getElementById("registro").addEventListener("submit", function(e) {

    e.preventDefault();

    registrarUsuario(
        document.getElementById("nombre").value,
        document.getElementById("correo").value,
        document.getElementById("contraseña").value
    );

    this.reset();
});

// REGISTRO DE VIDEOJUEGOS
document.getElementById("agregarJuego").addEventListener("submit", function(e){

    e.preventDefault();

    agregarJuego(
        document.getElementById("nombreJuego").value,
        document.getElementById("consolaJuego").value,
        document.getElementById("categoriaJuego").value,
        document.getElementById("precioJuego").value,
        document.getElementById("stockJuego").value
    );

    this.reset();
});

// IMPEDIR NÚMEROS EN CAMPOS DE TEXTO
const camposTexto = [
    "nombre",
    "nombreJuego",
    "consolaJuego",
    "categoriaJuego"
];

camposTexto.forEach(id => {

    const campo = document.getElementById(id);

    if(campo){

        campo.addEventListener("input", function(){

            this.value = this.value.replace(/[0-9]/g, "");

        });

    }

});

// IMPEDIR LETRAS EN CAMPOS NUMÉRICOS
const camposNumericos = [
    "precioJuego",
    "stockJuego"
];

camposNumericos.forEach(id => {

    const campo = document.getElementById(id);

    if(campo){

        campo.addEventListener("input", function(){

            this.value = this.value.replace(/[^0-9]/g, "");

        });

    }

});
function crearPedido(idUsuario, total){

    let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];

    const pedido = {
        id: Date.now(),
        idUsuario,
        total,
        fecha: new Date().toLocaleDateString(),
        estado: "Pendiente"
    };

    pedidos.push(pedido);

    localStorage.setItem("pedidos", JSON.stringify(pedidos));

    alert("📦 Pedido creado con éxito");
}

function agregarDetallePedido(
    idPedido,
    idJuego,
    cantidad,
    precioUnitario
){

    let detalles =
        JSON.parse(localStorage.getItem("detallePedidos")) || [];

    detalles.push({
        id: Date.now(),
        idPedido,
        idJuego,
        cantidad,
        precioUnitario
    });

    localStorage.setItem(
        "detallePedidos",
        JSON.stringify(detalles)
    );

    alert("📝 Detalle agregado con éxito");
}

function registrarPago(
    idPedido,
    metodoPago,
    valor
){

    let pagos =
        JSON.parse(localStorage.getItem("pagos")) || [];

    pagos.push({
        id: Date.now(),
        idPedido,
        metodoPago,
        valor,
        fecha: new Date().toLocaleDateString()
    });

    localStorage.setItem(
        "pagos",
        JSON.stringify(pagos)
    );

    alert("💳 Pago registrado con éxito");
}
