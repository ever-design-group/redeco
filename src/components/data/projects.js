// REDECO design projects. Images live in public/img/projects/<slug>/.
// `cover` is the photo used for the project's page header,
// `card` the one shown on its card in the Projects page grid.

const img = (slug, n) => `/img/projects/${slug}/${n}.jpg`;

const projects = [
  {
    slug: 'gacuriro',
    name: 'Gacuriro Villa',
    location: 'Gacuriro, Kigali',
    type: 'Residential Villa',
    services: 'Architectural Design, 3D Visualization',
    status: 'Design Completed',
    summary:
      'A contemporary family villa organised around a large swimming pool, with open living spaces that flow straight out to the terrace and garden.',
    description: [
      'The Gacuriro villa is designed for relaxed family living and entertaining. Wide sliding glass walls open the ground-floor living and dining areas onto a covered terrace and a generous pool deck.',
      'Warm timber cladding and a natural stone feature wall balance the clean white volumes, while a covered parking area and landscaped garden complete the plot.'
    ],
    features: [
      'Large swimming pool with sun deck',
      'Covered outdoor living terrace',
      'Floor-to-ceiling sliding glass walls',
      'Timber cladding and natural stone feature wall',
      'Covered parking for two cars',
      'Landscaped garden and pathways'
    ],
    cover: 1,
    card: 2,
    images: [
      { src: img('gacuriro', 1), caption: 'Front view with pool and covered parking' },
      { src: img('gacuriro', 2), caption: 'Pool terrace and open living area' }
    ]
  },
  {
    slug: 'gisozi',
    name: 'Gisozi Residence',
    location: 'Gisozi, Kigali',
    type: 'Residential Villa',
    services: 'Architectural Design, 3D Visualization',
    status: 'Design Completed',
    summary:
      'Two design concepts for a modern residence: a timber-and-stone pool villa, and a bold white home with a curved arched frame.',
    description: [
      'For the Gisozi residence, REDECO developed two design directions so the client could compare styles before moving forward.',
      'The first concept is a two-storey pool villa with deep overhangs, glass balustrades, timber fins and a stone column anchoring the facade. The second is a sculptural white house with rounded balconies and a signature arched frame that wraps the upper floors.'
    ],
    features: [
      'Two complete design concepts',
      'Pool villa with sun loungers and outdoor lounge',
      'Glass balustrade balconies on every level',
      'Timber fins and natural stone detailing',
      'Curved balconies and arched feature frame (concept two)',
      'Landscaped entrance and driveway'
    ],
    cover: 1,
    card: 1,
    images: [
      { src: img('gisozi', 1), caption: 'Concept one: pool villa, garden view' },
      { src: img('gisozi', 2), caption: 'Concept one: pool and outdoor lounge' },
      { src: img('gisozi', 3), caption: 'Concept two: arched facade and entrance' },
      { src: img('gisozi', 4), caption: 'Concept two: garden side with curved balconies' }
    ]
  },
  {
    slug: 'kacyiru',
    name: 'Kacyiru Villa',
    location: 'Kacyiru, Kigali',
    type: 'Residential Villa',
    services: 'Architectural Design, 3D Visualization',
    status: 'Design Completed',
    summary:
      'A three-storey villa with layered, cantilevered terraces, planted balconies and a ground-floor living space that opens onto the pool.',
    description: [
      'The Kacyiru villa stacks three generous floors, each with its own terrace. Cantilevered slabs and glass balustrades give every level open views, while planters soften the edges.',
      'Vertical timber fins, dark stone cladding and a timber soffit add warmth and texture to the white facade, and the ground floor opens fully onto the pool deck.'
    ],
    features: [
      'Three floors with private terraces',
      'Cantilevered slabs with glass balustrades',
      'Planted balconies and roof garden',
      'Timber fins, timber soffit and stone cladding',
      'Swimming pool with lounge deck',
      'Open-plan ground-floor living and dining'
    ],
    cover: 1,
    card: 1,
    images: [
      { src: img('kacyiru', 1), caption: 'Pool side view' },
      { src: img('kacyiru', 2), caption: 'Entrance side with gated access' }
    ]
  },
  {
    slug: 'karembure',
    name: 'Karembure Residence',
    location: 'Karembure, Kigali',
    type: 'Residential House',
    services: 'Architectural Design, 3D Visualization',
    status: 'Design Completed',
    summary:
      'A modern three-storey home with wraparound glass balconies, a roof terrace and a secure gated compound with ground-floor parking.',
    description: [
      'The Karembure residence is a clean, contemporary home designed around light and privacy. Full-height glazing and wraparound glass balconies bring daylight deep into every floor.',
      'A gated entrance leads to covered ground-floor parking, and a landscaped staircase rises to the main entrance. The roof terrace adds outdoor space with views over the neighbourhood.'
    ],
    features: [
      'Three floors with wraparound glass balconies',
      'Roof terrace with planting',
      'Gated compound with covered parking',
      'Landscaped entrance stairs',
      'Full-height glazing for natural light',
      'Timber and dark accent details'
    ],
    cover: 1,
    card: 2,
    images: [
      { src: img('karembure', 1), caption: 'Street view with gated entrance' },
      { src: img('karembure', 2), caption: 'Entrance stairs and driveway' },
      { src: img('karembure', 3), caption: 'Garden side view' }
    ]
  },
  {
    slug: 'kicukiro',
    name: 'Kicukiro Hillside Villa',
    location: 'Kicukiro, Kigali',
    type: 'Residential Villa',
    services: 'Architectural Design, 3D Visualization',
    status: 'Design Completed',
    summary:
      'A hillside villa that uses the slope to its advantage, with an infinity pool terrace set above a two-car garage.',
    description: [
      'Designed for a sloping site, the Kicukiro villa places the garage at street level and lifts the main living spaces and pool onto a terrace above.',
      'A wide external staircase climbs through landscaped planting to the pool deck, where the infinity pool, outdoor lounge and glazed living room share the view.'
    ],
    features: [
      'Infinity pool on a raised terrace',
      'Two-car garage at street level',
      'Landscaped external staircase',
      'Outdoor lounge and sun deck',
      'Timber, stone and glass facade',
      'Designed to suit a sloping site'
    ],
    cover: 2,
    card: 2,
    images: [
      { src: img('kicukiro', 1), caption: 'Hillside villa overview' },
      { src: img('kicukiro', 2), caption: 'Pool terrace and garage from the street' },
      { src: img('kicukiro', 3), caption: 'Side view with staircase and garden' }
    ]
  }
];

export const coverOf = project => project.images[project.cover - 1].src;
export const cardOf = project => project.images[project.card - 1].src;

export default projects;
