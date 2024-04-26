// higher order function

function MainClass(callback){
    callback();
}

function SecondClass(){
    console.log('This is the secondary class');
}

MainClass(SecondClass)

function Details(name, address, contact, email){
    this.name = name;
    this.address = address;
    this.contact = contact;
    this.email = email;
}

Object.prototype.flashdetails = function(){
    console.log(`
    WELCOME
    Name: ${this.name}
    Address: ${this.address}
    Contact: ${this.contact}
    Email: ${this.email}
    `);
}
