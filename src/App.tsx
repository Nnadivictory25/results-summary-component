import GridContainer from "./components/GridContainer"
import Score from "./components/Score"
import Summary from "./components/Summary"


function App() {

  return (
    <main>
    <GridContainer>
      <Score />
      <Summary />
    </GridContainer>
    </main>
  )
}

export default App
