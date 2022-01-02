let cantidad = prompt("¿Cuantos alumnos son?");
let alumnosTotales = [];

for (i = 0; i < cantidad; i++) {
    alumnosTotales[i] = [prompt("Nombre del alumno "), 0];
}
//asistencia 
var tomarAsistencia = (nombre, p) => {
    let presencia = prompt(nombre);
    if (presencia == "p" || presencia == "PP") {
        alumnosTotales[p][1]++;
    }
}
// asistencia para todos los dias px30
for (i = 0; i < 30; i++) {
    for (alumno in alumnosTotales) {
        tomarAsistencia(alumnosTotales[alumno][0], alumno)
    }
}
//resultado por inasistencias 
for (alumno in alumnosTotales) {

    let resultado = `${alumnosTotales[alumno][0]}:<br>
    ________Presentes: ${alumnosTotales[alumno][1]}<br>
    ________Ausencias: ${30 - parseInt(alumnosTotales[alumno][1])}<br>`;
    if (30 - alumnosTotales[alumno][1] > 18) {
        resultado += "  REPROBADO POR INASISTENCIAS <br>"
    } else {
        resultado += "<br> <br>"
    }
    document.write(resultado)
}