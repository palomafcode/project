function Pessoa({nome, foto}){
    return (
    <div>
        <img src={foto} alt= {nome}/>
        <h2>Nome: {nome}</h2>
    </div>
    )
}
export default Pessoa