import { ArrowUpRight } from "lucide-react";

const starterQuestions = [
  "Pushpa movie box office collection",
  "how to set new year goals 2025?",
  "what's the stock price of Tesla?",
  "who is richest person in the world?",
  "top destination in nepal to visit",
  "will AI replace my job?",
  "how to make money using AI?",
  "Is coffee good for health?",
  "what happened to ilya?",
];

export const StarterQuestionsList = ({
  handleSend,
}: {
  handleSend: (question: string) => void;
}) => {
  return (
    <div className="overflow-hidden py-2">
      <ul className="flex gap-4 animate-scroll">
        {starterQuestions.map((question) => (
          <li key={question} className="flex items-center space-x-2">
            <button
              onClick={() => handleSend(question)}
              className="font-medium hover:underline decoration-tint underline-offset-4 transition-all duration-200 ease-in-out transform hover:scale-[1.02] text-left bg-gray-100 px-3 py-2 rounded-lg normal-case whitespace-nowrap"
            >
              {question}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

<style jsx>{`
  .animate-scroll {
    display: flex;
    overflow-x: auto;
    white-space: nowrap;
    animation: scroll 20s linear infinite;
    animation-play-state: running; /* Default state */
  }

  .animate-scroll:hover {
    animation-play-state: paused; /* Stop animation on hover */
  }

  @keyframes scroll {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`}</style>
