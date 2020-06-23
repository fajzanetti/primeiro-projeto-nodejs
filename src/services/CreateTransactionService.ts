import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

interface Request {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute({ title, value, type }: Request): Transaction {
    const { total } = this.transactionsRepository.getBalance();

    if (!['income', 'outcome'].includes(type)) {
      throw new Error('Tipo da transação inválido.');
    }

    if (type === 'income' && value <= 0) {
      throw new Error('Depósito inválido.');
    }

    if (type === 'outcome' && value <= 0) {
      throw new Error('Saque inválido.');
    }

    if (type === 'outcome' && total < value) {
      throw new Error('Voce não possui saldo.');
    }

    const transaction = this.transactionsRepository.create({
      title,
      value,
      type,
    });

    return transaction;
  }
}

export default CreateTransactionService;
