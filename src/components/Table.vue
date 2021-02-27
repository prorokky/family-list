<template>
  <div class="family">
    <table>
      <tbody>
      <tr>
        <th scope="col">ФИО</th>
        <th scope="col">Дата рождения</th>
      </tr>
      <tr v-for="member of filteredMembers">
        <td>
          {{ member.name }}
          <router-link to="{path: '/info'}">
            <button class="info">i</button>
          </router-link>
          <button class="delete"
                  @click="deleteMember(member.id)">&times;
          </button>
        </td>
        <td>{{ member.birthDate }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Table",
  props: {
    members: {
      type: Array
    },
    filteredMembers: {
      type: Array
    }
  },
  methods: {
    deleteMember: function (id) {
      this.$emit("deleteMember", id)
    }
  }
}
</script>

<style scoped>
.family {
  grid-area: family;
  margin-top: 20px;
}

table {
  border: 1px solid #ccc;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
}

thead {
  border: none;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

tr {
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  padding: .35em;
}

th, td {
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
</style>