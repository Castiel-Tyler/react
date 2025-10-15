import './ListaSuspensa.css'

export function ListaSuspensa({ itens }) {
    return (
        <select className='lista-suspensa-form'>
            <option value=''>Selecione uma opção</option>

            {itens.map(function (item) {
                return(
                    <option key={item.id} value={item.id}>
                        {item.nome}
                    </option>
                    )
            })}
    
        </select>
    )
}