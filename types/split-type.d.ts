declare module "split-type" {
  export default class SplitType {
    constructor(
      target: string | Element,
      options?: {
        types?: string;
        tagName?: string;
      }
    );
    lines: HTMLElement[];
    words: HTMLElement[];
    chars: HTMLElement[];
    revert(): void;
  }
}
