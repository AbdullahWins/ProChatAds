import React from "react";
import qrCode from "../../assets/qr/QR.png";

const Download = () => {
  return (
    <section className="w-full max-w-6xl p-4">
      <hr className="opacity-20 text-blackLow" />
      <div className="grid md: grid-cols-1 md:grid-cols-5 gap-8 items-center justify-between py-4">
        <div className="col-span-1 md:col-span-4 flex flex-col items-center justify-center">
          <p className="text-2xl font-bold">Download Now</p>
          <p className="text-base py-4 text-center">
            This app supports both iOS and Android. You may download it from
            AppStore or Google Play.
          </p>
          <div></div>
        </div>
        <div className="col-span-1 flex flex-col items-center justify-center">
          <p className="text-lg font-bold pb-2">Scan QR code</p>
          <img className="w-28" src={qrCode} alt="" />
        </div>
      </div>
      <hr className="opacity-20 text-blackLow" />
    </section>
  );
};

export default Download;
