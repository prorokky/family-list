<template>
  <div class="field">
    <label for="rel">Список родтсвенников (несколько родственников выбрать через shift)</label>
    <p class="info-text" v-if="!editRelatives">
      {{ relatives.join(",") }}
      <button @click="$emit('edit')">Редактировать</button>
    </p>
    <p v-if="editRelatives">
      <select id="rel" v-model="editRelativesText" multiple>
        <option v-for="member in members" v-if="member.name !== editNameText">
          {{member.name}}
        </option>
      </select>
      <button @click="editRelativesFunc">Сохранить</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "EditMemberRelatives",
  props: {
    value: {
      type: Array
    },
    members: {
      type: Array
    },
    editRelatives: {
      type: Boolean
    },
    editNameText: {
      type: String
    },
    relatives: {
      type: Array
    }
  },
  data: () => {
    return {
      editRelativesText: []
    }
  },
  methods: {
    editRelativesFunc() {
      this.$emit("editRelativesFunc", {
        newRelatives: this.editRelativesText
      })
    }
  }
}
</script>

<style scoped>
.field {
  clear: both;
  text-align: right;
  line-height: 25px;
}

input {
  height: 25px;
  width: 350px;
}

select {
  height: 50px;
  width: 350px;
  margin-right: 15px;
}

label {
  float: left;
  padding-right: 10px;
  color: black;
}

.info-text {
  height: 25px;
  padding-right: 10px;
  color: black;
}

button {
  height: 25px;
  margin: 5px;
  padding: 0;
  font-size: 16px;
}
</style>