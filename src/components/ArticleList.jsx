import React, { Component } from 'react'
import ArticleItem from './ArticleItem'
import { connect } from 'react-redux'


class ArticleList extends Component {
  render() {
    return (
      <div className="pr-6">
        {
          this.props.articles.map(article => {
            return (
              <ArticleItem key={article.id} article={article} />
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    articles: Object.values(state.articles)
  }
}

export default connect(mapStateToProps)(ArticleList)