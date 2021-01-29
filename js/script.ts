import $ from 'jquery'
import Vue from 'vue'

import './mount'
import { mutations } from './Store'

$(function () {
  $('#addTodo').on('click', function () {
    mutations.addTodo()
  })

  $('#todoList').on('input', '.todo:eq(0)', function () {})

  $('#todoList').on('click', '.delete', function () {
    mutations.removeTodo($('#todoList').find('.delete').index(this))
  })
})
