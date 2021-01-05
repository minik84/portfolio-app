import React from 'react';

import '../../css/style.css';

const Article = ({
  description, img, title
}) => {

  return (
    <div className="article article--desktop technologies__article">
      <img src={img} alt="" className="article__image" />
      <p className="article__title">{title}</p>
      <p className="article__description">{description}</p>
    </div>
  )
}

export default Article;