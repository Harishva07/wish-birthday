// Offline, template-based generation. No API keys or AI calls.
export function makeWish(name, relationship, tone, variant=0) {
  const options={
    funny:[`Happy birthday, ${name}! 🎂 You are not getting older, just becoming a limited edition. Having you as my ${relationship} is my favorite adventure!`,`Another trip around the sun, ${name}! 🎉 May your cake be enormous and your responsibilities tiny. Stay wonderfully you!`],
    romantic:[`Happy birthday, ${name}. ❤️ Every ordinary moment becomes extraordinary with you. Here is to another year of finding my favorite place right beside you.`,`To my favorite person, ${name}: you make life feel like a love song. 🌹 May your birthday be as beautiful as the joy you bring me.`],
    savage:[`Happy birthday, ${name}! 🔥 Another year older and still no instruction manual. Lucky for you, being legendary never goes out of style.`,`Cheers, ${name}! 🎂 You have reached the age where the candles cost more than the cake. Love you anyway!`],
    emotional:[`Happy birthday, ${name}. 🥺 I am so grateful to have you as my ${relationship}. You make the world kinder, and I hope today reminds you how deeply you are loved.`,`Dear ${name}, thank you for all the little ways you make life brighter. 💛 May this year bring you the warmth and happiness you give to everyone around you.`],
    professional:[`Wishing you a very happy birthday, ${name}. May the year ahead bring exciting opportunities, meaningful achievements, and plenty of happiness. 🎉`,`Happy birthday, ${name}! Wishing you continued success, good health, and a wonderful year ahead. Enjoy your celebration. 🎂`]
  };
  return (options[tone]||options.funny)[variant%2];
}
