/**
 * Entry js
 */
define(function(require) {
  /**
   * require mod
   */

  const addItem = require("./addItem");
  const updateItem = require("./updateItem");
  const removeItem = require("./removeItem");
  const api = require("./service/api");
  // const $ = require("jquery");

  // debugger;
  addItem(".addItem-button");
  updateItem(".updateItem-button");
  removeItem(".removeItem-button");

  // TODO logic
});
