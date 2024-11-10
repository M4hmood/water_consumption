import './dashboard.css'
import Temperature from '../temperature/temperature';
import WaterUsage from '../waterUsage/waterUsage';
import Remaining from '../remaining/remaining';

export default function Dashboard() {
  return (
    <div>
      <div className='up'>  
          <h1>HOUTY</h1>
        </div>
      <div className='dashboard'>
          <div className='temperature_container'><Temperature /><h2>Temperature</h2></div>
          <div className='waterUsage_container'><WaterUsage /><h2>Water usage</h2></div>
          <div className='remaining_container'><Remaining /><h2>Remaing water</h2></div>
      </div>
    </div>
  )
}
