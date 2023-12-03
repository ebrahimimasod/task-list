import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import moment from "moment-jalaali";
import { v4 as uuidv4 } from 'uuid';


export const useTaskStore = defineStore(

    'taskStore',

    () => {

        const tasks = ref([]);

        const task = ref({
            id: null,
            title: null,
            description: null,
            date: null,
            isDone: false,
        });

        function addTask() {

            tasks.value.push({
                ...task.value,

                //override task keys:
                id: uuidv4(),
                date: moment().format('jYYYY/jM/jD HH:mm'),
            });


            // localStorage.setItem('tasks', JSON.stringify(tasks.value));


            //reset task 
            task.value = {
                ...task.value,
                id: null,
                title: null,
                description: null,
                date: null,
                isDone: false,
            }

            // OR
            // task.value.id = null;
            // task.value.title = null;
            // task.value.description = null;

        }

        return {
            tasks,
            task,
            addTask,
        }

    },
    {
        persist: true,
    },
)
