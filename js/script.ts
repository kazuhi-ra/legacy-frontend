import $ from 'jquery'

import './mount'
import { mutations } from './Store'
import { readData } from './reader'
import {
  toggleTodoList,
  toggleTodoEmpty,
  removeTodo,
  addTodo
} from './writer'

function updateAll() {
  const { count, nextTodoText } = readData()
  mutations.updateTodoCount(count)
  mutations.updateNextTodoText(nextTodoText as string)

  toggleTodoList(count)
  toggleTodoEmpty(count)
}

$(function () {
  $('#addTodo').on('click', function () {
    addTodo()
    updateAll()
  })

  $('#todoList').on('input', '.todo:eq(0)', function () {
    updateAll()
  })

  $('#todoList').on('click', '.delete', function () {
    removeTodo(this)
    updateAll()
  })

  updateAll()
})
