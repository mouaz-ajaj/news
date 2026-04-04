import { Comment, NewsCategory, NewsPost, RelatedCard } from "@/types";

export const comments: Comment[] = [
  {
    name: "Marcus Thorne",
    time: "2 hours ago",
    text: "A truly insightful piece. The technical breakdown of the tandem structure helps bridge the gap for those of us not in the physics world. Looking forward to the field test results.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCQaupFY1xQ2qOmjbysWROOO6DPB1Ub8D2Bbr-xoeE7jWFQIg6F-tbGKMQy_5JAPJ5I7x2BlTj1pTlTRzpWvH3luiEVQZGFwYIRdJxWuuOZb1B_QGmDIa8ZWZGIieeCwUe1wLTKm_dVkCg9paXLKKXK_yXjlEiGEv8-Q2b-xT8ppizCOpy6yCr6CRMgr2ajbUHZ22IeF7fEC9mYQkAW7YHYFzsnOgEvxPShbAYn9hiq2m1wPAPskMN95kasR8uzwBg5ROtQ-h2h2q4",
  },
  {
    name: "Elena Rossi",
    time: "5 hours ago",
    text: "Will this impact the residential solar market immediately or is this strictly utility-scale for the first decade? Excellent reporting as always.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC5-fMhVco8uuGzDO4vBzMnP7WpbgwUFa9h0XkDCIradgJ9TAZymPtIcWN6GLn7QBelPKGuy1JADWd0wddbh5FvDpEQ_bNd6uNWlhDeCSSe4afwMVRWNi-x6QWPFCcC6c4nTLioMfMYUA7snPMKFzocDsTmga7I5owjUyV6M9amAsnBB61eb0fXuKxLJs6smRneOlzeWkQqwtIBvrLAjUaxQpptslpCPqWDerfthI9OjQP4-DR8YaHL-uo8OW-86sdkeqSCGB2hIK0",
  },
];

export const relatedCards: RelatedCard[] = [
  {
    category: "Innovation",
    title: "Offshore Wind: The Quiet Revolution in the North Sea",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCScaz7fVajwALm_QPASmcPhi-jo0Ae2cAqlAj5VxUgTWB8iZAo9O_O3z3xdWk2EmHyMOT6RcIoFQTF1XDh5wsH2V6sKHBYdlOqSR0Ps-5ZBpIE8jm3yznVVBT4pRc9o4NWlXyG6MtS8-5kfuyq56NvE6gQEOB5_5PsfalnC-xPl4XQ3GEe6S5K545T5FJyNHnsaztdFB_LpKpKi1MDZDX59R9zAnGAuTbqFqUpKsFcq7siF_Vwyj6wX3Q88dIzRIAFwORj0_Osk2Y",
  },
  {
    category: "Environment",
    title: "Vertical Forests: How We Are Rethinking Urban Air Quality",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA7qhlEWAKVrUkpa_9T7UmJjN6GKVMG5wr5NeTA7NISiDaCa_-Zk1twU4UUPRqJyW1uiQb8m7xYPJMFzSO_7hrwQfRYiwFv78VOu2mx_RRaf7_pDpbfpky15IB-KxhFSIn37ZLKuu-fE99btw4p6ac9sbw0oRdyuYD6wnwAt7tWHj2oEk9pTh8MC0zk2hVf4_QNfyPhvPGjjFiSZezD13K4Ix44ZA8UuUsJ6fv9NP9vgrinPP24IVmP9yEpeBRKgAKyFcI16F8npEM",
  },
  {
    category: "Automotive",
    title: "Beyond the Battery: The Next Generation of EV Motors",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCaIjVaDBylYN4TR4V8QW48Qxh4Ufqocxh8qtfG46-vcxs5qngNLhb9RZS9d8QY4iJ0VsSvjD2-up5NzV_UIdRHbs9gW2-lrSs0YwxHYH4Dc8V6SO7Byzk-GkgAaZnqz7UIKj_kXetF0-XrSG2aQ_Ho8kzw-R5TPShyp4qqXb7Sz9anxlmelfAQl4ReIM6vvOQwuvgFv0LqwZRZMMYx1jTsWI2wAzvwuVeNg06dZXU1t2mnnM2bINLAFrinshelMj7ivRIu26u4M6k",
  },
];

export const newsCategories: NewsCategory[] = [
  { id: 1, name: "World", slug: "world" },
  { id: 2, name: "Politics", slug: "politics" },
  { id: 3, name: "Business", slug: "business" },
  { id: 4, name: "Technology", slug: "technology" },
  { id: 5, name: "Science", slug: "science" },
  { id: 6, name: "Health", slug: "health" },
  { id: 7, name: "Sports", slug: "sports" },
  { id: 8, name: "Arts & Culture", slug: "arts-culture" },
];

const authors = [
  {
    id: 3,
    first_name: "Dr. Meggie Aufderhar I",
    last_name: "Lennie Yundt",
    image: null,
    email: "pfeffer.marcelo@example.net",
    country: "Bangladesh",
    city: "West Johathanfort",
    status: 1,
    phone: "+1-272-984-8700",
    email_verified_at: "2026-04-03T18:49:11.000000Z",
    created_at: "2026-04-03T18:49:11.000000Z",
    updated_at: "2026-04-03T18:49:11.000000Z",
  },
  {
    id: 6,
    first_name: "Nichole Hill",
    last_name: "Naomi Cronin Jr.",
    image: null,
    email: "froob@example.net",
    country: "Kenya",
    city: "Haagberg",
    status: 1,
    phone: "+1-857-595-7044",
    email_verified_at: "2026-04-03T18:49:11.000000Z",
    created_at: "2026-04-03T18:49:11.000000Z",
    updated_at: "2026-04-03T18:49:11.000000Z",
  },
  {
    id: 7,
    first_name: "Willard Carter",
    last_name: "Miracle Trantow",
    image: null,
    email: "omills@example.org",
    country: "United States Virgin Islands",
    city: "Lake Celineberg",
    status: 1,
    phone: "(458) 417-4454",
    email_verified_at: "2026-04-03T18:49:11.000000Z",
    created_at: "2026-04-03T18:49:11.000000Z",
    updated_at: "2026-04-03T18:49:11.000000Z",
  },
];

const sidebarPostSeeds = [
  {
    category_id: 1,
    title: "Ceasefire Talks Resume After Overnight Diplomatic Push",
    description:
      "Regional envoys returned to the negotiating table after a late-night breakthrough on border monitoring terms Regional envoys returned to the negotiating table after a late-night breakthrough on border monitoring termsRegional envoys returned to the negotiating table after a late-night breakthrough on border monitoring termsRegional envoys returned to the negotiating table after a late-night breakthrough on border monitoring termsRegional envoys returned to the negotiating table after a late-night breakthrough on border monitoring terms.",
  },
  {
    category_id: 1,
    title: "Coastal Capitals Prepare for New Shipping Security Rules",
    description:
      "Regional envoys returned to the negotiating table after a late-night breakthrough on border monitoring terms Regional envoys returned to the negotiating table after a late-night breakthrough on border monitoring termsRegional envoys returned to the negotiating table after a late-night breakthrough on border monitoring termsRegional envoys returned to the negotiating table after a late-night breakthrough on border monitoring termsRegional envoys returned to the negotiating table after a late-night breakthrough on border monitoring terms.",
  },
  {
    category_id: 1,
    title: "Aid Corridors Reopen as Winter Supply Deadlines Approach",
    description:
      "Regional envoys returned to the negotiating table after a late-night breakthrough on border monitoring terms Regional envoys returned to the negotiating table after a late-night breakthrough on border monitoring termsRegional envoys returned to the negotiating table after a late-night breakthrough on border monitoring termsRegional envoys returned to the negotiating table after a late-night breakthrough on border monitoring termsRegional envoys returned to the negotiating table after a late-night breakthrough on border monitoring terms.",
  },
  {
    category_id: 2,
    title: "Coalition Leaders Trade Tax Reform Concessions Ahead of Vote",
    description:
      "Regional envoys returned to the negotiating table after a late-night breakthrough on border monitoring terms Regional envoys returned to the negotiating table after a late-night breakthrough on border monitoring termsRegional envoys returned to the negotiating table after a late-night breakthrough on border monitoring termsRegional envoys returned to the negotiating table after a late-night breakthrough on border monitoring termsRegional envoys returned to the negotiating table after a late-night breakthrough on border monitoring terms.",
  },
  {
    category_id: 2,
    title: "Interior Ministry Faces Scrutiny Over Emergency Powers Review",
    description:
      "Regional envoys returned to the negotiating table after a late-night breakthrough on border monitoring terms Regional envoys returned to the negotiating table after a late-night breakthrough on border monitoring termsRegional envoys returned to the negotiating table after a late-night breakthrough on border monitoring termsRegional envoys returned to the negotiating table after a late-night breakthrough on border monitoring termsRegional envoys returned to the negotiating table after a late-night breakthrough on border monitoring terms.",
  },
  {
    category_id: 2,
    title: "Mayors Back New Housing Bill With Local Zoning Guarantees",
    description:
      "Regional envoys returned to the negotiating table after a late-night breakthrough on border monitoring terms Regional envoys returned to the negotiating table after a late-night breakthrough on border monitoring termsRegional envoys returned to the negotiating table after a late-night breakthrough on border monitoring termsRegional envoys returned to the negotiating table after a late-night breakthrough on border monitoring termsRegional envoys returned to the negotiating table after a late-night breakthrough on border monitoring terms.",
  },
  {
    category_id: 3,
    title: "Retail Earnings Signal Cautious Consumer Spending Into Summer",
    description:
      "Regional envoys returned to the negotiating table after a late-night breakthrough on border monitoring terms Regional envoys returned to the negotiating table after a late-night breakthrough on border monitoring termsRegional envoys returned to the negotiating table after a late-night breakthrough on border monitoring termsRegional envoys returned to the negotiating table after a late-night breakthrough on border monitoring termsRegional envoys returned to the negotiating table after a late-night breakthrough on border monitoring terms.",
  },
  {
    category_id: 3,
    title: "Regional Banks Expand SME Lending Despite Rate Uncertainty",
    description:
      "Regional envoys returned to the negotiating table after a late-night breakthrough on border monitoring terms Regional envoys returned to the negotiating table after a late-night breakthrough on border monitoring termsRegional envoys returned to the negotiating table after a late-night breakthrough on border monitoring termsRegional envoys returned to the negotiating table after a late-night breakthrough on border monitoring termsRegional envoys returned to the negotiating table after a late-night breakthrough on border monitoring terms.",
  },
  {
    category_id: 3,
    title: "Logistics Firms Race to Automate Warehouses Near Major Ports",
    description:
      "Regional envoys returned to the negotiating table after a late-night breakthrough on border monitoring terms Regional envoys returned to the negotiating table after a late-night breakthrough on border monitoring termsRegional envoys returned to the negotiating table after a late-night breakthrough on border monitoring termsRegional envoys returned to the negotiating table after a late-night breakthrough on border monitoring termsRegional envoys returned to the negotiating table after a late-night breakthrough on border monitoring terms.",
  },
  {
    category_id: 4,
    title: "Chipmakers Shift to Low-Power AI Designs for Edge Devices",
    description:
      "Regional envoys returned to the negotiating table after a late-night breakthrough on border monitoring terms Regional envoys returned to the negotiating table after a late-night breakthrough on border monitoring termsRegional envoys returned to the negotiating table after a late-night breakthrough on border monitoring termsRegional envoys returned to the negotiating table after a late-night breakthrough on border monitoring termsRegional envoys returned to the negotiating table after a late-night breakthrough on border monitoring terms.",
  },
  {
    category_id: 4,
    title: "Messaging Platforms Test Verified Identity Layers for Creators",
    description:
      "Regional envoys returned to the negotiating table after a late-night breakthrough on border monitoring terms Regional envoys returned to the negotiating table after a late-night breakthrough on border monitoring termsRegional envoys returned to the negotiating table after a late-night breakthrough on border monitoring termsRegional envoys returned to the negotiating table after a late-night breakthrough on border monitoring termsRegional envoys returned to the negotiating table after a late-night breakthrough on border monitoring terms.",
  },
  {
    category_id: 4,
    title: "Satellite Startups Compete to Deliver Hourly Climate Imaging",
    description:
      "Regional envoys returned to the negotiating table after a late-night breakthrough on border monitoring terms Regional envoys returned to the negotiating table after a late-night breakthrough on border monitoring termsRegional envoys returned to the negotiating table after a late-night breakthrough on border monitoring termsRegional envoys returned to the negotiating table after a late-night breakthrough on border monitoring termsRegional envoys returned to the negotiating table after a late-night breakthrough on border monitoring terms.",
  },
  {
    category_id: 5,
    title: "Deep-Sea Research Team Maps Rare Vents Beneath Polar Shelf",
    description:
      "Regional envoys returned to the negotiating table after a late-night breakthrough on border monitoring terms Regional envoys returned to the negotiating table after a late-night breakthrough on border monitoring termsRegional envoys returned to the negotiating table after a late-night breakthrough on border monitoring termsRegional envoys returned to the negotiating table after a late-night breakthrough on border monitoring termsRegional envoys returned to the negotiating table after a late-night breakthrough on border monitoring terms.",
  },
  {
    category_id: 5,
    title: "Gene Editing Study Shows Stronger Drought Resistance in Wheat",
    description:
      "Regional envoys returned to the negotiating table after a late-night breakthrough on border monitoring terms Regional envoys returned to the negotiating table after a late-night breakthrough on border monitoring termsRegional envoys returned to the negotiating table after a late-night breakthrough on border monitoring termsRegional envoys returned to the negotiating table after a late-night breakthrough on border monitoring termsRegional envoys returned to the negotiating table after a late-night breakthrough on border monitoring terms.",
  },
  {
    category_id: 5,
    title: "Astronomers Detect Repeating Radio Burst From Quiet Spiral Arm",
    description:
      "Regional envoys returned to the negotiating table after a late-night breakthrough on border monitoring terms Regional envoys returned to the negotiating table after a late-night breakthrough on border monitoring termsRegional envoys returned to the negotiating table after a late-night breakthrough on border monitoring termsRegional envoys returned to the negotiating table after a late-night breakthrough on border monitoring termsRegional envoys returned to the negotiating table after a late-night breakthrough on border monitoring terms.",
  },
  {
    category_id: 6,
    title: "Clinics Pilot At-Home Screening Kits for Heart Failure Risk",
    description:
      "Regional envoys returned to the negotiating table after a late-night breakthrough on border monitoring terms Regional envoys returned to the negotiating table after a late-night breakthrough on border monitoring termsRegional envoys returned to the negotiating table after a late-night breakthrough on border monitoring termsRegional envoys returned to the negotiating table after a late-night breakthrough on border monitoring termsRegional envoys returned to the negotiating table after a late-night breakthrough on border monitoring terms.",
  },
  {
    category_id: 6,
    title: "Public Health Teams Track Rise in Heat-Linked Respiratory Cases",
    description:
      "Regional envoys returned to the negotiating table after a late-night breakthrough on border monitoring terms Regional envoys returned to the negotiating table after a late-night breakthrough on border monitoring termsRegional envoys returned to the negotiating table after a late-night breakthrough on border monitoring termsRegional envoys returned to the negotiating table after a late-night breakthrough on border monitoring termsRegional envoys returned to the negotiating table after a late-night breakthrough on border monitoring terms.",
  },
  {
    category_id: 6,
    title: "Nutrition Researchers Reevaluate Ultra-Processed Food Labels",
    description:
      "Regional envoys returned to the negotiating table after a late-night breakthrough on border monitoring terms Regional envoys returned to the negotiating table after a late-night breakthrough on border monitoring termsRegional envoys returned to the negotiating table after a late-night breakthrough on border monitoring termsRegional envoys returned to the negotiating table after a late-night breakthrough on border monitoring termsRegional envoys returned to the negotiating table after a late-night breakthrough on border monitoring terms.",
  },
  {
    category_id: 7,
    title: "League Officials Approve Expanded Video Review for Finals",
    description:
      "Regional envoys returned to the negotiating table after a late-night breakthrough on border monitoring terms Regional envoys returned to the negotiating table after a late-night breakthrough on border monitoring termsRegional envoys returned to the negotiating table after a late-night breakthrough on border monitoring termsRegional envoys returned to the negotiating table after a late-night breakthrough on border monitoring termsRegional envoys returned to the negotiating table after a late-night breakthrough on border monitoring terms.",
  },
  {
    category_id: 7,
    title: "Marathon Organizers Redesign Route Around Historic River District",
    description:
      "Regional envoys returned to the negotiating table after a late-night breakthrough on border monitoring terms Regional envoys returned to the negotiating table after a late-night breakthrough on border monitoring termsRegional envoys returned to the negotiating table after a late-night breakthrough on border monitoring termsRegional envoys returned to the negotiating table after a late-night breakthrough on border monitoring termsRegional envoys returned to the negotiating table after a late-night breakthrough on border monitoring terms.",
  },
  {
    category_id: 7,
    title: "Academy Prospects Drive Surprise Midseason Turnaround",
    description:
      "A run of disciplined defensive performances has pushed the club back into continental contention.",
  },
  {
    category_id: 8,
    title: "Independent Festival Expands Program With Restoration Premieres",
    description:
      "Curators are pairing recovered classics with new director commentaries and archival exhibitions.",
  },
  {
    category_id: 8,
    title: "Museum Attendance Climbs After Late-Night Salon Series Launch",
    description:
      "The format blends live criticism, chamber performances, and small-group tours for younger audiences.",
  },
  {
    category_id: 8,
    title: "Publishers Bet on Serialized Fiction to Grow Subscriber Loyalty",
    description:
      "Editors say weekly digital releases are outperforming single-drop launches in reader retention tests.",
  },
];

export const sidebarPosts: NewsPost[] = sidebarPostSeeds.map((post, index) => {
  const id = index + 1;
  const author = authors[index % authors.length];
  const supportAuthor = authors[(index + 1) % authors.length];

  return {
    id,
    ulid: `01KNAAV1RZVQ34R5XDYYCJS${String(id).padStart(2, "0")}`,
    views: 180 + id * 37,
    likes: 220 + id * 29,
    dislikes: 18 + (id % 7) * 3,
    is_featured: id % 5 === 0 ? 1 : 0,
    title: post.title,
    description: post.description,
    status: "published",
    commentable: 1,
    user_id: author.id,
    category_id: post.category_id,
    created_at: `2026-04-${String((id % 4) + 1).padStart(2, "0")}T18:49:11.000000Z`,
    updated_at: `2026-04-${String((id % 4) + 1).padStart(2, "0")}T19:07:59.000000Z`,
    comments_count: (id % 4) + 2,
    comments: [
      {
        id: id * 10 + 1,
        comment: "Illum reiciendis ab.",
        status: 1,
        user_id: supportAuthor.id,
        post_id: id,
        created_at: "2026-04-03T18:49:12.000000Z",
        updated_at: "2026-04-03T18:49:12.000000Z",
        user: supportAuthor,
      },
      {
        id: id * 10 + 2,
        comment: "Perferendis quos officiis.",
        status: 1,
        user_id: author.id,
        post_id: id,
        created_at: "2026-04-03T18:49:12.000000Z",
        updated_at: "2026-04-03T18:49:12.000000Z",
        user: author,
      },
    ],
    user: author,
  };
});

export const headlines: string[] = [
  "Market Trends: Global Luxury Real Estate Hits Record Highs in Q4",
  "Art & Culture: The Grand Editorial's Winter Gala Invitations Issued",
  "Technology: AI Integration in High-End Curated News Delivery",
];
