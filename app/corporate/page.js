// app/corporate/page.js
import CorporateServices from "../../components/services/CorporateServices";
import "../../components/services/corporate.css";

export default function Page() {
  // switch "light" / "dark" to preview themes
 return <CorporateServices theme="light" />; // or "dark"

}
