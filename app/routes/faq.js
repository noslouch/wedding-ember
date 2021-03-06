import Route from '@ember/routing/route';

const FAQ = [{
  question: "What's the dress code?",
  answer: "We want to see you on the dance floor in your Saturday night finest! Cocktail attire (not black tie). Bring your&nbsp;dancing&nbsp;shoes!",
}, {
  question: "Are kids invited?",
  answer: "We love your kids! You know we do. But this party is for adults. 18 and over&nbsp;only&nbsp;please.",
}, {
  question: "Are roommates/friends/tinder dates invited?",
  answer: 'We love your roommates/friends/tinder dates (maybe?), but unless your invite specifically names a partner or guest, we kindly ask that it\'s just you (we promise there will be plenty of lovely people to talk to and&nbsp;dance&nbsp;with).',
}, {
  question: "What's the weather going to be like?",
  answer: "November in New York can vary. We plan to have the ceremony and cocktail hour outside (weather-permitting!), and while there are heat lamps, please plan accordingly and bring a coat (there is a coat check once we&nbsp;get&nbsp;inside!)",
}, {
  question: "We're planning to arrive early. What things are there to do around Westbury?",
  answer: "We spent our childhoods roaming aimlessly through Roosevelt Field mall and now you can too #StrongIsland. There's an IMAX theater in the nearby Cradle of Aviation Museum, and also a public golf course at Eisenhower Park. But seriously, check out Roosevelt Field mall if only for a brief taste of authentic Long Island.<br /><br />If conspicuous consumption isn't your thing, there's also nearby Westbury Gardens, which is open in November on Saturdays and Sundays 10 - 5 and offers guided tours of&nbsp;the&nbsp;grounds.",
}, {
  question: "What's the deal with the bagel brunch on Sunday?",
  answer: "Join us for bagels and lox the next morning at the Hyatt Place Garden City. We know people will likely be traveling the next day, so this is a pretty relaxed grab-and-go or grab-and-schmooze situation. Please do let us know if you plan to stop by, though. You can indicate whether you intend to come on&nbsp;your&nbsp;RSVP.",
}, {
  question: "What's the deal with phones?",
  answer: "Our ceremony will be phone-free (our lovely photographer will be on hand to get all of the important shots!) but please feel free to snap away post-ceremony! Our hashtag&nbsp;is&nbsp;#MplusBmeant2B!",
}]

export default Route.extend({
  model() {
    return FAQ;
  }
});
