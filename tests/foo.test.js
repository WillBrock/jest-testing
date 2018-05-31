const foo = require(`../src/foo`);

describe(`Foo`, () => {
	test(`test`, () => {
		expect(foo(3)).toBe(4);
	});
});
