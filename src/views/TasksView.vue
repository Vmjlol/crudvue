<template>
    <div id="my-app">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Main</title>
            <!-- <link rel="stylesheet" href="css.css"> -->
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com">
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" rel="stylesheet">

        </head>

        <body>


            <div>
                <b-navbar toggleable="lg" type="dark" variant="info" class="container-fluid">
                    <b-navbar-brand href="#"><i class="bi bi-yin-yang text-white fs-4 ms-3"></i></b-navbar-brand>
                    <div>
                        <form class="d-flex gap-5 me-3">
                            <i class="bi bi-plus text-white fs-3"></i>
                            <i class="bi bi-info-circle text-white fs-3"></i>
                            <i class="bi bi-bell text-white fs-3"></i>
                            <div class="circle">
                                <span class="text-white fs-3">V</span>
                            </div>
                        </form>
                    </div>

                </b-navbar>
            </div>



            <div class="d-flex" style="gap:200px;">
                <div>
                    <div class="ms-5 mt-5 leftmenu">
                        <router-link to="/tasks">
                            <p style="cursor: pointer; color:black"><i class="bi bi-inbox me-3"></i><span>Entrada</span></p>
                        </router-link><router-view></router-view>
                        <router-link to="/login">
                            <p style="cursor: pointer; color:black"><i class="bi bi-calendar4 me-3"></i><span>Tarefas de
                                    hoje</span></p>
                        </router-link><router-view></router-view>
                        <router-link to="/register">
                            <p style="cursor: pointer; color:black"><i
                                    class="bi bi-exclamation-triangle me-3"></i><span>Vencidos</span></p>
                        </router-link><router-view></router-view>
                    </div>
                </div>
                <div class="w-70 mt-5 tasklist">
                    <h4 class="fw-bold mb-5">Entrada</h4>

                    <div class="p-3 d-flex mb-3 border" v-for="task in tasks" :key="task.id">
                        <div>
                            <input type="checkbox" name="taskid" id="taskid" class="me-3">
                        </div>
                        <div class="tasks">
                            <span v-b-modal:[`edit-modal-${task.id}`] class="fs-5" style="cursor: pointer;">{{ task.titulo
                            }}</span>
                            <p class="fs-6 task-comment">{{ task.descricao }}</p>
                            <p v-if="new Date(task.data_vencimento).toLocaleDateString('pt-BR') > new Date().toLocaleDateString('pt-BR')"
                                class="data alert alert-danger"><i class="bi bi-calendar4 taskdate"></i><span>{{ new
                                    Date(task.data_vencimento).toLocaleDateString('pt-BR') }}</span></p>
                            <p v-else class="data alert alert-success"><i class="bi bi-calendar4 taskdate"></i><span
                                    id="dataVenc">{{ new Date(task.data_vencimento).toLocaleDateString('pt-BR') }}</span>
                            </p>




                            <b-modal hide-footer props="busy = true" class="modalinfo m-6" :id="`edit-modal-${task.id}`"
                                centered :title="`${prazo}`">

                                <body>
                                    <div class="conteudoModal">
                                        <div class="esquerda">
                                            <div>
                                                <input type="checkbox" name="taskid" id="taskid" class="me-3">
                                            </div>
                                            <div class="tasks">
                                                <span v-b-modal:[`edit-modal-${task.id}`] class="fs-5"
                                                    style="cursor: pointer;">{{ task.titulo
                                                    }}</span>
                                                <p class="fs-6 task-comment">{{ task.descricao }}</p>
                                            </div>
                                        </div>
                                        <div class="direita">
                                            <p>Modificado em</p>
                                            <h2><i class="bi bi-calendar4 fw-bold"></i><span>{{ task.updated_at }}</span></h2>
                                            <p>Data do vencimento em</p>
                                            <h2><i class="bi bi-calendar4 fw-bold"></i><span>{{ task.data_vencimento }}</span></h2>
                                            <p>ID da tarefa</p>
                                            <h2><span>{{ task.id }}</span></h2>
                                        </div>
                                    </div>
                                </body>
                            </b-modal>

                        </div>

                    </div>

                    <div>
                        <a href="#"><i class="bi bi-plus fs-3 ms-2"></i> <span>Criar tarefa</span> </a>
                    </div>









                </div>
            </div>






        </body>

    </div>
</template>
  
<script>
/* eslint-disable */
import axios from 'axios';
//   import moment from 'moment';
export default {
    components: {
    },

    data() {
        return {
            prazo: "No Prazo",
            tasks: [],
            modal: false,
            tasks: [],


        }



    },
    created() {

    },
    mounted() {
        axios
            .get('http://localhost/crud-tasks/public/tasks')
            .then(response => {
                this.tasks = response.data;
            })
            .catch(error => {
                console.log(error);
            });
    },
    methods: {


    },


}
</script>




<style scoped>
.conteudoModal {
    display: flex;
}

.modalinfo {
    background-color: bisque !important;
}

.bg-info {
    background-color: black !important;
    display: flex;
    justify-content: space-between;
}

body {
    background-color: white !important;
}

* {

    font-family: 'Montserrat', sans-serif;
    padding: 0px;
    margin: 0px;
    vertical-align: -webkit-baseline-middle;
}


a {
    color: gray !important;
    text-decoration: none !important;
}


.circle {
    background: #009488;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    text-align-last: center;
}

.leftmenu {
    display: flex;
    flex-direction: column;
    gap: 30px;
    font-size: 1.5rem;
    -webkit-text-stroke: .5px;
    width: max-content;
    height: 100vh;
}


.tasklist {
    width: -webkit-fill-available;
}

.task-comment {
    font-size: 10px;
    color: gray;
}

.data {
    width: 110px;
}

.center {
    align-self: center;
    margin-left: 20px;
}

p {
    margin-bottom: 0px !important;
}

.alert {
    --bs-alert-padding-x: 0 !important;
    --bs-alert-padding-y: 0 !important;
}</style>
