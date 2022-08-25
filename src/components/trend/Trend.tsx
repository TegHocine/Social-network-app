import { TrendData } from '../../Data/TrendData.js'

import './Trend.scss'

const Trend = () => {
  return (
    <div className='trend'>
      <h3>Trends for you</h3>

      {TrendData.map((trend, i) => {
        return (
          <div key={i} className='trendCard'>
            <span>#{trend.name}</span>
            <span>{trend.shares}k shares</span>
          </div>
        )
      })}
    </div>
  )
}

export default Trend
