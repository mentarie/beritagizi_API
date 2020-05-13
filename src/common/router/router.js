import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from '../../app/landing-page';
import NewsPage from '../../app/news-page'
import KmsPage from '../../app/kms-page'
import RegisterPage from '../../app/register-page'
import SigninPage from '../../app/signin-page'
class Router extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={LandingPage}/>
                <Route path="/news" component={NewsPage}/>
                <Route path="/kms" component={KmsPage} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/signin" component={SigninPage} />
            </Switch>
        );
    }
}
export default Router;