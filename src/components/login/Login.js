import React from 'react';
import  { Link } from 'react-router';

import LoginService from '../../services/LoginService';
import LoginStore from '../../stores/LoginStore';

class Login extends React.Component {

    state = {
        user : {}
    };

    goToApp = event => {
        event.preventDefault();
        const user = LoginService.findUser();
        
        LoginStore.user(user);
    }

    render() {
        var useTag = '<use xlink:href="#logo" />';
        return (
            <div className="card z-axis--3">
                <div className="card__header">
                    <h1>
                        <svg className="c-logo" height="4em" viewBox="0 0 20 20" preserveAspectRatio="xMinYMid" dangerouslySetInnerHTML={{__html: useTag }}/>
                    </h1>
                </div>
                <div className="card_content">
                    <form className="form" onSubmit={(e) => this.goToApp(e)}>

                        <div className="form__group is-invalid">
                    
                            <div className="form__label">
                                <label>Username or Email</label>
                            </div>

                            <div className="form__field" data-error-msg="Username is required">
                                <input type="text" placeholder="username@login.org" />
                            </div>

                        </div>

                        <div className="form__group">
                            <label>Password</label>
                            <div className="form__field" data-error-msg="Password is required">
                                <input type="password" placeholder="password" />
                            </div>
                        </div>

                        <Link className="btn" to={`/accounts`} >Log me In!</Link>

                    </form>
                    <div className="form__group">
                        <a href="#forgottenPassword" className="form__label">Mot de passe oublié ?</a>
                        <div className="form__group" id="forgottenPassword">
                        <div className="form__label">Email</div>
                        <div className="form__field">
                            <input type="text" placeholder="username@login.org"/>
                        </div><a className="btn" href="#">Reset my password</a>
                        </div>
                    </div>

                </div>

            </div>

        )
    }

}

export default Login;