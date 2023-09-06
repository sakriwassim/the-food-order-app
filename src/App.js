import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { Fragment, useState } from "react";


function App() {
  const [cartIsShown, setCardIsShown] = useState(false);

  const showCartHandler = () => {
    setCardIsShown(true)
  };

  const hideCartIsShown = () => {
    setCardIsShown(false)
  };

  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartIsShown} />}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
