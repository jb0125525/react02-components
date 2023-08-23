

//const pages =["Home", "Users", "AboutUs","Register"]
const pages =[
    {name: "Home", url: "/"},
    {name: "Users", url: "/"},
    {name: "AboutUs", url: "/"},
    {name: "Counter", url: "/"},
    {name: "Register", url: "/"}
]

/*
 Cuando se renderiza una lista de elementos, es importante
 proporcionar una prop "key" única a cada elemento de la lista.
 Esto permite a React realizar una actualización eficiente
 y optimizada de la interfaz de usuario cuando cambia el
 contenido de la lista.

*/

export const Navbar = () => {
  return (
    <>
        <h4>CH30</h4>
        <ul>
            {pages.map(page => <li key={page.name}>{page.name}</li> ) }
        </ul>



    </>
  )
};

export const Footer = () => {
return (
    <>
    <p>
        Derechos no reservados 2023. Lo que está en México es del mexicano.
    </p>
    </>
)

};
