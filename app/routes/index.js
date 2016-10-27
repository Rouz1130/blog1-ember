import Ember from 'ember';

var questions = [{
  id: 1,
  author: "Bob Costas",
  content: "Sports",
  notes: "NBA Finals",
  image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg"
}, {
  id: 2,
  author: "Tommy Hilfiger",
  content: "Fashion",
  notes: "Jackets",
  image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg"
}, {
  id: 3,
  author: "Anderson Cooper",
  content: "News",
  notes: "Election",
  image: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg"
}];

export default Ember.Route.extend({
  model() {
    return questions;
  },
});
