export const GUESSTIMATES = [
  {
    id: "us-coffee-cups-day",
    kind: "top-down",
    prompt: "How many cups of coffee are consumed in the United States on a typical day? Use US population 330M and adults 18+ of 260M.",
    answer: "~250 million cups/day",
    steps: [
      "Start with adults 18+ = 260M. Kids drink some coffee, but the volume is adult-driven.",
      "About 50% of adults drink coffee on a given day (not lifetime drinkers). 260M x 50% = 130M drinkers today.",
      "Average 2 cups per drinker (mix of one-cup and two-to-three-cup habits).",
      "130M x 2 = 260M cups. Round to ~250 million to avoid false precision.",
      "Sanity: 250M / 330M people is ~0.75 cups per person, or ~1 cup per adult. That is a reasonable daily rate."
    ],
    insight: "The trap is applying a lifetime 'drinks coffee' rate to a daily volume. Filter to drinks today. The 50% daily rate is an illustrative working assumption; the so-what is the filter, not the exact percent."
  },
  {
    id: "us-smartphones-sold-year",
    kind: "top-down",
    prompt: "How many smartphones are sold in the US in a typical year? Use adults 18+ of 260M and smartphone penetration of ~85% of adults.",
    answer: "~85 million phones/year",
    steps: [
      "Installed base, adults: 260M x 85% = 220M adult smartphones.",
      "Teens: under-18 population is 70M; about one-quarter are ages 13-17 (~18M) and ~90% have a phone = ~16M. Base ~236M, call it 240M.",
      "Replacement: 240M phones / 3-year life = 80M/year.",
      "First-time / new: ~4M people age into phones each year x 80%, plus a sliver of adult first-buys, ~4M/year.",
      "Total = 80M + 4M = 84M. Answer ~85 million.",
      "Sanity: 85M / 130M households is ~0.65 phones per household per year."
    ],
    insight: "In a mature market, replacement of the installed base dwarfs new buyers. Treating every non-owner as buying this year inflates the answer several times. Three-year life is illustrative; it is also the swing assumption."
  },
  {
    id: "us-credit-card-holders",
    kind: "top-down",
    prompt: "How many unique credit-card holders are there in the US, and how many credit cards are in force? Use adults 18+ of 260M. Say which number you are answering first.",
    answer: "~140 million holders and ~330 million cards",
    steps: [
      "Base is adults 18+ = 260M (minors are not independent holders).",
      "Upper 30% = 78M x 90% hold = ~70M holders x 3 cards = 210M cards.",
      "Middle 40% = 104M x 50% hold = ~50M holders x 2 cards = 100M cards.",
      "Lower 30% = 78M x 20% hold = ~16M holders x 1 card = 16M cards.",
      "Holders = 70 + 50 + 16 = 136M, call it 140M. Cards = 210 + 100 + 16 = 326M, call it 330M.",
      "Sanity: ~2.4 cards per holder, ~1.3 cards per adult."
    ],
    insight: "Holders and cards are different questions. Counting a second card as a second person overstates unique holders by ~2x. Income split and cards-per-holder are illustrative; state both answers in the first 20 seconds."
  },
  {
    id: "austin-rideshare-weekday",
    kind: "top-down",
    prompt: "How many rideshare car trips are completed on a typical weekday in the Austin metro (2.3M people)? Use adults as ~80% of population and smartphone penetration of ~85% of adults.",
    answer: "~40,000 trips/weekday",
    steps: [
      "Adults: 2.3M x 80% = 1.8M. Smartphone adults: 1.8M x 85% = ~1.5M.",
      "Monthly rideshare users: 20% of smartphone adults = 300,000. Most adults do not use the apps.",
      "Frequency is a few times a month, not daily. Use 4 trips per user per month.",
      "300k x 4 = 1.2M trips/month. A typical day: 1.2M / 30 = 40,000 trips.",
      "Supply check: 40,000 trips / ~10 trips per active driver-day = ~4,000 drivers, or one driver per ~575 people. Plausible for a 2.3M metro."
    ],
    insight: "The trap is assuming app users ride every day. Frequency of a few times a month is the swing assumption and is illustrative; daily-rider math overstates by ~10x."
  },
  {
    id: "dfw-basketballs-in-air",
    kind: "top-down",
    prompt: "How many basketballs are in the air at 6:00 PM on a Saturday in the Dallas-Fort Worth metro (7.5M people)? This is an at-an-instant question, not balls owned or games per day.",
    answer: "~250 balls in the air",
    steps: [
      "Ages 8-30 are the main pickup/league pool: about one-third of 7.5M = 2.5M people.",
      "Play basketball that Saturday: 4% = 100,000 people (not 4% of the whole metro, of this age band).",
      "On a court at 6:00 PM: 25% of Saturday players = 25,000 people mid-game.",
      "Informal 5-on-5: 10 players share 1 ball. Balls in play = 25,000 / 10 = 2,500.",
      "Airborne slice: a shot or pass is in the air ~2 seconds of a ~20-second possession = 10%. 2,500 x 10% = 250 balls in the air."
    ],
    insight: "At-an-instant prompts are a time-slice: units in use x fraction of time in the asked state. Treating every young person as playing at 6 PM inflates the answer by 50x or more. Participation rates are illustrative."
  },
  {
    id: "us-tennis-rackets-year",
    kind: "top-down",
    prompt: "How many tennis rackets are sold in the US in a typical year? Think about sharing, not one racket per player.",
    answer: "~1.7 million rackets/year",
    steps: [
      "Players: ages 18-65 = 200M x 4% play at least a few times a year = 8M, plus ~2M teens = 10M players.",
      "Casual 70% (7M) share household or club rackets: ~4 players per racket in use = 1.75M rackets. Life ~5 years -> 0.35M/year.",
      "Regular 25% (2.5M) own one racket. Life ~3 years -> 0.8M/year.",
      "Serious 5% (0.5M) own two. Life ~2 years -> 0.5M/year.",
      "Total ~0.35 + 0.8 + 0.5 = 1.65M. Answer ~1.7 million."
    ],
    insight: "Shared equipment: users / sharing ratio = units in use; units / life = annual sales. Giving every player their own racket overstates several times. Sharing ratios and lives are illustrative."
  },
  {
    id: "us-diapers-year",
    kind: "top-down",
    prompt: "How many disposable diapers are used in the US in a typical year? Use US population 330M to back into births if needed.",
    answer: "~22 billion diapers/year",
    steps: [
      "Births: 330M people / ~80-year life = ~4 million births per year.",
      "Kids currently in diapers: about 2.5 years x 4M = 10 million children (the stock, not one birth cohort).",
      "Average 6 diapers per child per day (newborns more, toddlers fewer).",
      "6 x 365 = ~2,200 diapers per child per year.",
      "10M x 2,200 = 22 billion diapers/year.",
      "Sanity: ~60 diapers per US person per year, or a few boxes per household with a toddler."
    ],
    insight: "The stock is children currently in diapers (births x years in diapers), not a single year of births. Using one cohort understates ~2-3x. Six per day and 2.5 years are illustrative but the structure is the point."
  },
  {
    id: "us-dog-food-revenue",
    kind: "top-down",
    prompt: "What is annual US retail spend on dog food? Use 130M households.",
    answer: "~$30 billion/year",
    steps: [
      "Dog-owning households: 130M x 40% = 52M. Average 1.5 dogs = ~80 million dogs.",
      "Average dog eats ~0.5 lb of food per day (small dogs less, large more).",
      "0.5 x 365 = ~180 lb per dog per year. 80M x 180 = 14.4 billion lb.",
      "Blended retail price ~$2/lb (kibble cheaper, wet and fresh higher).",
      "14.4B x $2 = $29B. Answer ~$30 billion per year."
    ],
    insight: "Ownership, pounds per day, and $2/lb are illustrative working assumptions; treat $30B as order of magnitude. Premium fresh is a small volume share and a larger value share, so a mix shift moves revenue more than volume."
  },
  {
    id: "us-ev-sales-year",
    kind: "top-down",
    prompt: "How many new battery-electric cars (not hybrids) are sold in the US in a typical year? Use 130M households.",
    answer: "~2 million EVs/year",
    steps: [
      "Light-vehicle parc: 130M households x 1.8 vehicles = ~230 million cars and light trucks.",
      "New vehicle sales: 230M / ~13-year life = ~18 million units/year.",
      "EV share of the parc is still small (~4%). EV share of new sales is higher in a growing category; use ~10%.",
      "18M x 10% = 1.8M. Answer ~2 million battery EVs per year.",
      "Cross-check: 4% of 230M is a ~9M EV stock. 20% stock growth is ~1.8M net adds, matching the flow."
    ],
    insight: "Share of the flow (new sales) is several times share of the stock while a category is still penetrating. Using parc share as the sales share understates. The 10% new-sale share is illustrative; name it as the swing."
  },
  {
    id: "us-dentists",
    kind: "top-down",
    prompt: "How many practicing dentists are there in the US? Use population 330M and size from demand (visits), not from counting clinics.",
    answer: "~200,000 dentists",
    steps: [
      "Visits: 330M people x ~1 visit per person per year (some twice, some never) = 330 million visits.",
      "A dentist's year: ~200 working days x 8 patients per day = 1,600 visits per dentist.",
      "Dentists = 330M / 1,600 = ~206,000. Answer ~200,000.",
      "Sanity: 330M / 200,000 = 1,650 people per dentist, a plausible primary-care-like ratio."
    ],
    insight: "This is a demand/workload build, not one dentist per clinic. Patients per day is the swing and is illustrative. Do not start from 'number of dental offices' unless you also have dentists per office and utilization."
  },
  {
    id: "suburban-bigbox-daily-revenue",
    kind: "bottom-up",
    prompt: "What is typical daily revenue of a large suburban general-merchandise store (about 120,000 sq ft, 14-hour day) in a US metro?",
    answer: "~$135,000/day",
    steps: [
      "Split the 14-hour day: peak 4 hours, shoulder 6 hours, slow 4 hours.",
      "Traffic: peak 400 customers/hour, shoulder 200, slow 50. Customers = 4x400 + 6x200 + 4x50 = 1,600 + 1,200 + 200 = 3,000/day.",
      "Average basket $45 (mix of consumables and general merchandise).",
      "Revenue = 3,000 x $45 = $135,000 per day.",
      "Annual check: $135k x 360 = ~$50 million, in range for a large big-box."
    ],
    insight: "Traffic x basket is the engine. Square footage only matters if you convert it through customers per sq ft; do not multiply area by a sales density and also count customers. Rates are illustrative."
  },
  {
    id: "dfw-airport-pax-day",
    kind: "bottom-up",
    prompt: "How many passenger movements (enplanements plus deplanements; a connecting passenger counts twice) go through Dallas-Fort Worth International on a typical day?",
    answer: "~220,000 passenger movements/day",
    steps: [
      "Start from gates, not metro population. A large hub has ~150 gates.",
      "Turns: ~6 departures per gate per day. 150 x 6 = 900 departures.",
      "Average aircraft 150 seats x 80% load = 120 passengers. Enplanements = 900 x 120 = 108,000.",
      "Arrivals are similar. Total movements = 108,000 x 2 = 216,000. Answer ~220,000/day.",
      "Annual: 220k x 365 = ~80 million, the right order for a top US hub."
    ],
    insight: "Hubs are connection machines; unique travelers are fewer than movements. Size flights x load, not DFW's 7.5M residents. Gate count, turns, and load factor are illustrative working assumptions."
  },
  {
    id: "smu-dining-hall-meals",
    kind: "bottom-up",
    prompt: "How many meals does a main campus dining hall serve on a typical weekday at a private university with 7,000 undergraduates?",
    answer: "~9,000 meals/weekday",
    steps: [
      "Meal-plan students: 7,000 x 70% = 4,900. Not every undergraduate is on the plan.",
      "Breakfast capture 40% = ~2,000. Lunch 80% = ~3,900. Dinner 60% = ~2,900.",
      "Total = 2,000 + 3,900 + 2,900 = 8,800. Answer ~9,000 weekday meals.",
      "Weekend is much lower; do not annualize 9,000 x 365 without a weekend haircut."
    ],
    insight: "Meal-plan penetration and lunch capture drive the total. Counting every enrolled student at every meal overstates ~2x. Capture rates are illustrative."
  },
  {
    id: "multiplex-saturday-revenue",
    kind: "bottom-up",
    prompt: "What is Saturday revenue (tickets plus concessions) for a 12-screen multiplex in a generic large US city of 1.5M people?",
    answer: "~$70,000 on a Saturday",
    steps: [
      "Seats: 12 screens x 150 seats = 1,800 seats.",
      "Saturday showings: 5 per screen. Seat-showings = 1,800 x 5 = 9,000.",
      "Blend occupancy ~50% (matinees thinner, evening fuller). Tickets = 4,500.",
      "Average ticket $12. Box office = 4,500 x $12 = $54,000.",
      "Concessions: half of patrons spend $8. 4,500 x 50% x $8 = $18,000.",
      "Total $72,000. Answer ~$70,000 Saturday."
    ],
    insight: "Saturday is not 100% full, and concessions are often a quarter to a third of revenue (and a larger share of profit). Occupancy and attach rate are illustrative."
  },
  {
    id: "dallas-hotel-room-revenue",
    kind: "bottom-up",
    prompt: "What is typical weekday room revenue (rooms only, not food and beverage) for a 250-room upscale hotel in Dallas?",
    answer: "~$35,000/weekday",
    steps: [
      "Rooms available = 250.",
      "Weekday occupancy in a Dallas business hotel ~70% (not 100%). Occupied = 175 rooms.",
      "Average daily rate $200.",
      "Room revenue = 175 x $200 = $35,000.",
      "RevPAR = 70% x $200 = $140. Same answer: 250 x $140 = $35,000."
    ],
    insight: "Occupancy x ADR is RevPAR. Full occupancy is capacity, not the answer. ADR and 70% occupancy are illustrative; weekend mix is usually lower occupancy and a different rate."
  },
  {
    id: "dallas-coffee-shop-weekday",
    kind: "bottom-up",
    prompt: "How many drinks does a neighborhood coffee shop in a walkable Dallas area sell on a typical weekday, and what is drink revenue? Shop is open 12 hours.",
    answer: "~300 cups and ~$1,500 drink revenue",
    steps: [
      "Split the 12-hour day: morning peak 3 hours, midday 5 hours, afternoon 4 hours.",
      "Throughput: peak 50 drinks/hour, midday 20, afternoon 10.",
      "Cups = 3x50 + 5x20 + 4x10 = 150 + 100 + 40 = 290. Call it 300 cups.",
      "Average drink $5. Drink revenue = 300 x $5 = $1,500.",
      "Food attach is extra and not required unless asked."
    ],
    insight: "A single shop is a peak-capacity problem in the morning even if the day-average looks quiet. Hourly rates are illustrative; the method is band the day, then price x volume."
  },
  {
    id: "dentist-office-visits-day",
    kind: "bottom-up",
    prompt: "How many patient visits does a 4-chair general dentistry practice complete on a typical weekday?",
    answer: "~18 visits/day",
    steps: [
      "Four chairs does not mean four dentists. A typical small practice has 1 dentist plus 1 hygienist on the floor.",
      "Dentist: 8-hour day, ~45-minute appointments. 8 x 60 / 45 = ~10 visits.",
      "Hygienist: 60-minute cleanings x 8 hours = 8 visits.",
      "Total ~18 visits. Some chair time is idle for emergencies and turnover.",
      "Annual: 18 x 220 days = ~4,000 visits per practice."
    ],
    insight: "Provider hours bind, not chairs. Four chairs with one dentist do not quadruple visits. Appointment lengths are illustrative."
  },
  {
    id: "pizzeria-saturday-pies",
    kind: "bottom-up",
    prompt: "How many pizzas does a 40-seat independent pizzeria in a 1.5M US city bake on a typical Saturday (dine-in plus takeout/delivery)?",
    answer: "~200 pizzas",
    steps: [
      "Dine-in covers: lunch 2 hours x 2 turns x 40 seats = 80. Dinner 4 hours x 3 turns x 40 = 120. Covers = 200.",
      "Pies from dine-in: 200 diners / ~2.5 people per pizza = 80 pies.",
      "Takeout and delivery often match or exceed the dining room. Add ~120 pies.",
      "Total ~200 pizzas.",
      "Oven sanity: 4 pies every 8 minutes is 30 pies/hour x 8 hours = 240 capacity, so Saturday is demand-bound, not oven-bound."
    ],
    insight: "Seats size only the dining room. Delivery can be half the volume. Turns and people-per-pizza are illustrative; check the oven so you know which side binds."
  },
  {
    id: "tsa-checkpoint-peak-hour",
    kind: "bottleneck",
    prompt: "A 4-lane TSA checkpoint at a large US airport faces 1,200 passengers in the 6-7 AM peak hour. A standard lane processes about 3 passengers per minute. How many passengers get through in that hour, and how many lanes would clear the demand?",
    answer: "720 through the hour; ~7 lanes to clear 1,200",
    steps: [
      "Demand = 1,200 passengers in the hour (given).",
      "Capacity per lane = 3 passengers/minute x 60 = 180/hour.",
      "4 lanes x 180 = 720 passengers/hour of capacity.",
      "Throughput = min(1,200 demand, 720 capacity) = 720. Backlog = 480.",
      "Lanes to clear the hour: 1,200 / 180 = 6.7, so 7 lanes (or fewer lanes if PreCheck cuts cycle time)."
    ],
    insight: "Output is min(demand, capacity). Advertising in the queue does not raise throughput; adding lanes or a faster cycle (PreCheck) does. The 3/minute rate is illustrative."
  },
  {
    id: "restaurant-saturday-covers",
    kind: "bottleneck",
    prompt: "An 80-seat full-service restaurant takes 350 reservations for Saturday 5:30-10:00 PM. Average table time is 90 minutes including turn. How many diners can it actually serve?",
    answer: "~240 covers; the book is over capacity",
    steps: [
      "Evening window = 4.5 hours.",
      "Turns = 4.5 hours / 1.5 hours per party = 3 turns.",
      "Seat capacity = 80 x 3 = 240 covers.",
      "Demand after ~15% no-shows: 350 x 85% = ~300. Still above 240.",
      "Served = min(300 demand, 240 capacity) = 240. The extra 60 wait or walk."
    ],
    insight: "Saturday dinner is seat-and-turn-time bound. Taking 350 reservations against 240 capacity does not produce 350 covers. Ninety-minute dwell is illustrative; a faster lunch turn would raise capacity."
  },
  {
    id: "dallas-office-elevators",
    kind: "bottleneck",
    prompt: "How many passenger elevators does a 20-story downtown Dallas office tower need if each floor has 80 workers? Size on the morning peak, not the average hour.",
    answer: "~6 passenger lifts plus 1 service car",
    steps: [
      "Lift users: floors 3-20 take the elevator. 18 x 80 = 1,440 people. Floors 1-2 use stairs.",
      "Morning rush: 40% arrive in a 20-minute window = ~580 people.",
      "Busiest 5 minutes, with bunching: ~30% of that rush = ~170 people.",
      "Car: 15-person cab at 80% load = 12. Round trip ~2 minutes -> 2.5 trips per 5 minutes -> ~30 people per car per 5 minutes.",
      "Cars = 170 / 30 = 5.7, so 6 passenger lifts. Add 1 service/freight car for maintenance and redundancy -> 7 total."
    ],
    insight: "Size on the peak inside the peak and a wait-time target, not average hourly throughput. Hourly math always makes the bank look oversized. Bunching and round-trip time are illustrative."
  },
  {
    id: "stadium-beer-game",
    kind: "bottleneck",
    prompt: "How many beers are sold during a 3-hour college football game at a 90,000-seat stadium? Compare fan demand with tap capacity.",
    answer: "~24,000 beers (taps bind)",
    steps: [
      "Demand: 90,000 fans x 70% age 21+ = 63,000. Half of them drink beer x 2 beers = ~63,000 beers wanted.",
      "Selling time is not the full 3 hours; use ~2 hours of real pouring (pregame, halftime, between quarters).",
      "Capacity: 100 beer stands x 2 taps x 1 beer per minute x 120 minutes = 100 x 2 x 120 = 24,000 beers.",
      "Sold = min(63,000 demand, 24,000 capacity) = 24,000.",
      "Halftime lines are the tell that taps, not thirst, bind."
    ],
    insight: "Stadium beer is min(thirst, taps x selling minutes). Extra demand at a blowout does not sell if taps already run full at halftime. Stand count and pour rate are illustrative; the min() is the lesson."
  },
  {
    id: "stadium-concert-rideshare",
    kind: "bottleneck",
    prompt: "A sold-out 60,000-seat Dallas stadium concert lets out at 11 PM. How many rideshare trips are completed in the first 90 minutes?",
    answer: "~3,000 trips (cars and curb bind)",
    steps: [
      "Demand: 60,000 x 40% want a car (transit is thin late) = 24,000 people / 2 per car = 12,000 car trips. Rideshare share 50% = 6,000 requested trips.",
      "Supply: cars already nearby plus surge inbound in 90 minutes ~3,000 cars, each completing about 1 trip in the crush.",
      "Completed = min(6,000 requests, 3,000 cars) = 3,000 trips.",
      "Curb check: 3,000 / 90 minutes = 33 pickups/minute. About 15-20 loading bays at ~30 seconds per car.",
      "Unmet ~3,000 trips spill into the next hour, taxis, or walking to a pickup zone farther out."
    ],
    insight: "Egress is capped by reachable cars and curb loading, not by app pings. Failed bookings retry, so a flat 'success rate' is not the limit. Mode split and car count are illustrative."
  },
  {
    id: "dining-hall-lunch-window",
    kind: "bottleneck",
    prompt: "A campus dining hall has 400 seats and 8 serving lines. Can it feed 2,000 students in a 90-minute lunch window if the average student occupies a seat for 30 minutes and each line serves 4 students per minute?",
    answer: "No. ~1,200 get through; seats bind",
    steps: [
      "Demand = 2,000 students (given).",
      "Seat capacity: 400 seats x (90 / 30) = 400 x 3 turns = 1,200 meals.",
      "Line capacity: 8 lines x 4 students/minute x 90 = 2,880 trays.",
      "Throughput = min(2,000 demand, 1,200 seats, 2,880 lines) = 1,200.",
      "Shortfall 800 students eat elsewhere, wait, or skip. Adding lines does not help; shortening dwell (grab-and-go) or adding seats does."
    ],
    insight: "The bottleneck is the tightest stage. Speeding the serving line does nothing if seats are full. Always compute min(demand, each capacity step)."
  },
  {
    id: "grocery-saturday-checkout",
    kind: "bottleneck",
    prompt: "A supermarket with 8 staffed checkout lanes faces 150 customers who want to pay between 5:00 and 5:30 PM on Saturday. Each transaction takes 2.5 minutes. How many customers finish in that 30 minutes?",
    answer: "~96 customers; lanes bind",
    steps: [
      "Demand = 150 customers in 30 minutes (given).",
      "Capacity per lane = 30 / 2.5 = 12 customers.",
      "8 lanes x 12 = 96 customers of capacity.",
      "Finished = min(150, 96) = 96. Backlog 54 still in queue at 5:30.",
      "Lanes to clear the spike: 150 / 12 = 12.5, so ~13 staffed lanes or a faster self-checkout cycle."
    ],
    insight: "A 30-minute spike is a capacity problem. Staffing to the daily average leaves a Saturday 5 PM queue. Transaction time is illustrative; self-checkout changes cycle time, not demand."
  },
  {
    id: "hotel-breakfast-buffet",
    kind: "bottleneck",
    prompt: "A Dallas hotel has 200 occupied rooms, 1.5 guests per room, and 70% of guests eat the complimentary breakfast. The breakfast room has 40 seats and is open 7:00-9:00 AM. Average dwell is 30 minutes. How many breakfast guests actually get seated in the window?",
    answer: "~160 seated; the room binds vs ~210 demand",
    steps: [
      "Demand: 200 rooms x 1.5 guests = 300 guests x 70% eat breakfast = 210 guests.",
      "Seat-turns: 2 hours / 0.5 hour dwell = 4 turns. Seat capacity = 40 x 4 = 160.",
      "Served = min(210 demand, 160 seats) = 160.",
      "Shortfall 50 guests wait, skip, or grab coffee to go.",
      "A second buffet line would not fix this if seats are the tight stage; more seats or shorter dwell would."
    ],
    insight: "Complimentary breakfast is min(guest demand, seat-turns). Occupancy and 70% take-up are illustrative; a sold-out convention night is when the room fails first."
  }
];
