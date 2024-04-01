const User = {
    _email: 'hsjjswn@gmail.com',
    _password: "ans",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}

const tea = Object.create(User);
console.log(tea.email);