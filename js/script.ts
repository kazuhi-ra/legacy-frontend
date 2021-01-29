import $ from 'jquery'
import Vue from 'vue'

import './mount'
import { mutations } from './Store'
import { readData } from './reader'

function updateAll() {
  const { count, nextTodoText } = readData()

  mutations.updateTodoCount(count)
  mutations.updateNextTodoText(nextTodoText as string)
}

$(function () {
  $('#addTodo').on('click', function () {
    mutations.addTodo()
    Vue.nextTick(() => updateAll())
  })

  $('#todoList').on('input', '.todo:eq(0)', function () {
    Vue.nextTick(() => updateAll())
  })

  $('#todoList').on('click', '.delete', function () {
    mutations.removeTodo($('#todoList').find('.delete').index(this))
    Vue.nextTick(() => updateAll())
  })

  updateAll()
})
