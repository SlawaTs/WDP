<template>
<div class="about">
  <div class="adout__body" >
     <div class="about__title-title">About Us</div>
     <div class="about__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</div>
    </div>
  <div class="about__row">
    <div class="about__colump">
      <div class="item-about">
        <div class="item-about__icon"><img src="../assets/images/about/1.jpg"></div>
       <div class="item-about__title">Awesome Icons</div>
       <div class="item-about__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</div>
      </div>
      </div>
    <div class="about__colump">
      <div class="item-about">
        <div class="item-about__icon"><img src="../assets/images/about/2.jpg"></div>
        <div class="item-about__title">One Page</div>
        <div class="item-about__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor </div>
      </div>
    </div>
    <div class="about__colump">
      <div class="item-about">
        <div class="item-about__icon"><img src="../assets/images/about/3.jpg"></div>
        <div class="item-about__title">Fully Responsive</div>
        <div class="item-about__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</div>
      </div>
    </div>
  </div>

</div>
</template>
<style>
.about{
  width: 1400px;
  height: 547px;
  margin-top: 125px;

}
.about__title-title{
  font-size: 30px;
  font-family: "OpenSans";
  font-weight: bold;
  line-height: 0.733;
  text-align: center;
  letter-spacing: 1px;

}
.about__text{
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
.about__row{
  display: flex;
  margin:0px 45px;

}
.about__colump{
  flex: 0 0 33.3%;
  width: 370px;
  height: 330px;
  padding-top: 4px;
}
.item-about__icon{
  display: flex;
  align-items: center;
  justify-content: center;
}
.item-about__title{
  font-size: 20px;
  font-family: "OpenSans";
  line-height: 1.1;
  text-align: center;
  margin-top: 41px;
 }
.item-about__text{
  font-size: 15px;
  font-family: "OpenSans";
  line-height: 1.467;
  text-align: center;
  width: 240px;
  margin: 22px 90px;
}
.about__colump:hover{
  background-color: #d6b3b3;
}
</style>