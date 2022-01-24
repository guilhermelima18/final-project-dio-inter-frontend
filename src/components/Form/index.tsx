import ButtonSendMessage from "./ButtonSendMessage";
import Input from "./Input";
import styles from "./styles.module.scss";

const Form = () => {
  return (
    <form className={styles.form}>
      <h1>Entre em contato</h1>
      <Input labelText="Nome" type="text" placeholder="Seu nome" />
      <Input labelText="Mensagem" type="text" placeholder="Sua mensagem" />
      <ButtonSendMessage text="Enviar mensagem" />
    </form>
  );
};

export default Form;
