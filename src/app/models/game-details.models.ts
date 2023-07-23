export interface GameDetails {
  description: string;
  developer: string;
  freetogame_profile_url: string;
  game_url: string;
  genre: string;
  id: number;
  minimum_system_requirements: {
    graphics: string | null;
    memory: string | null;
    os: string | null;
    processor: string | null;
    storage: string | null;
  };
  platform: string;
  publisher: string;
  release_date: string;
  screenshots: {
    id: number;
    image: string;
  }[] | null;
  short_description: string;
  status: string;
  thumbnail: string;
  title: string;
}
