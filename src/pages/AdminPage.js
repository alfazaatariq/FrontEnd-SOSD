import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { AdminTicketList } from '../components/AdminTicketList';
import { AdminInvoiceList } from '../components/AdminInvoiceList';

export const AdminPage = () => {
  const [admin, setAdmin] = useState('');
  const [select, setSelect] = useState('');
  const nav = useNavigate();

  useEffect(() => {
    async function fetchUser() {
      const adminData = await JSON.parse(localStorage.getItem('admin'));
      if (!adminData) {
        nav('/admin/login');
      }
      setAdmin(adminData);
    }
    fetchUser();
  }, []);
  return (
    <>
      <ButtonGroup aria-label='Basic example'>
        <Button variant='secondary' onClick={() => setSelect('ticket')}>
          Ticket
        </Button>
        <Button variant='secondary' onClick={() => setSelect('invoice')}>
          Invoice
        </Button>
      </ButtonGroup>
      <Button
        href='/admin/login'
        onClick={() => {
          localStorage.removeItem('admin');
        }}
      >
        LOGOUT
      </Button>
      {select === 'ticket' ? (
        <AdminTicketList />
      ) : select === 'invoice' ? (
        <AdminInvoiceList />
      ) : (
        <div>WELCOME TO ADMIN PAGE</div>
      )}
    </>
  );
};
