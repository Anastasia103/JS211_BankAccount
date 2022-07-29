class BankAccount{
    constructor (accountNumber, owner){
       this.accountNumber = accountNumber;
       this.owner = owner; 
       this.transactions = []
    }
    balance() {
        let sum = 0
        for(let i=0; i<this.transactions.length; i++){
            sum += this.transactions[i].amount;
        }
        return sum;
    }
    charge(amt, payee){
        let chargeTransaction = new Transaction(-amt, payee)
        let currentBalance = this.balance();
        if (amt <= currentBalance){
        this.transactions.push(chargeTransaction)
        }
    }
    deposit(amt){
        let depositTransaction = new Transaction(amt, this.owner)
        this.transactions.push(depositTransaction)
    }
}

class Transaction{
    constructor (amount, payee){
        this.date = new Date()
        this.amount = amount
        this.payee = payee
    }
}
class SavingsAccount extends BankAccount{
    constructor (interestRate, accountNumber, owner){
        super(accountNumber, owner);
        this.interestRate= interestRate;
    }
    accrueInterest(){
        let interest = this.balance()*this.interestRate
        this.transactions.push(interest)
    }
    }

if (typeof describe === 'function') {
    const assert = require('assert');
    describe('#testing bank account', function() {
      it('should create a new bank account',function() {
        let acct1 = new BankAccount('xx4432', 'James Doe');
        assert.equal(acct1.owner, 'James Doe');
        assert.equal(acct1.accountNumber, 'xx4432');
        assert.equal(acct1.transactions.length, 0);
      });
    });
    
      describe('#balance and charges', function() {
        let acct1 = new BankAccount('xx4432', 'James Doe');
        it('testing balance',function() {
          acct1.deposit(400);
          assert.equal(acct1.transactions.length, 1);
          assert.equal(acct1.balance(), 400);
        });  
        it('charges',function() {
            acct1.deposit(20);
            assert.equal(acct1.transactions.length, 2);
            assert.equal(acct1.balance(), 420);
          });  
          it('charges',function() {
            acct1.charge(30);
            assert.equal(acct1.transactions.length, 3);
            assert.equal(acct1.balance(),390);
          }); 
        });
        describe('#interest', function() {
            let acct1 = new SavingsAccount(0.2,'xx4432', 'James Doe');
            it('testing creation of Savings Account',function() {
              assert.equal(acct1.interestRate, 0.2);
              assert.equal(acct1.accountNumber, "xx4432");
            });  
            it('testing interest',function() {
                acct1.deposit(400)
                acct1.deposit(30)
                acct1.charge(20)
                assert.equal(acct1.balance(), 410);
                acct1.accrueInterest();
                assert.equal(acct1.transactions.length, 4)
                assert.equal(acct1.transactions[3], 82)
              });  
    });
}

