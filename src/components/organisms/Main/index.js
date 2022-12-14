import { useEffect, useState } from "react";
import { BtnPages } from "./style";
import MainNav from "../../molecules/mainNav";
import SectionTask from "../../molecules/SectionTask";
import Shelf from "../Shelf/index";
import axios from "axios";
import Modal from "../../molecules/Modal";

const Main = () => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [currentTask, setCurrentTask] = useState(0);
  const [page, setPage] = useState(0);
  const [status, setStatus] = useState("Status")

  const handleChange = (option) => {
    axios
      .get(`/tasksStatus/${option}`)
      .then((response) => setFilteredTasks(response.data))
      .catch(err => console.log(err))
  };

  const handleChangeTitle = (title) => {
    title === ""
      ? axios
          .get(`/tasks/${page}/10`)
          .then((response) => {
            setTasks(response.data.task);
            setFilteredTasks(response.data.task);
          })
          .catch((err) => console.error(err))
       :axios
          .get(`/tasks/${title}`)
          .then((response) => setFilteredTasks(response.data));
  };

  useEffect(() => {
    axios
      .get(`/tasks/${page}/10`)
      .then((response) => {
        setTasks(response.data.task);
        setFilteredTasks(response.data.task);
      })
      .catch((err) => console.error(err));
  }, [openModal, page]);

  return (
    <>

      {openModal && <Modal id={currentTask} setOpenModal={setOpenModal} />}
      <MainNav />
      <SectionTask
        onFilter={handleChange}
        onFiltertitle={handleChangeTitle}
        value={status}
        setStatus={setStatus}
        onAdd={() => {
          setCurrentTask(0);
          setOpenModal(true);
        }}
      />
      <Shelf
        onSelect={(id) => {
          setCurrentTask(id);
          setOpenModal(true);
        }}
        data={filteredTasks}
      />
      <BtnPages disabled={page < 1} onClick={() => setPage(page - 1)}>
        Prev
      </BtnPages>
      {page}
      <BtnPages
        disabled={filteredTasks.length < 10}
        onClick={() => setPage(page + 1)}
      >
        Prox
      </BtnPages>
    </>
  );
};

export default Main;
