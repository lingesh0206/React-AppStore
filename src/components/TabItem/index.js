import './index.css'

const TabItem = props => {
  const {property, isActive, clickTabItem} = props
  const {tabId, displayText} = property
  const activeTabBtnClassName = isActive ? 'active-tab' : ''

  const onClickTabItem = () => {
    clickTabItem(tabId)
  }

  return (
    <li className="item">
      <button
        type="button"
        className={`tab-btn ${activeTabBtnClassName}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
