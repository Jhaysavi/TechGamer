import { useState } from "react";

function Cadastro() {
    const [produto, setProduto] = useState({
        id: '',
        nome:'',
        preco: '',
        descricao: '',
        estoque: '',
        imagem: '',
        cor: '',
    });

    const alteracao = (e) => {
        const { name, value } = e.target;

        setProduto((produtoAnterior) => ({
            ...produtoAnterior,
            [name]: value,
        }));
    };

    const lidarSubmit = (e) => {
        e.preventDefault();

        console.log('Produtos cadastro:', produto);

        setProduto({
            id: '',
            nome:'',
            preco: '',
            descricao: '',
            estoque: '',
            imagem: '',
            cor: '',
        });
    };

    return (
        <section>
            <h1>Cadastro de produtos</h1>
            <form action="/" onSubmit={lidarSubmit}>
                <fieldset>
                    <label htmlFor="nome">Nome:</label>
                    <input
                        type="text"
                        name="nome"
                        id="nome"
                        value={produto.nome}
                        onChange={alteracao}
                    />
                </fieldset>

                <fieldset>
                    <label htmlFor="preco">Preço:</label>
                    <input
                        type="number"
                        name="preco"
                        id="preco"
                        value={produto.preco}
                        onChange={alteracao}
                        required
                    />
                </fieldset>

                <fieldset>
                    <label htmlFor="descricao">Discrição:</label>
                    <textarea
                        name="descricao"
                        id="descricao"
                        value={produto.descricao}
                        onChange={alteracao}
                        cols="30"
                        rows="10"
                        required
                    >
                    </textarea>
                </fieldset>

                <fieldset>
                    <label htmlFor="estoque">Estoque:</label>
                    <input
                        type="number"
                        name="estoque"
                        id="estoque"
                        value={produto.estoque}
                        onChange={alteracao}
                        required
                    />
                </fieldset>

                <fieldset>
                    <label htmlFor="imagem">Imagem</label>
                    <input
                        type="file"
                        name="imagem"
                        id="imagem"
                        value={produto.imagem}
                        onChange={alteracao}
                        required
                    />
                </fieldset>

                <fieldset>
                    <label htmlFor="cor">Cores</label>
                    <input
                        type="text"
                        name="cor"
                        id="cor"
                        value={produto.cor}
                        onChange={alteracao}
                    />
                </fieldset>

                <button type="submit">Cadastrar produtos</button>
            </form>
        </section>
    );
};

export default Cadastro;