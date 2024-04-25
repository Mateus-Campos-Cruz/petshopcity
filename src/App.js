import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './style.css';
import ptBR from 'date-fns/locale/pt-BR'; 

function App() {
  const [data, setData] = useState(null); 
  const [quantidadePequenos, setQuantidadePequenos] = useState('');
  const [quantidadeGrandes, setQuantidadeGrandes] = useState('');
  const [resultado, setResultado] = useState({ melhorPetshop: '', precoTotal: 0 });
  const [erro, setErro] = useState('');
  const [mostrarResultado, setMostrarResultado] = useState(false); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setErro('');
    }, 3000);

    return () => clearTimeout(timer);
  }, [erro]);

  function handleSearch(e) {
    e.preventDefault();
  
    try {
      if (!data || !quantidadePequenos || !quantidadeGrandes || quantidadePequenos === '0' || quantidadeGrandes === '0') {
        throw new Error('Preencha todas as informações corretamente antes de prosseguir.');
      }
  
      const diaSemana = data.getDay();
  
      if (diaSemana < 0 || diaSemana > 6 || isNaN(diaSemana)) {
        throw new Error('Data inválida. Preencha todas informações antes de prosseguir.');
      }
  
      const petshops = [
        { nome: 'Meu Canino Feliz', distancia: 2, precoPequenosSemana: 20, precoGrandesSemana: 40, precoPequenosFds: 24, precoGrandesFds: 48 },
        { nome: 'Vai Rex', distancia: 1.7, precoPequenosSemana: 15, precoGrandesSemana: 50, precoPequenosFds: 20, precoGrandesFds: 55 },
        { nome: 'ChowChawgas', distancia: 0.8, precoPequenos: 30, precoGrandes: 45 }
      ];
  
      const calcularPrecoTotal = (petshop) => {
        const precoPequenos = (diaSemana >= 1 && diaSemana <= 5) ? petshop.precoPequenosSemana : petshop.precoPequenosFds;
        const precoGrandes = (diaSemana >= 1 && diaSemana <= 5) ? petshop.precoGrandesSemana : petshop.precoGrandesFds;
        const precoTotal = (parseInt(quantidadePequenos) * precoPequenos) + (parseInt(quantidadeGrandes) * precoGrandes);
        return { nome: petshop.nome, precoTotal };
      };
  
      const precosTotais = petshops.map(calcularPrecoTotal);
      const melhorPetshop = precosTotais.reduce((melhor, atual) => (atual.precoTotal < melhor.precoTotal ? atual : melhor));
  
      setResultado({ melhorPetshop: melhorPetshop.nome, precoTotal: melhorPetshop.precoTotal });
      setErro('');

      setData(null);
      setQuantidadePequenos('');
      setQuantidadeGrandes('');

      setMostrarResultado(true);

    } catch (error) {
      setErro(error.message);
    }
  }

  function handleClear() {
    setData(null);
    setQuantidadePequenos('');
    setQuantidadeGrandes('');
    setResultado({ melhorPetshop: '', precoTotal: 0 });
    setMostrarResultado(false); 
  }
  

  return (
    <div className="container">

      <div className='logo-title'>
      <img src={process.env.PUBLIC_URL + '/img/logo.png'} alt=""></img>
      </div>      
           
        <h1 className="title">Pet Shop City</h1>
  

      

      <div className="containerForm">
        <form>
          <DatePicker
            selected={data}
            onChange={(date) => setData(date)}
            dateFormat="dd/MM/yyyy"
            locale={ptBR} 
            placeholderText="Escolha uma data" 
          />
          <input type="text" placeholder="Digite a quantidade de cães pequenos..." value={quantidadePequenos} onChange={(e) => setQuantidadePequenos(e.target.value)} />
          <input type="text" placeholder="Digite a quantidade de cães grandes..." value={quantidadeGrandes} onChange={(e) => setQuantidadeGrandes(e.target.value)} />
          
          <div className='buttonsForm'>
          <button type="submit" className="buttonSearch" onClick={handleSearch}>Calcular</button>
          <button type="button" className="buttonSearch" onClick={handleClear}>Limpar</button> 
          </div>
          
          </form>
          
        {erro && <div className="erro">{erro}</div>}
      </div>

      {mostrarResultado && resultado.melhorPetshop && (
        <main className="main">
          <h2>Resultado do cálculo</h2>
          <span>Melhor canil: {resultado.melhorPetshop}</span>
          <span>Preço total dos banhos: R$ {resultado.precoTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
        </main>
      )}

    </div>
  );
}

export default App;
