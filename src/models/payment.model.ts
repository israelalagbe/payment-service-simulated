import { v4 as uuidv4 } from 'uuid';
import { Currency, PaymentStatus, PaymentMethod } from '../enums/payment.enum';

interface PaymentConstructorParams {
  reference: string;
  amount: number;
  currency: Currency;
  paymentMethod: PaymentMethod;
  description?: string;
  metadata?: Record<string, any>;
}

export class Payment {
  id: string;
  reference: string;
  amount: number;
  currency: Currency;
  paymentMethod: PaymentMethod;
  status: PaymentStatus;
  description?: string;
  metadata?: Record<string, any>;
  createdAt: Date;
  updatedAt: Date;

  constructor(params: PaymentConstructorParams) {
    const { reference, amount, currency, paymentMethod, description, metadata } = params;
    this.id = uuidv4();
    this.reference = reference;
    this.amount = amount;
    this.currency = currency;
    this.paymentMethod = paymentMethod;
    this.description = description;
    this.metadata = metadata;
    this.status = PaymentStatus.PENDING;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
