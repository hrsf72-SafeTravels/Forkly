import React from 'react';
import TopRecipeEntry from './TopRecipeEntry.jsx';
import $ from 'jQuery';

// const topRatedExampleData = [
//   {
//     name: 'Chicken Cordon Bleu Casserole',
//     ingredients: [
//       '1 egg1',
//       '1/2 cup milk',
//       '2 pounds skinless, boneless chicken breast halves - cut into chunks',
//       '1 cup plain dried bread crumbs',
//       '1 cup oil for frying',
//       '8 ounces Swiss cheese, cubed',
//       '8 ounces cubed ham',
//       '1 (10.75 ounce) can condensed cream of chicken soup',
//       '1 cup milk',
//     ],
//     likes: 100,
//   },
//   {
//     name: 'Chicken Cordon Bleu Casserole',
//     ingredients: [
//       '1 egg2',
//       '1/2 cup milk',
//       '2 pounds skinless, boneless chicken breast halves - cut into chunks',
//       '1 cup plain dried bread crumbs',
//       '1 cup oil for frying',
//       '8 ounces Swiss cheese, cubed',
//       '8 ounces cubed ham',
//       '1 (10.75 ounce) can condensed cream of chicken soup',
//       '1 cup milk',
//     ],
//     likes: 99,
//   },
//   {
//     name: 'Chicken Cordon Bleu Casserole',
//     ingredients: [
//       '1 egg3',
//       '1/2 cup milk',
//       '2 pounds skinless, boneless chicken breast halves - cut into chunks',
//       '1 cup plain dried bread crumbs',
//       '1 cup oil for frying',
//       '8 ounces Swiss cheese, cubed',
//       '8 ounces cubed ham',
//       '1 (10.75 ounce) can condensed cream of chicken soup',
//       '1 cup milk',
//     ],
//     likes: 98,
//   },
//   {
//     name: 'Chicken Cordon Bleu Casserole',
//     ingredients: [
//       '1 egg4',
//       '1/2 cup milk',
//       '2 pounds skinless, boneless chicken breast halves - cut into chunks',
//       '1 cup plain dried bread crumbs',
//       '1 cup oil for frying',
//       '8 ounces Swiss cheese, cubed',
//       '8 ounces cubed ham',
//       '1 (10.75 ounce) can condensed cream of chicken soup',
//       '1 cup milk',
//     ],
//     likes: 97
//   },
//   {
//     name: 'Chicken Cordon Bleu Casserole',
//     ingredients: [
//       '1 egg6',
//       '1/2 cup milk',
//       '2 pounds skinless, boneless chicken breast halves - cut into chunks',
//       '1 cup plain dried bread crumbs',
//       '1 cup oil for frying',
//       '8 ounces Swiss cheese, cubed',
//       '8 ounces cubed ham',
//       '1 (10.75 ounce) can condensed cream of chicken soup',
//       '1 cup milk',
//     ],
//     likes: 95
//   },
//   {
//     name: 'Chicken Cordon Bleu Casserole',
//     ingredients: [
//       '1 egg5',
//       '1/2 cup milk',
//       '2 pounds skinless, boneless chicken breast halves - cut into chunks',
//       '1 cup plain dried bread crumbs',
//       '1 cup oil for frying',
//       '8 ounces Swiss cheese, cubed',
//       '8 ounces cubed ham',
//       '1 (10.75 ounce) can condensed cream of chicken soup',
//       '1 cup milk',
//     ],
//     likes: 96
//   },
// ];

class TopRecipeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topRecipes: [],
    };
  }

  componentDidMount() {
    let context = this;
    $.ajax({
      url: '/topRecipes',
      type: 'GET',
      contentType: 'application/json',
      success: function(data) {
        console.log('AJAX request to get top recipes succeeded');
        console.log(data);
        context.setState({topRecipes: data});
      },  
      error: function(err) {
        console.log('AJAX request to get top recipes failed')
      }
    })();
  }

  render() {
    return (
      <div className="container">
        {this.state.topRecipes.map((recipe) =>
          <TopRecipeEntry recipe={recipe}/>
        )}
      </div>
    );
  }
}

export default TopRecipeList;
