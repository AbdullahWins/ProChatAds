import React from "react";
import qrCode from "../../assets/qr/QR.png";
import appStore from "../../assets/img/appStore.svg";
import android from "../../assets/img/playStore.svg";
import apk from "../../assets/img/apk.svg";
import line from "../../assets/img/line.svg";

const Download = () => {
  return (
    <section className="w-full max-w-6xl p-4">
      <hr className="opacity-20 text-btnColor" />
      <div className="grid md: grid-cols-1 md:grid-cols-6 gap-8 items-center justify-between py-4">
        <div className="col-span-1 md:col-span-4 flex flex-col items-center justify-center gap-1">
          <p className="text-2xl font-bold">Download Now</p>
          <p className="text-base text-center">
            This app supports both iOS and Android. You may download it from
            AppStore or Google Play.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 py-6">
            <img src={appStore} alt="" />
            <img src={android} alt="" />
            <img src={apk} alt="" />
          </div>
        </div>
        <div className="col-span-1">
          <img src={line} alt="" />
        </div>
        <div className="col-span-1 flex flex-col items-center justify-center">
          <p className="text-lg font-bold pb-2">Scan QR code</p>
          <img className="w-28" src={qrCode} alt="" />
        </div>
      </div>
      <hr className="opacity-20 text-btnColor" />
    </section>
  );
};

export default Download;
