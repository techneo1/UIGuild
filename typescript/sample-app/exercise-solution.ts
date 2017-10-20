type bankAccountType = {
    money: number,
    deposit: (val: number) => void 
}
let bankAccount1: bankAccountType = {
    money: 2000,
    deposit(value: number) {
        this.money += value;
    }
};


type myselfType = {
    name: string,
    bankAccount: bankAccountType,
    hobbies: string[]
}
 
let myself1: myselfType = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};
 
myself.bankAccount.deposit(3000);
 
console.log(myself);
 