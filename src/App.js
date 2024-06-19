import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    amount: '',
  });

  const [paymentResponse, setPaymentResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/process-payment', formData);
      setPaymentResponse(response.data);
    } catch (error) {
      console.error('Erro ao processar pagamento:', error);
    }
  };

  return (
    <div className="App">
      <h1>Pagamento Fictício</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="cardNumber">Número do Cartão</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="cardName">Nome no Cartão</label>
          <input
            type="text"
            id="cardName"
            name="cardName"
            value={formData.cardName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="expiryDate">Data de Validade</label>
          <input
            type="text"
            id="expiryDate"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="cvv">CVV</label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="amount">Valor</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Pagar</button>
      </form>
      {paymentResponse && (
        <div className="payment-response">
          <h2>Resposta do Pagamento</h2>
          <p><strong>ID da Transação:</strong> {paymentResponse.transactionId}</p>
          <p><strong>Nome no Cartão:</strong> {paymentResponse.transactionDetails.cardName}</p>
          <p><strong>Valor:</strong> R$ {paymentResponse.transactionDetails.amount}</p>
          <p><strong>Status:</strong> {paymentResponse.transactionDetails.status}</p>
          <p><strong>Data:</strong> {new Date(paymentResponse.transactionDetails.createdAt).toLocaleString()}</p>
        </div>
      )}
    </div>
  );
}

export default App;
