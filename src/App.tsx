import { Route, Routes } from 'react-router'
import BoardPage from './layout/BoardPage'
import BoardProvider from './provider/BoardProvider'
import TasksPage from './layout/TasksPage'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <BoardProvider>

      <Routes>
        {/* این خط جدید و بسیار مهم است! مسیر اصلی گیت‌هاب را به صفحه تسک‌ها هدایت می‌کند */}
        <Route path="/taskManager/" element={<TasksPage />} />
        
        {/* مسیر قبلی را هم نگه می‌داریم تا در حالت توسعه (dev) کار کند */}
        <Route path="/" element={<TasksPage />} />
        
        <Route path="boardPage/:id" element={<BoardPage />} />
      </Routes>
      <ToastContainer />

    </BoardProvider>
  )
}

export default App