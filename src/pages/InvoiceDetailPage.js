import React, { useEffect, useState } from 'react';
import { Navbar } from '../components/Navbar';
import { getInvoiceById, getOrderStatus } from '../utils/functions';
import { useParams } from 'react-router-dom';
import { RiCheckboxBlankCircleFill } from 'react-icons/ri';

export const InvoiceDetailPage = () => {
  const [invoice, setInvoice] = useState('');
  const [status, setStatus] = useState('');
  const { id } = useParams();

  useEffect(() => {
    async function fetchInvoices() {
      const { user_id } = JSON.parse(localStorage.getItem('user'));
      const data = await getInvoiceById(user_id);
      console.log(data);
      setInvoice(data);
      const transaction_status = await getOrderStatus(id);
      setStatus(transaction_status);
    }
    fetchInvoices();
  }, []);

  if (invoice) {
    return (
      <>
        <Navbar />
        <h1>invoice detail</h1>
        <h1>
          Status : {status.transaction_status}{' '}
          <RiCheckboxBlankCircleFill
            color={
              status.transaction_status === 'pending'
                ? 'grey'
                : status.transaction_status === 'settlement'
                ? 'green'
                : 'red'
            }
          />
        </h1>
        <ul className='list-ticket'>
          <h1>Invoice</h1>
          <li>user_id : {invoice[0].user_id}</li>
          <li>asal : {invoice[0].asal}</li>
          <li>tujuan : {invoice[0].tujuan}</li>
          <li>tanggal : {invoice[0].tanggal}</li>
          <li>waktu_berangkat : {invoice[0].waktu_berangkat}</li>
          <li>waktu_tiba : {invoice[0].waktu_tiba}</li>
          <li>harga : {invoice[0].harga}</li>
          <li>nama : {invoice[0].nama}</li>
          <li>no : {invoice[0].no}</li>
          <li>alamat : {invoice[0].alamat}</li>
          <li>jumlah_tiket : {invoice[0].jumlah_tiket}</li>
          <li>total_harga : {invoice[0].total_harga}</li>
          <li>order_id : {invoice[0].order_id}</li>
        </ul>
      </>
    );
  }
  return <h1>LOADING</h1>;
};
