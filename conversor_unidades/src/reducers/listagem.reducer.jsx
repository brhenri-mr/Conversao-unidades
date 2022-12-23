import { actionTypes} from "../const/actions";
import { listValue } from "../const/listValue";

const INITIAL_STATE = {
    lista: []
}

const reducers = (state=INITIAL_STATE, action) =>{
    console.log(action.type)
    switch (action.type){
        case actionTypes.TIPO_FORCA:
            return {lista: listValue.Forca}
        case actionTypes.TIPO_AREA:
            return {lista: listValue.Area}
        case actionTypes.TIPO_VELOCIDADE:
            return {lista: listValue.Velocidade}
        default:
            return {lista:[]}
    }
}

export {reducers}

