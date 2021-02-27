<template>
  <div class="tr">
    <p class="th">ФИО</p>
    <p class="th">Дата рождения</p>
  </div>
</template>

<script>
export default {
name: "TableHeader"
}
</script>

<style >
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