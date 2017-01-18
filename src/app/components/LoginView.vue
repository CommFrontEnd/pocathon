<template>
 <div class="container">
    <div class="row">
        <div class="col-md-offset-5 col-md-3">
            <div class="form-login">
            <h4>Bienvenue, pour continuer merci  de vous identifer:</h4>
            <input type="text" id="userName" class="form-control input-sm chat-input" placeholder="username" v-model.trim="userName"/>
            </br>
            </br>
            <input type="password" id="userPassword" class="form-control input-sm chat-input" placeholder="password" v-model.trim="password"/>
            </br>
            <div class="wrapper">
            <span class="group-btn">     
                <span class="btn btn-primary btn-md" v-on:click="formIsValid">login <i class="fa fa-sign-in"></i></span>
            </span>
            </div>
            </div>
        
        </div>
    </div>
</div>
    </template>
 <script>
  export default {
    name: 'formLogin',
    methods: {
      formIsValid: function() {
        var FakeApiData = {login:'test1', pwd:'test1'};

        if (this.userName == FakeApiData.login &&
         this.password == FakeApiData.pwd) {
          return alert("U are connected!");
        }
        return alert("failed! try again!");
      }
    },
    data () {
      return {
        userName: 'username',
        password: 'password'
      }
    }

  }


  </script>

  <style>
    .form-login {
      background-color: #EDEDED;
      padding-top: 10px;
      padding-bottom: 20px;
      padding-left: 20px;
      padding-right: 20px;
      border-radius: 15px;
      border-color: #d2d2d2;
      border-width: 5px;
      box-shadow: 0 1px 0 #cfcfcf;
    }

    .container-login {
      width: 70% !important;
    }
  </style>