// import produce from 'immer';
import { debugForm } from '../../helpers/index';
import produce from "immer"
import {api} from '../../helpers/apiCrudZustand'

function effects(set, get) {
const {list, saveForm, remove } = api('/comments');

return{
        draft(fn) { set(produce(fn)) },
        setkv(key, value){ set({ [key]: value }) },
        async fetchList(){
            this.loading(true);
            const resp  = await list().catch((error)=> {
                set({error: error.message})
                this.loading(false);
            });
            set({ loading: false, comments: resp });
            // this.draft( state=>{
            //     state.comments = resp;
            //     state.loading = false
            // })
        },
        loading(value) {
            set({ loading: value });
        },
        saving(value) {
            set({ saving: value });
        },
        async handleSubmit({save, event, formRef}) {
            event.preventDefault();
            this.saving(true);
            const form = new FormData(formRef.current);
            const comments = await saveForm(form, get().comment.id, get().comments).catch((error)=> {
                set({error: error.message})
                this.saving(false);
            });
            debugForm(form);
            set({
                comments,
                saving: false,
                modalShow: false,
            })
        },
        async handleRemove(id){
            this.loading(true);
            const resp = window.confirm("¿Are you sure?");
            let comments = get().comments;
            if (resp) {
                comments = await remove(id, comments ).catch((error)=> {
                    set({error: error.message})
                    this.loading(false);
                });
            }
            set({
                loading: false,
                comments,
            })
        },
        handleModalClose  () { 
            set({
                modalShow: false
            })
        },
        handleModalShow(comment){
            set({
                error: '',
                modalShow: true,
                comment: comment ?comment :get().comment
            })
        },
    }
}

export default effects;