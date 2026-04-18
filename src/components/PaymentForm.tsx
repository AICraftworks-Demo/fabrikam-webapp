import React, { useState } from 'react';

interface PaymentFormProps {
  onSubmit: (amount: number) => void;
}

export function PaymentForm({ onSubmit }: PaymentFormProps) {
  const [amount, setAmount] = useState('');

  return (
    <form onSubmit={e => { e.preventDefault(); onSubmit(Number(amount)); }}>
      <label htmlFor="amount">Amount (USD)</label>
      <input
        id="amount"
        type="number"
        value={amount}
        onChange={e => setAmount(e.target.value)}
        min="0.01"
        step="0.01"
        required
      />
      <button type="submit">Pay Now</button>
    </form>
  );
}
