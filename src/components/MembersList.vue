<template>
  <div class="tr">
    <p class="td">
      {{ member.name }}
      <router-link :to="{ path: `info/${member.id}`, params: { id: `${member.id}` }, query: { members: members } }">
        <button class="info">i</button>
      </router-link>
      <button class="delete"
              @click="deleteMember(member.id)">&times;
      </button>
    </p>
    <p class="td">{{ member.birthDate }}</p>
  </div>
</template>

<script>
export default {
  name: "MembersList",
  props: {
    member: {
      type: Object
    },
    members: {
      type: Array
    }
  },
  methods: {
    deleteMember: function (id) {
      this.$emit("deleteMember", {
        id: id
      })
    }
  }
}
</script>

<style scoped>
.tr {
  display: table-row;
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  padding: .35em;
}

.td {
  display: table-cell;
  padding: .625em;
  text-align: center;
}

.delete {
  background: red;
  color: #fff;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  font-weight: bold;
}

.info {
  background: #0c9ad0;
  color: #fff;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  font-weight: bold;
}

button {
  height: 25px;
  margin: 5px;
  padding: 0;
  font-size: 16px;
}
</style>