/*  UNDERSTANDING THE  PROBLEM
--------------------------------------
INPUTS ==>

OUTPUTS ==>

CLARIFYTING QUESTIONS ==>

EXPLICT RULES ==>

IMPLICIT RULES ==>

MENTAL MODEL ==>


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


    ALGORITHM
--------------------------------------
1. set sentences as empty array
2. iterate over string indexes; for each index
  2.1 set sentenceStart as current index
  2.2 if character is ! . or ? 
    2.2.1 set sentenceEnd index current index
    2.2.2 copy sentence from sentenceStart to sentence end 
          (including punctuation)
    2.2.3 push copy to sentences array
    2.2.4 set sentenceStart to next index
3. for each sentence in array
    3.1 split sentence into words
    3.2 if length is longest return that sentence
*/

function longestSentence(text) {
  let sentences = [];
  let sentenceStart = 0;
  let sentenceEnd;

  for (let index = 0; index < text.length; index += 1) {
    if (/[!.?]/.test(text[index])) {
      sentenceEnd = index;
      sentences.push(text.slice(sentenceStart, sentenceEnd + 2));
      sentenceStart = sentenceEnd + 1;
    }
  }

  let longestSentence = sentences.reduce((acc, sentence) => {
    return (sentence.split(' ').length > acc.split(' ').length) ? sentence : acc;
  }, '');
  let numWords = longestSentence.split(' ').length - 1;
  return `${longestSentence}\n\nThe longest sentence has ${numWords} words`;
}

let longText =
  'Four score and seven years ago our fathers brought forth on this ' +
  'continent a new nation, conceived in liberty, and dedicated to the ' +
  'proposition that all men are created equal. Now we are engaged in a ' +
  'great civil war, testing whether that nation, or any nation so ' +
  'conceived and so dedicated, can long endure. We are met on a great ' +
  'battlefield of that war. We have come to dedicate a portion of that ' +
  'field, as a final resting place for those who here gave their lives ' +
  'that that nation might live. It is altogether fitting and proper that ' +
  'we should do this.';

let longerText = longText +
  'But, in a larger sense, we can not dedicate, we can not consecrate, ' +
  'we can not hallow this ground. The brave men, living and dead, who ' +
  'struggled here, have consecrated it, far above our poor power to add ' +
  'or detract. The world will little note, nor long remember what we say ' +
  'here but it can never forget what they did here. It is for us the ' +
  'living, rather, to be dedicated here to the unfinished work which ' +
  'they who fought here have thus far so nobly advanced. It is rather ' +
  'for us to be here dedicated to the great task remaining before us -- ' +
  'that from these honored dead we take increased devotion to that ' +
  'cause for which they gave the last full measure of devotion -- that ' +
  'we here highly resolve that these dead shall not have died in vain ' +
  '-- that this nation, under God, shall have a new birth of freedom -- ' +
  'and that government of the people, by the people, for the people, ' +
  'shall not perish from the earth.';

console.log(longestSentence(longerText));

console.log(longestSentence("Where do you think you're going? What's up, Doc?"));