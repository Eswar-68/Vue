import { ref, provide } from "vue";
//if you use default you can import it with custom names otherwise you have to use the exact name
export default function useComposible(){
    let maxluckynumber=ref(10);
    provide("maxluckynumber", maxluckynumber);
    return{
        maxluckynumber,
    };
}