const { assert } = require('chai');
const updateSpots = require('../updateSpots');

describe('Update Spots Tests', function () {
  const oldState = require('./testState.json');
  const state = JSON.parse(JSON.stringify(oldState));

  const id = 1;
  const interview = { student: "Test Student", interviewer: 99 };
  const appointment = { ...state.appointments[id], interview: { ...interview } };
  const appointments = { ...state.appointments, [id]: appointment };
  const days = updateSpots(state, appointments);

  it('should update spots from 99 to 2 ', function () {
    assert.equal(days[0].spots, 2);
  });

  it('should update spots and old mutate the original day spots', function () {
    assert.equal(days[0].spots, 2);
    assert.equal(state.days[0].spots, oldState.days[0].spots);
  });

  it('should update spots and not change original days array', function () {
    assert.equal(days[0].spots, 2);
    assert.deepEqual(state.days, oldState.days);
  });

  it('should update spots and  not change the original day object', function () {
    assert.equal(days[0].spots, 2);
    assert.deepEqual(state.days[0], oldState.days[0]);
  });



});

