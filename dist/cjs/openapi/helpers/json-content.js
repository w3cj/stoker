"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

const jsonContent = (schema, description) => {
  return {
    content: {
      "application/json": {
        schema
      }
    },
    description
  };
};
module.exports = jsonContent;