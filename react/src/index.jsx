import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Home from './home.jsx'
import AddRecipe from './addRecipe.jsx';
import Login from './login.jsx';
import ViewFork from './viewFork.js';
import ViewRecipes from './viewRecipes.jsx';
import TopRecipes from './TopRecipes.jsx';
import RecipeFromSearch from './RecipeFromSearch.jsx';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: null,
      currentRecipe: []
    };
    this.logout = this.logout.bind(this);
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
              <img className="logo" src="assets/images/forkly.png" alt="FORKLY"/>
              <h3 className="title username"><Login username={this.state.username}/></h3>
            </section>
            <section className="floatRight">
              <nav>
                <div className="icon logout">
                  <img className="navButton" src="assets/images/logout.png" alt="Logout"/>
                  <span><Link to="/" onClick={this.logout}><br />Logout</Link></span>
                </div>
                <div className="icon addRecipe">
                  <img className="navButton" src="assets/images/addRecipe.png" alt="Add Recipe"/>
                  <span><Link to="/addrecipe">Create Recipe</Link></span>
                </div>
                <div className="icon myForks">
                  <img className="navButton" src="assets/images/fork.png" alt="My Recipes"/>
                  <span><Link to="/myrecipes">My Recipes</Link></span>
                </div>
                <div className="icon home">
                  <img className="navButton" src="assets/images/home.png" alt="Home"/>
                  <span><Link to="/"><br />Home</Link></span>
                </div>
                <div className="icon">
                  <img className="navButton"
                    src="https://us.123rf.com/450wm/aquir/aquir1512/aquir151202267/49081585-top-rated-orange-round-gel-isolated-push-button.jpg?ver=68"
                    alt="Home"/>
                  <span><Link to="/toprecipes">Top Recipes</Link></span>
                </div>
                <div>
                  <Link to="/recipeFromSearch">TEST</Link>
                </div>
              </nav>
            </section>
          </div>

          <Route exact path="/" component={Home}/>
          <Route path="/addrecipe" component={AddRecipe}/>
          <Route path="/myrecipes" component={ViewRecipes}/>
          <Route path="/recipe" component={ViewFork}/>
          <Route path="/toprecipes" component={TopRecipes} />
          <Route path="/recipeFromSearch" component={RecipeFromSearch} />

          <br />
          <br />
          <br />
          <footer>
            <br />
            <small>&copy; <a href="https://github.com/TeamForkly/Forkly">TeamForkly</a></small>
          </footer>
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

// To start, run from terminal the following...
// npm run react-dev
// npm run server-dev

// Fred, for good luck.
// https://a248.e.akamai.net/secure.meetupstatic.com/photos/member/c/e/b/e/highres_253972926.jpeg
// ,,,,,,,,,,,,,,,,,*,,,,,,,***************,,/(//*((/*/*/(((#(#####((((#%%%%(*,,.,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
// ,,,,,,,,,,,,,,,,,,,,,,,,,,*************,*(#**,,*,/*/*///.**/*/(*#%%##((#(/*(#(*,,,.,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
// *****,,,,,,,,,,,,,,,,,,,,,***,***,*****//#*(.*,,,/,**,,(#*##(#((##(*(#%##%%#(((///,,,*,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
// *****,,,,,,,,,,,,,,,,,,,,****../,****,****/,(%%%/*(%(,(%(*/,%%%%#(%%//#%&&&&&%%#(/(/.,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
// ,****,,,,,,,,*,,,,,,,,,,,,,**,*//*/*/*,*/(//%##%(((//(%%&@&&%//(&&%%((%(#/*/((#%&&&&%%%#, ,.,,,,,,,,,,,,,,,,,*,,,,,,,,,,,,**,,,,,,,,,,,,,,,
// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,*,/(/,**(#(*(&&%%%(#(#%&%&&@@@@&&%%@@&&**#%%%%%***((%%%%(&%*..,,,,,,,,************,,,,,,,,*****,,,,,,,,,,,,
// ,,,,,,,,,,,,,,,*,,,,,,,,,,,,,,,,,**/(#%(#%&&&&&%%&%&&@%#@#%@@@&@&%/@@#%&(#%(%&&&%*/%//,#,////#.,,,,,**************,,,,,,,,,,,,,,,,,,,,,,,
// ,,,,,,,,,,,,*****,,,,,,,,********(%/%%%&%&&%&&&&&&@@&@@&&&@@@@@@@&%@@%////&&&(&%&%/##*,/(,%%/,,,,***************,,,,,,,,,,,,,,,,,,,,,,,
// ******,***********************,/#%(%%#%%&&&&&&%&@@@@@@@@&&@@&@@&&@&%&&%&%(/**%&&#(&&%#&%(/(&&(/*,,************,,,,,,,,,,,,,,,,,,,,,,,,,
// ****************************,,#(/%&%/(%%&(&&@&&&%&@@@@@@@&@@&&@&@&@@&%%%&&&&%(*&%&&#&&&%&&%#(%%#/,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
// **************,,********,*//*#(#&*#%%&&&@@&@&&&@@@@@@&@@@@&&&&&&&&&&&&&&&&&&&&&&%#&%&@&@&&&%(##*,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
// ,,*********************/#((/%%#%%/(#&&&@&@&&@@&&@@@&@@@@@@@&&&&&&&&&&&&&&&&&&&@&&&&&@&&%&&%&@&&@&&&(&%(,,,,,,,,,,,*******,,,,,,,,,,,,,,,,
// **********************/#(%#(%#%#((%&&&&@@@&@@&&&&@&@@@&@@@@&@&&&&&&&&&@@&&&&&&&@@@@&@&&&&&&&&@@&@&%&%&%%*,,,,,,,,*,,,,,,,,,,,,,,,,,,,,,,,
// *********************(#(%%(%#%%#%#%&%&&&@&@@&@@&&&&&@@&@&&&&&&&&&&&&&@@&&@@&&&&@@@&&&&@@&&@&&&&@@@&&&&%%&%(,,,,,,,,,,,,,,,,,,,,....
// ******,,,,,*********/#(#&%##&%(%%%%&%#%&&&@&&@&&&&&&&&&&&&&&&&&&&&&&@&&@@@@@@@@@@@&&@&&@@@&@@@@@@@@&&@&%%/.
// ****,,,,,,,,********((###(%%%##%%%%&%%&&@&&&&&&%&&@&&&%&&&&%&&%&&&&&&&&@&@@@@@@@@&@&@&&@@@@@@@@@@@@@&@@%&&%(.                 ....,,,,,,,,,
// ******,,,,,,*******/%##%%#%####%##%((%&&&&&&&&&&&&&&%%%&%%%%&%&&&&&&&&&@@&&&@&@@@@@@@@&@@@@@@@@@@@@@@&@&%%(,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
// ********,,,,*******/%((%#%%(#%#%%%(#(%&&&&&&&&&&&&&%%&&%##%%%&&&&&&&&@&&&&&&&&&@@@&@@@@@@@@@@@@@@@@@@&&&&%%%#,,,,,,,,,,,,,,,,,,,,,,,,,,,,*,
// ,,,,,,,,,,,,,,,,,,,,(##&%%%###%#%%((#&&&&&@&%&%&&%&%%###%%%&&&&&&&&&&&&&&&&&&&&@@&@@@@@@@@@@@@@@@@@@@@@&&%%%(/,,,,,,,,,,*******************
// ....               ./%#&%&%##%##%((##%&&&&&&%#%%&%%%##%%%%&%%%%&&&&&&&&&&&&&&&&@@@@@@@@@@@@@@@&@@@@@@@@&%&&%#(*,,,,,,,,,,,,,,,,,,,,,,,,,,,,
//             .......,/%##&%#(%%(##%/(#&&&%&%%(#%%##(##%(#%%#%%%%&&&&&&&&&&&&&@@@@&&@@@&@@@&@@@@&&@@@@@@@#%%%%%#/,,,,,,,,,,,,,,,,,,,,,,,,,,**
// ....................(%%#(%##((#/##%%%%%%#/%###%###(####%#%%%%&&%&&&&&&&&&&@@&&&@@&&&&&&&@@&&&&@@@@@##%%%%#(*,,,,,,*********************
// ..................../#%%#((#(#(##((#%##%##(#((##########%#%%%%%&&&&&&&&&&&&@&&&&&&&&&&&&&&&&&@@@&%#####%%%##(/,,*************************
// ,,,,,,,,,,,,,,,,,,,,,###(((%/((#%(#%%%##(%%#######((#(###%#(#(#%&&&&&&&&&&&&&&&&&&&&&&&%&&&&&&&((((#####%(#%#/,,*************************
// ,,,,,,,,,,,,,,,.....,%((/((#/(((((%##%#(%%%%##########%((((((#%&&%%%%%%######%%&&&%%%%&&%%%#((((((((((#####%#%#/,****************,,,,,,,,,,
// ...................../(///##((/((####(#(#%####((####%#(((((##%%%%%##((((((#####(####%###((((///(((((((#####%%%#(,,,,,.............
// .....................(#/(/##/(/#(#(#(%##(%%#(((((##%#((((((%%%%#((//******//(((((((//////////////(((#######%%%%(
// .....................(#///((((/(#(/###(##(((////(##((((((%&&%#((//*************/*//////////////((((((#######%%%/
// ....................,*(((((((#(###(###((#(//////(((((//%&&(//*****************/////////////////(((########%%%(
// ....................,,/((/(#((((((##((##(///////(#(((#&&%#////***********/******/*/////////////(((((((######%%%(
// ......................(//((#(#((((#((/##(//////////#%#(//*//**********///*//**/*////////////////((((((#####(%%%/
// ..                    /*(//((((((#(#(##((/////////////////***//******//*/////***//////////////////(((#####((#@%,
//                       ./(*(#(((/((%(###(/////*///////////*//*//*/**/**/////////*///////////////////(((((((//#@%
//                        ////(((((#%%###/////*******///////*//***/********//*//////////////*/////////((((#####(&@(
//                       ,*///(%%(####%(///////*********/**********************/*//*/////*//*///////((((#%%%&%%   ##
//                       *(/,*((##((#@////////*******************************//////////*////////((##%&&&&@@@@@@&&&.
//                       *(/((/((/#(*#*(&%(//////**/**/////*****************/////*////////////(#%&&@@@@&&&@@@@@@@&%&%%
//                       ,(*/*////(##(*,,(%##(//////(#%&%%%#####%%#######(##((((((/((((#%%&&%%@@@@@@@@@&&&@@@@@@@&%%%(
//                        /*//////((###*..*#%###(/@@@@@&&&%%&&&@@@%#@@@@@&&@@@@@@(/////(%@@@@@@@@@@@@&&&@@@@@@@#                      .*((
//                        //*///((//##%(/*.,,%#&@@@@@@&&%%%%%@@@@%%@@@@@@@@@@@@@&%###%%&&@%&@@@@@@@@@&&@@@@@@@@%##                    ./(##&
//                        ,/*///((//(###//*,*,@&%&&@@@@@&&%%%%%%&@@@@@@@@@@%&@@@@@@#/*///#%@%@@@@@@@@@@&&@@@@@@@&((.              .*/**/(#%#%@
//                         /////((///(##(/****@/&&%&&@@@@&&%%%%%%&@@@@@@@@@%&@@@@@@#/*///(&@&&@@@@@@@&&&@@@@@@@&%/(              ,/((####%%%&@
//                          ////(#/*/((#(/*****//&%%%%&&@&&&&&&%%&&@@@@@@@@&&@@@@@&(*///((%&@@@@@&&&&&&@@@@@@@&&/(             .*(#%%&&&&&&&&@
//                           ////*/(*//((//****//%&%%#%%%&&&&&@&&&@@@@@@@@@@@@@&&&(//*//((#%%&&&&&&&&&&@@@@@&&&&*             ,/#%%&&&&@@&&&&@
//                            ,///***,(////******/%%%%#####%%%%&&&&&&@&&&&&&&&&&&(///**//(#%#&&&&&&&&&&&&&&&&#*   .,***,.,*/#%&&&&&&@@@@@@@@
//                              */***,/////*******/##%%%######%%%%%%&&&&&&&&&&&%(////////((#%%%#&&&&&&&&&#####/,(%%%%%#(///#%&&&&@@@@@@@@@@@
//                               *****//////********/###%%%#######%%%%%%%%&&(////////*/(((%%%#(((((((((#######/#%&&&&&%#%%%&&&&&@@@@@@@@@@@@
//                                **,***,/////*/*******//(%###%%%%%%%%%%#////////(/////*((##%##((((((((#######/(%&&%%%&&%%%&&&@@@@@@@@@@@@@@
//                                 .***,**//***/***********//*//**/******//////////////////(((#%#((((((((########((###(#%&&%%&&@@@@@@@@@@@@@@@
//                                     ,,*/*///**********/**//**/*******/////(////////////((/(#%%#(((((((######(&&%((/(#%&@%%&@@@@@@@@@@@@@@@@
//                                     .,***////************//*********////////////(/////////((#%#(((/((((#####%&&&&&&@@@@@&%&@@@@@@@@@@@@@@@@
//                                      ,**,**///***/****/***/*******////***///////////*****//(##(((////((####/&&&@@@@@@@@@@%&@@@@@@@@@@@@@@@@
//                                      .,*,*/**//******************/*//******/////////*//////(#(####((/((####%&&@@@@@@@@@@@&@@@@@@@@@@@@@@@@@
//                                       ,*******//******************/******////(/((/((///((#%%##(%####((((###&&&@@@@@@@@@@@&@@@@@@@@@@@@@@@@@
//            ....                        *************/*********/***///////////((((((((/((#%%%%####(####(###&&@@@@@@@@@@@@@&@@@@@@@@@@@@@@@@@
// ##(/,*/*,,%#####((/,.                .*********/***/***/******/*////////(//(/((//(((((/((#####(#######(#(%&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @&%&((%%#&&%##&&&&%##/.       .*/(#%##****//***/**///******/////////(////(////*//(((///((#((######((#%%&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@&&@&&%#%&&&&&%%&@@&&&&%#(*.   ///#%%%%#,***/*/*/*/***//****///////////////////(//////(#%%%%#########%#&&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// &@@&@@@&&%&@@&&&%&@@@@@&&&&%#(*(%#(#%%%%%#**/*///////********///((((/////(#(((((((((##((##########((#&&%&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@&@@@@@&@@@&&&&@@@@@@@@@@&&%#((##%&&&&%***///((/(//***/*///(///////////////////(//((((((((((###(%%%@&&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// %@@@@@@@@@@@@@@@&&&@@@@@@@@@@@@@&%(#%&&&&***///**//(/*//((/(/(/#//*//*//////(/(((/(((((((((((##%%%&@@&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// &&@@@&@@@@@@@@@@@&&@@@@@@@@@@@@@@&&%(&@&&&&///*/**/*/((///(((////////*/(////////(((((#(((((#(((##%%&@@@@&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// &&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&%&@@@&&(((///*/*(((/(((((((/(((((/////////////(//(((((#(###%%@@@@@@&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// &@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&%@@@@#(/////**/((####(/((((/(//////////////(/((((/(/(#%%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&@@@@(((/////**//((####(((//(////////////(///(((((##&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&@@@@%#(////////*////##((/*////*//*////(/////((/((#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&@@@@@%((////(/////(((/(/(///**/////////((//####&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&(///////(///((#(((/(/(/////((((#(((((%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@(//**///////////(/////////(//(%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
