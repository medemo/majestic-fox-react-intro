import React from 'react'

// class ArticleItem extends Component {
//   render() {
//     return (
//       <div className="mb-5">
//         <h1 className="text-2xl uppercase font-semibold italic">{this.props.article.title}</h1>
//         <p>{this.props.article.body}</p>
//       </div>
//     )
//   }
// }

function ArticleItem(props) {
  return (
    <div className="mb-5">
      <h1
        className="text-2xl uppercase font-semibold italic"
      >
        {props.article.title}
      </h1>
      <p>{props.article.body}</p>
    </div>
  )
}

export default ArticleItem