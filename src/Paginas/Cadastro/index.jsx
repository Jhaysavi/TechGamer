import { useEffect, useState } from "react";
import styles from './Cadastro.module.css';
import CardLista from "../../Componentes/CardLista";
import Footer from "../../Componentes/Footer";
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from "yup";

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
        cor: yup
            .string()
            .required("Cores is required"),
    });

    return (
        <>

            <header className={styles.containerCabecalho}>
                <img src="/logo.png" alt="Logo" className={styles.logo} />
                <h1 className={styles.cadastro}>Sistema de Cadastro</h1>
            </header>

            <Formik 
                initialValues={{ nome: "", preco: "", descricao: "", estoque: "", imagem:"" , cor:""}}
                validationSchema={validationSchema}
            >
            <section className={styles.container}>
                <h1 className={styles.titulo}>Cadastro de produtos</h1>
                <form action="/" method='POST' onSubmit={lidarSubmit}>
                    <fieldset className={styles.formGroup}>
                        <label className={styles.label} htmlFor="nome">Nome:</label>
                        <Field
                            className={styles.input}
                            type="text"
                            name="nome"
                            id="nome"
                            value={produto.nome}
                            onChange={alteracao}
                        />
                        <ErrorMessage component="p" name="nome" />
                    </fieldset>

                    <fieldset className={styles.formGroup}>
                        <label className={styles.label} htmlFor="preco">Preço:</label>
                        <Field
                            className={styles.input}
                            type="number"
                            name="preco"
                            id="preco"
                            value={produto.preco}
                            onChange={alteracao}
                            required
                        />
                        <ErrorMessage component="p" name="preco" />
                    </fieldset>

                    <fieldset className={styles.formGroup}>
                        <label className={styles.label} htmlFor="descricao">Descrição:</label>
                        <Field
                            as="textarea"
                            className={styles.descricao}
                            name="descricao"
                            id="descricao"
                            value={produto.descricao}
                            onChange={alteracao}
                            cols="30"
                            rows="10"
                            required
                        />
                        <ErrorMessage component="p" name="descricao" />
                    </fieldset>

                    <fieldset className={styles.formGroup}>
                        <label className={styles.label} htmlFor="estoque">Estoque:</label>
                        <Field
                            className={styles.input}
                            type="number"
                            name="estoque"
                            id="estoque"
                            value={produto.estoque}
                            onChange={alteracao}
                            required
                        />
                        <ErrorMessage component="p" name="estoque" />
                    </fieldset>

                    <fieldset className={styles.formGroup}>
                        <label className={styles.label} htmlFor="imagem">Imagem</label>
                        <Field
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
                        <Field
                            className={styles.input}
                            type="text"
                            name="cor"
                            id="cor"
                            value={produto.cor}
                            onChange={alteracao}
                        />
                        <ErrorMessage component="p" name="cor" />
                    </fieldset>

                    <button type="submit" className={styles.botao}>Cadastrar produtos</button>
                </form>
            </section>
            </Formik>
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