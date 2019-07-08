describe('calculator.js', function () {
    let calculator;
    let calculator2;

    describe('Calculator', function () {
        beforeEach(function () {
            calculator = new Calculator();
            calculator2 = new Calculator();

        });

        afterEach(function () {
        });

        it('does not handle NaN', function () {

            calculator.total = 20;
            calculator.multiply('a');

            expect(calculator.total).toBeNaN();
        });


        it('returns total', function () {

            calculator.total = 50;

            expect(calculator.add(20)).toBe(70);
            expect(calculator.total).toMatch(/-?\d+/);
            expect(typeof calculator.total).toMatch('number');
        });

        it('can be instantiated', function () {
            jasmine.addMatchers(customMatchers);

            expect(calculator).toBeCalculator(); // custom Matcher
            expect(2).not.toBeCalculator();
            expect(calculator).toBeTruthy();
            expect(calculator2).toBeTruthy();
            expect(calculator).toEqual(calculator2);
            expect(calculator.constructor.name /* "Calculator*/).toContain("Calc");
        });

        it('instantiates unique object', function () {

            expect(calculator).not.toBe(calculator2);
        });

        it('has common operations', function () {

            expect(calculator.add).toBeDefined();
            expect(calculator.subtract).toBeDefined();
            expect(calculator.multiply).toBeDefined();
            expect(calculator.divide).toBeDefined();
        });

        it('can overwrite total', function () {

            calculator.total = null;

            expect(calculator.total).toBeNull();
        });

        describe('add()', function () {
            it('should add numbers total', function () {
                calculator.add(5);

                expect(calculator.total).toBe(5);
            });
        });

        describe('subtract()', function () {
            it('should subtract numbers total', function () {

                calculator.total = 30
                calculator.subtract(5);

                expect(calculator.total).toBe(25);
            });

        });

        describe('multiply()', function () {
            it('should multiply total by number', function () {

                calculator.total = 100;
                calculator.multiply(2);

                expect(calculator.total).toBe(200);
            });
        });

        describe('divide()', function () {
            it('should divide total by number', function () {

                calculator.total = 30
                calculator.divide(5);

                expect(calculator.total).toBe(6);
            });

            it('handles divide by zero', function () {

                calculator.total = 20;
                calculator.multiply('a');

                expect(function () { calculator.divide(0) }).toThrow();
                expect(function () { calculator.divide(0) }).toThrowError(Error);
                expect(function () { calculator.divide(0) }).toThrowError(Error, 'Cannot divide by 0');
            });
        });

        // it('has constructor', function() {
        //     const calculator = new Calculator();
        //     const calculator2 = new Calculator();

        //     expect(calculator).toEqual(calculator2);
        // });

        describe('get version', function () {
            it('fetches version from external source', function (done) {
                spyOn(window, 'fetch').and.returnValue(Promise.resolve(
                    new Response('{ "version": "0.1"}')
                ));
                calculator.version.then(function(version) {
                    expect(version).toBe('0.1');
                });  // await keyword will wait for the Promise to be resolved here

                done();
            });
        });
    })
});

describe('imagine-another-file.js', function () {
    //TODO: Specs
});