module.exports.command = function(milliseconds) {
// example of a basic custom command.

  this
    .pause(milliseconds)
    //do some stuff
  return this;
  // allows for method chaining
};
