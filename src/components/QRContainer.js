import QRCode from "./QRCode";
import QRDesc from "./QRDesc";

export default function QRContainer() {
  return (
    <div className="container">
      <QRCode />
      <QRDesc />
    </div>
  )
}