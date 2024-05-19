import QRCode from 'qrcode.react';
import { useState } from 'react'



type Props = {}


const Home = () => {
    const cryptoPaymentInfo = {
        address: '1BoatSLRHtKNngkdXEeobR76b53LETtpyT',
        amount: '0.01 BTC',
        message: 'Payment for services rendered'
      };

  return (
    <>
    <main className="flex min-h-screen items-center justify-center p-24 bg-gray-100">
      <div className="flex flex-col md:flex-row w-full max-w-5xl items-center justify-between bg-white shadow-lg p-8 rounded-lg">
        <div className=" w-full md:w-1/2 p-4 grid text-center justify-center">
            <h2 className='text-xl font-bold mb-4'>Scan</h2>
          <QRCode
            value={`bitcoin:${cryptoPaymentInfo.address}?amount=${cryptoPaymentInfo.amount}&message=${cryptoPaymentInfo.message}`}
            size={256}
          />
        </div>
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-2xl font-semibold mb-4 text-center md:text-left">Payment Information</h2>
          <p className="mb-2"><strong>Address:</strong> {cryptoPaymentInfo.address}</p>
          <p className="mb-2"><strong>Amount:</strong> {cryptoPaymentInfo.amount}</p>
          <p className="mb-2"><strong>Message:</strong> {cryptoPaymentInfo.message}</p>
        </div>
      </div>
    </main>

      

    </>

  )
}

export default Home