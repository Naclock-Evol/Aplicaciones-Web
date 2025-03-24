import  { useEffect, useRef, useState } from 'react'
import '../style/inputShared.css'
import '../style/TextTarea.css'
import { useModal } from './logic/useModal'

export function InputShared () {
  const [isEmoji, setEmoji] = useState("")
  const [isTexTarea, setTextTarea, closeTextTarea] = useModal(false)
  const [isDisplay, openDisplay, closeDisplay] = useModal()
  const [comentar, openComentar, closeComentar] = useModal()
  const textareaRef = useRef(null);
  const [height, setHeight] = useState("25px");


  const valueTextTarea = (event) => {
    const newText = event.target.value    
    setTextTarea(newText)
    setEmoji(event.target.value)
    
    if (newText.length > 0) {
      openDisplay()
      
    } else {
      closeDisplay()
      closeTextTarea()
      setHeight("25px");
      
    }

  }
  
  // Función para calcular cuántos caracteres caben en una línea
  const calculateCharsPerLine = () => {
    const textarea = textareaRef.current;
    if (!textarea) return 0;

    // Obtener el estilo del textarea
    const style = window.getComputedStyle(textarea);
    const fontSize = parseFloat(style.fontSize); // Tamaño de la fuente
    const width = parseFloat(style.width); // Ancho del textarea

    // Calcular el número aproximado de caracteres que caben en una línea
    // (esto es una estimación, ya que depende del ancho de cada carácter)
    const avgCharWidth = fontSize * 0.6; // Ancho promedio de un carácter
    return Math.floor(width / avgCharWidth);
  };

  // Función para manejar el cambio de contenido
  const handleInput = (event) => {
    const textarea = event.target;
    const charsPerLine = calculateCharsPerLine();
    const lines = textarea.value.split('\n').length; // Número de líneas

    // Verificar si el contenido supera el ancho disponible
    if (textarea.value.length > charsPerLine || lines > 1) {
      setHeight(`${Math.min(textarea.scrollHeight, 150)}px`); // Expandir a 150px
    } else {
      setHeight('25px'); // Mantener en 25px
    }
  };

  // Efecto para recalcular cuando cambia el tamaño de la ventana
  useEffect(() => {
    const handleResize = () => {
      const textarea = textareaRef.current;
      if (textarea) {
        const charsPerLine = calculateCharsPerLine();
        if (textarea.value.length > charsPerLine) {
          setHeight(`${Math.min(textarea.scrollHeight, 150)}px`);
        } else {
          setHeight('25px');
        }
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const handleDivClick = () => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
    openComentar()
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus()
    }
  }, [])

  const openDisplayTemp = isTexTarea
  ? 'sectionTemp sectionTempClose'
  : 'sectionTemp'
  const openDisplayThreeS = isDisplay
  ? 'threeSection threeSectionOpen'
  : 'threeSection'

  const classCometario = comentar 
  ? 'sectionTextTarea openTextTarea'
  : 'sectionTextTarea'
  
  const contenerFijo = e => e.stopPropagation()

  const clickEmojiSonrisa = () => {
    setEmoji(emojiSonrisa => emojiSonrisa + "😁")
    openDisplay()
    setTextTarea()
  }

  const clickEmojiEnamorado = () => {
    setEmoji(emojiEnamorado => emojiEnamorado + "🥰")
    openDisplay()
    setTextTarea()
  }

  const clickEmojiCarcajadas = () => {
    setEmoji(emojiCarcajadas => emojiCarcajadas + "😂")
    openDisplay()
    setTextTarea()
  }

  const clickEmojiSorprendido = () => {
    setEmoji(emojiSorprendido => emojiSorprendido + "😳")
    openDisplay()
    setTextTarea()
  }

  const clickEmojiCoqueto = () => {
    setEmoji(emojiCoqueto => emojiCoqueto + "😏")
    openDisplay()
    setTextTarea()
  }

  const clickEmojiRisaIncomoda = () => {
    setEmoji(emojiRisaIncomoda => emojiRisaIncomoda + "😅")
    openDisplay()
    setTextTarea()
  }

  const clickEmojiCaritaTierna = () => {
    setEmoji(emojiCaritaTierna => emojiCaritaTierna + "🥺")
    openDisplay()
    setTextTarea()
  }

  const clickArrobaText = () => {
    setEmoji(símboloArroba => símboloArroba + "@")
    openDisplay()
    setTextTarea()
  } 

  return (
    <>
    <article onClick={closeComentar} className={classCometario}>
      <div onClick={contenerFijo} className="contenedorInput">
        <div onClick={handleDivClick} className="listSection">
          <div className="twoSection2">
              <div onClick={clickEmojiSonrisa} className="emoji-one"></div>
              <div onClick={clickEmojiEnamorado} className="emoji-two"></div>
              <div onClick={clickEmojiCarcajadas} className="emoji-three"></div>
              <div onClick={clickEmojiSorprendido} className="emoji-four"></div>
              <div onClick={clickEmojiCoqueto} className="emoji-five"></div>
              <div onClick={clickEmojiRisaIncomoda} className="emoji-six"></div>
              <div onClick={clickEmojiCaritaTierna} className="emoji-seven"></div>
          </div>

          <div className="inputSection">
            <div className="shared-Perfil"></div>
            <div className="textTareaEditSection">
              <textarea 
              style={{height: height}}
              ref={textareaRef}
              className="textTareaEdit" type='text' value={isEmoji}
              onChange={valueTextTarea}
              onInput={handleInput}
              placeholder='Agregar comentario...'
              ></textarea>
            </div>
          </div>

          <div className="arrobaSection2">
            <div onClick={clickArrobaText} className="icon-one"></div>
            <div className="icon-two"></div>
            <div className="icon-three"></div>
            <div className="icon-four"></div>
            <div className='comentarButton' onClick={null} ></div>
          </div>
        </div>
        
      </div>
      
    </article>
    <div className='shared-Dow'>
          <div className="twoSection">
            <div onClick={clickEmojiSonrisa} className="emoji-one"></div>
            <div onClick={clickEmojiEnamorado} className="emoji-two"></div>
            <div onClick={clickEmojiCarcajadas} className="emoji-three"></div>
            <div onClick={clickEmojiSorprendido} className="emoji-four"></div>
            <div onClick={clickEmojiCoqueto} className="emoji-five"></div>
            <div onClick={clickEmojiRisaIncomoda} className="emoji-six"></div>
            <div onClick={clickEmojiCaritaTierna} className="emoji-seven"></div>
          </div>
          <div className='oneSection' onClick={null} >
            <div className='shared-Perfil'></div>
            <div className='input-Shared'>
              <div className={openDisplayThreeS} onClick={handleDivClick} >
                <div className="inputEdit">
                  {isEmoji}
                  </div>
                <div className='comentarButton' onClick={null} ></div>
              </div>
              <div className={openDisplayTemp}>
                <h6 onClick={handleDivClick} className="agregarComentario">Agregar comentario...</h6>
                <div className="arrobaSection">
                  <div onClick={clickArrobaText} className="icon-one"></div>
                  <div className="icon-two"></div>
                  <div className="icon-three"></div>
                  <div className="icon-four"></div>
                </div>
              </div>
              
            </div>
        </div>
      </div>
      </>
  )
}
