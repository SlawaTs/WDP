<template>
  <div class="top__bar">
    <div class="top__bar-title">
      Your Logo
    </div>
      <div class="top__btn">
      <button class="item-top__btn" @click="$router.push({name: 'home'})">Home</button>
      <button class="item-top__btn" @click="$router.push({name: 'about'})">About</button>
      <button class="item-top__btn" @click="$router.push({name: 'services'})">Servicing</button>
      <button class="item-top__btn" href="">Portfolio</button>
      <button class="item-top__btn" href="">Blog</button>
      <button class="item-top__btn" @click="$router.push({name: 'contact'})">Contact us</button>
      </div>
  </div>
</template>
<script>
export default {
  name: 'YourLogo',

}
</script>
<style>
.top__bar{
  height: 119px;
  width: 1400px;
  display: flex;
  margin: 0px;
  z-index: 10;

}
.top__bar-title{
  font-size: 25px;
  font-family: "OpenSans";
  color: rgb(33, 33, 33);
  font-weight: bold;
  line-height: 0.88;
  text-align: center;
  margin-top: 45px;
  margin-right: 300px;
  margin-left: 115px;
  z-index: 9;
}
.top__btn{
  margin-left: 40px ;
  margin-top: 45px;
  left: 585px;

}
.item-top__btn{
  font-size: 20px;
  border: none;
  background-color: transparent;
  margin-right: 40px;
  outline-style: none;  /*убирает границу на нажатой кнопке */
}
.item-top__btn:hover{
  text-decoration: underline; /* подчектнутый текст*/
}


</style>