import './TrendCard.css'
import {TrendData} from '../../Data/TrendData'
export const TrendCard = () => {
  return (
    <div className="trendCard">
      <h3>Trend for you</h3>
      {TrendData.map((trend)=>{
        return (
          <div className="trend">
            <span>#{trend.name}</span>
            <span>{trend.shares}K shares</span>
          </div>
        )
      })}
    </div>
  )
}
