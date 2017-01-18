<template>
        <div class="container">
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
                    <div class="form__group is-invalid">
                      <div class="form__label">
                        <label>Username or Email</label>
                      </div>
                      <span>test model mail: {{mail}}</span>
                      <div class="form__field" data-error-msg="Username is required">
                        <input type="text" placeholder="username@login.org" v-model="mail"/>
                      </div>
                    </div>
                    <div class="form__group">
                      <label class="form__label">Password</label>
                      <div class="form__field" data-error-msg="Password is required">
                        <input type="password" value="mySecurePassword" v-model="password"/>
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
                  <button type="button" class="btn" v-on:click="sendLogin">Log me In!</a>
                </div>
            </div>
        </div>
        <div class="floating-btn-group floating-btn-group--inverted">
          <div class="btn fa fa-globe js-localization"></div>
        </div>
        <div class="overlay js-localization-modal" aria-hidden="true">
            <div class="modal">
                <div class="btn btn-close js-close"><div class="fa fa-close"></div></div>
                <div style="width:50vw;max-width:100%;overflow:hidden;height:60vh;">
                    <div id="gmap-canvas">
                        <iframe
                            style="height:100%;width:100%;border:0;"
                            frameborder="0"
                            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBSXVSIegDwxmT3vc1AuiEUDRmunfjDP1w&q=Brooklyn+Bridge,New-York+NY&zoom=16">
                        </iframe>
                    </div><!-- AIzaSyCMZCsMSV5KhnOaKVGfxidaR60q6ZH6O9M-->
                    <style>#gmap-canvas img{max-width:none!important;background:none!important;}</style>
                </div>
            </div>
        </div>
<script>

    var vm = new Vue({
        el: '#app',
        mail: 'nothing',
        password: 'nothing'

    })

</script>
</template>