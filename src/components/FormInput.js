import React from 'react';

// export default function FormInput() {
//     return (
//         <form>
//             <div>
//                 <label for="">Nombre: </label>
//                 <input tipe="text"></input>
//             </div>
//             <div>
//                 <label for="">Apellidos: </label>
//                 <input tipe="text"></input>
//             </div>
//         </form>
//     );
// }

const FormInput = ({label, type = 'text'}) => {
    return (
        <div className='divInput'>
            <label>{label}</label>
            <input type = {type}/>
        </div>
    );
}
export default FormInput;