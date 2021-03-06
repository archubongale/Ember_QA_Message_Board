import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('questions', {path: '/'}, function() {
    this.resource('question', {path: '/:question_id'}, function() {
      this.resource('answer', {path: 'answers/:answer_id'});
    });
  });
});

export default Router;
