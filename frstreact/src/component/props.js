function Carprops(props){
 return <h2> I am a {props.brand} car!</h2>
}     //props in a separate file
function Propsmulti(props){
return <h2> I am {props.name} Intern at {props.company}</h2>
}     
function Dirprops({name,company}){
return <h2> I am {name} working at {company} this is the direct variable assigning statement</h2>
}                          //props in a separate file with two variable
export  {Carprops,Propsmulti,Dirprops};