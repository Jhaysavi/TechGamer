import styles from './Footer.module.css';

function Footer() {
   return (
   <>
   <footer className={styles.footer}>
    <section>
    <h1 className={styles.titulo}>TECHGAMER INFOTMÁTICA ELTDA  / CNPJ  20.336.505/0001-39</h1>
    <div className={styles.corpoFooter}>
      <img src="/logo.png" alt="" className={styles.imgContainer} />
        <p>
          Os valores e opções de pagamento especificados são destinados exclusivamente a 
          transações online, podendo apresentar variações nas lojas físicas. 
          As cifras mencionadas neste site ou por meio de comunicações promocionais via e-mail 
          estão sujeitas a alterações sem aviso prévio. A entidade Pichau Informática não assume responsabilidade por eventuais equívocos descritivos. 
          As imagens exibidas nesta página têm caráter puramente ilustrativo do produto e podem variar
          conforme o fornecedor ou lote do fabricante. Ofertas permanecem válidas até a exaustão 
          de nossos estoques. As vendas estão sujeitas a uma análise e confirmação de dados.
      </p>
      </div>
    
     <span className={styles.endereco}>CEP:18136-871  - ENDEREÇO:  Rua Fernão-Pires - NÚRMERO: 509 - BAIRRO: Vinhedos - ESTADO: SP</span>
    </section>
    
     </footer>
   </>
   );
}

export default Footer;
                           