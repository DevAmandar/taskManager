import BoardPage from './layout/BoardPage'
import BoardProvider from './provider/BoardProvider'

function App() {
  return (
    <BoardProvider>
      <BoardPage />
    </BoardProvider>
  )
}

export default App