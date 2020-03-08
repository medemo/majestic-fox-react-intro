import React, { Component } from 'react'
import { connect } from 'react-redux'

import ArticleItem from 'components/ArticleItem'

class ArticleList extends Component {
  render() {
    return (
      this.props.articles.map(article => {
        return (
          <ArticleItem key={article.id} article={article} />
        )
      })
    )
  }
}

const mapStateToProps = state => {
  return {
    articles: Object.values(state.articles)
  }
}

export default connect(mapStateToProps)(ArticleList)