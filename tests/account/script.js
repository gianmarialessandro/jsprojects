class Account { 
    constructor(balance, amount, amountCredit) {
        this.balance = balance;
        this.debit = amount;
        this.credit = amountCredit;
        this.amountChraged = this.debits(amount)
        this.balance = this.getCredits(amountCredit)
    }
    debits(amount) {
        const a = this.balance - amount;
        const toStringArray = a.toString().split("-")
        if(toStringArray[0] === "") {
            return false;
        } else {
            this.balance = a;
            return true;
        }
    }
    getBalance() {
        return this.balance;
    }
    getCredits(amountCredit) {
        const credits = this.balance + amountCredit
        return this.balance = credits
    }
 }

 const bilancio = new Account(500, 650, 550)

 console.log(bilancio.getBalance())
 console.log(bilancio)
 

//  console.log(bilancio.balance)

//  bilancio.debits(1595)

//  console.log(bilancio.debits(654))