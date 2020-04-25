import React from 'react'
import { SceneOne, SceneTwo, About, WorkSamples, Contact } from './components'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <SceneOne live={true} />
        <SceneTwo live={false} />
        <About live={false} />
        <WorkSamples live={false} />
        <Contact live={false} />
      </div>
    )
  }
}

export default App
