export interface CustomHero {
  name: string;
  hp: number;
  spellpower: number;
  mana: number;
  spells: {
    offensive: string;
    defensive: string;
  };
}

export interface Spells {
  offensive: string;
  defensive: string;
}
