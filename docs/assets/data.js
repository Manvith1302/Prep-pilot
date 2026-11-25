// PrepPilot Comprehensive Data Vault
const COMPANIES = [
  {
    "id": "tcs",
    "name": "Tata Consultancy Services (TCS)",
    "short_name": "TCS",
    "badge": "TCS NQT",
    "color": "#1f4068",
    "accent": "#4a77d4",
    "tagline": "National Qualifier Test (NQT) - Ninja, Digital & Prime Cadres",
    "ctc_range": "3.6 LPA - 9.0 LPA",
    "eligibility": "60% or 6.0 CGPA throughout (10th, 12th, UG/PG), max 1 active backlog",
    "overview": "TCS recruits through the TCS National Qualifier Test (NQT). Candidates scoring high are offered Digital (7.0 LPA) or Prime (9.0 LPA) interviews, while qualifying scores receive Ninja (3.6 LPA) offers.",
    "rounds": [
      {
        "round_num": "01",
        "name": "TCS NQT Online Cognitive & Technical Assessment",
        "duration": "165 mins",
        "format": "Numerical Ability (20 Qs), Verbal Ability (25 Qs), Reasoning Ability (20 Qs), Advanced Technical/Coding (2 Coding Qs in C/C++/Java/Python).",
        "negative_marking": "No negative marking in cognitive; strict compiler test cases in coding."
      },
      {
        "round_num": "02",
        "name": "Technical Interview",
        "duration": "30 - 45 mins",
        "format": "Deep dive into your resume projects, core CS subjects (OOP, DBMS, OS, Data Structures), live coding / output prediction, and basic problem solving.",
        "negative_marking": "Evaluated on conceptual clarity, coding standards, and communication."
      },
      {
        "round_num": "03",
        "name": "Managerial & HR Round",
        "duration": "20 - 30 mins",
        "format": "Behavioral questions, willingness to relocate, shift flexibility, conflict resolution, situational scenarios, and verification of academic credentials.",
        "negative_marking": "Evaluated on culture fit, attitude, and adaptability."
      }
    ],
    "question_types": [
      {
        "category": "Numerical Ability (Aptitude)",
        "weightage": "30%",
        "focus_topics": "Percentages, Profit & Loss, Time & Work, Speed Distance Time, Simple & Compound Interest, Number Systems, Ratio & Proportion, Permutation & Combination.",
        "difficulty": "Medium to High",
        "sample_patterns": "Questions often involve data interpretation, multi-step word problems, and real-life commercial mathematics."
      },
      {
        "category": "Reasoning Ability (Logical)",
        "weightage": "25%",
        "focus_topics": "Syllogisms, Blood Relations, Coding-Decoding, Seating Arrangement (linear & circular), Direction Sense, Data Sufficiency.",
        "difficulty": "Medium",
        "sample_patterns": "Puzzles with multiple constraints and conditional logic deductions."
      },
      {
        "category": "Verbal Ability (English)",
        "weightage": "25%",
        "focus_topics": "Reading Comprehension, Spotting Errors / Sentence Correction, Para Jumbles, Vocabulary (Synonyms/Antonyms), Fill in the Blanks.",
        "difficulty": "Easy to Medium",
        "sample_patterns": "Grammar rules (subject-verb agreement, tenses, prepositions) and contextual vocabulary."
      },
      {
        "category": "Technical & Coding",
        "weightage": "20%",
        "focus_topics": "Data Structures (Arrays, Strings, HashMaps), Basic Math Algorithms, Sorting, C/Python syntax and pointer concepts.",
        "difficulty": "Medium to Hard",
        "sample_patterns": "1 easy-medium array/string problem and 1 dynamic programming / matrix manipulation problem."
      }
    ],
    "tips": [
      "TCS NQT has no negative marking, so attempt all cognitive questions before time runs out.",
      "In the coding section, ensure your code compiles and passes both public and hidden test cases.",
      "Brush up on basic DBMS queries (JOINs, GROUP BY) and Object-Oriented Programming concepts for the technical round.",
      "Be prepared to explain every single project and line of code mentioned on your resume."
    ]
  },
  {
    "id": "infosys",
    "name": "Infosys",
    "short_name": "Infosys",
    "badge": "InfyTQ / On-Campus",
    "color": "#007cc3",
    "accent": "#00a4e4",
    "tagline": "System Engineer (SE), Digital Specialist (DSE) & Specialist Programmer (SP)",
    "ctc_range": "3.6 LPA - 9.5 LPA",
    "eligibility": "60% or 6.5 CGPA in graduation, no active backlogs at the time of process",
    "overview": "Infosys tests problem-solving through mathematical ability, reasoning, verbal skills, and pseudocode analysis. High performers in coding competitions like HackWithInfy or InfyTQ qualify directly for Specialist Programmer roles.",
    "rounds": [
      {
        "round_num": "01",
        "name": "Infosys Online Assessment",
        "duration": "100 mins",
        "format": "Reasoning Ability (15 Qs / 25 mins), Technical Ability / Mathematical (10 Qs / 35 mins), Verbal Ability (20 Qs / 20 mins), Pseudocode (5 Qs / 10 mins), Numerical Puzzle Solving (4 Qs / 10 mins).",
        "negative_marking": "No negative marking; sectional cutoffs are strictly enforced."
      },
      {
        "round_num": "02",
        "name": "Technical + HR Combined Interview",
        "duration": "30 - 45 mins",
        "format": "Discussion of final year project, pseudocode evaluation, explanation of chosen programming language fundamentals, database schema design, and situational behavioral questions.",
        "negative_marking": "Evaluated on logical thought process and articulate communication."
      }
    ],
    "question_types": [
      {
        "category": "Mathematical Ability (Aptitude)",
        "weightage": "30%",
        "focus_topics": "Cryptarithmetic puzzles, Permutation & Combination, Probability, Time & Speed, Percentages, Allegations & Mixtures.",
        "difficulty": "Hard (High analytical depth)",
        "sample_patterns": "Unique cryptarithmetic letter-digit mapping questions (e.g., SEND + MORE = MONEY) and multi-step probability."
      },
      {
        "category": "Reasoning & Puzzles",
        "weightage": "30%",
        "focus_topics": "Data Sufficiency, Syllogisms, Critical Reasoning, Complex Seating Puzzles, Visual Reasoning, Pattern Completion.",
        "difficulty": "Medium to High",
        "sample_patterns": "Infosys places heavy emphasis on Data Sufficiency and Visual/Numerical grid puzzles."
      },
      {
        "category": "Verbal Ability",
        "weightage": "20%",
        "focus_topics": "Reading Comprehension, Sentence Correction, Theme Detection, Vocabulary, Para Completion.",
        "difficulty": "Medium",
        "sample_patterns": "Long passages testing fast comprehension and critical grammar nuances."
      },
      {
        "category": "Pseudocode & Code Logic",
        "weightage": "20%",
        "focus_topics": "Loop traces, recursion stack prediction, bitwise operations, algorithm tracing (sorting/searching), array indexing.",
        "difficulty": "Medium",
        "sample_patterns": "5-10 lines of pseudocode where you must predict the exact numeric console output."
      }
    ],
    "tips": [
      "Sectional cutoffs are mandatory: do not spend all your effort on one section while ignoring others.",
      "Practice Cryptarithmetic and Pseudocode tracing extensively, as they are unique to Infosys assessments.",
      "Be crystal clear on data structure operations (Linked lists, Binary Trees, Stacks) for DSE/SP interview rounds."
    ]
  },
  {
    "id": "accenture",
    "name": "Accenture",
    "short_name": "Accenture",
    "badge": "ASE / FSE",
    "color": "#a100ff",
    "accent": "#bf40bf",
    "tagline": "Associate Software Engineer (ASE) & Advanced ASE / Full Stack Engineer",
    "ctc_range": "4.5 LPA - 6.5 LPA",
    "eligibility": "65% or 6.5 CGPA in graduation, no backlogs, max 1 year gap in education",
    "overview": "Accenture follows an elimination-based recruitment pattern. Passing the Cognitive & Technical assessment unlocks the Coding round, which is followed by an automated Communication (Versant) test and an Interview.",
    "rounds": [
      {
        "round_num": "01",
        "name": "Cognitive & Technical Assessment",
        "duration": "90 mins",
        "format": "Cognitive: Critical Thinking (18 Qs), Abstract Reasoning (17 Qs), English Ability (15 Qs). Technical: Common Applications & MS Office (12 Qs), Pseudocode (18 Qs), Networking & Cloud Fundamentals (10 Qs).",
        "negative_marking": "No negative marking; sectional threshold required to unlock coding round immediately."
      },
      {
        "round_num": "02",
        "name": "Hands-on Coding Round",
        "duration": "45 mins",
        "format": "2 coding problems to be solved in C, C++, Java, or Python. Tests fundamentals of array operations, string processing, and mathematical transformations.",
        "negative_marking": "Both public and hidden test cases tested."
      },
      {
        "round_num": "03",
        "name": "Communication Assessment (Versant)",
        "duration": "20 mins",
        "format": "Reading sentences aloud, repeating sentences, answering conversational questions, sentence construction, and listening comprehension.",
        "negative_marking": "Evaluated on pronunciation, fluency, vocabulary, and grammar."
      },
      {
        "round_num": "04",
        "name": "Learning Agility & Technical Interview",
        "duration": "25 - 35 mins",
        "format": "Discussion on academic projects, scenario-based questions, problem solving, teamwork, and career aspirations.",
        "negative_marking": "Focus on clarity of thought and problem-solving mindset."
      }
    ],
    "question_types": [
      {
        "category": "Critical Thinking & Reasoning",
        "weightage": "25%",
        "focus_topics": "Abstract Reasoning, Analogies, Syllogisms, Flowcharts, Logical Sequence, Decision Making.",
        "difficulty": "Easy to Medium",
        "sample_patterns": "Diagrammatic visual sequences and conditional logical rules."
      },
      {
        "category": "English Ability",
        "weightage": "20%",
        "focus_topics": "Grammar, Prepositions, Subject-Verb Agreement, Active-Passive, Reading Passages, Synonyms.",
        "difficulty": "Easy to Medium",
        "sample_patterns": "Spot the error in bold phrases and fill in appropriate idioms/prepositions."
      },
      {
        "category": "Pseudocode & Tech Fundamentals",
        "weightage": "30%",
        "focus_topics": "Bitwise XOR/AND/OR logic, nested while/for loops, function recursion, MS Office shortcuts, cloud computing basics (IaaS/PaaS/SaaS).",
        "difficulty": "Medium",
        "sample_patterns": "Tricky bitwise operator expressions (e.g. `p = (p ^ q) + (r & p)`) inside loop counters."
      },
      {
        "category": "Hands-on Coding",
        "weightage": "25%",
        "focus_topics": "Array sum operations, string palindromes, finding pairs, basic matrix arithmetic.",
        "difficulty": "Medium",
        "sample_patterns": "Implementation-heavy problems where time complexity of O(N) or O(N log N) is expected."
      }
    ],
    "tips": [
      "Accenture's Pseudocode section is the deciding factor in clearing Stage 1. Practice bitwise operations thoroughly.",
      "Use a high-quality headset with minimal background noise during the automated Communication (Versant) assessment.",
      "Ensure you can explain cloud definitions (SaaS, PaaS, IaaS) and common networking protocols (HTTP, TCP, DNS)."
    ]
  },
  {
    "id": "wipro",
    "name": "Wipro",
    "short_name": "Wipro",
    "badge": "Elite NLTH / Turbo",
    "color": "#f37021",
    "accent": "#ff8c42",
    "tagline": "Elite National Talent Hunt (NLTH) & Turbo Hiring",
    "ctc_range": "3.5 LPA - 6.5 LPA",
    "eligibility": "60% or 6.0 CGPA throughout 10th, 12th and Engineering, max 1 active backlog",
    "overview": "Wipro conducts the Elite NLTH assessment consisting of Aptitude, Verbal, Logical, Essay Writing (Written Communication Test), and Coding.",
    "rounds": [
      {
        "round_num": "01",
        "name": "Online Assessment (AMCAT Platform)",
        "duration": "128 mins",
        "format": "Aptitude: Quantitative (16 Qs / 16 mins), Logical (14 Qs / 14 mins), Verbal (18 Qs / 18 mins). Written Communication Test: Essay (20 mins). Online Coding: 2 problems (60 mins).",
        "negative_marking": "Adaptive test; cannot revisit skipped questions."
      },
      {
        "round_num": "02",
        "name": "Technical Interview",
        "duration": "30 mins",
        "format": "Questions on C/C++/Java/Python, Data Structures, Database Normalization, SQL queries, and project execution details.",
        "negative_marking": "Evaluated on foundational clarity and coding logic."
      },
      {
        "round_num": "03",
        "name": "HR Interview",
        "duration": "15 - 20 mins",
        "format": "Company background, role expectations, relocation flexibility, work environment adaptation, and strength/weakness analysis.",
        "negative_marking": "Evaluated on interpersonal behavior and readiness to join."
      }
    ],
    "question_types": [
      {
        "category": "Quantitative Ability",
        "weightage": "25%",
        "focus_topics": "HCF/LCM, Divisibility Rules, Profit & Loss, Simple & Compound Interest, Logarithms, Time & Distance.",
        "difficulty": "Medium",
        "sample_patterns": "Questions hosted on AMCAT engine; difficulty adapts based on your previous answers."
      },
      {
        "category": "Logical Reasoning",
        "weightage": "25%",
        "focus_topics": "Deductive Reasoning, Blood Relations, Direction Sense, Coding-Decoding, Selection Decisions.",
        "difficulty": "Medium",
        "sample_patterns": "Statements with premises and deductive conclusions."
      },
      {
        "category": "Verbal Ability & Essay",
        "weightage": "25%",
        "focus_topics": "Grammar, Synonyms/Antonyms, Sentence Ordering, Reading Comprehension, 200-400 word formal essay writing.",
        "difficulty": "Medium",
        "sample_patterns": "Essay tested by automated AI evaluator for grammar, spelling, and topical structure."
      },
      {
        "category": "Programming & Coding",
        "weightage": "25%",
        "focus_topics": "Array manipulation, string parsing, sorting, number theory (primes, factors).",
        "difficulty": "Easy to Medium",
        "sample_patterns": "1 easy pattern/array problem and 1 medium algorithmic problem."
      }
    ],
    "tips": [
      "Because AMCAT is an adaptive test, answer the first 5-8 questions in each section with extreme care to maintain a high difficulty tier.",
      "In the essay round, write between 250 to 350 words with proper paragraphs, and avoid abbreviations or informal slang.",
      "Review basic SQL joins and indexing before the technical interview."
    ]
  },
  {
    "id": "cognizant",
    "name": "Cognizant",
    "short_name": "Cognizant",
    "badge": "GenC / GenC Next",
    "color": "#1155cc",
    "accent": "#2a75d3",
    "tagline": "GenC (4.0 LPA), GenC Elevate (4.5 LPA) & GenC Next (6.75 LPA)",
    "ctc_range": "4.0 LPA - 6.75 LPA",
    "eligibility": "60% throughout academics, no active backlogs, open to all circuit and non-circuit branches",
    "overview": "Cognizant tests candidates through Aptitude, Analytical Ability, and Verbal skills for GenC, while GenC Next adds Advanced Coding, Data Structures, and Algorithm Design.",
    "rounds": [
      {
        "round_num": "01",
        "name": "Cognitive & Analytical Assessment",
        "duration": "80 mins",
        "format": "Quantitative Ability (25 Qs / 35 mins), Logical Reasoning (20 Qs / 25 mins), Verbal Ability (20 Qs / 20 mins).",
        "negative_marking": "No negative marking; sectional cutoffs apply."
      },
      {
        "round_num": "02",
        "name": "Technical Assessment (GenC Elevate / Next)",
        "duration": "90 mins",
        "format": "Code debugging (7 Qs), algorithmic problem solving (2 Qs), and database query tasks.",
        "negative_marking": "Evaluated on test case pass percentage and code efficiency."
      },
      {
        "round_num": "03",
        "name": "Technical & HR Interview",
        "duration": "30 - 40 mins",
        "format": "Discussion on programming language fundamentals, database normalization, web concepts, problem-solving, and culture fit.",
        "negative_marking": "Focus on real-world application of engineering concepts."
      }
    ],
    "question_types": [
      {
        "category": "Quantitative Ability",
        "weightage": "30%",
        "focus_topics": "Numbers, Percentages, Profit & Loss, Speed & Distance, Geometry & Mensuration, Probability.",
        "difficulty": "Medium",
        "sample_patterns": "Time-sensitive arithmetic calculations."
      },
      {
        "category": "Logical & Analytical",
        "weightage": "30%",
        "focus_topics": "Data Interpretation (Bar/Pie charts), Syllogisms, Coding-Decoding, Arrangements, Direction Sense.",
        "difficulty": "Medium",
        "sample_patterns": "Table and chart interpretation sets with 3-4 linked questions."
      },
      {
        "category": "Verbal Ability",
        "weightage": "20%",
        "focus_topics": "Vocabulary, Sentence Completion, Error Spotting, Reading Passages, Idioms.",
        "difficulty": "Easy to Medium",
        "sample_patterns": "Grammar checking and contextual word placement."
      },
      {
        "category": "Technical & Debugging",
        "weightage": "20%",
        "focus_topics": "Finding bugs in C/Java code snippets (syntax, logic, boundary condition errors), Big-O analysis.",
        "difficulty": "Medium",
        "sample_patterns": "Short code with intentional off-by-one or pointer errors to fix."
      }
    ],
    "tips": [
      "In the debugging round, look carefully for loop termination conditions, integer overflows, and variable initialization.",
      "Practice fast calculation techniques for Data Interpretation tables and charts.",
      "Be prepared to write code on paper or in a plain notepad editor during the technical interview."
    ]
  },
  {
    "id": "amazon",
    "name": "Amazon",
    "short_name": "Amazon",
    "badge": "SDE-1 / Support",
    "color": "#ff9900",
    "accent": "#146eb4",
    "tagline": "Software Development Engineer (SDE-1) & Cloud Support Associate",
    "ctc_range": "16.0 LPA - 44.0 LPA",
    "eligibility": "65% or 6.5 CGPA, B.Tech/M.Tech in CS/IT/ECE or related fields",
    "overview": "Amazon has one of the most rigorous hiring bars in the industry, focusing intensely on Data Structures, Algorithms, System Design fundamentals, and the 16 Amazon Leadership Principles.",
    "rounds": [
      {
        "round_num": "01",
        "name": "Online Assessment (OA1 & OA2)",
        "duration": "105 mins",
        "format": "Coding Challenge (2 LeetCode Medium/Hard DSA problems in 70 mins) + Work Style Assessment / Leadership simulation (35 mins).",
        "negative_marking": "Strict time and space complexity limits; all hidden test cases must pass."
      },
      {
        "round_num": "02",
        "name": "Technical Rounds (R1 & R2)",
        "duration": "60 mins each",
        "format": "Live coding with senior Amazon engineers: Trees, Graphs, Dynamic Programming, Heaps, HashMaps, and Space/Time complexity trade-offs.",
        "negative_marking": "Every round incorporates at least 20 minutes of Leadership Principle questions."
      },
      {
        "round_num": "03",
        "name": "Bar Raiser Interview",
        "duration": "60 mins",
        "format": "Conducted by an independent Amazonian to ensure the candidate exceeds the hiring bar: complex problem solving, low-level design, and deep behavioral grilling using the STAR method.",
        "negative_marking": "The Bar Raiser has absolute veto power."
      }
    ],
    "question_types": [
      {
        "category": "Data Structures & Algorithms",
        "weightage": "50%",
        "focus_topics": "Binary Trees, BST, Graphs (BFS/DFS, Dijkstra), Dynamic Programming, Heaps, Sliding Window, Two Pointers.",
        "difficulty": "Hard",
        "sample_patterns": "Standard LeetCode Medium/Hard problems with clean modular code and optimal complexity."
      },
      {
        "category": "System Design & Core CS",
        "weightage": "20%",
        "focus_topics": "Object-Oriented Design (Parking Lot, Elevator, Chess), DBMS indexing, Concurrency & Threads, OS Paging.",
        "difficulty": "Medium to Hard",
        "sample_patterns": "Design scalable classes with proper design patterns (Factory, Singleton, Observer)."
      },
      {
        "category": "Leadership Principles (Behavioral)",
        "weightage": "30%",
        "focus_topics": "Customer Obsession, Ownership, Bias for Action, Deliver Results, Dive Deep, Earn Trust, Have Backbone; Disagree and Commit.",
        "difficulty": "Critical",
        "sample_patterns": "Questions like 'Tell me about a time you had a conflict with a teammate' or 'Tell me about a project that failed.'"
      }
    ],
    "tips": [
      "Never jump straight into coding: clarify requirements, state edge cases, discuss your approach, and analyze time/space complexity before writing a single line.",
      "Frame every behavioral answer using the STAR format (Situation, Task, Action, Result) with quantifiable metrics.",
      "Write clean, production-grade variable names and modular helper functions."
    ]
  },
  {
    "id": "capgemini",
    "name": "Capgemini",
    "short_name": "Capgemini",
    "badge": "Exceller",
    "color": "#0070ad",
    "accent": "#0099cc",
    "tagline": "Capgemini Exceller Campus Recruitment",
    "ctc_range": "4.0 LPA - 7.5 LPA",
    "eligibility": "60% or 6.0 CGPA throughout 10th, 12th, and Diploma/Graduation",
    "overview": "Capgemini conducts a unique multi-stage assessment including Pseudocode, English Communication, Game-based Aptitude, and Behavioral Profiling before the technical interview.",
    "rounds": [
      {
        "round_num": "01",
        "name": "Technical Assessment (Pseudocode)",
        "duration": "30 mins",
        "format": "30 multiple-choice pseudocode questions testing algorithms, data structures, recursion, and bitwise operations.",
        "negative_marking": "Elimination round; required to qualify for subsequent stages."
      },
      {
        "round_num": "02",
        "name": "English Communication Test",
        "duration": "30 mins",
        "format": "30 multiple-choice questions on grammar, reading comprehension, vocabulary, and sentence construction.",
        "negative_marking": "Elimination round."
      },
      {
        "round_num": "03",
        "name": "Game-Based Aptitude & Behavioral Test",
        "duration": "24 mins",
        "format": "4 cognitive mini-games evaluating working memory, spatial reasoning, planning, and focus under pressure.",
        "negative_marking": "Evaluates cognitive agility and personality fit."
      },
      {
        "round_num": "04",
        "name": "Technical & HR Interview",
        "duration": "30 mins",
        "format": "Questions on C, Java, Python, SQL, project architecture, and teamwork.",
        "negative_marking": "Evaluated on core engineering knowledge and adaptability."
      }
    ],
    "question_types": [
      {
        "category": "Pseudocode",
        "weightage": "40%",
        "focus_topics": "Nested loops, recursion, bitwise operations (AND, OR, XOR), array operations, tree traversals.",
        "difficulty": "Medium to High",
        "sample_patterns": "Evaluating variable states after intricate nested loops and conditional statements."
      },
      {
        "category": "English Communication",
        "weightage": "30%",
        "focus_topics": "Prepositions, Articles, Error Spotting, Direct/Indirect speech, Active/Passive voice, Vocabulary.",
        "difficulty": "Easy to Medium",
        "sample_patterns": "Finding grammatically incorrect phrases in corporate email excerpts."
      },
      {
        "category": "Game-Based Cognitive",
        "weightage": "30%",
        "focus_topics": "Pattern matching, grid memorization, inductive reasoning, arrow tracking, balloon risk evaluation.",
        "difficulty": "Dynamic",
        "sample_patterns": "Interactive memory and reaction tests measuring executive function."
      }
    ],
    "tips": [
      "The Pseudocode round is the primary barrier where most candidates fail: practice tracing code on paper quickly.",
      "Stay calm during the game-based aptitude round; consistency and accuracy matter more than frantic clicking.",
      "Revise fundamental OOP concepts (Polymorphism, Inheritance, Encapsulation, Abstraction) for the interview."
    ]
  },
  {
    "id": "deloitte",
    "name": "Deloitte",
    "short_name": "Deloitte",
    "badge": "Analyst",
    "color": "#86bc25",
    "accent": "#000000",
    "tagline": "Associate Analyst & Technology Consulting",
    "ctc_range": "4.5 LPA - 8.0 LPA",
    "eligibility": "60% or 6.5 CGPA in graduation, no active backlogs",
    "overview": "Deloitte evaluates quantitative, logical, verbal, and technical aptitude followed by case-study based group discussions or technical and HR interviews.",
    "rounds": [
      {
        "round_num": "01",
        "name": "Deloitte Online Assessment",
        "duration": "75 mins",
        "format": "Quantitative Aptitude (14 Qs), Logical Reasoning (14 Qs), Verbal Ability (14 Qs), Computer Fundamentals (15 Qs).",
        "negative_marking": "No negative marking; strong sectional performance required."
      },
      {
        "round_num": "02",
        "name": "Versant English Assessment",
        "duration": "20 mins",
        "format": "Spoken English fluency, listening, sentence repeating, and comprehension.",
        "negative_marking": "Evaluated on voice modulation and grammar."
      },
      {
        "round_num": "03",
        "name": "Technical & Case Study Interview",
        "duration": "30 - 45 mins",
        "format": "Business case scenario, technical problem solving, SQL queries, system requirements analysis, and situational questions.",
        "negative_marking": "Evaluated on analytical reasoning and structured presentation."
      }
    ],
    "question_types": [
      {
        "category": "Quantitative Ability",
        "weightage": "25%",
        "focus_topics": "Profit & Loss, Percentages, Time & Work, Speed, Ratio & Proportion, Probability.",
        "difficulty": "Medium",
        "sample_patterns": "Business arithmetic and data-driven word problems."
      },
      {
        "category": "Logical Reasoning",
        "weightage": "25%",
        "focus_topics": "Data Arrangements, Syllogisms, Blood Relations, Data Sufficiency, Critical Reasoning.",
        "difficulty": "Medium",
        "sample_patterns": "Complex seating arrangements and premise-conclusion logic."
      },
      {
        "category": "Computer Fundamentals",
        "weightage": "25%",
        "focus_topics": "DBMS & SQL, Operating Systems, Computer Networks, Software Engineering Lifecycle (SDLC, Agile).",
        "difficulty": "Medium",
        "sample_patterns": "SQL query outputs, ACID properties, TCP/IP vs OSI model, Agile methodologies."
      },
      {
        "category": "Verbal Ability",
        "weightage": "25%",
        "focus_topics": "Reading Comprehension, Sentence Completion, Spotting Errors, Para Jumbles.",
        "difficulty": "Medium",
        "sample_patterns": "Business communication comprehension passages."
      }
    ],
    "tips": [
      "Deloitte places high value on professional communication and structured problem solving.",
      "Review SDLC models (Agile, Waterfall) and database concepts (Primary/Foreign keys, Normalization) thoroughly.",
      "In case study questions, structure your thoughts with: Problem -> Assumptions -> Proposed Solutions -> Trade-offs."
    ]
  },
  {
    "id": "zoho",
    "name": "Zoho",
    "short_name": "Zoho",
    "badge": "Software Developer",
    "color": "#e42528",
    "accent": "#0083cb",
    "tagline": "Software Developer, QA Engineer & Technical Support",
    "ctc_range": "5.5 LPA - 10.0 LPA",
    "eligibility": "No percentage cutoff; open to all degrees and branches with genuine coding passion",
    "overview": "Zoho has a distinctive campus hiring process that emphasizes raw coding ability, algorithmic thinking, and system building rather than traditional resume qualifications.",
    "rounds": [
      {
        "round_num": "01",
        "name": "Round 1: General Aptitude & C/Java Output Tracing",
        "duration": "90 mins",
        "format": "Basic Quantitative Aptitude (15 Qs) and Tricky C/Java Output Prediction Snippets (15 Qs - pointers, recursion, memory management).",
        "negative_marking": "Pen-and-paper or online; high cutoff on code output questions."
      },
      {
        "round_num": "02",
        "name": "Round 2: Basic Programming (5 Problems)",
        "duration": "180 mins",
        "format": "Pattern printing, matrix rotation, string manipulation, sorting algorithms, and number series without using built-in libraries.",
        "negative_marking": "Must solve at least 3-4 problems completely with all test cases."
      },
      {
        "round_num": "03",
        "name": "Round 3: Advanced Programming (Application Development)",
        "duration": "150 mins",
        "format": "Building a working mini-application (e.g. Railway Reservation System, Banking Application, Snake Game, Splitwise clone) with CLI menu and data structures.",
        "negative_marking": "Evaluated on OOP design, modularity, edge cases, and working features."
      },
      {
        "round_num": "04",
        "name": "Technical & HR Interview",
        "duration": "45 mins",
        "format": "Code review of your Round 3 application, data structure questions, puzzle solving, and culture fit.",
        "negative_marking": "Focus on curiosity, attitude, and learning speed."
      }
    ],
    "question_types": [
      {
        "category": "C/Java Output Prediction",
        "weightage": "35%",
        "focus_topics": "Pointer arithmetic, dynamic memory (malloc/calloc), precedence of operators, recursion stack, string termination.",
        "difficulty": "Hard",
        "sample_patterns": "Tricky pointer dereferences like `*ptr++` vs `++*ptr`, macro expansions, and static variable scopes."
      },
      {
        "category": "Basic Problem Solving",
        "weightage": "35%",
        "focus_topics": "Look-and-say sequence, pattern generation, matrix spiral print, string encoding/decoding, sub-array sums.",
        "difficulty": "Medium",
        "sample_patterns": "Pure algorithmic logic implemented without using standard helper libraries."
      },
      {
        "category": "Application & OOP Design",
        "weightage": "30%",
        "focus_topics": "Class diagrams, modular functions, state management, array/list data manipulation in memory.",
        "difficulty": "Hard",
        "sample_patterns": "Designing a complete console-based booking or inventory management flow from scratch."
      }
    ],
    "tips": [
      "Zoho values hands-on coding over theory. Practice building console applications without using external libraries.",
      "Master pointer concepts in C and Object-Oriented design in Java/Python.",
      "Write clean, readable variable names and handle edge cases (empty inputs, out-of-bounds, invalid choices) diligently."
    ]
  }
];
const QUESTIONS = [
  {
    "category": "Aptitude",
    "topic": "Speed, Distance & Time",
    "difficulty": "Medium",
    "company": "TCS",
    "question": "A train 150 meters long passes an electric pole in 15 seconds and crosses another train of the same length travelling in the opposite direction in 10 seconds. What is the speed of the second train?",
    "option_a": "54 km/h",
    "option_b": "72 km/h",
    "option_c": "60 km/h",
    "option_d": "90 km/h",
    "answer": "B",
    "explanation": "Speed of train 1 = Distance / Time = 150m / 15s = 10 m/s. When crossing the second train in opposite directions, relative speed = (150 + 150) / 10 = 300 / 10 = 30 m/s. Relative speed = S1 + S2 = 10 + S2 = 30 m/s, so S2 = 20 m/s. In km/h: 20 * (18 / 5) = 72 km/h."
  },
  {
    "category": "Aptitude",
    "topic": "Time & Work",
    "difficulty": "Medium",
    "company": "Infosys",
    "question": "A can finish a work in 18 days and B can do the same work in 15 days. B worked for 10 days and left the job. In how many days can A alone finish the remaining work?",
    "option_a": "5 days",
    "option_b": "5.5 days",
    "option_c": "6 days",
    "option_d": "8 days",
    "answer": "C",
    "explanation": "Let total work = LCM(18, 15) = 90 units. Rate of A = 90 / 18 = 5 units/day. Rate of B = 90 / 15 = 6 units/day. Work done by B in 10 days = 10 * 6 = 60 units. Remaining work = 90 - 60 = 30 units. Time taken by A = 30 / 5 = 6 days."
  },
  {
    "category": "Aptitude",
    "topic": "Percentages",
    "difficulty": "Easy",
    "company": "Cognizant",
    "question": "If the price of sugar increases by 25%, by what percentage must a household reduce its consumption so that the total expenditure remains unchanged?",
    "option_a": "20%",
    "option_b": "25%",
    "option_c": "16.67%",
    "option_d": "30%",
    "answer": "A",
    "explanation": "Reduction percentage formula = [r / (100 + r)] * 100. Here r = 25%. Reduction = [25 / (100 + 25)] * 100 = (25 / 125) * 100 = 1/5 * 100 = 20%."
  },
  {
    "category": "Aptitude",
    "topic": "Profit & Loss",
    "difficulty": "Medium",
    "company": "TCS",
    "question": "A shopkeeper sells two articles at Rs. 990 each. On one he gains 10% and on the other he loses 10%. What is his overall gain or loss percentage?",
    "option_a": "No profit, no loss",
    "option_b": "1% gain",
    "option_c": "1% loss",
    "option_d": "2% loss",
    "answer": "C",
    "explanation": "When two items are sold at the same selling price with x% gain on one and x% loss on the other, there is always an overall loss given by (x / 10)^2 percent. Here (10 / 10)^2 = 1% loss."
  },
  {
    "category": "Aptitude",
    "topic": "Simple & Compound Interest",
    "difficulty": "Hard",
    "company": "Accenture",
    "question": "The difference between compound interest and simple interest on a certain sum for 2 years at 10% per annum is Rs. 65. What is the principal sum?",
    "option_a": "Rs. 6,000",
    "option_b": "Rs. 6,500",
    "option_c": "Rs. 7,000",
    "option_d": "Rs. 7,200",
    "answer": "B",
    "explanation": "For 2 years, Difference = P * (R / 100)^2. Here Difference = 65, R = 10%. So 65 = P * (10 / 100)^2 => 65 = P * (1 / 100) => P = 65 * 100 = Rs. 6,500."
  },
  {
    "category": "Aptitude",
    "topic": "Permutation & Combination",
    "difficulty": "Medium",
    "company": "Wipro",
    "question": "In how many different ways can the letters of the word 'LEADING' be arranged so that the vowels always come together?",
    "option_a": "360",
    "option_b": "480",
    "option_c": "720",
    "option_d": "5040",
    "answer": "C",
    "explanation": "In 'LEADING', vowels are E, A, I (3 vowels) and consonants are L, D, N, G (4 consonants). Treating the 3 vowels as one single unit gives 4 + 1 = 5 units. These 5 units can be arranged in 5! = 120 ways. Within the unit, the 3 vowels can be arranged in 3! = 6 ways. Total ways = 120 * 6 = 720."
  },
  {
    "category": "Aptitude",
    "topic": "Probability",
    "difficulty": "Medium",
    "company": "Infosys",
    "question": "Two dice are thrown simultaneously. What is the probability of getting two numbers whose product is even?",
    "option_a": "1/4",
    "option_b": "1/2",
    "option_c": "3/4",
    "option_d": "5/6",
    "answer": "C",
    "explanation": "Total possible outcomes = 6 * 6 = 36. The product is odd only if both dice show odd numbers (1, 3, or 5). Number of odd-odd outcomes = 3 * 3 = 9. So P(product is odd) = 9 / 36 = 1/4. Therefore, P(product is even) = 1 - 1/4 = 3/4."
  },
  {
    "category": "Aptitude",
    "topic": "Ratio & Proportion",
    "difficulty": "Easy",
    "company": "Capgemini",
    "question": "The ratio of boys and girls in a college of 720 students is 7:5. How many more girls should be admitted so that the ratio becomes 1:1?",
    "option_a": "90",
    "option_b": "120",
    "option_c": "150",
    "option_d": "180",
    "answer": "B",
    "explanation": "Total parts = 7 + 5 = 12. 1 part = 720 / 12 = 60. Boys = 7 * 60 = 420. Girls = 5 * 60 = 300. For a 1:1 ratio, number of girls must equal number of boys (420). Girls to be added = 420 - 300 = 120."
  },
  {
    "category": "Aptitude",
    "topic": "Averages & Ages",
    "difficulty": "Easy",
    "company": "Deloitte",
    "question": "The average age of 24 students and their teacher is 15 years. If the teacher's age is excluded, the average age decreases by 1 year. What is the age of the teacher?",
    "option_a": "38 years",
    "option_b": "39 years",
    "option_c": "40 years",
    "option_d": "42 years",
    "answer": "B",
    "explanation": "Total age of 25 persons (24 students + 1 teacher) = 25 * 15 = 375 years. When the teacher is excluded, remaining 24 students have average age = 15 - 1 = 14 years. Total age of 24 students = 24 * 14 = 336 years. Teacher's age = 375 - 336 = 39 years."
  },
  {
    "category": "Aptitude",
    "topic": "Mixtures & Alligations",
    "difficulty": "Medium",
    "company": "TCS",
    "question": "In what ratio must a grocer mix tea at Rs. 60 per kg and Rs. 65 per kg so that by selling the mixture at Rs. 68.20 per kg he may gain 10%?",
    "option_a": "3:2",
    "option_b": "3:4",
    "option_c": "3:5",
    "option_d": "4:5",
    "answer": "A",
    "explanation": "Selling price of mixture = Rs. 68.20 with 10% profit, so Cost Price of mixture = 68.20 / 1.10 = Rs. 62 per kg. By rule of alligation: (Price 1: 60, Price 2: 65, Mean: 62). Ratio = (65 - 62) / (62 - 60) = 3 / 2. Ratio is 3:2."
  },
  {
    "category": "Aptitude",
    "topic": "Number Systems",
    "difficulty": "Medium",
    "company": "Infosys",
    "question": "What is the remainder when (7^84) is divided by 342?",
    "option_a": "1",
    "option_b": "7",
    "option_c": "49",
    "option_d": "341",
    "answer": "A",
    "explanation": "Notice that 7^3 = 343 = 342 + 1. So 7^84 = (7^3)^28 = (342 + 1)^28. By the Binomial theorem, all terms except the last term (1^28) are multiples of 342. Thus remainder = 1^28 = 1."
  },
  {
    "category": "Aptitude",
    "topic": "Pipes & Cisterns",
    "difficulty": "Medium",
    "company": "Cognizant",
    "question": "Pipe A can fill a tank in 12 hours and Pipe B can empty it in 18 hours. If both pipes are opened together in an empty tank, how long will it take to fill completely?",
    "option_a": "24 hours",
    "option_b": "30 hours",
    "option_c": "36 hours",
    "option_d": "48 hours",
    "answer": "C",
    "explanation": "Net part filled per hour = (1/12) - (1/18) = (3 - 2) / 36 = 1/36. Therefore, the empty tank will be filled in 36 hours."
  },
  {
    "category": "Aptitude",
    "topic": "Time & Work",
    "difficulty": "Hard",
    "company": "Accenture",
    "question": "12 men or 18 women can do a piece of work in 14 days. In how many days will 8 men and 16 women finish the same work?",
    "option_a": "8 days",
    "option_b": "9 days",
    "option_c": "10 days",
    "option_d": "12 days",
    "answer": "B",
    "explanation": "12 men = 18 women => 1 man = 1.5 women. Thus, 8 men = 8 * 1.5 = 12 women. So 8 men + 16 women = 12 + 16 = 28 women. Using W1 * D1 = W2 * D2: 18 * 14 = 28 * D => D = (18 * 14) / 28 = 18 / 2 = 9 days."
  },
  {
    "category": "Aptitude",
    "topic": "Speed, Distance & Time",
    "difficulty": "Easy",
    "company": "Wipro",
    "question": "A person travels from city A to city B at a speed of 60 km/h and returns from B to A at 40 km/h. What is the average speed for the entire journey?",
    "option_a": "48 km/h",
    "option_b": "50 km/h",
    "option_c": "52 km/h",
    "option_d": "54 km/h",
    "answer": "A",
    "explanation": "When distances are equal, Average speed = (2 * S1 * S2) / (S1 + S2) = (2 * 60 * 40) / (60 + 40) = 4800 / 100 = 48 km/h."
  },
  {
    "category": "Aptitude",
    "topic": "Boats & Streams",
    "difficulty": "Medium",
    "company": "TCS",
    "question": "A boat can travel with a speed of 13 km/h in still water. If the speed of the stream is 4 km/h, find the time taken by the boat to go 68 km downstream.",
    "option_a": "3 hours",
    "option_b": "4 hours",
    "option_c": "5 hours",
    "option_d": "5.5 hours",
    "answer": "B",
    "explanation": "Speed downstream = Speed in still water + Speed of stream = 13 + 4 = 17 km/h. Time taken = Distance / Speed = 68 / 17 = 4 hours."
  },
  {
    "category": "Aptitude",
    "topic": "HCF & LCM",
    "difficulty": "Easy",
    "company": "Capgemini",
    "question": "The H.C.F. and L.C.M. of two numbers are 11 and 7700 respectively. If one of the numbers is 275, find the other number.",
    "option_a": "279",
    "option_b": "283",
    "option_c": "308",
    "option_d": "318",
    "answer": "C",
    "explanation": "Product of two numbers = HCF * LCM. Let the other number be X. 275 * X = 11 * 7700 => X = (11 * 7700) / 275 = 7700 / 25 = 308."
  },
  {
    "category": "Aptitude",
    "topic": "Logarithms",
    "difficulty": "Medium",
    "company": "Wipro",
    "question": "If log(x) + log(x - 3) = 1, what is the value of x (base 10)?",
    "option_a": "5",
    "option_b": "2",
    "option_c": "-2",
    "option_d": "10",
    "answer": "A",
    "explanation": "log(x * (x - 3)) = 1 => x(x - 3) = 10^1 = 10. Expanding: x^2 - 3x - 10 = 0 => (x - 5)(x + 2) = 0. Since log is defined only for positive numbers, x cannot be -2. Therefore, x = 5."
  },
  {
    "category": "Aptitude",
    "topic": "Geometry & Mensuration",
    "difficulty": "Medium",
    "company": "Infosys",
    "question": "The diagonal of a rectangle is 25 cm and its area is 168 cm^2. What is the perimeter of the rectangle?",
    "option_a": "56 cm",
    "option_b": "62 cm",
    "option_c": "70 cm",
    "option_d": "84 cm",
    "answer": "B",
    "explanation": "Let length = l, breadth = b. Given l^2 + b^2 = 25^2 = 625, and lb = 168. We know (l + b)^2 = (l^2 + b^2) + 2lb = 625 + 2(168) = 625 + 336 = 961. So (l + b) = sqrt(961) = 31 cm. Perimeter = 2(l + b) = 2 * 31 = 62 cm."
  },
  {
    "category": "Aptitude",
    "topic": "Percentages",
    "difficulty": "Medium",
    "company": "Amazon",
    "question": "In an examination, 70% of students passed in English, 65% passed in Mathematics, and 27% failed in both subjects. If 248 candidates passed in both subjects, what was the total number of candidates?",
    "option_a": "350",
    "option_b": "400",
    "option_c": "500",
    "option_d": "600",
    "answer": "B",
    "explanation": "Percentage failing in at least one subject = 100% - (passed both). Or: % failed in English = 30%, % failed in Maths = 35%, % failed both = 27%. Total % failing in at least one = 30 + 35 - 27 = 38%. Percentage passing in both = 100 - 38 = 62%. Given 62% of Total = 248 => Total = (248 * 100) / 62 = 400."
  },
  {
    "category": "Aptitude",
    "topic": "Clocks & Calendars",
    "difficulty": "Medium",
    "company": "Deloitte",
    "question": "What is the angle between the hour hand and the minute hand of a clock at 3:40?",
    "option_a": "120 degrees",
    "option_b": "130 degrees",
    "option_c": "140 degrees",
    "option_d": "150 degrees",
    "answer": "B",
    "explanation": "Angle formula = |(30 * H) - (11/2 * M)|. Here H = 3, M = 40. Angle = |(30 * 3) - (11/2 * 40)| = |90 - 220| = |-130| = 130 degrees."
  },
  {
    "category": "Aptitude",
    "topic": "Clocks & Calendars",
    "difficulty": "Easy",
    "company": "TCS",
    "question": "If 1st January 2007 was a Monday, what day of the week was 1st January 2008?",
    "option_a": "Monday",
    "option_b": "Tuesday",
    "option_c": "Wednesday",
    "option_d": "Sunday",
    "answer": "B",
    "explanation": "The year 2007 is an ordinary year (not a leap year), so it has 365 days = 52 weeks + 1 odd day. Therefore, the day advances by 1. Monday + 1 = Tuesday."
  },
  {
    "category": "Aptitude",
    "topic": "Profit & Loss",
    "difficulty": "Hard",
    "company": "Zoho",
    "question": "A dishonest dealer professes to sell his goods at cost price, but uses a weight of 900 grams for a 1 kg weight. Find his actual gain percentage.",
    "option_a": "10%",
    "option_b": "11.11%",
    "option_c": "12.5%",
    "option_d": "9.09%",
    "answer": "B",
    "explanation": "Gain percentage = [Error / (True Value - Error)] * 100 = [100g / (1000g - 100g)] * 100 = (100 / 900) * 100 = 100 / 9 = 11.11%."
  },
  {
    "category": "Reasoning",
    "topic": "Syllogisms",
    "difficulty": "Medium",
    "company": "TCS",
    "question": "Statements: (1) All mangoes are fruits. (2) Some fruits are sweet.\\nConclusions:\\nI. Some mangoes are sweet.\\nII. No mango is sweet.",
    "option_a": "Only conclusion I follows",
    "option_b": "Only conclusion II follows",
    "option_c": "Either I or II follows",
    "option_d": "Neither I nor II follows",
    "answer": "C",
    "explanation": "Since the middle term 'fruits' is not distributed in both premises, no definite conclusion can be drawn between mangoes and sweet. However, conclusion I ('Some mangoes are sweet') and conclusion II ('No mango is sweet') form a complementary pair (I and E type). Therefore, either I or II must follow."
  },
  {
    "category": "Reasoning",
    "topic": "Blood Relations",
    "difficulty": "Medium",
    "company": "Infosys",
    "question": "Pointing to a photograph of a boy, Suresh said, 'He is the only son of my mother.' How is Suresh related to that boy?",
    "option_a": "Brother",
    "option_b": "Father",
    "option_c": "Uncle",
    "option_d": "Himself",
    "answer": "D",
    "explanation": "Suresh's mother's only son is Suresh himself. Since the photograph is of that only son, the boy in the photograph is Suresh himself."
  },
  {
    "category": "Reasoning",
    "topic": "Blood Relations",
    "difficulty": "Hard",
    "company": "Cognizant",
    "question": "A is the father of C and D is the son of B. E is the brother of A. If C is the sister of D, how is B related to E?",
    "option_a": "Daughter",
    "option_b": "Sister-in-law",
    "option_c": "Sister",
    "option_d": "Wife",
    "answer": "B",
    "explanation": "A is the father of C and D. Since C and D are siblings, and D is the son of B, B must be the mother of C and D, and therefore B is the wife of A. E is the brother of A. Thus, B (A's wife) is E's sister-in-law."
  },
  {
    "category": "Reasoning",
    "topic": "Coding-Decoding",
    "difficulty": "Easy",
    "company": "Accenture",
    "question": "In a certain code language, 'SYSTEM' is written as 'SYSMET' and 'NEARER' is written as 'AENRER'. How is 'FRACTION' written in that code?",
    "option_a": "CARFNOIT",
    "option_b": "NOITCARF",
    "option_c": "CARFTINO",
    "option_d": "CRAFOITN",
    "answer": "A",
    "explanation": "Divide the 8-letter word 'FRACTION' into two halves of 4 letters each: 'FRAC' and 'TION'. Reverse the letters of each half: 'FRAC' reversed becomes 'CARF', and 'TION' reversed becomes 'NOIT'. Combining both yields 'CARFNOIT'."
  },
  {
    "category": "Reasoning",
    "topic": "Direction Sense",
    "difficulty": "Medium",
    "company": "Wipro",
    "question": "Rahul walks 30 meters towards North, then turns right and walks 40 meters. He then turns right and walks 20 meters, and again turns right and walks 40 meters. How far and in which direction is he from his original position?",
    "option_a": "10 meters North",
    "option_b": "10 meters South",
    "option_c": "20 meters North",
    "option_d": "50 meters East",
    "answer": "A",
    "explanation": "Vertical net displacement: 30m North - 20m South = 10m North. Horizontal net displacement: 40m East - 40m West = 0m. He is exactly 10 meters North of his starting point."
  },
  {
    "category": "Reasoning",
    "topic": "Seating Arrangement",
    "difficulty": "Medium",
    "company": "TCS",
    "question": "Five friends P, Q, R, S, and T are sitting facing North. S is between T and Q. Q is to the immediate left of R. P is to the immediate left of T. Who is sitting in the middle?",
    "option_a": "P",
    "option_b": "Q",
    "option_c": "S",
    "option_d": "T",
    "answer": "C",
    "explanation": "P is to the immediate left of T -> (P, T). S is between T and Q -> (P, T, S, Q). Q is to the immediate left of R -> (P, T, S, Q, R). The 5 positions from left to right are P, T, S, Q, R. S is exactly in the middle."
  },
  {
    "category": "Reasoning",
    "topic": "Number & Letter Series",
    "difficulty": "Medium",
    "company": "Capgemini",
    "question": "Find the next term in the series: 3, 12, 27, 48, 75, 108, ?",
    "option_a": "135",
    "option_b": "147",
    "option_c": "156",
    "option_d": "162",
    "answer": "B",
    "explanation": "Notice: 3 = 3 * 1^2, 12 = 3 * 2^2, 27 = 3 * 3^2, 48 = 3 * 4^2, 75 = 3 * 5^2, 108 = 3 * 6^2. The next term is 3 * 7^2 = 3 * 49 = 147."
  },
  {
    "category": "Reasoning",
    "topic": "Statement & Assumption",
    "difficulty": "Hard",
    "company": "Deloitte",
    "question": "Statement: 'Please consult a doctor before taking any sleeping pills.' - Notice on a medicine pack.\\nAssumptions:\\nI. People often take sleeping pills without medical advice.\\nII. Taking sleeping pills without consultation can be hazardous.",
    "option_a": "Only assumption I is implicit",
    "option_b": "Only assumption II is implicit",
    "option_c": "Neither I nor II is implicit",
    "option_d": "Both I and II are implicit",
    "answer": "D",
    "explanation": "A cautionary notice is placed because people tend to consume over-the-counter pills without guidance (Assumption I is implicit), and because unsupervised intake poses health hazards (Assumption II is implicit). Both are implicit."
  },
  {
    "category": "Reasoning",
    "topic": "Analogies",
    "difficulty": "Easy",
    "company": "Accenture",
    "question": "Odometer is to Mileage as Compass is to:",
    "option_a": "Speed",
    "option_b": "Hiking",
    "option_c": "Needle",
    "option_d": "Direction",
    "answer": "D",
    "explanation": "An odometer is an instrument used to measure mileage. Similarly, a compass is an instrument used to determine direction."
  },
  {
    "category": "Reasoning",
    "topic": "Venn Diagrams",
    "difficulty": "Easy",
    "company": "Cognizant",
    "question": "Which of the following diagrams best represents the relationship among: Musicians, Instrumentalists, and Pianists?",
    "option_a": "Three disjoint separate circles",
    "option_b": "Three concentric circles (Pianists inside Instrumentalists inside Musicians)",
    "option_c": "Two intersecting circles inside a third circle",
    "option_d": "Three mutually intersecting circles",
    "answer": "B",
    "explanation": "All pianists are instrumentalists, and all instrumentalists are musicians. Therefore, Pianists is a subset of Instrumentalists, which is a subset of Musicians. They form three concentric circles."
  },
  {
    "category": "Reasoning",
    "topic": "Odd One Out",
    "difficulty": "Easy",
    "company": "Wipro",
    "question": "Choose the number which does NOT belong to the group: 28, 65, 126, 215, 342",
    "option_a": "65",
    "option_b": "126",
    "option_c": "215",
    "option_d": "342",
    "answer": "C",
    "explanation": "Pattern: n^3 + 1. 28 = 3^3 + 1, 65 = 4^3 + 1, 126 = 5^3 + 1, 342 = 7^3 + 1. But 215 = 6^3 - 1 (216 - 1). Therefore, 215 is the odd one out."
  },
  {
    "category": "Reasoning",
    "topic": "Data Sufficiency",
    "difficulty": "Hard",
    "company": "Infosys",
    "question": "Question: Who among A, B, C, D and E is the tallest?\\nStatement I: D is taller than A and C, but shorter than B.\\nStatement II: E is shorter than B but taller than D.",
    "option_a": "Statement I alone is sufficient",
    "option_b": "Statement II alone is sufficient",
    "option_c": "Both statements I and II together are sufficient",
    "option_d": "Neither statement is sufficient",
    "answer": "C",
    "explanation": "From Statement I: B > D > (A, C). From Statement II: B > E > D. Combining both: B is taller than E, D, A, and C. Thus, B is definitely the tallest among all five. Both statements together are necessary and sufficient."
  },
  {
    "category": "Reasoning",
    "topic": "Cause & Effect",
    "difficulty": "Medium",
    "company": "TCS",
    "question": "Statement I: The municipal corporation announced a 20% water cut in the city for the next 3 days.\\nStatement II: A major pipeline burst occurred near the primary water reservoir yesterday.",
    "option_a": "Statement I is the cause and II is its effect",
    "option_b": "Statement II is the cause and I is its effect",
    "option_c": "Both statements are independent causes",
    "option_d": "Both statements are effects of independent causes",
    "answer": "B",
    "explanation": "The pipeline burst near the water reservoir (Statement II) is the direct cause that led the municipal corporation to announce the 20% water cut (Statement I)."
  },
  {
    "category": "Reasoning",
    "topic": "Mathematical Operations",
    "difficulty": "Easy",
    "company": "Capgemini",
    "question": "If '+' means '*', '-' means '/', '*' means '+', and '/' means '-', evaluate: 16 + 4 * 10 - 2 / 8",
    "option_a": "55",
    "option_b": "61",
    "option_c": "65",
    "option_d": "70",
    "answer": "B",
    "explanation": "Substitute symbols: 16 * 4 + 10 / 2 - 8. By BODMAS order: 10 / 2 = 5; 16 * 4 = 64; 64 + 5 - 8 = 69 - 8 = 61."
  },
  {
    "category": "Reasoning",
    "topic": "Critical Reasoning",
    "difficulty": "Hard",
    "company": "Amazon",
    "question": "In a company, all top performers receive bonuses. Some bonus recipients are promoted to managers. If Priya is a top performer, which of the following MUST be true?",
    "option_a": "Priya is promoted to manager",
    "option_b": "Priya receives a bonus",
    "option_c": "Priya will never be promoted",
    "option_d": "Priya is the head of the department",
    "answer": "B",
    "explanation": "Since ALL top performers receive bonuses, and Priya is a top performer, she must receive a bonus. Whether she is among the 'some' who are promoted to manager is possible but not guaranteed to be true."
  },
  {
    "category": "Verbal",
    "topic": "Vocabulary (Synonyms)",
    "difficulty": "Easy",
    "company": "TCS",
    "question": "Choose the word most nearly similar in meaning to 'PRAGMATIC':",
    "option_a": "Theoretical",
    "option_b": "Practical",
    "option_c": "Arrogant",
    "option_d": "Careless",
    "answer": "B",
    "explanation": "'Pragmatic' refers to dealing with things sensibly and realistically in a way that is based on practical rather than theoretical considerations. Synonym: Practical."
  },
  {
    "category": "Verbal",
    "topic": "Vocabulary (Antonyms)",
    "difficulty": "Easy",
    "company": "Infosys",
    "question": "Choose the word most nearly opposite in meaning to 'EPHEMERAL':",
    "option_a": "Fleeting",
    "option_b": "Transient",
    "option_c": "Permanent",
    "option_d": "Volatile",
    "answer": "C",
    "explanation": "'Ephemeral' means lasting for a very short time. 'Fleeting' and 'Transient' are synonyms. The antonym is 'Permanent'."
  },
  {
    "category": "Verbal",
    "topic": "Spotting Errors",
    "difficulty": "Medium",
    "company": "Cognizant",
    "question": "Identify the part of the sentence containing a grammatical error:\\n'Neither the manager (A) / nor the employees (B) / was present at (C) / the annual general meeting. (D)'",
    "option_a": "Neither the manager",
    "option_b": "nor the employees",
    "option_c": "was present at",
    "option_d": "the annual general meeting",
    "answer": "C",
    "explanation": "When two subjects are joined by 'neither... nor', the verb must agree in number with the closer subject. Here the closer subject is plural ('the employees'), so the verb must be 'were present', not 'was present'. Error is in part C."
  },
  {
    "category": "Verbal",
    "topic": "Spotting Errors",
    "difficulty": "Medium",
    "company": "Accenture",
    "question": "Identify the incorrect part:\\n'One of the most important factor (A) / for achieving success (B) / is maintaining consistent discipline (C) / over a long period. (D)'",
    "option_a": "One of the most important factor",
    "option_b": "for achieving success",
    "option_c": "is maintaining consistent discipline",
    "option_d": "over a long period",
    "answer": "A",
    "explanation": "The phrase 'One of the...' is always followed by a plural noun. It should be 'One of the most important factors', not 'factor'. Error is in part A."
  },
  {
    "category": "Verbal",
    "topic": "Sentence Completion / Fillers",
    "difficulty": "Medium",
    "company": "Wipro",
    "question": "Despite facing severe financial adversity, he _______ in his efforts to complete his higher education.",
    "option_a": "persisted",
    "option_b": "relented",
    "option_c": "hesitated",
    "option_d": "stagnated",
    "answer": "A",
    "explanation": "'Despite facing severe financial adversity' sets up a contrast showing perseverance. 'Persisted' (continued firmly in an action despite difficulty) fits logically and grammatically."
  },
  {
    "category": "Verbal",
    "topic": "Para Jumbles",
    "difficulty": "Hard",
    "company": "TCS",
    "question": "Rearrange the sentences into a coherent paragraph:\\nP: It enables machines to learn from empirical data.\\nQ: Artificial Intelligence has transformed modern industries.\\nR: Consequently, automated decision-making has become highly accurate.\\nS: Machine Learning serves as the primary engine behind this transformation.",
    "option_a": "Q - S - P - R",
    "option_b": "S - P - Q - R",
    "option_c": "Q - P - S - R",
    "option_d": "R - Q - S - P",
    "answer": "A",
    "explanation": "Q introduces the broad topic (AI transforming modern industries). S narrows it down to the engine behind it (Machine Learning). P explains what Machine Learning does (enables machines to learn from data). R provides the concluding result (automated decision-making becomes accurate). Order: Q - S - P - R."
  },
  {
    "category": "Verbal",
    "topic": "Idioms & Phrases",
    "difficulty": "Easy",
    "company": "Deloitte",
    "question": "What is the meaning of the idiom 'To burn the candle at both ends'?",
    "option_a": "To be very wasteful with money",
    "option_b": "To work exhaustingly hard from early morning until late night",
    "option_c": "To lose one's temper in public",
    "option_d": "To illuminate an entire room efficiently",
    "answer": "B",
    "explanation": "'To burn the candle at both ends' means to exhaust oneself by working or partying very hard from early in the morning until late at night without getting adequate rest."
  },
  {
    "category": "Verbal",
    "topic": "One Word Substitution",
    "difficulty": "Easy",
    "company": "Capgemini",
    "question": "Give one word for: 'A person who does not believe in the existence of God.'",
    "option_a": "Agnostic",
    "option_b": "Atheist",
    "option_c": "Altruist",
    "option_d": "Ascetic",
    "answer": "B",
    "explanation": "An 'Atheist' is someone who disbelieves or lacks belief in the existence of God. (An 'Agnostic' believes nothing is known about God's existence; an 'Altruist' is unselfishly concerned for others; an 'Ascetic' practices severe self-discipline)."
  },
  {
    "category": "Verbal",
    "topic": "Reading Comprehension",
    "difficulty": "Medium",
    "company": "Infosys",
    "question": "Passage: 'Renewable energy adoption has accelerated globally due to technological breakthroughs that have reduced the per-megawatt cost of solar and wind generation below that of fossil fuels. However, grid reliability requires substantial investments in energy storage and distributed transmission networks.'\\nWhat is the primary obstacle to fully relying on renewables mentioned in the passage?",
    "option_a": "Higher per-megawatt production costs compared to coal",
    "option_b": "Public resistance to wind turbines",
    "option_c": "Requirement of massive investments in storage and grid transmission",
    "option_d": "Total lack of technological breakthroughs",
    "answer": "C",
    "explanation": "The text states: 'However, grid reliability requires substantial investments in energy storage and distributed transmission networks', highlighting storage and transmission infrastructure as the primary challenge."
  },
  {
    "category": "Verbal",
    "topic": "Active & Passive Voice",
    "difficulty": "Medium",
    "company": "Cognizant",
    "question": "Convert into Passive Voice: 'The research team has published the groundbreaking findings.'",
    "option_a": "The groundbreaking findings were published by the research team.",
    "option_b": "The groundbreaking findings have been published by the research team.",
    "option_c": "The groundbreaking findings had been published by the research team.",
    "option_d": "The groundbreaking findings are being published by the research team.",
    "answer": "B",
    "explanation": "Present perfect tense ('has published') in active voice transforms to 'have/has been + past participle' in passive voice. Since 'the groundbreaking findings' is plural, the correct form is 'have been published'."
  },
  {
    "category": "Verbal",
    "topic": "Direct & Indirect Speech",
    "difficulty": "Medium",
    "company": "Wipro",
    "question": "Convert into Indirect Speech: Ananya said, 'I will complete the project by tomorrow.'",
    "option_a": "Ananya said that she will complete the project by tomorrow.",
    "option_b": "Ananya said that she would complete the project by the next day.",
    "option_c": "Ananya said that she would be completing the project tomorrow.",
    "option_d": "Ananya said that she had completed the project the previous day.",
    "answer": "B",
    "explanation": "In indirect speech, the reporting verb is in past tense ('said'), so 'will' changes to 'would', 'I' changes to 'she', and 'tomorrow' changes to 'the next day'."
  },
  {
    "category": "Verbal",
    "topic": "Spelling Correction",
    "difficulty": "Easy",
    "company": "Accenture",
    "question": "Select the correctly spelled word:",
    "option_a": "Conscientious",
    "option_b": "Conscensious",
    "option_c": "Conscientous",
    "option_d": "Conscintious",
    "answer": "A",
    "explanation": "The correct spelling is 'Conscientious' (wishing to do one's work or duty thoroughly and well)."
  },
  {
    "category": "Verbal",
    "topic": "Idioms & Phrases",
    "difficulty": "Medium",
    "company": "Amazon",
    "question": "Choose the correct meaning of 'To call a spade a spade':",
    "option_a": "To indulge in gardening",
    "option_b": "To speak frankly and directly without sugarcoating",
    "option_c": "To play cards skillfully",
    "option_d": "To be deceptive in negotiations",
    "answer": "B",
    "explanation": "'To call a spade a spade' means to describe something directly and truthfully, even if it is unpleasant or blunt."
  },
  {
    "category": "Programming",
    "topic": "Data Structures",
    "difficulty": "Easy",
    "company": "Amazon",
    "question": "What is the worst-case time complexity of searching for an element in a balanced Binary Search Tree (BST) with N nodes?",
    "option_a": "O(1)",
    "option_b": "O(log N)",
    "option_c": "O(N)",
    "option_d": "O(N log N)",
    "answer": "B",
    "explanation": "In a balanced BST (such as an AVL or Red-Black Tree), the height of the tree is bounded by O(log N). In each step of a search, half of the remaining sub-tree is eliminated, resulting in a worst-case time complexity of O(log N)."
  },
  {
    "category": "Programming",
    "topic": "Python Fundamentals",
    "difficulty": "Medium",
    "company": "TCS",
    "question": "What will be the output of the following Python snippet?\\n\\na = [1, 2, 3]\\nb = a\\nb.append(4)\\nprint(len(a))",
    "option_a": "3",
    "option_b": "4",
    "option_c": "TypeError",
    "option_d": "None",
    "answer": "B",
    "explanation": "In Python, lists are mutable objects. The assignment `b = a` assigns the reference of list `a` to `b` (no new copy is made). Appending 4 to `b` modifies the same underlying list in memory. Therefore, `len(a)` is 4."
  },
  {
    "category": "Programming",
    "topic": "C Language & Pointers",
    "difficulty": "Hard",
    "company": "Zoho",
    "question": "What is the output of the following C code snippet?\\n\\nint arr[] = {10, 20, 30, 40};\\nint *p = arr;\\nprintf(\"%d \", *(p++));\\nprintf(\"%d\", *p);",
    "option_a": "10 10",
    "option_b": "10 20",
    "option_c": "20 20",
    "option_d": "20 30",
    "answer": "B",
    "explanation": "The expression `*(p++)` dereferences the pointer before incrementing it due to post-increment postfix rules. So the first printf prints `arr[0]` which is 10. Then `p` points to `arr[1]`. The second printf prints `*p` which is 20. Output: 10 20."
  },
  {
    "category": "Programming",
    "topic": "DBMS & SQL",
    "difficulty": "Medium",
    "company": "Deloitte",
    "question": "Which SQL clause is used to filter records resulting from an aggregate function like SUM() or COUNT()?",
    "option_a": "WHERE",
    "option_b": "GROUP BY",
    "option_c": "HAVING",
    "option_d": "ORDER BY",
    "answer": "C",
    "explanation": "The WHERE clause cannot be used with aggregate functions because WHERE filters individual rows before aggregation occurs. The HAVING clause was added to SQL specifically to filter aggregated summary rows."
  },
  {
    "category": "Programming",
    "topic": "Object-Oriented Programming",
    "difficulty": "Easy",
    "company": "Infosys",
    "question": "Which OOP principle focuses on wrapping code and data together into a single unit while restricting direct access to internal details?",
    "option_a": "Inheritance",
    "option_b": "Polymorphism",
    "option_c": "Encapsulation",
    "option_d": "Abstraction",
    "answer": "C",
    "explanation": "Encapsulation is the mechanism that binds together code and the data it manipulates, and keeps both safe from outside interference and misuse (e.g. through private fields and public getters/setters)."
  },
  {
    "category": "Programming",
    "topic": "Operating Systems",
    "difficulty": "Medium",
    "company": "Cognizant",
    "question": "Which of the following is NOT one of Coffman's four necessary conditions for a Deadlock to occur?",
    "option_a": "Mutual Exclusion",
    "option_b": "Hold and Wait",
    "option_c": "Preemption allowed",
    "option_d": "Circular Wait",
    "answer": "C",
    "explanation": "The four Coffman conditions for deadlock are: (1) Mutual Exclusion, (2) Hold and Wait, (3) No Preemption (resources cannot be preempted), and (4) Circular Wait. Therefore, 'Preemption allowed' actually prevents deadlock, making C the correct answer."
  },
  {
    "category": "Programming",
    "topic": "Algorithms (Sorting)",
    "difficulty": "Medium",
    "company": "Accenture",
    "question": "Which of the following sorting algorithms has a guaranteed worst-case time complexity of O(N log N) and is stable?",
    "option_a": "Quick Sort",
    "option_b": "Heap Sort",
    "option_c": "Merge Sort",
    "option_d": "Selection Sort",
    "answer": "C",
    "explanation": "Merge Sort always divides the array into halves and merges in O(N), guaranteeing O(N log N) time in best, average, and worst cases. Additionally, standard Merge Sort preserves the relative order of equal elements (it is stable). Heap Sort is O(N log N) but not stable; Quick Sort has worst case O(N^2)."
  },
  {
    "category": "Programming",
    "topic": "Computer Networks",
    "difficulty": "Easy",
    "company": "Capgemini",
    "question": "At which OSI reference model layer does the Transmission Control Protocol (TCP) operate?",
    "option_a": "Network Layer",
    "option_b": "Transport Layer",
    "option_c": "Session Layer",
    "option_d": "Data Link Layer",
    "answer": "B",
    "explanation": "TCP and UDP are transport layer protocols that provide end-to-end communication services for applications."
  },
  {
    "category": "Programming",
    "topic": "Data Structures (Stacks & Queues)",
    "difficulty": "Easy",
    "company": "Wipro",
    "question": "Which data structure follows the Last-In-First-Out (LIFO) principle and is commonly used in function call call-stacks and undo mechanisms?",
    "option_a": "Queue",
    "option_b": "Stack",
    "option_c": "Linked List",
    "option_d": "Binary Tree",
    "answer": "B",
    "explanation": "A Stack operates on the LIFO (Last-In-First-Out) principle, where the most recently added item is the first one removed."
  },
  {
    "category": "Programming",
    "topic": "Java Fundamentals",
    "difficulty": "Medium",
    "company": "Infosys",
    "question": "In Java, what happens when you compare two String objects using the '==' operator?",
    "option_a": "It compares the character contents of both strings",
    "option_b": "It compares their memory references (object identity)",
    "option_c": "It causes a compilation error",
    "option_d": "It compares the string lengths",
    "answer": "B",
    "explanation": "In Java, the '==' operator compares whether two references point to the exact same memory location in the heap/pool. To compare the actual textual contents of two strings, the `.equals()` method must be used."
  },
  {
    "category": "Programming",
    "topic": "Data Structures",
    "difficulty": "Hard",
    "company": "Amazon",
    "question": "What is the average time complexity of inserting a key-value pair into a Hash Table that uses separate chaining?",
    "option_a": "O(1)",
    "option_b": "O(log N)",
    "option_c": "O(N)",
    "option_d": "O(N^2)",
    "answer": "A",
    "explanation": "With a good hash function that uniformly distributes keys across buckets, each bucket contains an average of O(1) elements (assuming constant load factor). Thus, insertion takes O(1) on average. (Worst case when all keys collide is O(N))."
  },
  {
    "category": "Programming",
    "topic": "Python Fundamentals",
    "difficulty": "Easy",
    "company": "TCS",
    "question": "What is the output of `[x**2 for x in range(5) if x % 2 == 1]` in Python?",
    "option_a": "[1, 4, 9]",
    "option_b": "[1, 9]",
    "option_c": "[0, 1, 4, 9, 16]",
    "option_d": "[1, 9, 25]",
    "answer": "B",
    "explanation": "`range(5)` generates numbers 0, 1, 2, 3, 4. The condition `x % 2 == 1` filters odd numbers: 1 and 3. The squares are 1^2 = 1 and 3^2 = 9. Output: [1, 9]."
  },
  {
    "category": "Programming",
    "topic": "DBMS & SQL",
    "difficulty": "Medium",
    "company": "Cognizant",
    "question": "Which Normal Form eliminates transitive functional dependency in relational database design?",
    "option_a": "First Normal Form (1NF)",
    "option_b": "Second Normal Form (2NF)",
    "option_c": "Third Normal Form (3NF)",
    "option_d": "Boyce-Codd Normal Form (BCNF)",
    "answer": "C",
    "explanation": "1NF removes repeating groups; 2NF removes partial dependency on composite candidate keys; 3NF removes transitive dependencies (where a non-prime attribute depends on another non-prime attribute)."
  },
  {
    "category": "Programming",
    "topic": "C++ Fundamentals",
    "difficulty": "Medium",
    "company": "Zoho",
    "question": "Which C++ keyword is used to declare a function in a base class that can be overridden in derived classes to achieve runtime polymorphism?",
    "option_a": "static",
    "option_b": "virtual",
    "option_c": "override",
    "option_d": "friend",
    "answer": "B",
    "explanation": "Declaring a member function with the `virtual` keyword instructs the compiler to use dynamic binding (via a vtable/vptr) so that the derived class's implementation is invoked at runtime."
  },
  {
    "category": "Programming",
    "topic": "Operating Systems",
    "difficulty": "Medium",
    "company": "Accenture",
    "question": "What phenomenon occurs when excessive page swapping causes an operating system to spend more time paging than executing actual instructions?",
    "option_a": "Spooling",
    "option_b": "Thrashing",
    "option_c": "Starvation",
    "option_d": "Segmentation fault",
    "answer": "B",
    "explanation": "Thrashing occurs when a computer's virtual memory subsystem is in a constant state of paging, rapidly exchanging data in memory for data on disk, degrading CPU performance to near zero."
  },
  {
    "category": "Aptitude",
    "topic": "Cryptarithmetic & Puzzles",
    "difficulty": "Hard",
    "company": "Infosys",
    "question": "In the cryptarithmetic addition: SEND + MORE = MONEY, each distinct letter represents a unique single digit from 0 to 9. What is the value of the letter M?",
    "option_a": "0",
    "option_b": "1",
    "option_c": "2",
    "option_d": "9",
    "answer": "B",
    "explanation": "In the 4-digit addition SEND + MORE = MONEY, the sum produces a 5-digit number MONEY. The carry-over from adding two 4-digit numbers can at most be 1. Since M is the leading digit of the sum, M cannot be 0, so M must be 1."
  },
  {
    "category": "Aptitude",
    "topic": "Probability",
    "difficulty": "Medium",
    "company": "TCS",
    "question": "A bag contains 6 black and 8 white balls. One ball is drawn at random. What is the probability that the ball drawn is white?",
    "option_a": "3/7",
    "option_b": "4/7",
    "option_c": "1/8",
    "option_d": "3/4",
    "answer": "B",
    "explanation": "Total balls = 6 + 8 = 14. White balls = 8. Probability = 8 / 14 = 4 / 7."
  },
  {
    "category": "Aptitude",
    "topic": "Simple Interest",
    "difficulty": "Easy",
    "company": "Cognizant",
    "question": "A sum of money doubles itself in 8 years at simple interest. What is the rate of interest per annum?",
    "option_a": "10%",
    "option_b": "12.5%",
    "option_c": "15%",
    "option_d": "16.67%",
    "answer": "B",
    "explanation": "Let principal = P. If it doubles, amount = 2P, so Simple Interest SI = P. SI = (P * R * T) / 100 => P = (P * R * 8) / 100 => R = 100 / 8 = 12.5% per annum."
  },
  {
    "category": "Aptitude",
    "topic": "Time & Work",
    "difficulty": "Medium",
    "company": "Deloitte",
    "question": "A and B together can do a piece of work in 12 days. B and C together can do it in 15 days. C and A together can do it in 20 days. In how many days can A, B, and C together finish the work?",
    "option_a": "8 days",
    "option_b": "10 days",
    "option_c": "12 days",
    "option_d": "15 days",
    "answer": "B",
    "explanation": "2(A + B + C)'s 1 day work = 1/12 + 1/15 + 1/20 = (5 + 4 + 3) / 60 = 12/60 = 1/5. Therefore, (A + B + C)'s 1 day work = 1/10. Thus, together they can finish the work in 10 days."
  },
  {
    "category": "Aptitude",
    "topic": "Ratio & Proportion",
    "difficulty": "Medium",
    "company": "Accenture",
    "question": "Two numbers are in the ratio 3 : 5. If 9 is subtracted from each, the new numbers are in the ratio 12 : 23. What is the smaller number?",
    "option_a": "27",
    "option_b": "33",
    "option_c": "45",
    "option_d": "55",
    "answer": "B",
    "explanation": "Let numbers be 3x and 5x. (3x - 9) / (5x - 9) = 12 / 23. 23(3x - 9) = 12(5x - 9) => 69x - 207 = 60x - 108 => 9x = 99 => x = 11. The smaller number is 3x = 3 * 11 = 33."
  },
  {
    "category": "Reasoning",
    "topic": "Verbal Reasoning (Statement & Course of Action)",
    "difficulty": "Medium",
    "company": "TCS",
    "question": "Statement: Every year during the monsoon season, several areas of the city experience severe waterlogging and traffic paralysis.\nCourses of Action:\nI. The civic body should thoroughly clear and desilt all storm-water drains before the onset of monsoon.\nII. All citizens should be advised not to step out of their homes during the entire rainy season.",
    "option_a": "Only course of action I follows",
    "option_b": "Only course of action II follows",
    "option_c": "Either I or II follows",
    "option_d": "Both I and II follow",
    "answer": "A",
    "explanation": "Course of action I is a practical, constructive preventive measure. Course II is impractical and disproportionate (asking citizens not to step out during an entire season is unfeasible). Hence, only I follows."
  },
  {
    "category": "Reasoning",
    "topic": "Verbal Reasoning (Syllogisms)",
    "difficulty": "Medium",
    "company": "Infosys",
    "question": "Statements: Some papers are pens. All pens are scales. No scale is a pencil.\nConclusions:\nI. No pen is a pencil.\nII. Some papers are scales.",
    "option_a": "Only conclusion I follows",
    "option_b": "Only conclusion II follows",
    "option_c": "Neither I nor II follows",
    "option_d": "Both conclusions I and II follow",
    "answer": "D",
    "explanation": "Since all pens are scales and no scale is a pencil, no pen can ever be a pencil (Conclusion I is valid). Since some papers are pens and all pens are scales, those papers that are pens are definitely scales (Conclusion II is valid). Both I and II follow."
  },
  {
    "category": "Reasoning",
    "topic": "Verbal Reasoning (Assertion & Reason)",
    "difficulty": "Easy",
    "company": "Wipro",
    "question": "Assertion (A): Leaves of plants appear green.\nReason (R): Chlorophyll absorbs green light and reflects red and blue light.",
    "option_a": "Both A and R are true and R is the correct explanation of A",
    "option_b": "Both A and R are true but R is NOT the correct explanation of A",
    "option_c": "A is true but R is false",
    "option_d": "A is false but R is true",
    "answer": "C",
    "explanation": "Leaves appear green because chlorophyll absorbs blue and red wavelengths of light and REFLECTS green light. Hence, Assertion A is true, but Reason R is scientifically false."
  },
  {
    "category": "Reasoning",
    "topic": "Coding-Decoding",
    "difficulty": "Medium",
    "company": "Cognizant",
    "question": "In a certain code, MONKEY is written as XDJMNL. How will TIGER be written in that code?",
    "option_a": "QDFHS",
    "option_b": "SDFHS",
    "option_c": "SHFDQ",
    "option_d": "UJHFS",
    "answer": "A",
    "explanation": "Reverse the word MONKEY to YEKNOM, then subtract 1 from each letter: Y-1=X, E-1=D, K-1=J, N-1=M, O-1=N, M-1=L => XDJMNL. For TIGER, reversed is REGIT. Subtract 1 from each letter: R-1=Q, E-1=D, G-1=F, I-1=H, T-1=S => QDFHS."
  },
  {
    "category": "Reasoning",
    "topic": "Seating Arrangement (Circular)",
    "difficulty": "Hard",
    "company": "Capgemini",
    "question": "Six persons A, B, C, D, E, and F are sitting in a circle facing the center. B is between F and C. A is between E and D. F is to the immediate left of D. Who is sitting opposite to A?",
    "option_a": "B",
    "option_b": "C",
    "option_c": "E",
    "option_d": "F",
    "answer": "A",
    "explanation": "Arrange clockwise: D, F, B, C, E, A. D is adjacent to F. B is between F and C. E is next to C. A is between E and D. The opposite pairs are (D, C), (F, E), and (A, B). Therefore, B is sitting directly opposite to A."
  },
  {
    "category": "Verbal",
    "topic": "Sentence Correction",
    "difficulty": "Medium",
    "company": "Accenture",
    "question": "Choose the grammatically correct sentence:",
    "option_a": "No sooner did the bell rang than the students rushed out.",
    "option_b": "No sooner did the bell ring than the students rushed out.",
    "option_c": "No sooner the bell rang when the students rushed out.",
    "option_d": "No sooner had the bell rung when the students rushed out.",
    "answer": "B",
    "explanation": "'No sooner did' takes the base form of the verb ('ring', not 'rang') and must be followed by 'than', not 'when'. Option B is correct."
  },
  {
    "category": "Verbal",
    "topic": "Vocabulary (Synonyms)",
    "difficulty": "Medium",
    "company": "Amazon",
    "question": "Select the word that is most nearly identical in meaning to 'METICULOUS':",
    "option_a": "Hasty",
    "option_b": "Painstaking",
    "option_c": "Superficial",
    "option_d": "Indifferent",
    "answer": "B",
    "explanation": "'Meticulous' means showing great attention to detail; very careful and precise. 'Painstaking' is an exact synonym."
  },
  {
    "category": "Verbal",
    "topic": "Vocabulary (Antonyms)",
    "difficulty": "Easy",
    "company": "TCS",
    "question": "Choose the antonym of 'CANDID':",
    "option_a": "Frank",
    "option_b": "Honest",
    "option_c": "Deceitful",
    "option_d": "Straightforward",
    "answer": "C",
    "explanation": "'Candid' means truthful, outspoken, and straightforward. The antonym is 'Deceitful' (guarded, dishonest)."
  },
  {
    "category": "Verbal",
    "topic": "One Word Substitution",
    "difficulty": "Easy",
    "company": "Deloitte",
    "question": "One who possesses multiple diverse talents and abilities is termed as:",
    "option_a": "Versatile",
    "option_b": "Veteran",
    "option_c": "Philanthropist",
    "option_d": "Ambivert",
    "answer": "A",
    "explanation": "'Versatile' means able to adapt or be adapted to many different functions or activities; having many talents."
  },
  {
    "category": "Verbal",
    "topic": "Idioms & Phrases",
    "difficulty": "Medium",
    "company": "Infosys",
    "question": "What does the idiom 'A blessing in disguise' signify?",
    "option_a": "A curse that ruins everything",
    "option_b": "Something that seems bad at first, but turns out to have good results",
    "option_c": "A person wearing a spiritual costume",
    "option_d": "A secret gift from a stranger",
    "answer": "B",
    "explanation": "'A blessing in disguise' is an apparent misfortune that eventually results in something good or advantageous."
  },
  {
    "category": "Programming",
    "topic": "Pseudocode & Bitwise Logic",
    "difficulty": "Medium",
    "company": "Accenture",
    "question": "What is the output of the following pseudocode?\n\nInteger a, b, c\nSet a = 5, b = 3\nc = (a ^ b) + (a & b)\nPrint c",
    "option_a": "6",
    "option_b": "7",
    "option_c": "8",
    "option_d": "15",
    "answer": "B",
    "explanation": "In binary: a = 5 (101_2), b = 3 (011_2). a ^ b = 101 ^ 011 = 110_2 = 6. a & b = 101 & 011 = 001_2 = 1. Therefore, c = 6 + 1 = 7."
  },
  {
    "category": "Programming",
    "topic": "Recursion & Stack",
    "difficulty": "Medium",
    "company": "Infosys",
    "question": "What value is returned by fun(4)?\n\nint fun(int n) {\n    if (n <= 1) return 1;\n    return n * fun(n - 1);\n}",
    "option_a": "10",
    "option_b": "16",
    "option_c": "24",
    "option_d": "120",
    "answer": "C",
    "explanation": "This is the standard recursive factorial function. fun(4) = 4 * fun(3) = 4 * 3 * fun(2) = 4 * 3 * 2 * fun(1) = 4 * 3 * 2 * 1 = 24."
  },
  {
    "category": "Programming",
    "topic": "Data Structures (Arrays)",
    "difficulty": "Easy",
    "company": "Amazon",
    "question": "What is the time complexity to access an element by its index in a contiguous dynamic array?",
    "option_a": "O(1)",
    "option_b": "O(log N)",
    "option_c": "O(N)",
    "option_d": "O(N^2)",
    "answer": "A",
    "explanation": "Arrays are stored in contiguous memory blocks. The address of any element at index i is calculated directly using base_address + i * element_size, allowing direct random access in constant time O(1)."
  },
  {
    "category": "Programming",
    "topic": "DBMS & SQL",
    "difficulty": "Medium",
    "company": "TCS",
    "question": "Which of the following ACID properties ensures that a transaction is completely executed or completely rolled back in case of a crash?",
    "option_a": "Atomicity",
    "option_b": "Consistency",
    "option_c": "Isolation",
    "option_d": "Durability",
    "answer": "A",
    "explanation": "Atomicity states that database modifications must follow an 'all or nothing' rule. If one part of the transaction fails, the entire transaction fails and the database state is left unchanged."
  },
  {
    "category": "Programming",
    "topic": "Python Fundamentals",
    "difficulty": "Easy",
    "company": "Cognizant",
    "question": "What will be the output of `bool('')` and `bool([0])` in Python?",
    "option_a": "False, False",
    "option_b": "False, True",
    "option_c": "True, False",
    "option_d": "True, True",
    "answer": "B",
    "explanation": "An empty string '' is falsy, so bool('') evaluates to False. A list with any element, even [0], is non-empty, so bool([0]) evaluates to True."
  }
];
const CHEATSHEETS = {
  "aptitude": {
    "title": "Quantitative Aptitude Formulas",
    "description": "Essential formulas, rapid shortcut tricks, and mental arithmetic methods for campus placement aptitude exams.",
    "sections": [
      {
        "name": "Speed, Distance & Time",
        "rules": [
          {
            "label": "Fundamental Formula",
            "formula": "Speed = Distance / Time",
            "note": "Ensure units match (km/h vs m/s)."
          },
          {
            "label": "Unit Conversion",
            "formula": "1 km/h = 5/18 m/s  |  1 m/s = 18/5 km/h",
            "note": "To convert 72 km/h: 72 * (5/18) = 20 m/s."
          },
          {
            "label": "Average Speed (Equal Distances)",
            "formula": "Avg Speed = (2 * S1 * S2) / (S1 + S2)",
            "note": "Valid when distance covered at S1 equals distance covered at S2."
          },
          {
            "label": "Relative Speed",
            "formula": "Opposite directions: S1 + S2 | Same direction: |S1 - S2|",
            "note": "Crucial for train crossing problems."
          },
          {
            "label": "Train Crossing a Moving Object",
            "formula": "Time = (Length of Train + Length of Object) / Relative Speed",
            "note": "For stationary pole or person, length of object is 0."
          }
        ]
      },
      {
        "name": "Time & Work (LCM Method)",
        "rules": [
          {
            "label": "Total Work Assumption",
            "formula": "Total Units = LCM of individual time periods",
            "note": "Avoid fractions by working in integer units."
          },
          {
            "label": "Daily Efficiency",
            "formula": "Efficiency = Total Work Units / Days Taken",
            "note": "If A takes 12 days and B takes 15 days, LCM = 60 units. A=5 u/day, B=4 u/day."
          },
          {
            "label": "Combined Work",
            "formula": "Days Together = Total Units / (Eff_A + Eff_B)",
            "note": "60 / (5 + 4) = 60/9 = 6.67 days."
          },
          {
            "label": "Man-Days Equation",
            "formula": "(M1 * D1 * H1) / W1 = (M2 * D2 * H2) / W2",
            "note": "M=Men, D=Days, H=Hours/day, W=Work done."
          }
        ]
      },
      {
        "name": "Profit, Loss & Discount",
        "rules": [
          {
            "label": "Profit & Loss %",
            "formula": "Profit% = (Profit / CP) * 100  |  Loss% = (Loss / CP) * 100",
            "note": "Always calculated on Cost Price (CP) unless stated otherwise."
          },
          {
            "label": "Selling Price Formula",
            "formula": "SP = CP * (100 + Gain%) / 100  or  CP * (100 - Loss%) / 100",
            "note": "Direct multiplier."
          },
          {
            "label": "Identical SP Gain/Loss Trick",
            "formula": "Overall Loss% = (x / 10)^2",
            "note": "When two articles sell at same SP with x% gain on one and x% loss on other."
          },
          {
            "label": "Marked Price & Discount",
            "formula": "Discount% = (Discount / MP) * 100  |  SP = MP * (100 - D%) / 100",
            "note": "Discount is always on Marked Price (MP)."
          }
        ]
      },
      {
        "name": "Percentages & Interest",
        "rules": [
          {
            "label": "Price Increase / Consumption",
            "formula": "Reduction% = [r / (100 + r)] * 100",
            "note": "If price rises by 25%, consumption drops by [25/125]*100 = 20%."
          },
          {
            "label": "Simple Interest (SI)",
            "formula": "SI = (P * R * T) / 100",
            "note": "Amount A = P + SI."
          },
          {
            "label": "Compound Interest (CI)",
            "formula": "A = P * (1 + R/100)^T  |  CI = A - P",
            "note": "For semi-annual: R -> R/2, T -> 2T."
          },
          {
            "label": "CI - SI Difference (2 Years)",
            "formula": "Difference = P * (R / 100)^2",
            "note": "For 3 years: P * (R/100)^2 * (3 + R/100)."
          }
        ]
      },
      {
        "name": "Permutations, Combinations & Probability",
        "rules": [
          {
            "label": "Permutation (Order matters)",
            "formula": "nPr = n! / (n - r)!",
            "note": "Arranging r items out of n distinct items."
          },
          {
            "label": "Combination (Selection only)",
            "formula": "nCr = n! / [r! * (n - r)!]",
            "note": "Selecting teams, committee members, cards."
          },
          {
            "label": "Probability Definition",
            "formula": "P(E) = Favorable Outcomes / Total Possible Outcomes",
            "note": "0 <= P(E) <= 1."
          },
          {
            "label": "Complementary Probability",
            "formula": "P(At least 1) = 1 - P(None)",
            "note": "Very helpful in coin, dice, and target problems."
          }
        ]
      }
    ]
  },
  "reasoning": {
    "title": "Logical & Verbal Reasoning Shortcuts",
    "description": "Rules of deduction, alphabet placement systems, and pattern decoding strategies.",
    "sections": [
      {
        "name": "Coding-Decoding Alphabet Tricks",
        "rules": [
          {
            "label": "EJOTY Rule (Forward 5s)",
            "formula": "E=5, J=10, O=15, T=20, Y=25",
            "note": "Use this anchor to find any letter's position within 2 seconds."
          },
          {
            "label": "Opposite Letter Pairs (Sum = 27)",
            "formula": "A-Z, B-Y, C-X, D-W, E-V, F-U, G-T, H-S, I-R, J-Q, K-P, L-O, M-N",
            "note": "Mnemonics: AZ, BY, CruX, DeW, EVen, FUll, GT road, High School, Indian Railway, Jack-Queen, Kurukshetra-Police, LOve, MaN."
          }
        ]
      },
      {
        "name": "Syllogisms Rules",
        "rules": [
          {
            "label": "Universal Affirmative (A)",
            "formula": "All A are B -> Can conclude: Some A are B, Some B are A.",
            "note": "Cannot conclude: All B are A."
          },
          {
            "label": "Universal Negative (E)",
            "formula": "No A is B -> Can conclude: No B is A, Some A are not B, Some B are not A.",
            "note": "Symmetric negative relationship."
          },
          {
            "label": "Particular Affirmative (I)",
            "formula": "Some A are B -> Can conclude: Some B are A.",
            "note": "No definite 'All' or 'No' conclusions."
          },
          {
            "label": "Either-Or Condition",
            "formula": "Elements match + One positive (I) & one negative (E/O) + Neither is definitely true.",
            "note": "e.g., 'Some A are B' and 'No A is B' creates an either-or conclusion."
          }
        ]
      },
      {
        "name": "Direction Sense Tricks",
        "rules": [
          {
            "label": "Cardinal & Ordinal Points",
            "formula": "North (0 deg), East (90 deg), South (180 deg), West (270 deg)",
            "note": "Right turn = 90 deg clockwise. Left turn = 90 deg counter-clockwise."
          },
          {
            "label": "Shortest Distance (Pythagoras)",
            "formula": "D = sqrt(X^2 + Y^2)",
            "note": "Where X is net East-West displacement and Y is net North-South displacement."
          }
        ]
      },
      {
        "name": "Blood Relations Shorthand",
        "rules": [
          {
            "label": "Visual Tree Symbols",
            "formula": "[+] Male  |  [-] Female  |  [=] Married Couple  |  [---] Siblings  |  [|] Parent-Child",
            "note": "Drawing a 3-generation family tree takes under 30 seconds and eliminates confusion."
          }
        ]
      }
    ]
  },
  "technical": {
    "title": "Core Technical & CS Fundamentals",
    "description": "Quick reference for Data Structures, Algorithms, DBMS, Operating Systems, and OOP concepts.",
    "sections": [
      {
        "name": "Data Structure Time Complexities",
        "rules": [
          {
            "label": "Array / Dynamic Array",
            "formula": "Access: O(1) | Search: O(N) | Insertion: O(N) | Deletion: O(N)",
            "note": "Contiguous memory layout."
          },
          {
            "label": "Singly Linked List",
            "formula": "Access: O(N) | Search: O(N) | Insertion at Head: O(1) | Deletion: O(N)",
            "note": "Non-contiguous, requires pointer chasing."
          },
          {
            "label": "Balanced BST (AVL / Red-Black)",
            "formula": "Access: O(log N) | Search: O(log N) | Insert: O(log N) | Delete: O(log N)",
            "note": "Height balanced tree."
          },
          {
            "label": "Hash Table",
            "formula": "Average: O(1) Search, Insert, Delete | Worst case: O(N)",
            "note": "Depends on uniform hashing and load factor."
          }
        ]
      },
      {
        "name": "Sorting Algorithms Comparison",
        "rules": [
          {
            "label": "Merge Sort",
            "formula": "Best: O(N log N) | Avg: O(N log N) | Worst: O(N log N) | Stable: YES",
            "note": "Space complexity O(N)."
          },
          {
            "label": "Quick Sort",
            "formula": "Best: O(N log N) | Avg: O(N log N) | Worst: O(N^2) | Stable: NO",
            "note": "In-place, average fastest in practice."
          },
          {
            "label": "Heap Sort",
            "formula": "Best: O(N log N) | Avg: O(N log N) | Worst: O(N log N) | Stable: NO",
            "note": "In-place O(1) space."
          },
          {
            "label": "Binary Search",
            "formula": "Time: O(log N) | Space: O(1) iterative",
            "note": "Requires array to be pre-sorted."
          }
        ]
      },
      {
        "name": "Object-Oriented Programming (OOP) Pillars",
        "rules": [
          {
            "label": "Encapsulation",
            "formula": "Bundling data and methods + access control (private/protected/public)",
            "note": "Protects object internal state from unauthorized modification."
          },
          {
            "label": "Abstraction",
            "formula": "Hiding implementation complexity and exposing essential interface (interfaces/abstract classes)",
            "note": "Users interact through clear APIs."
          },
          {
            "label": "Inheritance",
            "formula": "Deriving new classes from existing classes to achieve code reusability",
            "note": "'is-a' relationship."
          },
          {
            "label": "Polymorphism",
            "formula": "Compile-time (Overloading) vs Run-time (Overriding with virtual methods)",
            "note": "Allows one interface to be used for a general class of actions."
          }
        ]
      },
      {
        "name": "Database Management (DBMS)",
        "rules": [
          {
            "label": "ACID Properties",
            "formula": "Atomicity (all-or-nothing), Consistency (rules hold), Isolation (concurrent safety), Durability (persisted)",
            "note": "Guarantees reliable transaction processing."
          },
          {
            "label": "SQL JOINs",
            "formula": "INNER (matches in both) | LEFT (all left + matches) | RIGHT (all right + matches) | FULL (union)",
            "note": "Use ON clause for join predicates."
          },
          {
            "label": "Normalization Stages",
            "formula": "1NF: Atomic values | 2NF: No partial key dependency | 3NF: No transitive dependency | BCNF: Every determinant is a candidate key",
            "note": "Minimizes redundancy and prevents update anomalies."
          }
        ]
      }
    ]
  },
  "interview": {
    "title": "HR & Placement Interview Guide",
    "description": "Proven behavioral frameworks, STAR method blueprints, and top HR interview questions with model answers.",
    "sections": [
      {
        "name": "The STAR Method for Behavioral Questions",
        "rules": [
          {
            "label": "S - Situation",
            "formula": "Set the context: describe the specific project, challenge, or scenario.",
            "note": "Keep it brief (approx 20 seconds)."
          },
          {
            "label": "T - Task",
            "formula": "Explain your specific role and responsibility in that situation.",
            "note": "What needed to be achieved?"
          },
          {
            "label": "A - Action",
            "formula": "Detail the specific technical or interpersonal steps YOU took.",
            "note": "Focus on 'I', not 'we'. Highlight skills used."
          },
          {
            "label": "R - Result",
            "formula": "Share the quantifiable outcome, metrics, and what you learned.",
            "note": "e.g., 'Reduced response latency by 35% and submitted 2 days ahead of deadline.'"
          }
        ]
      },
      {
        "name": "Top Frequently Asked HR Questions & Strategies",
        "rules": [
          {
            "label": "1. Tell me about yourself",
            "formula": "Present -> Past -> Future formula (90 seconds)",
            "note": "Start with your current degree/branch, highlight your technical stack & key project, mention a leadership/extracurricular achievement, and state why you are excited for this specific role."
          },
          {
            "label": "2. What are your greatest strengths and weaknesses?",
            "formula": "Strength backed by evidence + Genuine weakness accompanied by self-correction effort",
            "note": "Strength: 'Rapid problem decomposition and persistence.' Weakness: 'Hesitation to delegate tasks early, but I now practice breaking projects into milestones and trusting teammates.'"
          },
          {
            "label": "3. Why do you want to join our company?",
            "formula": "Company technology/values + Personal career alignment",
            "note": "Mention specific client work, learning platforms, open-source initiatives, or company culture rather than generic praise."
          },
          {
            "label": "4. Where do you see yourself in 3-5 years?",
            "formula": "Technical depth + Mentorship + Value delivery",
            "note": "Focus on becoming a dependable subject-matter specialist, leading feature design, and mentoring junior engineers."
          },
          {
            "label": "5. Do you have any questions for us?",
            "formula": "Always ask 1-2 thoughtful questions!",
            "note": "Example: 'What does a typical onboarding sprint look like for fresh graduates in this team?' or 'Which cloud and DevOps tools are currently part of your primary tech stack?'"
          }
        ]
      }
    ]
  }
};
