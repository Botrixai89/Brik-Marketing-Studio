import { useId } from "react";
import { BRICK, BRICK_PATTERN, BRICK_ROW_OFFSET } from "./constants";

const { width: w, height: h, mortar: m, radius: rx } = BRICK;
const row2Y = m + h + m;

const brickOutline = {
  fill: "none",
  stroke: "var(--brick-stroke)",
  strokeWidth: 0.5,
} as const;

type BrickWallPatternProps = {
  className?: string;
};

/**
 * Running-bond outline pattern (~250×100px bricks).
 */
export function BrickWallPattern({ className }: BrickWallPatternProps) {
  const patternId = `brik-wall-${useId().replace(/:/g, "")}`;

  const row1X1 = m;
  const row1X2 = m + w + m;
  const row2X1 = row1X1 - BRICK_ROW_OFFSET;
  const row2X2 = row1X2 - BRICK_ROW_OFFSET;
  const row2X3 = row1X2 + w + m - BRICK_ROW_OFFSET;

  return (
    <svg
      aria-hidden
      className={className}
      preserveAspectRatio="none"
    >
      <defs>
        <pattern
          id={patternId}
          width={BRICK_PATTERN.width}
          height={BRICK_PATTERN.height}
          patternUnits="userSpaceOnUse"
        >
          <rect x={row1X1} y={m} width={w} height={h} rx={rx} {...brickOutline} />
          <rect x={row1X2} y={m} width={w} height={h} rx={rx} {...brickOutline} />

          <rect x={row2X1} y={row2Y} width={w} height={h} rx={rx} {...brickOutline} />
          <rect x={row2X2} y={row2Y} width={w} height={h} rx={rx} {...brickOutline} />
          <rect x={row2X3} y={row2Y} width={w} height={h} rx={rx} {...brickOutline} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
}
