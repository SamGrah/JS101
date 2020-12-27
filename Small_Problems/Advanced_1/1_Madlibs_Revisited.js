/*  UNDERSTANDING THE  PROBLEM
--------------------------------------
INPUTS ==>
string

OUTPUTS ==>
string

CLARIFYTING QUESTIONS ==>

EXPLICT RULES ==>
1. pass template string story to the function
2. randomly insert nouns, verbs, adverbs, and adjectives from predefined list of those words

IMPLICIT RULES ==>

MENTAL MODEL ==>
create keywords in the template
search and replace the keywords with a random word within a predefined array associated with that keyword

    EXAMPLES / TEST CASES
--------------------------------------
EXAMPLES ==> 

RULESET ==>

INVALID INPUT ==>

EDGE CASES ==>


    DATA STRUCTURES
--------------------------------------
INPUTS ==>

RULESET ==>
five arrays, each contain words of type necessary
[fox, dog, cat] -> animal type noun array
[head, leg, tail] -> animal body part noun array, etc


    ALGORITHM
--------------------------------------
1. create object containing five arrays for each of the predefined word types
2. create template to include the keywords associated with each word type
3. search and replace the keywords, invoke a function to determine what the
   replacement text should be

Replacement text function
1. based on keyword value, generate a random index for the associated array of
   the object
2. return the word at the random value
*/

let template2 = "The animal verb the animal's bodyPart.";
let template1 = "The adjective brown animal adVerb verb the adjective animal, who " +
                "adVerb verb his bodyPart and looks around.";

const wordTypes = {
  animal: ['fox', 'dog', 'cat'],
  bodyPart: ['head', 'leg', 'tail'],
  verb: ['jumps', 'lifts', 'bites', 'licks', 'pats'],
  adjective:['quick', 'lazy', 'sleepy', 'noisy', 'hungry'],
  adVerb: ['easily', 'lazily', 'noisily', 'excitedly']
};

function madlibs(template) {
  let replacementWords = Object.keys(wordTypes);
  replacementWords.forEach(wordType => {
    while (template.includes(wordType)) {
      let randomIndex = Math.round(Math.random() *
                                  (wordTypes[wordType].length - 1));
      let randomWord = wordTypes[wordType][randomIndex];
      template = template.replace(wordType, randomWord);
    }
  });
  console.log(template);
}

// // These examples use the following list of replacement texts:
// adjectives: quick lazy sleepy noisy hungry
// nouns: fox dog head leg tail cat
// verbs: jumps lifts bites licks pats
// adverbs: easily lazily noisily excitedly
// ------


madlibs(template1);
// The "sleepy" brown "cat" "noisily"
// "licks" the "sleepy" yellow
// "dog", who "lazily" "licks" his
// "tail" and looks around.

madlibs(template1);
// The "hungry" brown "cat" "lazily"
// "licks" the "noisy" yellow
// "dog", who "lazily" "licks" his
// "leg" and looks around.


madlibs(template2);      // The "fox" "bites" the "dog"'s "tail".
madlibs(template2);      // The "cat" "pats" the "cat"'s "head".