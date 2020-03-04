import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import store from './store'
import HomePage from './containers/HomePage'
import ArticlePage from './containers/ArticlePage'
// import ChatRoomPage from './containers/ChatRoomPage'
import Navbar from './components/Navbar'


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="container mx-auto">
            <Navbar />
            <div className="flex">
              <Switch>
                <Route path="/article/:articleId">
                  <ArticlePage />
                </Route>
                <Route path="/chatroom">
                  {/* <ChatRoomPage /> */}
                  <h1>Chatroom</h1>
                </Route>
                <Route path="/">
                  <HomePage />
                </Route>
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App;
