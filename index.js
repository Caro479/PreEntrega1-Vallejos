
let cantidad = prompt("¿Cúantos alumnos son?");
let alumnosTotales = [];

for(i = 0; i < cantidad; i++) {
    alumnosTotales[i] =[prompt("Nombre del alumno/a " + (i+1)), 0];
}

const tomarAsistencia = (nombre,p)=>{
    let presencia  = prompt(nombre+"\nColoque P: Presente A: Ausente");
    if (presencia == "p" || presencia == "P" ) {
        alumnosTotales[p][1]++;
    }
}

for (i = 0; i < 30; i++) { 
    for (alumno in alumnosTotales) {
        tomarAsistencia(alumnosTotales[alumno][0],alumno);
    }
}

for (alumno in alumnosTotales) {
    let resultado = `${alumnosTotales[alumno][0]}:<br>
    _________Presentes: <b>${alumnosTotales[alumno][1]}</b> <br>
    _________Ausencias: <b>${30 - parseInt(alumnosTotales[alumno][1])}</b>
    `;

    if  (30 - alumnosTotales[alumno][1] > 18) {
        resultado+= "<b style='color:red'>Reprobado por inasistencia</b><br><br>";
    } else {
      resultado+= "<br><br>"
    } document.write(resultado)
    }


