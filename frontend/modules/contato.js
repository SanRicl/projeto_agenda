import validator from "validator"

export default class Contato {
    

    constructor(formContato) {
        this.form = document.querySelector(formContato)
    }

    init() {
        this.events()
    }

    events() {
        if (!this.form) return
        this.form.addEventListener('submit', event => {
            event.preventDefault()
            this.validate(event)
        })
    }

    validate(event) {
        const el = event.target
        const nomeInput = el.querySelector('input[name="nome"]')
        const emailInput = el.querySelector('input[name="email"]')
        const telefoneInput = el.querySelector('input[name="telefone"]')
        let error = false
       

        if (!emailInput.value && !telefoneInput.value) {
            
            
            alert('Pelo menos um contato precisa ser enviado: E-mail ou telefone')
                        
            error = true
            
        }

        if (!nomeInput.value) {

            
            alert('O campo nome nao pode estar vazio')
            
            error = true
            
        }

        if (emailInput.value && !validator.isEmail(emailInput.value)) {
            
          
            
            alert('E-mail invalido')
            
            error = true
            

        }
        if (!error) el.submit()


    }
   
}