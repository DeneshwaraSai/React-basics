type GreetProps = {
  name: String;
  messageCount?: number;
  isloggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
  console.log(props.messageCount)
  return (
    <div>
      {
        props.isloggedIn ? 
        <h2> Welcome {props.name}, You have {props.messageCount ? props.messageCount : 'no' } unread messages. </h2> :
        <h2> Welcome Guest </h2>
      }
    </div>
  );
};
