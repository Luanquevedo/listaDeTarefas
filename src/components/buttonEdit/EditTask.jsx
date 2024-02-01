import React, { useState } from 'react';
import './index.scss';

// Componente funcional EditTask que recebe props (task, onSave, onCancel)
const EditTask = ({ task, onSave, onCancel }) => {
  // Estado para armazenar o texto editado da tarefa
  const [editedTaskText, setEditedTaskText] = useState(task.task);

  // Função para lidar com o salvamento da tarefa editada
  const handleSave = () => {
    // Verifica se o campo editado não está em branco
    if (editedTaskText.trim() !== '') {
      // Chama a função onSave passando o texto editado como argumento
      onSave(editedTaskText);
    } else {
      // Loga uma mensagem no console se o campo estiver em branco
      console.log('O campo não pode estar em branco');
    }
  };

  // Função para lidar com o cancelamento da edição
  const handleCancel = () => {
    // Chama a função onCancel
    onCancel();
  };

  // Retorna a estrutura do componente JSX
  return (
    <div className="modal-content">
      {/* Título da janela modal para confirmar a edição */}
      <h2>Deseja editar esse item?</h2>
      {/* Mensagem de confirmação com o campo a ser editado */}
      <p>Tem certeza que deseja realizar a alteração abaixo?</p>
      {/* Input para editar o texto da tarefa com estilo específico */}
      <input
        className='modal-content__input'
        style={{ border: 'none', outline: 'none', textAlign: 'center' }}
        type="text"
        value={editedTaskText}
        onChange={(e) => setEditedTaskText(e.target.value)}
        required
      />
      {/* Botões de ação: Não (Cancelar) e Sim (Salvar) */}
      <div>
        {/* Botão Não (Cancelar) com classe de estilo específica */}
        <button className='modal-content__button save-button' onClick={handleCancel}>Não</button>
        {/* Botão Sim (Salvar) com classe de estilo específica */}
        <button className='modal-content__button cancel-button' onClick={handleSave}>Sim</button>
      </div>
    </div>
  );
};

// Exporta o componente EditTask para uso em outros arquivos
export default EditTask;
