class Tarefas {
  constructor() {
    this.lista = [];
  }

  adicionar(descricao) {
    this.lista.push({descricao, concluida: false})
  }

  remover(indice) {
    this.lista.splice(indice)
  }

  todas() {
    return this.lista;
  }

  marcarConcluida(indice) {
    this.lista[indice] = {...this.lista[indice], concluida: true}
  }
}

module.exports = Tarefas;
