<template>
<div class="col-md-8 offset-md-2">
    <div class="row mt-5">
    <div class="col-md-6">
        <h5 class="display-6">
            Liste des Formation
        </h5>
    </div>
    <div class="col-md-6 text-right">
        <button class="btn btn-primary btn-sm" @click="formShow=!formShow">Ajouter <i class="fa fa-plus" aria-hidden="true"></i></button>
    </div>
</div>
<div class="row mt-5 mx-auto" v-if="formShow">
    <div class="form-group col-md-12">
      <label for="">Formation</label>
      <input type="text"
        class="form-control"  placeholder="" v-model="mydata.formation">
    </div>
    <div class="form-check col-md-12">
      <label class="form-check-label">
        <input type="checkbox" class="form-check-input"  v-model="mydata.completed">
        Completé
      </label>
    </div>
    <button class="btn btn-success btn-block" v-if="!formEdit" @click="addFormation">Ajouter <i class="fa fa-plus"></i></button>
    <button class="btn btn-warning btn-block" v-if="formEdit" @click="editFor">Modifier <i class="fa fa-refresh"></i></button>
</div>

<div class="row mt-5 mx-auto">
    <ul class="list-group col-md-12">
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <div class="form-group col-md-12">
              <input type="text"
                class="form-control" name="" v-model="recherche" placeholder="Recherche...">
            </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center"
        v-for="res in resultat" :key="res.id">
            <button class="btn btn-warning btn-sm" @click="edit(res)"><i class="fa fa-pencil"></i></button>
            {{res.formation}}
            <span class="badge badge-primary badge-pill"
            v-bind:class="{'badge-primary':res.completed,'badge-danger':!res.completed}" @click="toggelCompleted(res)">
                <i class="fa" v-bind:class="{  'fa-thumbs-up': res.completed,
                 'fa-thumbs-down': !res.completed }"></i></span>
            <button class="btn btn-danger btn-sm" @click="DeleteFormation(res)"><i class="fa fa-trash"></i></button>
        </li>

    </ul>
</div>

</div>

</template>

<script>
import {deleteFormation} from '../helpers/formation.js';
import {updateCompleted}from '../helpers/formation.js';
import {add} from '../helpers/formation.js';
import {edit} from '../helpers/formation.js';
export default {
data(){
    return {
        recherche:'',
        mydata:{
            formation:'',
            completed:false
        },
        formationss:[],
        formShow:false,
        formEdit:false,

    }
},
mounted(){
this.$store.dispatch('formation');
},
methods:{
    initForm(){
        this.mydata={
            formation:'',
            completed:false
        }
        this.formShow=false
        this.formEdit=false
    },
    addFormation(){
        add(this.mydata).then(res=>{
            this.$store.commit('addRow',this.mydata);
            this.initForm();
        })
        .catch(error=>{
            console.log(error)
        })
    },
    editFor(){
        edit(this.mydata).then(res=>{
            this.initForm();
        })
        .catch(error=>{
            console.log(error)
        })
    },
    toggelCompleted(res){
        res.completed=!res.completed
        updateCompleted(res).then(response=>{

        })
        .catch(error=>{

        })
    },
edit(data){
    this.formShow=true;
    this.formEdit=true;
    this.mydata=data;
},
DeleteFormation(data){
    deleteFormation(data)
    .then(res=>{
        this.$store.commit('DeleteFormation',data);
         console.log(data)
    })
    .catch(error=>{
        console.log(error)
    })

},
editFormation(data){
    this.$store.commit('editFormation',data);
}
},
computed:{
formations(){
    return this.$store.getters.getFormation;
},
resultat(){
return this.formations.filter((data)=>{
            return data.formation.match(this.recherche);
        })
}

}
}
</script>

<style>

</style>
