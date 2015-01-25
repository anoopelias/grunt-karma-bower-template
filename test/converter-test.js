describe("Ascii Converter Test", function() {
  it("should convert digits", function() {
    expect(converter.hexStrToAscii('30')).toBe('0');
    expect(converter.hexStrToAscii('41')).toBe('A');
    expect(converter.hexStrToAscii('4a')).toBe('J');
    expect(converter.hexStrToAscii('7a')).toBe('z');
    expect(converter.hexStrToAscii('2B')).toBe('+');
  });
  it("should convert strings", function() {
    expect(converter.hexStrToAscii('304a')).toBe('0J');
  });

});
