// Importa os estilos associados ao componente Headermenu
import './index.scss';

// Componente funcional Headermenu
const Headermenu = () => {
  // Retorna a estrutura do cabeçalho JSX
  return (
    <header className='headermenu'>
      <ul className='headermenu__itens'>
        {/* Item de menu para Organização */}
        <li>Organização</li>
        {/* Item de menu para Tarefas com um identificador personalizado 'li2' */}
        <li id='li2'> Tarefas</li>
      </ul>
    </header>
  );
};

// Exporta o componente Headermenu para uso em outros arquivos
export default Headermenu;
