import GaugeComponent from 'react-gauge-component';

export default function Remaining() {
  return (
    <div>
        <GaugeComponent
        arc={{
            subArcs: [
            {
                limit: 40,
                color: 'green',
                showTick: true
            },
            {
                limit: 80,
                color: 'yellow',
                showTick: true
            },
            {
                limit: 100,
                color: 'red',
                showTick: true
            }
            ]
        }}
        value={60}
        />
    </div>
    )
}
