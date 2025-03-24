
import '../style/selectores.css'
import '../style/App.css'
import { Action } from '../src/Action'
import { useIcons } from './logic/useIcons'
import  {Perfil} from '../src/Perfil'


function App() {
  const [isHome, openHome, closeHome] = useIcons(true)
  const [isSearch, openSearch, closeSearch] = useIcons(false)
  const [isSms, openSms, closeSms] = useIcons(false)
  const [isPerfil, openPerfil, closePerfil] = useIcons(false)

  const  iconHome = isHome
  ? 'inicio inicio-render'
  : 'inicio'
  const modalHome = isHome 
  ? 'follow follow-Close'
  : 'follow'
  const clickHome = () => {
    openHome()
    closeSearch()
    closeSms()
    closePerfil()
  }

  const iconSearch = isSearch
  ? 'buscar buscar-render'
  : 'buscar'
  const clickSearch = () => {
    openSearch()
    closeHome()
    closeSms()
    closePerfil()

  }

  const iconSms = isSms
  ? 'mensaje mensaje-render'
  : 'mensaje'
  const clickSms = () => {
    openSms()
    closeHome()
    closeSearch()
    closePerfil()
  }

  const iconPerfil = isPerfil 
  ? 'sección sección-render'
  : 'sección'
  const modalPerfil = isPerfil
  ? 'one-Perfil open-Perfil'
  : 'one-Perfil'
  const clickPerfil = () => {
    openPerfil()
    closeHome()
    closeSearch()
    closeSms()
  }

  return (
    <>
      <article className={modalPerfil}>
        <Perfil isOpen={isPerfil} closeModal={closePerfil}/>
      </article>

      <article className='Pagina'>
        <div className={modalHome}>
          <Action isOpen={isHome} closeModal={closeHome} />
        </div>
      </article>
      
      <section className="selector" > 
        <div onClick={clickHome} className={iconHome} >
        </div>
        <div onClick={clickSearch} className={iconSearch} >
        </div>
        <div onClick={null} className="agregar" >
        </div>
        <div onClick={clickSms} className={iconSms} >
        </div>
        <div onClick={clickPerfil} className={iconPerfil} >
        </div>
      </section>
    </>
  )
}

export default App

