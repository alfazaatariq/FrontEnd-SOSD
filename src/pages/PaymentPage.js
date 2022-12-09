import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userAddInvoice, orderTicket } from '../utils/functions';
import { Navbar } from '../components/Navbar';

const PaymentPage = () => {
  const [detailTicket, setDetailTicket] = useState('');
  const nav = useNavigate();
  const [bank, setBank] = useState('');

  useEffect(() => {
    function fetchData() {
      const data = JSON.parse(sessionStorage.getItem('detailTicket'));
      setDetailTicket(data);
    }
    fetchData();
  }, []);

  async function addInvoiceHandler(data) {
    await userAddInvoice(data);
  }

  async function onSubmitHandler(e) {
    e.preventDefault();
    let data = await orderTicket(
      bank,
      detailTicket._id,
      detailTicket.total_harga,
      detailTicket.name
    );
    const userData = {
      ...detailTicket,
      order_id: data._id,
    };
    setDetailTicket(userData);
    sessionStorage.setItem('order', JSON.stringify(userData));
    addInvoiceHandler(userData);
    alert('Silahkan melakukan pembayaran anda');
    nav(`/invoicedetail-${data._id}`);
  }

  return (
    <>
      <Navbar />
      <h1>Payment </h1>
      <h2>Total jumlah pembayaran :</h2>
      <h3>{detailTicket.total_harga}</h3>
      <form
        onSubmit={(e) => {
          onSubmitHandler(e);
        }}
      >
        <h2>Pilih Bank :</h2>

        <input
          type='radio'
          name='permata'
          id='permata'
          value='permata'
          onChange={(e) => setBank(e.target.value)}
          required
        />
        <label htmlFor='permata'>Permata Bank</label>

        <br />
        <input type='submit' value='Bayar' />
      </form>
    </>
  );
};

export default PaymentPage;
