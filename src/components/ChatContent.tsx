import HeaderChat from './chat/HeaderChat';
import MessagesChat from './chat/MessagesChat';

const ChatContent = ({ selectedContact }) => {
  if (!selectedContact) {
    return <div>Please select a contact to view messages.</div>;
  }

  return (
    <div className='h-full flex flex-col'>
      <HeaderChat selectedContact={selectedContact} />
      <div className='h-full'>
        <div className='h-5/6'>
          <MessagesChat selectedContact={selectedContact} />
        </div>
        <div className=''>TESTE</div>
      </div>
    </div>
  );
};
export default ChatContent