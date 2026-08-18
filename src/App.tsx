import { Route, Routes } from 'react-router'
import BoardPage from './layout/BoardPage'
import BoardProvider from './provider/BoardProvider'
import Test from './Test'
import TasksPage from './layout/TasksPage'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <BoardProvider>

      <Routes>
        <Route path="/" element={<TasksPage />} />
        <Route path="boardPage/:id" element={<BoardPage />} />
        <Route path='test' element={<Test />} />
      </Routes>
      <ToastContainer />

    </BoardProvider>
  )
}

export default App