
export default {
  state: {
    todos: [{
      'id': 1,
      'deleted': true,
      'title': 'delectus aut autem',
      'tasks': [{title: 'quis ut nam facilis et officia qui вапыпыпы вапвывававаыааваыва ываыва ыва ываыва ыв аыва ыва ыва ываы аыва ыыва ыв апавпвапа вап вап вапвап ввапв вапв аапвапв  ваппавапвы ввввв а пвпавп   вап вапвап вап в', completed: false}, {title: 'fggfgf', completed: false}, {title: 'ffffffffffff', completed: false}]
    }, {
      'userId': 1,
      'id': 2,
      'deleted': true,
      'title': 'quis ut nam facilis et officia qui',
      'completed': false
    }, {
      'userId': 1,
      'id': 3,
      'deleted': true,
      'title': 'fugiat veniam minus',
      'completed': false
    }, {
      'userId': 1,
      'id': 4,
      'deleted': true,
      'title': 'et porro tempora',
      'completed': true
    }, {
      'userId': 1,
      'id': 5,
      'deleted': true,
      'title': 'laboriosam mollitia et enim quasi adipisci quia provident illum',
      'completed': false
    },
    {
      'userId': 1,
      'id': 6,
      'deleted': true,
      'title': 'qui ullam ratione quibusdam voluptatem quia omnis',
      'completed': false
    },
    {
      'id': 500,
      'title': 'illo expedita consequatur quia in'
    }]
  },
  mutations: {
    deleteTodo (state, payload) {
      state.todos.splice(payload, 1)
    },
    saveTodo (state, payload) {
      state.todos.forEach(function (item, i, arr) {
        if (payload.id === item.id) {
          state.todos.splice(i, 1)
          if (i - 1 <= 0) {
            state.todos.splice(i - 1, 0, payload)
          } else {
            state.todos.splice(0, 0, payload)
          }
        }
      })
    }
  },
  actions: {
    deleteTodo ({commit}, payload) {
      commit('deleteTodo', payload)
    },
    saveTodo ({commit}, payload) {
      commit('saveTodo', payload)
    }
  },
  getters: {
    todos (state) {
      return state.todos
    },
    todoId (state) {
      if (state.todos.length > 1) {
        return state.todos[state.todos.length - 2].id
      }
      return 0
    }
  }
}
