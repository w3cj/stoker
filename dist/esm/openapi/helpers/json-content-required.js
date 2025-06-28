import jsonContent from "./json-content.js";
const jsonContentRequired = (schema, description) => {
  return {
    ...jsonContent(schema, description),
    required: true
  };
};
export default jsonContentRequired;
