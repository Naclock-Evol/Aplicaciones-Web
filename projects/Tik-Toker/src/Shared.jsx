
import '../style/Shared.css'
//import EditableDivs from './EditableDiv'
import { InputShared } from './InputShared'

export const Shared = ({isOpen, closeModal}) => {
  
  const contenerClick = e => e.stopPropagation()

  return (
    <article className={`shared-V ${isOpen && "open-Shared"}`} onClick={closeModal} >
      <div className="shared-Contener" onClick={contenerClick} >

        <div className='shared-Up'>
          <div className='a1'>Buscar :</div>
          <div className='b1'> 
            <div className='c1'>496.8</div>
            <div className='d1'>Comentarios</div>
          </div>
          <div onClick={closeModal} class="shared-Close" ></div>
        </div>
        
        <div className='shared-List'>
          
        </div>

        <InputShared />

      </div>
    </article>
  )
}

