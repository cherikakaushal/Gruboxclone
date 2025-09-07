// app/deck/page.js
import DeckMini from "../../components/deck/DeckMini";
import "../../components/deck/deck.css";

export default function Page() {
  // switch 'light'/'dark' to preview themes
 return <DeckMini theme="light" />; // or "dark"

}
