export interface Cost {
  Wood: number;
  Gold: number;
  Food?: number;
}
export interface Ages {
  id: number;
  name: string;
}
export interface FilterType {
  [key: string]: number | string | boolean | any;
  age: string,
  woodValue: any,
  foodValue: any,
  goldValue: any,
  woodChecked: boolean,
  foodChecked: boolean,
  goldChecked: boolean,
}

export interface RootObject {
  [key: string]: number | string | boolean | undefined | Cost | string[];
  id: number;
  name: string;
  description: string;
  expansion: string;
  age: string;
  cost: Cost;
  build_time: number;
  reload_time: number;
  attack_delay: number;
  movement_rate: number;
  line_of_sight: number;
  hit_points: number;
  range: any;
  attack: number;
  armor: string;
  accuracy: string;
  attack_bonus: string[];
  search_radius?: number;
  blast_radius?: number;
  armor_bonus: string[];
}


