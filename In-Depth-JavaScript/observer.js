class Observable{
    subscribers = [];

    subcriber(fn){
        this.subscribers.push(fn)
    }
    unSubscribe(fn){
        this.subscribers=this.subscribers.filter((fn)=>{
            return fn != removeFn
        })
    }
    broadcast(value){
        this.subscribers.foreach((fn)=>{
            fn(value)
        })
    }
}
 let celebrityObsv = new Observable();
celebrityObsv.subscriber((event)=>{
    console.log(`I am going to ${event}`);
})
// console.log(celebrityObsv)


const someFan = (event)  =>{
    console.log(`I am not going to ${event}.`)
}
celebrityObsv.subscriber(someFan)

celebrityObsv.broadcast("Disco Morning");

celebrityObsv.unSubscribe(someFan);
celebrityObsv.broadcast("Fun Night Concert")