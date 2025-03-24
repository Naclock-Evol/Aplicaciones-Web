
import '../style/Perfil.css'
import '../style/Perfil_2.css'
import '../style/Perfil_3.css'
import { useIcons } from './logic/useIcons'

export const Perfil = () => {
  const [isVideoList, openVideoList, closeVideoList] = useIcons(true)
  const [isLock, openLock, closeLock] = useIcons(false)
  const [isRepeat, openRepeat, closeRepeat] = useIcons(false)
  const [isFavoList, openFavoList, closeFavoList] = useIcons(false)
  const [isLikeList, openLikeList, closeLikeList] = useIcons(false)
  const [isconfiPerfil, openConfiPerfil, closeConfiPerfil] = useIcons(false)

  const iconConfiPerfil = isconfiPerfil
  ? 'configuraciones-Perfil configuraciones-Perfil-Render'
  : 'configuraciones-Perfil'
  const clickConfiPerfil = () => {
    openConfiPerfil(!closeConfiPerfil)
  }

  const iconVideoList = isVideoList
  ? 'video-List video-List-Render'
  : 'video-List'
  const clickVideoList = () => {
    openVideoList()
    closeLock()
    closeRepeat()
    closeFavoList()
    closeLikeList()
  }

  const iconLock = isLock 
  ? 'block-List block-List-Render'
  : 'block-List'
  const clickLock = () => {
    openLock()
    closeVideoList()
    closeRepeat()
    closeFavoList()
    closeLikeList()
  }

  const iconRepeat = isRepeat 
  ? 'repeat repeat-Render'
  : 'repeat'
  const clickRepeat = () => {
    openRepeat()
    closeVideoList()
    closeLock()
    closeFavoList()
    closeLikeList()
  }

  const iconFavoList = isFavoList
  ? 'favoritos-Perfil favoritos-Perfil-Render'
  : 'favoritos-Perfil'
  const clickFavoList = () => {
    openFavoList()
    closeVideoList()
    closeLock()
    closeRepeat()
    closeLikeList()
  }

  const iconLikeList = isLikeList 
  ? 'like-Perfil like-Perfil-Render'
  : 'like-Perfil'
  const clickLikeList = () => {
    openLikeList()
    closeVideoList()
    closeLock()
    closeRepeat()
    closeFavoList()
  }
  
  return (
    <article>
      <div className="perfil-Up">
        <div className='perfiles-iniciados'>Marlon</div>
        <div onClick={clickConfiPerfil} className={iconConfiPerfil}></div>
      </div>
      <div className='container-Perfil'>
        
        <div className="avatar-Perfil">
          <div className='img-Perfil'></div>
          <div className='userName-Perfil'>@naclock_evol</div>
        </div>

        <div className="siguiendo-Perfil">
          <div className='caja-Perfil'>
            <div className='siguiendo-Num'>
              <div className='a2'>425.8 K</div>
              <div className='b3'>Siguiendo</div>
            </div>
            <div className='seguidores-Num'>
              <div className='a2'>658.5 K</div>
              <div className='b3'>Seguidores</div>
            </div>
            <div className='meGusta-Num'>
              <div className='a2'>598</div>
              <div className='b3'>Me gusta</div>
            </div>
          </div>
          
        </div>

        <div className="ajustes-Perfil">
          <div className='caja-Perfil2'>
            <div className='edit-Perfil'>Editar Perfil</div>
            <div className='compartir-Perfil'>Compartir Perfil</div>
            <div className='plus-Friends'></div>
          </div>
        </div>

        <div className="descripción-Perfil" >
          <div className='plus-script'>+ Agregar una Descripción</div>
        </div>

        <div className="funciones-Perfil">
          <div onClick={clickVideoList} className={iconVideoList} ></div>
          <div onClick={clickLock} className={iconLock} ></div>
          <div onClick={clickRepeat} className={iconRepeat} ></div>
          <div onClick={clickFavoList} className={iconFavoList} ></div>
          <div onClick={clickLikeList} className={iconLikeList} ></div>
        </div>

        <div className="contenido-List"></div>

      </div>
    </article>
  )
}

