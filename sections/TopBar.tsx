interface Props {
  /**
  * @description The description of name.
  */
  name?: string;
}

export default function Section() {
  return <div class="topbar">
    <div class="content">
      <div class="topic">
        <p><b>10% de desconto</b> na primeira compra <br>com o cupom <b>primeiravidamina</b>!</p>
      </div>
      <div class="topic">
        <p><b>Frete grátis</b> acima de R$ 100 <br>para Bahia e Sergipe!</p>
      </div>
      <div class="topic">
        <p>Pagamento via <b>pix</b> ou <br>em <b>até 10x</b> no cartão!</p>
      </div>
      <div class="topic">
        <p><b>Compre e retire</b> <br>na loja!</p>
      </div>
    </div>
  </div>
}