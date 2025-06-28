"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _zodToOpenapi = require("@asteasolutions/zod-to-openapi");
const oneOf = schemas => {
  const registry = new _zodToOpenapi.OpenAPIRegistry();
  schemas.forEach((schema, index) => {
    registry.register(index.toString(), schema);
  });
  const generator = new _zodToOpenapi.OpenApiGeneratorV3(registry.definitions);
  const components = generator.generateComponents();
  return components.components?.schemas ? Object.values(components.components.schemas) : [];
};
module.exports = oneOf;