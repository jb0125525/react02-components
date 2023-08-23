
const studentName = "Tania";


/*
Los datos pasados como props, los recibimos como un objeto en un parametro
de la función.
*/

const Student = ({info}) => {

  return (
    <div>
        <a href= {info.url} target= "_blank">
        <h4>{info.name}</h4>
        </a>
        <p>
            Ex-alumno:{info.isGraduate ? "Sí":"No"}
        </p>

    </div>
  )
}
 export default Student;