/**
 *
 * Darkfish Page Functions
 * $Id: darkfish.js 53 2009-01-07 02:52:03Z deveiant $
 *
 * Author: Michael Granger <mgranger@laika.com>
 *
 */

/* Provide console simulation for firebug-less environments */
/*
if (!("console" in window) || !("firebug" in console)) {
  var names = ["log", "debug", "info", "warn", "error", "assert", "dir", "dirxml",
    "group", "groupEnd", "time", "timeEnd", "count", "trace", "profile", "profileEnd"];

  window.console = {};
  for (var i = 0; i < names.length; ++i)
    window.console[names[i]] = function() {};
};
*/


function showSource( e ) {
  var target = e.target;
  while (!target.classList.contains('method-detail')) {
    target = target.parentNode;
  }
  if (typeof target !== "undefined" && target !== null) {
    target = target.querySelector('.method-source-code');
  }
  if (typeof target !== "undefined" && target !== null) {
    target.classList.toggle('active-menu')
  }
};

function hookSourceViews() {
  document.querySelectorAll('.method-heading').forEach(function (codeObject) {
    codeObject.addEventListener('click', showSource);
  });
};

function hookSearch() {
  var input  = document.querySelector('#rdoc-search-field');
  var result = document.querySelector('#rdoc-search-results');
  result.classList.remove("hidden");

  var search_section = document.querySelector('#rdoc-search-results-background');
  search_section.onclick = function() {
    var search_section = document.querySelector('#rdoc-search-results-background');
    setTimeout(function() { search_section.classList.add('hidden'); }, 150);
    search_section.style.opacity = 0;
  };
  input.onclick = function() {
    var search_section = document.querySelector('#rdoc-search-results-background');
    search_section.classList.remove('hidden');
    setTimeout(function() { search_section.style.opacity = 1; }, 25);
  };

  var search = new Search(search_data, input, result);

  search.renderItem = function(result) {
    var li = document.createElement('li');
    var html = '';

    // TODO add relative path to <script> per-page
    html += '<p class="rdoc-search-match"><a href="' + index_rel_prefix + result.path + '">' + this.hlt(result.title);
    if (result.params)
      html += '<span class="params">' + result.params + '</span>';
    html += '</a>';


    if (result.namespace)
      html += '<p class="rdoc-search-namespace">' + this.hlt(result.namespace);

    if (result.snippet)
      html += '<div class="rdoc-search-snippet">' + result.snippet + '</div>';

    li.innerHTML = html;

    return li;
  }

  search.select = function(result) {
    window.location.href = result.firstChild.firstChild.href;
  }

  search.scrollIntoView = search.scrollInWindow;
};

document.addEventListener('DOMContentLoaded', function() {
  hookSourceViews();
  hookSearch();
});
