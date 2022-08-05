import { useEffect, useState } from 'react'
import MainNav from '../../molecules/mainNav'
import SectionTask from '../../molecules/SectionTask'
import Shelf from '../Shelf/index'
import axios from 'axios'
import Modal from '../../molecules/Modal'

function clearStr(str) {
  return str.toString().toLowerCase().trim()
}

const Main = () => {
  const [tasks, setTasks] = useState([])
  const [filteredTasks, setFilteredTasks] = useState([])
  const [openModal, setOpenModal] = useState(false)
  const [currentTask, setCurrentTask] = useState(0)
  const [page, setPage] = useState(0)

  const handleChange = (option) => { 
    const filter = tasks.filter(task =>
      clearStr(task.status) === (clearStr(option)) && task
    )
    setFilteredTasks(filter)
  }
  const handleChangeTitle = (title) => {
    const filter = tasks.filter(task => 
      clearStr(task.title) === (clearStr(title)) && task
    )
    setFilteredTasks(filter)
  }

  useEffect(() => {
    axios
      .get(`/tasks/${page}/10`)
      .then(response => {
        setTasks(response.data.task)
        setFilteredTasks(response.data.task)
      })
      .catch(err => console.error(err))
  }, [openModal, page])

  return (
    <>
      {openModal && <Modal id={currentTask} setOpenModal={setOpenModal} />}
      <MainNav />
      <SectionTask
        onFilter={handleChange}
        onFiltertitle={handleChangeTitle}
        onAdd={() => {
          setCurrentTask(0)
          setOpenModal(true)
        }}
      />
      <Shelf
        onSelect={id => {
          setCurrentTask(id)
          setOpenModal(true)
        }}
        data={filteredTasks}
      />
      <button disabled={page < 1} onClick={() => setPage(page - 1)}>Prox</button>
      {page}
      <button disabled={filteredTasks.length < 10} onClick={() => setPage(page + 1)}>Prev</button>
    </>
  )
}

export default Main