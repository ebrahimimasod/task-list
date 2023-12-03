<script setup>

import { ref } from "vue";
import MainLayout from "@/layouts/Main/index.vue"
import Sidebar from "@/components/Sidebar/index.vue"
import PlusIcon from "@/components/Icons/plus.vue"
import Button from "@/components/Button/index.vue"
import Modal from "@/components/Modal/index.vue"
import Input from "@/components/Input/index.vue"
import Textarea from "@/components/Textarea/index.vue"
import { useTaskStore } from "@/stores/taskStore.js"



const openModal = ref(false);

const taskStore = useTaskStore();




function addTask() {
    taskStore.addTask();
    openModal.value = false;
}




</script>

<template>
    <MainLayout>
        <div class="container h-screen">
            <div class="bg-white  dark:bg-gray-900 rounded-lg shadow-lg p-4 my-4 min-h-[500px]">
                <div class="grid gap-4 grid-cols-12">
                    <div class="col-start-1 col-end-4">
                        <Sidebar :tasks="taskStore.tasks" />
                    </div>

                    <div class="col-start-4 col-end-13 ">
                        <div class="h-full bg-gray-100 rounded-lg flex items-center justify-center flex-col">


                            <Button
                                @click="openModal = true"
                                class="flex items-center justify-center"
                            >
                                <PlusIcon class="ml-2 !fill-white" />
                                <span>
                                    افزودن تسک جدید
                                </span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <Modal v-model="openModal">
            <div class="p-8 flex items-center justify-start flex-col">
                <Input
                    class="mb-10"
                    v-model="taskStore.task.title"
                    placeholder="عنوان تسک خود را وارد کنید"
                    type="text"
                    label="عنوان تسک"
                />
                <Textarea
                    class="mb-4"
                    v-model="taskStore.task.description"
                    label="توضیحات تسک"
                />

                <Button
                    @click="addTask"
                    class="w-full mt-10"
                >
                    ذخیره تسک
                </Button>


            </div>
        </Modal>

    </MainLayout>
</template>