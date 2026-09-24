export const CASES = [
  {
    id: "airline-oil",
    title: "Airline Oil Price",
    type: "Profitability",
    prompt: "You are a consultant advising the CEO of American Airlines. Recently, the global price of oil has dropped to nearly $0 per barrel. In effect, jet fuel is now free. You can assume there are no material costs associated with acquiring or transporting the fuel. This development represents a major shock to one of the airline industry’s largest operating expenses. All competitor airlines also benefit from this cost change. The CEO has asked for your help understanding the impact of this shift across the business. What areas of American Airlines are likely to be most affected by this fuel price collapse, and how might those impacts manifest?",
    goal: "Identify which parts of American Airlines are most affected by free jet fuel and how those impacts show up across costs, network, competition, and demand — not just a single route or pricing decision.",
    goodQuestions: [
      "Fuel is often 25–30% of airline operating costs. Can we assume American had a similar cost structure before oil went to zero?",
      "Ticket sales are the largest revenue stream — can we confirm that, and that cargo and loyalty are secondary?",
      "Have consumer demand or regulations also shifted, or is free fuel the only shock?",
      "Is the CEO trying to understand full business implications, rather than decide whether to expand routes?"
    ],
    framework: [
      { name: "Cost structure", points: ["Operating-margin lift from eliminating fuel", "Fixed vs variable cost mix after fuel becomes free", "Lower break-even load factor"] },
      { name: "Network economics", points: ["Newly viable long-haul routes", "Expansion potential", "Hub vs point-to-point dynamics"] },
      { name: "Competitive dynamics", points: ["Risk of industry-wide price wars", "Erosion of low-cost carrier cost advantage", "Potential consolidation"] },
      { name: "Consumer behavior", points: ["Demand spike from lower fares", "Shift in business vs leisure mix", "Greater sensitivity to amenities once price is less of a lever"] }
    ]
  },
  {
    id: "cruise-co",
    title: "Cruise Co",
    type: "M&A",
    prompt: "Our client is the CFO of Cruise Co., one of the largest cruise operators in the US. Cruise Co. is considering entering the uber-luxury cruise segment and has identified a small company, Jungle Cruise, for potential acquisition. Should the client go ahead with this purchase?",
    goal: "Decide whether Cruise Co. should acquire Jungle Cruise to enter uber-luxury, and what would make the deal succeed or fail.",
    goodQuestions: [
      "What is the financial hurdle — payback, IRR, or a specific break-even window?",
      "What is Cruise Co.’s current scale, routes, and customer versus Jungle Cruise’s?",
      "Why acquire rather than build a luxury brand in-house?",
      "What does “uber-luxury” mean operationally compared with Cruise Co.’s mass-market ships?"
    ],
    framework: [
      { name: "Financial analysis", points: ["Revenue: tickets, onboard spend, other", "Costs: purchase price and running costs", "Break-even versus the client’s hurdle"] },
      { name: "Market analysis", points: ["Uber-luxury market size and growth", "Other luxury targets vs this asset", "Competitive set"] },
      { name: "Synergies and fit", points: ["Cost synergies in support functions", "Customer and brand fit", "Cultural and leadership risk"] }
    ]
  },
  {
    id: "pricing-games",
    title: "The Pricing Games",
    type: "Pricing",
    prompt: "Your client is NextLevel Gaming (NLG), a start-up in the e-sports and computer gaming industry based in Los Angeles. NLG is planning to launch its first game — an online, multiplayer role-playing game unlike any existing franchise. Being a new player in the industry, NLG’s CEO has asked for your help deciding its business model. The company is considering three alternatives: a subscription model where players pay a monthly fee; a retail model where players pay full price at initial purchase; and a free-to-play model where the game is free but charges for in-game merchandise. How would you advise NLG to proceed?",
    goal: "Recommend which of the three monetization models NLG should launch with, based on profit, player acquisition, and qualitative fit.",
    goodQuestions: [
      "Is this a US-only launch or global?",
      "Who is the target player, and on which platforms will the game run?",
      "How concentrated is competition, and what models do the majors use?",
      "Should the $10M already spent on R&D be treated as sunk?"
    ],
    framework: [
      { name: "Profitability by model", points: ["Players acquired × revenue per player", "Fixed infrastructure vs variable acquisition cost", "Margin, not just absolute profit"] },
      { name: "Qualitative fit", points: ["Competitive response", "Retention vs one-time purchase", "Other income such as merchandise or esports"] },
      { name: "Future optionality", points: ["Sequels and expansions", "Mobile/console", "International launch"] }
    ]
  },
  {
    id: "stance-distance",
    title: "Stance at a Distance",
    type: "Cost reduction",
    prompt: "Our firm has just wrapped up a project with The Stance School, which offers K–12 education in Philadelphia, to help them develop two major strategic initiatives. The first, and the priority, is an e-learning platform so students can learn remotely after a global pandemic sent classes home. The second is a professional-development tool to help teachers design and deliver a remote curriculum. The team estimated the cost at $1 million. You are now tasked with determining how these initiatives will be funded within the next year and whether the school should move forward.",
    goal: "Determine whether the school can fund the $1M remote-learning initiatives internally in the next year and whether it should proceed.",
    goodQuestions: [
      "What is the timeline — when must the programs launch?",
      "Is this a private school, and what is the student mix and scholarship share?",
      "Can the endowment be used, or is it restricted?",
      "Do we need to cover ongoing run-rate as well as the $1M build?"
    ],
    framework: [
      { name: "Funding sources", points: ["Tuition and enrollment", "Fundraising and gifts", "Internal cost savings", "Why endowment may be off-limits"] },
      { name: "Cost structure", points: ["Staffing and salaries vs peers", "Facilities and overhead", "One-time vs ongoing program cost"] },
      { name: "Implementation risk", points: ["Teacher and family adoption", "Equity for scholarship students", "Whether $1M savings can fund the run-rate"] }
    ]
  },
  {
    id: "drinks-gone-flat",
    title: "Drinks Gone Flat",
    type: "Revenue growth",
    prompt: "The beverage department of a regional supermarket has seen a drop in revenue over the last year and has hired your firm to determine the cause of the decline and recommend ways to reverse the trend.",
    goal: "Find why beverage revenue fell and recommend how to reverse it — stay on revenue (price × quantity), not costs.",
    goodQuestions: [
      "Is the client a leading grocer, and in which region?",
      "Did the competitive landscape change this year?",
      "Is the decline isolated to beverages or store-wide?",
      "Is the ask diagnosis plus recommendations, or a specific profit target?"
    ],
    framework: [
      { name: "Revenue levers", points: ["Price vs volume by beverage category", "Mix shift across soda, water, other", "Brand-level price and pack architecture"] },
      { name: "Category and shopper", points: ["Promotion and traffic", "Private label vs national brands", "Health and occasion trends"] },
      { name: "4Ps response", points: ["Pricing and pack sizes", "Placement and assortment", "Promotion and new products"] }
    ]
  },
  {
    id: "apple-of-my-eye",
    title: "Apple of My Eye",
    type: "Market entry",
    prompt: "Bob is a master brewer and has been brewing beer for the past decade. After graduating from Stern, he opened a brewery on the Upper West Side called Something Witty that features Belgian Witbier-style brews. While he found early success, he has noticed an increase in customers asking for gluten-free alternatives, such as cider. Bob has hired us to help him analyze his options.",
    goal: "Help the brewery evaluate expansion options (including cider) while staying profitable.",
    goodQuestions: [
      "Is the goal simply to remain profitable, or is there a growth target?",
      "Does he only sell bottled beer direct-to-consumer today?",
      "Is cider the only request, or are customers asking for other drinks and food?",
      "What capacity, licensing, and equipment constraints does he have?"
    ],
    framework: [
      { name: "Alternatives", points: ["Other drinks: cider, wine, cocktails", "Experiences: music, themed nights", "Food"] },
      { name: "Operations and cost", points: ["Equipment and renovations", "Licensing", "Break-even volume"] },
      { name: "Market", points: ["Local demand and gluten-free trend", "Competitors", "Customer preferences"] }
    ]
  },
  {
    id: "grad-u-date",
    title: "Grad-U-Date",
    type: "Pricing",
    prompt: "Our client is an online dating startup named Grad-U-Date, which specializes in matching graduate students with other graduate students. Grad-U-Date has finished building their app and is now looking for your assistance in deciding on a monetization strategy. What is Grad-U-Date’s best method of monetization, and how profitable will the company be?",
    goal: "Pick a single monetization model for a graduate-student dating app and estimate profitability.",
    goodQuestions: [
      "Is the app already built, so development is sunk?",
      "US-only, and is the user base 50/50 gender?",
      "Are there competitors focused only on graduate students?",
      "Must we choose one revenue model, or can we mix?"
    ],
    framework: [
      { name: "Market", points: ["Addressable graduate-student users", "Competitive set, including free apps", "Niche vs general dating"] },
      { name: "Monetization models", points: ["Subscription", "Freemium / à la carte", "Ads or university partnerships"] },
      { name: "Profitability", points: ["Fixed costs vs cost per member", "Conversion and willingness to pay", "Retention"] }
    ]
  },
  {
    id: "tres-burritos",
    title: "Tres Burritos",
    type: "Profitability",
    prompt: "Your client is a national burrito chain with 100 locations. There has been a widespread flu virus growing in the U.S. which has the potential to hurt their business. They need your help deciding how they should respond to the virus in NYC specifically, and what the implications will be for their brand.",
    goal: "Recommend how the NYC restaurants should respond to a flu outbreak and what that means for national brand and profit.",
    goodQuestions: [
      "How many NYC locations are there, and what is the product mix?",
      "Is sales grab-and-go only, or is there delivery today?",
      "Is the goal to stay net-profit positive, protect the brand, or both?",
      "How long is the virus expected to last, and what are competitors doing?"
    ],
    framework: [
      { name: "Response options", points: ["Stay open, close, or modify", "Delivery, curbside, hours, partial closures", "Close only some stores"] },
      { name: "Profitability", points: ["Lost sales vs variable cost save", "Fixed rent and labor", "Duration of disruption"] },
      { name: "Brand and external", points: ["Public health perception", "Competitor moves", "Spillover from NYC to the national brand"] }
    ]
  },
  {
    id: "mece-essentials",
    title: "Men’s Extra Comfortable Essentials",
    type: "Growth strategy",
    prompt: "Our client, Men’s Extra Comfortable Essentials, is a US-based manufacturer of basic apparel including socks, tanks, tees, and underwear. They manufacture each apparel line then brand and package them for distribution. Revenues in 2016 were $60 million, and the CEO has promised shareholders 4× growth by 2020, at which point she promised a 10.5% profit margin. She has hired us to determine whether these are realistic revenue targets, and if so, how her firm could go about achieving them.",
    goal: "Test whether 4× revenue and a 10.5% margin by 2020 are realistic, and how to get there — including cutting weak lines.",
    goodQuestions: [
      "Does the firm only sell men’s products through traditional channels?",
      "Is fabric sourced on contract and cut in-house?",
      "What is current mix and share by product line?",
      "Is the 10.5% margin a constraint on how growth is pursued?"
    ],
    framework: [
      { name: "Market and share", points: ["Category size and CAGR by line", "Share today vs 2020", "Whether 4× is in-market or requires new segments"] },
      { name: "Revenue and margin", points: ["Price × volume by SKU", "Unprofitable lines to cut", "Cost to grow share"] },
      { name: "External", points: ["Channel power", "Competitors", "Capacity and supply"] }
    ]
  },
  {
    id: "adventure-capital",
    title: "Adventure Capital",
    type: "Investment decision",
    prompt: "Your client is Idaho Johnson, an archeologist/adventurer who specializes in rare artifact recovery. They have just learned about the possibility of an incredibly valuable 6,000-year-old crown buried in the Siwa Oasis of northwestern Egypt. You have been hired to determine whether Idaho should launch an expedition to recover this artifact.",
    goal: "Decide whether to fund a one-year expedition to recover the crown, given an 85% ROI hurdle and a 20% chance of success.",
    goodQuestions: [
      "Must he self-finance, and is there already a buyer pending recovery?",
      "How did he learn of the treasure, and does he need to buy a map?",
      "What ROI does he require, and what is the chance of success?",
      "How long is the dig, and what equipment is still needed?"
    ],
    framework: [
      { name: "Costs", points: ["One-time: travel, permits, equipment, map", "Recurring: wages, housing", "Opportunity cost of his time"] },
      { name: "Value of the artifact", points: ["Sale price vs who the buyer is", "Probability-weighted payoff", "Market for antiquities"] },
      { name: "Risks and alternatives", points: ["Failure, competition, danger", "Other artifacts or safer digs", "Non-dig options such as media rights"] }
    ]
  },
  {
    id: "all-night-long",
    title: "All Night Long",
    type: "Cost-benefit analysis",
    prompt: "Your client is CNB Movies, a national movie theater company with $2 billion in annual revenue. In recent years, movie theaters have seen record-high demand for Marvel and DC Comics movies, and CNB is considering ways to capitalize on this demand. One option is to offer 24-hour opening-weekend screenings for these movies. The company has hired you to advise on the decision. Should they offer this experience?",
    goal: "Decide whether CNB should run 24-hour opening-weekend screenings for tentpole comic-book films, starting with a test theater.",
    goodQuestions: [
      "What counts as opening weekend, and would this start in one theater of 400?",
      "What are ticket prices, and do competitors offer this?",
      "Can CNB fund this itself?",
      "Is the goal profit from the test, or a national rollout if it works?"
    ],
    framework: [
      { name: "Revenue", points: ["Ticket sales across extra showtimes", "Concessions", "Premium pricing potential"] },
      { name: "Costs", points: ["Staff, security, cleaning", "Utilities and projector maintenance", "COGS"] },
      { name: "Risks and alternatives", points: ["24-hour equipment strain", "Competitor copycats", "Opportunity cost of other programming"] }
    ]
  },
  {
    id: "steel-co",
    title: "Steel Co.",
    type: "Cost reduction",
    prompt: "Our client is a steel manufacturing company in the Netherlands. They are considering investing in an advanced analytics tool that will help them better predict inventory schedule. They are also looking at immediate methods to save costs and would like your help with the following: A) Steel coils are currently transported from the factory to customers via railways, trucks, vessels, and barges. They would like us to analyze these four methods and suggest any opportunities for cost saving. B) Suggest any alternative techniques to save cost in the immediate future.",
    goal: "Find near-term cost savings in coil transport across rail, truck, barge, and vessel, plus other quick cost ideas — not a precise savings target.",
    goodQuestions: [
      "Do they ship internationally, and who are the customers?",
      "Is steel only produced as coils for this case?",
      "Is there a savings target, or just identify opportunities?",
      "Are they locked into contracts on each mode?"
    ],
    framework: [
      { name: "Transport modes", points: ["Cost per ton, utilization, frequency", "Shift volume to cheaper, fuller modes", "Why trucks are overused"] },
      { name: "Operations", points: ["Inventory scheduling and the analytics tool", "Empty capacity", "Contract and customer constraints"] },
      { name: "Other near-term savings", points: ["Procurement", "Energy", "Network redesign"] }
    ]
  },
  {
    id: "ggc-health",
    title: "GGC Health",
    type: "Revenue growth",
    prompt: "Our client, GGC Health, operates eight ambulatory surgical centers (ASCs) on the East Coast. GGC Health has consistently been a profitable organization, but over the past two years their ASCs’ cumulative revenues have been flat at $400 million per year. The CEO is concerned and has hired your firm to increase revenues by 15%.",
    goal: "Grow ASC revenue 15% ($60M) via existing sites and/or new centers. Pricing increases are not allowed; ignore cost.",
    goodQuestions: [
      "What is an ASC, and who decides where surgery happens — physician or patient?",
      "Is the $60M target ASAP, and is price off the table?",
      "How does reimbursement per procedure work?",
      "Are we limited to the East Coast footprint?"
    ],
    framework: [
      { name: "Existing ASCs", points: ["Patients per doctor", "Doctors per site", "Mix toward higher-reimbursement procedures"] },
      { name: "New ASCs", points: ["Market and demographics", "Partnerships with physician groups", "Competing ASCs and hospitals"] },
      { name: "External", points: ["Payer reimbursement rules", "Technology expectations", "Regulation"] }
    ]
  },
  {
    id: "nook-co",
    title: "Nook Co.",
    type: "Private equity",
    prompt: "Your client FunVentures, an established PE firm, is looking to acquire Nook Co., a hospitality group that specializes in developing and transforming uninhabited islands into premium and private vacation destinations. Nook Co. proposed an initial offer of $1.5 billion. FunVentures would like your advice on whether they should proceed with the acquisition. What would you like to consider?",
    goal: "Advise whether FunVentures should pay $1.5B for Nook Co. relative to a 15% ROI target.",
    goodQuestions: [
      "What is Nook’s model — own islands, build resorts, operate stays and transport?",
      "How many islands are operating vs in the pipeline, and where?",
      "What ROI and hold period does the PE firm need?",
      "How concentrated is the competitive set?"
    ],
    framework: [
      { name: "Market", points: ["Island-development market size and growth", "Competitors and share", "Demand trends"] },
      { name: "Company", points: ["Services, customers, capabilities", "Pipeline of islands", "Operations risk"] },
      { name: "Deal math and other", points: ["Valuation vs $1.5B and 15% ROI", "Portfolio synergies", "Regulatory and legal risk"] }
    ]
  },
  {
    id: "teleconferencing",
    title: "Is Teleconferencing a Good Call?",
    type: "Cost analysis",
    prompt: "Your client is a national wealth-management firm within a larger bank. The current CIO has created a test pilot of cutting-edge virtual conferencing software in the NYC office. The firm currently employs many wealth advisors who meet clients at satellite offices around the country and is deciding whether to roll out this software across all locations. The aim is to reduce advisor travel costs, which are currently borne by the firm, at cost. How should the client proceed?",
    goal: "Decide whether to roll virtual conferencing firm-wide to cut advisor travel cost — revenue growth is out of scope.",
    goodQuestions: [
      "Is the goal cost reduction only, and on what timeline?",
      "Where are advisors based, and how much travel do satellite meetings require?",
      "What does the pilot actually do (video, screen share, mobile)?",
      "Are competitors already virtual, and is client confidentiality a constraint?"
    ],
    framework: [
      { name: "Cost comparison", points: ["Travel cost vs install and operate the system", "Opportunity cost of the capital", "Pilot results from NYC"] },
      { name: "Alternatives", points: ["Outside vendor", "Hybrid model", "Change reimbursement or relocate advisors"] },
      { name: "Qualitative", points: ["Client experience and close rates", "Compliance and recording", "Advisor headcount"] }
    ]
  },
  {
    id: "apartment-co",
    title: "Apartment Co.",
    type: "Profitability",
    prompt: "Apartment Co. is a residential real estate company that owns and operates 10 buildings throughout three different boroughs within New York. The buildings were built between 1975 and 1990. Apartment Co. prides itself on offering affordable, quality apartments for everyday New Yorkers. The only permanent staff in the buildings are the doormen. Over the last three years the company invested $5 million in infrastructure hoping to command higher rents — upgraded kitchens, baths, and flooring — and recently half the buildings added basement laundry. Even with higher demand and rents, management has not seen the profitability increase it hoped for. Apartment Co. has asked your team to assess ways to achieve higher long-term profitability.",
    goal: "Raise long-term profitability of a 10-building NYC portfolio after capex that grew rents but not profit.",
    goodQuestions: [
      "Is rent the only material revenue?",
      "How many units per building, and what is the borough mix?",
      "Are buildings fully owned with no debt?",
      "Who are the tenants, and is maintenance contracted?"
    ],
    framework: [
      { name: "Revenue", points: ["Occupancy", "Rent levels and annual increases", "Amenities that actually price"] },
      { name: "Costs", points: ["Utilities, labor, maintenance", "Management, insurance, tax", "Whether recent capex raised operating cost"] },
      { name: "External", points: ["Competing rents", "Borough-level demand", "Long-term vs short-term profit"] }
    ]
  },
  {
    id: "sternofi",
    title: "Sternofi",
    type: "M&A",
    prompt: "Hamilton & Hamilton (H&H), a multinational pharmaceutical company, is considering acquiring Sternofi, a biotechnology company with a promising drug candidate in phase 2 clinical trials called Deanraghutumab. Should H&H go through with this acquisition?",
    goal: "Decide whether H&H should acquire Sternofi for its pancreatic-cancer candidate, given efficacy, US market, and an 8-year payback wish.",
    goodQuestions: [
      "What does the drug treat, and how does it compare with standard of care?",
      "Are other pipeline assets material, or is this one candidate the deal?",
      "US only, and does H&H already have oncology?",
      "What is the payback or return hurdle?"
    ],
    framework: [
      { name: "Market and drug", points: ["Indication, patients, price vs current care", "How good the trial data is", "Remaining exclusivity"] },
      { name: "Returns", points: ["Sternofi profit potential", "Price vs H&H hurdle", "Pipeline option value"] },
      { name: "Fit and risk", points: ["Oncology gap in H&H’s portfolio", "Synergies", "Trial, regulatory, and commercial risk"] }
    ]
  },
  {
    id: "cups",
    title: "Cups",
    type: "Opportunity assessment",
    prompt: "Your client is Procter & Gamble, which owns Tampax and Always, leading menstrual product brands in the US. With the rise in sustainability-focused products, P&G’s in-house R&D team has developed a hypoallergenic and eco-friendly high-grade silicone material for upcoming product launches. They are interested in using the material to make menstrual cups to add to their line of consumer care products. Should they sell the silicone menstrual cups?",
    goal: "Decide whether P&G should launch a silicone menstrual cup, given willingness to pay, cannibalization of Tampax/Always, and a 10% adoption bar.",
    goodQuestions: [
      "What does success look like — share of cup buyers, and no net-negative cannibalization?",
      "Who competes in cups today?",
      "What is product life, and is the $12M R&D sunk?",
      "Will P&G manufacture and brand this itself?"
    ],
    framework: [
      { name: "Market and pricing", points: ["US cup market size", "Willingness to pay vs competitors", "Cannibalization of pads and tampons"] },
      { name: "Commercial", points: ["Sustainability story and target segment", "Long-term customer savings vs one-time price", "Channel and education"] },
      { name: "Risks", points: ["R&D and manufacturing cost", "Brand stretch", "New entrants"] }
    ]
  },
  {
    id: "fungicide",
    title: "Fungicide",
    type: "Profitability",
    prompt: "Funguy Corporation is a small producer and wholesaler of agricultural fungicides. After a yearly financial review, they find one of their proprietary products, Formula X, is likely to be operating at a loss. They ask you to quantify the exact loss and find options on how to return Formula X to profitability.",
    goal: "Quantify Formula X’s loss and recommend how to restore profitability for a patented soybean fungicide.",
    goodQuestions: [
      "Is the overall fungicide market mature, and is Formula X demand still growing?",
      "What makes Formula X different — resistance, patent life?",
      "Is Funguy a producer-wholesaler with its own plant and multi-year contracts?",
      "Can they license the formula instead of making it?"
    ],
    framework: [
      { name: "Revenue", points: ["Price × volume of Formula X", "Contracted vs spot", "Licensing the design"] },
      { name: "Costs", points: ["Plant and other fixed", "COGS, labor, distribution", "Utilization"] },
      { name: "Other", points: ["Patent life", "Competition and resistance", "Crop and geography mix"] }
    ]
  },
  {
    id: "hybrid-work",
    title: "Hybrid Work Model",
    type: "Cost reduction",
    prompt: "You’ve been called into the headquarters of Galloway Entertainment, a small television production company in New York. The company carefully managed employee interactions during the pandemic and got through without making significant operational changes. The CEO has been reading about the hybrid work model and is excited to consolidate her real estate footprint and generate what she expects will be significant near-term operational efficiencies. Her team has pulled together an initial estimate of what it will take to enable a hybrid workplace, and she has asked you to evaluate whether she should pull the trigger.",
    goal: "Evaluate the CEO’s hybrid-office plan against a two-year cash-neutral hurdle, and challenge whether near-term savings are real.",
    goodQuestions: [
      "What does hybrid mean here, and what is the current NYC footprint?",
      "How does Galloway make money, and where does it film?",
      "Is the decision cash-neutral or better over two years?",
      "When does the lease end, and what is the cost to break it?"
    ],
    framework: [
      { name: "Current footprint vs plan", points: ["Lease remaining and breakage", "One-time enablement cost", "Ongoing occupancy save"] },
      { name: "Cash over two years", points: ["Annual savings vs investment", "Whether the CEO’s near-term efficiency claim holds", "Timing of cash flows"] },
      { name: "Qualitative", points: ["Production collaboration", "Talent", "Hybrid market norms"] }
    ]
  },
  {
    id: "toto-foundation",
    title: "Toto Foundation",
    type: "Opportunity assessment",
    prompt: "Our client, the Toto Foundation, is a new non-profit arm of a well-known drone manufacturing and logistics company that is exploring aid projects in Africa. Our client is seeking your expertise to determine where and how to deploy their technology to have the maximum impact.",
    goal: "Choose where and how to deploy drones for African aid to maximize lives impacted within a $4M plus $1M/year grant, with safety first.",
    goodQuestions: [
      "What can the parent’s drones actually do today?",
      "What is the grant size and can it only be used in Africa?",
      "Is the metric lives impacted, within budget, with safety as a constraint?",
      "Are there existing partners or infrastructure on the ground?"
    ],
    framework: [
      { name: "Capabilities and funding", points: ["Drone range and payload", "Deployment experience", "Grant vs no extra funding"] },
      { name: "Need and location", points: ["Food, medicine, agriculture, security", "Where others already serve", "Political stability"] },
      { name: "Feasibility", points: ["Infrastructure", "Regulation", "Personnel and partnerships"] }
    ]
  },
  {
    id: "wifi-in-the-sky",
    title: "WiFi in the Sky",
    type: "Market entry",
    prompt: "Your firm has won an RFP to help a domestic airline carrier examine their in-flight connectivity (IFC) strategy. With 80% of US-based aircraft already outfitted with IFC technology and competitive pressures rising, offering WiFi service is becoming table-stakes. Your client has yet to enter the game, but they know it is something they need to consider to stay competitive. What are some of the key things the client should think about when assessing their go-to-market strategy for IFC?",
    goal: "Frame the go-to-market for in-flight WiFi so a domestic carrier can stay competitive — business model, vendor, product, and ROI.",
    goodQuestions: [
      "Is the network mostly continental US plus nearby international?",
      "Is IFC WiFi only, separate from in-flight entertainment?",
      "Is the main objective competitiveness rather than a profit target?",
      "Would a vendor install and operate this on a long contract?"
    ],
    framework: [
      { name: "Economics", points: ["Pricing model (free, paid, ad-supported)", "Take rate and demand", "Upfront vs ongoing cost and vendor split"] },
      { name: "Product and tech", points: ["Speed, bandwidth shared across the cabin", "Over-water availability", "White-label vs branded"] },
      { name: "Go-to-market", points: ["Rollout timing", "Crew and marketing", "Contract length and lock-in"] }
    ]
  },
  {
    id: "flashpro",
    title: "FlashPro",
    type: "Growth strategy",
    prompt: "Your client is FlashPro Inc., a San Francisco-based technology company that develops and sells wearable and mountable action cameras. FlashPro’s CEO believes that the company’s growth has stagnated and has hired your firm to remedy that issue.",
    goal: "Diagnose stagnating growth at an action-camera company and recommend how to grow revenue and profit.",
    goodQuestions: [
      "Is the core product a mounted action camera sold US and internationally?",
      "Do they manufacture in-house or contract in China?",
      "What are the channels — distributors, retail, website?",
      "How competitive is the category, and how loyal are customers?"
    ],
    framework: [
      { name: "Market", points: ["Competitors, substitutes, customers", "US vs international mix", "Adjacent use cases beyond action sports"] },
      { name: "Profitability", points: ["Price, volume, share", "COGS and 50% gross margin", "R&D, S&M, G&A"] },
      { name: "Growth ideas", points: ["New segments", "Channel mix", "Accessories and software"] }
    ]
  },
  {
    id: "take-your-pills",
    title: "Take Your Pills!",
    type: "Revenue growth",
    prompt: "Your client is Foci Pharmaceuticals, a leading rare-disease pharmaceutical company that has seen US sales growth slow over the past year. Your firm has been hired to determine the cause of this slowdown and recommend ways to reverse the trend.",
    goal: "Explain why US sales growth of the company’s only drug slowed and how to reverse it in a monopoly rare-disease market.",
    goodQuestions: [
      "Is essentially all revenue from one drug, and what does it treat?",
      "Are there direct competitors, or is this an orphan monopoly?",
      "How many patients are eligible, at what annual price, and must they take it daily?",
      "How long does exclusivity last?"
    ],
    framework: [
      { name: "Revenue build", points: ["Eligible patients × diagnosis × treatment × adherence × price", "Penetration vs remaining untreated", "Persistence over time"] },
      { name: "Market context", points: ["Monopoly / orphan status", "Exclusivity runway", "Why growth can stall even without rivals"] },
      { name: "Levers", points: ["Find more patients", "Improve adherence", "Price and support programs"] }
    ]
  },
  {
    id: "great-burger",
    title: "Great Burger",
    type: "M&A",
    prompt: "Let’s assume our client is Great Burger (GB), a fast-food chain that competes head-to-head with McDonald’s, Wendy’s, Burger King, KFC, etc. GB is the fourth-largest fast-food chain worldwide by number of stores. Like most competitors, GB offers food and combos for breakfast, lunch, and dinner. Even though GB owns some of its stores, it operates under franchising — 85% of stores are owned by franchisees. As part of its growth strategy GB has analyzed potential acquisition targets including Heavenly Donuts (HD), a growing doughnut producer with US and international stores. HD also franchises, but it franchises areas or regions rather than individual restaurants. GB’s CEO has hired you to advise on whether they should acquire HD.",
    goal: "Advise whether Great Burger should acquire Heavenly Donuts, covering standalone value, cultural/franchise fit, and synergies.",
    goodQuestions: [
      "How do the two franchise models differ, and can GB run both?",
      "How much customer overlap is there between burgers and doughnuts?",
      "What has HD’s store and same-store growth been?",
      "Does GB have a history of integrating acquisitions?"
    ],
    framework: [
      { name: "Standalone value of HD", points: ["Doughnut market growth", "Store growth and SSS", "Margins and capital to grow"] },
      { name: "Fit", points: ["Brand quality side by side", "Customer overlap", "Management and culture", "Two franchise structures"] },
      { name: "Synergies", points: ["Shared real estate or dayparts", "Procurement and G&A", "Cross-marketing"] }
    ]
  },
  {
    id: "uranus-co",
    title: "Uranus Co.",
    type: "Market entry",
    prompt: "Uranus Co. is an established aerospace company looking to enter the luxury space-travel market. It is seeking advice on the global launch of its new travel service, which will be a 2-week cruise experience on a spaceship orbiting Earth. Uranus is trying to determine whether they should enter the market and if they can be profitable. How would you advise Uranus Co.?",
    goal: "Advise whether to launch a two-week orbital luxury cruise and whether it can break even in two years.",
    goodQuestions: [
      "Is the current business selling aerospace equipment to governments and companies?",
      "Who are the space-travel competitors?",
      "Is the hurdle break-even in two years, and is the timeline ASAP?",
      "Is the product a cruise-like experience, sold globally?"
    ],
    framework: [
      { name: "Revenue", points: ["Tickets", "Onboard food, retail, activities", "Broadcasting or media rights"] },
      { name: "Costs", points: ["Ships, launch pad, insurance, marketing", "Fuel, maintenance, crew", "Capacity utilization"] },
      { name: "Market and risk", points: ["Addressable luxury demand", "Competition", "Safety, regulation, IP"] }
    ]
  },
  {
    id: "green-dreamz",
    title: "Green Dreamz",
    type: "Growth strategy",
    prompt: "Your client is Green Dreamz, a vertically integrated cannabis company based in Colorado. Founded in 2011 as a medical cannabis business, it expanded into the recreational market after statewide legalization in 2014 and is now one of the largest players by store count in Colorado. It operates a cultivation facility in Denver and 12 dispensaries across the state (medical, recreational, or both). As the Colorado market has saturated, organic growth has slowed. Consumer preference is still driven primarily by price. The CEO has hired your firm to help find new opportunities for profitable growth.",
    goal: "Find profitable growth for a Colorado cannabis operator facing a saturated, price-driven market.",
    goodQuestions: [
      "What can they grow, buy wholesale, and sell (flower vs infused)?",
      "How do medical vs recreational rules, potency, and daily limits differ?",
      "Can they advertise, ship, or sell across state lines?",
      "How constrained is banking and financing?"
    ],
    framework: [
      { name: "Market", points: ["Colorado vs other states", "Share and consolidation", "Price-led demand and regulation"] },
      { name: "Profit structure", points: ["Medical vs rec mix and ticket", "Cultivation vs wholesale vs retail", "Fixed store costs and taxes"] },
      { name: "Growth", points: ["New stores or M&A", "Infused products", "Brand vs price", "Where regulation blocks interstate"] }
    ]
  },
  {
    id: "jimmys-dilemma",
    title: "Jimmy’s Dilemma",
    type: "Investment decision",
    prompt: "It is early October, and Jimmy Smith, an MBA2 at NYU Stern, has a decision to make. After a summer internship at Firm A, Jimmy received an offer to return full-time next year. However, Jimmy also decided to re-recruit and received a competing offer from Firm B. Jimmy now needs to decide which offer he should accept, and has looked to you, his best friend, for help.",
    goal: "Choose the higher-value job offer by comparing discounted cash compensation and non-cash career value over about three years.",
    goodQuestions: [
      "Is Jimmy maximizing financial value, with no other offers?",
      "How long does he intend to stay?",
      "Are the firms in the same industry, and which is more prestigious?",
      "Besides salary, do signing bonus, raises, and exit options matter?"
    ],
    framework: [
      { name: "Compensation value", points: ["Salary, bonus, signing", "Growth/raises", "DCF to compare timing"] },
      { name: "Career value", points: ["Exit opportunities", "Training and brand", "Firm performance"] },
      { name: "Fit", points: ["Lifestyle and risk", "Three-year horizon", "Prestige vs second-tier trajectory"] }
    ]
  },
  {
    id: "mordmotor",
    title: "MordMotor Co",
    type: "Market entry",
    prompt: "MordMotor Company, an international automotive company, has seen meteoric sales and market-share growth over the last 10 years in the US. In recent years profitability stagnated during the Covid-19 pandemic. The company is optimistic it can capitalize on permanent remote work and workers migrating from cities into suburbs where vehicles are more necessary. The CEO has come to your firm to figure out how to bring the company back on track.",
    goal: "Restore growth and profit, with emphasis on product mix and possible EV/hybrid expansion rather than legacy ICE volume.",
    goodQuestions: [
      "Does Mord compete across all vehicle segments from Detroit, selling through its own dealers?",
      "Is ICE stagnating while EV grows, and does Mord have EV models in development?",
      "Do they own the full supply chain?",
      "Is the priority revenue growth, mix, or cost?"
    ],
    framework: [
      { name: "Auto market", points: ["ICE vs EV size and growth", "Competitive set", "Suburban/remote-work demand"] },
      { name: "Revenue levers", points: ["Price vs volume", "New models including EV", "Mix of luxury vs economy"] },
      { name: "Cost and external", points: ["Factory switchover", "Supply chain", "Regulation"] }
    ]
  },
  {
    id: "curling-careers",
    title: "Curling and Careers",
    type: "Operations",
    prompt: "Your client is Curling & Careers (C&C), the New York City chapter of a national non-profit. It provides disadvantaged high-school students with leadership training and career development through curling. C&C rents ice hockey rinks for weekly practices and games; students can also opt into workshops, professional-development sessions, and mentoring. The program is free, funded by large institutional donors. Main costs are facility rental, equipment, transportation, staff, and overhead. C&C has been growing quickly since 2021 and cannot meet demand for all programming. How can they increase their impact?",
    goal: "Increase the number of students served by relieving capacity bottlenecks — especially non-financial ones — while staying true to a free non-profit model.",
    goodQuestions: [
      "How independent is the NYC chapter, and who funds it?",
      "How many students are in the program, and how do they qualify?",
      "Is the goal to serve more students, with no numeric target?",
      "What are the constrained resources — ice, vans, staff, admin?"
    ],
    framework: [
      { name: "Demand", points: ["Unmet applications", "Growth outlook", "What beneficiaries value"] },
      { name: "Financial constraints", points: ["Rink, transport, labor", "Donor cash flow", "Variable program cost"] },
      { name: "Non-financial constraints", points: ["Staff allocation", "Facility and van capacity", "Admin/onboarding backlog"] }
    ]
  },
  {
    id: "center-stage",
    title: "Center Stage",
    type: "Market entry",
    prompt: "You’ve been approached by a producing team who have a hold on a major Broadway theater for 10 weeks next summer. Theater is a very expensive industry, and they’re trying to determine the best show to run during this window. They’ve narrowed it to three options: a revival of Beauty and the Beast, the Pulitzer Prize-winning play To Kill a Mockingbird, and a one-man show starring Steve Martin called “Steve Live.” The team has less than two weeks to decide in order to start rehearsals on time. You’ve been hired to assess which show is the best to mount, and how they should price tickets to maximize profit margins.",
    goal: "Pick which of the three shows to run for 10 weeks and how to price tickets to maximize profit margin (ideally 20%+).",
    goodQuestions: [
      "Is the objective highest profit margin, not just box office?",
      "What are typical ticket prices and recent price inflation?",
      "Have they produced all three types of shows before?",
      "Can they sell concessions and merch, and what is the weekly performance count?"
    ],
    framework: [
      { name: "Financials", points: ["Cost to mount each show", "Seats × performances × occupancy × price", "Merch and concessions"] },
      { name: "Demand", points: ["Tourist vs local draw", "Star power vs title recognition", "Competitive Broadway slate"] },
      { name: "Risk", points: ["Rehearsal timeline", "Reviews", "One-man-show vs musical cost structure"] }
    ]
  },
  {
    id: "back-it-on-up",
    title: "Back It On Up",
    type: "M&A",
    prompt: "BackupCo is a data backup and disaster-recovery company. Its primary headquarters is in Boston, its client-services department is in South Carolina, and its development is split between Texas and Ukraine. To expand its product offerings, reach, and revenue, it is considering purchasing CloudCo, a cloud backup provider headquartered in Southern California. Our firm has been hired to evaluate this potential acquisition. How would you begin considering this deal?",
    goal: "Evaluate whether BackupCo should acquire CloudCo — valuation versus expected benefit, synergies, and risk.",
    goodQuestions: [
      "What does BackupCo sell today — on-prem appliances and software, B2B only?",
      "Where is revenue geographically?",
      "Why CloudCo — product gap, geography, or growth?",
      "How should we value the target (DCF, comps, multiples)?"
    ],
    framework: [
      { name: "Valuation", points: ["DCF", "Comparables", "EBITDA multiple"] },
      { name: "Synergies", points: ["Cross-sell and up-sell", "Headcount and site overlap", "R&D, IT, vendor scale", "Dis-synergies: lost customers, process breakdown"] },
      { name: "Risk", points: ["Talent and culture", "Ukraine/Texas development split", "Overstated synergies", "Regulation"] }
    ]
  },
  {
    id: "big-shot",
    title: "The Big Shot",
    type: "Profitability",
    prompt: "Our client, Lights Camera Action Entertainment (LCA), is a major movie production house. After a disappointing summer filled with numerous box-office flops, the CEO of LCA has approached us to decide which movie the company should release next.",
    goal: "Choose the next film LCA should release, balancing profit (theaters, seats, fill, ticket) with non-financial hit drivers, given a 50% ROI “hit” definition.",
    goodQuestions: [
      "Is LCA a US production house with global theatrical distribution?",
      "Do they already have a mix of genres and cash reserves?",
      "Did COVID drive the bad summer, and does the board need a hit soon?",
      "What ROI counts as a hit?"
    ],
    framework: [
      { name: "Financial", points: ["Theaters × seats × fill × ticket", "Merch and sequel option", "Production and P&A cost"] },
      { name: "Internal", points: ["Sequel vs original", "Genre expertise", "Talent deals"] },
      { name: "External", points: ["Star and genre heat", "Release-date clashes", "Streaming competition"] }
    ]
  },
  {
    id: "contagion",
    title: "Contagion Containment",
    type: "Go / no-go",
    prompt: "Your client is the International Olympic Committee (IOC), and the Summer Olympics are a couple of months away. A viral outbreak has occurred in a country across the globe and has begun to spread. There is a real threat that the outbreak reaches pandemic levels and arrives in the host country within weeks or months. Should the outbreak reach the host country, there is an 80% probability of a low-severity outbreak and a 20% chance of a high-severity outbreak. The modern Olympics have been cancelled previously only during wartime. Recently the Rio Games went on despite Zika. Because countries bear a large cost to host, the IOC wants to be cautious about unexpected host costs. The IOC is unsure whether to cancel or move forward and would like your insight on how they should proceed.",
    goal: "Recommend whether the IOC should cancel or proceed, balancing unexpected host-country economic cost against IOC revenue and human impact. Sunk costs do not decide it.",
    goodQuestions: [
      "Is the decision proceed vs cancel, made today, with the IOC as decision-maker?",
      "What is the virus, and is there a vaccine?",
      "Should we minimize unexpected host costs while protecting IOC revenue?",
      "What is the host country’s economic scale?"
    ],
    framework: [
      { name: "Proceed — financial", points: ["Sponsorship, TV, tickets, licensing", "Remaining operating cost", "Probability-weighted outbreak cost"] },
      { name: "Cancel — financial", points: ["Ignore sunk cost", "Insurance and recoverable cost", "Lost IOC revenue"] },
      { name: "Non-financial", points: ["Lives and athlete participation", "Host-country relationships", "Precedent and PR"] }
    ]
  },
  {
    id: "food-frenzy",
    title: "Food Frenzy",
    type: "Market entry",
    prompt: "Mercado Reforma is a large B2B grocery supplier in Latin America that wants to expand into the B2C space. You are the project leader. Ideate ways to investigate the opportunity and bring the concept to life. Walk me through how you would approach the project.",
    goal: "Propose a customer-centered project plan for Reforma’s B2C entry — research, synthesis, co-creation, and scrappy tests — not a classic profit tree.",
    goodQuestions: [
      "Does Reforma have B2C experience, but strong distribution in Mexico, Chile, and Colombia?",
      "Is the goal an innovative entry that hits an unmet customer need?",
      "Should the plan start from the voice of the customer?",
      "Where is distribution densest — Mexico City, Santiago, Bogotá?"
    ],
    framework: [
      { name: "Research", points: ["Ethnography and observation", "Focus groups", "Stakeholder interviews"] },
      { name: "Synthesis and design", points: ["Journey maps, personas, service blueprints", "Collaborative insight generation"] },
      { name: "Co-create and test", points: ["Workshops with users and client", "Low-cost prototypes, pilots, A/B tests"] }
    ]
  },
  {
    id: "hairy-ordeal",
    title: "A Hairy Ordeal",
    type: "Investment decision",
    prompt: "Your friend Megan Black calls you to ask for your advice. Megan had been working in the beauty industry as an independent hair stylist for two years when the owner of Salon Deluxe approached her and asked her to buy the salon. It has always been her dream to own a hair salon, but she isn’t sure if she should do it or focus on her current business, Megan Black Balayage. She wants your help to figure out what she should do.",
    goal: "Compare NPV of staying independent versus buying Salon Deluxe, plus fit and risk, and recommend one path.",
    goodQuestions: [
      "What is balayage, and how does an appointment actually run?",
      "Is Deluxe a high-end salon with services plus products and contractor stylists?",
      "Is the decision criterion greater NPV?",
      "Does she have salon management experience?"
    ],
    framework: [
      { name: "NPV of independent brand", points: ["Clients × price", "Product sales", "Rent, labor, discount rate"] },
      { name: "NPV of buying Deluxe", points: ["Chairs and revenue per stylist", "Purchase price and interest", "Product and rent"] },
      { name: "Other", points: ["Buy vs build", "Risk profile and culture", "Ways to grow either NPV"] }
    ]
  },
  {
    id: "lizard-insurance",
    title: "Lizard Insurance",
    type: "M&A",
    prompt: "Our client, Lizard Insurance, is a US-based auto insurance provider that recently acquired a rival auto insurance company, MediumSure. As part of the acquisition, Lizard also acquired a subsidiary of MediumSure named TechSize that provides software for many insurance companies. Lizard Insurance wants to know what they should do with TechSize, and they’ve brought us in to help.",
    goal: "Recommend keep versus sell for TechSize, a B2B compliance-software asset that does not fit Lizard’s DTC auto-insurance model.",
    goodQuestions: [
      "Does Lizard have software capability, and does it have a plan for TechSize?",
      "How does each business make money — DTC premiums vs B2B compliance software?",
      "What does TechSize actually do?",
      "Are there cross-sell or cost synergies with the core insurer?"
    ],
    framework: [
      { name: "Keep", points: ["Do nothing vs invest to hold share", "Organic growth (limited cross-sell)", "Inorganic — extra acquisitions"] },
      { name: "Sell", points: ["Full sale or spin", "License IP or JV", "Partial sale"] },
      { name: "Fit test", points: ["Investment needed to stay competitive", "Synergies with auto insurance", "Strategic distraction"] }
    ]
  },
  {
    id: "met-with-problems",
    title: "Met With Problems",
    type: "Cost reduction",
    prompt: "Your client is Amy Sherald, the Chief People Officer at the Metropolitan Museum of Art. Located in New York City, the Met is one of the world’s largest art museums, with 250 gallery rooms and a collection of more than 2 million works of art. This mega-museum welcomes over 6 million visitors annually. Your client’s department reported unusually high human-resources costs last year and has come under scrutiny by the executive team and board. Amy has hired your team to help her address this problem.",
    goal: "Reduce HR cost at the Met in the short term. Focus on people costs and turnover — not museum revenue.",
    goodQuestions: [
      "How is staff structured — artistic, security, admin, executive — and who is salaried vs hourly?",
      "How does hiring work today (postings, referrals, search firms)?",
      "Is there a numeric savings target, or find where to focus first?",
      "Confirm revenue (grants, donations, tickets) is out of scope?"
    ],
    framework: [
      { name: "Direct HR cost", points: ["Wages and benefits by staff type", "Recruiting and onboarding", "Training, retention, severance"] },
      { name: "Indirect", points: ["Turnover knowledge loss", "Morale", "Underperformance"] },
      { name: "External labor", points: ["Competition for talent", "Unions", "Labor supply"] }
    ]
  },
  {
    id: "messi-decision",
    title: "A Messi Decision",
    type: "Investment decision",
    prompt: "Your client is the CEO of a major English soccer team. He’s called you brimming with excitement after receiving news that Lionel Messi was looking for a new team. Players of Messi’s quality rarely become available and would surely improve any team. However, with COVID-19 restricting budgets, money would be tight and would need to generate a return. He would like you to figure out what the right amount of money to offer would be.",
    goal: "Value Messi like an asset and recommend a transfer fee the club can recoup within five years while still chasing a championship in three seasons.",
    goodQuestions: [
      "Is the sporting goal a European title in three seasons, with player spend recouped in five years?",
      "How do soccer transfers work — fee then wages?",
      "How does the club make money?",
      "Age, output, and remaining career — how good is he still?"
    ],
    framework: [
      { name: "Incremental cash", points: ["Tickets, shirts, TV/sponsor lift", "Transfer fee and wages", "Payback within five years"] },
      { name: "Player", points: ["Performance and age curve", "Will he come?", "Cheaper alternatives"] },
      { name: "Risk and rivals", points: ["Injury", "Wage inflation / arms race", "Language and fit"] }
    ]
  },
  {
    id: "rubber-plant",
    title: "New Rubber Plant Investment",
    type: "Investment decision",
    prompt: "The federal government of a foreign country is investigating whether to reopen a rubber factory in a western part of the country. The factory was operational in the past but has not been used for 7 years. The plant was closed due to terrorism in the area. If rejuvenated, it may become a target for the rebels. All the equipment is usable, but the government would need to spend $12 million on upgrades, which would allow the plant to produce 10 million pounds of rubber per month. Demand for rubber is strong, but rubber must be transported by train to a port. Two trains a day can be used for this.",
    goal: "Advise whether the government should reopen the plant, weighing ROI, logistics bottlenecks, jobs/development, and terrorism risk.",
    goodQuestions: [
      "How is rubber made, and what do resin and rubber sell for?",
      "How do inbound resin and outbound rubber move, and how many trains are available?",
      "Is demand uncapped on global markets?",
      "Are the government’s goals profit, jobs, and development?"
    ],
    framework: [
      { name: "Financials", points: ["Price × volume vs $12M upgrade", "Resin and other variable cost", "Fixed overhead"] },
      { name: "Operations", points: ["Train capacity in and out", "Single supplier", "Plant utilization"] },
      { name: "Non-financial and risk", points: ["Jobs and development", "Terrorism", "Commodity prices"] }
    ]
  },
  {
    id: "pubu",
    title: "PubU",
    type: "Operations",
    prompt: "You are the Dean of a large public university in the Midwest. Your tenure has focused on raising the profile of the university through various initiatives. Recently, the Board of Regents has requested a plan that outlines the university’s environmental footprint and a goal to reach net-zero waste by 2040. As a former business executive you are familiar with ESG, but you need to understand what the major drivers of environmental impact at PubU are.",
    goal: "Identify the largest drivers of PubU’s environmental footprint and a path to net-zero waste by 2040, including reputation and funding constraints of a public university.",
    goodQuestions: [
      "How large is the campus (undergrad, grad, professional) and is enrollment stable?",
      "Where does the $2B budget come from, and who pays for ESG projects?",
      "How is electricity generated today, and what is the local utility’s path?",
      "What does net-zero waste mean here — energy, water, and landfill?"
    ],
    framework: [
      { name: "Solid waste", points: ["Dining, dorms, labs, buildings", "Reduce, recycle, eliminate"] },
      { name: "Energy and transit", points: ["Grid mix and on-site renewables", "Efficiency", "Diesel campus buses"] },
      { name: "Water and delivery", points: ["Landscaping and plumbing", "Funding and rankings/reputation", "2040 roadmap"] }
    ]
  },
  {
    id: "whale-hotel",
    title: "Whale Hotel",
    type: "Market entry",
    prompt: "Our client is a real estate company that owns and operates luxury hotels around the world. They’ve previously owned 3 resorts in Dubai and are considering building a fourth, targeted specifically at high-net-worth individuals — called whales. Should they build this fourth Dubai resort?",
    goal: "Decide whether to build a fourth Dubai luxury resort aimed at high-net-worth “whales,” given payback, seasonality, and competitive pool quality.",
    goodQuestions: [
      "What payback period and construction time are required?",
      "How seasonal is Dubai tourism?",
      "Do they currently operate hotels there (cannibalization)?",
      "Who are the comparable luxury resorts, and what differentiates them?"
    ],
    framework: [
      { name: "Demand", points: ["Peak vs off-peak occupancy", "Whale share of guests", "Unmet demand at the best competitor"] },
      { name: "Product and price", points: ["Pool and amenity quality", "Nightly rate whales will pay", "Construction cost and 5-year payback"] },
      { name: "Competition and risk", points: ["King’s Palace, Belzor, Egyptian", "Seasonality", "Brand and execution"] }
    ]
  }
];

