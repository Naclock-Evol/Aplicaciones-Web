
import React, { useState } from 'react'
import '../style/Action.css'
import { Shared } from '../src/Shared'
import { useModal } from './logic/useModal'

  export function Action () {
  const [like, setLike] = useState()
  const [comen, setComen] = useState()
  const [isFavoritos, setFavoritos] = useState()
  const [compa, setCompa] = useState()
  const [music, setMusic] = useState()
  const [isOpenModal1, openModal1, closeModal1] = useModal(false)

  const iconLike = like 
  ? 'like like-render' : 'like'
  const clickLike = () => {
    setLike(!like)
  }

  const iconComen = comen 
  ? 'comentario comentario-render' 
  : 'comentario' 
  
  const clickComen = () => {
    setComen(!comen)
    openModal1()
  }

  const iconFavoritos = isFavoritos
  ? 'favoritos favoritos-render'
  : 'favoritos'
  const clickFavoritos = () => {
    setFavoritos(!isFavoritos)
  }

  const iconCompa = compa 
  ? 'compartir compartir-render'
  : 'compartir'

  const  clickCompa = () => {
    setCompa(!compa)
  }

  const iconMusic = music 
  ? 'música música-render'
  : 'música'
  const clickMusic = () => {
    setMusic(!music)
  }

  return (
    <>
      <section className="encabezado">
        <div className="start">
          <h1 className="ventana" >Following</h1>
          <h1 className="ventana" >For follow</h1>
        </div>
      </section>

      <section className="contener" >
        
      <Shared isOpen={isOpenModal1} closeModal={closeModal1} />

      <div className="caja" >
        <div className='action-caja'>
          <div className="action" >
            <img className="photo-perfil" src="https://unavatar.io/p" alt="" />
          </div>
        </div>
        
        <div className='action-caja'>
          <div onClick={clickLike} className={iconLike} ></div>
          <div className='h3'>732.8 K</div>
        </div>
        
        <div className='action-caja'>
          <div onClick={clickComen} className={iconComen} ></div>
          <div className='h3'>284.5 K</div>
        </div>

        <div className='action-caja'>
          <div onClick={clickFavoritos} className={iconFavoritos}></div>
        </div>
        
        <div className='action-caja'>
          <div onClick={clickCompa} className={iconCompa} ></div>
          <div className='h3'>153 K</div>
        </div>
        
        <div className='action-caja'>
          <div onClick={clickMusic} className={iconMusic} >
          </div>
        </div>
        
      </div>

    </section>
    </>
    
    
  )
}

