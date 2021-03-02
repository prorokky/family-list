<template>
    <div class="header">
      <div class="search">
        <input type="text" placeholder="Поиск" v-bind:value="value" v-on:input="$emit('input', $event.target.value)"/>
      </div>
      <div class="add">
        <button @click="addMemberModal = true">Добавить человека</button>
      </div>
      <AddMemberModal v-if="addMemberModal" @add="add" @close="addMemberModal = false"/>
    </div>
</template>

<script>
import AddMemberModal from "@/components/AddMemberModal";

export default {
  name: "Header",
  components: {
    AddMemberModal: AddMemberModal
  },
  props: {
    value: {
      type: String
    }
  },
  data: () => {
    return {
      addMemberModal: false
    }
  },
  methods: {
    add: function(data){
      this.$emit('addMember', {
        name: data.name,
        birthDate: data.birthDate
      })
      this.addMemberModal = false
    }
  }
}
</script>

<style scoped>
.header {
  display: grid;
  grid-area: header;
  grid-template-areas: "search add";
  grid-template-columns: 1fr 1fr;
  text-align: center;
  padding: 5px;
}

.search {
  grid-area: search;
}

.add {
  grid-area: add;
}

input {
  height: 40px;
  margin: 5px;
  padding: 0;
  width: 50%;
  font-size: 18px;
}

button {
  height: 40px;
  margin: 5px;
  padding: 0;
  font-size: 16px;
  width: 30%;
}
</style>
