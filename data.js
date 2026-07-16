/* ------------------------------------------------------------------
   DATA FILE
   Edit this file to plug in your own content.

   - Swap `blurb` for your own metric descriptions.
   - Swap `image` for the path to your own chart image
     (drop files into assets/images/ using the same filename).
   - Swap the rows inside `topTen` for your real rankings.
   - `score` can be a number or a string ("—" while empty).
------------------------------------------------------------------- */

const CATEGORY_INFO = {
  structural: {
    label: "Structural leadership",
    description: "The resources a country brings to Antarctica — stations, vessels, voice, and follow-through.",
  },
  brokering: {
    label: "Brokering leadership",
    description: "A country's position between other Parties — how much it connects, coordinates, and co-signs.",
  },
  intellectual: {
    label: "Intellectual leadership",
    description: "The ideas a country contributes — new proposals, research, and the substance behind new rules.",
  },
};

// A placeholder set of Antarctic Treaty Consultative Parties, used to
// scaffold each metric's top-10 table. Replace scores with your data.
const PLACEHOLDER_PARTIES = [
  "United Kingdom", "United States", "Australia", "Argentina", "New Zealand",
  "Chile", "Norway", "France", "Germany", "China",
];

function placeholderTopTen() {
  return PLACEHOLDER_PARTIES.map((party, i) => ({
    rank: i + 1,
    party,
    score: "—",
  }));
}

const METRICS = [
  // --- Structural ---------------------------------------------------
  {
    slug: "infrastructure-investment",
    category: "structural",
    number: 1,
    title: "Infrastructure investment",
    blurb: "Station capacity and vessel capacity, as a tangible measure of a country's presence on the continent.",
    image: "assets/images/infrastructure-investment.svg",
    figureCaption: "Each Consultative Party's station capacity plotted against its vessel capacity, on logarithmic axes.",
    topTen: [
      { rank: 1, party: "Argentina", score: 524.75 },
      { rank: 2, party: "Chile", score: 359.75 },
      { rank: 3, party: "Australia", score: 307.75 },
      { rank: 4, party: "Russia", score: 272.5 },
      { rank: 5, party: "China", score: 256.5 },
      { rank: 6, party: "United States", score: 249 },
      { rank: 7, party: "Japan", score: 196.25 },
      { rank: 8, party: "Republic of Korea", score: 158 },
      { rank: 9, party: "United Kingdom", score: 148.5 },
      { rank: 10, party: "Italy", score: 123.5 },
    ],
  },
  {
    slug: "outspokenness",
    category: "structural",
    number: 2,
    title: "Outspokenness at ATCMs",
    blurb: "How often a country intervenes during Antarctic Treaty Consultative Meetings.",
    image: "assets/images/outspokenness.svg",
    figureCaption: "Each Consultative Party's yearly count of ATCM interventions from 2000 to 2023, ranked by total.",
    topTen: [
      { rank: 1, party: "United Kingdom", score: 1922 },
      { rank: 2, party: "Australia", score: 1751 },
      { rank: 3, party: "Argentina", score: 1586 },
      { rank: 4, party: "United States", score: 1370 },
      { rank: 5, party: "New Zealand", score: 1228 },
      { rank: 6, party: "Chile", score: 1117 },
      { rank: 7, party: "Norway", score: 994 },
      { rank: 8, party: "Russian Federation", score: 923 },
      { rank: 9, party: "France", score: 814 },
      { rank: 10, party: "Germany", score: 697 },
    ],
  },
  {
    slug: "ratification-speed",
    category: "structural",
    number: 3,
    title: "Ratification speed",
    blurb: "Average time between a Measure passing and a country ratifying it.",
    image: "assets/images/ratification-speed.svg",
    figureCaption: "Consultative Parties ranked by their average delay, in years, between a Measure passing and their ratifying it.",
  },
  {
    slug: "influence-atcms",
    category: "structural",
    number: 4,
    title: "Influence on other Parties at ATCMs",
    blurb: "How often a country is mentioned by other Parties in ATCM Final Reports.",
    image: "assets/images/influence-atcms.svg",
    figureCaption: "Each Consultative Party, scaled by how often it is mentioned by other Parties in ATCM Final Reports.",
    topTen: [
      { rank: 1, party: "Australia", score: 3824 },
      { rank: 2, party: "United Kingdom", score: 2800 },
      { rank: 3, party: "Argentina", score: 2701 },
      { rank: 4, party: "United States", score: 2646 },
      { rank: 5, party: "Chile", score: 2625 },
      { rank: 6, party: "New Zealand", score: 2580 },
      { rank: 7, party: "Russian Federation", score: 2126 },
      { rank: 8, party: "Norway", score: 1783 },
      { rank: 9, party: "France", score: 1535 },
      { rank: 10, party: "Germany", score: 1472 },
    ],
  },

  // --- Brokering ------------------------------------------------------
  {
    slug: "network-position",
    category: "brokering",
    number: 1,
    title: "Position in the network of Consultative Parties",
    blurb: "How central a country sits within the network of inter-Party collaboration.",
    image: "assets/images/network-position.svg",
    figureCaption: "Consultative Parties positioned by their co-authorship ties, with size reflecting how connected each country is.",
  },
  {
    slug: "coauthorship-working-papers",
    category: "brokering",
    number: 2,
    title: "Co-authorship of Working Papers",
    blurb: "How often a country co-signs Working Papers led by other Parties.",
    image: "assets/images/coauthorship-working-papers.svg",
    figureCaption: "The number of Working Papers each Consultative Party co-authored at each Antarctic Treaty Consultative Meeting over time.",
  },

  // --- Intellectual ----------------------------------------------------
  {
    slug: "new-ideas",
    category: "intellectual",
    number: 1,
    title: "Introducing new ideas to ATCMs",
    blurb: "New topics first substantively raised in a Working Paper, attributed to their authoring Party.",
    image: "assets/images/new-ideas.svg",
    figureCaption: "The number of new topics first substantively raised in Working Papers each year from 1961 to 2023.",
    topTen: [
      { rank: 1, party: "United Kingdom", score: 25.45 },
      { rank: 2, party: "Australia", score: 15.53 },
      { rank: 3, party: "United States", score: 15.2 },
      { rank: 4, party: "Chile", score: 8.83 },
      { rank: 5, party: "Argentina", score: 8.67 },
      { rank: 6, party: "New Zealand", score: 7.83 },
      { rank: 7, party: "France", score: 5 },
      { rank: 8, party: "South Africa", score: 2.75 },
      { rank: 9, party: "Norway", score: 2.7 },
      { rank: 10, party: "Belgium", score: 2.42 },
    ],
  },
  {
    slug: "information-papers",
    category: "intellectual",
    number: 2,
    title: "Submission of Information Papers to ATCMs",
    blurb: "Research and findings a Party brings directly into the policy discussion.",
    image: "assets/images/information-papers.svg",
    figureCaption: "The number of Information Papers each Consultative Party submitted at each Antarctic Treaty Consultative Meeting over time.",
    topTen: [
      { rank: 1, party: "Australia", score: 189.71 },
      { rank: 2, party: "Chile", score: 169.02 },
      { rank: 3, party: "United Kingdom", score: 151.98 },
      { rank: 4, party: "United States", score: 137.8 },
      { rank: 5, party: "Argentina", score: 131.28 },
      { rank: 6, party: "Russian Federation", score: 101.82 },
      { rank: 7, party: "New Zealand", score: 91.51 },
      { rank: 8, party: "Germany", score: 80.03 },
      { rank: 9, party: "Japan", score: 66.58 },
      { rank: 10, party: "Brazil", score: 62.41 },
    ],
  },
  {
    slug: "lead-authorship",
    category: "intellectual",
    number: 3,
    title: "Lead authorship of Working Papers",
    blurb: "Which Party is most often the primary driver behind a proposal.",
    image: "assets/images/lead-authorship.svg",
    figureCaption: "The number of Working Papers each Consultative Party led as first author at each Antarctic Treaty Consultative Meeting over time.",
    topTen: [
      { rank: 1, party: "United Kingdom", score: 191.63 },
      { rank: 2, party: "United States", score: 139.94 },
      { rank: 3, party: "Australia", score: 139.14 },
      { rank: 4, party: "New Zealand", score: 127.71 },
      { rank: 5, party: "Argentina", score: 86.96 },
      { rank: 6, party: "Chile", score: 66.86 },
      { rank: 7, party: "Norway", score: 66.31 },
      { rank: 8, party: "France", score: 57.07 },
      { rank: 9, party: "Russian Federation", score: 54.16 },
      { rank: 10, party: "China", score: 27.48 },
    ],
  },
  {
    slug: "measures-contribution",
    category: "intellectual",
    number: 4,
    title: "Contributing ideas to new Antarctic Treaty Measures",
    blurb: "Share of content in ratified Measures traceable back to a Party's earlier Working Papers.",
    image: "assets/images/measures-contribution.svg",
    figureCaption: "Consultative Parties ranked by their estimated share of content in ratified Antarctic Treaty Measures.",
  },
  {
    slug: "journal-articles",
    category: "intellectual",
    number: 5,
    title: "Publication of peer-reviewed journal articles",
    blurb: "Q1-journal Antarctic research output with a Consultative Party affiliation.",
    image: "assets/images/journal-articles.svg",
    figureCaption: "Each Consultative Party, scaled by its number of Q1 peer-reviewed Antarctic research publications.",
  },
  {
    slug: "scar-contributions",
    category: "intellectual",
    number: 6,
    title: "Contributions to SCAR",
    blurb: "Leadership roles held within the Scientific Committee on Antarctic Research.",
    image: "assets/images/scar-contributions.svg",
    figureCaption: "The number of SCAR leadership roles held by each Consultative Party in each year from 2000 to 2024.",
  },
];

// Fill in a placeholder top-10 table for any metric that doesn't have
// real ranking data yet (no matching CSV was found in Report/Tables/).
METRICS.forEach((m) => {
  if (!m.topTen) m.topTen = placeholderTopTen();
});
