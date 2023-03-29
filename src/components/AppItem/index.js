import './index.css'

const AppItem = props => {
  const {details} = props
  const {appName, imageUrl} = details
  return (
    <li className="app-item">
      <img src={imageUrl} className="size" alt={appName} />
      <p className="app-name">{appName}</p>
    </li>
  )
}
export default AppItem
