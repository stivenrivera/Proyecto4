

funcionPredeterminada = () => {
    const formulario = document.getElementById('formulario')
    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault();
        let valorporHora = document.getElementById('valorPorHora').value;
        let disenoInterfaz= document.getElementById('interfazHoras').value;
        let HTML = document.getElementById('htmlhoras').value
        let dificultad = document.getElementById('htmldificult').value
        let valor= valorporHora * disenoInterfaz * HTML;
        document.getElementById('valorTotal').value = dificultad*valor
        
        
        
        
      })
};
funcionPredeterminada();

