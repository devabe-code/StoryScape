export type SoundscapeProfile = {
  name: string;
  mood: string;
  layers: string[];
};

export type Episode = {
  number: number;
  title: string;
  estimatedMinutes: number;
  summary: string;
  excerpt: string[];
  soundscape: SoundscapeProfile;
};

export type Book = {
  title: string;
  slug: string;
  author: string;
  year: number;
  description: string;
  status: "reading" | "saved" | "available";
  progress: number;
  coverTone: string;
  moodTags: string[];
  episodes: Episode[];
};

export const books: Book[] = [
  {
    title: "Dracula",
    slug: "dracula",
    author: "Bram Stoker",
    year: 1897,
    description:
      "A solicitor's journey to a remote castle opens into letters, diaries, dread, and a slow-burning hunt through Victorian shadow.",
    status: "reading",
    progress: 18,
    coverTone: "from-[#2b1f2d] via-[#593d45] to-[#9f6a4b]",
    moodTags: ["Castle Night", "Storm", "Letters"],
    episodes: [
      {
        number: 1,
        title: "Jonathan Harker's Journal",
        estimatedMinutes: 22,
        summary:
          "Harker travels toward Count Dracula's castle, noticing that every mile feels stranger than the last.",
        excerpt: [
          "The train moved with a tired patience through the darkening country, and the mountains rose ahead like a wall built for secrets.",
          "At the inn, every warning came wrapped in courtesy. The sign of the cross, the lowered voice, the hurried glance toward the road.",
          "By the time the carriage arrived, the night had gathered itself close around him. The driver did not speak, and the horses knew the way too well.",
        ],
        soundscape: {
          name: "Castle Night",
          mood: "Low wind, distant thunder, and a faint stone-hall hush.",
          layers: ["Mountain wind", "Low room tone", "Sparse thunder"],
        },
      },
      {
        number: 2,
        title: "The Count's Guest",
        estimatedMinutes: 24,
        summary: "Hospitality turns uneasy as Harker begins to understand the rules of the castle.",
        excerpt: [
          "The Count smiled as though he had been expecting every question before it was asked.",
          "No mirror answered the room. No servant crossed the hall. Even the doors seemed to listen.",
        ],
        soundscape: {
          name: "Stone Corridor",
          mood: "Soft drafts, old doors, and distant footsteps.",
          layers: ["Cold ambience", "Door creak", "Subtle pulse"],
        },
      },
    ],
  },
  {
    title: "Frankenstein",
    slug: "frankenstein",
    author: "Mary Shelley",
    year: 1818,
    description:
      "An Arctic frame tale unfolds into ambition, grief, and the terrible loneliness of a life made without welcome.",
    status: "saved",
    progress: 0,
    coverTone: "from-[#1f3538] via-[#477271] to-[#d6c17d]",
    moodTags: ["Laboratory", "Ice", "Letters"],
    episodes: [
      {
        number: 1,
        title: "Walton's Letters",
        estimatedMinutes: 18,
        summary:
          "An explorer writes from the edge of the world, hungry for glory and companionship.",
        excerpt: [
          "The ice held the ship in a silence so complete that every board and rope seemed to confess its strain.",
          "Walton wrote by lamplight, not yet knowing what kind of story the frozen sea was sending toward him.",
        ],
        soundscape: {
          name: "Arctic Drift",
          mood: "Deep wind, creaking hull, and open white distance.",
          layers: ["Polar wind", "Ship timber", "Low drone"],
        },
      },
    ],
  },
  {
    title: "The Strange Case of Dr. Jekyll and Mr. Hyde",
    slug: "jekyll-and-hyde",
    author: "Robert Louis Stevenson",
    year: 1886,
    description:
      "A London mystery of reputation, secrecy, and a door that opens onto the divided self.",
    status: "available",
    progress: 0,
    coverTone: "from-[#263532] via-[#64715f] to-[#c9b080]",
    moodTags: ["City Street", "Fog", "Laboratory"],
    episodes: [
      {
        number: 1,
        title: "Story of the Door",
        estimatedMinutes: 16,
        summary: "Mr. Utterson hears a troubling story attached to an ordinary London doorway.",
        excerpt: [
          "The street was respectable in daylight, but dusk gave every window another face.",
          "Enfield's story settled over the walk like fog, changing the shape of the door before them.",
        ],
        soundscape: {
          name: "Foggy London",
          mood: "Damp cobblestones, carriage wheels, and muted street air.",
          layers: ["Street rain", "Carriage pass", "Low room tone"],
        },
      },
    ],
  },
  {
    title: "Pride and Prejudice",
    slug: "pride-and-prejudice",
    author: "Jane Austen",
    year: 1813,
    description:
      "Sharp manners, lively conversation, and the slow correction of first impressions.",
    status: "available",
    progress: 0,
    coverTone: "from-[#3d4f48] via-[#8d8f69] to-[#d7b982]",
    moodTags: ["Ballroom", "Manor", "Letters"],
    episodes: [
      {
        number: 1,
        title: "A Single Man",
        estimatedMinutes: 14,
        summary: "News of Netherfield's new tenant stirs Mrs. Bennet into immediate strategy.",
        excerpt: [
          "The morning room carried the entire weight of Mrs. Bennet's expectations.",
          "A fortune had arrived in the neighborhood, and every chair in the house seemed to know it.",
        ],
        soundscape: {
          name: "Manor Morning",
          mood: "Light room tone, birds beyond glass, and a distant pianoforte.",
          layers: ["Open window", "Soft birds", "Pianoforte"],
        },
      },
    ],
  },
];

export function getBook(slug: string) {
  return books.find((book) => book.slug === slug);
}

export function getEpisode(slug: string, episodeNumber: number) {
  const book = getBook(slug);
  return book?.episodes.find((episode) => episode.number === episodeNumber);
}

export const continueReading = books.find((book) => book.status === "reading");
