import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ConfirmTransactionPage from "../pages/confirm-transaction.page";
import QrCodePage from "../pages/qrcode.page";

export default function DefaultRouter() {
  return (
    <Router>
        <Switch>
          <Route path="/confirm-transaction">
            <ConfirmTransactionPage />
          </Route>
          <Route path="/">
            <QrCodePage />
          </Route>
        </Switch>
    </Router>
  );
}
