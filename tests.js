const person = {
    nombre: 'juanito',
    saludo: function() {
        console.log("Hola " + this.nombre);
    }
};

person.saludo();