import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import store from './store'
import HomePage from './containers/HomePage'
import ArticlePage from './containers/ArticlePage'
import LoginPage from './containers/LoginPage'
// import ChatRoomPage from './containers/ChatRoomPage'
import Navbar from './components/Navbar'
import PrivateRoute from './components/PrivateRoute'
import { UserProvider } from './contexts/UserContext'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <UserProvider>
            <div className="container mx-auto">
              <Navbar />
              <div className="flex">
                <Switch>
                  <Route path="/article/:articleId">
                    <ArticlePage />
                  </Route>
                  <PrivateRoute path="/chatroom">
                    {/* <ChatRoomPage /> */}
                    <h1>Chatroom</h1>
                  </PrivateRoute>
                  <Route path="/login">
                    <LoginPage />
                  </Route>
                  <Route path="/">
                    <HomePage />
                  </Route>
                </Switch>
              </div>
            </div>
          </UserProvider>
        </Router>
      </Provider>
    )
  }
}

export default App;
