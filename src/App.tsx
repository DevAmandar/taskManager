import { Route, Routes } from 'react-router'
import BoardPage from './layout/BoardPage'
import BoardProvider from './provider/BoardProvider'
import TasksPage from './layout/TasksPage'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <BoardProvider>
      <Routes>
        {/* فقط یک مسیر اصلی داریم */}
        <Route path="/" element={<TasksPage />} />
        <Route path="boardPage/:id" element={<BoardPage />} />
      </Routes>
      <ToastContainer />
    </BoardProvider>
  )
}

export default App