import GaugeComponent from 'react-gauge-component';

export default function WaterUsage() {
  return (
    <div>
        <GaugeComponent
        arc={{
            subArcs: [
            {
                limit: 20,
                color: 'rgb(176 211 228)',
                showTick: true
            },
            {
                limit: 40,
                color: 'rgb(25 206 245)',
                showTick: true
            },
            {
                limit: 60,
                color: 'rgb(25 135 245)',
                showTick: true
            },
            {
                limit: 100,
                color: 'rgb(20 82 218)',
                showTick: true
            },
            ]
        }}
        value={40}
        />
    </div>
    )
}
