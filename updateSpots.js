/**
 * Update Spots for current day.
 *
 * @param {Object}   state           Description.
 * @param {Object}   appointments      Description of optional variable.
 * @return {Array}   A Days array we can save back into state.
 */

const updateSpots = function (state, appointments) {

  state.days[0].spots = 2;
  return [... state.days];
};

module.exports = updateSpots;