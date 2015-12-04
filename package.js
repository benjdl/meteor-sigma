Package.describe({
  name: "benj:sigma",
  summary: "Sigma is a library dedicated to graph drawing.",
  version: "1.0.3",
  git: "https://github.com/benjdl/meteor-sigma"
});

Package.onUse(function(api) {

  api.addFiles([
    "sigma/sigma.min.js",
    "sigma/plugins/sigma.exporters.svg.js",
    "sigma/plugins/sigma.layout.forceAtlas2.min.js",
    "sigma/plugins/sigma.parsers.cypher.js",
    "sigma/plugins/sigma.parsers.gexf.min.js",
    "sigma/plugins/sigma.parsers.json.min.js",
    "sigma/plugins/sigma.plugins.animate.min.js",
    "sigma/plugins/sigma.plugins.dragNodes.min.js",
    "sigma/plugins/sigma.plugins.filter.min.js",
    "sigma/plugins/sigma.plugins.neighborhoods.min.js",
    "sigma/plugins/sigma.renderers.customShapes.min.js",
    "sigma/plugins/sigma.renderers.snapshot.js",
    "sigma/plugins/sigma.statistics.HITS.min.js"
  ], ["client"]);
});