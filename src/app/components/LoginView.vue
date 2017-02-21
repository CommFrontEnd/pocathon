<template>
    <div class="row">
        <div class="col-md-offset-5 col-md-3">
            <div >
                <div class="form-login">
                    <h4>{{ welcome }}:</h4>
                    <p class="text-danger"v-if="error">{{message}}</p>
                    <input type="text" id="userName" class="form-control input-sm chat-input" placeholder="username" v-model.trim="userName"/>
                    </br>
                    </br>
                    <input type="password" id="userPassword" class="form-control input-sm chat-input" placeholder="password" v-model.trim="password"/>
                    </br>
                    <div class="wrapper">
                        <span class="group-btn">
                            <span class="btn btn-primary btn-md" v-on:click="formIsValid">{{ login }} <i class="fa fa-sign-in"></i></span>
                        </span>
                    </div>
                </div>

            </div>
        </div>
        <cartographie></cartographie>
    </div>

</template>
 <script>
 import Cartographie from './Cartographie.vue';
  export default {
    name: 'formLogin',
    props: [],
    components: {
        Cartographie
    },
    methods: {
      formIsValid: function() {
        var FakeApiData = {login:'test1', pwd:'test1'};

        if (this.userName == FakeApiData.login && this.password == FakeApiData.pwd) {
          this.$router.push('/accounts');
        }
        else {
          this.error= true;
          this.message= 'Bad login or password, try again';
        }
      }
    },
    data () {
      return {
        welcome : this.$t('login.welcome'),
        login : this.$t('login.login'),
        userName: 'username',
        password: 'password',
        error: false,
        message: ''
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