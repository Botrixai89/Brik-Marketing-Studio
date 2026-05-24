/** Running-bond tile: ~250×100px bricks with mortar gaps */
export const BRICK = {
  width: 450,
  height: 200,
  mortar: 8,
  radius: 8,
} as const;

export const BRICK_PATTERN = {
  width: BRICK.width * 2 + BRICK.mortar * 3,
  height: BRICK.height * 2 + BRICK.mortar * 3,
} as const;

/** Half-brick horizontal offset for zig-zag row 2 */
export const BRICK_ROW_OFFSET = (BRICK.width + BRICK.mortar) / 2;
