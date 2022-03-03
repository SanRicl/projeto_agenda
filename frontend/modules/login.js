import validator from "validator"

export default class Login {
    constructor(formClass) {
        this.form = document.querySelector(formClass)
     
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
        const emailInput = el.querySelector('input[name="email"]')
        const passwordInput = el.querySelector('input[name="password"]')
        const alerts = document.querySelector('alerts')
        let errors = false
        
        

        if (!validator.isEmail(emailInput.value)) {
          
          alert('Email invalido')
            
        }
        if (passwordInput.value.length < 3 || passwordInput.value.length > 50) {
            alert('Senha invalida') 
            errors = true
        }

        if (!errors) el.submit()
        
                   
           
        

    }

    

}