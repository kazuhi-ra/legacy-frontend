<template>
  <div>
    <button id="addTodo" @click="addTodo">タスクを追加する</button>
    <todo-list
      :visible="visible"
      :todoList="todoList"
      @updateTodo="updateTodo"
      @removeTodo="removeTodo"
    />
    <todo-empty :visible="!visible" />
    <div>
      <next-todo next-todo-text="nextTodoText" />
      <todo-count :count="count" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import NextTodo from './NextTodo.vue'
import TodoCount from './TodoCount.vue'
import TodoEmpty from './TodoEmpty.vue'
import TodoList from './TodoList.vue'

import store, { mutations, Todo } from './Store'

export default Vue.extend({
  components: { TodoList, TodoEmpty, NextTodo, TodoCount },
  computed: {
    todoList(): Todo[] {
      return store.todoList
    },
    nextTodoText(): string {
      return store.todoList.length > 0 ? store.todoList[0].todo : '(未登録)'
    },
    count(): number {
      return store.todoList.length
    },
    visible(): boolean {
      return this.count > 0
    },
  },
  methods: {
    updateTodo(payload: { index: number, value: string }) {
      mutations.updateTodo(payload.index, payload.value)
    },
    addTodo() {
      mutations.addTodo()
    },
    removeTodo(payload: { index: number }) {
      mutations.removeTodo(payload.index)
    }
  }
})
</script>

<style scoped>
#addTodo {
  font-size: 1.2rem;
}
</style>
