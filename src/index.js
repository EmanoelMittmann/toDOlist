import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Server, Model } from 'miragejs'

new Server({

  models: {
    task: Model,
  },

  seeds(server) {
    server.db.loadData({
      task: [
        { title: "Work", status: "pendente", description: "tomorrow, I work full-time" },
        { title: "Work", status: "pendente", description: "tomorrow, I work full-time" },
        { title: "Work", status: "pendente", description: "tomorrow, I work full-time" },
        { title: "Work", status: "pendente", description: "tomorrow, I work full-time" },
        { title: "Work", status: "pendente", description: "tomorrow, I work full-time" },
        { title: "Work", status: "pendente", description: "tomorrow, I work full-time" },
        { title: "Work", status: "pendente", description: "tomorrow, I work full-time" },
        { title: "Work", status: "pendente", description: "tomorrow, I work full-time" },
        { title: "Work", status: "pendente", description: "tomorrow, I work full-time" },
        { title: "Work", status: "pendente", description: "tomorrow, I work full-time" },

      ]

    })
  },

  routes() {
    this.get('/users', () => {
      return {
        users: [
          { "id": 1, "email": "emanoel@gmail.com", "password": "12345678" }
        ]
      }
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

    this.get('/tasks/search', (schema, request) => {
      return schema.db.task.where({ status: request.requestBody }).limit = 10
    })

    this.patch('/tasks/:id', (schema, request) => {
      let id = request.params.id
      return schema.db.task.find(id)
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
