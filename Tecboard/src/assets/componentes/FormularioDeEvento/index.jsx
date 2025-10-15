import './FormularioDeEventos.css'
import { CampoDeEntrada } from '../CampoDeEntrada'
import { CampoDeFormulario } from '../CampoDeFormulario'
import { TituloFormulario } from '../TituloFormulario'
import { Label } from '../Label'
import { Botao } from '../Botao'
import { ListaSuspensa  } from '../ListaSuspensa'




export function FormularioDeEvento( {temas, aoSubmeter } ) {
    return (
        <form className="form-evento">
            <TituloFormulario>Preencha para criar um evento:</TituloFormulario>

            <div className='campos'>
                <CampoDeFormulario>
                    <Label htmlFor='nome'>Qual é o nome do evento</Label>
                    <CampoDeEntrada type='text' id='nome' placeholder='Sumer hev hits' />
                </CampoDeFormulario>

                <CampoDeFormulario>
                    <Label htmlFor='nome'>Qual é o endereço da imagem de capa</Label>

                    <CampoDeEntrada type='text' id='capa' placeholder='https//...'  name='capa'/>
                </CampoDeFormulario>


                <CampoDeFormulario>
                    <Label htmlFor='dataEvento'>Qual é a data do evento</Label>
                    <CampoDeEntrada type='date' id='nome' placeholder='dataEvento' />
                </CampoDeFormulario>

                <CampoDeFormulario>
                    <Label htmlFor='tipoEvento'></Label>
                    <ListaSuspensa id='tema' name='tema' itens={temas}/>
                </CampoDeFormulario>
            </div>
                <div className='acoes'>
                    <Botao>
                        Criar Evento
                    </Botao>
                </div>
            
        </form>

    )



}