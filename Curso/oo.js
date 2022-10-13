class ContaCorrente{
    constructor(nome,cpf,email,saldo){
        this.nome = nome,
        this.cpf = cpf,
        this.email = email,
        this.saldo = saldo
    }

    exibirSaldo(){
        return this.saldo
    }

    tranferencia(valor,conta){
        if(valor > this.saldo){
        console.log('Saldo insuficiente')
    }else{
        this.saldo -= valor
        conta.saldo +=valor
    }

    }
    depositar(valor){
        this.saldo += valor
    }
     sacar(valor){
        if(valor > this.saldo){
            console.log('Saldo insuficiente')
        }else{
            this.saldo -= valor
        }
           
     }

}

class ContaPoupanca extends ContaCorrente{
    constructor(nome,cpf,email,saldo,saldopoupanca){

        super(nome,cpf,email,saldo)
        this.saldopoupanca = saldopoupanca
    }
    exibirSaldoPou(){
        return this.saldopoupanca
    }
    aplicar(valor){

        this.saldopoupanca += valor
    }

    retirar(valor){

    }
}

var cliente1 = new ContaPoupanca('Felipe','56454','ggv@nfjnf',150,0)
cliente1.aplicar(100)
console.log(cliente1.exibirSaldoPou())

// var cliente1 = new ContaCorrente('Felipe','56454','ggv@nfjnf',150)
// var cliente2 = new ContaCorrente('dantas','1234566','ggv@yytyt',100)

// cliente1.tranferencia(100,cliente2)
// console.log(cliente1.exibirSaldo())
// console.log(cliente2.exibirSaldo())