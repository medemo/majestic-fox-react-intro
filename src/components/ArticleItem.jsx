import React from 'react'
import { useHistory } from 'react-router-dom'

function ArticleItem(props) {
  const history = useHistory()

  return (
    <div className="mb-5">
      <h1
        className="text-2xl uppercase font-semibold italic cursor-pointer"
        onClick={() => history.push(`/article/${props.article.id}`)}
      >
        {props.article.title}
      </h1>
      <p>{props.article.body}</p>
    </div>
  )
}

export default ArticleItem

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
