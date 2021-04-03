<template>
  <div class="contact">
    <div class="contact__title">Contact Us</div>
    <div class="contact__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</div>
    <div class="contact__row">
      <div class="contact__colump">
        <div class="item-contact">
         <div class="item-contact__icon">
           <img src="../assets/images/contacts/2.png">
         </div>
         <div class="item-contact__title">Nobinagar savar,Dhaka Bangladesh</div>
        </div>
      </div>
      <div class="contact__colump">
        <div class="item-contact">
          <div class="item-contact__icon">
            <img src="../assets/images/contacts/3.png">
          </div>
          <div class="item-contact__title"> +8801743331996 +8801928737807</div>
       </div>
      </div>
      <div class="contact__colump">
        <div class="item-contact">
          <div class="item-contact__icon">
            <img src="../assets/images/contacts/4.png">
          </div>
         <div class="item-contact__title">quickmasud@gmail.com quickmasud@yahoo.com</div>
        </div>
      </div>
    </div>
    <div class="contact__letter">
      <div class="line-contact">
        <div class="line-contact__names">
         <input class="line-contact__name" type="text" placeholder="Your NAME" >
        </div>
        <div class="line-contact__names">
         <input class="line-contact__name" type="text" placeholder="Your Email">
        </div>
      </div>
      <div class="line-contact__msg">
        <input class="line-contact__text" type="text" placeholder="Write Massage">
      </div>
      <div class="line-contact__btns">
        <button class="line-contact__btn" >Send</button>
      </div>

    </div>
    <div class="contact__footer"> All rights Reserved © 2017</div>
  </div>
</template>
<script>
export default {

}
</script>
<style>
.contact{
  background-image: url("../assets/images/contacts/1.jpg");
  height: 1254px;
  width: 1400px;
  color: white;
}
.contact__title{
  padding-top: 123px;
  font-size: 30px;
  font-family: "OpenSans";
  font-weight: bold;
  line-height: 0.733;
  text-align: center;
}
.contact__text{
  width: 630px;
  text-align: center;
  margin-top: 30px;
  margin-left: 385px;
  margin-bottom: 100px;
  letter-spacing: 1px;
}
.contact__row{
  display: flex;
  width: 970px;
  padding-left: 215px;
}
.contact__colump{
  flex: 10 0 33.3%;
  height: 270px;
  width: 270px;

}
.item-contact__icon{
  display: flex;
  align-items: center;
  justify-content: center;
}
.item-contact__title{
  font-size: 20px;
  text-align: center;
  letter-spacing: 2px;
  width: 270px;
  padding-top: 36px;
  padding-left: 28px;
}
.line-contact{
  
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1030px;
  margin-left: 180px;
}
.line-contact__name{
  margin: 15px;
  font-size: 20px;
  height: 85px;
  width: 470px;
  border-radius: 10px;
  padding-left: 25px;

 }
.line-contact__msg{
  margin-left: 180px;
  margin-top: 30px;
}
.line-contact__text{
  width: 1000px;
  height: 322px;
  font-size: 20px;
  border-radius: 10px;
  padding-left: 25px;

}
.line-contact__btn{
  width: 230px;
  height: 71px;
  margin-top: 40px;
  font-size: 20px;
  text-transform: uppercase;
  border-radius: 10px;
  float: right;
  margin-right: 188px;
}
.contact__footer{
  font-size: 20px;
  font-family: "Roboto";
  color: rgb(33, 33, 33);
  font-weight: bold;
  line-height: 1.1;
  text-align: center;
  background-color: white;
  height: 40px;
  padding-top: 13px;
  margin-top: 200px;
}
</style>