// Aqui declaramos que vamos a usar los hooks useState y useEffect
import React, { useState, useEffect } from 'react';

// Aqui declaramos la variable y la exportamos para poder utilizarla en un elemento padre
export default function PruebaHook() {
    // Declaramos las variables contador y setContador con destructurin e inicializamos el contador con 0 usando useState
    const [contador, setContador] = useState(0); 
    // Declaramos las variables activo y setActivo y el estado para controlar si el contador está activo, poniendo true se inicializa nada mas abrir la aplicacion, luego lo detendremos con un boton
    const [activo, setActivo] = useState(true);  

    // Usamos useEffect para decirle a React que haga algo después de que el componente se haya mostrado en la pantalla
    useEffect(() => {
        // Definimos la variable intervalo como null para asegurarnos que la variable esta definida antes de utilizarla, si la declararamos sin valor podria darnos errores. La definimos con un null y no con un 0 o false porque no queremos que tenga ningun valor antes de modificarlo
        let intervalo = null;
        // Aqui indicamos que si existe un estado llamado activo realice una accion
        if (activo) {
            // Aqui le otorgamos a intervalo el valor del la funcion nativa setInterval que lo que hace es que cada 1000 milisegundos, es decir, cada 1 segundo incrementa el contador en 1
            intervalo = setInterval(() => {
                setContador(contador => contador + 1);
            }, 1000);
        // Aqui hacemos que si no es activo, es decir, si activo no es true (como cuando le damos al boton de deterner que pasa a ser false) o el contador no es 0 utilizamos la funcion nativa clearInterval la cual detiene una acción repetitiva programada con setInterval
        } else if (!activo && contador !== 0) {
            clearInterval(intervalo);
        }
        // Aqui le decimos que nos de el valor del intervalo llamando a la funcion anonima que hemos declarado despues de setInterval
        return () => clearInterval(intervalo);
        // Con esta declaracion hacemos que useEffect se ejecute ya que solo ejecuta el efecto si activo o contador cambian y de lo contrario no cambiarian, le dice a React: "Vuelve a ejecutar el código dentro de useEffect solo si activo o contador cambian."
    }, [activo, contador]); 

    // Esta es una funcion que sirve para activar lo desactivar el contador, la llamamos en el onclick del boton
    const manejarClick = () => {
        setActivo(!activo); // Alterna entre activar y desactivar el contador
    };

    // En el h1 muestra el valor del contador. Y en esta linea de codigo: {activo ? 'Detener' : 'Reanudar'} cambia el mensaje del boton de detener a reanudar segun si esta activo o desactivado
    return (
    <div>
        <h1>Contador: {contador}</h1> 
        <button onClick={manejarClick}>
            {activo ? 'Detener' : 'Reanudar'}
        </button>
    </div>
    );
}