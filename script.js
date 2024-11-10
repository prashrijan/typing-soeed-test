const paragraphs = [
  "The quick brown fox jumps over the lazy dog. This sentence contains every letter in the English alphabet and is often used to test typing skills.",
  "JavaScript is a versatile programming language used to add interactive features to websites. It is essential for frontend development and works seamlessly with HTML and CSS.",
  "A journey of a thousand miles begins with a single step. Remember to start small and stay consistent, as every effort brings you closer to your goal.",
  "In computer programming, algorithms are essential to solve problems efficiently. Each algorithm has its own approach, but the goal is to find the best solution for a given problem.",
  "To improve your typing speed, practice typing longer paragraphs and focus on accuracy over speed. Building muscle memory will help you type faster over time.",
  "Data structures like arrays, stacks, queues, and linked lists are fundamental concepts in programming. They help in organizing data efficiently to perform various operations.",
  "A healthy lifestyle involves regular exercise, balanced nutrition, and sufficient rest. Maintaining this balance not only improves physical health but also boosts mental well-being.",
  "Cloud computing allows businesses to store data and applications on remote servers. This technology offers flexibility, scalability, and security, making it popular among companies.",
  "Effective communication is key in both personal and professional relationships. Being a good listener and conveying your thoughts clearly can lead to stronger connections.",
  "Typing tests can be fun and challenging. By focusing on proper finger placement and avoiding the habit of looking at the keyboard, you can increase your typing speed significantly.",
];

const button = document.querySelector(".submit");
const paragraph = document.querySelector(".typing-words");
const textArea = document.querySelector("textarea");
const result = document.querySelector(".result");
paragraph.style.display = "none";
result.style.display = "none";
textArea.disabled = true;

let start = 0;
let end = 0;
let currentParagraph = "";

button.addEventListener("click", () => {
  if (button.textContent === "Done") {
    if (
      textArea.value.trim() &&
      textArea.value.trim() === currentParagraph.trim()
    ) {
      textArea.disabled = true;
      paragraph.style.display = "none";
      button.textContent = "Start";
      result.style.display = "inline-block";
      end = endTime();
      const wpm = calculateTypingSpeed(start, end, currentParagraph);

      result.textContent = `Typing Speed: ${wpm.toFixed(2)} WPM.`;
    } else {
      alert("Please complete the paragraph correctly before submitting.");
    }
  } else {
    currentParagraph = generateAParagrah();
    textArea.value = "";
    textArea.disabled = false;
    button.textContent = "Done";
    result.style.display = "none";
    start = startTime();
  }
});

const startTime = () => {
  return new Date().getTime();
};

const endTime = () => {
  return new Date().getTime();
};

const generateAParagrah = () => {
  let randomIndex = generateRandomIndex();
  let words = paragraphs[randomIndex];
  paragraph.textContent = words;
  paragraph.style.display = "inline-block";
  return words;
};

const generateRandomIndex = () => {
  return Math.floor(Math.random() * paragraphs.length);
};

const calculateTypingSpeed = (start, end, words) => {
  let wordCount = words.split(" ").length;

  let timeTakenInMin = (end - start) / 60000;

  return wordCount / timeTakenInMin;
};
