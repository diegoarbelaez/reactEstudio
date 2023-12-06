//LINKED LIST, CODE CHALLENGUE DE MACHEIGHT

class Nodo {
  constructor(valor) {
    this.valor = valor;
    this.siguiente = null;
  }
}

class Lista {
  constructor() {
    let cabeza = null;
    let largo = 0;
  }

  agregar(valor) {
    let nodoAgregar = new Nodo(valor);

    if (this.cabeza == null) {
      this.cabeza = nodoAgregar;
      this.largo++;
      return;
    } else {
      let nodoActual = this.cabeza;

      //Recorremos los nodos hasta encontrar el último. El último nodo es el que tiene su propiedad 'siguiente' en null
      //cuando lleguemos a esa condición, entonces, agregamos la referencia de 'siguiente' al nuevo nodo que queremos aregar
      while (nodoActual.siguiente != null) {
        nodoActual = nodoActual.siguiente;
      }
      nodoActual.siguiente = nodoAgregar;
      this.largo++;
      return;
    }
  }

  imprimir() {
    if (this.cabeza == null) {
      console.log("La lista está vacía");
    } else {
      let nodo = this.cabeza;

      while (nodo.siguiente != null) {
        console.log(nodo.valor);
        nodo = nodo.siguiente;
      }
      //Imprime el último
      console.log(nodo.valor);
    }
  }

  eliminar(posicion) {


    if (posicion === 0) {
      if (this.cabeza != null) {
        this.cabeza = this.cabeza.siguiente;
        return;
      } else {
        return "la lista está vacía";
      }
    }

    let contador = 0;
    let anterior = null;
    let nodo = this.cabeza;

    while (nodo) {
      if (contador === posicion) {
        anterior.siguiente = nodo.siguiente;
        return;
      }
      anterior = nodo;
      nodo = nodo.siguiente;
      contador++;
    }
  }

  getLargo() {
    if (this.cabeza == null) {
      return 0;
    } else {
      let contador = 1;
      let nodo = this.cabeza;

      while (nodo.siguiente != null) {
        contador++;
        nodo = nodo.siguiente;
      }
      return contador;
    }
  }

  getValor(posicion) {
    if (posicion < 0 || posicion > this.getLargo()) {
      return null;
    } else {
      if (this.cabeza == null) {
        return null;
      } else {
        let contador = 0;
        let nodo = this.cabeza;

        while (nodo.siguiente != null && contador < posicion) {
          nodo = nodo.siguiente;
          contador++;
        }
        return nodo.valor;
      }
    }
  }
}

const numeros = [1, 2, 3, 4, 5];
let lista = new Lista();

numeros.forEach((numero) => {
  lista.agregar(numero);
});

lista.imprimir();
console.log(lista.getLargo());
console.log(lista.getValor(3));
lista.eliminar(0);
lista.imprimir();
