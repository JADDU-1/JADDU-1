import './index.css'

const EachCard = props => {
  const {eachTech} = props
  const {id, title, description, imgUrl, className} = eachTech
  return (
    <div id={id} className={className}>
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="inner">
        <img className="image" src={imgUrl} alt={title} />
      </div>
    </div>
  )
}

export default EachCard
