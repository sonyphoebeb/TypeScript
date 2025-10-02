// Encapsulation with Access Modifiers

class BankAccount {
    private balance: number; // only accessible inside class
    public accountNumber: string;
    protected accountHolder: string;
  
    constructor(accountNumber: string, accountHolder: string, balance: number) {
      this.accountNumber = accountNumber;
      this.accountHolder = accountHolder;
      this.balance = balance;
    }
  
    public deposit(amount: number): void {
      this.balance += amount;
      console.log(`Deposited: ${amount}, New Balance: ${this.balance}`);
    }
  
    public getBalance(): number {
      return this.balance; // controlled access
    }
  }
  
  const account = new BankAccount("12345", "Sony", 5000);
  account.deposit(1000);
  console.log("Current Balance:", account.getBalance());
  // ❌ account.balance (not accessible because it's private)
  