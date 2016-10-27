import Ember from 'ember';

var questions = [{
  id: 1,
  author: "Bob Costas",
  content: "Sports",
  notes: "NBA Finals"
}, {
  id: 2,
  author: "Tommy Hilfiger",
  content: "Fashion",
  notes: "Jackets"
}, {
  id: 3,
  author: "Anderson Cooper",
  content: "News",
  notes: "Election"
}];

export default Ember.Route.extend({
  model() {
    return questions;
  },
});
