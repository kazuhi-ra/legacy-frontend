import './mount'
import $ from 'jquery'

import { readData } from './reader'
import {
  toggleTodoList,
  toggleTodoEmpty,
  removeTodo,
  addTodo
} from './writer'

function updateAll() {
  const { count } = readData()

  // writeNextTodo(nextTodoText)
  // writeTodoCount(count)
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
