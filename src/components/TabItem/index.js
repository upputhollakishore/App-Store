// Write your code here
import './index.css'

const TabItem = props => {
  const {tabsList, onChangeTabItem, isActive} = props
  const {tabId, displayText} = tabsList
  const onChangeTab = () => {
    onChangeTabItem(tabId)
  }
  const isActiveClass = isActive ? 'active-tab-btn' : ''
  return (
    <li className="tabs-list">
      <button className={`tab-heading ${isActiveClass}`} onClick={onChangeTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
