<template>
  <div class="container mx-auto">
    <BaseButton
      :title="config"
      class="mb-12 px-4 py-2 focus:outline-none"
      data-testid="addToDo"
      :config="config"
      @click="toggleBtn(config)"
    />
    <template v-if="config === 'close'">
      <FormToDo data-testid="formToDo" @formSubmitted="submitForm($event)"/>
    </template>
    <CardItem
      v-for="(todo, index) in todos"
      :todo="todo"
      :key="index"
      class="mb-2"
      @doneToDo="doneToDoItem($event)"
    />
  </div>
</template>

<script>
import CardItem from "@/components/CardItem";
import BaseButton from "@/components/BaseButton";
import FormToDo from "@/components/FormToDo";
export default {
  data() {
    return {
      todos: ["Writing A Diary", "Cooking", "Walk With Dog"],
      config: "add"
    };
  },
  components: {
    CardItem,
    BaseButton,
    FormToDo
  },
  methods: {
    toggleBtn(config) {
      if (config === "add") return (this.config = "close");
      if (config === "close") return (this.config = "add");
    },
    submitForm(todo){
      this.todos.push(todo);
    },
    doneToDoItem(todo){
      const newTodos = this.todos.filter(el => el !== todo);
      this.todos = newTodos;
    }
  }
};
</script>

<style scoped></style>
