
import { useState } from 'react';
import './App.css';
import BarChart from './compoment/BarChart';
import { UserData } from './Data'
import LineChart from './compoment/LineChart';
import PieChart from './compoment/PieChart';
import ScatterChart from './compoment/ScatterChart';

function App() {

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [{
      label: "User Gained",
      data: UserData.map((data) => data.userGain),
      backgroundColor: [
        'rgba(75,192,192,1)',
        '#ecf0f1',
        '#50AF95',
        '#f3ba2f',
        '#2a71d10',
      ],
      borderColor: 'black',
      borderWidth: 2,
    },
    ],
  })

  return (
    <div className="App">
      <div style={{ width: 700 }}>
        <BarChart chartData={userData} />
      </div>
      <div style={{ width: 700 }}>
        <LineChart chartData={userData} />
      </div>
      <div style={{ width: 700 }}>
        <PieChart chartData={userData} />
      </div>

      {/* <ScatterChart /> */}
    </div>
  );
}

export default App;
