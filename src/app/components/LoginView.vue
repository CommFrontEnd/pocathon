<template>
    <div class="card z-axis--3">
        <div class="card__header">
            <h1>
                <svg class="c-logo" height="4em" viewBox="0 0 20 20" preserveAspectRatio="xMinYMid">
                    <use xlink:href="#logo"></use>
                </svg>
            </h1>
        </div>
        <div class="card__content">
            <form class="form">
                <div class="form__group">
                    <div class="form__label">
                        <label>Username or Email</label>
                    </div>
                    <div class="form__field" data-error-msg="Username is required">
                        <input type="text" id="userName" class="form-control input-sm chat-input" placeholder="username" v-model.trim="userName"/>
                    </div>
                </div>
                <div class="form__group">
                    <label class="form__label">Password</label>
                    <div class="form__field" data-error-msg="Password is required">
                        <input type="password" id="userPassword" class="form-control input-sm chat-input" placeholder="password" v-model.trim="password"/>
                    </div>
                </div>
            </form>
            <div class="form__group"><a class="form__label" href="#forgottenPassword">Mot de passe oublié ?</a>
                <div class="form__group" id="forgottenPassword">
                    <div class="form__label">Email</div>
                    <div class="form__field">
                        <input type="text" placeholder="username@login.org"/>
                    </div><a class="btn" href="#">Reset my password</a>
                </div>
            </div>
        </div>
        <div class="card__footer">
            <span class="btn btn-primary btn-md" v-on:click="formIsValid">{{ login }} <i class="fa fa-sign-in"></i></span>
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

        //if (this.userName == FakeApiData.login && this.password == FakeApiData.pwd) {
        sessionStorage.setItem('user','hervelepinard');
        this.$router.push('/accounts');
        /*}
        else {
          this.error= true;
          this.message= 'Bad login or password, try again';
        }*/
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