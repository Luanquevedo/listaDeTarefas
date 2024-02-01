import Headermenu from '../../components/header/Headermenu'
import Task from '../../components/newTask/Task'
import './index.scss'

const Home = () => {
  return (
    <section className='home'>
        <Headermenu/>
        <div className='home__task'>
            <h1>Otimize seu tempo e se organize com o nosso Planejador Diário.</h1>
            <Task className='home__container'/>
        </div>
        
    </section>
  )
}

export default Home