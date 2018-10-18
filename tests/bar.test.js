import bar from '../src/bar';

describe(`Bar`, () => {
	test(`test bar`, () => {
		expect(bar(1)).toBe(3);
	});
});
