const { binary_search } = require(".");

describe('binary search', () => {
    it('Deve fazer uma pesquisa binária e retornar a sua posição no Array', () => {
        const list = Array.from({ length: 100 }, (_, i) => i + 1);
        expect(binary_search(list, 2)).toBe(1);
    });
})