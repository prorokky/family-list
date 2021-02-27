<template>
  <div class="tr">
    <p class="td">
      {{ member.name }}
      <router-link to="{path: '/info'}">
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

<style>
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
</style>