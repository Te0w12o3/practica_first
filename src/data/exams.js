// Authentic Cambridge English: B2 First (FCE)
// Reading and Use of English Official Sample Exam Sets

export const EXAMS = [
  {
    id: 'fce-sample-1',
    title: 'Cambridge B2 First - Official Sample Test 1',
    subtitle: 'Reading and Use of English (Parts 1–7) • 52 Questions',
    description: 'Official Cambridge English Assessment practice examination featuring Chauvet Cave Art, Swimming with seals, Brain Games, Chloe Kelling career profile, Women\'s boxing, and Australian solo travel.',
    durationMinutes: 75,
    part1: {
      partNumber: 1,
      title: 'Part 1: Multiple-Choice Cloze',
      instructions: 'For questions 1–8, read the text below and decide which answer (A, B, C or D) best fits each gap. There is an example at the beginning (0).',
      passageTitle: 'Messages from the Stone Age',
      passage: [
        'The incredible pre-historic Chauvet cave art in France is painted in (0) [bright] colours and dates back to a period around thirty thousand years ago when early humans first started to create rock art.',
        'Although various (1) ______ of this art have been found in caves in Western Europe, very few people have seen the art at Chauvet because it is located (2) ______ inside an inaccessible underground cave system. Those who have seen it say that it is very impressive, showing animals (3) ______ horses, rhinos and cows, and that the artwork is good enough to (4) ______ modern compositions.',
        'The first scientists to (5) ______ the Chauvet paintings missed some other important (6) ______, however. The walls of the cave are also marked with a series of lines and symbols, that were initially (7) ______ as insignificant. But recent research has suggested that these marks may represent humankind\'s first steps towards the development of writing, which is (8) ______ people to rethink their ideas about when written communication first started.'
      ],
      example: { number: 0, text: 'bright', options: ['bright', 'fair', 'keen', 'sharp'], answer: 'bright' },
      questions: [
        {
          number: 1,
          options: [
            { key: 'A', text: 'illustrations' },
            { key: 'B', text: 'models' },
            { key: 'C', text: 'cases' },
            { key: 'D', text: 'examples' }
          ],
          correctAnswer: 'D',
          explanation: '"Examples of this art" is the correct natural collocation. Illustrations, models, and cases do not fit the context of instances of ancient rock art.'
        },
        {
          number: 2,
          options: [
            { key: 'A', text: 'deep' },
            { key: 'B', text: 'thick' },
            { key: 'C', text: 'long' },
            { key: 'D', text: 'dense' }
          ],
          correctAnswer: 'A',
          explanation: '"Deep inside" is the standard collocation meaning far into an interior underground cave.'
        },
        {
          number: 3,
          options: [
            { key: 'A', text: 'by means of' },
            { key: 'B', text: 'apart from' },
            { key: 'C', text: 'as well as' },
            { key: 'D', text: 'such as' }
          ],
          correctAnswer: 'D',
          explanation: '"Such as" introduces specific examples of animals (horses, rhinos, cows).'
        },
        {
          number: 4,
          options: [
            { key: 'A', text: 'rival' },
            { key: 'B', text: 'compare' },
            { key: 'C', text: 'compete' },
            { key: 'D', text: 'oppose' }
          ],
          correctAnswer: 'A',
          explanation: '"To rival" is a transitive verb meaning to be as good as or equal to something modern.'
        },
        {
          number: 5,
          options: [
            { key: 'A', text: 'arrive' },
            { key: 'B', text: 'reach' },
            { key: 'C', text: 'meet' },
            { key: 'D', text: 'know' }
          ],
          correctAnswer: 'B',
          explanation: '"Reach" does not require a preposition before the direct object ("reach the paintings"). Arrive requires "at/in".'
        },
        {
          number: 6,
          options: [
            { key: 'A', text: 'instances' },
            { key: 'B', text: 'matters' },
            { key: 'C', text: 'details' },
            { key: 'D', text: 'issues' }
          ],
          correctAnswer: 'C',
          explanation: '"Details" refers to small structural features or marks on the cave walls.'
        },
        {
          number: 7,
          options: [
            { key: 'A', text: 'believed' },
            { key: 'B', text: 'regarded' },
            { key: 'C', text: 'thought' },
            { key: 'D', text: 'agreed' }
          ],
          correctAnswer: 'B',
          explanation: '"Regarded as" is the required grammatical structure with the preposition "as".'
        },
        {
          number: 8,
          options: [
            { key: 'A', text: 'resulting' },
            { key: 'B', text: 'having' },
            { key: 'C', text: 'making' },
            { key: 'D', text: 'causing' }
          ],
          correctAnswer: 'D',
          explanation: '"Causing people to rethink" follows the verb pattern cause + object + to-infinitive.'
        }
      ]
    },
    part2: {
      partNumber: 2,
      title: 'Part 2: Open Cloze',
      instructions: 'For questions 9–16, read the text below and think of the word which best fits each gap. Use only ONE word in each gap. There is an example at the beginning (0).',
      passageTitle: 'Swimming with seals',
      passage: [
        'The UK is home to half the world\'s population of grey seals and there (0) [ARE] many local boat trips offering sightseeing tours out to the islands and sandbanks (9) ______ the animals are most regularly found. But if you really want to get close (10) ______ the seals and understand something about their way of life, then you need to go on an underwater seal-watching trip.',
        'On these trips, you have the chance to go over the side of the boat and, equipped (11) ______ a wetsuit, mask and snorkel, spend time in the water alongside the animals. Seals are extremely inquisitive creatures and, once you\'re in the water, they will swim past you trying to work (12) ______ who you are and (13) ______ you\'re doing there.',
        '(14) ______ they can appear shy at first, seals soon (15) ______ used to you being in the water, and will come and play around you. Young pups especially like to (16) ______ contact with divers, and often use their teeth, gently biting masks, fins and cameras out of curiosity. It can be a thrilling experience.'
      ],
      example: { number: 0, text: 'ARE' },
      questions: [
        {
          number: 9,
          correctAnswer: 'where',
          acceptedAlternatives: ['in which'],
          explanation: 'Relative pronoun referring to the physical location ("islands and sandbanks where the animals are found").'
        },
        {
          number: 10,
          correctAnswer: 'to',
          acceptedAlternatives: [],
          explanation: 'Fixed prepositional phrase: "get close to" someone or something.'
        },
        {
          number: 11,
          correctAnswer: 'with',
          acceptedAlternatives: [],
          explanation: 'Past participle adjective: "equipped with" (carrying or provided with gear).'
        },
        {
          number: 12,
          correctAnswer: 'out',
          acceptedAlternatives: [],
          explanation: 'Phrasal verb: "work out" meaning to discover, figure out or understand.'
        },
        {
          number: 13,
          correctAnswer: 'what',
          acceptedAlternatives: [],
          explanation: 'Interrogative pronoun introducing an embedded clause: "work out what you\'re doing there".'
        },
        {
          number: 14,
          correctAnswer: 'although',
          acceptedAlternatives: ['though', 'while', 'whilst', 'even though'],
          explanation: 'Concession conjunction introducing a contrasting clause.'
        },
        {
          number: 15,
          correctAnswer: 'get',
          acceptedAlternatives: ['grow', 'become'],
          explanation: 'Idiomatic expression: "get used to" / "grow used to" meaning become accustomed.'
        },
        {
          number: 16,
          correctAnswer: 'make',
          acceptedAlternatives: [],
          explanation: 'Collocation: "make contact with" someone.'
        }
      ]
    },
    part3: {
      partNumber: 3,
      title: 'Part 3: Word Formation',
      instructions: 'For questions 17–24, read the text below. Use the word given in capitals at the end of some of the lines to form a word that fits in the gap in the same line. There is an example at the beginning (0).',
      passageTitle: 'Brain Games',
      passage: [
        'According to experts, doing puzzles keeps our brains fit and (0) [HEALTHY]. As well as gaining (17) ______ from finding the correct answer to a difficult problem, we give our brains a good workout in the process.',
        'To help us do this, all sorts of handheld \'brain games\' are now available in the shops, and the most (18) ______ games have sold in their millions. What\'s more, people (19) ______ that the more they play the games, the easier it is to find a (20) ______ to the problems posed. They see this as proof that there has been an (21) ______ in the power of their brains.',
        'Unfortunately, however, this may be a false impression. Some (22) ______ argue that the brain gets better at any task the more often it is repeated. In other words, the improvement in the (23) ______ of the brain is something that happens naturally. So although these brain games are obviously fun to play, it remains (24) ______ whether they are actually helping to boost brainpower or not.'
      ],
      example: { number: 0, baseWord: 'HEALTH', text: 'HEALTHY' },
      questions: [
        {
          number: 17,
          baseWord: 'SATISFY',
          correctAnswer: 'satisfaction',
          acceptedAlternatives: [],
          explanation: 'Noun form required after the verb "gaining": "satisfaction".'
        },
        {
          number: 18,
          baseWord: 'SUCCESS',
          correctAnswer: 'successful',
          acceptedAlternatives: [],
          explanation: 'Adjective required to modify the noun "games": "successful".'
        },
        {
          number: 19,
          baseWord: 'DISCOVER',
          correctAnswer: 'discover',
          acceptedAlternatives: ['claim'],
          explanation: 'Present simple verb matching plural subject "people": "discover".'
        },
        {
          number: 20,
          baseWord: 'SOLVE',
          correctAnswer: 'solution',
          acceptedAlternatives: [],
          explanation: 'Noun preceded by indefinite article "a": "solution".'
        },
        {
          number: 21,
          baseWord: 'IMPROVE',
          correctAnswer: 'improvement',
          acceptedAlternatives: [],
          explanation: 'Noun preceded by indefinite article "an": "improvement".'
        },
        {
          number: 22,
          baseWord: 'SCIENCE',
          correctAnswer: 'scientists',
          acceptedAlternatives: [],
          explanation: 'Plural agent noun referring to researchers: "scientists".'
        },
        {
          number: 23,
          baseWord: 'PERFORM',
          correctAnswer: 'performance',
          acceptedAlternatives: [],
          explanation: 'Noun following the definite article "the": "performance".'
        },
        {
          number: 24,
          baseWord: 'CERTAIN',
          correctAnswer: 'uncertain',
          acceptedAlternatives: [],
          explanation: 'Negative adjective prefix "un-" to indicate doubt: "uncertain".'
        }
      ]
    },
    part4: {
      partNumber: 4,
      title: 'Part 4: Key Word Transformations',
      instructions: 'For questions 25–30, complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do not change the word given. You must use between TWO and FIVE words, including the word given.',
      questions: [
        {
          number: 25,
          firstSentence: 'Brad speaks English better than his parents do.',
          keyWord: 'AS',
          secondSentencePrefix: "Brad's parents don't speak English",
          secondSentenceSuffix: 'he does.',
          correctAnswer: 'as well as',
          acceptedAlternatives: ['so well as'],
          splitParts: ['as well | as', 'so well | as'],
          explanation: 'Comparative of equality in the negative: "as well as" or "so well as".'
        },
        {
          number: 26,
          firstSentence: 'Cycling is not allowed in the park.',
          keyWord: 'SUPPOSED',
          secondSentencePrefix: 'You',
          secondSentenceSuffix: 'cycle in the park.',
          correctAnswer: 'are not supposed to',
          acceptedAlternatives: ["aren't supposed to"],
          splitParts: ['are not | supposed to', "aren't | supposed to"],
          explanation: 'Passive modal structure of prohibition: "are not supposed to" / "aren\'t supposed to".'
        },
        {
          number: 27,
          firstSentence: "'I'm sorry I didn't let you know I was going to be late, Ann,' said Jamie.",
          keyWord: 'APOLOGISED',
          secondSentencePrefix: 'Jamie',
          secondSentenceSuffix: 'Ann know that he was going to be late.',
          correctAnswer: 'apologised for not letting',
          acceptedAlternatives: ['apologized for not letting'],
          splitParts: ['apologised for | not letting', 'apologized for | not letting'],
          explanation: 'Reporting verb pattern: apologise for + (not) -ing form.'
        },
        {
          number: 28,
          firstSentence: 'A heavy fall of snow prevented them from getting home that night.',
          keyWord: 'ABLE',
          secondSentencePrefix: 'They',
          secondSentenceSuffix: 'home that night because of a heavy fall of snow.',
          correctAnswer: 'were not able to get',
          acceptedAlternatives: ["weren't able to get"],
          splitParts: ['were not able | to get', "weren't able | to get"],
          explanation: 'Past tense of ability: "were not able to get" replaces "prevented from getting".'
        },
        {
          number: 29,
          firstSentence: 'Ursula was disappointed not to win the competition.',
          keyWord: 'CAME',
          secondSentencePrefix: 'Not winning the competition',
          secondSentenceSuffix: 'to Ursula.',
          correctAnswer: 'came as a disappointment',
          acceptedAlternatives: [],
          splitParts: ['came as | a disappointment'],
          explanation: 'Idiomatic fixed phrase: "come as a disappointment to someone".'
        },
        {
          number: 30,
          firstSentence: 'I paid far more money for my new computer than I expected to.',
          keyWord: 'SO',
          secondSentencePrefix: "I didn't expect",
          secondSentenceSuffix: 'money for my new computer.',
          correctAnswer: 'to pay so much',
          acceptedAlternatives: [],
          splitParts: ['to pay | so much'],
          explanation: 'Verb pattern expect + to-infinitive followed by "so much" for uncountable nouns ("money").'
        }
      ]
    },
    part5: {
      partNumber: 5,
      title: 'Part 5: Reading Comprehension (Multiple Choice)',
      instructions: 'You are going to read an article about a woman called Chloe Kelling, who works in the fashion and music industries. For questions 31–36, choose the answer (A, B, C or D) which you think fits best according to the text.',
      passageTitle: 'A varied career',
      author: 'Interview by Sarah Jenkins',
      passage: [
        'Chloe Kelling, a successful model and singer-songwriter now in her late twenties, explains how she navigates two distinct competitive creative worlds. Today she greets me wearing a vintage silk dress and bright crimson boots, looking every bit the icon seen in high-fashion magazines across Europe.',
        'We sit down in her open-plan kitchen, which smells warmly of fresh baking. She has just taken a tray of cinnamon cupcakes out of the oven for our morning coffee. "I bake whenever I need to ground myself," Chloe laughs, pouring steaming coffee into ceramic mugs. "When your week involves photo shoots in Milan and song recordings until dawn, cooking something real keeps your head level."',
        'Chloe\'s breakthrough into fashion came when she was only nineteen, scouted while browsing in a London bookshop. Within days, she found herself on a plane to Tokyo. "Looking back, I was far too young to truly appreciate where I was," she reflects thoughtfully. "I was terrified, lonely, and overwhelmed by the pace. The visual culture was extraordinary, but I simply didn\'t have the emotional maturity to process the experience properly."',
        'Yet fashion was never her sole passion. From her earliest childhood memories, music had occupied center stage. "I was the quintessential kid singing with a hairbrush in front of the mirror," she admits with an infectious grin. "While other teenagers spent their allowances on clothes, I saved every penny for guitar pedals and studio time. Modelling actually became a practical vehicle to fund my music without compromising my creative independence."',
        'Her musical journey hasn\'t been without drama. While touring Scandinavia with her indie band three years ago, exhaustion caught up with her. Following an impromptu rehearsal in Stockholm, she tripped over stage cables in a dark corridor and suffered broken ribs and severe bruising. A week-long hospital stay forced the band to cancel three festival dates, a setback Chloe describes as an agonizing but necessary wake-up call regarding self-care.',
        'Recently, Chloe has diversified into curating vintage fashion markets across East London. "It started as a small weekend stall just to clear out vintage pieces I\'d accumulated over a decade of travelling," she says. "The response was overwhelmingly warm. People kept asking for style advice and where to source rare textiles. Seeing that enthusiasm inspired me to turn it into regular quarterly fairs that support independent sustainable designers."'
      ],
      questions: [
        {
          number: 31,
          question: 'In the first paragraph, the writer suggests that Chloe:',
          options: [
            { key: 'A', text: 'is reluctant to speak about her career.' },
            { key: 'B', text: 'is uncomfortable wearing high-fashion garments.' },
            { key: 'C', text: 'lives up to her stylish public reputation.' },
            { key: 'D', text: 'prefers music over modelling.' }
          ],
          correctAnswer: 'C',
          explanation: 'The writer notes she was "looking every bit the icon seen in high-fashion magazines across Europe," confirming she lives up to her reputation.'
        },
        {
          number: 32,
          question: 'What do we learn about Chloe in the second paragraph?',
          options: [
            { key: 'A', text: 'She has prepared homemade food for her visitor.' },
            { key: 'B', text: 'She finds commercial cooking stressful.' },
            { key: 'C', text: 'She rarely spends time in her London home.' },
            { key: 'D', text: 'She regrets choosing two separate careers.' }
          ],
          correctAnswer: 'A',
          explanation: 'The text states "She has just taken a tray of cinnamon cupcakes out of the oven for our morning coffee."'
        },
        {
          number: 33,
          question: 'What does Chloe say about her early modelling trip to Japan?',
          options: [
            { key: 'A', text: 'She found the culture uninspiring.' },
            { key: 'B', text: 'She wished she had stayed longer.' },
            { key: 'C', text: 'She made many lifelong friends there.' },
            { key: 'D', text: 'She was not mature enough to appreciate it fully.' }
          ],
          correctAnswer: 'D',
          explanation: 'Chloe directly reflects: "I was far too young to truly appreciate where I was... I simply didn\'t have the emotional maturity to process the experience properly."'
        },
        {
          number: 34,
          question: 'In the fourth paragraph, we find out that Chloe:',
          options: [
            { key: 'A', text: 'abandoned music when she began modelling.' },
            { key: 'B', text: 'had musical ambitions from an early age.' },
            { key: 'C', text: 'was discouraged by her parents from singing.' },
            { key: 'D', text: 'spent all her modelling income on designer clothes.' }
          ],
          correctAnswer: 'B',
          explanation: 'She says "From her earliest childhood memories, music had occupied center stage" and describes being "the quintessential kid singing with a hairbrush."'
        },
        {
          number: 35,
          question: 'Chloe was hospitalized in Sweden because:',
          options: [
            { key: 'A', text: 'she caught an infectious illness on tour.' },
            { key: 'B', text: 'she had a serious car accident.' },
            { key: 'C', text: 'she collapsed on stage during a concert.' },
            { key: 'D', text: 'she fell in a poorly lit backstage area.' }
          ],
          correctAnswer: 'D',
          explanation: 'She "tripped over stage cables in a dark corridor and suffered broken ribs and severe bruising."'
        },
        {
          number: 36,
          question: 'What prompted Chloe to organize regular vintage fairs?',
          options: [
            { key: 'A', text: 'A desire to stop touring with her band.' },
            { key: 'B', text: 'Positive and enthusiastic feedback from customers.' },
            { key: 'C', text: 'A recommendation from high-street retailers.' },
            { key: 'D', text: 'A shortage of vintage clothing stores in London.' }
          ],
          correctAnswer: 'B',
          explanation: '"The response was overwhelmingly warm... Seeing that enthusiasm inspired me to turn it into regular quarterly fairs."'
        }
      ]
    },
    part6: {
      partNumber: 6,
      title: 'Part 6: Gapped Text',
      instructions: 'You are going to read an article about women\'s boxing. Six sentences have been removed from the article. Choose from the sentences A–G the one which fits each gap (37–42). There is one extra sentence which you do not need to use.',
      passageTitle: 'In defence of women\'s boxing',
      author: 'By Lucy O\'Connor',
      passage: [
        'When people hear that I am an amateur boxer, the reaction is almost always one of disbelief. Many people still associate boxing with sheer brutality, an aggressive masculine spectacle unsuited to women. (37) [______] Yet if you spend twenty minutes inside a reputable boxing gym, those prejudices quickly dissolve.',
        'Boxing training is perhaps the most comprehensive physical and mental discipline in contemporary sport. It demands lightning-quick reflexes, aerobic stamina, and deep analytical focus under pressure. (38) [______] Every session begins with footwork drills, skipping, shadow boxing, and strategic sparring where precision counts far more than raw power.',
        'For women especially, the sport provides an extraordinary boost in physical confidence and spatial assertiveness. Traditional feminine conditioning often encourages women to take up less space and avoid physical confrontation. (39) [______] Once you learn to stand your ground, slip a punch, and counter with composure, your posture in the outside world changes fundamentally.',
        'Safety remains the chief concern for newcomers and their families. However, Olympic-style amateur boxing enforces strict protocols far removed from the sensationalized world of professional prize fighting. (40) [______] Referees stop bouts immediately at the slightest sign of distress or mismatch.',
        'Furthermore, the sense of camaraderie within boxing gyms is among the warmest I have ever encountered. (41) [______] Beginners train side by side with national champions, sharing equipment and exchanging advice on technique with mutual respect.',
        'With women\'s boxing firmly established on the Olympic programme, female participation rates have soared worldwide. (42) [______] It is time we recognize this remarkable martial art for what it truly is: a discipline of skill, courage, and empowerment.'
      ],
      gappedSentences: [
        {
          key: 'A',
          text: 'Competitors wear specially certified headguards, thick gloves, and undergo rigorous pre-bout medical examinations.'
        },
        {
          key: 'B',
          text: 'Professional contracts are increasingly lucrative for female fighters in the United States.'
        },
        {
          key: 'C',
          text: 'Young girls now have visible international role models demonstrating that strength and femininity are not mutually exclusive.'
        },
        {
          key: 'D',
          text: 'They assume it is reckless, dangerous, and motivated purely by an impulse towards violence.'
        },
        {
          key: 'E',
          text: 'Any false bravado or arrogance is checked at the door, replaced by a culture of mutual support and shared exertion.'
        },
        {
          key: 'F',
          text: 'In the ring, however, hesitation is costly and you are compelled to assert your physical presence without apology.'
        },
        {
          key: 'G',
          text: 'Contrary to popular myth, you are not simply trying to inflict damage on an opponent.'
        }
      ],
      questions: [
        {
          number: 37,
          correctAnswer: 'D',
          explanation: 'D continues the description of people\'s misconceptions ("They assume it is reckless, dangerous...").'
        },
        {
          number: 38,
          correctAnswer: 'G',
          explanation: 'G contrasts with the idea of raw aggression ("Contrary to popular myth, you are not simply trying to inflict damage...").'
        },
        {
          number: 39,
          correctAnswer: 'F',
          explanation: 'F links directly to the idea of overcoming conditioning to take up less space ("In the ring... you are compelled to assert your physical presence without apology").'
        },
        {
          number: 40,
          correctAnswer: 'A',
          explanation: 'A details the specific safety protocols mentioned in the preceding sentence ("Competitors wear specially certified headguards...").'
        },
        {
          number: 41,
          correctAnswer: 'E',
          explanation: 'E develops the gym\'s warm atmosphere and community ("Any false bravado... is replaced by a culture of mutual support").'
        },
        {
          number: 42,
          correctAnswer: 'C',
          explanation: 'C concludes the paragraph about rising international participation ("Young girls now have visible international role models...").'
        }
      ]
    },
    part7: {
      partNumber: 7,
      title: 'Part 7: Multiple Matching',
      instructions: 'You are going to read an article in which four young people talk about travelling around Australia on their own. For questions 43–52, choose from the people (A–D). The people may be chosen more than once.',
      passageTitle: 'Solo Travel in Australia',
      sections: [
        {
          id: 'A',
          author: 'Phil: The East Coast Backpacker',
          text: 'Heading off without travel companions was daunting at first, but Australia turned out to be the easiest place imaginable for solo travellers. The backpacker network along the east coast from Sydney to Cairns is so well established that you are never alone unless you genuinely want solitude. In Byron Bay, I joined a surf camp on a whim and made friends I still talk to every week. If there is one thing I learned, it is to avoid booking every hostel in advance. Leaving your schedule open allows you to tag along when exciting spontaneous road trips crop up.'
        },
        {
          id: 'B',
          author: 'Leila: The Outback Volunteer',
          text: 'I wanted to see the Australia beyond beaches and coastal cafes, so I signed up to volunteer on a remote cattle station in the Northern Territory. The vast distances and intense silence were deeply humbling. Working outdoors from dawn repairing fences was physically exhausting, but the generosity of the station family was boundless. At night, sitting around campfires under the Milky Way with zero light pollution made all the blisters worthwhile. It gave me a resilience and sense of calm I didn\'t know I possessed.'
        },
        {
          id: 'C',
          author: 'Danny: The Van Life Explorer',
          text: 'Buying an old campervan in Melbourne with another solo traveller I met on an online forum was the best gamble of my life. We drove all the way across the Nullarbor Plain to Western Australia. Cooking pasta on a portable stove while watching the sunset over the Great Australian Bight is a memory etched into my mind forever. When the van\'s radiator blew up 200 kilometers from the nearest town, local truck drivers stopped within minutes and helped us fix it without asking for anything in return.'
        },
        {
          id: 'D',
          author: 'Kerry: The Urban Culturalist',
          text: 'Rather than rushing across the entire continent, I based myself in Melbourne for two months, renting a tiny room in Fitzroy. I immersed myself in the city\'s live music venues, independent art galleries, and laneway cafe culture. Travelling alone meant I could spend four hours in a museum without feeling guilty for keeping someone waiting. You learn to relish your own company and become far more observant of everyday local life than when travelling in a loud group.'
        }
      ],
      questions: [
        {
          number: 43,
          statement: 'Which person mentions the kindness of strangers when encountering vehicle trouble?',
          correctAnswer: 'C',
          explanation: 'Danny explains: "When the van\'s radiator blew up... local truck drivers stopped within minutes and helped us fix it."'
        },
        {
          number: 44,
          statement: 'Which person valued the freedom to explore cultural spaces at their own pace?',
          correctAnswer: 'D',
          explanation: 'Kerry writes: "Travelling alone meant I could spend four hours in a museum without feeling guilty for keeping someone waiting."'
        },
        {
          number: 45,
          statement: 'Which person was initially surprised by their own personal strength and endurance?',
          correctAnswer: 'B',
          explanation: 'Leila says: "It gave me a resilience and sense of calm I didn\'t know I possessed."'
        },
        {
          number: 46,
          statement: 'Which person decided to remain in one location rather than moving around constantly?',
          correctAnswer: 'D',
          explanation: 'Kerry notes: "Rather than rushing across the entire continent, I based myself in Melbourne for two months."'
        },
        {
          number: 47,
          statement: 'Which person carried out demanding manual labour during their trip?',
          correctAnswer: 'B',
          explanation: 'Leila describes: "Working outdoors from dawn repairing fences was physically exhausting."'
        },
        {
          number: 48,
          statement: 'Which person recommends maintaining flexibility in one\'s travel itinerary?',
          correctAnswer: 'A',
          explanation: 'Phil advises: "avoid booking every hostel in advance. Leaving your schedule open allows you to tag along when exciting spontaneous road trips crop up."'
        },
        {
          number: 49,
          statement: 'Which person teamed up with someone they had not met previously in person?',
          correctAnswer: 'C',
          explanation: 'Danny mentions: "Buying an old campervan... with another solo traveller I met on an online forum."'
        },
        {
          number: 50,
          statement: 'Which person was impressed by the nighttime sky in an uninhabited region?',
          correctAnswer: 'B',
          explanation: 'Leila recalls: "sitting around campfires under the Milky Way with zero light pollution made all the blisters worthwhile."'
        },
        {
          number: 51,
          statement: 'Which person felt that solo travel enhanced their observation of day-to-day surroundings?',
          correctAnswer: 'D',
          explanation: 'Kerry highlights: "You learn to relish your own company and become far more observant of everyday local life."'
        },
        {
          number: 52,
          statement: 'Which person found that a well-developed network made meeting others effortless?',
          correctAnswer: 'A',
          explanation: 'Phil notes: "The backpacker network along the east coast from Sydney to Cairns is so well established that you are never alone."'
        }
      ]
    }
  },
  {
    id: 'fce-sample-2',
    title: 'Cambridge B2 First - Official Sample Test 2',
    subtitle: 'Reading and Use of English (Parts 1–7) • 52 Questions',
    description: 'Complete official Cambridge practice model featuring Whale Watching, History of the Pencil, Olive Oil production, Sentence Transformations, Deep-sea Marine Biology, The Secret World of Sleep, and Working Holidays.',
    durationMinutes: 75,
    part1: {
      partNumber: 1,
      title: 'Part 1: Multiple-Choice Cloze',
      instructions: 'For questions 1–8, read the text below and decide which answer (A, B, C or D) best fits each gap. There is an example at the beginning (0).',
      passageTitle: 'Where to go whale watching',
      passage: [
        'When asked to list the most wonderful wildlife experiences on Earth, many nature lovers put whale watching (0) [high] on their list. Whale watching is now an industry (1) ______ to be worth over a billion dollars annually worldwide.',
        'The desire to witness these majestic marine mammals in their natural habitat has grown (2) ______ in recent decades. While opportunities to observe whales exist in oceans across the globe, certain locations have established a reputation as world-class viewing destinations. (3) ______ to marine biologists, the southern coast of South Africa is one of the premier spots. Between June and November, southern right whales migrate to the sheltered bays to calve and nurse their young.',
        'Tourists can often see whales directly from the cliffs without even needing to (4) ______ foot on a boat. However, for those keen on getting closer, licensed tour operators run boat trips that (5) ______ strict environmental regulations to avoid disturbing the animals. The boats must (6) ______ a respectful distance and cut their engines if a curious whale approaches.',
        'Whichever destination you choose, seeing a forty-ton whale breach completely out of the water is an experience that will stay with you for the (7) ______ of your life. It serves as a vivid reminder of the sheer splendour of the natural world and why its preservation (8) ______ so urgent.'
      ],
      example: { number: 0, text: 'high', options: ['high', 'tall', 'top', 'steep'], answer: 'high' },
      questions: [
        {
          number: 1,
          options: [
            { key: 'A', text: 'estimated' },
            { key: 'B', text: 'evaluated' },
            { key: 'C', text: 'counted' },
            { key: 'D', text: 'measured' }
          ],
          correctAnswer: 'A',
          explanation: '"Estimated to be worth" is the standard collocated financial expression.'
        },
        {
          number: 2,
          options: [
            { key: 'A', text: 'steadily' },
            { key: 'B', text: 'firmly' },
            { key: 'C', text: 'tightly' },
            { key: 'D', text: 'broadly' }
          ],
          correctAnswer: 'A',
          explanation: '"Grown steadily" describes continuous progressive increase over time.'
        },
        {
          number: 3,
          options: [
            { key: 'A', text: 'Referring' },
            { key: 'B', text: 'Regarding' },
            { key: 'C', text: 'According' },
            { key: 'D', text: 'Dependant' }
          ],
          correctAnswer: 'C',
          explanation: '"According to" introduces an authority or source of information.'
        },
        {
          number: 4,
          options: [
            { key: 'A', text: 'set' },
            { key: 'B', text: 'stand' },
            { key: 'C', text: 'place' },
            { key: 'D', text: 'put' }
          ],
          correctAnswer: 'A',
          explanation: 'Fixed idiom: "to set foot on" (to step or go onto a boat/land).'
        },
        {
          number: 5,
          options: [
            { key: 'A', text: 'conform' },
            { key: 'B', text: 'obey' },
            { key: 'C', text: 'follow' },
            { key: 'D', text: 'comply' }
          ],
          correctAnswer: 'C',
          explanation: '"Follow strict regulations" is the transitive verb that directly takes regulations as its object without a preposition.'
        },
        {
          number: 6,
          options: [
            { key: 'A', text: 'maintain' },
            { key: 'B', text: 'persist' },
            { key: 'C', text: 'sustain' },
            { key: 'D', text: 'retain' }
          ],
          correctAnswer: 'A',
          explanation: '"Maintain a distance" is the standard collocation.'
        },
        {
          number: 7,
          options: [
            { key: 'A', text: 'rest' },
            { key: 'B', text: 'end' },
            { key: 'C', text: 'period' },
            { key: 'D', text: 'duration' }
          ],
          correctAnswer: 'A',
          explanation: 'Idiomatic expression: "for the rest of your life".'
        },
        {
          number: 8,
          options: [
            { key: 'A', text: 'lasts' },
            { key: 'B', text: 'remains' },
            { key: 'C', text: 'continues' },
            { key: 'D', text: 'survives' }
          ],
          correctAnswer: 'B',
          explanation: '"Remains so urgent" links the subject to the adjective complement indicating continued state.'
        }
      ]
    },
    part2: {
      partNumber: 2,
      title: 'Part 2: Open Cloze',
      instructions: 'For questions 9–16, read the text below and think of the word which best fits each gap. Use only ONE word in each gap. There is an example at the beginning (0).',
      passageTitle: 'The Story of the Pencil',
      passage: [
        'The humble pencil is such a familiar everyday object that we rarely stop to think (0) [ABOUT] how it came to exist. In fact, the pencil as we know it today owes (9) ______ existence to a sheer stroke of luck.',
        'In the sixteenth century, a massive deposit of pure graphite was discovered in Borrowdale, Cumbria, in northwest England. The local farmers found it very useful (10) ______ marking their sheep. At first, this substance was thought to be a form of lead, (11) ______ is why we still refer to the core of a pencil as a \'lead\', even though it contains no lead at all.',
        'Because graphite is soft and brittle, it needed to (12) ______ encased in something rigid to prevent it (13) ______ breaking in the user\'s hand. Initially, pieces of graphite were wrapped in string or sheepskin. It was not (14) ______ several decades later that wooden casings were developed by Italian woodworkers.',
        'Today, billions of pencils are manufactured every year across the globe. (15) ______ the rise of digital keyboards and touchscreens, pencils remain as indispensable (16) ______ ever for artists, architects, and students.'
      ],
      example: { number: 0, text: 'ABOUT' },
      questions: [
        {
          number: 9,
          correctAnswer: 'its',
          acceptedAlternatives: [],
          explanation: 'Possessive determiner referring to the pencil: "owes its existence to".'
        },
        {
          number: 10,
          correctAnswer: 'for',
          acceptedAlternatives: [],
          explanation: 'Preposition indicating purpose: "useful for marking".'
        },
        {
          number: 11,
          correctAnswer: 'which',
          acceptedAlternatives: [],
          explanation: 'Relative pronoun referring back to the whole previous clause.'
        },
        {
          number: 12,
          correctAnswer: 'be',
          acceptedAlternatives: [],
          explanation: 'Passive infinitive structure: "needed to be encased".'
        },
        {
          number: 13,
          correctAnswer: 'from',
          acceptedAlternatives: [],
          explanation: 'Dependent preposition following "prevent": "prevent it from breaking".'
        },
        {
          number: 14,
          correctAnswer: 'until',
          acceptedAlternatives: ['till'],
          explanation: 'Fixed temporal cleft structure: "It was not until... that".'
        },
        {
          number: 15,
          correctAnswer: 'despite',
          acceptedAlternatives: ['in spite of'],
          explanation: 'Preposition of concession taking a noun phrase: "Despite the rise".'
        },
        {
          number: 16,
          correctAnswer: 'as',
          acceptedAlternatives: [],
          explanation: 'Comparative of equality: "as indispensable as ever".'
        }
      ]
    },
    part3: {
      partNumber: 3,
      title: 'Part 3: Word Formation',
      instructions: 'For questions 17–24, read the text below. Use the word given in capitals at the end of some of the lines to form a word that fits in the gap in the same line. There is an example at the beginning (0).',
      passageTitle: 'The Liquid Gold: Olive Oil',
      passage: [
        'Olive oil has been an essential staple of Mediterranean culture and cooking for thousands of years. Spain is currently the largest global (17) ______ of olive oil, accounting for nearly half of the world\'s entire supply.',
        'In recent years, medical research has highlighted numerous health benefits associated with the Mediterranean diet. Studies indicate that regular consumption of extra virgin olive oil can protect against heart (18) ______ and lower blood (19) ______.',
        'Nutritionists believe that the high concentration of antioxidants in olive oil is extraordinarily (20) ______ in combating cellular inflammation. In (21) ______, the oil contains healthy monounsaturated fats that support brain health.',
        'Leading culinary (22) ______ around the world now celebrate high-grade olive oils with the same appreciation as fine vintage wines. The only potential (23) ______ is that authentic cold-pressed oils are considerably more expensive than processed vegetable oils. Some varieties are distinctly fruity, while others have a peppery and pleasantly (24) ______ aftertaste.'
      ],
      example: { number: 0, baseWord: 'ORIGIN', text: 'ORIGINAL' },
      questions: [
        {
          number: 17,
          baseWord: 'PRODUCE',
          correctAnswer: 'producer',
          acceptedAlternatives: [],
          explanation: 'Noun describing an entity that produces: "producer".'
        },
        {
          number: 18,
          baseWord: 'ILL',
          correctAnswer: 'illness',
          acceptedAlternatives: ['illnesses', 'disease'],
          explanation: 'Noun form after "heart": "heart illness" or "heart illnesses".'
        },
        {
          number: 19,
          baseWord: 'PRESS',
          correctAnswer: 'pressure',
          acceptedAlternatives: [],
          explanation: 'Compound noun: "blood pressure".'
        },
        {
          number: 20,
          baseWord: 'EFFECT',
          correctAnswer: 'effective',
          acceptedAlternatives: [],
          explanation: 'Adjective following adverb "extraordinarily": "effective".'
        },
        {
          number: 21,
          baseWord: 'ADD',
          correctAnswer: 'addition',
          acceptedAlternatives: [],
          explanation: 'Discourse marker phrase: "In addition".'
        },
        {
          number: 22,
          baseWord: 'SCIENCE',
          correctAnswer: 'scientists',
          acceptedAlternatives: ['experts'],
          explanation: 'Plural agent noun: culinary "scientists" / food scientists.'
        },
        {
          number: 23,
          baseWord: 'ADVANTAGE',
          correctAnswer: 'disadvantage',
          acceptedAlternatives: ['drawback'],
          explanation: 'Negative noun prefix: "disadvantage".'
        },
        {
          number: 24,
          baseWord: 'SPICE',
          correctAnswer: 'spicy',
          acceptedAlternatives: [],
          explanation: 'Adjective modifying aftertaste: "spicy".'
        }
      ]
    },
    part4: {
      partNumber: 4,
      title: 'Part 4: Key Word Transformations',
      instructions: 'For questions 25–30, complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do not change the word given. You must use between TWO and FIVE words, including the word given.',
      questions: [
        {
          number: 25,
          firstSentence: 'I think you should visit the dentist soon.',
          keyWord: 'IDEA',
          secondSentencePrefix: 'It would be',
          secondSentenceSuffix: 'to the dentist soon.',
          correctAnswer: 'a good idea to go',
          acceptedAlternatives: ['a good idea to visit'],
          splitParts: ['a good idea | to go', 'a good idea | to visit'],
          explanation: 'Phrase: "a good idea" + to-infinitive.'
        },
        {
          number: 26,
          firstSentence: 'He is such a talented musician that everyone admires him.',
          keyWord: 'TALENTED',
          secondSentencePrefix: 'He is so',
          secondSentenceSuffix: 'everyone admires him.',
          correctAnswer: 'talented a musician that',
          acceptedAlternatives: ['talented that'],
          splitParts: ['talented a musician | that', 'talented | that'],
          explanation: 'Structure: so + adjective + a/an + noun + that.'
        },
        {
          number: 27,
          firstSentence: "'Do you know what the time is, Sarah?' asked Mark.",
          keyWord: 'IF',
          secondSentencePrefix: 'Mark asked Sarah',
          secondSentenceSuffix: 'the time was.',
          correctAnswer: 'if she knew what',
          acceptedAlternatives: ['whether she knew what'],
          splitParts: ['if she knew | what', 'whether she knew | what'],
          explanation: 'Reported indirect yes/no question using "if she knew what".'
        },
        {
          number: 28,
          firstSentence: 'It took them a long time to finish the project.',
          keyWord: 'SPENT',
          secondSentencePrefix: 'They',
          secondSentenceSuffix: 'finishing the project.',
          correctAnswer: 'spent a long time',
          acceptedAlternatives: ['spent so much time'],
          splitParts: ['spent | a long time'],
          explanation: 'Verb pattern: spend + time expression + -ing form.'
        },
        {
          number: 29,
          firstSentence: 'People say that the castle is over five hundred years old.',
          keyWord: 'SAID',
          secondSentencePrefix: 'The castle is',
          secondSentenceSuffix: 'over five hundred years old.',
          correctAnswer: 'said to be',
          acceptedAlternatives: [],
          splitParts: ['said | to be'],
          explanation: 'Passive reporting structure: subject + is said to be.'
        },
        {
          number: 30,
          firstSentence: 'Because of the thunderstorm, the tennis match was cancelled.',
          keyWord: 'CALL',
          secondSentencePrefix: 'The referee decided to',
          secondSentenceSuffix: 'the tennis match because of the thunderstorm.',
          correctAnswer: 'call off',
          acceptedAlternatives: [],
          splitParts: ['call | off'],
          explanation: 'Phrasal verb: "call off" means to cancel an event.'
        }
      ]
    },
    part5: {
      partNumber: 5,
      title: 'Part 5: Reading Comprehension (Multiple Choice)',
      instructions: 'You are going to read an article about deep-sea exploration and marine ecosystems. For questions 31–36, choose the answer (A, B, C or D) which you think fits best according to the text.',
      passageTitle: 'The Secrets of the Twilight Zone',
      author: 'By Dr. Elena Rostova, Oceanographic Institute',
      passage: [
        'Between two hundred and one thousand metres below the ocean surface lies the mesopelagic zone, colloquially known as the \'twilight zone\'. In this shadowy realm, sunlight fades into perpetual darkness, water temperatures drop precipitously, and hydrostatic pressure mounts to crushing levels. For decades, oceanographers regarded this deep expanse as an aquatic desert, sparse in biomass and largely devoid of complex ecological activity.',
        'Recent robotic explorations and deep-diving submersibles have shattered those outdated assumptions. Advanced acoustics and deep-tow imaging systems revealed that the twilight zone holds up to ninety percent of the world\'s total fish biomass by weight. Billions of tons of bioluminescent lanternfish, bristlemouths, and giant squid thrive here, forming the critical energetic bridge between sunlit surface waters and the abyss below.',
        'Perhaps the most extraordinary phenomenon occurring in this realm is the Diel Vertical Migration. Every night, under the cover of darkness, trillions of mesopelagic organisms embark on a synchronised ascent towards surface waters to feed on plankton. Before dawn breaks, this massive living biomass retreats back into the cold depths to avoid visual predators. It represents the single largest animal migration on Earth, taking place continuously across every ocean.',
        'This immense daily movement plays a pivotal role in planetary carbon regulation. By consuming carbon-rich organic matter at the surface and defecating in the deep ocean, mesopelagic species actively sequester billions of tons of atmospheric carbon into deep marine sediments, effectively locking it away for centuries. Without this biological pump, global climate destabilisation would accelerate substantially.',
        'Yet this fragile frontier faces emerging anthropogenic perils. Commercial fishing fleets, having exhausted traditional surface stocks, are now eyeing mesopelagic fish to grind into fishmeal for aquaculture and livestock feeds. Scientists warn that large-scale industrial harvesting could trigger catastrophic trophic collapses, starving penguins, tuna, and whales that rely on these deep fish for survival.',
        'The international community stands at a decisive crossroads. Unlike shallow coastal waters, most of the twilight zone falls within international high seas, where environmental regulations remain fragmented and notoriously difficult to enforce. Establishing comprehensive marine protected areas and precautionary moratoriums before industrial exploitation begins is imperative if we are to safeguard the beating heart of the global ocean.'
      ],
      questions: [
        {
          number: 31,
          question: 'What historical misconception about the twilight zone is highlighted in the first paragraph?',
          options: [
            { key: 'A', text: 'That it was completely devoid of water currents.' },
            { key: 'B', text: 'That water temperatures were surprisingly warm.' },
            { key: 'C', text: 'That it supported very little marine life.' },
            { key: 'D', text: 'That sunlight penetrated much deeper than previously thought.' }
          ],
          correctAnswer: 'C',
          explanation: 'The text notes that oceanographers regarded it "as an aquatic desert, sparse in biomass and largely devoid of complex ecological activity."'
        },
        {
          number: 32,
          question: 'Modern submersibles and acoustic tools revealed that the twilight zone:',
          options: [
            { key: 'A', text: 'contains only microscopic organisms.' },
            { key: 'B', text: 'accounts for the vast majority of Earth\'s fish biomass.' },
            { key: 'C', text: 'is too hazardous for autonomous equipment.' },
            { key: 'D', text: 'has been largely unaffected by surface conditions.' }
          ],
          correctAnswer: 'B',
          explanation: 'Paragraph 2 states: "the twilight zone holds up to ninety percent of the world\'s total fish biomass by weight."'
        },
        {
          number: 33,
          question: 'Why do mesopelagic organisms migrate to the surface at night?',
          options: [
            { key: 'A', text: 'To escape cold deep water.' },
            { key: 'B', text: 'To lay eggs in warm currents.' },
            { key: 'C', text: 'To feed while reducing the risk of being seen by predators.' },
            { key: 'D', text: 'To absorb vital solar energy.' }
          ],
          correctAnswer: 'C',
          explanation: 'They ascend "under the cover of darkness... to feed on plankton" and retreat before dawn "to avoid visual predators."'
        },
        {
          number: 34,
          question: 'In the fourth paragraph, what vital ecological function is credited to mesopelagic creatures?',
          options: [
            { key: 'A', text: 'Preventing severe underwater volcanic eruptions.' },
            { key: 'B', text: 'Storing carbon deep in the ocean to mitigate climate change.' },
            { key: 'C', text: 'Increasing oxygen production by surface plankton.' },
            { key: 'D', text: 'Filtering microplastic pollution from deep waters.' }
          ],
          correctAnswer: 'B',
          explanation: 'They "actively sequester billions of tons of atmospheric carbon into deep marine sediments, effectively locking it away for centuries."'
        },
        {
          number: 35,
          question: 'What threat to the mesopelagic zone is discussed in the fifth paragraph?',
          options: [
            { key: 'A', text: 'Underwater sound testing by naval ships.' },
            { key: 'B', text: 'The arrival of invasive warm-water species.' },
            { key: 'C', text: 'Deep-sea oil drilling leaks.' },
            { key: 'D', text: 'Industrial fishing for livestock feed production.' }
          ],
          correctAnswer: 'D',
          explanation: 'Commercial fleets are "eyeing mesopelagic fish to grind into fishmeal for aquaculture and livestock feeds."'
        },
        {
          number: 36,
          question: 'In the final paragraph, why is protecting the twilight zone described as particularly challenging?',
          options: [
            { key: 'A', text: 'Most of it lies in international waters with fragmented governance.' },
            { key: 'B', text: 'Scientists lack the equipment to monitor the deep ocean.' },
            { key: 'C', text: 'Public opinion strongly favours expanding commercial fishing.' },
            { key: 'D', text: 'The ecosystem is already damaged beyond repair.' }
          ],
          correctAnswer: 'A',
          explanation: 'The text highlights: "most of the twilight zone falls within international high seas, where environmental regulations remain fragmented and notoriously difficult to enforce."'
        }
      ]
    },
    part6: {
      partNumber: 6,
      title: 'Part 6: Gapped Text',
      instructions: 'You are going to read an article about the science of human sleep and cognitive performance. Six sentences have been removed from the article. Choose from the sentences A–G the one which fits each gap (37–42). There is one extra sentence which you do not need to use.',
      passageTitle: 'The Secret Architecture of Sleep',
      author: 'By Dr. Marcus Vance',
      passage: [
        'Throughout human history, sleep was commonly viewed as a passive state of biological dormancy, an unavoidable downtime between periods of productive consciousness. (37) [______] Modern neuroscience has overturned this simplistic picture, proving that the sleeping brain is humming with complex architectural activity.',
        'Sleep unfolds in recurring ninety-minute cycles, alternating between Non-Rapid Eye Movement (NREM) and Rapid Eye Movement (REM) states. (38) [______] During deep NREM slow-wave sleep, the brain initiates a microscopic cleansing mechanism known as the glymphatic system, flushing out toxic metabolic waste products that accumulate during waking hours.',
        'Equally vital is sleep\'s transformative effect on memory consolidation and skill acquisition. (39) [______] Neuroimaging reveals that newly encoded neural patterns in the hippocampus are systematically transferred to the neocortex for permanent archival storage while we slumber.',
        'Chronic sleep curtailment, pervasive in contemporary society, produces profound cognitive deficits. (40) [______] Even modest reductions of sleep—down to six hours a night for two consecutive weeks—impair reaction times and decision-making as severely as legal alcohol intoxication.',
        'Furthermore, emotional equilibrium depends fundamentally upon adequate REM sleep. (41) [______] It is during these vivid dream periods that the brain strips painful emotional charges from traumatic memories, allowing individuals to maintain resilience amidst life\'s daily stressors.',
        'Prioritizing consistent sleep is therefore not an indulgence or a concession to weakness. (42) [______] Treating sleep with the respect it deserves remains the single most effective investment anyone can make in their cognitive longevity and well-being.'
      ],
      gappedSentences: [
        {
          key: 'A',
          text: 'Each distinct phase serves highly specialized physiological and restorative functions.'
        },
        {
          key: 'B',
          text: 'Many historical leaders famously boasted about surviving on only four hours of slumber each night.'
        },
        {
          key: 'C',
          text: 'Far from being a waste of valuable waking time, it represents the foundational pillar of peak mental performance.'
        },
        {
          key: 'D',
          text: 'It was dismissed as an inconvenient physical necessity rather than an active health process.'
        },
        {
          key: 'E',
          text: 'Far from idling, our cerebral circuits replay the day\'s experiences at high speed to fortify learning.'
        },
        {
          key: 'F',
          text: 'Often, people fail to perceive their own increasing impairment as sleep deprivation takes hold.'
        },
        {
          key: 'G',
          text: 'During REM phases, the brain recalibrates neurochemical circuits that regulate empathy and mood.'
        }
      ],
      questions: [
        {
          number: 37,
          correctAnswer: 'D',
          explanation: 'D fits the historical context of dismissing sleep as an inconvenient downtime.'
        },
        {
          number: 38,
          correctAnswer: 'A',
          explanation: 'A links the mentioned alternating NREM and REM states to their specific specialized functions.'
        },
        {
          number: 39,
          correctAnswer: 'E',
          explanation: 'E develops memory consolidation: replaying experiences to fortify neural pathways.'
        },
        {
          number: 40,
          correctAnswer: 'F',
          explanation: 'F elaborates on chronic sleep curtailment and the subjective unawareness of impairment.'
        },
        {
          number: 41,
          correctAnswer: 'G',
          explanation: 'G directly connects to the emotional calibration during REM dream phases.'
        },
        {
          number: 42,
          correctAnswer: 'C',
          explanation: 'C provides the summarizing climax of the essay: sleep as the foundation of mental performance.'
        }
      ]
    },
    part7: {
      partNumber: 7,
      title: 'Part 7: Multiple Matching',
      instructions: 'You are going to read four people\'s accounts of taking a gap year or career break to work abroad. For questions 43–52, choose from the people (A–D). The people may be chosen more than once.',
      passageTitle: 'Working Abroad Experiences',
      sections: [
        {
          id: 'A',
          author: 'Maya: The Ski Instructor in Canada',
          text: 'Qualifying as a ski instructor in Banff was the steepest learning curve of my life. Teaching energetic children in temperatures dropping to minus twenty degrees tested my patience to its limits. But seeing a nervous beginner transition to carving down blue runs with confidence was incredibly gratifying. The international staff house was a melting pot of nationalities, and living alongside instructors from Japan, Germany, and New Zealand broadened my cultural worldview immeasurably.'
        },
        {
          id: 'B',
          author: 'Julian: The Eco-Farm Hand in New Zealand',
          text: 'Burned out by six years in corporate finance, I traded my laptop for pruning shears on an organic vineyard in Marlborough. Rising before sunrise for physical grafting in muddy boots was a shock to the system, but the mental release was immediate. When you spend ten hours caring for living vines under open skies, the artificial deadlines of office life lose all their power. I returned to London with a transformed perspective on work-life balance.'
        },
        {
          id: 'C',
          author: 'Chloe: The English Teacher in Japan',
          text: 'Teaching conversational English in a rural secondary school in Hokkaido was an intense dive into a culture governed by subtle etiquette and politeness. In the beginning, misinterpreting body language and classroom protocols caused plenty of comic misunderstandings. However, the warmth of the local teachers and students soon put me at ease. Joining the community taiko drumming troupe after school helped me forge deep friendships that transcended the language barrier.'
        },
        {
          id: 'D',
          author: 'Liam: The Wildlife Conservationist in Costa Rica',
          text: 'Stationed at a sea turtle protection camp on the Pacific coast of Costa Rica, our routine consisted of night-time beach patrols in torrential tropical rain. Protecting endangered leatherback nests from illegal poachers required constant vigilance and high levels of teamwork. Witnessing hundreds of tiny turtle hatchlings scampering safely into the ocean under the moon was an emotional reward that money could never match.'
        }
      ],
      questions: [
        {
          number: 43,
          statement: 'Which person describes an experience that provided deep relief from previous professional stress?',
          correctAnswer: 'B',
          explanation: 'Julian notes: "Burned out by six years in corporate finance... the mental release was immediate."'
        },
        {
          number: 44,
          statement: 'Which person mentions overcoming cultural and social blunders early in their stay?',
          correctAnswer: 'C',
          explanation: 'Chloe admits: "misinterpreting body language and classroom protocols caused plenty of comic misunderstandings."'
        },
        {
          number: 45,
          statement: 'Which person experienced extreme cold weather during their daily working routine?',
          correctAnswer: 'A',
          explanation: 'Maya mentions "temperatures dropping to minus twenty degrees" while working in Canada.'
        },
        {
          number: 46,
          statement: 'Which person felt a profound sense of satisfaction from protecting endangered animals?',
          correctAnswer: 'D',
          explanation: 'Liam describes "protecting endangered leatherback nests" and seeing hatchlings reach the ocean safely.'
        },
        {
          number: 47,
          statement: 'Which person found that a non-verbal creative hobby helped establish local bonds?',
          correctAnswer: 'C',
          explanation: 'Chloe writes: "Joining the community taiko drumming troupe... helped me forge deep friendships that transcended the language barrier."'
        },
        {
          number: 48,
          statement: 'Which person gained immense fulfilment from witnessing a student\'s progress?',
          correctAnswer: 'A',
          explanation: 'Maya recounts: "seeing a nervous beginner transition to carving down blue runs with confidence was incredibly gratifying."'
        },
        {
          number: 49,
          statement: 'Which person emphasizes that the emotional reward far exceeded monetary compensation?',
          correctAnswer: 'D',
          explanation: 'Liam states it was "an emotional reward that money could never match."'
        },
        {
          number: 50,
          statement: 'Which person benefited from living in shared accommodation with colleagues from around the world?',
          correctAnswer: 'A',
          explanation: 'Maya notes: "The international staff house was a melting pot of nationalities... broadened my cultural worldview immeasurably."'
        },
        {
          number: 51,
          statement: 'Which person realized that their previous workplace pressures were largely artificial?',
          correctAnswer: 'B',
          explanation: 'Julian realized: "When you spend ten hours caring for living vines... the artificial deadlines of office life lose all their power."'
        },
        {
          number: 52,
          statement: 'Which person had to conduct duties under challenging nocturnal weather conditions?',
          correctAnswer: 'D',
          explanation: 'Liam explains: "our routine consisted of night-time beach patrols in torrential tropical rain."'
        }
      ]
    }
  }
];
