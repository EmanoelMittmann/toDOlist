import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Server, Model, Response } from 'miragejs'

new Server({

  models: {
    task: Model,
  },
  logging:false,

  seeds(server) {
    server.db.loadData({
      task: [
        { title: "Work", status: "Pendente", description: "tomorrow, I work full-time" },
        { title: "Trabalhando", status: "Pendente", description: "tomorrow, I work full-time" },
        { title: "Caminhando", status: "Fazendo", description: "tomorrow, I work full-time" },
        { title: "Refazendo", status: "Pendente", description: "tomorrow, I work full-time" },
        { title: "iniciando", status: "Fazendo", description: "tomorrow, I work full-time" },
        { title: "Conquistando", status: "Pendente", description: "tomorrow, I work full-time" },
        { title: "Naturalizando", status: "Fazendo", description: "tomorrow, I work full-time" },
        { title: "Constância", status: "Fazendo", description: "tomorrow, I work full-time" },
        { title: "Maquiavelico", status: "Pendente", description: "tomorrow, I work full-time" },
      ],
      users: [
        { id: 1, email: "Admin@gmail.com", password: "12345678" }
      ]
    })
  },

  routes() {

    this.post('/users', (schema, request) => {
      const {email, password} = JSON.parse(request.requestBody)

      if(email === schema.db.users[0].email && password === schema.db.users[0].password){
        return new Response(201, {some:"header"}, {message: ["Usuario Autenticado com sucesso"]})
      }
      return new Response(400 , {some:"header"}, {errors: ["Existe campos inválidos"]})

    })

    this.get('/tasks/:page/:limit', function (schema, request) {
      let tasks = schema.db.task
      let page = parseInt(request.params.page)
      let limit = parseInt(request.params.limit)
      let start = page * limit
      let end = start + limit
      let filtered = tasks.slice(start, end)

      return {
        task: filtered
      }
    })

    this.get('/task/:id', (schema, request) => {
      let id = request.params.id
      return schema.db.task.find(id)
    })

    this.get('/tasksStatus/:status', (schema, request) => {
      const requestStatus = request.params.status

      return schema.db.task.filter(sts => sts.status === requestStatus)
    })

    this.get('/tasks/:title', (schema, request) => {
      const titleFiltered = request.params.title

      return schema.db.task.filter(character => character.title.toLowerCase().includes(titleFiltered))
    })

    this.put('/tasks/:id', function (schema, request) {
      let id = request.params.id
      let attrs = JSON.parse(request.requestBody)
      return schema.db.task.update(id, attrs)
    })

    this.post('/tasks', function (schema, request) {
      const data = JSON.parse(request.requestBody)
      return schema.db.task.insert(data)
    })
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
