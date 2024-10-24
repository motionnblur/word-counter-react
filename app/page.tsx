"use client";

import { useRef, useState } from "react";

const searchWord = (
  textArea: HTMLTextAreaElement,
  wordToSearch: string
): number => {
  const text = textArea.value;
  const words = text.split(" ");
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i] === wordToSearch) {
      count++;
    }
  }
  return count;
};

export default function Home() {
  const [wordCount, setWordCount] = useState(0);
  const mainTextAreaRef = useRef<HTMLTextAreaElement>(null);
  const wordToSearchTextAreaRef = useRef<HTMLTextAreaElement>(null);

  return (
    <main className="w-full h-screen p-5">
      <div className="w-full h-full flex items-center flex-col">
        <textarea
          className="resize-none text-slate-950 outline-none"
          rows={10}
          cols={50}
          ref={mainTextAreaRef}
        />
        <textarea
          className="resize-none text-slate-950 mt-3 outline-none"
          rows={1}
          cols={11}
          placeholder="  Paste a word"
          ref={wordToSearchTextAreaRef}
        />
        <div
          className="w-14 h-7 bg-slate-50 rounded text-black cursor-pointer mt-4"
          onMouseDown={() => {
            const wordCount = searchWord(
              mainTextAreaRef.current!,
              wordToSearchTextAreaRef.current!.value
            );
            setWordCount(wordCount);
          }}
        >
          Count
        </div>
        <div className="mt-8 text-3xl">{wordCount}</div>
      </div>
    </main>
  );
}
