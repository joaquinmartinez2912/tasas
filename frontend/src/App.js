import React, {useState, useEffect} from 'react'

function App() {

  const [data, setData] = useState([{}]) 

  useEffect(() => {
    fetch("/index").then(
      res => res.json()
    ).then(
      responseData => {
        setData(responseData)
      }
    )
  },[])

  return (
    <div>
      
      {
        data.Nombres && data.Nombres.map((nombre) => (
          <p >{nombre}</p>
        ))
      }

    </div>
  )
}

export default App