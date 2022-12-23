import React from "react";
import Select from '@mui/material/Select'
import { MenuItem, InputLabel, FormControl, Box} from "@mui/material";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import {action} from '../action/action'


const ListClass = (props)=>{

    // Oprograma não pássa como se fosse variaveis nomeadas, ele passa um objeto com os valores

    const [age, ageSet] = useState('')

    const dispatch = useDispatch()

    const handleChange = (props)=>{
        ageSet(props.target.value)
        if(['Força','Velocidade','Área'].includes(props.target.value)){
            dispatch(action.atualizar(props.target.value))
        }

    }



    return(
        <div>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id= "tipos_classe_unidade">Unidade</InputLabel>
                    <Select
                    labelId="tipos_classe_unidade"
                    id = "tipos_classe"
                    value={age}
                    label="Age"
                    onChange = {handleChange}
                    >
                        {props.elements.map((item, indice) =>(
                            <MenuItem
                                key= {indice}
                                value={item}>
                                {item}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>
        </div>
    )
}

export default ListClass