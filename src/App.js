import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "pages/dashboard";
import Login from "pages/login";
import Register from "pages/register";
import Chatroom from "pages/chatroom";
import Index from "pages";
import io from "socket.io-client";
import makeToast from "Toaster";

function App() {
  const [socket, setSocket] = React.useState(null);
  const setupSocket = () => {
    const token = localStorage.getItem("CC_Token");
    if (token.length > 0 && !socket) {
      const newSocket = io("https://server-chat-socket-io.herokuapp.com", {
        query: {
          token: localStorage.getItem("CC_Token"),
        },
      });
      newSocket.on("disconnect", () => {
        setSocket(null);
        setTimeout(setupSocket, 3000);
        makeToast("error", "Socket disconnected !");
      });
      newSocket.on("connect", () => {
        setSocket(null);
        setTimeout(setupSocket, 3000);
        makeToast("success", "Socket connected !");
      });

      setSocket(newSocket);
    }
  };

  React.useEffect(() => {
    setupSocket();
    // eslint disabled next line
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Index} exact />
        <Route
          path="/login"
          render={() => <Login setupSocket={setupSocket} />}
          exact
        />
        <Route path="/register" component={Register} exact />
        <Route
          path="/dashboard"
          render={() => <Dashboard setupSocket={socket} />}
          exact
        />
        <Route
          path="/chatroom/:id"
          render={() => <Chatroom setupSocket={socket} />}
          exact
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
