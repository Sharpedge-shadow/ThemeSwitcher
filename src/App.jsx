import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useTheme, { ThemeProvider } from './context/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  const [themeMode, setThemeMode] = useState("light")
  const [bug,setBug] = useState([
    {
      id: 1,
      name: "light",
    }])
  const lightTheme = () =>{
    setThemeMode("light")

    const updateUsers = [
      // copy the current users state
      ...bug,
      // now you can add a new object to add to the array
      {
        // using the length of the array for a unique id
        id: bug.length + 1,
        // adding a new user name
        name: "light",

      }
    ];
    setBug(updateUsers)
   
  //  console.log(bug)
  }

  const darkTheme = () =>{
    setThemeMode("dark")
    
    const updateUsers = [
      // copy the current users state
      ...bug,
      // now you can add a new object to add to the array
      {
        // using the length of the array for a unique id
        id: bug.length + 1,
        // adding a new user name
        name: "dark",
      }
    ];
    setBug(updateUsers)
      
    //  console.log(bug)
  }

  useEffect(() =>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  },[bug])

  return (
    <ThemeProvider value={{themeMode ,lightTheme , darkTheme,bug}}>
        <div className="flex flex-wrap min-h-screen items-center">
            <div className="w-full">
                <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn/>
            </div>

            <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
             </div>
        </div>
      </ThemeProvider>
  )
}

export default App
