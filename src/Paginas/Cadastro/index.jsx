import { useState } from "react";

function Cadastro() {
    const [produto, setProduto] = useState({
        id: '',
        preco: '',
        descricao: '',
        estoque: '',
        imagem: '',
        cores: '',
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
            preco: '',
            descricao: '',
            estoque: '',
            imagem: '',
            cores: '',
        });
    };

    return (
        <section>
            <h1>Cadastro de produtos</h1>
            <form action="/" onSubmit={lidarSubmit}>
                <fieldset>
                    <label htmlFor="preco">Preço:</label>
                    <input
                        type="number"
                        name="preco"
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
                        value={produto.estoque}
                        onChange={lidarSubmit}
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
                        value={produto.estoque}
                        onChange={lidarSubmit}
                        required
                    />
                </fieldset>

                <fieldset>
                    <label htmlFor="imagem">Imagem</label>
                    <input
                        type="file"
                        name="imagem"
                        value={produto.imagem}
                        onChange={lidarSubmit}
                        required
                    />
                </fieldset>

                <fieldset>
                    <label htmlFor="cor">Cores</label>
                    <input
                        type="color"
                        name="cores"
                        value={produto.cores}
                        onChange={lidarSubmit}
                    />
                </fieldset>

                <button type="submit">Cadastrar produtos</button>
            </form>
        </section>
    );
};

export default Cadastro;