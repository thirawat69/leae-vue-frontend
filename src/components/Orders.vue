<template>
    <div class="orders">
        <h3>Order</h3>

        <div class="order-list">
          <div 
            class="list" 
            v-for="list in $store.state.orderList " 
            :key="list.name"
          >
            <p>{{ list.name }}</p>
            <p>{{ list.pricePerUnit }}</p>
            <p>x{{ list.quantity }}</p>
            <p>{{ list.quantity * list.pricePerUnit }}</p>
            <button class="btn" style="background-color: #B00020; color: white" @click="$store.dispatch('removeOrder',list.id)" >
            x
            </button>
          </div>
        </div>

        <div class="total">
          <p>Total</p>
          <p>{{ total }}</p>
        </div>

        <div class="button-group">
          <button class="btn" style="background-color: #5cb85c; color: white"
          @click="checkOut">check out</button>
        </div>
      </div>
</template>

<style scoped>
.orders{
  display: grid;
  grid-template-rows: auto 1fr auto 50px;
  gap: 10px;
  /* align-items: center; */
  margin-left: auto;
  min-width: 400px;
  padding: 10px;
  background-color:rgb(228, 228,228);
  color: black;
}

.total {
  display: flex;
  font-weight: bold;
  font-size: 20px;
}

.total > p {
  margin: 0;
}

.total > :last-child {
  margin-left: auto;
}

.button-group {
  display: flex;
}
.button-group > button {
  flex-grow: 1;
}

.orders >h3{
  margin: 0;
}

.order-list {
  overflow-y : auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.list {
  display: grid;
  align-items: center;
  grid-template-columns:130px 50px 50px 1fr 50px auto ;
  gap: 10px;
}

.list > p {
  margin: 0;
}

.list > p:not(:first-child) {
  text-align: right;
}

</style>

<script>
export default {
  props: ["total"],

  methods: {
    checkOut() {
      const history = this.$store.state.orderList.map((e) => ({
          id: e.id,
          name: e.name,
          total: e.quantity * e.pricePerUnit,
      }));
      this.$axios.post("http://localhost:3000/history", history)
      this.$store.commit("clearOrderList")

      console.log(history);
    }
  }

};

</script>