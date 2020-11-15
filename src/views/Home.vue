<template>
  <div class="layout">
    <div class="main">
      <Products />
      <Orders :total="getTotal"  />
    </div>
  </div>
</template>

<style scoped>
.main{
  display: flex;
  flex-grow: 1;
  max-height: 100vh;
}

</style>

<script>
import Orders from "@/components/Orders.vue";
import Products from "@/components/Products.vue";

export default {

  components: {
    Orders,
    Products,
  },

  name: 'Home',
  data() {
    return {
      total:0,
      orderList: [
        // {
        //   name:"ยาสีฟันคอลเกต",
        //   quantity: 1,
        //   pricePerUnit: 10
        // },
        // {
        //   name:"สบู่วิเศษ",
        //   quantity: 1,
        //   pricePerUnit: 20
        // },
        // {
        //   name:"วิเศษ",
        //   quantity: 1,
        //   pricePerUnit: 30
        // },
        // {
        //   name:"จังเล้ย",
        //   quantity: 1,
        //   pricePerUnit: 40
        // },
      ]
    };
  },

  computed: {
    getTotal() {
      const total =  this.$store.state.orderList.reduce(
      (prev, current) => prev + current.quantity * current.pricePerUnit,0
      );

      return new Intl.NumberFormat("th-TH" ,{
        style: "currency",
        currency: "THB"
      }).format(total);
    },
  },

  mounted() {
    console.log(this.$axios);
  }
}

</script>
