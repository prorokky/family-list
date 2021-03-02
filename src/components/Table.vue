<template>
  <div class="family">
    <div class="table" v-if="members.length !== 0">
      <div class="tr">
        <p class="th">ФИО</p>
        <p class="th">Дата рождения (гггг-мм-дд)</p>
      </div>
      <MembersList v-for="member of filteredMembers" v-bind:member="member" v-bind:members="members" @deleteMember="deleteMember"/>
    </div>
  </div>
</template>

<script>
import MembersList from "@/components/MembersList";

export default {
  name: "Table",
  components: {MembersList},
  props: {
    members: {
      type: Array
    },
    filteredMembers: {
      type: Array
    }
  },
  methods: {
    deleteMember: function (data) {
      this.$emit("deleteMember", {
        id: data.id
      })
    }
  }
}
</script>

<style scoped>
.family {
  grid-area: family;
  margin-top: 20px;
}

.table {
  display: table;
  border: 1px solid #ccc;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
}

.tr {
  display: table-row;
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  padding: .35em;
}

.th {
  display: table-cell;
  padding: .625em;
  text-align: center;
}
</style>