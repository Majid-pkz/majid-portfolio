export function wrapIndex(index, count) {
  if (!Number.isInteger(count) || count < 1) throw new RangeError("A gallery needs at least one exhibit.");
  return ((index % count) + count) % count;
}

export function exhibitOffset(index, active, count) {
  let offset = wrapIndex(index, count) - wrapIndex(active, count);
  if (offset > count / 2) offset -= count;
  if (offset < -count / 2) offset += count;
  return offset;
}

export function galleryGeometry(width) {
  const cardWidth = Math.min(340, Math.max(280, width * 0.44), width - 32);
  const distance = Math.min(cardWidth * 1.03, (width - cardWidth) * 0.56);
  return { cardWidth, distance };
}
