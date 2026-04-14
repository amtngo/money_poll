const questions = [

{ id: "Q1", question: "After spending, what do you actually feel?", options: ["No regret","Slight doubt","Regret","Strong regret"] },

{ id: "Q2", question: "When you get paid, what do you actually do first?", options: ["Save first","Think a bit","Spend first","No plan"] },

{ id: "Q3", question: "When spending, what makes you lose control?", options: ["Full control","Mostly control","Sometimes lose","No control"] },

{ id: "Q4", question: "When you overspend, what do you do next?", options: ["Ignore it","Think about it","Feel bad","Regret it"] },

{ id: "Q5", question: "When stressed, what do you do with money?", options: ["Never spend","Think about it","Spend a bit","Spend a lot"] },

{ id: "Q6", question: "When choosing wants vs needs, what do you pick?", options: ["Mostly needs","Balanced","Mostly wants","Only wants"] },

{ id: "Q7", question: "When getting extra money, what do you do first?", options: ["Save first","Think about it","Spend first","Spend without thinking"] },

{ id: "Q8", question: "When you spend, what do you actually do?", options: ["Track everything","Rough track","Guess","No tracking"] },

{ id: "Q9", question: "When you use money daily, what do you actually do?", options: ["Track everything","Some tracking","Guess","No tracking"] },

{ id: "Q10", question: "How do you feel about your money habits?", options: ["Very good","Okay","Not good","Bad"] },

{ id: "Q11", question: "When you overspend, what do you blame?", options: ["Nothing","Situation","Others","Myself"] },

{ id: "Q12", question: "When you see others spending, what do you feel?", options: ["Nothing","A little pressure","Comparison","Need to match"] },

{ id: "Q13", question: "When money runs low, what do you cut first?", options: ["Nothing","Small spending","Important spending","Everything"] },

{ id: "Q14", question: "When facing unexpected costs, what do you do first?", options: ["Always prepared","Somewhat ready","Barely ready","Not prepared"] },

{ id: "Q15", question: "When thinking about emergencies, what do you prepare?", options: ["Fully ready","Somewhat","Barely","Not ready"] },

{ id: "Q16", question: "When you need money, what do you do first?", options: ["Use my own","Cut spending","Think about borrowing","Borrow right away"] },

{ id: "Q17", question: "When someone asks you for money, what do you do?", options: ["Help right away","Think about it","Rarely help","Say no"] },

{ id: "Q18", question: "When planning money, what do you actually do?", options: ["Clear plan","Basic plan","Thinking","No plan"] },

{ id: "Q19", question: "When setting a budget, what do you do?", options: ["Strict","Loose","Trying","None"] },

{ id: "Q20", question: "When trying to cut spending, what do you struggle with?", options: ["Easy","Manageable","Hard","Impossible"] },

{ id: "Q21", question: "When managing expenses, where do you lose control?", options: ["Very controlled","Mostly","Struggling","Out of control"] },

{ id: "Q22", question: "When emotions affect spending, what do you do?", options: ["Never affects me","A little","Often","Always"] },

{ id: "Q23", question: "When spending to impress, what do you do?", options: ["Never do it","Think about it","Do it sometimes","Do it often"] },

{ id: "Q24", question: "When spending for happiness, what do you choose?", options: ["Always worth it","Sometimes","Rarely","Not worth it"] },

{ id: "Q25", question: "When buying online, what do you do?", options: ["Think first","Check a bit","Click fast","Buy instantly"] },

{ id: "Q26", question: "When reviews conflict, what do you follow?", options: ["Best rating","Most reviews","Gut feeling","Just buy"] },

{ id: "Q27", question: "When using subscriptions, what do you do?", options: ["Well managed","Some","Too many","No control"] },

{ id: "Q28", question: "How long do you keep subscriptions you don’t use?", options: ["Cancel fast","Keep a bit","Keep long","Never cancel"] },

{ id: "Q29", question: "What small spending do you ignore the most?", options: ["Coffee","Food","Subscriptions","Everything"] },

{ id: "Q30", question: "When you see a sale, what do you ignore?", options: ["Nothing","Price","Need","Everything"] },

{ id: "Q31", question: "When checking your balance, what do you avoid seeing?", options: ["Nothing","Small drops","Big spending","Everything"] },

{ id: "Q32", question: "When checking your bank, what do you ignore?", options: ["Nothing","Small things","Most things","Everything"] },

{ id: "Q33", question: "When money comes in, what do you forget first?", options: ["Nothing","Saving","Planning","Everything"] },

{ id: "Q34", question: "Before buying, what do you skip first?", options: ["Nothing","Comparing","Thinking","Everything"] },

{ id: "Q35", question: "When delaying a purchase, what makes you give in?", options: ["Nothing","Small urge","Strong urge","Always give in"] },

{ id: "Q36", question: "When trying to save automatically, what stops you?", options: ["Nothing","Forget it","Hard to keep","Never works"] },

{ id: "Q37", question: "When bills come in, what do you delay first?", options: ["Nothing","Small bills","Big ones","Everything"] },

{ id: "Q38", question: "When tracking spending, what makes you stop?", options: ["Never stop","Get tired","Lose track","Give up"] },

{ id: "Q39", question: "When avoiding spending, what makes you break it?", options: ["Always avoid","Sometimes","Rarely","Never"] },

{ id: "Q40", question: "When dealing with debt, what do you do?", options: ["Always avoid","Sometimes","Rarely","Always in debt"] },

{ id: "Q41", question: "When spending, what makes you exceed limits?", options: ["Always within","Sometimes within","Often exceed","Always exceed"] },

{ id: "Q42", question: "When spending with others, what do you do?", options: ["Fair balance","Mostly fair","Sometimes overspend","No control"] },

{ id: "Q43", question: "When you use your card, what do you do?", options: ["Fully planned","Mostly planned","Sometimes impulse","Fully impulse"] },

{ id: "Q44", question: "When choosing cash or card, what do you use?", options: ["Mostly cash","Balanced","Mostly card","Only card"] },

{ id: "Q45", question: "When saving money, what do you do?", options: ["Always consistent","Try to save","Save sometimes","Rarely save"] },

{ id: "Q46", question: "When saving for emergencies, what do you do first?", options: ["Always ready","Somewhat ready","Barely ready","Not ready"] },

{ id: "Q47", question: "When you delay saving, what do you tell yourself?", options: ["Nothing","Start soon","Later is fine","No need"] },

{ id: "Q48", question: "When planning big purchases, what do you do first?", options: ["Plan ahead","Rough idea","Decide later","No plan"] },

{ id: "Q49", question: "When thinking about living costs, what do you check?", options: ["Very clear","Somewhat clear","Vague","No idea"] },

{ id: "Q50", question: "When reviewing expenses, what do you check?", options: ["Check everything","Check some","Ignore small","Ignore most"] },

{ id: "Q51", question: "When you think about money, what do you choose?", options: ["Security first","Balance","Enjoyment","Just spending"] },

{ id: "Q52", question: "When thinking about your future, what do you delay most?", options: ["Nothing","Small plans","Big plans","Everything"] },

{ id: "Q53", question: "When spending on yourself, what do you do?", options: ["Balanced","Spend a bit","Spend more","Overspend"] },

{ id: "Q54", question: "When spending on learning, what do you hesitate about?", options: ["Nothing","Price","Value","Everything"] },

{ id: "Q55", question: "When investing in yourself, what do you do?", options: ["Invest in myself","Think about it","Delay it","Ignore it"] },

{ id: "Q56", question: "After spending, how do you justify it?", options: ["Makes sense","Probably fine","Not sure","Regret it"] }

];