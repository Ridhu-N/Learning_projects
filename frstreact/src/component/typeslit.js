function Templit(prop){
    return <h1>{prop.name}</h1>                                
}                                                      //template literal

function Numlit(prop){
    return <h2>Age:{prop.age}</h2>
}
export {Templit,Numlit};