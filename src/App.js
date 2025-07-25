import { useEffect, useState } from 'react';
import './App.css';
import Select from 'react-select';

function App() {
  const [datas, setDatas] = useState([])
  const [userSelect, setUserSelect] = useState("")
  const [isShow, setIsShow] = useState(false)

  const getBerries = async ()=>{
    const berries = await fetch("https://pokeapi.co/api/v2/berry/")
    const value = await berries.json()
    let result = value.results.map(data => {
      return {
        label: data.name,
        value: data.name
      }
    })
    setDatas(result.sort((a, b) =>a.label.localeCompare(b.label)))
  }

  useEffect(() => {
    getBerries()
  }, [])

  const handleSumbit = () => {
    setIsShow(true)
  }

  const handleChange = (value)=> {
    setUserSelect(value)
  }

  return (
    <div className="App">
      <h2>{isShow ? userSelect : ""}</h2>
      <button onClick={() =>handleSumbit()}>Show Values</button>
      <br />
      <br />
      <Select options={datas} onChange={(e)=> handleChange(e.value)}></Select>
    </div>
  );
}

export default App;
