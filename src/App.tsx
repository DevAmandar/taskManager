import { Route, Routes } from 'react-router'
import BoardPage from './Layout/BoardPage'
import BoardProvider from './provider/BoardProvider'
import TasksPage from './Layout/TasksPage'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <BoardProvider>

      <Routes>
        <Route path="/" element={<TasksPage />} />
        <Route path="boardPage/:id" element={<BoardPage />} />
      </Routes>
      <ToastContainer />

    </BoardProvider>
  )
}

export default App