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
    ],
    math: [
      {
        kind: "definite",
        background: "You are advising the CEO of American Airlines. Oil has collapsed to nearly $0/barrel, so jet fuel is treated as free for every airline, including competitors. An available seat-mile (ASM) is one seat flown one mile. Profit per ASM = revenue per ASM minus cost per ASM.",
        prompt: "Before the fuel-price collapse, fuel made up 30% of American Airlines' total operating cost per available seat-mile (ASM), and that all-in cost was $0.14 per ASM. After the shock, fuel costs are $0.00 and all other costs are unchanged. Revenue per ASM has held at $0.16. By what percentage has the client's profit margin (profit per ASM) improved?",
        answer: "210%",
        steps: [
          "Old fuel cost = 30% x $0.14 = $0.042 per ASM.",
          "New cost per ASM = $0.14 - $0.042 = $0.098.",
          "Old profit = $0.16 - $0.14 = $0.02 per ASM.",
          "New profit = $0.02 + $0.042 = $0.062 per ASM.",
          "Margin improvement = ($0.062 - $0.02) / $0.02 = 210%."
        ],
        insight: "Fuel's disappearance triples-plus unit profit, but rivals get the same shock, so price cuts alone will not create advantage."
      }
    ],
    creative: {
      prompt: "American now has much lower fuel costs — but so do all of its competitors. Cutting fares may spark an industry-wide price war. What other strategic levers can American pull to capitalize on this sudden cost advantage?",
      buckets: [
        {
          name: "Convenience",
          points: [
            "Add more direct routes",
            "Increase frequency on high-demand routes",
            "Use newly viable long-haul flying to fill network gaps"
          ]
        },
        {
          name: "Product differentiation",
          points: [
            "Invest in the onboard experience",
            "Enhance business-class offerings",
            "Compete on amenities once price is a weaker lever"
          ]
        },
        {
          name: "Customer loyalty",
          points: [
            "Expand and improve loyalty programs",
            "Use customer data to target high-value travelers",
            "Deepen share of wallet rather than racing on fare"
          ]
        }
      ]
    }
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
    ],
    math: [
      {
        kind: "definite",
        background: "Cruise Co. is a large US mass-market cruise operator considering an acquisition of Jungle Cruise to enter uber-luxury. NOP is net operating profit. Use only comparable cruise transactions for the multiple; hotel chains are a different industry.",
        prompt: "Cruise Co. is valuing Jungle Cruise, which currently earns $30M of net operating profit. Recent transactions: Starwood (national 5-star hotel chain) sold for $620M on $120M NOP in 2021; Bilton (regional motel chain) sold for $120M on $20M NOP in 2022; Valhalla Cruise (EU luxury cruise) sold for $950M on $90M NOP in 2021; Open Seas (Asia cruise) sold for $500M on $45M NOP in 2022. What purchase price is implied for Jungle Cruise if you use the relevant comps?",
        answer: "~$300M",
        steps: [
          "Ignore hotel comps (Starwood ~5x, Bilton 6x); they are a different industry.",
          "Cruise comps: Valhalla 950/90 ~ 10.6x; Open Seas 500/45 ~ 11.1x; use ~10x NOP.",
          "Jungle Cruise value ~ 10 x $30M = $300M."
        ],
        insight: "A ~10x cruise NOP multiple is the right analog; hotel multiples would understate the price."
      },
      {
        kind: "definite",
        background: "Cruise Co. may buy Jungle Cruise for $300M. Incremental profit is Jungle Cruise's standalone revenue and cost after two adjustments: lost Cruise Co. sailings (cannibalization) and back-office cost synergies. Simple payback = purchase price / incremental annual profit.",
        prompt: "Assume Jungle Cruise is acquired for $300M. Exhibit on incremental economics ($M): Jungle Cruise currently generates $90M of revenue, of which $15M would be lost to cannibalization of Cruise Co.'s existing sailings. Jungle Cruise currently has $60M of costs, of which $5M can be saved via back-office synergies. What incremental annual profit does the deal create, and how many years to break even on a $300M purchase price?",
        answer: "$20M per year; 15-year break-even",
        steps: [
          "Net incremental revenue = 90 - 15 = $75M.",
          "Net incremental costs = 60 - 5 = $55M.",
          "Incremental profit = 75 - 55 = $20M per year.",
          "Break-even = 300 / 20 = 15 years."
        ],
        insight: "The deal hits the client's <15-year hurdle only on the nose — there is no margin of safety."
      }
    ],
    creative: {
      prompt: "What are the potential risks if Cruise Co. acquires Jungle Cruise?",
      buckets: [
        {
          name: "Financial",
          points: [
            "15-year break-even is long and sensitive to synergy and cannibalization assumptions",
            "Premium brand may require continued high opex that mass-market Cruise Co. will be tempted to cut"
          ]
        },
        {
          name: "Non-financial",
          points: [
            "Cultural mismatch; Jungle Cruise leadership may leave",
            "Mass-market and uber-luxury customers want different products; Cruise Co. may mismanage the segment",
            "The Jungle Cruise brand could be diluted if it is folded into the parent"
          ]
        }
      ]
    }
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
    ],
    math: [
      {
        kind: "market-sizing",
        background: "NextLevel Gaming (NLG) is a Los Angeles start-up launching its first PC multiplayer RPG in the US only. You are sizing year-1 addressable players, not buyers yet.",
        prompt: "NextLevel Gaming is launching a new PC multiplayer RPG in the US only. Estimate the addressable number of players it can target in year 1. A reasonable sample path: US population ~330M; ~30% play video games (~100M); ~40% of those play online/PC multiplayer (~40M); ~25% would try a new RPG in a given year (~10M). State your player-base estimate.",
        answer: "~10 million players",
        steps: [
          "US population ~330M.",
          "~30% play video games → ~100M gamers.",
          "~40% of gamers play online/PC multiplayer → ~40M.",
          "~25% would try a new title in this genre in year 1 → ~10M addressable players.",
          "If your estimate is far from 10M, pressure-test participation and genre-interest rates."
        ],
        insight: "Later profitability math is built on a 10M addressable player base."
      },
      {
        kind: "definite",
        background: "NLG has a 10 million US addressable player base and is comparing three business models. Cost stack (use these labels): Subscription — $50 content + $35 operations per paying player per year, plus $5M platform and $10M marketing. Retail — $22 COGS + $18 distribution per copy, plus the same $5M + $10M. Free-to-play — $13 + $7 per downloader, plus $10 of payment/platform cost per spender, plus the same $5M + $10M. Profit = revenue − that cost. Margin = profit / revenue.",
        prompt: "NLG has a 10M addressable US player base. Year-1 economics by model: Subscription — 10% of players pay $10/month. Retail — 12% buy the game at $60 once. Free-to-play — 50% download, and 30% of downloaders spend $100 on in-game items. Using the cost stack in Background, what is year-1 profit and profit margin under each model?",
        answer: "Subscription $20M (16.7%); Retail $9M (12.5%); Free-to-play $20M (13.3%)",
        steps: [
          "Subscription revenue = 10M x 10% x $10 x 12 = $120M; cost = 10M x 10% x $85 + $15M = $100M; profit = $20M; margin = 20/120 = 16.7%.",
          "Retail revenue = 10M x 12% x $60 = $72M; cost = 10M x 12% x $40 + $15M = $63M; profit = $9M; margin = 9/72 = 12.5%.",
          "Free-to-play revenue = 10M x 50% x 30% x $100 = $150M; cost = 10M x 50% x $20 + 10M x 50% x 30% x $10 + $15M = $130M; profit = $20M; margin = 20/150 = 13.3%."
        ],
        insight: "Subscription and F2P print the same $20M profit; subscription wins on margin, F2P on player scale."
      }
    ],
    creative: {
      prompt: "What non-financial factors would you consider when choosing between the subscription and free-to-play models?",
      buckets: [
        {
          name: "Competitive response",
          points: [
            "Stickiness if a rival launches in the same genre",
            "F2P's larger installed base is a moat; subscription's smaller base is easier to poach"
          ]
        },
        {
          name: "Growth optionality",
          points: [
            "New platforms (mobile/console)",
            "International expansion",
            "A sequel or second title once the community exists"
          ]
        },
        {
          name: "Other revenue and demand risk",
          points: [
            "Merchandise and esports once the player base is large",
            "Shift of players off PC toward mobile",
            "Genre fatigue in the next generation of players"
          ]
        }
      ]
    }
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
    ],
    math: [
      {
        kind: "definite",
        background: "The Stance School is a 1,000-student K–12 in Philadelphia that needs $1M this year to fund remote-learning tools. It will cut five job families down to peer student-to-staff ratios. Needed headcount for a role = 1,000 students / benchmark students per role (round to a whole person). Savings = (current − needed) × salary. Do not cut below the benchmark.",
        prompt: "The Stance School has 1,000 students and a $1M funding goal. It will cut five roles down to peer-school student-to-staff benchmarks. Current headcount and salary: administrative assistant 3 at $45,000 (benchmark 500 students per role); custodian 17 at $40,000 (100:1); guidance counselor 15 at $65,000 (100:1); IT technician 6 at $60,000 (200:1); librarian 8 at $50,000 (250:1). What annual salary savings result, and how far short of $1M is the school?",
        answer: "$910K savings; $90K short of $1M",
        steps: [
          "Admin: need 1000/500 = 2 vs 3 → cut 1 x $45K = $45K.",
          "Custodian: need 1000/100 = 10 vs 17 → cut 7 x $40K = $280K.",
          "Counselor: need 10 vs 15 → cut 5 x $65K = $325K.",
          "IT: need 1000/200 = 5 vs 6 → cut 1 x $60K = $60K.",
          "Librarian: need 1000/250 = 4 vs 8 → cut 4 x $50K = $200K.",
          "Total savings = 45 + 280 + 325 + 60 + 200 = $910K, $90K short of $1M."
        ],
        insight: "Role cuts get most of the way there but do not fully fund the $1M remote-learning build."
      }
    ],
    creative: {
      prompt: "Matching peer staffing still leaves a $90K gap versus the $1M goal, and cutting roles has risks. What risks come with the layoffs, and how else could Stance close the funding gap?",
      buckets: [
        {
          name: "Risks of cutting roles",
          points: [
            "Severance, pension, and union-negotiation costs",
            "Negative PR and possible enrollment decline",
            "Student mental-health and service-quality impact",
            "Timing: savings may not land inside this year's budget"
          ]
        },
        {
          name: "Ways to close the $90K gap",
          points: [
            "License the e-learning or teacher-PD platform to other schools",
            "Paid remote tutoring or extra classes on the platform",
            "Alumni / parent / HNW gifts (named rooms or awards)",
            "Lobby for additional state appropriations"
          ]
        }
      ]
    }
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
    ],
    math: [
      {
        kind: "definite",
        background: "A regional grocer's beverage department lost revenue from 2014 to 2015. Figures are average gallons in millions and price per gallon. Category revenue = gallons × price. Totals are in $ millions.",
        prompt: "A regional grocer's beverage department reports average gallons (MM) and price per gallon by category: Sodas 100 gal at $0.90 in 2014 vs 120 gal at $0.70 in 2015; Waters 20 gal at $0.70 vs 22 gal at $0.65; Others 11 gal at $4.00 vs 10 gal at $4.50. What was beverage revenue in each year, and where did the decline come from?",
        answer: "2014 $148M vs 2015 $143.3M; soda price collapse more than offset volume",
        steps: [
          "2014: soda 100 x 0.90 = $90M; water 20 x 0.70 = $14M; other 11 x 4.00 = $44M; total $148M.",
          "2015: soda 120 x 0.70 = $84M; water 22 x 0.65 = $14.3M; other 10 x 4.50 = $45M; total $143.3M.",
          "Net decline = $4.7M, driven by soda (down $6M) despite higher soda gallons."
        ],
        insight: "This is a price/mix problem in soda, not a category-volume problem."
      },
      {
        kind: "definite",
        background: "Same grocer, soda aisle only. Each brand line is gallons (millions) and revenue ($ millions). Implied price = revenue / gallons. The soda category was down $6M; find which brand and whether it was price, volume, or mix.",
        prompt: "Soda gallons (MM) and revenue ($M), average per store: Brand A 50 gal / $50M in 2014 vs 30 gal / $30M in 2015; Brand B 25 / $25 vs 30 / $30; Value brand 25 / $15 vs 60 / $24. What happened to price and mix, and which brand caused the soda-revenue decline?",
        answer: "Value brand doubled volume but cut price from $0.60 to $0.40/gal; Brand A lost 20 gal at $1.00",
        steps: [
          "Implied 2014 prices: A $1.00, B $1.00, value $0.60 per gallon.",
          "Implied 2015 prices: A $1.00, B $1.00, value $0.40 per gallon.",
          "Brand A revenue -20; Brand B +5; value +9; net soda -6, matching the category gap.",
          "Value brand stole volume from Brand A while destroying price."
        ],
        insight: "Fix value-brand price architecture and differentiation versus A and B; do not just 'promote soda.'"
      }
    ],
    creative: {
      prompt: "The value brand is causing the beverage-revenue decline. How would you reverse it? Organize around the 4Ps.",
      buckets: [
        {
          name: "Price",
          points: [
            "Raise value-brand price off $0.40/gal",
            "Pack-size architecture so value does not undercut Brand A",
            "Avoid alienating remaining value shoppers with a one-step jump"
          ]
        },
        {
          name: "Promotion",
          points: [
            "Stop promotions that train shoppers to trade down",
            "Differentiate value vs A/B in marketing rather than on price alone"
          ]
        },
        {
          name: "Product",
          points: [
            "Reformulate or re-brand value so it is not a copy of A",
            "Bundles that lift A/B with value rather than substituting"
          ]
        },
        {
          name: "Placement",
          points: [
            "Change shelf adjacencies so value is not the default grab next to A",
            "Review planogram share versus actual margin"
          ]
        }
      ]
    }
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
    ],
    math: [
      {
        kind: "definite",
        background: "Bob runs Something Witty, a UWS brewery. He currently bottles beer only and is considering adding cider after a renovation that changes the daily case mix. He sells by the bottle. Production is Monday–Friday, 20 days per month, 12 months per year.",
        prompt: "Bob currently bottles 30 cases of beer per day and no cider. After renovations he would produce 24 cases of beer and 12 cases of cider per day. He sells only by the bottle: $5.00/beer bottle and $6.00/cider bottle; 30 bottles per case. Production runs Monday-Friday, 20 days per month. What is the change in his annual revenue if he adds cider?",
        answer: "+$302,400 per year",
        steps: [
          "Current beer revenue = 30 cases x 30 bottles x $5 x 20 days x 12 months = $1,080,000.",
          "Future beer = 24 x 30 x $5 x 20 x 12 = $864,000.",
          "Cider = 12 x 30 x $6 x 20 x 12 = $518,400.",
          "New total = $1,382,400; increase = $302,400."
        ],
        insight: "Cider more than replaces the lost beer volume because of higher price and extra cases."
      },
      {
        kind: "definite",
        background: "Bob needs 0.5% of NYC take-home cider volume to break even. After the renovation he can produce 12 cider cases per day. A case is 30 bottles. Capacity is 20 days/month × 12 months. Hitting 0.5% of 15.5 million bottles is a production test, not a demand test.",
        prompt: "Bob needs at least 0.5% of the NYC take-home cider market to break even. NYC is expected to sell 15.5 million bottles of cider next year. After renovations he produces 12 cases/day x 30 bottles/case x 20 days/month x 12 months. Can he produce enough cider to hit 0.5%?",
        answer: "Yes — 86,400 bottles vs 77,500 needed",
        steps: [
          "0.5% of 15.5M = 77,500 bottles.",
          "Capacity = 12 x 30 x 20 x 12 = 86,400 bottles.",
          "86,400 > 77,500, so capacity is sufficient.",
          "Demand for Bob's cider is still unproven — capacity is not the same as sales."
        ],
        insight: "He can physically make the break-even volume; the open question is whether he can sell it."
      }
    ],
    creative: {
      prompt: "Besides potential revenue, what else should Bob consider before expanding into cider?",
      buckets: [
        {
          name: "Cost and operations",
          points: [
            "Labor training, equipment, labeling, marketing",
            "Raw materials (apples)",
            "Licensing and whether to brew in-house vs buy and resell"
          ]
        },
        {
          name: "Market",
          points: [
            "Cider vs beer demand and growth",
            "New customers vs cannibalizing beer regulars",
            "Competitors in NYC cider"
          ]
        },
        {
          name: "Brand and channels",
          points: [
            "Impact on beer brand equity",
            "New distribution (grocery, liquor stores)",
            "Go-to-market for a gluten-free occasion"
          ]
        }
      ]
    }
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
    ],
    math: [
      {
        kind: "market-sizing",
        background: "Grad-U-Date is an online dating app for graduate students. Size the US enrolled graduate-student pool from a typical-campus mix × 1,000 universities. Each row is students per class year × years in the program.",
        prompt: "Size Grad-U-Date's US graduate-student user pool using this campus mix (average university): medical 450 students x 4 years = 1,800; MBA 300 x 2 years = 600; law 200 x 3 years = 600; other graduate 1,000 x 3 years = 3,000. There are 1,000 such universities. What is the addressable student market?",
        answer: "6 million graduate students",
        steps: [
          "Students per university = 1,800 + 600 + 600 + 3,000 = 6,000.",
          "Market = 6,000 x 1,000 universities = 6,000,000."
        ],
        insight: "Limiting the app to MBA students would shrink this pool dramatically and skew gender."
      },
      {
        kind: "definite",
        background: "Grad-U-Date has 6 million addressable graduate students. Fixed cost is $10M/year; variable cost is $1 per member per year (members = users, not just paying users). Professional students = medical / MBA / law. Profit = revenue − $10M − ($1 × users).",
        prompt: "Addressable market is 6,000,000 students. Fixed costs are $10,000,000/year and variable cost is $1 per member per year. Three models: (1) Monthly fee — 5% of students pay $10/month. (2) Premium account — 30% become users; of users, half are professional students (40% buy premium) and half are non-professional (20% buy premium); premium is $5/month. (3) Advertising — 40% become users; half see $0.75/month ad revenue and half $1.25/month. Which model is most profitable, and by how much?",
        answer: "Monthly fee $25.7M; premium $20.6M; ads $16.4M — monthly fee wins on current math",
        steps: [
          "Monthly fee: 6M x 5% = 300k users; revenue 300k x $10 x 12 = $36M; profit 36M - 10M - 300k x $1 = $25.7M.",
          "Premium: 6M x 30% = 1.8M users; paying share = 50%x40% + 50%x20% = 30%; revenue 1.8M x 30% x $5 x 12 = $32.4M; profit 32.4M - 10M - 1.8M = $20.6M.",
          "Ads: 6M x 40% = 2.4M users; ARPU = 50%x$0.75 + 50%x$1.25 = $1.00/month; revenue 2.4M x $1 x 12 = $28.8M; profit 28.8M - 10M - 2.4M = $16.4M."
        ],
        insight: "Monthly-fee profit is highest today, but industry mix has been shifting away from paid monthly dating fees since ~2013 (Tinder)."
      }
    ],
    creative: {
      prompt: "If you recommend a premium-account model, what other strategies can Grad-U-Date use to increase profit? Also: why might an MBA-only dating site be a bad idea?",
      buckets: [
        {
          name: "Increase revenue",
          points: [
            "Mobile app to grow the funnel",
            "Profile consulting and photo editing",
            "Deals with date venues",
            "Expand to recent alumni",
            "Micro-transactions"
          ]
        },
        {
          name: "Reduce cost",
          points: [
            "Outsource servers",
            "Email-only support instead of phone"
          ]
        },
        {
          name: "Why not MBA-only",
          points: [
            "More men than women in most MBA programs",
            "Unnecessarily small market",
            "Older students are more often already partnered"
          ]
        }
      ]
    }
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
    ],
    math: [
      {
        kind: "definite",
        background: "Tres Burritos is a national burrito chain. This exhibit is one NYC store. The governor has required delivery-only for a 3-month virus. Pre-virus monthly EBITDA is $30K, so a normal 3 months is $90K. Wages + SG&A + overhead stay $60K/month. The $20K delivery launch hits month 1 only.",
        prompt: "Each NYC Tres Burritos currently does $100,000 monthly revenue and $30,000 EBITDA. Line items: COGS $10,000; wages $35,000; SG&A $5,000; fixed overhead $20,000. The governor requires delivery-only. For the 3-month virus: revenue drops 10%; COGS rises 10%; launching delivery costs a one-time $20,000 in month 1; wages, SG&A, and overhead stay $60,000. What is EBITDA in month 1, months 2-3, and over 3 months vs the old $90,000?",
        answer: "Month 1 -$1K; months 2-3 +$19K each; 3-month EBITDA $37K (~60% below $90K)",
        steps: [
          "New monthly revenue = $100K x 0.9 = $90K; new COGS = $10K x 1.1 = $11K.",
          "Month 1 expenses = 60 + 11 + 20 = $91K; EBITDA = 90 - 91 = -$1K.",
          "Months 2-3 expenses = 60 + 11 = $71K; EBITDA = $19K each.",
          "3-month total = -1 + 19 + 19 = $37K vs old 3 x 30 = $90K, about a 60% decline.",
          "Still far better than closing (fixed costs with zero sales)."
        ],
        insight: "Delivery keeps the stores EBITDA-positive over the outbreak despite a loss-making setup month."
      }
    ],
    creative: {
      prompt: "If NYC stores stay open with delivery, how could Tres Burritos improve EBITDA during the outbreak?",
      buckets: [
        {
          name: "Increase revenue",
          points: [
            "Sell kitchen ingredients as groceries",
            "Partner with other local restaurants to drive traffic",
            "Raise prices",
            "List on Seamless/Uber Eats to add orders"
          ]
        },
        {
          name: "Decrease cost",
          points: [
            "Reduce staff and/or close some of the 10 NYC stores",
            "Limit the menu",
            "Launch delivery via a third party instead of spending $20K to build it"
          ]
        },
        {
          name: "Brand / community",
          points: [
            "Ingredient boxes for families who cannot shop",
            "Coordinate with what the chain does in other cities"
          ]
        }
      ]
    }
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
    ],
    math: [
      {
        kind: "definite",
        background: "Men’s Extra Comfortable Essentials (MECE) had $60M revenue in 2016. The CEO promised 4× revenue by 2020 ($240M) and a 10.5% gross margin. 2020 category market ≈ 2016 market × (1 + CAGR)^4; 2016 market = 2016 company revenue in that line / 2016 share. You may use the rounded 2020 markets given in the question. Gross profit uses 2016 margins on 2020 line revenue.",
        prompt: "MECE had $60M revenue in 2016: socks 40%, tanks 25%, tees 15%, underwear 20%. 2016 market shares and 4-year CAGRs: socks 15% share, +5% CAGR; tanks 2.5%, +6%; tees 5%, -3%; underwear 1%, +20%. Gross margins stay at 2016 levels: socks 15%, tanks -5%, tees 0%, underwear 10%. By 2020 the firm expects shares of 15%, 10%, 5%, and 10% respectively. What is 2020 revenue and gross margin vs the CEO's $240M and 10.5% promises? You may round 2020 category markets to $200M, $750M, $150M, and $2.5B.",
        answer: "$362.5M revenue at 7.1% gross margin — revenue target yes, margin target no",
        steps: [
          "2016 revenue: socks $24M, tanks $15M, tees $9M, underwear $12M.",
          "2016 markets: 24/0.15 = $160M socks; 15/0.025 = $600M tanks; 9/0.05 = $180M tees; 12/0.01 = $1.2B underwear (use $1.26B if unrounded).",
          "2020 markets (rounded): $200M, $750M, $150M, $2.5B.",
          "2020 revenue = 200x15% + 750x10% + 150x5% + 2500x10% = 30 + 75 + 7.5 + 250 = $362.5M > $240M.",
          "2020 gross profit = 30x15% + 75x(-5%) + 7.5x0% + 250x10% = 4.5 - 3.75 + 0 + 25 = $25.75M; margin 25.75/362.5 = 7.1% < 10.5%."
        ],
        insight: "4x revenue is easy if underwear share really goes to 10%; the margin promise fails because tanks and tees drag."
      },
      {
        kind: "definite",
        background: "Using the 2020 line revenues and gross margins already calculated: socks $30M at 15%, tanks $75M at −5%, tees $7.5M at 0%, underwear $250M at 10%. Dropping a line removes its revenue and its gross profit (a negative-margin line adds back gross profit when dropped). Hurdles remain $240M revenue and 10.5% gross margin.",
        prompt: "Using 2020 revenue socks $30M, tanks $75M, tees $7.5M, underwear $250M and margins 15%, -5%, 0%, 10%, can the firm hit both $240M revenue and 10.5% gross margin by dropping product lines?",
        answer: "Drop tanks and tees: $280M revenue, 10.54% margin",
        steps: [
          "Drop tanks only: revenue 362.5 - 75 = $287.5M; GP 25.75 + 3.75 = $29.5M; margin 29.5/287.5 = 10.26% (still shy of 10.5%).",
          "Also drop tees: revenue 287.5 - 7.5 = $280M; GP stays $29.5M; margin 29.5/280 = 10.54%.",
          "Both still above the $240M revenue floor."
        ],
        insight: "Cutting the two zero/negative-margin lines is the clean way to hit both promises."
      }
    ],
    creative: {
      prompt: "Underwear share must rise from 1% to 10% while socks stay at 15%. How can the firm attempt that?",
      buckets: [
        {
          name: "Product",
          points: [
            "Luxury / nicer-material line",
            "Women's underwear",
            "Mix: boxers, briefs, athletic"
          ]
        },
        {
          name: "Customers and channels",
          points: [
            "Steal share from Hanes",
            "B2B branding for other companies",
            "Grocery, pharmacy, airport, vending",
            "E-commerce add-on at apparel checkout"
          ]
        },
        {
          name: "Operations",
          points: [
            "Re-tool lines from tanks/tees to underwear",
            "Renegotiate or offshore fabric",
            "Outsource manufacturing"
          ]
        }
      ]
    }
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
    ],
    math: [
      {
        kind: "definite",
        background: "Idaho Johnson is costing a 1-year (12-month) expedition to recover a crown. Six people travel (Idaho plus 5 workers). The $100K missed teaching salary is an opportunity cost and is part of total economic cost. Travel is $1,500 per person each way (outbound and return).",
        prompt: "Idaho Johnson is costing a 1-year (12-month) dig. Six people travel (Idaho plus 5 workers). Costs: map/equipment $12,000 total; legal $10,000 total; travel $1,500 per person each way; labor $4,000/month for each of 5 employees; food/lodging $10,000/month for the whole group; missed teaching salary $100,000. What is the total cost of the expedition?",
        answer: "$500K",
        steps: [
          "One-time: $12K + $10K + (6 x $1,500 x 2) = $40K.",
          "Recurring: ($4K x 5 x 12) + ($10K x 12) = $240K + $120K = $360K.",
          "Opportunity cost = $100K.",
          "Total = $40K + $360K + $100K = $500K."
        ],
        insight: "Most of the $500K is recurring labor and camp cost, not the map."
      },
      {
        kind: "definite",
        background: "A private collector offers $4M cash for the crown. A museum pays 10% of exhibit ticket revenue forever. Growing perpetuity: PV = next-year cash / (discount − growth). Ticket revenue = visitors × % who buy the exhibit ticket × $10.",
        prompt: "A private collector offers $4M cash for the crown. A museum will pay 10% of exhibit ticket revenue in perpetuity. A comparable museum draws 900,000 visitors/year; 50% buy the exhibit ticket at $10; discount rate 15%; growth 5%. Which offer is better, and what is the museum offer worth?",
        answer: "Museum is better: $4.5M PV vs $4M cash",
        steps: [
          "Exhibit ticket revenue = 900k x 50% x $10 = $4.5M/year.",
          "Idaho's take = 10% x $4.5M = $450K/year.",
          "Growing perpetuity PV = 450K / (15% - 5%) = $4.5M.",
          "$4.5M > $4M, so take the museum."
        ],
        insight: "The museum wins on PV, but only if attendance and the 5% growth hold."
      },
      {
        kind: "definite",
        background: "If Idaho finds the crown, use the $4.5M museum value as the payoff. If he fails, revenue is $0. Expedition economic cost is $500K. Expected revenue = 20% × $4.5M. ROI = (expected revenue − cost) / cost. Hurdle is 85%.",
        prompt: "Success probability is 20% (failure 80%). Use the $4.5M museum payoff if he finds the crown and $0 revenue if he fails. Expedition cost is $500K (including $100K opportunity cost). He requires 85% ROI. What is expected ROI, and does the dig clear the hurdle?",
        answer: "80% expected ROI — just short of 85%",
        steps: [
          "Expected revenue = 20% x $4.5M + 80% x $0 = $900K.",
          "Expected profit = 900K - 500K = $400K.",
          "ROI = 400 / 500 = 80% < 85% required."
        ],
        insight: "Close to the hurdle; extra artifacts, media rights, or a slightly higher success rate would flip it."
      }
    ],
    creative: {
      prompt: "What costs would be required to embark on this expedition? Bucket them.",
      buckets: [
        {
          name: "Upfront",
          points: [
            "Map",
            "Travel",
            "Legal (permits, visas, vaccines)",
            "Equipment"
          ]
        },
        {
          name: "Recurring",
          points: [
            "Labor",
            "Lodging and food"
          ]
        },
        {
          name: "Opportunity costs",
          points: [
            "Teaching salary",
            "Other potential expeditions"
          ]
        }
      ]
    }
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
    ],
    math: [
      {
        kind: "definite",
        background: "CNB Movies is testing 24-hour opening-weekend screenings in one 300-seat theater for 3 extra nights (Thu–Sun night). Ticket mix percents are of the 300 seats, not of people in the building — empty seats pay $0. So at 3:00 AM the 10% / 40% / 10% mix already reflects 60% fill (the other 40% of seats are empty). Concession is $10 per person actually in a seat. Children and seniors both pay $10.",
        prompt: "CNB will test 24-hour opening-weekend screenings in one 300-seat theater, Thursday-Sunday night (3 extra nights). Tickets are $15 adults and $10 children/seniors. Expected fill and mix (mix is of the 300 seats; empty seats pay $0): 12:00 AM — 100% fill, 30% children / 60% adults / 10% seniors; 3:00 AM — 60% fill, 10% children / 40% adults / 10% seniors; 6:00 AM — 80% fill, 20% children / 40% adults / 20% seniors. Concession spend is $10 per person in the seat. What is total ticket-plus-concession revenue for the 3-night test?",
        answer: "$49,500",
        steps: [
          "12:00 AM ticket revenue = 300 x (0.30x$10 + 0.60x$15 + 0.10x$10) = 300 x $13 = $3,900.",
          "3:00 AM = 300 x (0.10x$10 + 0.40x$15 + 0.10x$10) = 300 x $8 = $2,400.",
          "6:00 AM = 300 x (0.20x$10 + 0.40x$15 + 0.20x$10) = 300 x $10 = $3,000.",
          "Ticket total per night = $9,300.",
          "Concession heads = 300x100% + 300x60% + 300x80% = 720; x $10 = $7,200.",
          "($9,300 + $7,200) x 3 nights = $49,500."
        ]
      },
      {
        kind: "definite",
        background: "Same 3-night test. Use $49,500 as ticket-plus-concession revenue. Apply the percentage uplifts to the current daily cost lines, then multiply the new daily cost by 3 nights. Incremental profit = $49,500 − 3-night cost.",
        prompt: "Current daily cost per theater: staff $2,600; concessions $2,000; concession maintenance $400; projector maintenance $5,000. For 24-hour weekends, staff +50%, concession COGS +50%, concession maintenance +25%, projector +10%. Using $49,500 of 3-night revenue, what is incremental weekend profit?",
        answer: "$10,800 (about 22% margin on the $49,500)",
        steps: [
          "New daily costs: staff 2,600x1.5 = 3,900; concessions 2,000x1.5 = 3,000; concession maint. 400x1.25 = 500; projector 5,000x1.10 = 5,500; total $12,900/day.",
          "3-day cost = 12,900 x 3 = $38,700.",
          "Profit = 49,500 - 38,700 = $10,800."
        ],
        insight: "The test theater is profitable; national rollout still depends on demand and cost varying by market."
      }
    ],
    creative: {
      prompt: "What additional factors should CNB consider before rolling out 24-hour opening-weekend screenings?",
      buckets: [
        {
          name: "Demand and product",
          points: [
            "Cannibalization of existing showtimes",
            "Which titles actually warrant 24-hour (tentpoles vs flops)",
            "Regional demographic differences"
          ]
        },
        {
          name: "Cost and operations",
          points: [
            "Upfront marketing cost",
            "Whether projectors can run 24 hours without extra capex",
            "Staffing/security overnight"
          ]
        },
        {
          name: "Competitive and rollout",
          points: [
            "Copycat risk if CNB proves the model",
            "Test one theater vs a subset of the 400",
            "Opportunity cost of other programming"
          ]
        }
      ]
    }
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
    ],
    math: [
      {
        kind: "definite",
        background: "Steel Co. in the Netherlands ships coils by rail, truck, barge, and vessel. Weekly tons for a mode = deliveries × tons per delivery. Weekly cost = weekly tons × $/ton. Utilization is the share of vehicle capacity that is loaded; empty-capacity savings for a mode = weekly cost × (1 − utilization).",
        prompt: "Steel Co. ships coils by four modes. Per week: rail 10 deliveries x 40,000 tons at 67% utilization, $25/ton; truck 20 x 20,000 tons at 75%, $30/ton; barge 4 x 50,000 tons at 80%, $25/ton; vessel 3 x 100,000 tons at 100%, $10/ton. Utilization is the share of vehicle capacity actually loaded (the rest is empty). What is weekly transport cost, and how much could be saved by filling empty capacity?",
        answer: "$30M weekly cost; $7.3M weekly savings potential",
        steps: [
          "Volume/week: rail 400k, truck 400k, barge 200k, vessel 300k tons.",
          "Cost/week: 400k x $25 = $10.0M; 400k x $30 = $12.0M; 200k x $25 = $5.0M; 300k x $10 = $3.0M; total $30.0M.",
          "Empty-capacity savings = cost x (1 - utilization): rail 10.0 x 33% = $3.3M; truck 12.0 x 25% = $3.0M; barge 5.0 x 20% = $1.0M; vessel $0.",
          "Total savings potential = $7.3M/week."
        ],
        insight: "Trucks are both expensive and under-full; vessels are cheap and already full."
      },
      {
        kind: "definite",
        background: "Vessels sail every 14 days and are already full (100% utilization). Trucks leave daily. 1 coil = 10 tons. Trucking a coil that could have waited for a vessel costs the $20/ton rate gap. Coils that already missed the vessel (3,000) cannot be saved; the other 2,700 can.",
        prompt: "Vessels load every 14 days (100% utilization KPI) while trucks leave daily at $30/ton vs vessels at $10/ton. Over a period, 5,700 coils must move from the pier (1 coil = 10 tons). Weeks 1-2 leave 3,000 coils that miss the vessel and go by truck; better inventory planning would put the remaining 2,700 on vessels. What cost is saved by avoiding those truck diversions?",
        answer: "$540,000",
        steps: [
          "Coils that can shift = 5,700 - 3,000 = 2,700.",
          "Tons = 2,700 x 10 = 27,000.",
          "Savings = 27,000 x ($30 - $10) = $540,000."
        ],
        insight: "A 100% vessel-fill KPI is stranding coils on the pier; a 95% rule would reduce truck overflow."
      }
    ],
    creative: {
      prompt: "Besides filling empty rail/truck/barge capacity and fixing vessel-to-truck overflow, what other near-term techniques could save cost?",
      buckets: [
        {
          name: "Mode and contracts",
          points: [
            "Renegotiate $/ton, especially truck",
            "Shift volume from truck to vessel/barge where lead time allows",
            "Change vessel KPIs off 100% fill"
          ]
        },
        {
          name: "Inventory and analytics",
          points: [
            "Finish the scheduling analytics tool",
            "Hold coils to the vessel window instead of daily truck"
          ]
        },
        {
          name: "Other opex",
          points: [
            "Energy and plant utilization",
            "Procurement of inputs",
            "Network redesign of piers vs customer locations"
          ]
        }
      ]
    }
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
    ],
    math: [
      {
        kind: "definite",
        background: "GGC Health can open only one new ambulatory surgery center (ASC). Current company revenue is $400M; the growth target is $60M (15%). Each doctor’s annual revenue = patients/month × 12 × reimbursement. City doctor counts split by the specialty mix (ortho / neuro / gastro). Pick the city with the highest annual ASC revenue, then check it against $60M.",
        prompt: "GGC can open only one new ASC. Cities and doctor counts: Charlotte 30, Indianapolis 25, Nashville 16. Specialty mix: Charlotte 80% ortho / 10% neuro / 10% gastro; Indianapolis 40/40/20; Nashville 50/25/25. Each ortho doctor brings 15 patients/month at $5,000; neuro 10/month at $25,000; gastro 12/month at $15,000. Which city, and how much annual revenue? Does it hit the $60M (15%) growth target alone?",
        answer: "Indianapolis $49.8M — best city, but $10.2M short of $60M",
        steps: [
          "Revenue per doctor-year: ortho 15x12x$5K = $900K; neuro 10x12x$25K = $3.0M; gastro 12x12x$15K = $2.16M.",
          "Charlotte: 24x900K + 3x3M + 3x2.16M = 21.6 + 9 + 6.48 = $37.08M.",
          "Indianapolis: 10x900K + 10x3M + 5x2.16M = 9 + 30 + 10.8 = $49.8M.",
          "Nashville: 8x900K + 4x3M + 4x2.16M = 7.2 + 12 + 8.64 = $27.84M (dominated on every specialty by Indy).",
          "Need same-site growth for the remaining ~$10M."
        ],
        insight: "Neuro mix makes Indianapolis win despite fewer doctors; one new site is not enough."
      },
      {
        kind: "definite",
        background: "On top of Indianapolis’s $49.8M new-ASC revenue, GGC will add 2 urologists at each of 8 existing ASCs. Round 16 × 8 patients/month × 12 months to 1,500 cases. Revenue = cases × $8,000. Test whether $49.8M + urology clears the $60M target.",
        prompt: "GGC will add 2 urology doctors to each of its 8 existing ASCs. Each urologist brings 8 patients per month; reimbursement is $8,000 per case. Round 16 x 8 x 12 patients to 1,500. What additional annual revenue is this, and do Indianapolis plus urology clear $60M?",
        answer: "$12M; yes — $49.8M + $12M = $61.8M",
        steps: [
          "Urologists = 8 x 2 = 16.",
          "Patients/year = 16 x 8 x 12 = 1,536 ~ 1,500.",
          "Revenue = 1,500 x $8,000 = $12M.",
          "49.8 + 12 = $61.8M > $60M."
        ]
      }
    ],
    creative: {
      prompt: "Indianapolis alone misses the $60M target. How else could GGC grow revenue at the current 8 ASCs? Price increases are not allowed.",
      buckets: [
        {
          name: "More patients per doctor",
          points: [
            "Make the ASC the preferred site (scheduling, control, outcomes)",
            "Incentives for hitting volume targets",
            "Prioritize high-volume doctors"
          ]
        },
        {
          name: "More doctors per site",
          points: [
            "Physician outreach / recruiting",
            "Add new high-reimbursement procedures (e.g. urology)"
          ]
        },
        {
          name: "Mix",
          points: [
            "Shift toward higher-reimbursement surgeries",
            "Payer mix (more commercially insured vs Medicaid)"
          ]
        }
      ]
    }
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
    ],
    math: [
      {
        kind: "market-sizing",
        background: "FunVentures is looking at Nook Co., a premium private-island operator. Size annual category revenue. One stay = one room; 2 guests share a room. People who visit do so once every 2 years. Rate is $10,000 per night all-in.",
        prompt: "Size the annual revenue market for premium private-island vacations. Sample method: world population 8 billion; top 0.01% are potential customers; 10% likelihood to visit; they visit once every 2 years; 2 guests per room; average stay 5 nights; $10,000 per night all-in. What annual market revenue does that imply?",
        answer: "$1B per year",
        steps: [
          "Potential customers = 8B x 0.01% = 800,000.",
          "Likely visitors = 800,000 x 10% = 80,000 people.",
          "Annual visiting people = 80,000 / 2 = 40,000 (once every 2 years).",
          "Rooms/year = 40,000 / 2 guests = 20,000 stays.",
          "Revenue = 20,000 x 5 nights x $10,000 = $1.0B."
        ],
        insight: "A tiny slice of global wealth still supports a ~$1B category at these rates."
      },
      {
        kind: "definite",
        background: "Nook Co. has 28% of a $1B premium private-island market. Average stay is 5 nights at $10,000/night, so revenue per stay = $50,000. Stays = revenue / $50,000. Labor is monthly wage × 12 × headcount. Food and transport are per stay. Use $70M total fixed cost ($25M maintenance/utilities, $15M insurance, $30M marketing/admin). Profit = revenue − labor − food − transport − fixed.",
        prompt: "Nook Co. has 28% of a $1B market. Price is $10,000/night with a 5-night average stay. Staff: 1,000 service at $2,000/month and 500 kitchen at $3,000/month. Food & supplies $5,000 per stay; transport & activities $10,000 per stay. Fixed: maintenance/utilities $25M, insurance $15M, marketing $30M (use the cost sheet: maintenance/insurance/utilities $25M, marketing $15M, administrative $30M if you split SG&A that way — total fixed $70M). Compute 2019 profit and margin using: labor 24M + 18M, food 28M, transport 56M, plus $25M + $15M + $30M fixed.",
        answer: "$84M profit; 30% margin",
        steps: [
          "Revenue = 28% x $1B = $280M.",
          "Stays = 280M / ($10,000 x 5) = 5,600.",
          "Labor = 2K x 12 x 1,000 + 3K x 12 x 500 = $24M + $18M = $42M.",
          "Food = 5K x 5,600 = $28M; transport = 10K x 5,600 = $56M.",
          "Fixed = 25 + 15 + 30 = $70M. Total cost = 42 + 28 + 56 + 70 = $196M.",
          "Profit = 280 - 196 = $84M; margin = 30%."
        ],
        insight: "Nook is growing share by spending on admin/marketing; PE could cut that."
      },
      {
        kind: "definite",
        background: "FunVentures would hold Nook forever. No-growth perpetuity NPV = annual profit / discount rate. Asking price is $1.5B. ROI vs price = (NPV − price) / price. Target ROI is 15%.",
        prompt: "Nook earns $84M profit. FunVentures will hold forever; discount rate 5%; asking price $1.5B; target ROI 15%. Using a no-growth perpetuity, what is NPV and ROI vs the $1.5B price? ROI = (NPV - price) / price.",
        answer: "NPV $1.68B; ROI 12% — short of 15%",
        steps: [
          "NPV = 84M / 0.05 = $1.68B.",
          "ROI = (1.68B - 1.5B) / 1.5B = 12%.",
          "Cutting ~$5M of administrative cost would lift profit enough to clear 15%."
        ],
        insight: "The deal is close; value creation is in cost takeout, not the sticker NPV."
      }
    ],
    creative: {
      prompt: "What potential risks would you consider in acquiring Nook Co.?",
      buckets: [
        {
          name: "Internal to Nook",
          points: [
            "Unsustainably high growth",
            "Churn if prices are raised to peer levels",
            "Generic service with no moat",
            "Quality of reported financials"
          ]
        },
        {
          name: "External",
          points: [
            "Sea-level rise submerging islands",
            "Conflicts with other travel assets in the PE portfolio",
            "Shift in vacation destination preferences",
            "Safety and regulatory risk"
          ]
        }
      ]
    }
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
    ],
    math: [
      {
        kind: "definite",
        background: "A consulting firm is costing advisor travel that teleconferencing might replace. Each office line is advisors × trips per week × weeks per year × (airfare + meals & incidentals). Sum the four offices. There are 35 advisors in total.",
        prompt: "Advisor travel: New York 10 advisors, 2 trips/week, 10 weeks/year, $600 round-trip + $50 M&E; Houston 5 advisors, 2 trips/week, 25 weeks, $500 + $40; San Francisco 10 advisors, 3 trips/week, 20 weeks, $700 + $50; Chicago 10 advisors, 3 trips/week, 30 weeks, $600 + $30. What is total annual travel cost, and roughly cost per advisor?",
        answer: "$48.2M total; about $1.4M per advisor",
        steps: [
          "NY: 10 x 2 x 10 x ($600+$50) = $6.0M.",
          "Houston: 5 x 2 x 25 x ($500+$40) = $5.0M.",
          "SF: 10 x 3 x 20 x ($700+$50) = $21.0M.",
          "Chicago: 10 x 3 x 30 x ($600+$30) = $16.2M.",
          "Total $48.2M across 35 advisors ~ $1.4M each, concentrated in SF and Chicago."
        ],
        insight: "Frequency (SF/Chicago), not ticket price, drives the spend."
      },
      {
        kind: "definite",
        background: "Teleconferencing would cut that $48.2M travel bill by 10% ($4.82M/year). There are 35 advisors. Vendor implementation is $11M. In-house implementation is $500K development + $8.5M build = $9.0M. Both options cost $2,000 per user per month all-in. For this payback, divide implementation cost by the $4.82M travel savings and ignore run-rate. Annual run-rate = $2,000 × 35 × 12.",
        prompt: "Teleconferencing cuts travel 10% ($4.82M/year). Two options, 35 advisors. Outside vendor: $11M implementation, $2,000/user/month subscription. In-house: $500K development + $8.5M implementation, $1,500/user/month maintenance + $500/user/month inter-company subscription. Run-rate = monthly cost x 35 x 12. Break-even years = implementation cost / annual travel savings (ignore run-rate for this payback). What is annual run-rate for each, and approximate payback?",
        answer: "Both run $840K/year; vendor ~2.3 years on $11M; in-house ~1.9 years on $9.0M (guide ~2.8 / ~2.1 if using $3.98M savings)",
        steps: [
          "Monthly cost/user is $2,000 either way (vendor $2,000; in-house $1,500+$500).",
          "Run-rate = 2,000 x 35 x 12 = $840K.",
          "Vendor payback = 11M / 4.82M ~ 2.3 years.",
          "In-house payback = 9.0M / 4.82M ~ 1.9 years.",
          "Paybacks are close; choose on qualitative grounds."
        ],
        insight: "Financials do not pick a winner — vendor vs in-house is a control/capability choice."
      }
    ],
    creative: {
      prompt: "Payback is similar for vendor and in-house. What else should the wealth-management firm consider before rolling out virtual conferencing?",
      buckets: [
        {
          name: "Client and advisor",
          points: [
            "Impact on close rates and relationships",
            "Training burden",
            "Whether some segments still need in-person"
          ]
        },
        {
          name: "Risk and compliance",
          points: [
            "Cybersecurity",
            "Recording and suitability rules",
            "Confidentiality of wealth data"
          ]
        },
        {
          name: "Build vs buy",
          points: [
            "Vendor: less internal labor, less control, higher subscription",
            "In-house: customization and control, more people to maintain across offices"
          ]
        }
      ]
    }
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
    ],
    math: [
      {
        kind: "definite",
        background: "Apartment Co. can retrofit lighting across 10 buildings. Annual kWh saved = bulbs × 100. Annual $ savings = kWh × $0.15. Install = bulbs × $30. Simple payback = install / annual savings. Ignore the 10-year life for payback (it only confirms the bulbs last longer than payback).",
        prompt: "Apartment Co. can install efficient lighting: 5,000 bulbs per building x 10 buildings; $30/bulb install; 100 kWh saved per bulb per year; electricity $0.15/kWh; 10-year bulb life. What are annual savings, total install cost, and payback?",
        answer: "$750K/year savings; $1.5M cost; 2-year payback",
        steps: [
          "Bulbs = 5,000 x 10 = 50,000.",
          "kWh saved = 50,000 x 100 = 5,000,000.",
          "Annual savings = 5,000,000 x $0.15 = $750,000.",
          "Install = 50,000 x $30 = $1,500,000; payback = 1.5M / 0.75M = 2 years."
        ]
      },
      {
        kind: "definite",
        background: "Same 10 buildings, solar instead of bulbs. Usable roof per building is 40 ft × 40 ft = 1,600 sq ft. Annual kWh = total sq ft × 400. Savings = kWh × $0.15. Cost = $200 × total sq ft. Simple payback = cost / annual savings.",
        prompt: "Solar alternative: each of 10 buildings has 40 ft x 40 ft usable roof (1,600 sq ft); 400 kWh saved per sq ft per year; $0.15/kWh; install $200/sq ft all-in; 20-year panel life. Annual savings, cost, and payback?",
        answer: "$960K/year savings; $3.2M cost; ~3.3-year payback",
        steps: [
          "Area = 1,600 x 10 = 16,000 sq ft.",
          "kWh = 16,000 x 400 = 6,400,000.",
          "Savings = 6,400,000 x $0.15 = $960,000.",
          "Cost = $200 x 1,600 x 10 = $3,200,000; payback ~ 3.3 years."
        ],
        insight: "Lights pay back faster; solar saves more per year and over a 20-year life."
      }
    ],
    creative: {
      prompt: "Management now pays tenant utilities. What are ways Apartment Co. can reduce utilities expense?",
      buckets: [
        {
          name: "Demand-side",
          points: [
            "Encourage AC/lights off",
            "Tenant rewards for low usage",
            "Behavioral nudges in leases"
          ]
        },
        {
          name: "Supply-side / equipment",
          points: [
            "Efficient lighting",
            "Solar",
            "Automatic on/off",
            "Building envelope upgrades"
          ]
        },
        {
          name: "By utility",
          points: [
            "Electricity vs gas vs water each need different levers"
          ]
        }
      ]
    }
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
    ],
    math: [
      {
        kind: "definite",
        background: "H&H is looking at buying Sternofi, a pancreatic-cancer drug. US diagnoses = 65,000 patients/year. Let B’s patient volume be X. Then competitor A = 1.5X, Sternofi = 2X, competitor C = 0.5X, and Other companies = 15,000. Those five buckets must sum to 65,000. Other companies take $300M of the $1.5B revenue market (1/5), so Other price = $300M / 15,000. C matches Other’s price; B is 25% above that; A is $10,000 less than C. Sternofi revenue is the leftover of the $1.5B market; Sternofi price = that revenue / Sternofi patients.",
        prompt: "US pancreatic-cancer diagnoses are 65,000/year. 'Other' companies treat 15,000 patients. Competitor A has 50% greater patient share than B; C is one-third of A's patient volume (equivalently C = 0.5 × B when A = 1.5B). Sternofi will capture twice B's patient volume. Other companies take 1/5 of the $1.5B revenue market ($300M), so other price = $20K/patient. C is priced the same as other; B charges 25% more than that; A charges $10,000 less than C. What are Sternofi's patients, price, and revenue?",
        answer: "20,000 patients at $35K; $700M revenue",
        steps: [
          "Let B = X thousand patients. Then A = 1.5X, Sternofi = 2X, C = 0.5X, other = 15. Sum: 2X+1.5X+X+0.5X+15 = 65 → 5X = 50 → X = 10.",
          "Patients (000s): Sternofi 20, A 15, B 10, C 5, other 15.",
          "Other price = 300M / 15,000 = $20K; C = $20K; B = $25K; A = $10K.",
          "Sternofi revenue = 1,500 - 150 - 250 - 100 - 300 = $700M; price = 700M / 20,000 = $35K."
        ],
        insight: "Sternofi would be #1 by both patients (~31%) and revenue (~47%)."
      },
      {
        kind: "definite",
        background: "Sternofi’s asking price is $2.3B cash. Years 1–4: $0 revenue and $50M development cost each year. Years 5–8: $700M revenue, $20M fixed, and 20,000 treatments × $4,000 variable. H&H wants payback inside 8 years on cumulative net income versus $2.3B. Cumulative NI by year 8 = 4 × (−$50M) + 4 × year-5–8 NI.",
        prompt: "Sternofi asks $2.3B cash. Years 1-4: $0 revenue and $50M/year development cost. Years 5-8: $700M revenue, $20M fixed cost, 20,000 treatments x $4,000 variable cost. H&H wants 8-year payback. Does it clear?",
        answer: "No — ~8.17 years (cumulative NI $2.2B vs $2.3B price)",
        steps: [
          "Years 5-8 NI = 700M - 20M - 20k x $4k = 700 - 20 - 80 = $600M/year.",
          "Years 1-4 NI = -$50M x 4 = -$200M.",
          "Cumulative NI by year 8 = -200 + 4 x 600 = $2,200M < $2,300M.",
          "Payback = 4 + (2300+200)/600 = 4 + 4.17 = 8.17 years."
        ],
        insight: "It is close enough that synergies, ex-US sales, or other pipeline drugs can justify a go."
      }
    ],
    creative: {
      prompt: "If H&H acquires Sternofi for Deanraghutumab, what risks should it worry about, and how might it mitigate them?",
      buckets: [
        {
          name: "Regulatory / legal",
          points: [
            "FDA approval risk",
            "DoJ merger review",
            "Remaining patent life"
          ]
        },
        {
          name: "Commercial",
          points: [
            "Insurance reimbursement",
            "Overseas launch capability",
            "Competitor pipeline drugs"
          ]
        },
        {
          name: "Mitigants",
          points: [
            "Stage the cash (earnouts on approval)",
            "Keep Sternofi's clinical team",
            "Model a lower share than 20k patients"
          ]
        }
      ]
    }
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
    ],
    math: [
      {
        kind: "market-sizing",
        background: "P&G is sizing a US silicone menstrual-cup launch. Assume population is evenly spread across ages 0–80 in eight 10-year bands. Menstruation is ages 10–50 (four bands). WTP means willingness to use a cup. TAM = users × $40. Year-1 capture is P&G’s share of that TAM.",
        prompt: "Size the US silicone menstrual-cup market. Use: US population 330M; 50% female = 165M; even age distribution from 0-80 (eight 10-year bands); menstruation ages 10-50; 10% willingness to use; comparable price $40. Also state year-1 TAM if P&G captures 10% (aggressive) or 5% (conservative).",
        answer: "$330M TAM; $33M / $16.5M captured",
        steps: [
          "US 330M; female 50% = 165M.",
          "Even 0-80 / 8 = 20.625M per 10-year band.",
          "Ages 10-50 = 4 bands = 82.5M.",
          "10% WTP = 8.25M users x $40 = $330M TAM.",
          "10% capture $33M; 5% capture $16.5M."
        ]
      },
      {
        kind: "market-sizing",
        background: "A survey finds 40% of women 18–50 are undecided. Converting one-quarter of that 40% adds 10 points of willingness, taking WTP from 10% to 20%. Start from 82.5 million menstruating women and $40 per cup. TAM = 20% × 82.5M × $40. Then apply 10% and 5% year-1 capture.",
        prompt: "A survey of US women 18-50 finds 40% undecided on switching to a cup. P&G believes it can convert one-quarter of that undecided 40% (an extra 10 points of willingness). Starting from 82.5M menstruating women, 20% WTP, $40 price, what is the adjusted TAM and 10%/5% year-1 capture?",
        answer: "16.5M WTP; $660M TAM; $66M / $33M capture",
        steps: [
          "WTP = 20% x 82.5M = 16.5M.",
          "TAM = 16.5M x $40 = $660M.",
          "10% capture $66M; 5% $33M."
        ],
        insight: "Marketing the undecided 40% can double the addressable pool."
      },
      {
        kind: "definite",
        background: "P&G will lose pad/tampon profit from switchers and gain complementary attach (discs, wash, wipes). 1.65 million year-1 users. Cup lasts 5 years. You are given PV of cannibalized care (~$675M) and PV of complementary (~$637.5M) at a 10% discount. R&D of $12M must also be recovered. Break-even cup price = (cannibalized PV + R&D − complementary PV) / 1.65M.",
        prompt: "Price the cup to offset cannibalization. Use 16.5M addressable users and 10% year-1 capture (1.65M users). Current-care annual spend per switcher: tampons $7 x 10 = $70, pads $7 x 2 = $14, liners $6 x 1 = $6, total $90. Complementary (new) spend: discs $15 x 2 = $30, wash $7 x 4 = $28, wipes $6.75 x 4 = $27, total ~$85. Cup lasts 5 years. PV cannibalized care at 10% discount on the 5-year total ≈ $675M. PV complementary at 10% ≈ $637.5M. R&D is $12M (treat as a cost to recover). Break-even unit price = (cannibalized PV + R&D - complementary PV) / 1.65M users.",
        answer: "~$30 per cup",
        steps: [
          "Annual care x 1.65M = $148.5M; x 5 years = $742.5M; PV at 10% ≈ $675M.",
          "Annual complementary x 1.65M = $140.25M; x 5 = $701.25M; PV ≈ $637.5M.",
          "Net to recover = 675 + 12 - 637.5 = $49.5M.",
          "Price = 49.5M / 1.65M = $30/cup."
        ],
        insight: "A ~$30 cup offsets lost pad/tampon profit after complementary attach."
      }
    ],
    creative: {
      prompt: "P&G has seen rising sustainability interest. How should it market the cup, and how can it lean into sustainability on Tampax/Always as well?",
      buckets: [
        {
          name: "Cup 4Ps",
          points: [
            "Product: ease of use and new silicone",
            "Price: at WTP / ~$30 break-even",
            "Place: pharmacies and DTC",
            "Promotion: lifetime savings vs pads, influencers, sustainability story"
          ]
        },
        {
          name: "Rest of the franchise",
          points: [
            "Biodegradable materials and less packaging",
            "Ingredient transparency / organic lines",
            "Sustainability campaigns that do not require every user to switch to a cup"
          ]
        }
      ]
    }
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
    ],
    math: [
      {
        kind: "definite",
        background: [
          "Formula X currently runs 2 batches/day and loses $5,000 per batch ($10,000/day).",
          "Revenue is $160K per batch.",
          "A 3rd batch in the same day has $150K total cost (labor/misc on that batch is $25K instead of $20K) and the same $160K revenue.",
          "The scrubber cleans 1,000 kg in two cycles. Waste goes from 600 to 900 kg/day, so it still needs only two cycles — do not add a third scrubber cycle."
        ],
        prompt: "What is the effect on daily operating profit if the plant runs a 3rd batch?",
        answer: "The 3rd batch earns $10K and offsets the $10K/day loss — operations break even",
        steps: [
          "Current: 2 x -$5K = -$10K/day.",
          "3rd-batch contribution = 160K - 150K = +$10K.",
          "Net = 0. Scrubber does not add a third cycle, which is why marginal cost falls."
        ],
        insight: "Fixed scrubber cycles make extra batches much cheaper than the first two."
      },
      {
        kind: "definite",
        background: [
          "Reject pellets can be re-injected at the mixer, before the granulator.",
          "Each batch has a 150 kg reject pile.",
          "Yield after another granulator and screen pass: 150 kg × 80% × 80% = 96 kg of good product.",
          "Good product sells at $200/kg.",
          "The plant runs 3 batches/day with 2 scrubber cycles and 100 kg spare scrubber capacity.",
          "Each reject pile adds 36 kg of waste, so only two piles/day fit without an extra scrubber cycle.",
          "Ignore recycle capex."
        ],
        prompt: "What is incremental operating profit per batch and per day?",
        answer: "$19,200 per batch; $38,400 per day (two piles)",
        steps: [
          "Recovered kg = 150 x 0.8 x 0.8 = 96 kg.",
          "96 x $200 = $19,200 per batch.",
          "Two batches of recycle/day = $38,400.",
          "A third pile would force another scrubber cycle and a net ~$800 loss — do not run it."
        ]
      }
    ],
    creative: {
      prompt: "Formula X is losing money. Brainstorm ways to restore profitability. (Buyers and suppliers are locked in 5-year contracts; heavy capex is not available.)",
      buckets: [
        {
          name: "Operations",
          points: [
            "Run three batches/day",
            "Reuse screen rejects",
            "Cut misc/labor and scrubber cost"
          ]
        },
        {
          name: "Supplier (limited now)",
          points: [
            "Renegotiate later",
            "Cheaper inputs / lower unusable content",
            "Bulk discounts"
          ]
        },
        {
          name: "Buyer (limited now)",
          points: [
            "Renegotiate later",
            "Sell retail",
            "Adjust target crop/geography",
            "Advertise"
          ]
        }
      ]
    }
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
    ],
    math: [
      {
        kind: "definite",
        background: "Galloway is a NYC firm considering a hybrid office. Current lease is 16,000 sq ft in one building at $8.33/sq ft/month. The proposal splits space: 10,000 sq ft Soho at $6.67/sq ft/month plus 1,000 sq ft of New Jersey servers at $5/sq ft/month. Annual rent = sq ft × monthly rate × 12.",
        prompt: "Galloway's current NYC lease is 16,000 sq ft (5,000 communal, 10,000 desk, 1,000 server) at $8.33/sq ft/month. Proposed Soho space is 2,500 communal + 7,500 desk (no server) at $6.67/sq ft/month. Servers move to 1,000 sq ft in New Jersey at $5/sq ft/month. What is current annual rent, future annual rent, and annual savings?",
        answer: "Current $1.6M; future $860K; save $740K/year",
        steps: [
          "Current = 16,000 x $8.33 x 12 ≈ $1,600,000.",
          "Soho = 10,000 x $6.67 x 12 ≈ $800,000.",
          "NJ server = 1,000 x $5 x 12 = $60,000.",
          "Future $860K; savings $740K."
        ]
      },
      {
        kind: "definite",
        background: "Hybrid occupancy would save $740K/year of rent but add $250K/year of software licenses. One-time cash: $250K move + $250K lease breakage + $500K tech. The CEO wants cash-neutral over two years with no discounting: 2 × net annual save − one-time cost.",
        prompt: "Annual occupancy save is $740K, but hybrid adds $250K/year software licenses. One-time: moving $250K, lease breakage $250K, tech implementation $500K. On a nominal (no PV) basis, what is two-year cash impact vs the CEO's cash-neutral-in-two-years hurdle?",
        answer: "-$20K over two years — misses cash-neutral",
        steps: [
          "Net annual save = 740K - 250K license = $490K.",
          "Two-year save = $980K.",
          "One-time = 500 + 250 + 250 = $1,000K.",
          "Net = 980 - 1,000 = -$20K."
        ],
        insight: "The CEO's 'near-term efficiency' claim is wrong on a 2-year clock; the move may still be right strategically."
      }
    ],
    creative: {
      prompt: "What costs and benefits should Galloway weigh beyond the 2-year cash math?",
      buckets: [
        {
          name: "One-time / quantitative",
          points: [
            "Move cost, lease break, collaboration tech",
            "Whether Soho actually fits production workflows"
          ]
        },
        {
          name: "People and production",
          points: [
            "Documentary/film collaboration in person",
            "Talent attraction via hybrid norms",
            "Employee reaction to leaving Union Square"
          ]
        },
        {
          name: "Strategic",
          points: [
            "Access to talent in other filmmaking hubs",
            "Two-year hurdle may be too short for a workplace strategy"
          ]
        }
      ]
    }
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
    ],
    math: [
      {
        kind: "definite",
        background: "The Toto Foundation is comparing vaccine-drone programs in Senegal vs Guinea. Product is donated and drone capex is already in the grant, so compare annual operating cost and vials delivered. Flying days = 300. Fuel cost = miles per flight × $/mile × flights/day × 300. Vials = vials/flight × flights/day × 300. Then add each country’s ground/regulatory cost.",
        prompt: "Vaccine/medicine drone delivery in Senegal vs Guinea, 300 flying days/year. Senegal: 100 vials/flight, 250 mile round-trip, $0.80/mile, 10 flights/day, $400K ground/regulatory per year. Guinea: 80 vials/flight, 500 miles, $1.00/mile, 5 flights/day, $250K ground/regulatory. Drone capex is already in the grant; product is donated. Compare annual cost and vials delivered.",
        answer: "Both cost $1.0M/year; Senegal 300,000 vials vs Guinea 120,000",
        steps: [
          "Senegal fuel = 250 x $0.80 x 10 x 300 = $600K; + $400K = $1.0M. Vials = 100 x 10 x 300 = 300,000.",
          "Guinea fuel = 500 x $1.00 x 5 x 300 = $750K; + $250K = $1.0M. Vials = 80 x 5 x 300 = 120,000.",
          "Same $1M annual grant; Senegal delivers 2.5x the medicine because flights are shorter."
        ],
        insight: "Pick Senegal on impact per grant-dollar; lower variable cost also scales better."
      }
    ],
    creative: {
      prompt: "The foundation shortlisted five African countries for vaccine drone delivery. What factors should it use to pick two, before looking at a data exhibit?",
      buckets: [
        {
          name: "Population / density",
          points: [
            "Drones add most value where roads are thin and density is low-to-moderate",
            "Population large enough to matter"
          ]
        },
        {
          name: "Health need",
          points: [
            "Vaccination rates",
            "Deaths from preventable disease"
          ]
        },
        {
          name: "Safety and feasibility",
          points: [
            "Danger to nonprofit workers",
            "Ease of doing business / regulation",
            "Political stability"
          ]
        }
      ]
    }
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
    ],
    math: [
      {
        kind: "definite",
        background: "An airline will white-label in-flight connectivity on all 90 aircraft. Capex is $250K per plane; the airline pays 40% ($100K/plane). Contribution is $10 per WiFi session, and one session = the whole flight for that passenger. Assume 100% load factor and all aircraft outfitted on day one. Two-year passengers = seats × flights/year × 2 years, summed across widebody and narrowbody. Take rate × two-year passengers × $10 must recover $9M.",
        prompt: "The airline will white-label IFC on all 90 aircraft: 10 widebody (300 seats, 2,500 flights/year) and 80 narrowbody (100 seats, 27,500 flights/year). Capex is $250K per plane; the airline pays 40%. Contribution margin is $10 per WiFi session (one session = the whole flight). Assume 100% load factor and all aircraft outfitted at once. What take rate over 2 years is needed to recover the airline's share of investment?",
        answer: "12.9%",
        steps: [
          "Airline capex/plane = $250K x 40% = $100K.",
          "Total investment = 10 x $100K + 80 x $100K = $9M.",
          "Two-year passengers = 10x300x2,500x2 + 80x100x27,500x2 = 1.5M + 5.5M = 7M.",
          "7M x take rate x $10 = $9M → take rate = 12.9%."
        ],
        insight: "Paid IFC take rates today are only 5-10%, so 12.9% is a stretch without a better offer or a slower rollout."
      }
    ],
    creative: {
      prompt: "Paid-connectivity take rates today are only 5-10%, below the 12.9% break-even. What variables are correlated with higher IFC take rate?",
      buckets: [
        {
          name: "Flight characteristics",
          points: [
            "Longer flights",
            "Daytime vs red-eye",
            "Whether other IFE is available"
          ]
        },
        {
          name: "Product",
          points: [
            "Price",
            "Speed and quality",
            "Number of connected devices"
          ]
        },
        {
          name: "Passenger",
          points: [
            "Cabin class",
            "Business vs leisure",
            "Age / income"
          ]
        }
      ]
    }
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
    ],
    math: [
      {
        kind: "definite",
        background: "FlashPro is an action-camera brand. US addressable units in 2018 are 16 million; 85% of that pool actually buys a camera; FlashPro has 30% unit share at $250. US is 60% of FlashPro sales, international 40%, so international sales = US sales × (40/60). COGS is 50% of total sales. Gross profit = 50% of total sales.",
        prompt: "US action-camera addressable units in 2018 are 16 million. 85% of that market buys a camera; FlashPro has 30% share; price $250. International is 40% of FlashPro sales and US is 60%. COGS is 50% of sales. Amounts can be kept in thousands. What is 2018 gross profit?",
        answer: "$850M gross profit on $1.7B sales",
        steps: [
          "US sales = 16M x 85% x 30% x $250 = $1.02B.",
          "International = 1.02B x (40/60) = $0.68B.",
          "Total sales = $1.70B; COGS 50% = $0.85B; GP = $0.85B."
        ],
        insight: "US category growth is flattening; GP dollars will stall unless FlashPro finds new geos or uses."
      }
    ],
    creative: {
      prompt: "US camera growth is limited and competition is fierce. How can FlashPro grow revenue?",
      buckets: [
        {
          name: "4Ps / core",
          points: [
            "Product attributes and accessories",
            "Price architecture",
            "Retail vs web mix",
            "Advertising"
          ]
        },
        {
          name: "New markets",
          points: [
            "New geographies",
            "Adjacent use cases beyond action sports",
            "Software/subscription"
          ]
        },
        {
          name: "How to get there",
          points: [
            "Organic build",
            "M&A"
          ]
        }
      ]
    }
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
    ],
    math: [
      {
        kind: "definite",
        background: "Foci sells an ultra-rare-disease drug at a $500,000 annual list price. Persistence = share of beginning-of-year patients still on drug at year-end (EoY = BoY × persistence). Adherence = share of average patients who take the drug (and therefore pay). Average patients in year = (BoY + EoY) / 2. Revenue = average patients × adherence × $500,000. New patients are treated as if they all start at BoY. Gross margin is 80% of revenue. The $300M campaign raises persistence +10 points and adherence +5 points for both groups. Incremental margin must cover $300M.",
        prompt: "Foci's 2021 base: 3,750 existing patients (BoY) with 50% persistence and 40% adherence; 4,000 new patients (all in at BoY) with 50% persistence and 60% adherence; $500,000 annual list price. Average patients in year = (BoY + EoY)/2. A $300M campaign would raise adherence +5 points and persistence +10 points for both groups. Gross margin is 80%. What is 2021 revenue with vs without the campaign, incremental margin, and does it break even on $300M?",
        answer: "Without $1.46B; with $1.715B; incremental margin $204M — does not cover $300M",
        steps: [
          "Without, existing: EoY 3,750 x 50% = 1,875; avg 2,812.5 ~ 2,800; rev 2,800 x 40% x $500K = $560M.",
          "Without, new: EoY 2,000; avg 3,000; rev 3,000 x 60% x $500K = $900M; total $1.46B.",
          "With, existing: EoY 2,250; avg 3,000; rev 3,000 x 45% x $500K = $675M.",
          "With, new: EoY 2,400; avg 3,200; rev 3,200 x 65% x $500K = $1.04B; total $1.715B.",
          "Delta revenue $255M x 80% = $204M < $300M cost (~20% revenue lift)."
        ],
        insight: "Year-1 economics miss break-even; multi-year persistence compounding could still justify it."
      }
    ],
    creative: {
      prompt: "US growth slowed even though Foci has a monopoly rare-disease drug. Besides this adherence campaign, what levers could reverse the slowdown?",
      buckets: [
        {
          name: "Find more patients",
          points: [
            "Physician education / diagnosis",
            "Screening programs",
            "Geographic expansion inside the US"
          ]
        },
        {
          name: "Keep patients on drug",
          points: [
            "Adherence and persistence support",
            "Nurse/hub services",
            "Copay assistance"
          ]
        },
        {
          name: "Price / mix (careful)",
          points: [
            "Support programs rather than list-price cuts",
            "Prepare for exclusivity expiry"
          ]
        }
      ]
    }
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
    ],
    math: [
      {
        kind: "market-sizing",
        background: "Great Burger (GB) is studying Heavenly Donuts (HD) as a possible doughnut play. Size the US doughnut market as spend per person × US population. HD’s current US sales are $700M. Implied share = HD sales / TAM. Round a ~23% share to 25% if you are close.",
        prompt: "Size the US doughnut market today and in five years. Use $10 of doughnut consumption per person per year today, $20 in five years, and a US population of 300 million. Heavenly Donuts currently has $700M of US sales — what is its implied share today (round to 25% if you are close)?",
        answer: "Today $3B (HD ~23%, round to 25%); year 5 $6B",
        steps: [
          "Today TAM = $10 x 300M = $3B.",
          "HD share = $700M / $3B ~ 23%; round to 25% for later math.",
          "Year-5 TAM = $20 x 300M = $6B."
        ],
        insight: "Category dollars double even before HD takes share."
      },
      {
        kind: "definite",
        background: "Today’s US doughnut TAM is $3B ($10 × 300M people). HD sales are $700M; round share to 25%. In five years spend per person doubles to $20 (TAM $6B). GB thinks HD can double its US share and grow stores 2.5× from 1,000. Year-5 HD sales = 2 × 25% × $6B. Sales per store = year-5 sales / 2,500 stores.",
        prompt: "Heavenly Donuts has $700M US sales today and 1,000 North American stores (use 1,000 of 1,020 total). US doughnut consumption is $10/person/year on 300M people, doubling to $20 in 5 years. GB thinks it can double HD's US share in 5 years and grow store count 2.5x. Round today's share to 25%. What sales per store does HD need in year 5?",
        answer: "$1.2M sales per store",
        steps: [
          "Today's US market = $10 x 300M = $3B; HD share 700/3000 ~ 23% → round to 25%.",
          "Year-5 market = $20 x 300M = $6B; HD sales = 25% x 2 x $6B = $3B.",
          "Stores = 1,000 x 2.5 = 2,500.",
          "Sales/store = 3B / 2,500 = $1.2M.",
          "That is less than 2x same-store growth while consumption doubles — plausible."
        ]
      },
      {
        kind: "definite",
        background: "GB may sell HD doughnuts inside GB restaurants. Incremental profit per store = HD contribution − cannibalized GB contribution. HD: 50,000 doughnuts × $2 × 60% margin. Cannibalized GB: 10% of 300,000 units × $3 × 50% margin.",
        prompt: "GB may sell HD doughnuts in GB stores: 50,000 doughnuts/store at $2, 60% margin, cannibalizing 10% of a GB store's 300,000 units at $3 and 50% margin. What is incremental profit per GB store?",
        answer: "$5,000 per store",
        steps: [
          "HD contribution = 50K x $2 x 60% = $60K.",
          "Cannibalized GB contribution = 300K x 10% x $3 x 50% = $45K.",
          "Incremental profit = 60 - 45 = $5K/store."
        ],
        insight: "Cross-selling looks modest once cannibalization of breakfast combos is counted."
      }
    ],
    creative: {
      prompt: "What potential synergies exist between Great Burger and Heavenly Donuts?",
      buckets: [
        {
          name: "Lower cost",
          points: [
            "Combine corporate SG&A",
            "Some food-cost scale (beverages, oil) though recipes differ",
            "GB's lease-negotiation skill on HD sites"
          ]
        },
        {
          name: "Higher revenue",
          points: [
            "Doughnuts in GB stores / selected GB items in HD",
            "GB's international playbook for HD",
            "Better site selection (GB sales/store above industry, HD below)",
            "Faster HD unit growth using GB's balance sheet"
          ]
        }
      ]
    }
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
    ],
    math: [
      {
        kind: "market-sizing",
        background: "Uranus Co. is sizing annual demand for luxury orbital-cruise tickets. Start from world population. ‘Live in a city,’ asthma, and age screens are already captured by the 5/8 eligibility factor — do not layer extra cuts. Count both ‘yes’ and ‘maybe’ in the 60% who want to go. Party size 2.3 tickets per interested person.",
        prompt: "Estimate annual luxury orbital-cruise tickets. World population 8B; 0.1% are millionaires; 5/8 of those meet health/age screens (asthma, age, and 'live in a city' are red herrings if offered); 60% of eligibles would want to go (count 'yes' and 'maybe'); 2.3 tickets per interested person (party size). What is annual ticket demand?",
        answer: "6.9 million tickets",
        steps: [
          "Millionaires = 8B x 0.1% = 8M.",
          "Eligible = 8M x 5/8 = 5M.",
          "Want to travel = 5M x 60% = 3M people.",
          "Tickets = 3M x 2.3 = 6.9M."
        ],
        insight: "Survey bias (US millionaires only, self-reported health) could overstate 6.9M."
      },
      {
        kind: "definite",
        background: "Uranus wants ~20% of the 6.9 million-ticket market and 2-year break-even. Capacity = 150 ships × 2 trips/ship/month × 12 × 400 tickets/trip. Build cost is $1.5B per ship. Contribution per customer = ($400K ticket + $100K other) − $400K variable = $100K. Annual fixed = fuel + maintenance + pads + insurance + payroll + marketing, using 3,600 trips/year. Break-even years ≈ total build / (annual contribution − annual fixed).",
        prompt: "Uranus wants 20% of the 6.9M-ticket market and 2-year break-even. Operations: 150 ships x 2 trips/ship/month x 12 months; 400 tickets/trip. Build cost $1.5B/ship. Annual: fuel 500k gallons/trip x 3,600 trips x $5/gallon; maintenance $100K/trip; 10 launch pads x $10M; insurance $450M + payroll $40M + marketing $50M. Revenue $400K ticket + $100K other per customer; variable cost $400K per customer. At capacity, can it hit 20% share, and what is break-even time?",
        answer: "Capacity 1.44M tickets (20.9% share); break-even ~1.7 years",
        steps: [
          "Trips = 2 x 12 x 150 = 3,600/year; tickets = 400 x 3,600 = 1.44M; 1.44/6.9 = 20.9%.",
          "Build = 1.5B x 150 = $225B.",
          "Annual fixed = 500k x 3,600 x $5 + 100K x 3,600 + 100M + 540M = 9B + 0.36B + 0.10B + 0.54B = $10B.",
          "Contribution/customer = 500K - 400K = $100K; annual contribution = 100K x 1.44M = $144B.",
          "Annual profit vs fixed = 144B - 10B = $134B; years = 225 / 134 ≈ 1.68."
        ],
        insight: "Capacity and 2-year BE both clear — the risk is whether 20% share and $400K tickets are real."
      }
    ],
    creative: {
      prompt: "Besides tickets, what could Uranus do to make the orbital cruise more profitable or less risky?",
      buckets: [
        {
          name: "Revenue",
          points: [
            "Onboard food, retail, activities",
            "Broadcast / media rights",
            "Partnerships with luxury brands"
          ]
        },
        {
          name: "Cost and capacity",
          points: [
            "Utilization of the 150-ship fleet",
            "Insurance and safety as a selling point",
            "Phased ship build vs 150 on day one"
          ]
        },
        {
          name: "Risk",
          points: [
            "Regulation and accidents",
            "IP / competitive response from SpaceX and MoonShine"
          ]
        }
      ]
    }
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
    ],
    math: [
      {
        kind: "definite",
        background: "Green Dreamz is a Colorado cannabis operator with 12 dispensaries: 3 medical-only, 4 rec-only, 5 dual. A ticket is the weighted basket of categories × prices. Dual stores: 90% of visits are recreational tickets, 10% medical. Round medical ticket to $80, rec to $55, and monthly company store revenue to $4M, then ×12. Add $2M/year wholesale trim to get $50M revenue. Pre-tax profit = $50M − (rent $10M + labor $12M + R&D $1M + SG&A $6M + COGS 24% of $50M + legal $1M).",
        prompt: "Green Dreamz mix and prices: medical basket 50% flower $120, 20% edibles $45, 15% concentrates $35, 10% vapes $40, 5% topicals $25; recreational 60% flower $75, 10% $20, 10% $20, 15% $30, 5% $20. Visits/store/month: 1,500 medical-only (3 stores), 9,500 rec-only (4 stores), 5,000 dual (5 stores) of which 90% are rec. Round medical ticket to $80 and rec to $55, monthly store revenue to $4M. Add $2M/year wholesale trim. Costs: rent $10M, labor $12M, R&D $1M, SG&A $6M, COGS 24% of $50M revenue, legal $1M. What is pre-tax profit and margin?",
        answer: "$8M pre-tax profit; 16% margin",
        steps: [
          "Medical ticket = 0.5x120 + 0.2x45 + 0.15x35 + 0.1x40 + 0.05x25 = $79.50 ~ $80.",
          "Rec ticket = 0.6x75 + 0.1x20 + 0.1x20 + 0.15x30 + 0.05x20 = $54.50 ~ $55.",
          "Monthly = 80x1500x3 + 55x9500x4 + (0.9x5000x55 + 0.1x5000x80)x5 = $3.8875M ~ $4M; x12 = $48M + $2M trim = $50M.",
          "COGS = 24% x 50 = $12M; total cost 10+12+1+6+12+1 = $42M.",
          "Profit = $8M; margin 16%."
        ]
      },
      {
        kind: "definite",
        background: "Treetops is an acquisition target. Green Dreamz revenue is $50M. Treetops does 30% of that at an 18% profit margin. Growing perpetuity: bid = profit / (15% − 6%).",
        prompt: "Treetops does 30% of Green Dreamz revenue at an 18% profit margin. Discount rate 15%, perpetual growth 6%. What NPV / bid is implied?",
        answer: "$30M",
        steps: [
          "Treetops revenue = 50M x 30% = $15M.",
          "Profit = 15M x 18% = $2.7M.",
          "NPV = 2.7M / (0.15 - 0.06) = $30M."
        ],
        insight: "Treetops' higher margin likely comes from in-house infused products."
      }
    ],
    creative: {
      prompt: "Colorado is saturated and consumers still buy on price. How can Green Dreamz grow revenue? Use existing vs new customers and existing vs new products.",
      buckets: [
        {
          name: "Existing customers, existing products",
          points: [
            "Loyalty, pack sizes, happy-hour pricing, bundles"
          ]
        },
        {
          name: "Existing customers, new products",
          points: [
            "Merch, accessories, in-house infused, new strains, cultivation tours, cooking classes"
          ]
        },
        {
          name: "New customers, existing products",
          points: [
            "Marketing, tourism partnerships, new Colorado stores, online pre-order"
          ]
        },
        {
          name: "New customers, new products",
          points: [
            "M&A of infused/dispensary/cultivation, CBD-only, licensing, franchising, consulting"
          ]
        }
      ]
    }
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
    ],
    math: [
      {
        kind: "definite",
        background: "Jimmy is comparing two 3-year consulting offers. Year 0 is the signing bonus paid now. Years 1–3 are salary + annual bonus (+ Firm A’s year-3 tuition reimbursement). The question already maps those nominal totals through a simplified 10% DCF to PV pieces: A 30/110/120/180 and B 40/120/130/140. NPV is the sum of those PV pieces. Do not rebuild the discount factors unless you want a cross-check.",
        prompt: "Jimmy will stay 3 years. Cash by year (Year 0 = signing, then years 1-3 of work), $000s. Firm A: signing 30; salary 0/91/114/126; annual bonus 0/30/30/30; tuition reimbursement 0/0/0/78. Firm B: signing 40; salary 0/97/121/147; annual bonus 0/35/35/35; no tuition. A simplified 10% DCF maps A's totals 30/121/144/234 to 30/110/120/180 and B's 40/132/156/182 to 40/120/130/140. What is each offer's NPV?",
        answer: "Firm A $440K; Firm B $430K",
        steps: [
          "Firm A totals: Y0 30; Y1 91+30=121; Y2 114+30=144; Y3 126+30+78=234.",
          "Firm B totals: Y0 40; Y1 97+35=132; Y2 121+35=156; Y3 147+35=182.",
          "Simplified PV: A 30+110+120+180 = 440; B 40+120+130+140 = 430."
        ],
        insight: "A wins on cash NPV by $10K, almost entirely from year-3 tuition."
      },
      {
        kind: "definite",
        background: "Firm A’s cash NPV was $10K higher than Firm B’s. Year-4 expected exit salary is the probability-weighted salary in each bucket. The $35K expected-salary gap, discounted, is given as about $25K PV (35 / 1.4). If $25K > $10K, B wins once exits are counted.",
        prompt: "Year-4 exit salary distributions: Firm A — $150k 20%, $175k 40%, $200k 25%, $225k 10%, $250k 5%. Firm B — $150k 0%, $175k 10%, $200k 20%, $225k 50%, $250k 20%. The cash NPV gap was $10K in A's favor. Using expected exit salary, is the $35K year-4 gap enough to flip the decision if its PV is about $25K (35 / 1.4)?",
        answer: "Yes — Firm B's exit EV is $220K vs A's $185K; ~$25K PV > $10K gap",
        steps: [
          "A EV = 150*0.2 + 175*0.4 + 200*0.25 + 225*0.1 + 250*0.05 = $185K.",
          "B EV = 175*0.1 + 200*0.2 + 225*0.5 + 250*0.2 = $220K.",
          "Gap $35K; PV ~ $25K exceeds the $10K offer-NPV gap, so B wins once exits are counted."
        ]
      }
    ],
    creative: {
      prompt: "Besides discounted cash, what should Jimmy consider before accepting?",
      buckets: [
        {
          name: "Financial (beyond the offer sheet)",
          points: [
            "Exit opportunities and year-4 pay",
            "Firm financial stability",
            "Bonus variability"
          ]
        },
        {
          name: "Non-financial",
          points: [
            "Prestige / brand of Firm B vs second-tier A",
            "Staffing model, travel, location",
            "Culture and training",
            "Type of work"
          ]
        }
      ]
    }
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
    ],
    math: [
      {
        kind: "market-sizing",
        background: "MordMotor is sizing the US retail EV market this year. Households replace a car every 5 years, so 20% buy a new car this year. Of those, 20% choose EV. Split EV buyers 75% economy at $40K and 25% luxury at $100K. Dollar TAM = units × price, summed.",
        prompt: "Size the US retail EV market this year. Sample method: 100 million households; cars replaced every 5 years so 20% buy a new car this year; 20% of those choose EV over ICE; of EV buyers, 75% economy at $40K and 25% luxury at $100K. What is dollar TAM?",
        answer: "~$220B",
        steps: [
          "100M households x 20% = 20M new cars/year.",
          "20% EV = 4M EVs.",
          "3M x $40K + 1M x $100K = $120B + $100B = $220B."
        ],
        insight: "The US EV pocket is hundreds of billions even at a 20% take rate."
      },
      {
        kind: "market-sizing",
        background: "Cross-check TAM from population instead of households. US 320M people; 25% prefer luxury vehicles. People / 2.5 = households. Then 20% of households buy a car this year and ~20% of those buy EV. Luxury EV $100K, economy $40K.",
        prompt: "Cross-check the US EV market from population: US 320M people; 25% prefer luxury vehicles (80M) vs 75% economy (240M); 2.5 people per household; 20% of households buy a car this year; ~20% of those buy EV; luxury EV $100K, economy $40K. What is dollar TAM?",
        answer: "~$270B",
        steps: [
          "Luxury HH = 80M / 2.5 = 32M; economy HH = 96M.",
          "New cars = 32M x 20% = 6.4M luxury + 19.2M economy.",
          "EVs = 20% → 1.2M luxury + 3.8M economy.",
          "1.2M x $100K + 3.8M x $40K = $120B + $152B ≈ $270B."
        ],
        insight: "Mix (luxury vs economy) swings dollar TAM by ~$50B versus a household-first build."
      },
      {
        kind: "definite",
        background: "MordMotor can fund only one EV. Unit cost = raw materials + labor. Yearly profit = (price − unit cost) × units − annual distribution − marketing − SG&A. Do not subtract R&D from yearly profit first — it is treated as a sunk (or allocated) recovery in the break-even years. Own-R&D break-even = that model’s R&D / yearly profit. Combined $300M R&D allocated to whichever model is funded: $300M / yearly profit.",
        prompt: "MordMotor can fund only one EV. Model X: 10,000 units at $160K; unit cost raw materials $115K + labor $10K; annual distribution $50M, marketing $40M, SG&A $10M; R&D already spent $250M. Model Y: 30,000 units at $50K; unit cost $30K + $10K; distribution $60M, marketing $30M, SG&A $10M; R&D already spent $50M. Yearly profit = unit profit x units - annual fixed (exclude sunk R&D first). Then break-even years using own R&D and using combined $300M R&D. Which model?",
        answer: "X: $250M/year, BE 1.0 yr own R&D / 1.2 yr with $300M; Y: $200M/year, BE 0.25 yr / 1.5 yr — X wins if both R&D counted",
        steps: [
          "X unit profit = 160 - 125 = $35K; contribution 10K x 35K = $350M; fixed 50+40+10 = $100M; yearly profit $250M.",
          "Y unit profit = 50 - 40 = $10K; contribution 30K x 10K = $300M; fixed 60+30+10 = $100M; yearly profit $200M.",
          "Own-R&D BE: X 250/250 = 1.0 year; Y 50/200 = 0.25 year.",
          "Both-R&D $300M: X 300/250 = 1.2 years; Y 300/200 = 1.5 years."
        ],
        insight: "Y looks safer on volume; X breaks even faster once the unchosen model's R&D is treated as a joint sunk cost."
      }
    ],
    creative: {
      prompt: "What should MordMotor consider before entering EVs, besides which of two models to build?",
      buckets: [
        {
          name: "Financial",
          points: [
            "Factory and training capex",
            "Liquidity / loans",
            "Resale values and price points"
          ]
        },
        {
          name: "Market and consumer",
          points: [
            "Crowded vs open segments",
            "Differentiation (range, autonomy)",
            "Charging access and ESG"
          ]
        },
        {
          name: "External",
          points: [
            "Regulation and safety standards",
            "ICE vs EV mix as suburbs grow"
          ]
        }
      ]
    }
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
    ],
    math: [
      {
        kind: "definite",
        background: "C&C is a tutoring/mentorship shop. 14 mentors × 40 hours/week serve 378 students. Per mentor, add 1:1 time + lesson planning + classroom time; whatever is left of 40 hours is the weekly HQ report. Removing the report frees that leftover for extra 1:1 at 3 students per hour. Additional students = leftover hours × 3 × 14 mentors.",
        prompt: "C&C has 14 mentors serving 378 students per week. Mentors work 40 hours/week. Per mentor: 20 minutes of 1:1 time per student; 6 lessons x 1.25 hours planning; 30 minutes classroom instruction per student; leftover time is a weekly HQ report. If the HQ report is removed, extra 1:1 time can serve 3 students per hour. How many additional students can be served per week?",
        answer: "420 additional students",
        steps: [
          "Students per mentor = 378 / 14 = 27.",
          "1:1 time = 20 min x 27 = 9 hours; planning = 6 x 1.25 = 7.5 hours; classroom = 30 min x 27 = 13.5 hours.",
          "HQ report = 40 - (9 + 7.5 + 13.5) = 10 hours.",
          "Extra 1:1 students per mentor = 10 hours x 3 students/hour = 30.",
          "Across 14 mentors = 420."
        ],
        insight: "Admin, not ice or vans, is the binding constraint on mentorship — the highest-demand program."
      }
    ],
    creative: {
      prompt: "1:1 mentoring has the most unmet demand. How might C&C increase mentorship capacity?",
      buckets: [
        {
          name: "Staffing",
          points: [
            "Hire or volunteer more mentors",
            "Incentives / overtime on existing mentors",
            "2:1 sessions"
          ]
        },
        {
          name: "Schedule",
          points: [
            "More days of week",
            "Replace lower-impact sessions (classroom/fitness) with mentoring"
          ]
        },
        {
          name: "External support",
          points: [
            "Donor campaign",
            "Near-peer (older students mentor younger)",
            "Zoom mentors from other chapters",
            "University partners"
          ]
        }
      ]
    }
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
    ],
    math: [
      {
        kind: "definite",
        background: "Center Stage is choosing which show to emphasize. Profit margin per performance = (revenue − cost) / revenue. Compare the three titles on that margin, not on raw profit.",
        prompt: "Projected revenue and cost per performance: Beauty and the Beast $60,000 / $45,000; To Kill a Mockingbird $30,000 / $24,000; Steve Live $35,000 / $30,000. Which show has the highest profit margin per performance?",
        answer: "Beauty and the Beast at 25%",
        steps: [
          "Beauty: (60-45)/60 = 25%.",
          "Mockingbird: (30-24)/30 = 20%.",
          "Steve Live: (35-30)/35 ≈ 14%."
        ]
      },
      {
        kind: "definite",
        background: "Beauty and the Beast has 500 seats. Any seat not sold at the list price dumps at $50 starting 2 hours before curtain. Expected ticket revenue at a list price = (full-price take-up × 500 × list) + (unsold seats × $50).",
        prompt: "Beauty and the Beast: 500 seats. Unsold seats dump at $50 starting 2 hours before curtain. Survey full-price take-up: $100 → 80% sell at full price; $150 → 60%; $200 → 40%. Which list price maximizes expected ticket revenue?",
        answer: "$150 and $200 tie at $55,000 (both beat $100 at $45,000)",
        steps: [
          "$100: 400 x $100 + 100 x $50 = $45,000.",
          "$150: 300 x $150 + 200 x $50 = $55,000.",
          "$200: 200 x $200 + 300 x $50 = $55,000."
        ],
        insight: "Price is a tie on revenue — pick $200 vs $150 on brand, reviews, and marketing cost to lift WTP."
      },
      {
        kind: "definite",
        background: "They want 50% willingness-to-pay at a $200 list (up from 40%). Non-ticket revenue is $5,000 per performance. Current Beauty costs are $45,000. They must keep a 25% profit margin, so allowable cost = 75% of total revenue. Max extra marketing = allowable cost − $45,000.",
        prompt: "The team wants 50% WTP at $200 (up from 40%). Non-ticket revenue is $5,000 per performance. Beauty costs are currently $45,000. They must keep a 25% profit margin. What is the maximum extra marketing spend per performance?",
        answer: "$5,625",
        steps: [
          "New ticket revenue = 250 x $200 + 250 x $50 = $62,500.",
          "Total revenue = 62,500 + 5,000 = $67,500.",
          "25% margin → costs = 75% x 67,500 = $50,625.",
          "Max extra marketing = 50,625 - 45,000 = $5,625."
        ]
      }
    ],
    creative: {
      prompt: "How should the producing team spend extra money to raise willingness to pay to $200?",
      buckets: [
        {
          name: "Production",
          points: [
            "Celebrity cameos",
            "Revamp dance numbers",
            "Modernize moments that create buzz",
            "Awards angle (hard in a 10-week run)"
          ]
        },
        {
          name: "Media marketing",
          points: [
            "Morning-show appearances",
            "Social/influencer",
            "Tourist-targeted ads",
            "Partnerships with hotels"
          ]
        }
      ]
    }
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
    ],
    math: [
      {
        kind: "definite",
        background: "BackupCo is valuing CloudCo. 1 TB = 1,000 GB. Monthly subscription profit = GB in the tier × $/GB/month, summed across three tiers. Annual profit = monthly × 12. Standalone value is a growing perpetuity: annual profit / (13% − 3%).",
        prompt: "Value CloudCo with a DCF. 2019 subscription profit (all-in): Tier 1 10 TB at $10/GB/month; Tier 2 25 TB at $8/GB/month; Tier 3 40 TB at $5/GB/month. 1 TB = 1,000 GB. Hurdle rate 13%, expected growth 3%, treat profit as a growing perpetuity. What is standalone value?",
        answer: "$60M",
        steps: [
          "GB: 10k, 25k, 40k.",
          "Monthly profit = 10k x $10 + 25k x $8 + 40k x $5 = 100k + 200k + 200k = $500K.",
          "Annual = $6.0M.",
          "Value = 6M / (13% - 3%) = $60M."
        ]
      },
      {
        kind: "definite",
        background: "Standalone CloudCo is $60M. A $1/GB/month price-up on all 75,000 GB is the revenue synergy. Cost synergies are 10% + 15% + 5% = 30% of that annual revenue synergy. Combined annual profit = $6M + revenue synergy + cost synergy. Discount combined profit at 10% (the same 13% − 3%). That value is the most BackupCo should pay.",
        prompt: "Standalone CloudCo is $60M. Synergies: +$1/GB/month on all 2019 GB (10k + 25k + 40k). Cost synergies are 10% (SG&A) + 15% (headcount) + 5% (R&D) of the annual revenue synergy. Combined profit is current $6M plus total yearly synergy. Discount combined profit at 10% (13%-3%). What is the max BackupCo should pay?",
        answer: "$71.7M",
        steps: [
          "Revenue synergy/month = $1 x 75,000 GB = $75K; x12 = $900K/year.",
          "Cost synergy = 30% x 900K = $270K.",
          "Total yearly profit increase = $1.17M; combined profit = $7.17M.",
          "Value = 7.17M / 0.10 = $71.7M."
        ]
      }
    ],
    creative: {
      prompt: "How might you design the post-merger integration structure for BackupCo's acquisition of CloudCo, and what risks worry you?",
      buckets: [
        {
          name: "Integration structure",
          points: [
            "Executive steering committee",
            "IMO/PMO",
            "Product and synergy-management offices",
            "Finance/HR, engineering, sales"
          ]
        },
        {
          name: "Risks",
          points: [
            "Texas vs Ukraine vs California culture and talent",
            "Overstated synergies",
            "Lost customers in the cutover",
            "Regulation of backup/cloud data"
          ]
        }
      ]
    }
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
    ],
    math: [
      {
        kind: "definite",
        background: "Lights Camera Action (LCA) is choosing its next film. LCA’s take is $1 per international ticket and $1.50 per domestic ticket (not the full box-office price). A theater-month of revenue at 100% fill = take × shows/day × seats × 30 days. Then apply the title’s fill rate and multiply by theater counts. Profit = revenue − production cost. ROI = profit / production cost. A ‘hit’ is 50% ROI. Recommend on the board’s hit definition if more than one title is profitable.",
        prompt: "LCA takes $1 per international ticket and $1.50 per domestic ticket. International theaters: 5 shows/day x 400 seats; domestic: 10 shows/day x 200 seats. Use 30-day runs. Theater counts by genre (international / domestic): comedy 1,000 / 1,500; drama 500 / 1,000; action 1,500 / 2,000; animation 750 / 1,000. Fill rates and production costs: Project Huntington (comedy) 80%, $50M; Life at Ivy (drama) 60%, $100M; Case Wars (action) 75%, $75M; Paws at Pav (animation) 80%, $90M. Which title has the highest profit and which the highest ROI? A 'hit' is 50% ROI.",
        answer: "Action profit $127.5M; comedy ROI 2.12x — recommend Project Huntington",
        steps: [
          "Monthly earnings/theater: int'l $1 x 5 x 400 x 30 = $60K; domestic $1.50 x 10 x 200 x 30 = $90K.",
          "Comedy rev = 0.8x1000x60K + 0.8x1500x90K = $48M + $108M = $156M; profit 156-50 = $106M; ROI 2.12.",
          "Drama rev $72M; profit -$28M; ROI -0.28.",
          "Action rev $202.5M; profit $127.5M; ROI 1.70.",
          "Animation rev $108M; profit $18M; ROI 0.20.",
          "Comedy and action both clear 50% ROI; comedy has the higher ROI the board wants."
        ]
      }
    ],
    creative: {
      prompt: "Other than the profitability math, what strategic decisions should LCA consider for the next movie's success?",
      buckets: [
        {
          name: "Monetization",
          points: [
            "Merchandise",
            "Sequel option",
            "Streaming/TV windows",
            "How reviews affect later-week fill"
          ]
        },
        {
          name: "Content / marketing",
          points: [
            "Casting and crew",
            "Theme vs pop culture",
            "Channel mix for the P&A budget",
            "Avoid release-date clashes"
          ]
        }
      ]
    }
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
    ],
    math: [
      {
        kind: "definite",
        background: "The IOC is deciding whether to proceed with the Games or cancel because of a virus. If they proceed, they collect the four full revenue lines. If they cancel: keep half of the 75% of sponsorship already signed; keep 85% of tickets already sold (non-refundable); keep all licensing; keep 40% of TV. Compare proceed vs cancel totals.",
        prompt: "IOC revenues if the Games proceed: sponsorship $2.1B, tickets $1.8B, licensing $0.19B, TV $3.9B. If cancelled: 75% of sponsorship contracts are already signed and the IOC keeps half of those signed funds; 85% of tickets are already sold and are non-refundable; licensing is kept in full; TV contracts let the IOC keep 40%. What is proceed vs cancel revenue (round to $8B and $4B)?",
        answer: "Proceed ~$8.0B; cancel ~$4.1B",
        steps: [
          "Proceed = 2.1 + 1.8 + 0.19 + 3.9 = $7.99B ~ $8B.",
          "Cancel sponsorship = 2.1 x 75% x 50% = $0.7875B.",
          "Cancel tickets = 1.8 x 85% = $1.53B.",
          "Licensing $0.19B; TV 3.9 x 40% = $1.56B.",
          "Cancel total = 0.7875 + 1.53 + 0.19 + 1.56 = $4.0675B ~ $4B."
        ]
      },
      {
        kind: "definite",
        background: "Treat $8B as the payoff if the virus does not arrive (proceed) and $4B as the payoff if it does (cancel-equivalent loss of the other $4B). Let x be the probability the virus reaches the host country. The IOC is indifferent when 4x = 8(1 − x). Solve for x.",
        prompt: "Treat $4B as the expected loss if the virus arrives (cancel-equivalent) and $8B as the expected gain if it does not. At what probability x that the virus reaches the host country is the IOC indifferent between proceeding and the $4B cancel case, using 4x = 8(1-x)?",
        answer: "66%",
        steps: [
          "4B x = 8B (1 - x).",
          "4x = 8 - 8x → 12x = 8 → x = 2/3 ≈ 66%."
        ],
        insight: "Indifference is a high bar; human and host-country costs are not in this equation."
      }
    ],
    creative: {
      prompt: "What risks does the IOC face in deciding whether to proceed or cancel, beyond the revenue math?",
      buckets: [
        {
          name: "Internal to IOC",
          points: [
            "Reputational risk",
            "Relationship with this host and future hosts",
            "Precedent vs wartime-only cancellations"
          ]
        },
        {
          name: "External",
          points: [
            "Lives lost",
            "Athlete health and fairness",
            "Fan backlash",
            "Host-country healthcare and economic shock"
          ]
        }
      ]
    }
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
    ],
    creative: {
      prompt: "Mercado Reforma wants a customer-centered B2C grocery entry in LatAm, not a classic profit tree. How would you structure the project, and what scrappy tests would you run?",
      buckets: [
        {
          name: "Research",
          points: [
            "Ethnography / observation of city shoppers",
            "Focus groups",
            "Stakeholder interviews",
            "Persona work (e.g. millennials who need on-the-go and dietary-specific options)"
          ]
        },
        {
          name: "Synthesis and design",
          points: [
            "Journey maps",
            "Service blueprints",
            "Collaborative insight generation with the client"
          ]
        },
        {
          name: "Co-create and test",
          points: [
            "Workshops with users",
            "Low-cost prototypes, pickup lockers, bundled ingredients",
            "A/B and pilot-market tests before a full rollout"
          ]
        }
      ]
    }
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
    ],
    math: [
      {
        kind: "definite",
        background: "Megan Black Balayage (MBB) is a one-stylist independent salon. 200 clients visit quarterly (800 visits/year). Service margin is 60% of the $150 ticket. Product attach is on a share of those 800 visits. Rent is $500/month. Staying independent is a no-growth perpetuity at a 5% hurdle: NPV = annual net income / 0.05.",
        prompt: "Megan Black Balayage: 200 clients, quarterly visits, $150 average, 60% service margin. Shampoo attaches on 25% of visits at $60 and 50% margin; conditioner on 20% of visits at $55 and 50% margin. Rent $500/month. Perpetuity at 5% hurdle. What is NPV of staying independent?",
        answer: "~$1.53M",
        steps: [
          "Service profit = 200 x 4 x $150 x 60% = $72,000.",
          "Shampoo = 800 x 25% x $60 x 50% = $6,000; conditioner = 800 x 20% x $55 x 50% = $4,400.",
          "Rent = $6,000/year. NI = 72 + 10.4 - 6 = $76,400.",
          "NPV = 76,400 / 0.05 = $1,528,000."
        ]
      },
      {
        kind: "definite",
        background: "Salon Deluxe is a 4-stylist shop Megan could buy. Appointments are 2.5 hours. Working day is 10am–7pm minus a 1-hour break = 8 hours, 250 days/year. Demand is 6,000 requested appointments, so the shop is capacity-constrained: use capacity, not demand. Owner keeps 35% of the $150 ticket (stylists take 65%). Rent $4,000/month. Discount rate 10%. This NPV is as-is operations, before subtracting a purchase price. Compare it with independent MBB at ~$1.53M.",
        prompt: "Salon Deluxe: 4 stylists, 5 days/week, 10am-7pm with a 1-hour break (8 working hours), 2.5-hour appointments, 250 days/year. Requested appointments 6,000 (so occupancy is capacity-constrained). Spend $150/appointment; stylists take 65% so owner keeps 35%. Rent $4,000/month. Product profit $10,000/year. Discount rate 10%. What is NPV of owning Deluxe as-is (no purchase-price subtraction yet)?",
        answer: "$1.3M",
        steps: [
          "Capacity = (8 / 2.5) x 250 x 4 = 3.2 x 250 x 4 = 3,200 appointments (demand 6,000 → 100% occupancy).",
          "Service profit = 3,200 x $150 x 35% - 48,000 rent = $168,000 - $48,000 = $120,000.",
          "Plus $10K product = $130,000.",
          "NPV = 130,000 / 10% = $1.3M, below independent MBB."
        ],
        insight: "As-is Deluxe is worth less than Megan's own chair; unused storage rooms are the unlock."
      },
      {
        kind: "definite",
        background: "A dry/style station raises each stylist’s capacity 37.5% for $100K. Start from $168K service profit (3,200 × $150 × 35%). New service = $168K × 1.375. Then add $10K product, subtract $10K interest and $48K rent, capitalize the cash at 10%, and subtract the $100K project cost. Compare with independent MBB at ~$1.53M.",
        prompt: "Converting unused storage to a dry/style station raises each stylist's capacity 37.5% for $100K (renovation + assistant). Start from $168K service revenue (3,200 x $150 x 35%), add $10K product, subtract $10K interest and $48K rent, capitalize at 10%, then subtract the $100K. What is the new NPV?",
        answer: "~$1.73M",
        steps: [
          "New service = 168K x 1.375 = $231K.",
          "Cash = 231 + 10 - 10 - 48 = $183K.",
          "PV = 183K / 0.10 = $1.83M; minus $100K = $1.73M, now above independent MBB."
        ]
      }
    ],
    creative: {
      prompt: "What levers could make Salon Deluxe a more attractive business, and which should move the NPV most?",
      buckets: [
        {
          name: "Service revenue",
          points: [
            "Increase capacity (unused rooms)",
            "Loyalty / frequency",
            "Price (hard in a competitive market)",
            "A second location"
          ]
        },
        {
          name: "Service cost",
          points: [
            "Renegotiate rent (often locked)",
            "Vendor COGS",
            "Stylist revenue-share"
          ]
        },
        {
          name: "Product and financing",
          points: [
            "Bundles and extra SKUs",
            "Refinance / pay down debt"
          ]
        }
      ]
    }
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
    ],
    math: [
      {
        kind: "definite",
        background: "Lizard Insurance may sell TechSize, which has 15% of a $5.5B insurance-software market. EBITDA is 25% of revenue. Use only insurance-software comps for the multiple (Fill-Your-Forms 5× and Insurance App Co 5×). Drop Tech Toy Co — different industry, 13× is not comparable. Value = 5 × TechSize EBITDA.",
        prompt: "TechSize has 15% of a $5.5B 2020 insurance-software market. EBITDA is 25% of revenue. 2020 deals: Fill-Your-Forms $25M EBITDA sold for $125M; Tech Toy Co $1.5B EBITDA sold for $20B (not comparable); Insurance App Co $300M EBITDA sold for $1.5B. What is a reasonable sale value for TechSize?",
        answer: "~$1.03B at 5x EBITDA",
        steps: [
          "Revenue = 15% x $5.5B = $825M.",
          "EBITDA = 25% x 825M = $206M.",
          "Relevant multiples: 125/25 = 5x and 1,500/300 = 5x (drop toys).",
          "Value = 5 x 206M = $1.03B."
        ],
        insight: "A software asset that does not fit DTC auto insurance is still a billion-dollar sale."
      }
    ],
    creative: {
      prompt: "Lizard Insurance acquired TechSize with MediumSure and has no software DNA. What should it consider doing with TechSize?",
      buckets: [
        {
          name: "Keep",
          points: [
            "Hold as-is",
            "Invest to defend 15% share",
            "Bolt-on acquisitions",
            "Limited cross-sell into auto insurance"
          ]
        },
        {
          name: "Sell / partner",
          points: [
            "Full sale at ~5x EBITDA",
            "Spin / partial sale",
            "License IP or JV with a software buyer"
          ]
        },
        {
          name: "Fit test",
          points: [
            "Capital needed to stay competitive",
            "Management distraction from DTC insurance"
          ]
        }
      ]
    }
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
    ],
    math: [
      {
        kind: "definite",
        background: "Amy is the Met’s HR lead. 2019 turnover cost for a group = headcount × turnover rate × cost per leaver. Compare the $2.09M total with 2018’s $1.5M and see which group is the bulk of the bill.",
        prompt: "2019 Met turnover: Artistic 500 staff, 2.2% turnover, $30K cost each; Executive 20, 10%, $95K; Administrative 1,000, 5.7%, $10K; Security 1,200, 16.67% (1/6), $5K. 2018 turnover cost was $1.5M. What did 2019 turnover cost, and where should Amy focus?",
        answer: "~$2.09M (up ~39% vs 2018); security is $1.0M of it",
        steps: [
          "Artistic: 500 x 2.2% = 11 x $30K = $330K.",
          "Executive: 2 x $95K = $190K.",
          "Admin: 1,000 x 5.7% = 57 x $10K = $570K.",
          "Security: 1,200 x (1/6) = 200 x $5K = $1,000K.",
          "Total $2.09M vs $1.5M."
        ]
      },
      {
        kind: "definite",
        background: "The museum has 250 galleries, open 10am–6pm (8 hours), 350 days/year — but you can solve it as a daily staffing model. Open: 2 guards per gallery. Closed (the other 16 hours): 1 guard per 4 galleries. Each staffer can work 5 hours/day on average (35-hour week). People needed = guard-hours / 5. Compare with 1,200 security on staff today.",
        prompt: "Is 1,200 security staff optimal? 250 galleries; museum open 10am-6pm, 350 days/year (use a daily model). Open: 2 guards per gallery; closed: 1 guard per 4 galleries. Staff may work 35 hours/week (5 hours/day average). How many security staff are needed?",
        answer: "1,000 — about 200 too many today",
        steps: [
          "Open: 2 x 250 = 500 posts x 8 hours = 4,000 guard-hours/day → 4,000 / 5 = 800 people.",
          "Closed: 0.25 x 250 = 62.5 posts x 16 hours = 1,000 guard-hours/day → 1,000 / 5 = 200 people.",
          "Total 1,000 vs 1,200 on staff."
        ]
      }
    ],
    creative: {
      prompt: "Amy wants to cut HR cost in security. Brainstorm ideas along the hiring pipeline.",
      buckets: [
        {
          name: "Sourcing",
          points: [
            "Cut ads that do not yield applicants",
            "Tighter screening criteria",
            "Employee referrals"
          ]
        },
        {
          name: "Interviewing / onboarding",
          points: [
            "Shared ATS",
            "Phone screens",
            "Community-college partnerships",
            "Online training"
          ]
        },
        {
          name: "Retention / scheduling",
          points: [
            "Fewer guards on slow days",
            "Limit overtime and severance",
            "Low-cost perks (museum pass, family day)",
            "Pathways into salaried museum jobs"
          ]
        }
      ]
    }
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
    ],
    math: [
      {
        kind: "definite",
        background: "A club is valuing a Lionel Messi transfer. Goal contributions = goals + assists. Older elite forwards (Ronaldo, Aubameyang, Costa) cluster near 2× transfer fee / contributions; young stars (Neymar, Mbappe) near 10×. Messi is 35 with 55 contributions — use ~2.6×, not the young-star multiple.",
        prompt: "Value Messi off comparable forwards' transfer-fee / goal-contribution multiples: Ronaldo 117/62 ~ 2x (age 33); Neymar 225/24 ~ 10x (25); Mbappe 310/31 ~ 10x (19); Aubameyang 56/28 ~ 2x (29); Costa 62/28 ~ 2x (27). Messi is 35 with 55 goal contributions. Using ~2.6x for an older superstar, what transfer fee is implied?",
        answer: "$143M",
        steps: [
          "Older elite forwards cluster near 2x; young stars near 10x.",
          "A conservative ~2.6 x 55 ≈ $143M."
        ]
      },
      {
        kind: "definite",
        background: "Current club: 60,000 seats, 83.33% full (5/6), $50 tickets, 25 home games; $10 F&B per fan; $150M TV; $50M sponsors; 1 million jerseys at $100 with 25% club margin ($25). Current revenue is $300M. With Messi: sellouts, +$15 ticket, TV +10%, sponsors double, 2 million Messi jerseys that cannibalize 50% of the old 1 million. Salary $100M + 10% agent = $110M extra cost. Transfer $143M. Incremental annual profit = new revenue − $300M − $110M. 5-year payback if $143M / incremental profit < 5.",
        prompt: "Current club: 60,000 seats, 83.33% full, $50 tickets, 25 home games; $10 F&B per fan; $150M TV; $50M sponsors; 1M jerseys at $100 with 25% club margin. With Messi: sellouts, +$15 ticket, TV +10%, sponsors double, 2M Messi jerseys/year that cannibalize 50% of current jersey sales (price/margin unchanged). Salary $100M + 10% agent fee. Transfer $143M. Current revenue is $300M. What is incremental annual profit, and is 5-year payback met?",
        answer: "~$30M incremental profit/year; payback ~4.8 years — yes",
        steps: [
          "Current: tickets 60k x 5/6 x $50 x 25 = $62.5M; F&B $12.5M; TV+sponsor $200M; jerseys 1M x $25 = $25M; total $300M.",
          "Future: tickets 60k x $65 x 25 = $97.5M; F&B 60k x $10 x 25 = $15M; TV $165M; sponsors $100M; jerseys 2M x $25 + remaining 0.5M x $25 = $50M + $12.5M = $62.5M; total $440M.",
          "Delta revenue $140M; extra cost $110M; incremental profit $30M.",
          "143 / 30 ≈ 4.8 years < 5."
        ]
      }
    ],
    creative: {
      prompt: "Besides the transfer math, what should the club weigh on a Messi deal?",
      buckets: [
        {
          name: "Player",
          points: [
            "Age-35 output risk",
            "Will he actually come?",
            "Cheaper elite alternatives"
          ]
        },
        {
          name: "Commercial",
          points: [
            "Shirt, tickets, TV, sponsors",
            "Language / league fit"
          ]
        },
        {
          name: "Risk and rivals",
          points: [
            "Injury",
            "Wage inflation / arms race",
            "He asks to leave in a few years"
          ]
        }
      ]
    }
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
    ],
    math: [
      {
        kind: "definite",
        background: "A rubber plant upgrade can produce 10 million pounds per month. The monthly P&L is already at that planned volume. Operating profit = revenue − COGS − labor − overhead − transport. Simple payback = $12M capex / monthly operating profit.",
        prompt: "The upgraded plant can produce 10 million pounds of rubber per month. A monthly P&L at planned volume: revenue $100M; COGS (resin etc.) $75M; labor $8M; overhead $10M; transport $6M. Capex is $12M. What is monthly operating profit, margin, and simple payback?",
        answer: "$1M/month (1% margin); 12-month payback",
        steps: [
          "OP = 100 - 75 - 8 - 10 - 6 = $1M.",
          "Margin = 1%.",
          "Payback = 12M / 1M = 12 months."
        ],
        insight: "Payback is fast, but 1% commodity margins die if rubber or resin prices move."
      }
    ],
    creative: {
      prompt: "The government cares about ROI, jobs, and development, and terrorism closed this plant before. What else should it consider?",
      buckets: [
        {
          name: "Economic development",
          points: [
            "Local wages supporting other priorities",
            "Political narrative / reelection",
            "Jobs vs thin profit"
          ]
        },
        {
          name: "Risks",
          points: [
            "Terrorism targeting the plant",
            "Rubber price collapse",
            "Resin scarcity",
            "Train-track failures",
            "Local opposition"
          ]
        },
        {
          name: "Operations",
          points: [
            "Train bottleneck (only two trains/day)",
            "Plant is at ~50% of what better logistics could do",
            "Hedge resin"
          ]
        }
      ]
    }
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
    ],
    math: [
      {
        kind: "definite",
        background: "PubU runs a diesel campus bus fleet. Use 100 route-miles as the network (the 8×6 / 8×3 / 4×3 / 5×4 route list is how you get to ~104, then round to 100). Each mile of route is served 4 times/hour × 15 hours/day × 7 days × 50 weeks. Gallons = miles / 2 mpg. Fuel $ = gallons × $6. Add 25 buses × $20,000 maintenance. CO2 = gallons × 20 lbs.",
        prompt: "PubU diesel buses: exhibit routes total 100 miles of routes (Main 8x6, Athletic 8x3, Med 4x3, Downtown 5x4 — round 104 to 100). Each route runs 4 times/hour, 15 hours/day, 7 days/week, 50 weeks/year. 2 miles/gallon; $6/gallon; 25 buses x $20,000 maintenance; 20 lbs CO2 per gallon. What is annual cost and CO2?",
        answer: "$6.8M cost; 21M lbs CO2",
        steps: [
          "Miles = 100 x 4 x 15 x 7 x 50 = 2.1M.",
          "Gallons = 2.1M / 2 = 1.05M; fuel = 1.05M x $6 = $6.3M.",
          "Maintenance = 25 x $20K = $0.5M; total $6.8M.",
          "CO2 = 1.05M x 20 = 21M lbs."
        ]
      },
      {
        kind: "definite",
        background: "Electric replacement: $1M × 25 buses = $25M capex. Diesel miles stay 2.1 million. Electric uses 4 miles per gallon-of-diesel-equivalent (gde), and 25 gde per MW-h. Power cost = MW-h × $100. Maintenance $4,000/bus. Board window is 5 years: compare 5 × annual opex save with $25M. ROI = (5-year save − capex) / capex. Today’s grid CO2 = MW-h × 1,000 lbs.",
        prompt: "Electric replacement: $1M per bus (25 buses); 4 miles per gallon-of-diesel-equivalent; 25 gde per MW-h; grid $100/MW-h and 1,000 lbs CO2/MW-h today; maintenance $4,000/bus. Over the Board's 5-year window, what is annual opex save, 5-year opex save vs $25M capex, and ROI?",
        answer: "$4.6M/year save; $23M over 5 years vs $25M capex; ROI -8%; CO2 unchanged until the grid greener",
        steps: [
          "GDE = 2.1M / 4 = 525K; MW-h = 525K / 25 = 21K; power cost = 21K x $100 = $2.1M.",
          "Maint. = 25 x $4K = $0.1M; electric opex $2.2M vs diesel $6.8M; save $4.6M/year.",
          "5-year save $23M; capex $25M; ROI = (23-25)/25 = -8%.",
          "CO2 = 21K x 1,000 = 21M lbs — same as diesel on today's grid."
        ],
        insight: "Vendor 'savings' fail a 5-year ROI; the climate case waits on a cleaner grid."
      }
    ],
    creative: {
      prompt: "Electric buses miss a 5-year money hurdle. What other levers should PubU pull toward net-zero waste by 2040?",
      buckets: [
        {
          name: "Solid waste",
          points: [
            "Dining, dorms, labs",
            "Reduce / recycle / eliminate"
          ]
        },
        {
          name: "Energy",
          points: [
            "On-site renewables",
            "Building efficiency",
            "Wait for / contract a greener grid mix"
          ]
        },
        {
          name: "Local / community benefits of electrifying anyway",
          points: [
            "Noise and fumes",
            "Student wellness",
            "Safety sensors",
            "Rankings and donor story"
          ]
        }
      ]
    }
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
    ],
    math: [
      {
        kind: "definite",
        background: "A developer is studying a Dubai ‘whale’ hotel — whales are ultra-high-spend guests. Whale share is the percent of occupied rooms that are whales. Whales per night at a hotel = rooms × occupancy × whale share. Peak is June–August. Sum the three comps for market whales per night.",
        prompt: "Dubai luxury comps — rooms, off-peak util / whale share, peak util / whale share: King's Palace 5,000, 80%/25%, 80%/25%; Egyptian 4,000, 75%/25%, 95%/37.5%; Belzor 8,000, 75%/33.3%, 100%/50%. Peak is June-August. How many whales per night off-peak and peak at each hotel and in total?",
        answer: "Off-peak 3,750; peak 6,425",
        steps: [
          "King's: 5000x80%x25% = 1,000 both seasons.",
          "Egyptian: 4000x75%x25% = 750 off-peak; 4000x95%x37.5% = 1,425 peak.",
          "Belzor: 8000x75%x33.3% = 2,000 off-peak; 8000x100%x50% = 4,000 peak.",
          "Totals 3,750 and 6,425. Belzor is sold out at peak — unmet excellent-pool demand."
        ]
      },
      {
        kind: "definite",
        background: "A new excellent-pool hotel at $2,500/night would take 100% of King’s Palace and Egyptian whales, plus extra unmet demand of 250 whales/night off-peak and 1,575 at peak. King’s is 1,000 whales/night year-round; Egyptian is 750 off-peak and 1,425 peak. Nightly demand at the new hotel = stolen whales + extra whales.",
        prompt: "A new excellent-pool hotel at $2,500/night would take 100% of King's Palace and Egyptian whales plus 250 extra whales per night off-peak and 1,575 extra at peak. King's has 1,000 whales/night year-round; Egyptian has 750 off-peak and 1,425 peak. What is nightly whale demand off-peak and peak?",
        answer: "2,000 off-peak; 4,000 peak",
        steps: [
          "Off-peak = 1,000 + 750 + 250 = 2,000.",
          "Peak = 1,000 + 1,425 + 1,575 = 4,000."
        ]
      },
      {
        kind: "definite",
        background: "To serve 4,000 peak whales the hotel needs 3 stories. Capex = land $2B + rooms $3B + pool $0.5B. Opex $250M per 1,500 rooms × 3. Rate $2,500/night. Peak revenue = 4,000 × $2,500 × 30 nights × 3 months. Off-peak = 2,000 × $2,500 × 30 × 9. Construction takes 2 years, so a 5-year payback window has only 3 operating years. Compare 3 × annual operating profit with $5.5B capex.",
        prompt: "To serve 4,000 peak whales the hotel needs 3 stories. Land $2B; rooms $3B; excellent pool $0.5B. Opex $250M per 1,500 rooms (x3 stories). Rate $2,500/night. Peak: 4,000 whales x 30 nights/month x 3 months. Off-peak: 2,000 x 30 x 9 months. Construction takes 2 years. 5-year payback required. Annual operating profit and does 5-year payback clear?",
        answer: "$1.5B annual OP on $5.5B capex; 5-year window collects only $4.5B — miss by $1B (~8 more months)",
        steps: [
          "Capex = 2 + 3 + 0.5 = $5.5B.",
          "Peak revenue = 4,000 x $2,500 x 30 x 3 = $900M; off-peak = 2,000 x $2,500 x 30 x 9 = $1.35B; annual $2.25B.",
          "Opex = $250M x 3 = $750M; OP = $1.5B.",
          "2 build years + 3 operating years = $4.5B vs $5.5B."
        ],
        insight: "Economics are strong but the 5-year clock (with 2 years of build) is tight unless F&B/other revenue is added."
      }
    ],
    creative: {
      prompt: "The 5-year payback is short. How else could the developer make the whale hotel work, and what risks remain?",
      buckets: [
        {
          name: "Extra revenue",
          points: [
            "F&B, spa, events",
            "Residences or branded villas",
            "Peak-season premiums above $2,500"
          ]
        },
        {
          name: "Product",
          points: [
            "Excellent pool is non-negotiable vs comps",
            "Cannibalization of the client's existing 3 Dubai resorts"
          ]
        },
        {
          name: "Risk",
          points: [
            "King's / Egyptian / Belzor responses",
            "Off-peak seasonality",
            "Construction overruns pushing payback out"
          ]
        }
      ]
    }
  }
];

