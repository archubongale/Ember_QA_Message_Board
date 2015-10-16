import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function() {
      var question = this.store.createRecord('question', {
        question: this.get('question'),
        author: this.get('author'),
        description: this.get('description')
      });
      question.save();
      this.transitionToRoute('questions');
    }
  }
});
