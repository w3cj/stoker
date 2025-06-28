import {
  OpenApiGeneratorV3,
  OpenAPIRegistry
} from "@asteasolutions/zod-to-openapi";
const oneOf = (schemas) => {
  const registry = new OpenAPIRegistry();
  schemas.forEach((schema, index) => {
    registry.register(index.toString(), schema);
  });
  const generator = new OpenApiGeneratorV3(registry.definitions);
  const components = generator.generateComponents();
  return components.components?.schemas ? Object.values(components.components.schemas) : [];
};
export default oneOf;
