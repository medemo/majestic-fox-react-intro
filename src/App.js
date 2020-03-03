import React from 'react';
import ArticleList from './components/ArticleList'
import ArticleForm from './components/ArticleForm'
import ChatBox from './components/ChatBox'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showChatBox: false,
      articles: [
        {
          id: 1,
          title: 'First Article',
          body: 'Hello World'
        },
        {
          id: 2,
          title: 'Welcome',
          body: 'Welcome to react world'
        },
      ]
    }
  }

  addArticle = (article) => {
    this.setState({
      articles: [
        ...this.state.articles,
        {
          id: (this.state.articles[this.state.articles.length - 1]?.id || 0) + 1,
          ...article
        }
      ]
    })
  }

  render() {
    return (
      <div className="flex container mx-auto pt-8">
        <div className="w-3/5">
          <ArticleList articles={this.state.articles} />
        </div>
        <div className="w-2/5">
          <div className="mb-10">
            <h1 className="text-xl mb-2 uppercase font-semibold">Post an article</h1>
            <ArticleForm addArticle={this.addArticle} />
          </div>
          <div>
            <button
              className="border border-black rounded py-2 px-3 mb-6"
              onClick={() => this.setState(state => ({ showChatBox: !state.showChatBox }))}
            >
              {this.state.showChatBox ? 'HIDE CHATBOX' : 'SHOW CHATBOX'}
            </button>
            {
              this.state.showChatBox
              && <ChatBox />
            }
          </div>
        </div>
      </div>
    )
  }
}

export default App;
