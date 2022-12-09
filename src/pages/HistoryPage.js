import React from 'react';
import { Navbar } from '../components/Navbar';
import { InvoiceList } from '../components/InvoiceList';

export const HistoryPage = () => {
  return (
    <>
      <Navbar />
      <h1>History</h1>
      <InvoiceList />
    </>
  );
};
