const fetchTMDB = require("../model");

// Jest test case
test('calling fetchTMDB with a non-string throws an error', () => {
    expect(() => {
        fetchTMDB(13245);
    }).toThrow("query_string must be a string.");
});

test('calling fetchTMDB with null returns an empty array', () => {
    const result = fetchTMDB(null);
    expect(result).toEqual([]);
});