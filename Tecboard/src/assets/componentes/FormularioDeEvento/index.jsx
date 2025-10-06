
import './FormularioDeEventos/FormularioDeEventos.css' 
import { CampoDeEntrada } from '../CampoDeEntrada'
import { CampoDeFormulario } from '../CampoDeFormulario'
import {TituloFormulario} from '../TituloFormulario'
import {Label} from '../Label'



export function FormularioDeEvento() {
    return (
        <form className="form-evento">
            <TituloFormulario>Preencha para criar um evento:</TituloFormulario>
            

            <CampoDeFormulario>
                <Label htmlFor='nome'>Qual é o nome do evento</Label>
                <CampoDeEntrada type='text' id='nome' placeholder='Sumer hev hits' />

            </CampoDeFormulario>

        </form>

    )



}