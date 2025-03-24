import React, { useState, useRef, useEffect } from 'react';

const TextAreaAutoResize = () => {
  const [height, setHeight] = useState('30px'); // Altura inicial
  const textareaRef = useRef(null); // Referencia al textarea

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
      setHeight('150px'); // Expandir a 150px
    } else {
      setHeight('30px'); // Mantener en 30px
    }
  };

  // Efecto para recalcular cuando cambia el tamaño de la ventana
  useEffect(() => {
    const handleResize = () => {
      const textarea = textareaRef.current;
      if (textarea) {
        const charsPerLine = calculateCharsPerLine();
        if (textarea.value.length > charsPerLine) {
          setHeight('150px');
        } else {
          setHeight('30px');
        }
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <textarea
      ref={textareaRef}
      style={{
        height: height,
        maxHeight: '150px', // Limitar la altura máxima
        overflow: 'hidden', // Evitar la barra de desplazamiento
        resize: 'none', // Desactivar el redimensionamiento manual
        width: '100%', // Asegurar que el ancho sea consistente
      }}
      onInput={handleInput}
      placeholder="Escribe algo..."
    />
  );
};

export default TextAreaAutoResize;
