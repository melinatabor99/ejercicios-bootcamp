//Creo un objeto literal sin funcion constructora
let curso = {
    cantidadDeAlumnos : 32,
    docentes : ['Nacho','Javier'],
    horario : "de 9 a 18hs.",
    notificaciones : function(){
        return "El horario es" + this.horario;
    }
}

//console.log(curso);
//console.log("La cantidad de alumnos es: " + curso.cantidadDeAlumnos);
//console.log(curso.notificaciones());

//Hago la funcion constructura de curso para que sea el molde de varios cursos

function Curso (cantidadDeAlumnos,docentes,horario) {
    this.cantidadDeAlumnos = cantidadDeAlumnos;
    this.docentes = docentes;
    this.horario = horario;
}

//Creo todos los cursos que quiera

let cursoDeProgramacion = new Curso (40,["Meli","Agus"],"de 17 a 19hs.");
let cursoDeMarketing = new Curso (60,["Nico","Gabi"],"de 14 a 16hs.");
console.log(cursoDeProgramacion);
console.log(cursoDeMarketing);