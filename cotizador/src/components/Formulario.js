import React from 'react';
import styled from '@emotion/styled';

const Campo = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;

const Label = styled.label`
    flex: 0 0 100px;
`;

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;/*Esto quita la apariencia natural del select para que tome las que le mandamos desde aqui*/ 
`;

const InputRadio = styled.input`
    margin: 0 1rem;
`;

const Formulario = () => {
    return ( 
        
        <form>
            <Campo>
                <Label>Marca</Label>
                <Select>
                    <option value="">--Seleccione--</option>
                    <option value="eu">Europeo</option>
                    <option value="am">Americano</option>
                    <option value="as">Asiatico</option>
                </Select>
            </Campo>

            <Campo>
                <Label>Año</Label>
                <Select>
                    <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Campo>

            <Campo>
                <Label>Plan</Label>
                <InputRadio 
                    type="radio"
                    name="plan"
                    value="basico"
                /> Básico

                <InputRadio 
                    type="radio"
                    name="plan"
                    value="completo"
                /> Completo
            </Campo>

            <button>Cotizar</button>
        </form>


     );
}
 
export default Formulario;