type ICards = {
  id: number,
  image?: string,
  text: string,
  date: string,
  lesson_num: number,
  title: string,
  description: string,
  author: number
};

export const cards: ICards[] = [
  {
    id: 1,
    image: "https://loremflickr.com/320/240/animals?=1",
    text: "Some text 1",
    date: "2024-01-18",
    lesson_num: 1,
    title: "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
    description: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight",
    author: 1
  },
  {
    id: 2,
    image: "https://loremflickr.com/320/240/animals?=2",
    text: "Some text 2",
    date: "2024-01-19",
    lesson_num: 2,
    title: "Hungarian and Polish farmers stage protest on border with Ukraine",
    description: "Farmers have been protesting across several member states over low-cost imports of Ukrainian and Moldovan produce and EU green regulations.",
    author: 2
  },
  {
    id: 3,
    image: "https://loremflickr.com/320/240/animals?=3",
    text: "Some text 3",
    date: "2024-01-20",
    lesson_num: 3,
    title: "Egypt’s pyramid restoration",
    description: "Workers in Egypt are fixing a pyramid called Menkaure. This pyramid is close to the Sphinx and the two large pyramids at Giza.",
    author: 3
  },
  {
    id: 4,
    image: "https://loremflickr.com/320/240/animals?=4",
    text: "Some text 4",
    date: "2024-01-21",
    lesson_num: 4,
    title: "Lights in the Dark: Fall Light Festivals in Thailand",
    description: "Looking for somewhere to travel this fall? Why not go to Thailand’s famous light festivals? These festivals both happen in November and are called Yi Peng and Loi Krathong. Yi Peng is a lantern festival, and Loi Krathong is a Buddhist holiday honoring the Water Goddess and the Ping River.",
    author: 4
  },
  {
    id: 5,
    image: "https://loremflickr.com/320/240/animals?=5",
    text: "Some text 5",
    date: "2024-01-22",
    lesson_num: 5,
    title: "Behind the scenes at Hassan II Trophy, Morocco’s most famous golf tournament",
    description: "In this episode of Spotlight we go behind the scenes at the Royal Golf Dar Es Salam in anticipation of the upcoming Hassan II Trophy and accompanying Lalla Meryem Cup, two of the most prestigious golfing events in Morocco, running from the 19th to 24th of February 2024.",
    author: 5
  },
  {
    id: 6,
    image: "https://loremflickr.com/320/240/animals?=6",
    text: "Some text 6",
    date: "2024-01-23",
    lesson_num: 6,
    title: "Azerbaijan Hosts Historic Inauguration of the International Chovqan Federation",
    description: "In a significant stride for the ancient sport of Chovqan, Azerbaijan has become the birthplace of its first-ever International Federation",
    author: 6
  },
  {
    id: 7,
    image: "https://loremflickr.com/320/240/animals?=7",
    text: "Some text 7",
    date: "2024-01-24",
    lesson_num: 7,
    title: "Race to rescue stray dogs in Russia after new euthanasia law",
    description: "Volunteers in Buryatia, near the Russia-Mongolia border, say they've rehomed some 600 animals to other regions.",
    author: 7
  },
  {
    id: 8,
    image: "https://loremflickr.com/320/240/animals?=8",
    text: "Some text 8",
    date: "2024-01-25",
    lesson_num: 8,
    title: "Dutch universities plan to limit amount of international students",
    description: "The country is a very popular study destination for foreigners, with numbers tripling in the last decade.",
    author: 8
  },
  {
    id: 9,
    image: "https://loremflickr.com/320/240/animals?=9",
    text: "Some text 9",
    date: "2024-01-26",
    lesson_num: 9,
    title: "What is going on with Berlin Film Festival and German far-right party AfD?",
    description: "Directors of the Berlin Film Festival have U-turned and disinvited members of German far-right party AfD, in light of revelations over an alleged “masterplan” concerning mass deportation.",
    author: 9
  },
  {
    id: 10,
    image: "https://loremflickr.com/320/240/animals?=10",
    text: "Some text 10",
    date: "2024-01-27",
    lesson_num: 10,
    title: "Volcanic eruption in Iceland subsides, though scientists warn more activity may follow",
    description: "The eruption on Thursday disrupted the heat and hot water supplies for thousands of residents in the town of Grindavik.",
    author: 10
  },
  {
    id: 11,
    image: "https://loremflickr.com/320/240/animals?=11",
    text: "Some text 10",
    date: "2024-01-28",
    lesson_num: 11,
    title: "The secret of giraffes' long legs",
    description: "These giraffes at a zoo near London are helping researchers find out just how their spindly legs work. Experts are using special technology to measure the animals' leg movements. They want to see if being tall is a help or a hindrance to moving around.",
    author: 11
  }
];




type IMenuLink = {
  title: string,
  url: string
};

export const menuLink: IMenuLink[] = [
  {
    title: "Blog",
    url: "/"
  },
  {
    title: "Sign In",
    url: "/signin"
  }
]