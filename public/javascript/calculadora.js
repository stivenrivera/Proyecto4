


funcionPredeterminada = () => {
    const formulario = document.getElementById('formulario')
    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault();
        let valorporHora = document.getElementById('valorPorHora');
        valorporHora.value()
        let disenoInterfaz= document.getElementById('interfazHoras');
        disenoInterfaz.value()
        let HorasHTML= document.getElementById('interfazHTML');
        HorasHTML.value()
        document.getElementById('valorTotal') = (valorporHora*disenoInterfaz)/HorasHTML;
        
      })
};
funcionPredeterminada();
