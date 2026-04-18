import { render, screen } from '@testing-library/react';
import { PaymentForm } from '../src/components/PaymentForm';

test('renders payment form', () => {
  render(<PaymentForm onSubmit={jest.fn()} />);
  expect(screen.getByLabelText('Amount (USD)')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Pay Now' })).toBeInTheDocument();
});
