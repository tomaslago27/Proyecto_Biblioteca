class Libro {
    constructor(titulo, autor, genero, año, disponible) {           // creamos la clase "Libro", la cual nos permitirá crear objetos que tendran las siguientes propiedades :  
        this.titulo = titulo                                        //titulo: titulo del libro, 
        this.autor = autor                                          //autor: nombre del autor
        this.genero = genero                                        // genero: genero literario del libro
        this.año = año                                              //año: año del libro
        this.disponible = disponible                                // disponible: Booleano que indica si el libro está disponible para prestar
    }                                                               // Para ello utilizamos un constructor, el cual recibe como paramentros:  titulo, autor, genero, año, disponibilidad del libro.
 
    prestar() {                             //  Método para prestar el libro.
        if (this.disponible === true) { //verifica si está disponible 
            alert("esta disponible");
            this.disponible = false   // lo marca como no disponible si se presta pasando su valor a "false"
            return true             //se devuelve un "true", esto nos sirve para operar fuera. Indica que se presto exitosamente.
        }
        else {
            alert("no rompa las bolas"); //En caso de que no este disponible, muestra este mensaje.
        }
    }
    devolver() {                        //Metodo para devolver el libro, funciona de manera similar al metodo "prestar"
        if (this.disponible === false) {    //verifica si no está disponible, ya que no tendria sentido que se devuelva un libro que si se encuentre en disposición.  
            alert("libro devuelto de manera correcta");
            this.disponible = true          // Marca el libro como disponible nuevamente cambiando su valor a "true".
        }
        else {
            alert("libro disponible pibe"); // Si ya se encuentra disponible, muestra este mensaje.
        }
    }
}
class Miembro {                  // creamos la clase "Miembro", la cual nos permitirá crear objetos que tendran las siguientes propiedades :
    constructor(nombre, id) {
        this.librosPrestados = []  //librosPrestados: aqui se inicializa un array vacio para poder guardar los libros que le son prestados al miembro en cuestión.
        this.id = id               //id: es la id del miembro 
        this.nombre = nombre       //nombre: nombre del miembro 
    }                              // Para ello utilizamos un constructor, el cual recibe como paramentros: nombre y la id del miembro.

    tomarPrestado(libro) {           //  Método para tomar prestado un libro por un miembro. Aqui se pide como paramentro que se le pase un libro.
        if (libro.prestar() === true) { //Se evalua si el libro está disponible para ser prestado 
            this.librosPrestados.push(libro) //En caso de que si este disponible, se añade el libro al array de los librosPrestados con el metodo push.  
        }
    }
    devolverLibro(libro) { //  Método para devolver un libro por un miembro. Aqui se pide como paramentro que se le pase un libro.
        libro.devolver(); //llama el metodo devolver() del libro para cambiar la propiedad de disponible a true
        let posicionLibro = this.librosPrestados.indexOf(libro); //Aqui lo que hace es asignarle a una variable llamada posicionLibro el resultado de la busqueda de la posicion en la que se encuetra el libro que se quiere devolver, dentro del array librosPrestados. esto lo hace con el metodo indexOf.
        this.librosPrestados.splice(posicionLibro, 1); // Aqui lo que se hace es eliminar el elemento del array que se encuentra en la posicion que le pasamos como parametro. Es decir, eliminamos el libro que se quiere devolver de el array librosPrestados. Lo hacemos con el metodo splice.
    }
    mostrarLibrosPrestados() { //Metodo para mostrar los libros que tiene en su poder el miembro en cuestion.
        let LibrosEnPosicion=[]; // Este es un array vacio que nos servirá para guardar solamente los titulos de los libros que tiene el miembro, para luego mostrarlos ordenadamente. 
        if(this.librosPrestados.length===0) //Aqui lo que hace es comparar el tamaño del array, si es igual a 0 (cero), quiere decir que el array esta vacio, por lo que el miembro no tiene libros en su poder.
        {
            alert(`El miembro ${this.nombre} no tiene momentaneamente en su poder ningún libro.`); //En caso de no tener libros, muestra este mensaje.   
        }
        else //en caso de que si tenga libros en su poder, hace lo siguiente.
        {
            for (let consultaLibros of this.librosPrestados) { //Con el for recorremos los libros prestados.
                if (consultaLibros.disponible === false) {
                  LibrosEnPosicion.push(consultaLibros.titulo); //Aqui con el metodo push, agregamos en el array LibrosEnPosicion los titulos de los libros que le fueron prestados al miembro.
               
                }
            }
            alert(`El miembro ${this.nombre} tiene momentaneamente en su poder los siguientes libros:\n ${LibrosEnPosicion.join("\n")}`); //aqui se muestran los titulos de los libros separandolos por un salto de linea, se utiliza el metodo join.
        }
        
    }
}
class Biblioteca {        // creamos la clase "Biblioteca", la cual nos permitirá crear objetos que tendran las siguientes propiedades :
    constructor(nombre) {
        this.nombre = nombre //nombre: es el nombre de la biblioteca.
        this.libros = []  // libros: aqui se inicializa un array vacio en donde vamos a guardar los libros de la biblioteca
        this.miembros = [] // miembros: aqui se inicializa un array vacio en donde vamos a guardar los miembros de la biblioteca
    }                       // // Para ello utilizamos un constructor, el cual recibe como paramentros: nombre.
   
    agregarLibro(libro) { //Metodo para agregar libros a la biblioteca, se pide como parametro un libro

        this.libros.push(libro) // Aqui con el metodo push, añadimos el libro en cuestion al array libros

    }
    registrarMiembro(miembro) {     //Metodo para registrar un nuevo miembro a la biblioteca, se pide como parametro un miembro

        this.miembros.push(miembro) // Aqui con el metodo push, añadimos el miembro en cuestion al array miembros.
    }
    mostrarLibrosDisponibles() {  // Método para mostrar los libros disponibles en la biblioteca
        let librosDisponibles=[]; // Este es un array vacio que nos servirá para guardar solamente los titulos de los libros que esten disponibles para ser prestados.
        for (let consultaLibros of this.libros) { //Este for nos sirve para recorrer el array libros de la biblioteca 
            if (consultaLibros.disponible === true) { //En el caso de que la propiedad "disponible" del libro este con el valor "true" 
              librosDisponibles.push(consultaLibros.titulo); //Añade el titulo del libro en el array librosDisponibles, con el metodo push
            }
        }
        if(librosDisponibles.length === 0) //Si la longitud de array librosDisponibles es igual a 0(cero)
        {
            alert("No hay libros disponibles en este momento."); //muestra este mensaje.
        }
        else{ //si no es 0 (cero)
            alert(`Los libros disponibles son:\n ${librosDisponibles.join("\n")}`); //Se muestran los titulos de los libros disponibles separandolos por un salto de linea, se utiliza el metodo join.
        }
    }
}

let biblioteca = new Biblioteca("Alejandria") //se crea el objeto "biblioteca" llamada "Pepe" con la clase Biblioteca.
let libro2 = new Libro("Habitos Atomicos", "ernan", "autoayuda", 2000, true) //se crea un objeto "libro2" con la clase Libro.
let libro3 = new Libro("La Divina Comedia", "tobias", "drama", 1, true) //se crea un objeto "libro3" con la clase Libro.
let libro4 = new Libro("Principito", "Antoine de Saint-Exupéry", " Literatura infantil", 1943, true) //se crea un objeto "libro4" con la clase Libro.
let miembro2 = new Miembro("tomas", 1); //se crea un objeto "miembro2" con la clase Miembro.
let miembro3 = new Miembro("Agustin", 2); //se crea un objeto "miembro3" con la clase Miembro.
variable = 0;
biblioteca.agregarLibro(libro2); // Añade el libro2 a la biblioteca
biblioteca.agregarLibro(libro3); // Añade el libro3 a la biblioteca
biblioteca.agregarLibro(libro4); // Añade el libro4 a la biblioteca
biblioteca.registrarMiembro(miembro2);// Se registra el miembro2 a la biblioteca
biblioteca.registrarMiembro(miembro3);// Se registra el miembro3 a la biblioteca
//(4) LA OPERACION DE PRESTAMO LA PUEDE PROBAR INTERACTUANDO CON EL MENÚ.
//(5) ESTA IMPLEMTENTADO EN LAS OPCIONES DEL MENÚ. 
// Menú interactivo para realizar acciones en la biblioteca
var suma = 0; // Variable que se usará para incrementar el ID de los miembros
let continuar = true; //es una variable que contiene como valor un buleano, que nos será util para salir del bucle do-while 
do { //ciclo para mostrar el menú interactivo
    // Aqui en la variable "variable"  se guarda la opcion que elija el usuario para interactuar con el menú y esto lo hace utilizando prompt para recibir el valor ingresado y parseInt para tranformarlo a un valor de tipo number 
    let variable = parseInt(prompt(`Biblioteca-Pepe:  
        1. Ver los libros disponibles
        2. Ingresar un libro nuevo
        3. Ingresar un miembro nuevo
        4. Prestar un libro
        5. Devolver un libro
        6. Ver libros prestados por un miembro
        7. Salir`));
    switch (variable) {  //Evaluación de la opción seleccionada
        case 1:
            
            biblioteca.mostrarLibrosDisponibles(); // Muestra los libros disponibles invocando el metodo mostrarLibrosDisponibles del objeto biblioteca.
            break;
        case 2:
            var libro1 = new Libro(); //Se crea un nuevo libro con la clase Libro. Pero esta vacio.
            libro1.titulo = prompt("Titulo del libro:"); // se le pide al usuario que ingrese el valor de la propiedad: titulo
            libro1.autor = prompt("Nombre del autor libro:"); // se le pide al usuario que ingrese el valor de la propiedad: autor
            libro1.genero = prompt("Genero del libro:");// se le pide al usuario que ingrese el valor de la propiedad: Genero
            libro1.año = prompt("Año del libro:");// se le pide al usuario que ingrese el valor de la propiedad: año
            libro1.disponible = true; //se le asigna por default el valor "true" a la propiedad: disponible
            biblioteca.agregarLibro(libro1); // Se agrega el nuevo libro a la biblioteca usando el metodo agregarLibro
            alert("Libro guardado exitosamente"); //Mensaje de aviso de guardado exitoso. 
            break;
        case 3:
            var miembro1 = new Miembro(); //Se crea un nuevo miembro con la clase Miembro. Pero esta vacio.
            miembro1.nombre = prompt("Nombre y apellido del nuevo miembro"); // se le pide al usuario que ingrese el valor de la propiedad: nombre.
            suma = suma + 1 // A la variable suma se le agrega 1.   
            miembro1.id = suma; // se le asigna el valor actual de suma a la id.
            biblioteca.registrarMiembro(miembro1); // Registra al nuevo miembro en la biblioteca
            alert("registrado correctamente"); //mensaje de verificación de registro exitoso.
            break;
        case 4:
            biblioteca.mostrarLibrosDisponibles(); // Muestra los libros disponibles invocando el metodo mostrarLibrosDisponibles del objeto biblioteca.
            nombrePedido = prompt(" nombre del miembro al que se le quiere prestar"); // Aqui se le pide al usuario que ingrese el nombre del miembro al que se le quiere prestar.
            libroPedido = prompt("Libro que se quiere prestar");  // Aqui se le pide al usuario que ingrese el titulo del libro que se quiere prestar.
            let miembroEncontrado = biblioteca.miembros.find(miembro => miembro.nombre === nombrePedido); // se le asigna a la variable miembroEncontrado el resultado de buscar si existe el nombre del miembro que pide un libro en la lista de miembros en la bilbioteca 
            let libroEncontrado = biblioteca.libros.find(libro => libro.titulo === libroPedido && libro.disponible); // se le asigna a la variable libroEncontrado el resultado de la busqueda de existencia del titulo del libro en la lista de libros en la bilbioteca y su propiedad de disponibilidad.

            if (miembroEncontrado && libroEncontrado) { //verifica si miembroEncontrado y libroEncontrado son verdaderos
                miembroEncontrado.tomarPrestado(libroEncontrado);// el miembro toma prestado el libro usando el metodo tomarPrestado
                alert(`El libro "${libroEncontrado.titulo}" ha sido prestado a ${miembroEncontrado.nombre} exitosamente.`); //si se presta de forma exitosa, se muestra este mensaje.
            } else {
                alert("Miembro o libro no encontrado, o el libro no está disponible.");//en caso de que no cumpla con la condición, muestra este mensaje.
            }
            biblioteca.mostrarLibrosDisponibles(); // Muestra los libros disponibles invocando el metodo mostrarLibrosDisponibles del objeto biblioteca.
            break;
        case 5:
            biblioteca.mostrarLibrosDisponibles(); // Muestra los libros disponibles invocando el metodo mostrarLibrosDisponibles del objeto biblioteca.
            let nombreDevolucion = prompt("Nombre del miembro que desea devolver un libro:"); // Aqui se le pide al usuario que ingrese el nombre del miembro que quiere devolver el libro.
            let tituloLibroDevolucion = prompt("Título del libro que se desea devolver:");// Aqui se le pide al usuario que ingrese el titulo del libro que se quiere devolver.

            let miembroEncontradoDevolucion = biblioteca.miembros.find(miembro => miembro.nombre === nombreDevolucion);// se le asigna a la variable miembroEncontradoDevolucion el resultado afirmativo "true" o negativo "false" de la busqueda de existencia del nombre del miembro que quiere devolver un libro en la lista de miembros en la bilbioteca 
            let libroEncontradoDevolucion = biblioteca.libros.find(libro => libro.titulo === tituloLibroDevolucion);// se le asigna a la variable libroEncontradoDevolucion el resultado afirmativo "true" o negativo "false" de la busqueda de existencia del titulo del libro en la lista de libros en la bilbioteca.

            if (miembroEncontradoDevolucion && libroEncontradoDevolucion) { //verifica si miembroEncontradoDevolucion y libroEncontradoDevolucion son verdaderos
                miembroEncontradoDevolucion.devolverLibro(libroEncontradoDevolucion); // En caso de que sean verdadero, devuelve el libro a la biblioteca. Lo hace usando el metodo devolverLibro
                alert(`El libro "${libroEncontradoDevolucion.titulo}" ha sido devuelto por ${miembroEncontradoDevolucion.nombre}.`); //mensaje de verificacion.
            } else {
                alert("Miembro o libro no encontrado.");//En caso de que no cumpla la condición, muestra este otro mensaje.
            }
            biblioteca.mostrarLibrosDisponibles(); // Muestra los libros disponibles invocando el metodo mostrarLibrosDisponibles del objeto biblioteca.
            break;
        case 6:
            let nombreMiembroConsulta = prompt("Ingrese el nombre del miembro para ver los libros prestados:"); // Aqui se le pide al usuario que ingrese el nombre del miembro del cual quiere ver los libros prestados.
            
            let miembroConsulta = biblioteca.miembros.find(miembro => miembro.nombre === nombreMiembroConsulta); // se evalua la existencia del nombre del miembro ingresado en el array de miembros, Puede dar un valor afirmativo "true" o negativo "false"
        
            if (miembroConsulta) { // Se evalua si miembroConsulta es verdadero
                miembroConsulta.mostrarLibrosPrestados(); //En caso de que si lo sea, muestra los libros que tiene dicho miembro usando el metodo mostrarLibrosPrestados
            } else {
                alert("Miembro no encontrado o sin libros prestados."); //En caso de que no lo cumpla, muestra este mensaje.
            }
            break;
        case 7:
            continuar = false; // Opcion para dar cierre al uso del menú, cambia el valor de continuar a false, para que se interrumpa el bucle del do-while  
            break;

    }
} 
while(continuar); // El bucle se repetirá hasta que continuar tome el valor de "false"