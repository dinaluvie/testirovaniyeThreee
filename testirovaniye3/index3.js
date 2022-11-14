const nameInp=document.querySelector('#name')
const textInp=document.querySelector('#message')
const actionSend=document.querySelector('.btn-send')
const actionShow=document.querySelector('.btn-show')
const history=document.querySelector('.history')


function gettime() {
    let now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`
}

class Message {
    name
    time
    message
    constructor(name, message){
        this.name = name;
        this.time = gettime();
        this.message = message;
    }
    toHtml(){
        return (`<p>${this.time} ${this.name}: ${this.message}</p>`);
    }
}
let messagE=new Message()
class Messenger{
    mgArr = []
   

    send(name, text){
        this.mgArr.push(new Message(name, text))

    }
    show_history(){ 
       var  mgArrInp=[]
        this.mgArr.forEach(mgArrEl => {
            mgArrInp.push(mgArrEl.toHtml())
            return mgArrInp
            
        })
    }
}

let person = new Messenger();


actionSend.addEventListener('click',()=>{
    
    person.send(nameInp,textInp)

})
actionShow.addEventListener('click',()=>{
    history.innerHTML=person.show_history();
})

