<template>
  <div class="family">
    <div class="table" v-if="members.length !== 0">
      <TableHeader />
      <MembersList v-for="member of filteredMembers" v-bind:member="member" @deleteMember="deleteMember"/>
    </div>
    <div v-else>
      <p class="empty">Список родственников пуст. Добавьте родственника.</p>
    </div>
  </div>
</template>

<script>
import MembersList from "@/components/MembersList";
import TableHeader from "@/components/TableHeader";

export default {
  name: "Table",
  components: {TableHeader, MembersList},
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

.empty {
  text-align: center;
  color: red;
  font-size: 30px;
}
</style>