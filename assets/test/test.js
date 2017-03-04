

QUnit.test('Testing function with several sets of inputs', function (assert) {
    assert.equal(function1(5, 5), 25, 'Tested with two relatively small positive numbers');
    assert.equal(function1(-5, -5), 1, 'Tested with two negative numbers. Any arguments less than 1 will be set to 1.');
    assert.equal(function1(500, 500), 10000, 'Tested with two large positive numbers. Any arguments greater than 100 will be set to 100.'); 
    assert.throws(function () { function1(null); }, /The given argument is not a number/, 'Passing in null correctly raises an Error');
    assert.throws(function () { function1("Teja","Ravi"); }, /The given argument is not a number/, 'Passing in a string correctly raises an Error');
});

