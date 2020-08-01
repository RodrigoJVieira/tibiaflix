import React, { useEffect, useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link, useHistory } from 'react-router-dom';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
    const history = useHistory();
    const [categorias, setCategorias] = useState([]);
    const categoryTitles = categorias.map(({ titulo }) => titulo)
    const { handleCategoria, values } = useForm({
        titulo: 'Título do vídeo',
        url: 'https://www.youtube.com/watch?v=ABXEs47qToU',
        categoria: 'Tecnologia',
    });

    useEffect(() => {
        categoriasRepository
            .getAll()
            .then((categoriasFromServer) => {
                setCategorias(categoriasFromServer);
            });
    }, []);

    return (
        <PageDefault>
            <h1>Cadastro de Video</h1>

                <form onSubmit={(event) => {
                    event.preventDefault();
                    alert('Vídeo Cadastrado com Sucesso!');

                    const categoriaEscolhida = categorias.find((categoria) => {
                        return categoria.titulo === values.categoria;
                    });

                    videosRepository.create({
                        titulo: values.titulo,
                        url: values.url,
                        categoriaId: categoriaEscolhida.id,
                    })
                        .then(() => {
                            console.log('Cadastrado com sucesso!');
                            history.push('/');
                        });
                }}
                >               
                    <FormField
                        label="Título do Vídeo"
                        type="text"
                        name="titulo"
                        value={values.titulo}
                        onChange={handleCategoria}
                    />

                    <FormField
                        label="URL"
                        type="text"
                        name="url"
                        value={values.url}
                        onChange={handleCategoria}
                    />
                    <FormField
                        label="Categoria"
                        type="text"
                        name="categoria"
                        value={values.categoria}
                        onChange={handleCategoria}
                        suggestions={categoryTitles}
                    />

                    <Button type="submit">
                        Cadastrar
                    </Button>
                </form>

            <Link to= "/cadastro/categoria">
                Cadastrar Categoria 
            </Link>
        </PageDefault>
    );
}

export default CadastroVideo;