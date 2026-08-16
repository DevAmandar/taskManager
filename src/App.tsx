import { Route, Routes } from 'react-router'
import BoardPage from './layout/BoardPage'
import BoardProvider from './provider/BoardProvider'
import Test from './Test'
import TasksPage from './layout/TasksPage'

function App() {
  return (
    <BoardProvider>

      <Routes>
        <Route path="/" element={<TasksPage />} />
        <Route path="page/:id" element={<BoardPage />} />
        <Route path='test' element={<Test />} />
      </Routes>

    </BoardProvider>
  )
}

export default App