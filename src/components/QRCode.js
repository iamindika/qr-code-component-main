const qRCode = require("../assets/images/image-qr-code.png");

export default function QRCode() {
  return (
    <header className="hero">
      <div className="hero__img">
        <img
          src={qRCode}
          alt="qr code for frontendmentor.io"
        />
      </div>
    </header>
  )
}