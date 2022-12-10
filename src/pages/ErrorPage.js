import React from 'react';
import { CgSmileSad } from 'react-icons/cg';

export const ErrorPage = () => {
  return (
    <>
      <div>
        <CgSmileSad size={70} />
      </div>
      <div>Error</div>
      <p>Page yang kamu cari tidak ditemukan!</p>
    </>
  );
};
