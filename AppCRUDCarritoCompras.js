var AppCRUDCarritoCompras = new Vue({
  el: "#app",
  data: {
    mensaje: "Elije tus productos",
    tareas: [],
    id: 0,
    nuevaTarea: "",
  },
  methods: {
    agregarTarea() {
      //console.log(this.nuevaTarea)
      this.tareas.push({
        id: this.id,
        nombre: this.nuevaTarea,
        estado: "Esperando...",
      });
      this.id++;
      this.nuevaTarea = "";
      console.log(this.tareas);
    },
    editarTarea(index) {
      //console.log('editando..'+ index)
      this.tareas[index].estado = "(Confirmado)";
    },
    eliminarTarea: function (index) {
      console.log("entra a eliminar");
      this.tareas.splice(index, 1);
    },
  },
});
