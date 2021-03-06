import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Home from './home'
import AddRecipe from './addRecipe';
import Login from './login';
import ViewFork from './viewFork';
import Profile from './profile';
import TopRecipeList from './TopRecipeList';
import MyRecipes from './myRecipes';
import Recipes from './Recipes';
import SavedRecipes from './savedRecipes';
import Friends from './friends';
import '../dist/assets/styles';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

// TODO: remove hot module replacement for production



class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: null,
      currentRecipe: [],
      searchedRecipes: [],
      searchedVideos: [],
    };
    this.logout = this.logout.bind(this);
    this.handleSearched = this.handleSearched.bind(this);
  }

  componentDidMount(){
    this.getUsername();
  }

  getUsername () {
    var context = this;
    $.ajax({
      url: '/username',
      type: 'GET',
      contentType: 'application/json',
      success: function(data) {
        context.setState({username: data});
      },
      error: function(err) {
        console.log('ajax request to search username failed');
      }
    });
  }

  handleSearched(recipes, videos) {
    console.log('entering handle search in index.jsx');
    this.setState({
      searchedRecipes: recipes,
      searchedVideos: videos,
    });
  }

  logout() {
    var Appcontext = this;

    $.ajax({
      url:'/logout',
      type: 'GET',
      contentType: 'application/json',
      success: function(data) {
        Appcontext.getUsername();
      },
      error: function(err) {
        // console.log('unsuccessful logout');
      }
    })
  }

  render () {
    return (
      <Router>
        <div>
          <div className="group">
            <section className="floatLeft">
              <Link to="/" >
                <img className="logo" src="assets/images/forkly.png" alt="FORKLY"/>
              </Link>
              <h3 className="title username"><Login username={this.state.username}/></h3>
            </section>
            <section className="floatRight">
              <nav>
                {this.state.username &&
                  <div className="icon logout">
                    <Link to="/" onClick={this.logout}><button className="logout-btn"><img className="navButton" src="assets/images/logout.png" alt="Logout"/></button></Link>
                    {/*<span><Link to="/" onClick={this.logout}><br />Logout</Link></span>*/}
                  </div>
                }
                {this.state.username &&
                  <div className="icon addRecipe">
                    <Link to="/addrecipe"><button className="addrecipe-btn"><img className="navButton" src="assets/images/addRecipe.png" alt="Add Recipe"/></button></Link>
                  </div>
                }
                {!this.state.username ? 
                  <div className="icon myForks">
                    <a href="/auth/facebook"><button className="profile-btn"><img className="navButton" src="assets/images/profile.png" alt="My Profile"/></button></a>
                    {/*<Link to='/profile'><button className="profile-btn"><img className="navButton" src="assets/images/profile.png" alt="My Profile"/></button></Link>*/}
                  </div>
                : 
                  <Link to='/profile'><button className="profile-btn-loggedin"><img className="navButton" src="assets/images/profile.png" alt="My Profile"/></button></Link>
                }
                <div className="icon home">
                  <Link to="/"><button className="home-btn"><img className="navButton" src="assets/images/home.png" alt="Home"/></button></Link>
                </div>
                <div className="icon">
                  <Link to="/toprecipes"><button className="fork-btn"><img className="navButton" src="assets/images/fork.png" alt="top rated"/></button></Link>
                  {/*<img className="navButton"
                    src="https://us.123rf.com/450wm/aquir/aquir1512/aquir151202267/49081585-top-rated-orange-round-gel-isolated-push-button.jpg?ver=68"
                    alt="Home"/>*/}
                  {/*<span><Link to="/toprecipes">Top Recipes</Link></span>*/}
                </div>
              </nav>
            </section>
          </div>
          <Route exact path="/" component={ () => (<Home
              handleSearched={this.handleSearched}
            />)}
          />
          <Route path="/addrecipe" component={AddRecipe}/>
          <Route path="/profile" component={() => <Profile user={this.state.username}/>}/>
          <Route path="/recipe" component={ViewFork}/>
          <Route path="/toprecipes" component={TopRecipeList} />
          <Route path="/myRecipes" component={MyRecipes} />
          <Route path="/savedRecipes" component={SavedRecipes} />
          <Route path="/friends" component={Friends} />
          <Route path="/recipes" component={() => (<Recipes
              recipes={this.state.searchedRecipes}
              videos={this.state.searchedVideos}
            />)}
          />
          <br />
          <br />
          <br />
          <footer>
            <span id="copyright-image">&copy;</span>
            <a id="github-link" target="_blank" href="https://github.com/hrsf72-SafeTravels/Forkly">TeamForkly</a>
          </footer>
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

// hot module replacement
if (module.hot) {
  module.hot.accept('.', () => render(App));
}

// To start, run from terminal the following...
// npm run react-dev
// npm run server-dev
