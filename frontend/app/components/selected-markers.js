import Ember from 'ember';

export default Ember.Component.extend({

  resetGrid: function(markers) {
    d3.select('#grid')
      .datum(markers)
      .call(grid);
  },

  didRender() {
    let data = this.get('data');
    let grid = d3.divgrid();
    console.log(data);
  }
    
});
