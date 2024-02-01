// Importa a biblioteca React e o estilo associado ao componente
import React from 'react';
import './index.scss';

// Componente funcional DeleteTask que recebe props (task, onDelete, onCancel)
const DeleteTask = ({ task, onDelete, onCancel }) => {
  // Função para lidar com a exclusão da tarefa
  const handleDelete = () => {
    // Chama a função onDelete passando o ID da tarefa como argumento
    onDelete(task.id);
  };

  // Função para lidar com o cancelamento da exclusão
  const handleCancel = () => {
    // Chama a função onCancel
    onCancel();
  };

  // Retorna a estrutura do componente JSX
  return (
    <div className="modal-content">
      {/* Título da janela modal para confirmar a exclusão */}
      <h2>Excluir Tarefa</h2>
      {/* Mensagem de confirmação com o nome da tarefa a ser excluída */}
      <p>{`Tem certeza de que deseja excluir a tarefa: ${task.task} ?`}</p>
      {/* Botões de ação: Cancelar e Excluir */}
      <div>
        {/* Botão de Cancelar com classe de estilo específica */}
        <button className='modal-content__button delete-button' onClick={handleCancel}>Cancelar</button>
        {/* Botão de Excluir com classe de estilo específica */}
        <button className='modal-content__button delete-button' onClick={handleDelete}>Excluir</button>
      </div>
    </div>
  );
};

// Exporta o componente DeleteTask para uso em outros arquivos
export default DeleteTask;
