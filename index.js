/* jshint node: true */
'use strict';

var path = require('path');
var funnel = require('broccoli-funnel');

module.exports = {
  name: 'ember-cli-showdown',

  treeForVendor: function() {
    var showdownPath = path.join(path.dirname(require.resolve("showdown")), "..");
    return new funnel(this.treeGenerator(showdownPath), {
      destDir: 'showdown'
    })
  },

  included: function showdownIncluded(app) {
    this._super.included.apply(this, arguments);
    var showdownPath = path.join('vendor/showdown/dist');
    app.import(path.join(showdownPath, 'showdown.js'));
  }
};
