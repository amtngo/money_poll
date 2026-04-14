const questions = [

{
  id: "Q1",
  question: "After spending, what do you actually feel?",
  options: [
    { text: "No regret", result: ["You feel fine after spending.", "You don’t question it."] },
    { text: "Slight doubt", result: ["You feel a bit unsure.", "But you move on quickly."] },
    { text: "Regret", result: ["You regret spending later.", "You notice it after it's done."] },
    { text: "Strong regret", result: ["You strongly regret spending.", "But it keeps happening."] }
  ]
},

{
  id: "Q2",
  question: "When you get paid, what do you actually do first?",
  options: [
    { text: "Save first", result: ["You save before anything else.", "You already decided in advance."] },
    { text: "Think a bit", result: ["You think before spending.", "But you still give in."] },
    { text: "Spend first", result: ["You spend before planning.", "It happens without thinking."] },
    { text: "No plan", result: ["You don’t plan at all.", "Money just flows away."] }
  ]
},

{
  id: "Q3",
  question: "When spending, what makes you lose control?",
  options: [
    { text: "Full control", result: ["You stay fully in control.", "Spending doesn’t shake you."] },
    { text: "Mostly control", result: ["You mostly stay in control.", "But not always."] },
    { text: "Sometimes lose", result: ["You lose control sometimes.", "It depends on the moment."] },
    { text: "No control", result: ["You don’t control spending well.", "It happens without awareness."] }
  ]
},

{
  id: "Q4",
  question: "When you overspend, what do you do next?",
  options: [
    { text: "Ignore it", result: ["You ignore overspending.", "You move on quickly."] },
    { text: "Think about it", result: ["You think about what happened.", "But nothing really changes."] },
    { text: "Feel bad", result: ["You feel bad after spending.", "But it doesn’t stop you."] },
    { text: "Regret it", result: ["You regret it clearly.", "You know it shouldn’t repeat."] }
  ]
},

{
  id: "Q5",
  question: "When stressed, what do you do with money?",
  options: [
    { text: "Never spend", result: ["You stay in control under stress.", "You hold your spending."] },
    { text: "Think about it", result: ["You pause before spending.", "But stress still affects you."] },
    { text: "Spend a bit", result: ["You spend to ease stress.", "You don’t notice it."] },
    { text: "Spend a lot", result: ["Stress turns into spending.", "You lose control easily."] }
  ]
},

{
  id: "Q6",
  question: "When choosing wants vs needs, what do you pick?",
  options: [
    { text: "Mostly needs", result: ["You focus on what you need.", "You keep it practical."] },
    { text: "Balanced", result: ["You balance needs and wants.", "But it can shift easily."] },
    { text: "Mostly wants", result: ["You lean toward what you want.", "Needs come later."] },
    { text: "Only wants", result: ["You follow what you want.", "Control isn’t the priority."] }
  ]
},

{
  id: "Q7",
  question: "When getting extra money, what do you do first?",
  options: [
    { text: "Save first", result: ["You secure money first.", "You act with intention."] },
    { text: "Think about it", result: ["You think before acting.", "But delay changes nothing."] },
    { text: "Spend first", result: ["You spend right away.", "Planning comes later."] },
    { text: "Spend without thinking", result: ["You spend instantly.", "There’s no pause."] }
  ]
},

{
  id: "Q8",
  question: "When you spend, what do you actually do?",
  options: [
    { text: "Track everything", result: ["You track every detail.", "You stay fully aware."] },
    { text: "Rough track", result: ["You track roughly.", "Details are often missed."] },
    { text: "Guess", result: ["You rely on guessing.", "Accuracy isn’t there."] },
    { text: "No tracking", result: ["You don’t track at all.", "You don’t see the flow."] }
  ]
},

{
  id: "Q9",
  question: "When you use money daily, what do you actually do?",
  options: [
    { text: "Track everything", result: ["You manage daily spending well.", "You stay aware."] },
    { text: "Some tracking", result: ["You track sometimes.", "But miss patterns."] },
    { text: "Guess", result: ["You rely on guessing.", "You don’t see clearly."] },
    { text: "No tracking", result: ["You don’t track anything.", "Money moves unnoticed."] }
  ]
},

{
  id: "Q10",
  question: "How do you feel about your money habits?",
  options: [
    { text: "Very good", result: ["You feel confident about your habits.", "You trust your system."] },
    { text: "Okay", result: ["You feel okay about it.", "But there are doubts."] },
    { text: "Not good", result: ["You know it’s not working.", "But haven’t fixed it."] },
    { text: "Bad", result: ["You feel bad about it.", "You feel stuck."] }
  ]
},

{
  id: "Q11",
  question: "When you overspend, what do you blame?",
  options: [
    { text: "Nothing", result: ["You take full responsibility.", "You don’t blame anything."] },
    { text: "Situation", result: ["You blame the situation.", "It feels out of control."] },
    { text: "Others", result: ["You blame others sometimes.", "It shifts away from you."] },
    { text: "Myself", result: ["You blame yourself.", "You carry the pressure."] }
  ]
},

{
  id: "Q12",
  question: "When you see others spending, what do you feel?",
  options: [
    { text: "Nothing", result: ["You’re not affected by others.", "You stay independent."] },
    { text: "A little pressure", result: ["You feel slight pressure.", "But you hold back."] },
    { text: "Comparison", result: ["You compare yourself.", "It affects your decisions."] },
    { text: "Need to match", result: ["You feel the need to match.", "You act on it."] }
  ]
},

{
  id: "Q13",
  question: "When money runs low, what do you cut first?",
  options: [
    { text: "Nothing", result: ["You don’t cut anything.", "You keep your habits."] },
    { text: "Small spending", result: ["You cut small things first.", "You try to adjust lightly."] },
    { text: "Important spending", result: ["You cut important things.", "Pressure hits hard."] },
    { text: "Everything", result: ["You cut everything.", "You react strongly."] }
  ]
},

{
  id: "Q14",
  question: "When facing unexpected costs, what do you do first?",
  options: [
    { text: "Always prepared", result: ["You are always prepared.", "You planned ahead."] },
    { text: "Somewhat ready", result: ["You’re somewhat ready.", "But not fully."] },
    { text: "Barely ready", result: ["You’re barely ready.", "It feels tight."] },
    { text: "Not prepared", result: ["You’re not prepared.", "It hits suddenly."] }
  ]
},

{
  id: "Q15",
  question: "When thinking about emergencies, what do you prepare?",
  options: [
    { text: "Fully ready", result: ["You prepare for emergencies.", "You don’t leave it to chance."] },
    { text: "Somewhat", result: ["You prepare a bit.", "But not fully ready."] },
    { text: "Barely", result: ["You barely prepare.", "You hope it works out."] },
    { text: "Not ready", result: ["You don’t prepare at all.", "You deal with it later."] }
  ]
},

{
  id: "Q16",
  question: "When you need money, what do you do first?",
  options: [
    { text: "Use my own", result: ["You rely on your own money.", "You stay independent."] },
    { text: "Cut spending", result: ["You cut spending first.", "You try to adjust."] },
    { text: "Think about borrowing", result: ["You consider borrowing.", "You hesitate first."] },
    { text: "Borrow right away", result: ["You borrow immediately.", "You solve it fast."] }
  ]
},

{
  id: "Q17",
  question: "When someone asks you for money, what do you do?",
  options: [
    { text: "Help right away", result: ["You help immediately.", "You don’t hesitate."] },
    { text: "Think about it", result: ["You think before helping.", "You consider your situation."] },
    { text: "Rarely help", result: ["You rarely help.", "You protect your money."] },
    { text: "Say no", result: ["You say no clearly.", "You set boundaries."] }
  ]
},

{
  id: "Q18",
  question: "When planning money, what do you actually do?",
  options: [
    { text: "Clear plan", result: ["You plan clearly.", "You follow your system."] },
    { text: "Basic plan", result: ["You have a rough plan.", "But it’s not strict."] },
    { text: "Thinking", result: ["You think about planning.", "But don’t act on it."] },
    { text: "No plan", result: ["You don’t plan at all.", "You go with the flow."] }
  ]
},

{
  id: "Q19",
  question: "When setting a budget, what do you do?",
  options: [
    { text: "Strict", result: ["You follow a strict budget.", "You stay disciplined."] },
    { text: "Loose", result: ["You keep it flexible.", "You adjust as needed."] },
    { text: "Trying", result: ["You try to budget.", "But it doesn’t stick."] },
    { text: "None", result: ["You don’t budget.", "You spend freely."] }
  ]
},

{
  id: "Q20",
  question: "When trying to cut spending, what do you struggle with?",
  options: [
    { text: "Easy", result: ["Cutting spending is easy.", "You control yourself well."] },
    { text: "Manageable", result: ["You manage it okay.", "But it takes effort."] },
    { text: "Hard", result: ["It’s hard to cut spending.", "You feel the pressure."] },
    { text: "Impossible", result: ["It feels impossible.", "You give in quickly."] }
  ]
},

{
  id: "Q21",
  question: "When managing expenses, where do you lose control?",
  options: [
    { text: "Very controlled", result: ["You manage expenses well.", "You stay in control."] },
    { text: "Mostly", result: ["You mostly manage well.", "But slip sometimes."] },
    { text: "Struggling", result: ["You struggle often.", "Control isn’t stable."] },
    { text: "Out of control", result: ["You lose control easily.", "Spending runs ahead."] }
  ]
},

{
  id: "Q22",
  question: "When emotions affect spending, what do you do?",
  options: [
    { text: "Never affects me", result: ["Emotions don’t affect you.", "You stay rational."] },
    { text: "A little", result: ["Emotions affect you slightly.", "You still manage it."] },
    { text: "Often", result: ["Emotions affect you often.", "It changes decisions."] },
    { text: "Always", result: ["Emotions drive spending.", "You follow the feeling."] }
  ]
},

{
  id: "Q23",
  question: "When spending to impress, what do you do?",
  options: [
    { text: "Never do it", result: ["You don’t spend to impress.", "You stay true to yourself."] },
    { text: "Think about it", result: ["You consider it sometimes.", "But hesitate."] },
    { text: "Do it sometimes", result: ["You do it occasionally.", "It depends on the moment."] },
    { text: "Do it often", result: ["You often spend to impress.", "It influences your choices."] }
  ]
},

{
  id: "Q24",
  question: "When spending for happiness, what do you choose?",
  options: [
    { text: "Always worth it", result: ["You value happiness spending.", "You prioritize feeling good."] },
    { text: "Sometimes", result: ["You balance happiness and control.", "You decide case by case."] },
    { text: "Rarely", result: ["You rarely spend for happiness.", "You hold back."] },
    { text: "Not worth it", result: ["You don’t value it.", "You avoid emotional spending."] }
  ]
},

{
  id: "Q25",
  question: "When buying online, what do you do?",
  options: [
    { text: "Think first", result: ["You think before buying.", "You stay careful."] },
    { text: "Check a bit", result: ["You check briefly.", "But not deeply."] },
    { text: "Click fast", result: ["You decide quickly.", "You don’t wait long."] },
    { text: "Buy instantly", result: ["You buy instantly.", "There’s no pause."] }
  ]
},

{
  id: "Q26",
  question: "When reviews conflict, what do you follow?",
  options: [
    { text: "Best rating", result: ["You follow ratings.", "You trust the score."] },
    { text: "Most reviews", result: ["You follow the crowd.", "Volume matters to you."] },
    { text: "Gut feeling", result: ["You trust your gut.", "You decide internally."] },
    { text: "Just buy", result: ["You don’t overthink.", "You just go for it."] }
  ]
},

{
  id: "Q27",
  question: "When using subscriptions, what do you do?",
  options: [
    { text: "Well managed", result: ["You manage subscriptions well.", "You stay in control."] },
    { text: "Some", result: ["You keep a few.", "You don’t track all."] },
    { text: "Too many", result: ["You have too many.", "It adds up unnoticed."] },
    { text: "No control", result: ["You don’t control it.", "Subscriptions pile up."] }
  ]
},

{
  id: "Q28",
  question: "How long do you keep subscriptions you don’t use?",
  options: [
    { text: "Cancel fast", result: ["You cancel quickly.", "You don’t waste money."] },
    { text: "Keep a bit", result: ["You keep it for a while.", "You delay action."] },
    { text: "Keep long", result: ["You keep it too long.", "It slips by."] },
    { text: "Never cancel", result: ["You don’t cancel.", "You ignore it completely."] }
  ]
},

{
  id: "Q29",
  question: "What small spending do you ignore the most?",
  options: [
    { text: "Coffee", result: ["You overlook small daily spending.", "It builds up without notice."] },
    { text: "Food", result: ["You spend more on food than expected.", "It feels normal to you."] },
    { text: "Subscriptions", result: ["You ignore subscription costs.", "They stack quietly."] },
    { text: "Everything", result: ["You don’t track small spending.", "It all slips through."] }
  ]
},

{
  id: "Q30",
  question: "When you see a sale, what do you ignore?",
  options: [
    { text: "Nothing", result: ["You consider everything.", "You stay aware of your needs."] },
    { text: "Price", result: ["You focus less on price.", "The deal pulls you in."] },
    { text: "Need", result: ["You ignore actual need.", "You follow the moment."] },
    { text: "Everything", result: ["You don’t think it through.", "You react instantly."] }
  ]
},

{
  id: "Q31",
  question: "When checking your balance, what do you avoid seeing?",
  options: [
    { text: "Nothing", result: ["You face everything clearly.", "You don’t avoid reality."] },
    { text: "Small drops", result: ["You ignore small losses.", "They feel insignificant."] },
    { text: "Big spending", result: ["You avoid big numbers.", "They feel uncomfortable."] },
    { text: "Everything", result: ["You avoid checking at all.", "You don’t want to see it."] }
  ]
},

{
  id: "Q32",
  question: "When checking your bank, what do you ignore?",
  options: [
    { text: "Nothing", result: ["You check everything.", "You stay aware."] },
    { text: "Small things", result: ["You ignore minor details.", "They don’t seem important."] },
    { text: "Most things", result: ["You skip most details.", "You don’t dig deep."] },
    { text: "Everything", result: ["You avoid checking.", "You stay disconnected."] }
  ]
},

{
  id: "Q33",
  question: "When money comes in, what do you forget first?",
  options: [
    { text: "Nothing", result: ["You remember your priorities.", "You stay focused."] },
    { text: "Saving", result: ["You forget to save first.", "It comes later."] },
    { text: "Planning", result: ["You skip planning.", "You go straight to spending."] },
    { text: "Everything", result: ["You forget everything.", "You act on impulse."] }
  ]
},

{
  id: "Q34",
  question: "Before buying, what do you skip first?",
  options: [
    { text: "Nothing", result: ["You go through all steps.", "You stay careful."] },
    { text: "Comparing", result: ["You skip comparing.", "You decide faster."] },
    { text: "Thinking", result: ["You skip thinking.", "You act quickly."] },
    { text: "Everything", result: ["You skip everything.", "You just buy."] }
  ]
},

{
  id: "Q35",
  question: "When delaying a purchase, what makes you give in?",
  options: [
    { text: "Nothing", result: ["You stick to your decision.", "You don’t give in easily."] },
    { text: "Small urge", result: ["Small urges affect you.", "They build over time."] },
    { text: "Strong urge", result: ["Strong urges break your control.", "You give in eventually."] },
    { text: "Always give in", result: ["You give in every time.", "Delay doesn’t change it."] }
  ]
},

{
  id: "Q36",
  question: "When trying to save automatically, what stops you?",
  options: [
    { text: "Nothing", result: ["Nothing stops you.", "You keep it consistent."] },
    { text: "Forget it", result: ["You forget to follow through.", "It fades away."] },
    { text: "Hard to keep", result: ["It feels hard to maintain.", "You lose consistency."] },
    { text: "Never works", result: ["It never sticks.", "You give up quickly."] }
  ]
},

{
  id: "Q37",
  question: "When bills come in, what do you delay first?",
  options: [
    { text: "Nothing", result: ["You handle bills immediately.", "You stay on track."] },
    { text: "Small bills", result: ["You delay smaller ones.", "They feel less urgent."] },
    { text: "Big ones", result: ["You delay big bills.", "They feel overwhelming."] },
    { text: "Everything", result: ["You delay everything.", "You avoid it."] }
  ]
},

{
  id: "Q38",
  question: "When tracking spending, what makes you stop?",
  options: [
    { text: "Never stop", result: ["You keep tracking.", "You stay consistent."] },
    { text: "Get tired", result: ["You get tired of tracking.", "You lose energy."] },
    { text: "Lose track", result: ["You lose track easily.", "You fall behind."] },
    { text: "Give up", result: ["You give up completely.", "You stop trying."] }
  ]
},

{
  id: "Q39",
  question: "When avoiding spending, what makes you break it?",
  options: [
    { text: "Always avoid", result: ["You stay strong.", "You don’t break easily."] },
    { text: "Sometimes", result: ["You break sometimes.", "It depends on the moment."] },
    { text: "Rarely", result: ["You break rarely.", "You mostly hold on."] },
    { text: "Never", result: ["You don’t avoid spending.", "You always give in."] }
  ]
},

{
  id: "Q40",
  question: "When dealing with debt, what do you do?",
  options: [
    { text: "Always avoid", result: ["You avoid debt completely.", "You stay cautious."] },
    { text: "Sometimes", result: ["You use it carefully.", "You keep it limited."] },
    { text: "Rarely", result: ["You don’t think much about it.", "It happens occasionally."] },
    { text: "Always in debt", result: ["You are often in debt.", "It becomes normal."] }
  ]
},

{
  id: "Q41",
  question: "When spending, what makes you exceed limits?",
  options: [
    { text: "Always within", result: ["You stay within limits.", "You control your spending."] },
    { text: "Sometimes within", result: ["You try to stay within.", "But not always."] },
    { text: "Often exceed", result: ["You exceed limits often.", "You notice it later."] },
    { text: "Always exceed", result: ["You exceed every time.", "Limits don’t hold you."] }
  ]
},

{
  id: "Q42",
  question: "When spending with others, what do you do?",
  options: [
    { text: "Fair balance", result: ["You keep it fair.", "You stay balanced."] },
    { text: "Mostly fair", result: ["You try to be fair.", "But it shifts sometimes."] },
    { text: "Sometimes overspend", result: ["You overspend with others.", "You get influenced."] },
    { text: "No control", result: ["You lose control around others.", "You follow the moment."] }
  ]
},

{
  id: "Q43",
  question: "When you use your card, what do you do?",
  options: [
    { text: "Fully planned", result: ["You plan before using your card.", "You stay in control."] },
    { text: "Mostly planned", result: ["You mostly plan ahead.", "But not every time."] },
    { text: "Sometimes impulse", result: ["You sometimes act on impulse.", "It depends on the moment."] },
    { text: "Fully impulse", result: ["You use your card impulsively.", "You don’t pause."] }
  ]
},

{
  id: "Q44",
  question: "When choosing cash or card, what do you use?",
  options: [
    { text: "Mostly cash", result: ["You prefer cash.", "You like seeing money move."] },
    { text: "Balanced", result: ["You balance cash and card.", "You switch as needed."] },
    { text: "Mostly card", result: ["You mostly use card.", "It feels easier."] },
    { text: "Only card", result: ["You rely on card only.", "You don’t track physically."] }
  ]
},

{
  id: "Q45",
  question: "When saving money, what do you do?",
  options: [
    { text: "Always consistent", result: ["You save consistently.", "You built the habit."] },
    { text: "Try to save", result: ["You try to save.", "But it’s not stable."] },
    { text: "Save sometimes", result: ["You save occasionally.", "It depends on the situation."] },
    { text: "Rarely save", result: ["You rarely save.", "It doesn’t stick."] }
  ]
},

{
  id: "Q46",
  question: "When saving for emergencies, what do you do first?",
  options: [
    { text: "Always ready", result: ["You are ready for emergencies.", "You planned ahead."] },
    { text: "Somewhat ready", result: ["You are somewhat ready.", "But not fully secure."] },
    { text: "Barely ready", result: ["You are barely prepared.", "It feels unstable."] },
    { text: "Not ready", result: ["You are not prepared.", "You deal with it later."] }
  ]
},

{
  id: "Q47",
  question: "When you delay saving, what do you tell yourself?",
  options: [
    { text: "Nothing", result: ["You don’t justify delay.", "You act directly."] },
    { text: "Start soon", result: ["You say you’ll start soon.", "But it keeps getting delayed."] },
    { text: "Later is fine", result: ["You think later is okay.", "You push it back easily."] },
    { text: "No need", result: ["You think saving isn’t needed.", "You don’t prioritize it."] }
  ]
},

{
  id: "Q48",
  question: "When planning big purchases, what do you do first?",
  options: [
    { text: "Plan ahead", result: ["You plan before buying.", "You stay structured."] },
    { text: "Rough idea", result: ["You have a rough idea.", "But not detailed."] },
    { text: "Decide later", result: ["You delay decisions.", "You decide in the moment."] },
    { text: "No plan", result: ["You don’t plan at all.", "You act instantly."] }
  ]
},

{
  id: "Q49",
  question: "When thinking about living costs, what do you check?",
  options: [
    { text: "Very clear", result: ["You know your costs clearly.", "You stay informed."] },
    { text: "Somewhat clear", result: ["You have a rough idea.", "But not exact."] },
    { text: "Vague", result: ["You’re unsure about costs.", "You don’t track closely."] },
    { text: "No idea", result: ["You don’t know your costs.", "You don’t check."] }
  ]
},

{
  id: "Q50",
  question: "When reviewing expenses, what do you check?",
  options: [
    { text: "Check everything", result: ["You review everything.", "You stay aware."] },
    { text: "Check some", result: ["You check some parts.", "But not all."] },
    { text: "Ignore small", result: ["You ignore small details.", "They don’t seem important."] },
    { text: "Ignore most", result: ["You ignore most of it.", "You don’t review fully."] }
  ]
},

{
  id: "Q51",
  question: "When you think about money, what do you choose?",
  options: [
    { text: "Security first", result: ["You prioritize security.", "You think long-term."] },
    { text: "Balance", result: ["You seek balance.", "You adjust between needs."] },
    { text: "Enjoyment", result: ["You value enjoyment.", "You focus on present."] },
    { text: "Just spending", result: ["You focus on spending.", "You follow impulse."] }
  ]
},

{
  id: "Q52",
  question: "When thinking about your future, what do you delay most?",
  options: [
    { text: "Nothing", result: ["You don’t delay.", "You act on plans."] },
    { text: "Small plans", result: ["You delay small plans.", "You focus on bigger ones."] },
    { text: "Big plans", result: ["You delay big plans.", "They feel heavy."] },
    { text: "Everything", result: ["You delay everything.", "You avoid planning."] }
  ]
},

{
  id: "Q53",
  question: "When spending on yourself, what do you do?",
  options: [
    { text: "Balanced", result: ["You stay balanced.", "You control your spending."] },
    { text: "Spend a bit", result: ["You spend a little.", "You keep it moderate."] },
    { text: "Spend more", result: ["You spend more than planned.", "It feels justified."] },
    { text: "Overspend", result: ["You overspend on yourself.", "You lose control."] }
  ]
},

{
  id: "Q54",
  question: "When spending on learning, what do you hesitate about?",
  options: [
    { text: "Nothing", result: ["You invest without hesitation.", "You value growth."] },
    { text: "Price", result: ["You hesitate about price.", "Cost matters first."] },
    { text: "Value", result: ["You question the value.", "You need certainty."] },
    { text: "Everything", result: ["You hesitate on everything.", "You delay action."] }
  ]
},

{
  id: "Q55",
  question: "When investing in yourself, what do you do?",
  options: [
    { text: "Invest in myself", result: ["You invest in yourself.", "You take action."] },
    { text: "Think about it", result: ["You think about it.", "But don’t move forward."] },
    { text: "Delay it", result: ["You delay it.", "You push it later."] },
    { text: "Ignore it", result: ["You ignore it.", "You don’t prioritize it."] }
  ]
},

{
  id: "Q56",
  question: "After spending, how do you justify it?",
  options: [
    { text: "Makes sense", result: ["You justify spending easily.", "It feels right to you."] },
    { text: "Probably fine", result: ["You think it’s okay.", "You don’t question much."] },
    { text: "Not sure", result: ["You feel unsure.", "You hesitate after."] },
    { text: "Regret it", result: ["You regret it later.", "You question your decision."] }
  ]
}

];
