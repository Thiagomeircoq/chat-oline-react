import Message from './messageschat/Message';

const MessagesChat = ({ selectedContact }) => {
  return (
    <div className="p-5 flex flex-col gap-10">
      <Message
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit..."
        img={selectedContact.img}
        color='bg-gray-800'
        direction='justify-start'
      />

      <Message 
        text="Outro exemplo de mensagem..." 
        color='bg-violet-900'
        direction='justify-end'
        />

    </div>
  );
};

export default MessagesChat;
