import Student from "../students/student";
import studentsInfo from "../students/student-info";

/*Las propiedades son un mecanismo para pasar datos de un componente padre
a un componente hijo.

Las props son unidireccionales
Destructuración: Obtener las llaves de un objeto para hacer las asignaciones menos
complejas.
*/

export default function Generation() {
  return (
    <>
      <h2>Generation</h2>
      <p>
        En <em>Generation</em> aprendí con pasión, Java Dev Jr. fue mi canción.
        Bootcamp brillante, conocimientos al alza,
        <strong>Generation MX</strong>, ¡mi ruta en casa!
      </p>
      <h4>Participantes</h4>
      {studentsInfo.map(studentInfo=> <Student info={studentsInfo}/>)}
      
    </>
  );
}
