// Importa a biblioteca React, useState, e os estilos associados ao componente
import React, { useState } from 'react';
import EditTask from '../buttonEdit/EditTask';
import DeleteTask from '../buttonDelet/DeleteTask';
import './index.scss';

// Componente funcional Task
const Task = () => {
  // Estados para gerenciar as tarefas, nova tarefa, ID de edição, ID de exclusão e o estado do modal
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [deletingTaskId, setDeletingTaskId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Adiciona uma nova tarefa à lista de tarefas
  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), task: newTask }]);
      setNewTask('');
    }
  };

  // Inicia a edição de uma tarefa
  const handleEditTask = (taskId) => {
    setEditingTaskId(taskId);
    setIsModalOpen(true);
  };

  // Salva as alterações feitas em uma tarefa
  const handleSaveEdit = (taskId, editedTaskText) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, task: editedTaskText } : task
    );
    setTasks(updatedTasks);
    setEditingTaskId(null);
    setIsModalOpen(false);
  };

  // Inicia o processo de exclusão de uma tarefa
  const handleDeleteTask = (taskId) => {
    setDeletingTaskId(taskId);
    setIsModalOpen(true);
  };

  // Confirma a exclusão de uma tarefa
  const handleConfirmDelete = () => {
    const updatedTasks = tasks.filter((task) => task.id !== deletingTaskId);
    setTasks(updatedTasks);
    setDeletingTaskId(null);
    setIsModalOpen(false);
  };

  // Cancela a edição ou exclusão de uma tarefa
  const handleCancelEdit = () => {
    setEditingTaskId(null);
    setDeletingTaskId(null);
    setIsModalOpen(false);
  };

  // Retorna a estrutura do componente JSX
  return (
    <section className="task">
      {/* Cabeçalho da lista de tarefas */}
      <div className="task__header">
        <ul>
          <li>Tarefa</li>
          <li>Status</li>
          <li>Opções</li>
        </ul>
      </div>
      {/* Barra horizontal decorativa */}
      <div className="task__barra-horizontal">
        <img src="retangulo2.svg" alt="" />
      </div>
      {/* Lista de tarefas renderizadas */}
      <div className="task__list">
        {tasks.map((task) => (
          <div key={task.id} className="task__renderResult">
            <li className="task__renderItem">
              {editingTaskId === task.id ? (
                <EditTask
                  task={task}
                  onSave={(editedTaskText) => handleSaveEdit(task.id, editedTaskText)}
                  onCancel={handleCancelEdit}
                />
              ) : (
                <>
                  {task.task}
                  {/* Ícones para editar e excluir */}
                  <div className="task__icons">
                    <div className="task__checkbox">
                      <input type="checkbox" name="" id="" />
                    </div>
                    <div className="task__extra">
                      <img
                        src="edit.svg"
                        alt="Editar"
                        onClick={() => handleEditTask(task.id)}
                      />
                      <img
                        src="lixeira.svg"
                        alt="Excluir"
                        onClick={() => handleDeleteTask(task.id)}
                      />
                    </div>
                  </div>
                </>
              )}
            </li>
          </div>
        ))}
        {/* Adição de nova tarefa */}
        <div className="task__renderList">
          <input
            type="text"
            placeholder="Nova tarefa..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button onClick={handleAddTask}>
            <img id="cruz" src="" alt="" />
          </button>
        </div>
      </div>
      {/* Modal para editar ou excluir tarefas */}
      <div className={`edit-task-modal ${isModalOpen ? 'open' : ''}`}>
        <div className="modal-content">
          {/* Renderiza o componente EditTask se houver uma tarefa em edição */}
          {editingTaskId !== null && isModalOpen && (
            <EditTask
              task={tasks.find((task) => task.id === editingTaskId)}
              onSave={(editedTaskText) => handleSaveEdit(editingTaskId, editedTaskText)}
              onCancel={handleCancelEdit}
            />
          )}
          {/* Renderiza o componente DeleteTask se houver uma tarefa para excluir */}
          {deletingTaskId !== null && isModalOpen && (
            <DeleteTask
              task={tasks.find((task) => task.id === deletingTaskId)}
              onDelete={handleConfirmDelete}
              onCancel={handleCancelEdit}
            />
          )}
        </div>
      </div>
    </section>
  );
};

// Exporta o componente Task para uso em outros arquivos
export default Task;
