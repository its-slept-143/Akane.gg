export type Rarity = 'godly' | 'ultimate' | 'celestial' | 'standard';

export interface Card {
  id: string;
  name: string;
  series: string;
  rarity: Rarity | string;
  type: string;
  imageUrl: string;
  source?: string;
  obtainedBy?: string;
}
