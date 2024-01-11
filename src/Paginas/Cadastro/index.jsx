import { useEffect, useState } from "react";
import styles from './Cadastro.module.css';
import CardLista from "../../Componentes/CardLista";
import Footer from "../../Componentes/Footer";

function Cadastro() {
    const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/Jhaysavi/techGamer-api/db`)
      .then(resposta => resposta.json())
      .then(dados => {
        setProdutos(dados?.produtos || [])
      })
  }, [])
  
    const [produto, setProduto] = useState({
        id: '',
        nome: '',
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
            nome: '',
            preco: '',
            descricao: '',
            estoque: '',
            imagem: '',
            cor: '',
        });
    };

    const validationSchema = yup.object({
        nome: yup
          .string()
          .required("Nome is required"),
        preco: yup
          .string()
          .required("Preço is required"),
        descricao: yup
          .string()
          .required("Descrição is required"),
        estoque: yup
          .string()
          .required("Estoque is required"),
          imagem: yup
          .string()
          .required("Imagem is required"),
          cores: yup
          .string()
          .required("Cores is required"),
      });


    return (
        <>

        <header className={styles.containerCabecalho}>
            <img src="/logo.png" alt="Logo" className={styles.logo}/>
            <h1 className={styles.cadastro}>Sistema de Cadastro</h1>
            

        </header>
            <section className={styles.container}>
                <h1 className={styles.titulo}>Cadastro de produtos</h1>
                <form action="/" method='POST' onSubmit={lidarSubmit}>
                    <fieldset className={styles.formGroup}>
                        <label className={styles.label} htmlFor="nome">Nome:</label>
                        <input   
                            className={styles.input}
                            type="text"
                            name="nome"
                            id="nome"
                            value={produto.nome}
                            onChange={alteracao}
                        />
                    </fieldset>

                    <fieldset className={styles.formGroup}>
                        <label className={styles.label} htmlFor="preco">Preço:</label>
                        <input
                            className={styles.input}
                            type="number"
                            name="preco"
                            id="preco"
                            value={produto.preco}
                            onChange={alteracao}
                            required
                        />
                    </fieldset>

                    <fieldset className={styles.formGroup}>
                        <label className={styles.label} htmlFor="descricao">Descrição:</label>
                        <textarea  
                            className={styles.descricao}
                            name="descricao"
                            id="descricao"
                            value={produto.descricao}
                            onChange={alteracao}
                            cols="30"
                            rows="10"
                            required>
                           
                        </textarea> 
                    </fieldset>

                    <fieldset className={styles.formGroup}>
                        <label className={styles.label} htmlFor="estoque">Estoque:</label>
                        <input
                            className={styles.input}
                            type="number"
                            name="estoque"
                            id="estoque"
                            value={produto.estoque}
                            onChange={alteracao}
                            required
                        />
                    </fieldset>

                    <fieldset className={styles.formGroup}>
                        <label className={styles.label} htmlFor="imagem">Imagem</label>
                        <input
                            className={styles.input}
                            type="file"
                            name="imagem"
                            id="imagem"
                            value={produto.imagem}
                            onChange={alteracao}
                            required
                        />
                    </fieldset>

                    <fieldset className={styles.formGroup}>
                        <label className={styles.label} htmlFor="cor">Cores</label>
                        <input
                            className={styles.input}
                            type="text"
                            name="cor"
                            id="cor"
                            value={produto.cor}
                            onChange={alteracao}
                        />
                    </fieldset>

                    <button type="submit" className={styles.botao}>Cadastrar produtos</button>
                </form>
            </section>

            <section>
                <h2 className={styles.titulo}>Produtos cadastrados</h2>

                <div className={styles.cardsContainer}>
                    {produtos.map((produt) => {
                        return <CardLista {...produt} key={produt.id} />
                    })}
                </div>
            </section>

            < Footer />
        </>
    );
}

export default Cadastro;