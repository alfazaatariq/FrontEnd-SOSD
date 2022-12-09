<section className='detailCard'>

          <div className='detail'>
            <h1>Detail Tiket</h1>
            <div>
              <h3>ID Tiket : {detailTicket._id}</h3>
              <h3>Pelabuhan Asal : {detailTicket.asal}</h3>
              <h3>Pelabuhan Tujuan : {detailTicket.tujuan}</h3>
              <h3>Tanggal : {detailTicket.tanggal}</h3>
              <h3>Waktu Berangkat : {detailTicket.waktu_berangkat}</h3>
              <h3>Waktu Tiba : {detailTicket.waktu_tiba}</h3>
              <h3>Harga : Rp {detailTicket.harga}</h3>
            </div>
          </div>

          <div className='formCard'>
          <form onSubmit={(e) => onSubmitHandler(e)}>
              <input
                type='number'
                id='jumlah'
                min='1'
                placeholder='jumlah tiket'
                onChange={(e) => setJumlah(e.target.value)}
              />
              <br />
              <br />
              <input
                type='text'
                name='name'
                id='name'
                placeholder='name'
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
              />
              <br />
              <br />
              <input
                type='text'
                name='no'
                id='no'
                placeholder='phone number'
                onChange={(e) => setNo(e.target.value)}
                required
              />
              <br />
              <br />
              <input
                type='text'
                name='address'
                id='address'
                placeholder='address'
                onChange={(e) => setAddress(e.target.value)}
                required
              />
              <br />
              <br />
              <button type='submit'>Konfirmasi</button>
            </form>
          </div>
        </section>