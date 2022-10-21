import React, {useState, useContext} from "react";
import AuthContext from "./auth-context";
import { useCartContext } from "./cart_context";

const RentalContext = React.createContext({
  rentalList: {},
  cartBookId: [],
  cartBookName: [],
  // bookList: [],
  rental: (bookId, mbId) => {},
  returnBookId: (id) => {},
  returnBookName: (name) => {},
  clearBookId: () => {},
  clearBookName: () => {}
});

export const RentalContextProvider = (props) => {

  const authCtx = useContext(AuthContext);

  const [rentalList, setRentalList] = useState([]);
  const [rental, setRental] = useState({});
  const [cartBookId, setCartBookId] = useState([]);
  const [cartBookName, setCartBookName] = useState([]);

  const rentalHandler = (bookId, mbId) => {
    if (mbId === authCtx.mbId) {
      setRental({bookId, mbId});
    }
  }
  
  const returnBookId = (id) => {
    cartBookId.push(id);
  }
  const clearBookId = () => {
    setCartBookId([]);
  }
  const returnBookName = (name) => {
    cartBookName.push(name);
  }
  const clearBookName = () => {
    setCartBookName([]);
  }

  const contextValue = {
    rental: rentalHandler,
    rentalInfo: rental,
    cartBookId: cartBookId,
    cartBookName: cartBookName,
    clearBookId: clearBookId,
    clearBookName, clearBookName,
    returnBookId: returnBookId,
    returnBookName: returnBookName
  }

  return (
    <RentalContext.Provider value={contextValue}>
      {props.children}
    </RentalContext.Provider>
  )
}

export default RentalContext;

