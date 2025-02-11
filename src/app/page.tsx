'use client';

import { useState } from 'react';
import colors from 'tailwindcss/colors'
import { useQRCode } from 'next-qrcode';

export default function Home() {

  const [URL, setURL] = useState('https://google.com/');
  const [lastURL, setLastURL] = useState('https://google.com/');
  const [generated, setGenerated] = useState(false);
  const { Canvas } = useQRCode();

  const generateQRCode = (e:any) => {
    e.preventDefault();
    setLastURL(URL);
    setGenerated(true);
  }

  return (
    <div className="flex flex-col items-center gap-8">
      <h1 className="text-2xl font-bold">
        <span className="text-tertiary">QR Code</span> <span className="text-white">Generator</span>
      </h1>
      {generated?(
        <div className="rounded-xl overflow-hidden">
            <Canvas
              text={lastURL}
              options={{
                errorCorrectionLevel: 'M',
                margin: 3,
                scale: 4,
                width: 400,
                color: {
                  dark: '#493D9E',
                  light: '#fff',
                },
              }}
            />
          </div>
      ):''}
      <form className="w-[400px] max-w-[99dvw] flex items-center gap-6" onSubmit={generateQRCode}>
        <input onChange={(e) => setURL(e.target.value)} type="url" className="h-[50px] p-4 flex-1 outline-none bg-secondary rounded-full text-primary placeholder:text-primary transition-all ease-in-out duration-300" placeholder="Enter website address..." />
        <button type="submit" className="h-[50px] w-[50px] text-primary bg-secondary p-2 grid place-items-center rounded-full border-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 1024 1024"><path fill="currentColor" d="M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312z"/></svg>
        </button>
      </form>
    </div>

  );
}
