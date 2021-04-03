<template>
  <div class="services">
    <div class="services__title">Our Services</div>
    <div class="services__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </div>
    <div class="services__row">
      <div class="services__colump" v-for="(item, index) in info"
           :key="index">
        <div class="item-services" >
          <div class="item-services__icon"><img src="../assets/images/services/1.jpg"></div>
          <div class="item-services__title">{{item.name}}</div>
          <div class="item-services__text">{{item.text}}</div>
          <div class="services__btn">
            <button class="item-services__btn">{{item.btn}}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      info:[
        {
          name:'Research',
          image:'../assets/services/1.jpg',
          text:'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum iti atque corrupti quos.',
          btn:'Read More'
        },
        {
          name:'Portfolio',
          image:'"../assets/services/1.jpg"',
          text:'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum iti atque corrupti quos.',
          btn:'Read More'
        },
        {
          name:'Support',
          image:'../assets/services/1.jpg',
          text:'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum iti atque corrupti quos.',
          btn:'Read More'
        },
        {
          name:'Documentation',
          image:'../assets/services/1.jpg',
          text:'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum iti atque corrupti quos.',
          btn:'Read More'
        },
        {
          name:'Development',
          image:'../assets/services/1.jpg',
          text:'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum iti atque corrupti quos.',
          btn:'Read More'
        },
        {
          name:'Design',
          image:'../assets/services/1.jpg',
          text:'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum iti atque corrupti quos.',
          btn:'Read More'
        }
      ]
    }
  },
  computed: {
       }
  }
</script>
<style>
.services{
  background-color: #e4fdf9;
  width: 1400px;
  height: 1414px;

}
.services__title{
  font-size: 30px;
  font-family: "OpenSans";
  font-weight: bold;
  line-height: 0.733;
  text-align: center;
  letter-spacing: 1px;
  padding-top: 174px;

}
.services__text{
  font-size: 15px;
  font-family: "Myriad Pro";
  line-height: 1.467;
  width: 630px;
  height: 35px;
  text-align: center;
  margin-top: 30px;
  margin-left: 385px;
  margin-bottom: 110px;
  letter-spacing: 1px;
}
.services__row{
  display: grid;
  margin:0px 115px;
  grid-template-columns: repeat(3, 370px);
  grid-column-gap: 30px;
  grid-row-gap: 33px;

}
.services__colump{

}
.item-services:hover{
  background-color: #00897b;
  color: white;
}
.item-services{
  width: 370px;
  height: 438px;
  background-color: white;
}
.item-services__icon{
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 51px;
}
.item-services__title{
  font-size: 20px;
  font-family: "OpenSans";
  line-height: 1.1;
  text-align: center;
  margin-top: 40px;
}
.item-services__text{
  font-size: 15px;
  font-family: "Myriad Pro";
  line-height: 1.667;
  text-align: center;
  width: 280px;
  margin: 22px 46px;
}
.services__btn{
  text-align: center;
  margin-top: 40px;
}
.item-services__btn{
  font-size: 20px;
  font-family: "Myriad Pro";
  line-height: 1.1;
  width: 146px;
  height: 53px;
  border: 2px solid black;
  text-transform: uppercase; /* Верхний Регистр */
  background-color: inherit;
}

</style>