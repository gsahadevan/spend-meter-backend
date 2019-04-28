interface Transaction {
    amount: number,
    merchant: string,
    timestamp: string,
    balance_amount: number,
    currency: string,
    account: string,
    category: string
};

export = Transaction;