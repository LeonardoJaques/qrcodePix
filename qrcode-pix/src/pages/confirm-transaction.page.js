import { Link } from "react-router-dom";

function ConfirmTransactionPage() {
//TODO: decryptograph user infos
  const queryParams = new window.URLSearchParams(window.location.search);
  const value = queryParams.get("value");
  const pixId = queryParams.get("id");

  const confirmTransaction = () => {
    console.log("submit ", pixId, value);
  };
  return (
    <div className="col-lg-6 col-lg-offset-3">
      <legend>Confirm transaction</legend>
      <form>
        <div className="form-group">
          <label for="pixId">Pix ID (email, phone number, CPF, Key word)</label>
          <input
            type="text"
            className="form-control"
            id="pixId"
            placeholder="Pix ID"
            value={pixId}
            disabled="disable"
          />
        </div>
        <div className="form-group">
          <label for="value">Valor</label>
          <input
            type="text"
            className="form-control"
            id="value"
            value={value}
            placeholder="R$ 1,99"
            disabled="disable"
          />
        </div>
        <button
          type="button"
          className="btn btn-success"
          onClick={(e) => confirmTransaction()}
        >
          Confirmar
        </button>
        <Link className="btn btn-link" to="/">
          Generate QRCode
        </Link>
      </form>
      <br />
    </div>
  );
}

export default ConfirmTransactionPage;
