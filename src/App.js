
import { Message } from "./components/Message";
import { FocusableInput } from "./components/FocusableInput";
import { ImageGallery } from "./components/ImageGallery";
import { PlayerStatus } from "./components/PlayerStatus";
import { TeamsList } from "./components/TeamsList";
import { Grocery } from "./components/Grocery";
import { ListItemsForNavigation } from "./components/ListItemsForNavigation";
import { Rating } from "./components/Rating";

import './App.css';

const links = [
  "https://via.placeholder.com/100/52c989",
  "https://via.placeholder.com/100/73c3d1",
  "https://via.placeholder.com/100/f5c37f",
  "https://via.placeholder.com/100/90db96",
];

const products = [
  { name: "Apples", votes: 0 },
  { name: "Bananas", votes: 0 },
  { name: "Oranges", votes: 0 },
];

export default function App() {
  return (
    <div className="App">
      <h3>'Message' test</h3>
      <Message />
      <br />
      <h3>'FocusableInput' test</h3>
      <FocusableInput />
      <br />
      <h3>'ImageGallery' test</h3>
      <ImageGallery links={links} />
      <br />
      <h3>'PlayerStatus' test</h3>
      <PlayerStatus />
      <br />
      <h3>'TeamsList' test</h3>
      <TeamsList />
      <h3>'Grocery' test</h3>
      <Grocery products={products} />
      <h3>'ListItemsForNavigation' test</h3>
      <ListItemsForNavigation />
      <h3>'Rating' test</h3>
      <Rating />
    </div>
  );
}
