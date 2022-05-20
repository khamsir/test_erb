import './App.css';
import Circle from './components/Circle';
import { useEffect, useState } from 'react';

const initialData = [
  {
    name: 'red',
    active: true
  },
  {
    name: 'yellow',
    active: false
  },
  {
    name: 'green',
    active: false
  },
]

function App() {
  const [traffic, setTraffic] = useState([...initialData]);
  const [change, setChange] = useState(true);
  const setActive = (indx) => {
    setTraffic(prev => prev.map((el, idx) => ({
      ...el,
      active: idx === indx ? true : false,
    })))
  }

  const changeColor = () => {
    const findAct = traffic.findIndex(a => a.active === true);
    const maxL = traffic.length;
    if (findAct !== maxL - 1) {
      setActive(findAct + 1)
    } else {
      setActive(0)
    }
    setInterval(
      () => setChange(!change)
      , 5000);
  }

  useEffect(() => {
    changeColor();
  }, [change])

  return (
    <div className="App">
      <div className="container">
        {
          traffic.map((el, idx) => (
            <Circle className={el.name} status={el.active} key={idx} />
          ))
        }
      </div>
    </div>
  );
}

export default App;