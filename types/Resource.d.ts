export interface Resource {
  readonly id: number;
  readonly name: string;
  readonly weight: number;
  readonly image?: string;
  readonly amount?: number;
  readonly resources?: Array<Array<number>>;
  readonly isCrafted?: boolean;
}
