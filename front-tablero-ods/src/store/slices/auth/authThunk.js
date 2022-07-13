import { baseApi } from "../../../api/baseApi";

export const authSignup = async ( values ) => {
    return async ( dispatch, getState ) => {
        const resp = await baseApi.post("/auth/signin", values);
    }
}

// export const deleteSystem = ( id ) => {
//     return async ( dispatch, getState ) => {
//         const resp = await systemApi.delete(`/api/system/${id}`);
//         dispatch(getSystem());
//     }
// }

// export const editSystem = ( id, values ) => {
//     return async ( dispatch, getState ) => {
//         const resp = await systemApi.put(`/api/system/${id}`, values);
//         dispatch(getSystem());
//     }
// }

// export const getOneSystem = ( id ) => {
//     return async ( dispatch, getState ) => {
//         const { data } = await systemApi.get(`/api/system/${id}`);
//         dispatch(editOneSystem({ oneSystem: data.system[0].name , editId: id, editStatus: true }));
//     }
// }