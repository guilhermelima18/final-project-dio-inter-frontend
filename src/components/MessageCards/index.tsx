import styles from "./styles.module.scss";

interface MessageProps {
  id: string;
  email: string;
  message: string;
  created_at: string;
}

interface MessageCardsProps {
  messages: MessageProps[];
}

const MessageCards = ({ messages }: MessageCardsProps) => {
  return (
    <>
      {messages.map(({ id, message, email, created_at }) => (
        <div key={id} className={styles.cards}>
          <h1>{email}</h1>
          <p>{message}</p>
          <span>{created_at}</span>
        </div>
      ))}
    </>
  );
};

export default MessageCards;
