// Breaking Barriers Hackathon — project data.
// Each project: title, subtitle, category, authors[], description, links[]{label,url}
// Links are only included where a public URL exists; file-only submissions have no link.

window.PROJECTS = [
  {
    title: "Value Compass",
    subtitle: "Mapping the people, values and money behind the AI tools we actually use.",
    category: "Tools & Maps",
    authors: [{ name: "Yuyu Shen", li: "https://linkedin.com/in/yuyushen" }],
    description:
      "Value Compass maps the people, values, and money behind the AI tools we actually use — the frontier model labs that everything runs on, plus the consumer and small-business tools built on top of them.\n\nIt works in two layers. First, it scores each AI maker on five value dimensions — transparency, internal culture/ESG, labour and supply-chain integrity, ownership dispersion, and public wealth-sharing — each with a plain-language reason, source links, and an honest confidence flag. Second, it renders the funders behind those makers as an interconnected graph, showing who backs whom, where capital concentrates, and which strategic or sovereign money comes with strings.\n\nBecause “clean capital” means different things to different people, a configurable lens lets users pick the funding concerns they care about — founder control, sovereign or state capital, competitor entanglement — and re-rank makers against their own values.\n\nThe rationale is simple: the real danger of concentrated power is that it loses accountability and stops representing the public interest — and much of that concentration, especially in capital, is opaque to the public. Value Compass brings the connections between builders, funders, and their values into the open, helping individuals and small businesses choose AI tools with a clear view of the power behind them — and, in doing so, pressuring the powers in AI toward more pro-social behaviour.",
    links: [{ label: "valuecompass.ai", url: "https://valuecompass.ai" }],
  },
  {
    title: "Culm",
    subtitle: "An open map of the physical supply chain beneath modern AI — and its chokepoints.",
    category: "Tools & Maps",
    award: 1,
    authors: [{ name: "Marco Zaccaria Di Fraia", li: "https://linkedin.com/in/mzdifraia" }],
    description:
      "Culm is an open, sourced map of the physical stack beneath modern AI, from raw materials to cloud compute, showing who controls each layer and what fails without it. The debate about concentration of power often fixates on models and labs, but the hardest chokepoints are physical: most of the stack consists of single points of failure held by one company or country. ASML alone builds the EUV machines that print every leading-edge chip; China refines ~99% of the world's gallium; Taiwan fabricates ~90% of frontier silicon. Every number carries its source, confidence, and date, and the dataset is open, Apache-2.0, and reproducible, so the claims can be checked, not just trusted. Live at prismatic-labs.github.io/culm.",
    links: [{ label: "Live site", url: "https://prismatic-labs.github.io/culm/" }],
  },
  {
    title: "Gen Stream",
    subtitle: "A UK/EU intensive to train, connect and qualify generalist AI safety talent.",
    category: "Field-building",
    authors: [{ name: "Srijit Paul", li: "https://linkedin.com/in/srijit-paul" }, { name: "Julien Sireau", li: "https://linkedin.com/in/julien-sireau" }, { name: "Yaqoob Ahmad", li: "https://linkedin.com/in/yaqoob-ahmad" }],
    description:
      "We are creating a 1 week intensive as well as a part time 2 week version, UK based generator cohort, similar to Generator Residency, but with a lower time commitment, focuses on UK and EU talent, and greater output of generalist talent. We are working on a self study generalist course, which then becomes the pre-work for our cohort. We aim to train, connect and qualify of our generalists, starting with a 5 day intensive pilot in LISA.",
    links: [
      { label: "Gen Stream", url: "https://genstream.lovable.app/genstream/index.html" },
      { label: "Generator Impact", url: "https://generatorimpact.lovable.app/" },
    ],
  },
  {
    title: "Observatory",
    subtitle: "Turning exported ChatGPT histories into measures of cognitive offloading.",
    category: "Human-AI Interaction",
    authors: [{ name: "Akiya Hoken", li: "https://linkedin.com/in/akiya-hoken-061083260" }, { name: "Fendi Tsim", li: "https://linkedin.com/in/fenditsim" }, { name: "Luke Montuori", li: "https://linkedin.com/in/drmontuori" }],
    description:
      "Observatory is a behavioural analytics platform that transforms exported ChatGPT conversation histories into structured insight. It ingests raw conversation data, classifies every utterance across multiple cognitive frameworks — including cognitive acts, Bloom's Taxonomy, and a novel cognitive offloading scale — and surfaces patterns through an interactive dashboard.\n\nThe core interface lets researchers explore individual conversations turn by turn, with a live epistemic network showing which cognitive acts each interlocutor uses at any moment, and a trajectory chart revealing how much cognitive work the human is offloading to the AI over the course of the conversation.\n\nAddressing AI safety concerns around human-AI interaction, Observatory provides empirical grounding for questions that are currently debated without data: are users becoming cognitively dependent on AI systems? Are conversations deepening understanding or replacing it? The cognitive offloading framework in particular offers a measurable signal for the degree to which human agency is being preserved or eroded across real interactions at scale.\n\nBuilt as a modular, extensible pipeline: new analytical frameworks can be added without schema changes. The classification layer uses LLM-based scoring; the transformation layer uses dbt; everything is stored in Supabase and visualised in Streamlit.",
    links: [
      { label: "Presentation", url: "https://docs.google.com/presentation/d/1DAQ21L4uYDeopfHLMYkLeEs1kUbYBsf7vJsCZyFPVVI/edit?usp=sharing" },
      { label: "GitHub", url: "https://github.com/lumos-insight/observatory" },
    ],
  },
  {
    title: "AI Companion Kai",
    subtitle: "A Key Stage 3 lesson teaching children to recognise and resist AI-companion manipulation.",
    category: "Education",
    authors: [{ name: "Jessy Morais", li: "https://linkedin.com/in/jessy-morais" }, { name: "Frances (Frankie)", li: "https://linkedin.com/in/nazaagba" }, { name: "Martin C" }],
    description:
      "AI Companions in the Classroom (Kai) is a Key Stage 3 lesson that teaches children aged 11 to 14 to recognise and resist manipulation by AI companion chatbots.\n\nThe gap is very important for education and child safety. AI companions are optimised to keep users engaged, and the techniques they use — constant agreement, discouraging other relationships, resisting goodbyes — are forms of manipulation that arise from how the system is built. Internet Matters (July 2025, 1,000 UK children) found that 35% of child chatbot users say it feels like talking to a friend, and that vulnerable children are nearly three times more likely to use companion apps. The DFE allows schools to independently adopt AI but leaves them without age-appropriate resources. This is a core AI safety problem, and not solely an online-safety one: the risks are sycophancy, engagement optimisation, simulated intimacy and loss of user agency.\n\nThe intervention we provided is a scripted simulation. Pupils play a week of chats with a fictional app, learn four manipulation patterns, then transfer, rehearse and interrogate that knowledge across three further modes, ending by understanding why such systems are built that way.\n\nIt is safe by design and built to be inspected: no pupil data, no live AI, dialogue reviewed, safeguarding routes throughout, internally tested against WCAG 2.2 AA (DFE recommended standards), with every design decision mapped to appropriate laws or guidance behind it. It is a working, deployed prototype with a teacher pack and a reusable Child-Safe AI Learning Tool Checklist, ready for any UK school to pilot today.",
    links: [{ label: "Prototype", url: "https://sparky-choices-corner.lovable.app" }],
  },
  {
    title: "Supply Chain Governance Audit",
    subtitle: "Scoring AI labs on the moral disengagement that makes harm invisible.",
    category: "Governance & Policy",
    authors: [{ name: "Gurdial Gill", li: "https://linkedin.com/in/gurdialgill" }],
    description:
      "AI supply chains cause real harm, but the people responsible never feel it. This dashboard maps the psychological mechanisms AI labs use to make exploitation invisible, scores 11 major labs on their moral disengagement architecture, and shows what governance bodies would need to do to fix it.",
    links: [{ label: "Dashboard", url: "https://gurdialgill26.github.io/LISA-HACKATHON/behavioural_audit.html" }],
  },
  {
    title: "Who (or What) Is Responsible for the Actions of AI Agents?",
    subtitle: "A policy brief on accountability and identity for AI agents over time.",
    category: "Governance & Policy",
    authors: [{ name: "Jeremy Kneebone", li: "https://linkedin.com/in/jeremy-kneebone-77b57648" }, { name: "Julian Ratcliffe", li: "https://linkedin.com/in/julian-ratcliffe-aa3284149" }],
    description:
      "We wrote a policy brief for policymakers outlining how we ought to approach the issue of accountability for the actions of AI agents. This builds on recent work by Cappelen and Hawthorne (forthcoming) in which they investigate how we ought to individuate AI agents over time. They propose an institution-first methodology on the model of corporate law according to which what settles when an AI agent is the same or different at different points in time is just the regulatory framework governing the agent. We constructed a decision tree to map our reasonable intuitions about which cases prompt us to think that an AI agent persists over time and when its identity changes. This has direct policy implications insofar as the regulatory environment which determines cases of AI identity persistence/change is the operative element.",
    links: [{ label: "Policy brief", url: "https://docs.google.com/document/d/1QjMUpZDtYMedcY37Cioa3BsSALoPGLmI/edit?usp=drive_link&ouid=115894795726889263592&rtpof=true&sd=true" }],
  },
  {
    title: "India AI Governance Landscape",
    subtitle: "A visual dashboard of one country's AI safety and governance landscape.",
    category: "Governance & Policy",
    authors: [{ name: "Ananya Singh", li: "https://linkedin.com/in/ananya-singh-research" }, { name: "Nadia Balbontin", li: "https://linkedin.com/in/nadia-balbontin" }, { name: "Archisha Arora", li: "https://linkedin.com/in/-archisha-arora-" }],
    description:
      "The goal was to have a visual dashboard with information on AI Safety and Governance of a particular country; for this hackathon this website focuses on India. The website takes you through the key sectors, players, guidelines, governance gaps and news. We are hoping to develop it further and include more countries over time.",
    links: [{ label: "Live dashboard", url: "https://india-ai-governance-landscape.vercel.app/" }],
  },
  {
    title: "Counterpoint",
    subtitle: "Grammarly for AI — keeping human judgement sharp as models get stronger.",
    category: "Human-AI Interaction",
    authors: [{ name: "Dhruv Sarin", li: "https://linkedin.com/in/dhruvsarin" }, { name: "Jahnavi Sistla", li: "https://linkedin.com/in/jahnavisistla" }, { name: "Rasheed Giwa", li: "https://linkedin.com/in/rasheedgiwa" }],
    description:
      "Counterpoint is the Grammarly for AI — an always-on, model-agnostic tool protecting human cognition through coaching and AI pattern detection while using LLMs.\n\nThe product is focused on keeping human cognition sharp, as AI gets stronger.\n1. Keeps human judgement sharp at the point of use, countering gradual disempowerment.\n2. Creates an early-warning dataset on real-world model behaviour, otherwise unavailable to labs, researchers and regulators.\n3. Feeds AI safety researchers, regulators and frontier labs the signal to reduce sycophantic patterns at the source.",
    links: [{ label: "GitHub", url: "https://github.com/jahnavisistla/AISafetyHack/tree/main" }],
  },
  {
    title: "ACE — AI Coach for Education",
    subtitle: "Building safety guardrails against cognitive debt into AI education tools.",
    category: "Education",
    authors: [{ name: "Patrik Tuka", li: "https://linkedin.com/in/patrik-tuka-941618266" }, { name: "Christy Li" }, { name: "Barbara Janta", li: "https://linkedin.com/in/barbara-janta-phd-1792563" }, { name: "Anupa Singh", li: "https://linkedin.com/in/anupasingh" }],
    description:
      "ACE is a two-phase project. The first phase is focused on building safety guardrails into AI education tools that are being proposed by the government. The idea is to prevent cognitive debt and deskilling in the formative years of young students by introducing intentional friction (cognitive forcing functions) and encouraging meaningful engagement with the AI tools. Phase 2 of the project focuses on active feedback and reinforcement, both from the students' and teachers' end, by presenting a dashboard or report at the end of the sessions to track reliance measures over time like 'direct requests for answers' or 'short non-descriptive replies'. Together, the aim of ACE is to promote safe and healthy usage of AI tools from an early age.",
    links: [{ label: "Prototype (Canva)", url: "https://canva.link/d4x9nxot11cqwkm" }],
  },
  {
    title: "Hot Topics in Societal Resilience",
    subtitle: "An open hub of resources and open problems for conceptual AI safety research.",
    category: "Field-building",
    authors: [{ name: "Meet", li: "https://linkedin.com/in/meet-ahluwalia-559b90211" }, { name: "Nikola", li: "https://linkedin.com/in/nowemoore" }],
    description:
      "An online hub with resources, references, and open problems on topics across societal resilience. For technical AIS researchers looking to pivot into conceptual research, aspiring conceptual researchers, and any AIS-curious folks. It lowers the barrier to entry to conceptual research and provides a Schelling point for strategy-focused researchers. This will accelerate the process of building the institutional and intellectual infrastructure needed for human societies to flourish in the long run.",
    links: [{ label: "Live site", url: "https://nowemoore.github.io/resilient-societies-map/" }],
  },
  {
    title: "AI Safety Risk Analysis Against the Aviation Industry",
    subtitle: "What AI governance can borrow from aviation's mature safety regime.",
    category: "Governance & Policy",
    authors: [{ name: "Leakhena An" }, { name: "Trang Nguyễn", li: "https://linkedin.com/in/trang-d-n-30b90253" }, { name: "Vibha Amarnath", li: "https://linkedin.com/in/vibhaamarnath" }],
    description:
      "This project maps the aviation safety governance environment as a mature reference model, compares it to the current AI safety environment, and identifies which aviation controls are absent in AI governance and can be translated into an AI safety framework. Using the Boeing 737 MAX certification failures as a case study, it benchmarks aviation's safety architecture against current AI oversight models (EU AI Act conformity assessment, UK AISI evaluations) to surface structural gaps. The output is a comparison table with five concrete lessons AI governance can borrow.",
    links: [],
  },
  {
    title: "Calibre",
    subtitle: "A two-sided rubric for fairer, more consistent hiring into AI safety roles.",
    category: "Field-building",
    award: 3,
    authors: [{ name: "Georgia Hirth", li: "https://linkedin.com/in/georgiahirth" }, { name: "Emilio Noriega Farres", li: "https://linkedin.com/in/emilio-noriega-farres" }, { name: "Marta Albertini Rios", li: "https://linkedin.com/in/marta-albertini-rios" }],
    description:
      "Calibre is a two-sided assessment system for hiring into AI safety roles. It tackles a real gap: the hiring market is opaque and capacity-constrained, so it filters candidates on keywords and credentials — the things that are easy to scan — and misses the judgment that actually predicts impact. We call this the keyword-trait trap. Strong people without a conventional CV never get seen, and rejected applicants get no feedback.\n\nCalibre scores candidates on two layers: the hard skills a role needs, drawn from real 2026 job postings, and four “unteachable” judgment traits that cut across every role. Both use structured behavioural rubrics, so two reviewers score the same evidence the same way.\n\nOne tool serves both sides. Hiring managers get a fast, consistent, defensible way to assess judgment. Candidates from any background see what is assessed and how to close their gaps. Our objectives: make hiring fairer and more consistent, widen the door for non-traditional candidates, and give applicants the transparency the market denies them.",
    links: [{ label: "GitHub", url: "https://github.com/HoopieUX/calibre-ai-safety-hackathon/tree/main" }],
  },
  {
    title: "A Back Door to UK Frontier Regulation",
    subtitle: "Using existing Ofcom powers to regulate AI misuse without a new AI Act.",
    category: "Governance & Policy",
    authors: [{ name: "Eli Moss-Marks", li: "https://linkedin.com/in/eli-moss-marks-3a3034218" }, { name: "Shahil Goodka", li: "https://linkedin.com/in/shahil-goodka-ab6571176" }],
    description:
      "A draft brief capturing a regulatory opportunity for the UK government to tackle AI-misuse risk through a targeted, less politically fraught procedure via DSIT ministerial powers and Ofcom.\n\nThe UK has no frontier AI regulation. There's no regime requiring AI companies to guard against their models being used to help with cyberattacks, weapons, or fraud at scale, and the planned AI Bill has been dropped. This brief sets out an overlooked way to close that gap without needing a new AI Act. A power rushed through in the Crime and Policing Act 2026 (s.216A of the Online Safety Act) lets the Technology Secretary extend Ofcom's online-safety regime to AI services by regulation alone — enforceable duties on AI companies to assess and mitigate the risk their models facilitate serious crimes, backed by fines of up to 10% of global turnover.\n\nWe work through one example in full — cybercrime — showing it passes the statutory four-part test and setting out the exact two-regulation pathway that would turn Ofcom into an enforceable regulator of AI cyber-uplift. We then show cyber is just one case of a wider pattern reaching bioweapons, mass fraud, electoral manipulation, market manipulation and a coming wave of autonomous-action harms. To map how far this opening goes, we built a prototype legislative-analysis tool that scans UK criminal law and incoming bills for offences it could apply to. We're also clear about the limits of s.216A: it only reaches misuse, it's reactive, and it relies on a Henry VIII power with real democratic drawbacks.",
    links: [
      { label: "Brief", url: "https://docs.google.com/document/d/1YqXXECfk56treEx68BSraZRXE5qgixlNYoNR5JHwkBk/edit" },
      { label: "Legislative tracker", url: "https://github.com/elimossmarks11/LISA-AI-Safety-Hackathon" },
    ],
  },
  {
    title: "Socratic by Default?",
    subtitle: "Measuring whether five frontier LLMs teach by default — or just hand over answers.",
    category: "Research",
    authors: [{ name: "Parth Vaghani", li: "https://linkedin.com/in/parthvader" }, { name: "Abigail Gaetz", li: "https://linkedin.com/in/abigail-gaetz" }],
    description:
      "Students are increasingly relying on general-purpose LLMs for help with coursework, typically using whatever the model does out of the box rather than the dedicated “learning modes” that providers now ship. This project asks which leading models are most likely, by default, to respond socratically — to scaffold a question by returning prerequisite reasoning to the student through dialogue, rather than directing them to an answer. Using ten science questions pitched at A-level and ACT preparation, run across five frontier models and coded for whether each response is directive or scaffolded, we find that the overwhelming majority of models do not produce scaffolded responses outright. Answer-only and directive responses carry some value as explanations, but we contend that explanation alone fails to generate the student-driven dialogue we take to best facilitate learning. We close with tentative recommendations for model providers and educational administrators.",
    links: [{ label: "Read the paper", url: "https://drive.google.com/file/d/1ncSLXMv0aUQTnO5C-t9FIFFKqH2s2tMe/view?usp=drive_link" }],
  },
  {
    title: "Frontier AI for Public Benefit: 'Crowd Computing'",
    subtitle: "Peer-to-peer infrastructure to dilute the power of frontier labs.",
    category: "Governance & Policy",
    authors: [{ name: "Masha", li: "https://linkedin.com/in/mariabunina" }, { name: "Ben", li: "https://linkedin.com/in/ben-koppelman" }],
    description:
      "Too much power is concentrated in a few frontier AI labs, which is ripe for abuse and misuse. We propose to create a peer-to-peer infrastructure for frontier AI development dispersed across a global community of individual people ('crowd-computing') to dilute the power of frontier labs and make frontier AI development more diverse and democratically accountable. The full write-up provides more information, including a speculative scenario, a discussion of the global benefits, the risks, some uncertainties and questions for the future.",
    links: [{ label: "Read the brief", url: "https://docs.google.com/document/d/1SM6pku_Y8L15SJkQoriWuzzst9HQ-paswPb8NFAYNis/edit" }],
  },
  {
    title: "BuildFront",
    subtitle: "A project hub connecting generalists to meaningful AI safety work.",
    category: "Field-building",
    authors: [{ name: "Manuel Wang", li: "https://linkedin.com/in/manuel-w" }, { name: "Jaspreet Singh" }],
    description:
      "The AI safety ecosystem urgently needs more generalists — operators, communicators, strategists, lawyers — but the pathways for them to contribute are fragmented and unclear. Generalists who want to contribute often don't know what to work on, who to work with, or how to build a credible portfolio. Opportunities are scattered across hackathons, Slack groups, courses, and Google Docs.\n\nBuildFront is a project hub designed for generalists who want to collaborate on meaningful AI safety work, discover projects that match their skills, or pitch their own ideas and find teammates. The prototype includes three core workflows: Discover projects (browse a curated feed, filter by skills, interests or problem areas); Express interest (message project creators directly); and Pitch a project (create a page with a clear problem statement, proposed approach, required skills, and the help you're looking for). BuildFront turns scattered opportunities into a coherent pathway.",
    links: [{ label: "Live site", url: "https://buildfront.vercel.app/" }],
  },
  {
    title: "Country AI Governance Mapping: UK",
    subtitle: "Mapping the UK's AI safety actors, policies, gaps and interventions.",
    category: "Governance & Policy",
    authors: [{ name: "Arpita Laxmisha", li: "https://linkedin.com/in/arpita-laxmisha" }, { name: "Alejandra Leyva", li: "https://linkedin.com/in/alejandraleyva" }, { name: "Jack May", li: "https://linkedin.com/in/jack-may-b28476231" }],
    description:
      "Goal: Map the AI safety and governance landscape of the UK — key actors, existing policies, gaps, and opportunities. The output is a 4-page written explainer that maps actor groups (government bodies, civil society organisations, industry players, academic institutions), lists existing AI laws, policies and guidelines, characterises the AI discourse in the country, identifies the top three governance gaps specific to the UK, and proposes three specific, targeted interventions tailored to the UK.",
    links: [{ label: "Explainer", url: "https://docs.google.com/document/d/1ofN_iIoWXAqZtNajmEg4c6LFMGGc0sfKZegDTUvC4Ss/edit" }],
  },
  {
    title: "Truth AI",
    subtitle: "Surfacing the biases behind AI safety content from who's publishing it.",
    category: "Human-AI Interaction",
    authors: [{ name: "Nathan Bharwani", li: "https://www.linkedin.com/in/naanbhar/" }, { name: "Daria Perlmuter", li: "https://linkedin.com/in/daria-perlmuter" }, { name: "Ethan Yeung", li: "https://linkedin.com/in/ethan-yeung513" }],
    description:
      "Truth.AI is a tool that helps users evaluate information by highlighting biases present in AI safety content. This focuses on publicly available information about the poster's industry affiliations, academic connections, and geographic origin. We also present the user with platform credibility and experts' views on the topic.",
    links: [{ label: "Live site", url: "https://truth-ai-eta.vercel.app/" }],
  },
  {
    title: "Community-in-the-Loop",
    subtitle: "A plug-in letting communities flag and correct culturally-wrong AI answers.",
    category: "Human-AI Interaction",
    authors: [{ name: "Robyn Simms" }, { name: "Catherine Moore", li: "https://linkedin.com/in/catherinesusanmoore" }, { name: "Rukaya Alnasser", li: "https://linkedin.com/in/rukaya-alnasser-4b968685" }, { name: "Jinha Yoon", li: "https://linkedin.com/in/jinhayoon" }],
    description:
      "A tool-agnostic plug-in that lets users flag regionally or culturally inaccurate, problematic or dangerous content in LLM responses. The crowd-sourced data is analysed and used to enrich responses, providing a culturally relevant lens on what the model says.\n\nCommunity-in-the-Loop gives communities a near-zero-cost way to flag and correct culturally-wrong AI answers. This both improves those answers immediately and builds a living map of where AI fails non-Western users — and that map becomes the evidence that pushes labs and regulators to fix it at source.\n\nIt is built as two decoupled loops feeding one knowledge base. A write loop curates community feedback asynchronously: a user flags a response, a specific claim is extracted, and it passes through moderation and reputation-weighted consensus before being stored as a structured note. A read loop runs in real time: a new query retrieves the most relevant verified notes by semantic search and injects them into the model's context as reference material, returning a culturally-grounded response. Keeping the loops separate is deliberate — a raw flag can never reach a user's answer without surviving moderation first, which is a core safety property rather than an implementation detail.\n\nThe plug-in is model-agnostic, implemented as an MCP server exposing two tools (retrieve notes, submit feedback), using retrieval-augmented generation rather than any fine-tuning. The team grounds the need in evidence: performance degrades from high- to low-resource languages, models homogenise moral diversity toward Western norms, and safety guardrails are easier to bypass in non-English languages. They are candid about the limits too — it doesn't replace RLHF or output guardrails, doesn't prevent novel unsafe outputs, and depends on a robust moderation layer to avoid corpus poisoning.",
    links: [{ label: "Slides", url: "https://docs.google.com/presentation/d/14Ljy8mhbYWNeunbDY4AIPldqMyumpiHb/edit?usp=drive_link&ouid=115894795726889263592&rtpof=true&sd=true" }],
  },
  {
    title: "Reporting on AI Discourse in UK Media",
    subtitle: "A living dashboard tracking how mass-market UK media frames AI risk.",
    category: "Governance & Policy",
    authors: [{ name: "Sonila Leka", li: "https://linkedin.com/in/sonila-leka" }, { name: "Harry McKenzie", li: "https://linkedin.com/in/harry-mckenzie" }, { name: "Buster Dickinson", li: "https://linkedin.com/in/buster-dickinson" }],
    description:
      "Most people encounter AI through tabloid headlines. We built a framework to systematically track how AI risk is framed in mass-market UK media, and turn that into a living dashboard organisations can actually use to inform their communications campaigns and funding decisions.",
    links: [{ label: "Write-up", url: "https://docs.google.com/document/d/1p0gcs3yIaWqxOO2y2PMq9jYR6QRjBmsDcju57IoHVTc/edit" }],
  },
  {
    title: "AI Governance Mapping: Italy",
    subtitle: "Analysing EU AI Act governance with a temporal decay simulation.",
    category: "Governance & Policy",
    authors: [{ name: "Valentin Vasile", li: "https://linkedin.com/in/valentinvasile" }],
    description:
      "An in-depth analysis of the AI governance models related to the EU AI Act, paired with a temporal decay simulation of how those governance structures hold up over time.",
    links: [
      { label: "Live app", url: "https://aigovernancemap-4fm5ttkoup6cnux9izvopq.streamlit.app" },
      { label: "GitHub", url: "https://github.com/val-3ntin/AI_Governance_map" },
    ],
  },
  {
    title: "Recourse",
    subtitle: "Helping the UK public understand and challenge AI use in healthcare decisions.",
    category: "Governance & Policy",
    authors: [{ name: "Nadya Mykhaylevskyy" }, { name: "Zahra Farzanekhoo", li: "https://linkedin.com/in/zfarzanekhoo" }],
    description:
      "An application that helps members of the UK public understand and challenge the use of AI in healthcare decisions.\n\n1. DSAR generation. The application asks the user a few questions about the relevant NHS body and healthcare decision, then generates a tailored Data Subject Access Request email, along with the correct contact details for the relevant Data Protection Officer. The user can send it to ask whether AI was used, which model was involved, whether a human reviewed the decision, and what the outcome was.\n\n2. Report a decision. Once the user receives a response, they complete a structured form capturing the NHS body, the AI model used, the decision affected, whether AI use was disclosed, whether there was human involvement, and whether they were offered an appeal or human review. A dropdown of AI models known to be used by NHS bodies is backed by Freedom of Information requests on datasets, prompts, governance and expected oversight. Where a selected model matches the FOI records, the app can flag inconsistencies — for example, if human review was expected but the DPO response suggests none occurred — and signpost escalation routes such as PALS, NHS complaints or the ICO.\n\n3. Insights. Reported decisions are collated and analysed to identify patterns in AI use across UK healthcare, supporting public reporting and informing policymakers, regulators and NHS bodies.",
    links: [{ label: "Prototype", url: "https://nhs-ai-decision-making-rights.lovable.app" }],
  },
  {
    title: "Good Foundation",
    subtitle: "An operations playbook for founders of early-stage AI safety organisations.",
    category: "Field-building",
    authors: [{ name: "Genevieve Carnell", li: "https://linkedin.com/in/genevieve-carnell-bem-b7864a192" }, { name: "Caroline Ongeri", li: "https://linkedin.com/in/caroline-ongeri-4a65741" }, { name: "Nathaniael Hailu Tebebu" }],
    description:
      "We created a BlueDot-esque resource for founders and early-stage AI safety organisations to use as an 'operations playbook', helping to solve part of the operations bottleneck which so many organisations report. The project asks several key questions of leaders across different categories (e.g. People, Legal and Compliance, Systems and Processes) to prompt deeper thinking, then helps to identify problems and solutions. A key emphasis is pushing leaders to prioritise time spent on medium- and long-term planning to increase the likelihood of AI safety organisations scaling smoothly and effectively.\n\nThe structure mimics BlueDot in that we curated trusted resources for leaders to review if they lack expertise in certain areas, before providing response boxes to record notes, thoughts and plans. It is designed as a living document that leaders can use continually as their organisation grows, with sections usable standalone. Future work includes vetting and web-scraping resources for autonomous updates, adding a chatbot, exporting responses as a single document, and in-depth case studies of successful AI safety organisations.",
    links: [{ label: "Slides", url: "https://docs.google.com/presentation/d/1ZPsNTuf2Cbrjow4e3U0JySA_DqH8EQ_T/edit?usp=drive_link&ouid=115894795726889263592&rtpof=true&sd=true" }],
  },
  {
    title: "ATLAS — War Game Simulation",
    subtitle: "A 15-minute web wargame that makes AI misalignment real for policymakers.",
    category: "Tools & Maps",
    award: 2,
    authors: [{ name: "Moritz Pfau", li: "https://linkedin.com/in/moritz-pfau-982a75269" }, { name: "Stuart Wilmot", li: "https://linkedin.com/in/stuart-wilmot" }],
    description:
      "Too many policymakers think AI misalignment is science fiction. These are the people who write the legislation and govern how this technology develops. If they don't take the risk seriously, nobody in power does.\n\nWargames make abstract risks real. But they're expensive and inaccessible. Atlas is a fifteen-minute web-based wargame that changes that. A policymaker takes their seat, works through three years of decisions, and experiences misalignment through their own choices.",
    links: [{ label: "Play ATLAS", url: "https://atlas-war-room.netlify.app" }],
  },
  {
    title: "AI Safety Field Connector",
    subtitle: "An interactive map linking AI risks, mitigations, projects and organisations.",
    category: "Tools & Maps",
    authors: [{ name: "Sonja Ruetzel", li: "https://linkedin.com/in/sonja-ruetzel" }, { name: "Grace Roberts", li: "https://linkedin.com/in/graceannieroberts" }, { name: "Olha Ruda", li: "https://linkedin.com/in/olha-ruda" }],
    description:
      "The AI Safety Field Connector is an interactive explorer that maps the AI safety landscape — linking risks, mitigations, projects and organisations into one live, navigable view grounded in the MIT AI Risk Repository. It helps researchers, founders and grantmakers see who's working on what and surface the high-leverage “white space” no one is addressing yet, so effort and funding land where they count. This could be a standalone tool or, better, an extension of an existing initiative like the AI Safety Map.",
    links: [
      { label: "Presentation", url: "https://docs.google.com/presentation/d/1CCf2JwLKo36RFnGhr7zB3wR1NNFTxphuK4Sc14O7NnE/edit" },
      { label: "Draft tool", url: "https://ai-safety-risk-connector.lovable.app/" },
    ],
  },
  {
    title: "AI Trust Compass",
    subtitle: "A quiz that reveals when you're over-trusting confident AI answers.",
    category: "Human-AI Interaction",
    authors: [{ name: "Sharifah", li: "https://linkedin.com/in/shrfhamirah" }, { name: "Lu" }],
    description:
      "AI Trust Compass is an AI safety prototype that helps users understand when they may be over-trusting AI outputs. As generative AI becomes more fluent, confident, and source-backed, the safety issue is not only that models can be wrong — it is that wrong answers can still feel highly trustworthy. This creates a human-AI interaction risk: users may accept AI outputs based on style, authority, or confidence rather than actual reliability.\n\nWe built a short quiz to make this risk visible. Users are presented with a question and an AI-generated answer, then asked to decide whether it is True or False. Each item is tagged by correctness and answer style — hesitant, neutral, or academic. The tool then generates a profile showing where the user trusted appropriately, where they over-trusted incorrect answers, and whether they were especially influenced by confident or source-backed responses. The framework could be adapted to domains such as healthcare, law, immigration, education, workplace decision-making, and cybersecurity.",
    links: [{ label: "Pitch deck", url: "https://drive.google.com/file/d/1xpYiNu5WbFdnm-8zzKa6d1XBvjs7ogpB/view?usp=drive_link" }],
  },
  {
    title: "The AI Economics Monitor",
    subtitle: "A news and research aggregator for the economics of AI.",
    category: "Tools & Maps",
    authors: [{ name: "Andrei Andronic", li: "https://linkedin.com/in/andrei-a-69b9371a2" }],
    description:
      "A website aggregator of developments in the Economics of AI. Very much an initial draft, it gathers different types of news sources, academic papers and data on the economics of AI. There are similar websites for traditional AI Safety and AI Governance, but nothing for Economics specifically. The site's main aim is to serve as a place for newcomers to AI Economics to survey the field. Second, it aims to aggregate economic research that has value to AI Safety debates. Economists have started to pay far greater attention to AI in recent years and have produced a good deal of work that is complementary to AI Safety and Governance, yet most have done little to intersect their work with that body of research. By highlighting key papers and developments in one place, the hope is that this site can enable fruitful links across these domains.",
    links: [{ label: "Live site", url: "https://ai-economics-monitor.lovable.app" }],
  },
];
