import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: ['question'],

    actions: {
      delete: function() {
        if (confirm('Are you sure?')) {
          var answer = this.get('model');
          var question = this.get('controllers.question.model');
          question.get('answers').removeObject(answer);
          question.save();

          this.transitionToRoute('question', question.id);
        }
      }
    }

});
