const questions = [
  {
    id: "Q1",
    question: "After spending, how do YOU justify it?",
    options: ["Makes sense","Probably fine","Not sure","Regret it"]
  },
  {
    id: "Q2",
    question: "When planning big purchases, what do YOU actually do first?",
    options: ["Plan ahead","Rough idea","Decide later","No plan"]
  },
  {
    id: "Q3",
    question: "When checking your balance, what do YOU avoid seeing?",
    options: ["Nothing","Small drops","Big spending","Everything"]
  },
  {
    id: "Q4",
    question: "When you use your card, what do YOU actually do?",
    options: ["Fully planned","Mostly planned","Sometimes impulse","Fully impulse"]
  },
  {
    id: "Q5",
    question: "What small spending do YOU ignore the most?",
    options: ["Coffee","Food","Subscriptions","Everything"]
  },
  {
    id: "Q6",
    question: "When choosing cash or card, what do YOU actually use?",
    options: ["Mostly cash","Balanced","Mostly card","Only card"]
  },
  {
    id: "Q7",
    question: "When checking your bank, what do YOU ignore?",
    options: ["Nothing","Small things","Most things","Everything"]
  },
  {
    id: "Q8",
    question: "When saving money, what do YOU actually do?",
    options: ["Always consistent","Try to save","Save sometimes","Rarely save"]
  },
  {
    id: "Q9",
    question: "When you see a sale, what do YOU ignore?",
    options: ["Nothing","Price","Need","Everything"]
  },
  {
    id: "Q10",
    question: "When spending on yourself, what do YOU actually do?",
    options: ["Balanced","Spend a bit","Spend more","Overspend"]
  },
  {
    id: "Q11",
    question: "When YOU need money, what do YOU do first?",
    options: ["Use my own","Cut spending","Think about borrowing","Borrow right away"]
  },
  {
    id: "Q12",
    question: "When thinking about living costs, what do YOU actually check?",
    options: ["Very clear","Somewhat clear","Vague","No idea"]
  },
  {
    id: "Q13",
    question: "When someone asks YOU for money, what do YOU do?",
    options: ["Help right away","Think about it","Rarely help","Say no"]
  },
  {
    id: "Q14",
    question: "When planning money, what do YOU actually do?",
    options: ["Clear plan","Basic plan","Thinking","No plan"]
  },
  {
    id: "Q15",
    question: "When spending on learning, what do YOU hesitate about?",
    options: ["Nothing","Price","Value","Everything"]
  },
  {
    id: "Q16",
    question: "When setting a budget, what do YOU actually do?",
    options: ["Strict","Loose","Trying","None"]
  },
  {
    id: "Q17",
    question: "When thinking about your future, what do YOU delay most?",
    options: ["Nothing","Small plans","Big plans","Everything"]
  },
  {
    id: "Q18",
    question: "When you think about money, what do YOU actually choose?",
    options: ["Security first","Balance","Enjoyment","Just spending"]
  },
  {
    id: "Q19",
    question: "When reviewing expenses, what do YOU actually check?",
    options: ["Check everything","Check some","Ignore small","Ignore most"]
  },
  {
    id: "Q20",
    question: "When spending for happiness, what do YOU choose?",
    options: ["Always worth it","Sometimes","Rarely","Not worth it"]
  },
  {
    id: "Q21",
    question: "When following financial news, what do YOU actually do?",
    options: ["Follow closely","Check sometimes","Hear randomly","Ignore it"]
  },
  {
    id: "Q22",
    question: "When you get paid, what do YOU actually do first?",
    options: ["Save first","Think a bit","Spend first","No plan"]
  },
  {
    id: "Q23",
    question: "After spending, what do YOU actually feel?",
    options: ["No regret","Slight doubt","Regret","Strong regret"]
  },
  {
    id: "Q24",
    question: "When spending, what makes YOU lose control?",
    options: ["Full control","Mostly control","Sometimes lose","No control"]
  },
  {
    id: "Q25",
    question: "When YOU overspend, what do YOU do next?",
    options: ["Ignore it","Think about it","Feel bad","Regret it"]
  },
  {
    id: "Q26",
    question: "When thinking about emergencies, what do YOU actually prepare?",
    options: ["Fully ready","Somewhat","Barely","Not ready"]
  },
  {
    id: "Q27",
    question: "When stressed, what do YOU actually do with money?",
    options: ["Never spend","Think about it","Spend a bit","Spend a lot"]
  },
  {
    id: "Q28",
    question: "When choosing wants vs needs, what do YOU pick?",
    options: ["Mostly needs","Balanced","Mostly wants","Only wants"]
  },
  {
    id: "Q29",
    question: "When getting extra money, what do YOU actually do first?",
    options: ["Save first","Think about it","Spend first","Spend without thinking"]
  },
  {
    id: "Q30",
    question: "When spending to impress, what do YOU actually do?",
    options: ["Never do it","Think about it","Do it sometimes","Do it often"]
  },
  {
    id: "Q31",
    question: "When feeling money stress, what do YOU actually do?",
    options: ["Ignore it","Think about it","Stress a bit","Stress a lot"]
  },
  {
    id: "Q32",
    question: "When trying to cut spending, what do YOU struggle with?",
    options: ["Easy","Manageable","Hard","Impossible"]
  },
  {
    id: "Q33",
    question: "When managing expenses, where do YOU actually lose control?",
    options: ["Very controlled","Mostly","Struggling","Out of control"]
  },
  {
    id: "Q34",
    question: "When spending with others, what do YOU actually do?",
    options: ["Fair balance","Mostly fair","Sometimes overspend","No control"]
  },
  {
    id: "Q35",
    question: "When emotions affect spending, what do YOU actually do?",
    options: ["Never affects me","A little","Often","Always"]
  },
  {
    id: "Q36",
    question: "When avoiding spending, what makes YOU break it?",
    options: ["Always avoid","Sometimes","Rarely","Never"]
  },
  {
    id: "Q37",
    question: "When dealing with debt, what do YOU actually do?",
    options: ["Always avoid","Sometimes","Rarely","Always in debt"]
  },
  {
    id: "Q38",
    question: "When spending, what makes YOU exceed limits?",
    options: ["Always within","Sometimes within","Often exceed","Always exceed"]
  },
  {
    id: "Q39",
    question: "When tracking spending, what makes YOU stop?",
    options: ["Never stop","Get tired","Lose track","Give up"]
  },
  {
    id: "Q40",
    question: "Before buying, what do YOU skip first?",
    options: ["Nothing","Comparing","Thinking","Everything"]
  },
  {
    id: "Q41",
    question: "When money comes in, what do YOU forget first?",
    options: ["Nothing","Saving","Planning","Everything"]
  },
  {
    id: "Q42",
    question: "When delaying a purchase, what makes YOU give in?",
    options: ["Nothing","Small urge","Strong urge","Always give in"]
  },
  {
    id: "Q43",
    question: "When trying to save automatically, what stops YOU?",
    options: ["Nothing","Forget it","Hard to keep","Never works"]
  },
  {
    id: "Q44",
    question: "When bills come in, what do YOU delay first?",
    options: ["Nothing","Small bills","Big ones","Everything"]
  },
  {
    id: "Q45",
    question: "When using subscriptions, what do YOU actually do?",
    options: ["Well managed","Some","Too many","No control"]
  },
  {
    id: "Q46",
    question: "How long do YOU keep subscriptions you don’t use?",
    options: ["Cancel fast","Keep a bit","Keep long","Never cancel"]
  },
  {
    id: "Q47",
    question: "When buying online, what do YOU actually do?",
    options: ["Think first","Check a bit","Click fast","Buy instantly"]
  },
  {
    id: "Q48",
    question: "When reviews conflict, what do YOU follow?",
    options: ["Best rating","Most reviews","Gut feeling","Just buy"]
  },
  {
    id: "Q49",
    question: "When investing in yourself, what do YOU actually do?",
    options: ["Invest in myself","Think about it","Delay it","Ignore it"]
  },
  {
    id: "Q50",
    question: "When you use money daily, what do YOU actually do?",
    options: ["Track everything","Some tracking","Guess","No tracking"]
  },
  {
    id: "Q51",
    question: "When you spend, what do YOU actually do?",
    options: ["Track everything","Rough track","Guess","No tracking"]
  },
  {
    id: "Q52",
    question: "When your spending changes, what do YOU actually do?",
    options: ["Much better","Slightly better","Same","Worse"]
  },
  {
    id: "Q53",
    question: "How do YOU feel about your money habits?",
    options: ["Very good","Okay","Not good","Bad"]
  },
  {
    id: "Q54",
    question: "When thinking about debt, what do YOU actually check?",
    options: ["Exact","Rough idea","Not sure","No idea"]
  },
  {
    id: "Q55",
    question: "When thinking about income, what do YOU actually check?",
    options: ["Exact","Rough","Not sure","No idea"]
  },
  {
    id: "Q56",
    question: "When saving for emergencies, what do YOU actually do first?",
    options: ["Always ready","Somewhat ready","Barely ready","Not ready"]
  },
  {
    id: "Q57",
    question: "When making money decisions, what do YOU rely on?",
    options: ["Clear plan","Some logic","Guess","Impulse"]
  },
  {
    id: "Q58",
    question: "When thinking about net worth, what do YOU actually check?",
    options: ["Exact","Rough","Not sure","No idea"]
  },
  {
    id: "Q59",
    question: "When facing unexpected costs, what do YOU actually do first?",
    options: ["Always prepared","Somewhat ready","Barely ready","Not prepared"]
  },
  {
    id: "Q60",
    question: "When you delay saving, what do YOU tell yourself?",
    options: ["Nothing","Start soon","Later is fine","No need"]
  },
  {
    id: "Q61",
    question: "When you overspend, what do YOU blame?",
    options: ["Nothing","Situation","Others","Myself"]
  },
  {
    id: "Q62",
    question: "When you see others spending, what do YOU feel?",
    options: ["Nothing","A little pressure","Comparison","Need to match"]
  },
  {
    id: "Q63",
    question: "When money runs low, what do YOU cut first?",
    options: ["Nothing","Small spending","Important spending","Everything"]
  }
];