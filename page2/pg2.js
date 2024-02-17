const textElement = document.getElementById('typewriter-text');
textElement.innerHTML = '';

const fullText = `
"Precisely," said Albert. "The Garden of Forking Paths is an enormous guessing game, or parable, in which the subject is time. The rules of the game forbid the use of the word itself. To eliminate a word completely, to refer to it by means of inept phrases and obvious paraphrases, is perhaps the best way of drawing attention to it. This, then, is the tortuous method of approach preferred by the oblique Ts'ui Pen in every meandering of his interminable novel. I have gone over hundreds of manuscripts, I have corrected errors introduced by careless copyists, I have worked out the plan from this chaos, I have restored, or believe I have restored, the original. I have translated the whole work. I can state categorically that not once has the word time been used in the whole book. "The explanation is obvious. The Garden of Forking Paths is a picture, incomplete yet not false, of the universe such as Ts'ui Pen conceived it to be. Differing from Newton and Schopenhauer, your ancestor did not think of time as absolute and uniform. He believed in an infinite series of times, in a dizzily growing, ever spreading network of diverging, converging and parallel times. This web of time - the strands of which approach one another, bifurcate, intersect or ignore each other through the centuries - embraces every possibility. We do not exist in most of them. In some you exist and not I, while in others I do, and you do not, and in yet others both of us exist. In this one, in which chance has favored me, you have come to my gate. In another, you, crossing the garden, have found me dead. In yet another, I say these very same words, but am an error, a phantom."
`;

let lines = fullText.split('\n');
let lineIndex = 0;
let charIndex = 0;

function type() {
  if (lineIndex < lines.length) {
    if (charIndex < lines[lineIndex].length) {
      textElement.innerHTML += lines[lineIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, 30); // Adjust the speed of typing here (milliseconds)
    } else {
      textElement.innerHTML += '<br>';
      lineIndex++;
      charIndex = 0;
      setTimeout(type, 30); // Adjust the speed of typing here (milliseconds)
    }
  }
}

// Call the type function to start the typewriting effect
type();
