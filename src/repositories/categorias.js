import config from '../config';

const URL_CATEGORIES = `${config.URL}/categorias`;

function getAll() {  
    return fetch(`${URL_CATEGORIES}?_embed=videos`)
        .then(async (respostaDoServidor) => {

            if (respostaDoServidor.ok) {
                const resposta = await respostaDoServidor.json();
                return resposta;
            }
        
        });    
}

function getAllWithVideos() {  
    return fetch(`${URL_CATEGORIES}?_embed=videos`)
        .then(async (respostaDoServidor) => {

            if (respostaDoServidor.ok) {
                const resposta = await respostaDoServidor.json();
                return resposta;
            }
        
        });    
}

export default {
    getAllWithVideos,
    getAll,
};