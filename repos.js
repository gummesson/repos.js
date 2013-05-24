(function($) {

  'use strict';

  // Github repos
  //
  //  Gets all repositories from Github via their API and renders them
  //  using a Mustache.js template.
  //
  var GithubRepos = {

    config: {
      repoTemplate: $('#github-repos'), // The Mustache script template id
      repoElement: $('#repo-list')      // The element where the repos will be rendered
    },

    init: function(username, config) {
      if (config && typeof(config) === 'object') {
        $.extend(this.config, config);
      }
      var repoTemplate = (this.config.repoTemplate).html(),
          repoElement = this.config.repoElement;
      this.render(username, repoTemplate, repoElement);
    },

    get: function(username, callback) {
      $.getJSON('https://api.github.com/users/' + username + '/repos?callback=?', callback);
    },

    render: function(username, repoTemplate, repoElement) {
      this.get(username, function(data) {
        var render = Mustache.render(repoTemplate, data);
        repoElement.html(render);
      });
    }

  };

  $(document).ready(function() {
    GithubRepos.init('USERNAME');
  });

})(jQuery);
