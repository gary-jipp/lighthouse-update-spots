const { assert } = require('chai');
const updateSpots = require('../updateSpots');

describe('Update Spots Tests', function () {
  const oldState = require('./testState.json');
  const state = JSON.parse(JSON.stringify(oldState));

  const id = 1;
  const interview = { student: "Test Student", interviewer: 99 };
  const appointment = { ...state.appointments[id], interview: { ...interview } };
  const appointments = { ...state.appointments, [id]: appointment };
  const days = updateSpots(state, appointments, id);
  
  // setState({...state, appointment, days})

  it('should update spots to 1 ', function () {
    assert.isDefined(days[0]);
    assert.equal(days[0].spots, 1);
  });

  it('should update spots and not change original days array', function () {
    assert.isDefined(days[0]);
    assert.equal(days[0].spots, 1);
    assert.deepEqual(state.days, oldState.days);
  });

});

