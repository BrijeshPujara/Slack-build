import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import { auth } from "./firebase";
import {useAuthState} from "react-firebase-hooks/auth"


function App() {
  const [user, loading] = useAuthState(auth);

  return (
    <div className="app">
      <Router>
        <Header />
        <AppBody>
          <Sidebar />
          <Routes>
          <Route path="/" element={<Chat />}>
            
          </Route>
        </Routes>
        </AppBody>
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
