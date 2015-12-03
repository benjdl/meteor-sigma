Package.describe({
  name: "benjdl:sigma",
  summary: "Sigma is a library dedicated to graph drawing.",
  version: "1.0.3",
  git: "https://github.com/benjdl/meteor-sigma"
});

Package.onUse(function(api) {

  api.addFiles([
    "benjdl:sigma/sigma.min.js",
    "benjdl:sigma/plugins/sigma.exporters.svg.js",
    "benjdl:sigma/plugins/sigma.layout.forceAtlas2.min.js",
    "benjdl:sigma/plugins/sigma.parsers.cypher.js",
    "benjdl:sigma/plugins/sigma.parsers.gexf.min.js",
    "benjdl:sigma/plugins/sigma.parsers.json.min.js",
    "benjdl:sigma/plugins/sigma.plugins.animate.min.js",
    "benjdl:sigma/plugins/sigma.plugins.dragNodes.min.js",
    "benjdl:sigma/plugins/sigma.plugins.filter.min.js",
    "benjdl:sigma/plugins/sigma.plugins.neighborhoods.min.js",
    "benjdl:sigma/plugins/sigma.renderers.customShapes.min.js",
    "benjdl:sigma/plugins/sigma.renderers.snapshot.js"
    "benjdl:sigma/plugins/sigma.statistics.HITS.min.js"
  ], ["client"]);
});