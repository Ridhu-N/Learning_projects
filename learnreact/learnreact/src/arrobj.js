const arrobject =[{name:"ridhu",age:22},{name:"saro",age:24},{name:"ramya",age:25}];
function Arrobj(){
    const ListItems=arrobject.map(product =>
        <li key={product.age} style={{
            color: product.name === "ridhu" ? 'red' : 'darkgreen'
          }}>
            {product.name}
        </li>
    );
    return (
        <ul>{ListItems}</ul>
    );
}
export default Arrobj;