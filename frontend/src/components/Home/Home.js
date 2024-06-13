import React, { useEffect } from "react";
import './Home.scss'
import { useDispatch, useSelector } from "react-redux";
import {  Outlet } from "react-router-dom";
import { addAllBooks } from "../../redux/actions/bookActions";
import { CircularProgress, Snackbar } from "@mui/material";
const Home = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state)=>state.booksInfo.status.isLoading);
  const isError = useSelector((state)=>state.booksInfo.status.error);
  const statusMessage = useSelector((state)=>state.booksInfo.status.message);

  const [state, setState] = React.useState({
    open: true,
    vertical: 'top',
    horizontal: 'right',
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ ...newState, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  useEffect(() => {
    dispatch(addAllBooks());
  }, [dispatch]);

  

  return (
    <div className="home">
      <div className="banner-img"></div>

      {isError && <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        ContentProps={{
          sx: {
            background: "maroon"
          }
        }}
        autoHideDuration={2000}
        onClose={handleClose}
        message={statusMessage}
        key={vertical + horizontal}
      />}
      
      {isLoading && <center className="loading">Loading catalogue <CircularProgress color="primary" size={20} /> </center>}
      <Outlet />
    </div>
  );
};

export default Home;
