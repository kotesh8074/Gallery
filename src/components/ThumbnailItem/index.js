import './index.css'

const ThumbnailItem = props => {
  const {imagesList, changeInGallery, activeId} = props
  const {thumbnailUrl, thumbnailAltText, id} = imagesList
  const change = () => {
    changeInGallery(id)
  }
  const style = id === activeId ? '' : 'opacity'

  return (
    <img
      onClick={change}
      className={`thumbImg ${style}`}
      src={thumbnailUrl}
      alt={thumbnailAltText}
    />
  )
}

export default ThumbnailItem
