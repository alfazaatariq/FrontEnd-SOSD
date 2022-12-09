import React, { useState, useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import Container from 'react-bootstrap/Container';
import { getInvoiceByUserId, getOrderStatus } from '../utils/functions';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

export const InvoiceList = () => {
  const [invoices, setInvoices] = useState('');

  useEffect(() => {
    async function fetchInvoices() {
      const { user_id } = JSON.parse(localStorage.getItem('user'));
      const data = await getInvoiceByUserId(user_id);
      console.log(data);
      setInvoices(data);
    }
    fetchInvoices();
  }, []);

  if (invoices) {
    return (
      <div className='container'>
        {invoices.map((item) => {
          return (
            <Link
              to={`/invoicedetail-${item.order_id}`}
              style={{ color: 'black', textDecoration: 'none' }}
            >
              <ul className='list-ticket' key={item.key}>
                <h1>Invoice</h1>
                <li>order_id : {item.order_id}</li>
                <li>user_id : {item.user_id}</li>
                <li>asal : {item.asal}</li>
                <li>tujuan : {item.tujuan}</li>
                <li>tanggal : {item.tanggal}</li>
                <li>waktu_berangkat : {item.waktu_berangkat}</li>
                <li>waktu_tiba : {item.waktu_tiba}</li>
                <li>nama : {item.nama}</li>
                <li>no : {item.no}</li>
                <li>alamat : {item.alamat}</li>
                <li>harga : {item.harga}</li>
                <li>jumlah_tiket : {item.jumlah_tiket}</li>
                <li>total_harga : {item.total_harga}</li>
              </ul>
            </Link>
          );
        })}
      </div>
    );
  }
  return <div>No History!</div>;
};
