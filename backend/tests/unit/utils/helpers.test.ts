import { Helpers } from '../../../src/utils/helpers';

describe('Unit Test: Helpers utility class', () => {
  describe('safeJsonParse', () => {
    it('should parse valid JSON strings', () => {
      const jsonStr = '{"name":"amdox","version":1}';
      const parsed = Helpers.safeJsonParse(jsonStr);
      expect(parsed).toEqual({ name: 'amdox', version: 1 });
    });

    it('should return null on invalid JSON strings', () => {
      const invalidStr = '{"name": "amdox", "version": 1'; // missing closing brace
      const parsed = Helpers.safeJsonParse(invalidStr);
      expect(parsed).toBeNull();
    });
  });

  describe('generateUuid', () => {
    it('should generate a string of reasonable length', () => {
      const uuid = Helpers.generateUuid();
      expect(typeof uuid).toBe('string');
      expect(uuid.length).toBeGreaterThan(10);
    });

    it('should generate distinct strings on consecutive calls', () => {
      const uuid1 = Helpers.generateUuid();
      const uuid2 = Helpers.generateUuid();
      expect(uuid1).not.toEqual(uuid2);
    });
  });
});
