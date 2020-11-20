import QRCode from "react-qr-code";
import { useState } from "react";
import { Link } from "react-router-dom";

function QrCodePage() {
  const [value, setValue] = useState(0);
  const [pixId, setPixId] = useState("");
  const [isQrCodeGenerated, setIsQrCodeGenerated] = useState(false);
  const [linkQrCode, setLinkQrCode] = useState(false);

  const generateQrCode = () => {
    console.log("submit ", pixId, value);
    setLinkQrCode(`${window.location.href}/confirm-transaction?id=${pixId}&value=${value}`);
    setIsQrCodeGenerated(true);
  };

  return (
    <div className="col-lg-6 col-lg-offset-3">
      <legend>Generate QrCode Pix</legend>
      <form>
        <div className="form-group">
          <label for="pixId">Pix ID</label>
          <input
            type="text"
            className="form-control"
            id="pixId"
            placeholder="Pix ID"
            onChange={(e) => setPixId(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label for="value">Valor</label>
          <input
            type="text"
            className="form-control"
            id="value"
            placeholder="R$ 1,99"
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <button
          type="button"
          className="btn btn-success"
          onClick={(e) => generateQrCode()}
        >
          Generate QrCode
        </button>
      </form>
      <br />
      {isQrCodeGenerated && <QRCode value={linkQrCode} />}
      <br />
      {isQrCodeGenerated && (
        <Link
          className="btn btn-link"
          to={`/confirm-transaction?id=${pixId}&value=${value}`}
        >
          Confirm transaction page
        </Link>
      )}
    </div>
  );
}

export default QrCodePage;
