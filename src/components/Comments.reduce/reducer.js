// import produce from 'immer';
import { debugForm } from '../../helpers/index';

export const reducer = (state) => {
     return {
        //Only curry functions:::::
        handleSubmit: ({save, event, formRef}) => {
            event.preventDefault();
            const form = new FormData(formRef.current);
            save(form, state.comment.id);
            debugForm(form);
            return { show : false }
        },
        handleDelete: ({remove,id})=>{
            const resp = window.confirm("¿Está seguro?");
            if (resp) {
                remove(id);
            }
            
        },
        handleClose : () => ({ show: false }),
        handleShow : (comment) => {
            console.log(comment)
            return { show : true, comment}
        },
        set: (key, value) => ({ [key]: value }),
    };
};

export const initialState = () => {
    return {
        show: false,
        comment:{
            id: 0,
            title:'',
            body: ''
        }
    };
};
