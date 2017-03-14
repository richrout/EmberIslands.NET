import Ember from 'ember';

export default Ember.Component.extend({
    isExpanded: false,
    actions: {
        toggleReadMore() {
            this.toggleProperty('isExpanded');
        }
    }
});
