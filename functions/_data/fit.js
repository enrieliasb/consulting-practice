export const FIT = [
  {
    id: "resume-walkthrough",
    category: "trajectory",
    prompt: "Walk me through your resume.",
    aimSeconds: 120,
    skeleton: {
      headline: "Three choices pushed me from finance analysis toward structured problem-solving with clients, which is why consulting is the deliberate next step.",
      beats: [
        "Situation: I started in undergrad finance because I liked markets, then spent two years as an analyst at a Dallas middle-market firm building models for owner-operated companies.",
        "Task: The work was technically clean, but I only ever saw one function. When a portfolio company missed plan, I could reforecast; I could not sit with the operator and change the drivers.",
        "Action: I chose Cox to close that gap, led the consulting club's case team, and spent last summer in an operations internship at a DFW hospital system where I owned a throughput workstream rather than a model.",
        "Result: The internship cut ED boarding by 18% in a 6-week pilot; the club placed 12 first-years into their first live case project. I am here because I want that mix of analysis, influence, and implementation as the job, not as a side project."
      ]
    },
    coaching: [
      "This is a through-line, not a chronology of every row. Two or three pivots, each with one proof point.",
      "End on a hook that maps to what they staff: structured problem-solving, client impact, Dallas.",
      "Lead with the headline. Do not open with your hometown and high school.",
      "120 seconds is the ceiling; if they want depth they will pick a bullet."
    ]
  },
  {
    id: "why-consulting",
    category: "trajectory",
    prompt: "Why consulting?",
    aimSeconds: 90,
    skeleton: {
      headline: "I want the job where the scarce skill is structuring messy problems with a team that has never seen this industry before, and I already tested that I like it.",
      beats: [
        "Situation: In the hospital internship I was staffed on ED boarding with a nurse manager, an IT analyst, and me.",
        "Task: No one handed us a clean data set or a single owner. Boarding looked like a capacity problem until we split it into arrivals, bed assignment, and discharge.",
        "Action: I built the issue tree, ran the discharge-before-noon experiment, and presented the recommendation to the COO.",
        "Result: Boarding hours fell 18% in six weeks. That was the first time my analysis changed an operating meeting the next morning. I want a career that repeats that loop on purpose: new sector, tight clock, recommendation that someone has to live with."
      ]
    },
    coaching: [
      "Tie the why to a concrete past experience, not to 'I like variety' or prestige.",
      "Name the skills you want (structuring, client influence, pace) and show you have already tasted them.",
      "Keep firm-specific praise out of this answer; that belongs in why this firm."
    ]
  },
  {
    id: "why-this-firm",
    category: "trajectory",
    prompt: "Why this firm, rather than the others you are talking to?",
    aimSeconds: 90,
    skeleton: {
      headline: "I am targeting this firm because of the Dallas staffing model, the operations and healthcare work I have already seen here, and two conversations that changed how I would use an offer.",
      beats: [
        "Situation: I compared three firms on the same grid: apprenticeship, sector mix in this office, and how associates actually get staffed.",
        "Task: Brochures look identical. The difference showed up in people, not in taglines.",
        "Action: I spoke with a Cox alum on an energy transformation and with an associate who had just rotated off a DFW provider ops study. I asked how much of the work was analysis vs. sitting with front-line managers.",
        "Result: Both described early ownership of a workstream and a Dallas office that still staffs locally on Texas clients. That matches the hospital project I already know I do well. I would use an offer here to double down on ops and healthcare, not to collect a brand."
      ]
    },
    coaching: [
      "Specific people, a practice, and a staffing fact beat 'you are the best firm.'",
      "Never recycle a brochure sentence. If you cannot name a conversation, you are not ready.",
      "Keep why consulting, why firm, and why office as three distinct halves."
    ]
  },
  {
    id: "why-dallas-office",
    category: "trajectory",
    prompt: "Why this office? Why Dallas?",
    aimSeconds: 90,
    skeleton: {
      headline: "Dallas is not a default because I go to Cox; it is the office where my network, the client mix, and where I want to build a career actually overlap.",
      beats: [
        "Situation: I am a Cox MBA with two years already in DFW finance and a hospital internship in the metro.",
        "Task: Plenty of classmates treat Dallas as convenient. Interviewers hear that as no preference.",
        "Action: I mapped the office against three criteria: energy and healthcare clients I already understand, a city I will still want in year four, and partners I have actually met on campus.",
        "Result: Those meetings confirmed the office still runs local studies rather than only exporting people to the coasts, which is how I want to apprentice. I am asking for Dallas on purpose. If the work takes me to Houston or Austin for a stretch, that is fine; the hub I am committing to is here."
      ]
    },
    coaching: [
      "Give a real personal reason (network, sector, geography) plus a professional one. Convenience alone is weak.",
      "SMU Cox is fair to mention; make it evidence of commitment, not the whole answer.",
      "Signpost your three criteria so the interviewer can follow you."
    ]
  },
  {
    id: "why-you",
    category: "trajectory",
    prompt: "Why should we hire you? What distinguishes you from the other people I am meeting today?",
    aimSeconds: 90,
    skeleton: {
      headline: "You should take me if you want someone who can own a messy operations workstream, put a number on it, and still get a skeptical operator to try the change.",
      beats: [
        "Situation: A lot of Cox candidates can case. Fewer have already changed a live operating metric.",
        "Task: I do not have a brand-name internship, so I cannot lean on the logo.",
        "Action: I lead with two proof points: the ED boarding pilot (18% reduction) and the consulting club case team I rebuilt when membership had stalled at 28.",
        "Result: Club active members went 28 to 74 in one year; first-years staffed on 12 live projects. That is the same muscle as a first-year associate: structure, hustle, influence without a title. I am not claiming I am the smartest person in the pool. I am claiming I already do the job at a smaller scale."
      ]
    },
    coaching: [
      "Two or three strengths, each with a proof story. Adjectives without evidence do not count.",
      "Differentiate honestly. If you lack a brand-name internship, say what you have instead.",
      "Use I, not we, even when the work was a team."
    ]
  },
  {
    id: "led-without-authority",
    category: "leadership",
    prompt: "Tell me about a time you led a team without formal authority.",
    aimSeconds: 90,
    skeleton: {
      headline: "I turned a stalled Cox case competition team of six classmates into a second-place finish when I was not the elected captain.",
      beats: [
        "Situation: Four weeks out, our healthcare-entry case was still a pile of slides. The captain was overwhelmed and two teammates had gone quiet.",
        "Task: I had no title. Pushing too hard would look like a coup; doing nothing would waste the team.",
        "Action: I asked the captain for a 30-minute reset, proposed a three-workstream split, and volunteered to own the sizing plus synthesis. I booked 8 AM stand-ups and gave each quiet teammate a scoped exhibit they could finish in one night.",
        "Result: We submitted a 12-slide deck with a quantified entry recommendation and placed 2 of 18 teams. Both quiet teammates stayed through finals. Informal leadership is a negotiated contract. I now ask for the mandate in private, then make other people famous in public."
      ]
    },
    coaching: [
      "The obstacle must be the lack of authority, not just a hard project.",
      "Name three specific I-moves, not 'we collaborated.'",
      "Quantify the result. Second of 18 is better than 'we did well.'"
    ]
  },
  {
    id: "persuaded-resistant-person",
    category: "leadership",
    prompt: "Tell me about a time you persuaded someone who initially resisted your idea.",
    aimSeconds: 90,
    skeleton: {
      headline: "I convinced a skeptical nurse manager to pilot a discharge-before-noon checklist after she had already said no in the first meeting.",
      beats: [
        "Situation: ED boarding was running 6.4 hours. My hypothesis was that delayed discharges upstairs were blocking beds, not ED staffing.",
        "Task: The unit manager believed this was an ED problem and said a new checklist would just add paperwork.",
        "Action: I stopped arguing in the conference room. I shadowed two discharge days, showed her that 40% of medically ready patients sat after noon, and asked her to co-design a 5-item checklist rather than adopt mine. I also put her name on the pilot readout.",
        "Result: She agreed to a two-week trial on one unit. Discharges before noon went from 28% to 51%; ED boarding on that pathway fell 18%. Resistant experts are usually protecting a real fear. I now lead with their data and their authorship, not with my framework."
      ]
    },
    coaching: [
      "Show you changed your approach after the first no, not that you just pushed harder.",
      "Give the other person a rational reason they resisted. Do not make them a cartoon.",
      "Quantify both the persuasion (they said yes) and the business result."
    ]
  },
  {
    id: "proudest-accomplishment",
    category: "achievement",
    prompt: "What is your proudest accomplishment?",
    aimSeconds: 90,
    skeleton: {
      headline: "I rebuilt the Cox Consulting Club's first-year staffing pipeline from 28 active members to 74 and put 12 first-years on live projects in one year.",
      beats: [
        "Situation: I took over case-prep as a first-year MBA when the club was known for social events and last-minute case drills.",
        "Task: No budget for coaches, and second-years were already in recruiting. First-years were showing up once and disappearing.",
        "Action: I built a 6-week curriculum, paired every first-year with a second-year for one scored mock, and sold three Dallas alumni on giving a live 90-minute case. I personally ran the first four sessions so the standard was visible.",
        "Result: Active members 28 to 74. Twelve first-years staffed on pro-bono projects. Club case-comp participation doubled. Pride for me is a system that outlasts me. The curriculum is still the one they run this year."
      ]
    },
    coaching: [
      "Pick impact you personally drove, not a team win where your role is fuzzy.",
      "Before-and-after numbers are mandatory. 28 to 74 beats 'we grew a lot.'",
      "A non-professional story is allowed if the leadership muscle is as clear."
    ]
  },
  {
    id: "disagreement-with-boss",
    category: "conflict",
    prompt: "Tell me about a time you disagreed with your boss or a manager. How did you handle it?",
    aimSeconds: 90,
    skeleton: {
      headline: "I pushed back on my internship manager's plan to present a 40-slide diagnostic when the COO had asked for a recommendation in 12 minutes.",
      beats: [
        "Situation: Week five of the hospital internship. We had a clean root-cause story on ED boarding and a 40-page appendix.",
        "Task: My manager wanted to 'show the work' so the analysis looked rigorous. I thought we would lose the room.",
        "Action: I asked for 20 minutes privately, recast the story as answer-first with three backup exhibits, and offered to keep the full pack as a leave-behind. I did not copy the COO.",
        "Result: He agreed to a 6-slide version. The COO approved the two-week pilot in the meeting. Afterward he told me the appendix would have burned the slot. Disagree in private, with an alternative, and with the decision-maker's constraint in mind. I still show the work; I do not lead with it."
      ]
    },
    coaching: [
      "This is judgment and courage, not insubordination. Private first, alternative in hand.",
      "Do not pick a story where you were simply right and the boss was a fool.",
      "Land what you would still do the same way, and what you would do more carefully."
    ]
  },
  {
    id: "difficult-teammate",
    category: "conflict",
    prompt: "Tell me about a time you worked with a difficult teammate.",
    aimSeconds: 90,
    skeleton: {
      headline: "I got a case-team teammate who was missing deadlines back to a scoped role instead of writing him off, and we still hit the Friday submission.",
      beats: [
        "Situation: Five-person Cox project for a Dallas nonprofit. One teammate, a strong modeler, skipped two stand-ups and delivered a half-built file 18 hours late.",
        "Task: The rest of the team wanted him dropped. We were 10 days from the board readout and I owned integration.",
        "Action: I met him one-on-one. It was a recruiting week, not laziness. I cut his scope to one exhibit, moved the rest to me, and set a Wednesday checkpoint with a written owner map so the group saw the new deal.",
        "Result: He delivered the exhibit on time. We submitted Friday at 4 PM. The nonprofit used two of our pricing slides in the board pack. I now diagnose constraint vs. commitment before I escalate. Public blame would have lost the modeler and the week."
      ]
    },
    coaching: [
      "Show empathy plus a standard. Rescuing without a new contract is just absorbing the work.",
      "Use I for the conversation and the redesign. Do not hide behind 'the team decided.'",
      "Avoid stories that end in 'so I did everything myself' with no change in the other person."
    ]
  },
  {
    id: "biggest-failure",
    category: "failure",
    prompt: "Tell me about your biggest failure. What did you learn?",
    aimSeconds: 90,
    skeleton: {
      headline: "I shipped a club case workshop that 40 people signed up for and 11 came, because I optimized the content and ignored the calendar.",
      beats: [
        "Situation: As case-prep lead I scheduled an intensive Saturday workshop two weeks before first-round interviews.",
        "Task: I treated low mid-week RSVPs as noise and did not check recruiting calendars. Two firms had coffee chats that Saturday.",
        "Action: I ran the session anyway for 11 people rather than postpone. I did not message the 29 no-shows until Sunday.",
        "Result: We burned a volunteer coach's morning and lost credibility with first-years. I owned it in the next club meeting, resurveyed times, and moved workshops to Tuesday nights. Attendance on the next three sat at 30-plus. I now treat logistics as part of the product. A great exhibit no one can attend is a fail. I also send the 'are you actually coming' ping 48 hours out."
      ]
    },
    coaching: [
      "Own a real failure. Humble-brags ('I worked too hard') fail this question.",
      "State what you did wrong in plain language. Then show the behavior that changed later.",
      "Quantify both the miss and the recovery."
    ]
  },
  {
    id: "weakness",
    category: "failure",
    prompt: "What is your greatest weakness?",
    aimSeconds: 90,
    skeleton: {
      headline: "I over-index on finishing the analysis before I socialize a messy draft, and I have had to install a forced early share so clients and teammates can steer me.",
      beats: [
        "Situation: On the hospital project I sat on the boarding tree for four days because the arrival data were incomplete.",
        "Task: My manager had to ask where the work was. The delay was pride about incomplete numbers, not a data gap we could not work around.",
        "Action: I now put a 48-hour rule on any workstream: a one-page draft or issue tree goes to the team even if the math is still ranges. I also ask a teammate to be the person who pokes me.",
        "Result: On the nonprofit pricing project I shared a 70% tree on day two. The client killed a whole branch that would have wasted the week. Consulting rewards a good-enough draft that starts the conversation. I still like clean math; I no longer hide until it is clean."
      ]
    },
    coaching: [
      "Pick a real professional weakness that would show up on a team, then show the system you use to manage it.",
      "Do not pick 'I care too much' or a fake weakness that is a strength.",
      "The result should be a later story where the new habit worked, not just a promise."
    ]
  },
  {
    id: "tight-deadline-ambiguity",
    category: "ambiguity",
    prompt: "Tell me about a time you had to deliver under a tight deadline with incomplete or ambiguous information.",
    aimSeconds: 90,
    skeleton: {
      headline: "I had 72 hours to recommend whether a Dallas nonprofit should raise workshop prices, with attendance data that only covered one semester and no cost split.",
      beats: [
        "Situation: The board meeting moved up a week. I owned the pricing exhibit for the student team.",
        "Task: We had headcount, not contribution margin. Half the programs were bundled with grants, so a naive price cut looked volume-accretive.",
        "Action: I time-boxed: day one, issue tree and the three numbers that would change the answer. Day two, I interviewed the program lead and built ranges (price x volume x a 30/70 grant vs. fee mix). Day three, I presented a recommendation with a sensitivity, not a false point estimate.",
        "Result: We advised a 12% price increase on two oversubscribed programs and no change on a grant-heavy one. The board adopted it. Spring revenue on those two programs was up 9% on flat volume. Ambiguity is a scoping problem. I write down the one assumption that would flip the call and I say it out loud."
      ]
    },
    coaching: [
      "Show how you chose what not to analyze. Tight clocks are won by 80/20, not by heroics.",
      "Ranges plus a sensitivity beat a fake precise number.",
      "Signpost the time-box so the interviewer can see the plan."
    ]
  },
  {
    id: "ethical-dilemma",
    category: "ethics",
    prompt: "Tell me about an ethical dilemma and how you handled it.",
    aimSeconds: 90,
    skeleton: {
      headline: "I refused to let our student team send a client a slide that used another team's exhibit as if it were ours, even though it would have made our deck look stronger 12 hours before the readout.",
      beats: [
        "Situation: Late night before a Dallas nonprofit board pack. A teammate dropped in a competitor-benchmark chart he had seen in a shared drive from another Cox team that had used a similar client last year.",
        "Task: We were thin on external comps. Rebuilding the chart would take hours we did not have. He argued it was 'just a public-looking benchmark.'",
        "Action: I said no, pulled the slide, and told the teammate I would flag it to our faculty advisor if it went back in. I replaced it with a three-line table from the client's own last two years, labeled as internal only, and noted the gap in the backup.",
        "Result: The board still approved the pricing recommendation. The advisor later told us another team had been cited for recycling that exact exhibit. If I cannot explain the source in the room, it does not go in the pack. I also set a source-check as a team norm the next day, not as a one-off scold."
      ]
    },
    coaching: [
      "Pick a dilemma with a real cost to doing the right thing. Easy calls do not test judgment.",
      "Be specific about what you said and to whom. Vague 'I raised concerns' is weak.",
      "Do not invent a story. If you use this skeleton, swap in your own facts; interviewers compare notes."
    ]
  },
  {
    id: "analysis-guided-decision",
    category: "achievement",
    prompt: "Tell me about a time your analysis guided a decision.",
    aimSeconds: 90,
    skeleton: {
      headline: "My mix analysis stopped a Dallas clinic from adding Saturday hours and pointed them at no-show reduction instead, which recovered more visits at lower cost.",
      beats: [
        "Situation: The medical director wanted Saturday hours to cut a 19-day wait for new patients.",
        "Task: Saturday would need overtime nursing. I was the intern, not the scheduler.",
        "Action: I pulled 12 weeks of appointments, split demand by day and no-show rate, and showed that 22% no-shows on weekdays were the bigger hole than Saturday demand. I modeled two options: four Saturday hours vs. a 48-hour text reminder plus overbooking rule.",
        "Result: They ran the reminder pilot first. No-shows fell from 22% to 14% in five weeks, equal to ~30 extra completed visits a week, without the overtime. Saturday is still off the table. I now ask 'what decision does this change' before I add a cut. The winning exhibit was a simple two-column comparison, not a fancy model."
      ]
    },
    coaching: [
      "The analysis has to change a choice, not merely describe a situation.",
      "Say the counterfactual: what they would have done without you.",
      "Quantify the decision (visits, dollars, time), not just that they 'liked the work.'"
    ]
  },
  {
    id: "beyond-remit",
    category: "achievement",
    prompt: "Tell me about a time you went beyond your formal remit or job description.",
    aimSeconds: 90,
    skeleton: {
      headline: "I was hired to refresh a hospital dashboard; I used the same data to flag that one unit's discharge lag was driving ED boarding, which became the internship's main workstream.",
      beats: [
        "Situation: My intern scope was to clean the daily census dashboard for the operations VP.",
        "Task: The dashboard already 'worked.' Shipping a prettier version would have met the job and missed the problem.",
        "Action: While reconciling fields I noticed boarding hours correlated with one med-surg unit's afternoon discharges. I spent two evenings building a one-page funnel, then asked my manager for permission to raise it rather than sending it around.",
        "Result: The VP redirected half my remaining time onto that unit. The discharge-before-noon pilot came out of that detour and cut boarding 18% on the pathway. Going beyond remit is not freelance heroics. I ask for the extra scope once I have a fact that justifies it."
      ]
    },
    coaching: [
      "Show initiative plus respect for the chain of command. Do not freelance into someone else's client.",
      "The extra work should connect to impact, not to unpaid hours for their own sake.",
      "Use I for the notice and the ask; use the manager for the redirect."
    ]
  },
  {
    id: "five-ten-year-goals",
    category: "trajectory",
    prompt: "Where do you see yourself in 5 to 10 years?",
    aimSeconds: 90,
    skeleton: {
      headline: "In five years I want to be a manager who can run an operations transformation in healthcare or energy out of Dallas; in ten I want that same craft either as a partner-track operator inside a firm or as an operator in a Texas health system.",
      beats: [
        "Situation: I am not using consulting as a parking lot. I want apprenticeship in structuring and in how change actually sticks in operations.",
        "Task: Ten-year plans that name a C-suite title sound rehearsed and closed.",
        "Action: I split the horizon: years 1-3, get excellent at a workstream and at one sector I already know (provider ops). Years 4-6, lead a team. Years 7-10, either stay and build a Dallas practice muscle or take the craft in-house.",
        "Result: That path is consistent with why I left a pure finance seat and with the hospital internship I already chose. I will pick the year-seven fork based on whether I still want client variety or one P&L. I am not pretending I know that today."
      ]
    },
    coaching: [
      "Be directional, not a fake 10-year org chart. Honesty about the later fork reads as mature.",
      "Connect the goal to this firm and this office, or the interviewer hears 'any consulting job.'",
      "Avoid 'I will know by then' with no spine. Give a 5-year picture that is staffable."
    ]
  },
  {
    id: "classmates-describe-you",
    category: "trajectory",
    prompt: "How would your classmates or co-workers describe you?",
    aimSeconds: 90,
    skeleton: {
      headline: "Classmates would say I am the person who turns a vague group chat into an owner map, and that I am direct without making it personal.",
      beats: [
        "Situation: On a five-person Cox strategy project the Slack thread had 80 messages and no next action.",
        "Task: People were being polite and duplicating work. Someone needed to impose a structure without becoming the scold.",
        "Action: I sent a 6-line owner map (who, deliverable, time) and asked each person to reply with one risk. I also took the ugliest piece (the data clean) so it did not look like I was only assigning.",
        "Result: Two classmates later used that format on other teams. In peer feedback I was tagged 'clarifies the work' more than 'smartest in the room,' which is the reputation I want. I invite a follow-up: if they asked my last teammate, they would also hear that I can over-structure when the problem is still divergent. I watch for that."
      ]
    },
    coaching: [
      "Pick two traits max, each with a proof. A laundry list of compliments is not an answer.",
      "Include one edge (how it can grate) so it does not sound like a brag sheet.",
      "This is a reputation question. 'Hardworking' is table stakes and forgettable."
    ]
  },
  {
    id: "not-on-the-resume",
    category: "trajectory",
    prompt: "Tell me something about you that is not on your resume.",
    aimSeconds: 90,
    skeleton: {
      headline: "I spend Saturday mornings coaching a 10-and-under rec basketball team in Oak Cliff, which is also where I learned to give feedback that a 9-year-old can use.",
      beats: [
        "Situation: A neighbor who runs the league needed an assistant coach last fall. I said yes without putting it on LinkedIn.",
        "Task: I default to analytical critique. That voice does not work on fourth graders, or, I later realized, on a nervous intern.",
        "Action: I forced myself to one cue per player per drill ('pivot foot stays') and a positive before a fix. I also stayed after to help a shy kid shoot, which is not in any club bio.",
        "Result: The team went from not passing to actually running a simple offense. More useful to me: I started using the same one-cue rule with first-years in case prep. What is not on the page is often the habit that makes the page work. I can talk about this without forcing it into a consulting metaphor if they just wanted a human."
      ]
    },
    coaching: [
      "Be a person. Forced 'and that is just like consulting' punchlines feel canned.",
      "Still have a point of view. A hobby with no texture is a wasted 90 seconds.",
      "Do not use this slot to sneak in another resume bullet you forgot."
    ]
  },
  {
    id: "specific-resume-bullet",
    category: "trajectory",
    prompt: "You wrote that you 'cut ED boarding 18% in a 6-week pilot.' Walk me through that bullet.",
    aimSeconds: 90,
    skeleton: {
      headline: "Boarding was 6.4 hours. I showed it was delayed inpatient discharge, not ED staffing, and a two-week checklist on one unit got us to 18% lower boarding on that pathway.",
      beats: [
        "Situation: Intern on hospital ops. Scope started as a dashboard. Boarding was the metric the VP actually cared about.",
        "Task: The working theory in the building was 'we need more ED nurses.' Data were messy and the unit manager did not want a new process.",
        "Action: I split boarding into arrivals, bed assign, and discharge. Discharge-after-noon was the fat tail. I shadowed, built a 5-item checklist with the manager, and measured daily for two weeks.",
        "Result: Discharges before noon 28% to 51%. Boarding on that pathway 6.4 hours to 5.2, which is 18%. Not hospital-wide; I do not claim that. I keep bullets scoped to the pathway I actually moved. If they press, I can show the three-part tree and the one experiment."
      ]
    },
    coaching: [
      "Expect this on any quantified bullet. If you cannot defend the 18%, take it off the resume.",
      "Define the metric, the baseline, the action, and the boundary (one unit, not the system).",
      "Stay in I for your analysis and the manager for the operational yes."
    ]
  }
];
