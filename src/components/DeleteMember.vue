<template>
  <div>
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-header">
              Вы уверены?
            </div>
            <div class="modal-body">
              <button @click="close">
              Отмена
            </button>
              <button @click="deleteMem(id)">
                ОК
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
  props: {
    id: {
      type: Number
    }
  },
  methods: {
    deleteMem: function (id) {
        this.$emit("deleteMemberFunc", {
          id: id
      })
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
  height: 100px;
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

button {
  margin-top: 10px;
  margin-left: 10px;
  font-size: 18px;
}
</style>