<template>
  <div>
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-header">
              Добавление человека
            </div>
            <div class="modal-body">
              <form class="addForm">
                <label>ФИО<input type="text" v-model="fio"></label><br>
                <label>Дата рождения<input type="date" min="1900-01-01" max="2021-01-01" v-model="birth"></label>
              </form>
              <button @click="add">
                Создать
              </button>
              <button @click="close">
                Закрыть
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "AddMemberModal",
  data: function () {
    return {
      fio: "",
      birth: ""
    }
  },
  methods: {
    add: function () {
      if (!this.fio) {
        alert("Введите имя")
      } else if (!this.birth) {
        alert("Введите дату")
      } else {
        this.$emit("add", {
          name: this.fio,
          birthDate: this.birth
        })
      }
    },
    close: function() {
      this.$emit("close")
    }
  }
}
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  height: 200px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header {
  height: 15px;
}

.modal-body {
  margin: 15px 0;
}

form {
  text-align: left;
}

form input {
  height: 25px;
  width: 100%;
}

form label {
  padding: 5px;
}

button {
  margin-top: 10px;
  float: right;
}
</style>