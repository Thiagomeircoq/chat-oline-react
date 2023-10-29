import avatarIcon1 from '../images/avatar.svg';
import React, { useState, useEffect } from 'react';

interface ContactListProps {
  onSelectContact: (contact: Contact) => void;
}

const ContactList: React.FC<ContactListProps> = ({ onSelectContact }) => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch('http://localhost:8000/users');
        if (!response.ok) {
          throw new Error('Erro ao buscar contatos');
        }

        const data: Contact[] = await response.json();
        setContacts(data);
      } catch (error) {
        console.error('Erro ao buscar contatos:', error);
      }
    };

    fetchContacts();
  }, []);

  return (
    <ul className='overflow-auto custom-scrollbar'>
      {contacts.map((contact) => (
        <li
          key={contact.id} // Certifique-se de ter um identificador exclusivo, como "id", para cada contato
          className='flex p-3 gap-5 cursor-pointer hover:bg-gray-900'
          onClick={() => onSelectContact(contact)}
        >
          <img className='w-12' src={avatarIcon1} alt={contact.nome} />
          <div className='flex flex-col justify-center'>
            <span className='text-gray-300 text-lg font-bold'>{contact.nome}</span>
            <span className='text-gray-400 text-sm'>{contact.message}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
