import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['question'],
  actions: {
    save: function() {
      var answer = this.store.createRecord('answer', {
        answer: this.get('answer')
      });

      var question = this.get('controllers.question.model');
      answer.save().then(function() {
        question.get('answers').pushObject(answer);
        question.save();
      });

      this.set('answer', '');
      this.transitionToRoute('question', question.id);
    }
  }

});
