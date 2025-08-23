import { useEffect,useState } from "react"

function App() {
  const [data, setData] = useState(null)

  async function fetchData() {
    const res = await fetch("https://dummyjson.com/quotes/random")
    const d = await res.json()
    setData(d)  // API returns an array, so take the first element
    console.log(d)
  }

  useEffect(() => {
  fetchData();
},[]);


  return (
    <div className="bg-gradient-to-tr from-[green] via-[blue] to-[red] flex justify-center items-center h-screen w-screen">
      <div className="bg-gradient-to-bl from-[green] via-[blue] to-[red] h-[60%] w-[40%] rounded-4xl opacity-150 shadow-2xl shadow-gray-950 p-6 flex flex-col justify-center gap-10 items-center border-4">

        <h1 className="text-4xl font-bold text-white underline h-[10%] py-8">Quote-Generator</h1>

        <div className="h-[90%] flex justify-center flex-col items-center p-10">
          <div className="h-[85%] text-white text-2xl font-bold m-auto text-center">
            {data?(
            <div className="p-4 ">
              <p className="p-4">"{data.quote}"</p>
              <i className="p-4">~{data.author}</i>
            </div>
            ):
            (
              <div>
                <p className="p-4">Everything Happens for reason <br />Like you're seeing this becuase you're not connected to internet 🤣🤣</p>
                <i className="p-4">~kg</i>
              </div>
            )}
          </div>

          <button className="bg-green-600 hover:bg-green-800 p-4 rounded-2xl text-white text-2xl font-bold " onClick={fetchData}>New Quote</button>
        </div>

      </div> 

    </div>
  )
}

export default App
