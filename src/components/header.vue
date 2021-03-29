<template>
<div>
  <img src="../assets/header/headerImage.jpg">
  <div class="home-header">
  <h1 class="home-heading">
    Web development project
  </h1>
  <h3 class="home-description">
    Very suitable to support all web development projects
  </h3>
    <div  class="home-buttons" >
      <button class="home-button"
              @click="$router.push({name: 'services'})" >
       Our services
       </button>
      <button class="home-button" >
       Hire is now
      </button>
    </div>
  </div>

</div>
</template>
<script>
export default{
data(){
  return{

  }
},
computed: {
  // activeBtn(){
  //   return
  //   this.previousElementSibling.style.background = '#00897b'
  // }
}
}
</script>
<style>
.home-header{
  height: 656px;
  width: 1400px;
  color: #ffffff;
  position: absolute;
  top: 120px;
}
.home-heading{

  font-size: 60px;
  font-family: "OpenSans";
  line-height: 0.367;
  letter-spacing: 7px;
  text-align: center;
  position: absolute;
  left: 290px;
  top: 170px;
  z-index: 14;
}
.home-description{
  font-size: 22px;
  font-family: "OpenSans";
   line-height: 1;
  letter-spacing: 2px;
  text-align: center;
  position: absolute;
  left: 392.937px;
  top: 245px;
  z-index: 15;
}
.home-buttons{
  height: 94px;
  width: 484px;
  margin-top: 396px;
  margin-left: 453px;
}
.home-button{
  font-size: 20px;
  height: 70px;
  width: 218px;
  color: white;
  background-color: transparent ;
  text-transform: uppercase;
  border: 3px solid white ;
  margin: 12px;
  z-index: 16;
  outline-style: none;   /*убирает границу на нажатой кнопке */

}
.home-button:hover{         /* меняет цвет при наведании */
  background-color: #00897b;
  border: none;
}

</style>