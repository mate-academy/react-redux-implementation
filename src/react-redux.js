import React, { useContext, useEffect, useState } from 'react';

const StoreContext = React.createContext({});

export const Provider = ({ store, children }) => (
  <StoreContext.Provider value={store}>
    {children}
  </StoreContext.Provider>
);

export const useDispatch = () => {
  const store = useContext(StoreContext);

  return store.dispatch;
};

export const useSelector = (selectData) => {
  const store = useContext(StoreContext);

  const initialValue = selectData(store.getState());
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    return store.subscribe(() => {
      setValue(selectData(store.getState()));
    });
  }, [])

  return value;
}
