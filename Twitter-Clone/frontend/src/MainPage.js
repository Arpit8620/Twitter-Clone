import './App.css';
import {Route,Switch} from 'react-router-dom';
import twitlist from './twitterelements/twitlist';
import Signup from './twitterelements/Signup';
import login from './twitterelements/login';
import newtweet from './twitterelements/newtweet';
import mytweets from './twitterelements/mytweets';
import singlecomment from './twitterelements/singlecomment';
import chatting from './twitterelements/chatting';
import updateprofile from './twitterelements/updateprofile';

function MainPage() {
  return (
    <div>
      <Switch>
        <Route exact path="/twitter" component={twitlist} />
        <Route exact path="/twitter/:_id/mytweet" component={mytweets} />
        <Route exact path='/twitter/:_id/newtweets' component={newtweet} />
        <Route exact path="/twitter/tweet/:tweetid/comment" component={singlecomment} />
        <Route exact path='/' component={Signup} />
        <Route exact path='/login' component={login} />
        <Route exact path='/twitter/chat' component={chatting} />
        <Route exact path="/twitter/:_id/userprofile" component={updateprofile} />
      </Switch>
    </div>
  );
}

export default MainPage;