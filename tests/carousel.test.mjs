import test from "node:test";
import assert from "node:assert/strict";
import { wrapIndex, exhibitOffset, galleryGeometry } from "../src/lib/carousel.mjs";

test("navigation wraps in both directions through every exhibit", () => {
  assert.equal(wrapIndex(-1, 3), 2);
  assert.equal(wrapIndex(3, 3), 0);
  assert.equal(wrapIndex(-7, 3), 2);
  assert.throws(() => wrapIndex(0, 0), RangeError);
});

test("each selection has one centre and distinct neighbours around the curved gallery", () => {
  for (let active = 0; active < 3; active++) {
    const offsets = [0, 1, 2].map(index => exhibitOffset(index, active, 3));
    assert.deepEqual([...offsets].sort(), [-1, 0, 1]);
    assert.equal(offsets[active], 0);
  }
});

test("every responsive frame fits the available viewport with side margins", () => {
  for (const width of [320, 375, 620, 736, 1024, 1440]) {
    const { cardWidth, distance } = galleryGeometry(width);
    assert.ok(cardWidth <= width - 32);
    assert.ok(cardWidth > 0 && distance >= 0);
    assert.ok(cardWidth <= 340);
  }
});
