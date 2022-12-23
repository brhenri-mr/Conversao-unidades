const action = {
    atualizar: codigo =>({
        type: `TIPO_${codigo.toUpperCase()}`,
        payload: codigo
    })
}
export {action}