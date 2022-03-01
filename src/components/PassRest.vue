<template>
<div class="body">
    <div class="first pt-3 text-center">
        <div class="">
            <div class="  "><img src="logo.svg"></div>
            <div class="mt-2">
                <h4 class="P-0">Forgot Password</h4>
            </div>
        </div>
    </div>
    <div class="second ">
        <div class="wBody">
            <div class="img text-center">
                <img src="Forgot password-rafiki 1.svg">
            </div>
            <div class="img text-center p-4">
                <span>If you have lost your password or wish to rest it, click on button below</span><br/>
                 <div class="btn  pt-4">
                    <div  class=" ">
                        <button v-b-modal.modal-multi-1 class="btn py-2" style="background: #20618c; border-radius: 5px; color: #fff; height:100%; width: 100%" size="lg" @click="rest" type="submit"><a href="">Get Started</a></button>
                    </div>
                </div>
            </div>
             

            <div class="text-center" style=""><span>If you did not request a password reset you can safely  ignore this mail... </span>
              
               
            </div>
        </div>
    </div>
    <div class="third text-center" style="margin-top:30px; color:#a9a9a9">Copyright vlxcore2022</div>

</div>
</template>

<style scoped>
.body {
    background: #edf2f3;
    width: 100%;
    height: 100%;

}
@media (max-width: 700px) {
  .body {
    font-size: 12px;
  }

  .btn {
    font-size: 12px;
    width: 100%;
   
  }

  
}

.first {
    width: 100%;
   
}

.wBody {
   
    width: 50%;
    margin-left: 25%;
    background: #fff;
    border-radius: 10px;
    padding-bottom: 60px;

}

.second {
    width: 100%;
   

}
.btn {
    width: 30%;
   
}

.third {
    width: 100%;
    height: 20%;
}
</style>
