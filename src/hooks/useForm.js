import { useState } from 'react';

function useForm(valoresIniciais) {
    const [values, setValues] = useState(valoresIniciais);
    
    function setValue(chave, valor) {
        setValues ({
            ...values,
            [chave]: valor,
        })
    }

    function handleCategoria(params) {
        setValue(
            params.target.getAttribute('name'), 
            params.target.value,
        ); 
    }

    function clearForm() {
        setValues(valoresIniciais);
    }

    return {
        values,
        handleCategoria,
        clearForm,
    };
}

export default useForm;