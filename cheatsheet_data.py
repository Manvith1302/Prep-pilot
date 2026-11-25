"""
PrepPilot Formulas & Placement Preparation Cheatsheets
"""

CHEATSHEETS = {
    "aptitude": {
        "title": "Quantitative Aptitude Formulas",
        "description": "Essential formulas, rapid shortcut tricks, and mental arithmetic methods for campus placement aptitude exams.",
        "sections": [
            {
                "name": "Speed, Distance & Time",
                "rules": [
                    {"label": "Fundamental Formula", "formula": "Speed = Distance / Time", "note": "Ensure units match (km/h vs m/s)."},
                    {"label": "Unit Conversion", "formula": "1 km/h = 5/18 m/s  |  1 m/s = 18/5 km/h", "note": "To convert 72 km/h: 72 * (5/18) = 20 m/s."},
                    {"label": "Average Speed (Equal Distances)", "formula": "Avg Speed = (2 * S1 * S2) / (S1 + S2)", "note": "Valid when distance covered at S1 equals distance covered at S2."},
                    {"label": "Relative Speed", "formula": "Opposite directions: S1 + S2 | Same direction: |S1 - S2|", "note": "Crucial for train crossing problems."},
                    {"label": "Train Crossing a Moving Object", "formula": "Time = (Length of Train + Length of Object) / Relative Speed", "note": "For stationary pole or person, length of object is 0."}
                ]
            },
            {
                "name": "Time & Work (LCM Method)",
                "rules": [
                    {"label": "Total Work Assumption", "formula": "Total Units = LCM of individual time periods", "note": "Avoid fractions by working in integer units."},
                    {"label": "Daily Efficiency", "formula": "Efficiency = Total Work Units / Days Taken", "note": "If A takes 12 days and B takes 15 days, LCM = 60 units. A=5 u/day, B=4 u/day."},
                    {"label": "Combined Work", "formula": "Days Together = Total Units / (Eff_A + Eff_B)", "note": "60 / (5 + 4) = 60/9 = 6.67 days."},
                    {"label": "Man-Days Equation", "formula": "(M1 * D1 * H1) / W1 = (M2 * D2 * H2) / W2", "note": "M=Men, D=Days, H=Hours/day, W=Work done."}
                ]
            },
            {
                "name": "Profit, Loss & Discount",
                "rules": [
                    {"label": "Profit & Loss %", "formula": "Profit% = (Profit / CP) * 100  |  Loss% = (Loss / CP) * 100", "note": "Always calculated on Cost Price (CP) unless stated otherwise."},
                    {"label": "Selling Price Formula", "formula": "SP = CP * (100 + Gain%) / 100  or  CP * (100 - Loss%) / 100", "note": "Direct multiplier."},
                    {"label": "Identical SP Gain/Loss Trick", "formula": "Overall Loss% = (x / 10)^2", "note": "When two articles sell at same SP with x% gain on one and x% loss on other."},
                    {"label": "Marked Price & Discount", "formula": "Discount% = (Discount / MP) * 100  |  SP = MP * (100 - D%) / 100", "note": "Discount is always on Marked Price (MP)."}
                ]
            },
            {
                "name": "Percentages & Interest",
                "rules": [
                    {"label": "Price Increase / Consumption", "formula": "Reduction% = [r / (100 + r)] * 100", "note": "If price rises by 25%, consumption drops by [25/125]*100 = 20%."},
                    {"label": "Simple Interest (SI)", "formula": "SI = (P * R * T) / 100", "note": "Amount A = P + SI."},
                    {"label": "Compound Interest (CI)", "formula": "A = P * (1 + R/100)^T  |  CI = A - P", "note": "For semi-annual: R -> R/2, T -> 2T."},
                    {"label": "CI - SI Difference (2 Years)", "formula": "Difference = P * (R / 100)^2", "note": "For 3 years: P * (R/100)^2 * (3 + R/100)."}
                ]
            },
            {
                "name": "Permutations, Combinations & Probability",
                "rules": [
                    {"label": "Permutation (Order matters)", "formula": "nPr = n! / (n - r)!", "note": "Arranging r items out of n distinct items."},
                    {"label": "Combination (Selection only)", "formula": "nCr = n! / [r! * (n - r)!]", "note": "Selecting teams, committee members, cards."},
                    {"label": "Probability Definition", "formula": "P(E) = Favorable Outcomes / Total Possible Outcomes", "note": "0 <= P(E) <= 1."},
                    {"label": "Complementary Probability", "formula": "P(At least 1) = 1 - P(None)", "note": "Very helpful in coin, dice, and target problems."}
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
                    {"label": "EJOTY Rule (Forward 5s)", "formula": "E=5, J=10, O=15, T=20, Y=25", "note": "Use this anchor to find any letter's position within 2 seconds."},
                    {"label": "Opposite Letter Pairs (Sum = 27)", "formula": "A-Z, B-Y, C-X, D-W, E-V, F-U, G-T, H-S, I-R, J-Q, K-P, L-O, M-N", "note": "Mnemonics: AZ, BY, CruX, DeW, EVen, FUll, GT road, High School, Indian Railway, Jack-Queen, Kurukshetra-Police, LOve, MaN."}
                ]
            },
            {
                "name": "Syllogisms Rules",
                "rules": [
                    {"label": "Universal Affirmative (A)", "formula": "All A are B -> Can conclude: Some A are B, Some B are A.", "note": "Cannot conclude: All B are A."},
                    {"label": "Universal Negative (E)", "formula": "No A is B -> Can conclude: No B is A, Some A are not B, Some B are not A.", "note": "Symmetric negative relationship."},
                    {"label": "Particular Affirmative (I)", "formula": "Some A are B -> Can conclude: Some B are A.", "note": "No definite 'All' or 'No' conclusions."},
                    {"label": "Either-Or Condition", "formula": "Elements match + One positive (I) & one negative (E/O) + Neither is definitely true.", "note": "e.g., 'Some A are B' and 'No A is B' creates an either-or conclusion."}
                ]
            },
            {
                "name": "Direction Sense Tricks",
                "rules": [
                    {"label": "Cardinal & Ordinal Points", "formula": "North (0 deg), East (90 deg), South (180 deg), West (270 deg)", "note": "Right turn = 90 deg clockwise. Left turn = 90 deg counter-clockwise."},
                    {"label": "Shortest Distance (Pythagoras)", "formula": "D = sqrt(X^2 + Y^2)", "note": "Where X is net East-West displacement and Y is net North-South displacement."}
                ]
            },
            {
                "name": "Blood Relations Shorthand",
                "rules": [
                    {"label": "Visual Tree Symbols", "formula": "[+] Male  |  [-] Female  |  [=] Married Couple  |  [---] Siblings  |  [|] Parent-Child", "note": "Drawing a 3-generation family tree takes under 30 seconds and eliminates confusion."}
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
                    {"label": "Array / Dynamic Array", "formula": "Access: O(1) | Search: O(N) | Insertion: O(N) | Deletion: O(N)", "note": "Contiguous memory layout."},
                    {"label": "Singly Linked List", "formula": "Access: O(N) | Search: O(N) | Insertion at Head: O(1) | Deletion: O(N)", "note": "Non-contiguous, requires pointer chasing."},
                    {"label": "Balanced BST (AVL / Red-Black)", "formula": "Access: O(log N) | Search: O(log N) | Insert: O(log N) | Delete: O(log N)", "note": "Height balanced tree."},
                    {"label": "Hash Table", "formula": "Average: O(1) Search, Insert, Delete | Worst case: O(N)", "note": "Depends on uniform hashing and load factor."}
                ]
            },
            {
                "name": "Sorting Algorithms Comparison",
                "rules": [
                    {"label": "Merge Sort", "formula": "Best: O(N log N) | Avg: O(N log N) | Worst: O(N log N) | Stable: YES", "note": "Space complexity O(N)."},
                    {"label": "Quick Sort", "formula": "Best: O(N log N) | Avg: O(N log N) | Worst: O(N^2) | Stable: NO", "note": "In-place, average fastest in practice."},
                    {"label": "Heap Sort", "formula": "Best: O(N log N) | Avg: O(N log N) | Worst: O(N log N) | Stable: NO", "note": "In-place O(1) space."},
                    {"label": "Binary Search", "formula": "Time: O(log N) | Space: O(1) iterative", "note": "Requires array to be pre-sorted."}
                ]
            },
            {
                "name": "Object-Oriented Programming (OOP) Pillars",
                "rules": [
                    {"label": "Encapsulation", "formula": "Bundling data and methods + access control (private/protected/public)", "note": "Protects object internal state from unauthorized modification."},
                    {"label": "Abstraction", "formula": "Hiding implementation complexity and exposing essential interface (interfaces/abstract classes)", "note": "Users interact through clear APIs."},
                    {"label": "Inheritance", "formula": "Deriving new classes from existing classes to achieve code reusability", "note": "'is-a' relationship."},
                    {"label": "Polymorphism", "formula": "Compile-time (Overloading) vs Run-time (Overriding with virtual methods)", "note": "Allows one interface to be used for a general class of actions."}
                ]
            },
            {
                "name": "Database Management (DBMS)",
                "rules": [
                    {"label": "ACID Properties", "formula": "Atomicity (all-or-nothing), Consistency (rules hold), Isolation (concurrent safety), Durability (persisted)", "note": "Guarantees reliable transaction processing."},
                    {"label": "SQL JOINs", "formula": "INNER (matches in both) | LEFT (all left + matches) | RIGHT (all right + matches) | FULL (union)", "note": "Use ON clause for join predicates."},
                    {"label": "Normalization Stages", "formula": "1NF: Atomic values | 2NF: No partial key dependency | 3NF: No transitive dependency | BCNF: Every determinant is a candidate key", "note": "Minimizes redundancy and prevents update anomalies."}
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
                    {"label": "S - Situation", "formula": "Set the context: describe the specific project, challenge, or scenario.", "note": "Keep it brief (approx 20 seconds)."},
                    {"label": "T - Task", "formula": "Explain your specific role and responsibility in that situation.", "note": "What needed to be achieved?"},
                    {"label": "A - Action", "formula": "Detail the specific technical or interpersonal steps YOU took.", "note": "Focus on 'I', not 'we'. Highlight skills used."},
                    {"label": "R - Result", "formula": "Share the quantifiable outcome, metrics, and what you learned.", "note": "e.g., 'Reduced response latency by 35% and submitted 2 days ahead of deadline.'"}
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
}

def get_cheatsheets():
    return CHEATSHEETS

def get_cheatsheet_by_key(key):
    return CHEATSHEETS.get(key)
