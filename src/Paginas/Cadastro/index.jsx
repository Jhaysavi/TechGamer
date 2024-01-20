import React, { useEffect, useState } from "react";
import styles from './Cadastro.module.css';
import CardLista from "../../Componentes/CardLista";
import Footer from "../../Componentes/Footer";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from "yup";

function Cadastro() {
    const [produtos, setProdutos] = useState([]);
    const [produtoEmEdicao, setProdutoEmEdicao] = useState(null);


    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/Jhaysavi/techGamer-api/db`)
            .then(resposta => resposta.json())
            .then(dados => {
                setProdutos(dados?.produtos || [])
            })
    }, [])

    const lidarExcluir = (id) => {
        const novosProdutos = produtos.filter(produto => produto.id !== id)
        setProdutos(novosProdutos);
    }

    const adicionarProduto = (novoProduto) => {
        setProdutos([...produtos, novoProduto]);
    }

    const lidarEditar = (id) => {
        const produtoParaEditar = produtos.find(produto => produto.id === id);
        setProdutoEmEdicao(produtoParaEditar);
    };
    
    const esquemaDeValidacao = yup.object({
        nome: yup
            .string()
            .required("Nome é obrigatório"),
        preco: yup
            .string()
            .required("Preço é obrigatório"),
        descricao: yup
            .string()
            .required("Descrição é obrigatória")
            .max(500, "Limite máximo de caracteres"),
        estoque: yup
            .string()
            .required("Estoque é obrigatório"),
        imagem: yup
            .string()
            .required("Imagem é obrigatória"),
        cor: yup
            .string()
            .required("Cores é obrigatório"),
    });

    return (
        <>
            <header className={styles.containerCabecalho}>
                <img src="/logo.png" alt="Logo" className={styles.logo} />
                <h1 className={styles.cadastro}>Sistema de Cadastro</h1>
            </header>

            <section className={styles.container}>
                <h1 className={styles.titulo}>Cadastro de produtos</h1>

                <Formik
                    initialValues={{
                        nome: produtoEmEdicao ? produtoEmEdicao.nome : "",
                        preco: produtoEmEdicao ? produtoEmEdicao.preco : "",
                        descricao: produtoEmEdicao ? produtoEmEdicao.descricao : "",
                        estoque: produtoEmEdicao ? produtoEmEdicao.estoque : "",
                        imagem: produtoEmEdicao ? produtoEmEdicao.imagem : "",
                        cor: produtoEmEdicao ? produtoEmEdicao.cor : "",
                    }}
                    validationSchema={esquemaDeValidacao}
                    onSubmit={(values, { resetForm }) => {
                        if (produtoEmEdicao) {
                            const produtosAtualizados = produtos.map(produto => {
                                if (produto.id === produtoEmEdicao.id) {
                                    return { ...produtoEmEdicao, ...values };
                                }
                                return produto;
                            });
                            setProdutos(produtosAtualizados);
                            setProdutoEmEdicao(null);
                        } else {
                            adicionarProduto({ ...values, id: Date.now() });
                        }
                        resetForm();
                    }}
                >
                    <Form>
                        <fieldset className={styles.formGroup}>
                            <label className={styles.label} htmlFor="nome">Nome:</label>
                            <Field
                                className={styles.input}
                                type="text"
                                name="nome"
                                id="nome"
                            />
                            <ErrorMessage component="p" name="nome" className={styles.erro} />
                        </fieldset>

                        <fieldset className={styles.formGroup}>
                            <label className={styles.label} htmlFor="preco">Preço:</label>
                            <Field
                                className={styles.input}
                                type="text"
                                name="preco"
                                id="preco"
                            />
                            <ErrorMessage component="p" name="preco" className={styles.erro} />
                        </fieldset>

                        <fieldset className={styles.formGroup}>
                            <label className={styles.label} htmlFor="descricao">Descrição:</label>
                            <Field
                                as="textarea"
                                className={styles.descricao}
                                name="descricao"
                                id="descricao"
                            />
                            <ErrorMessage component="p" name="descricao" className={styles.erro} />
                        </fieldset>

                        <fieldset className={styles.formGroup}>
                            <label className={styles.label} htmlFor="estoque">Estoque:</label>
                            <Field
                                className={styles.input}
                                type="number"
                                name="estoque"
                                id="estoque"
                            />
                            <ErrorMessage component="p" name="estoque" className={styles.erro} />
                        </fieldset>

                        <fieldset className={styles.formGroup}>
                            <label className={styles.label} htmlFor="imagem">Imagem:</label>
                            <Field
                                className={styles.input}
                                type="text"
                                name="imagem"
                                id="imagem"
                            />
                            <ErrorMessage component="p" name="imagem" className={styles.erro} />
                        </fieldset>

                        <fieldset className={styles.formGroup}>
                            <label className={styles.label} htmlFor="cor">Cores:</label>
                            <Field
                                className={styles.input}
                                type="text"
                                name="cor"
                                id="cor"
                            />
                            <ErrorMessage component="p" name="cor" className={styles.erro} />
                        </fieldset>

                        <button type="submit" className={styles.botao}>
                            {produtoEmEdicao ? "Editar Produto" : "Cadastrar Produto"}
                        </button>
                    </Form>
                </Formik>

                <h2 className={styles.titulo}>Produtos cadastrados</h2>

                <div className={styles.cardsContainer}>
                    {produtos.map((produto) => (
                        <CardLista
                            {...produto}
                            key={produto.id}
                            onExcluir={() => lidarExcluir(produto.id)}
                            onEditar={() => lidarEditar(produto.id)}
                        />
                    ))}
                </div>
            </section>

            <Footer />
        </>
    );
}

export default Cadastro;

