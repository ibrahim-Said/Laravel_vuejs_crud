import { getAllFormation } from './helpers/formation'
export default {
    state: {
        formations: []
    },
    getters: {
        getFormation(state) {
            return state.formations;
        }
    },
    mutations: {
        updateFormation(state, data) {
            this.state.formations = data.data;
            //console.log(data.data)
        },
        DeleteFormation(state, data) {
            state.formations.splice(state.formations.indexOf(data), 1);
        },
        addRow(state, data) {
            state.formations.push(data);
        }

    },
    actions: {
        formation(context) {
            getAllFormation().then(data => {
                context.commit('updateFormation', data);
            }).catch(error => {
                console.log(error);
            })
        }
    }

}