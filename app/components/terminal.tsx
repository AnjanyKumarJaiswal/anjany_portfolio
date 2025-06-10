'use client';

import React, { useState, useRef, useEffect } from 'react';

const commands = {
  help: 'about\nprojects\nskills\nsocials\nclear',
  about: "I'm Anjany Kumar Jaiswal, a Full Stack Developer and ML Developer building scalable applications and intelligent systems.",
  projects: '1. ZenViz: A GitHub repo visualizer. \n2. VisionText-LLM: An RAG app for PDFs. \n3. QueryHandler: A multi-agent RAG system.',
  skills: 'Languages:C/C++, JavaScript, TypeScript, Python, Go-Lang\nBackend Frameworks:Flask, FastAPI, Node.js, Expressjs, Redis, Docker,\nML/AI: Pandas, Numpy, Scikit-Learn, NLTK, PyTorch, Tensorflow, LangChain, LangGraph, HuggingFace\nCloud: AWS, Google Cloud Platform, Vercel, Render',
  socials: 'You can find me on:\n- Twitter: https://x.com/AnjanyJais67401 \n- GitHub: https://github.com/AnjanyKumarJaiswal\n- LinkedIn: https://linkedin.com/in/anjany5322 \n - Leetcode:  https://leetcode.com/u/user2466Uz/ \n - Codeforces: https://codeforces.com/profile/anjany_22',
  clear: ''
};

type Command = keyof typeof commands;

export default function Terminal() {
  const [history, setHistory] = useState<{ command: string; output: string }[]>([]);
  const [input, setInput] = useState('');
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const command = input.toLowerCase().trim() as Command;
      let output = '';

      if (command === 'clear') {
        setHistory([]);
        setInput('');
        return;
      }
      
      if (command in commands) {
        output = commands[command as keyof typeof commands];
      } else if (command) {
        output = `Command not found: ${command}. Type 'help' for a list of commands.`;
      }
      
      setHistory([...history, { command: input, output }]);
      setInput('');
    }
  };

  const handleClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div 
      className="flex flex-col w-full max-w-4xl h-[85vh] overflow-auto no-scrollbar font-mono space-y-4 bg-black/70 backdrop-blur-sm rounded-lg border-2 border-slate-800/90 p-2 sm:p-4"
      onClick={handleClick}
      ref={terminalRef}
    >
      <div className="flex flex-col">
        <p className='text-slate-100 text-lg sm:text-xl'>Anjany Kumar Jaiswal</p>
        <p className='text-zinc-400 text-sm sm:text-md'>Full Stack & Machine Learning Developer</p>
        <div className='w-full h-[2px] bg-zinc-600 rounded-xl mt-2' />
      </div>

      <div className="flex flex-col text-sm sm:text-base text-slate-200 space-y-1">
        <p>{'>'} hi!.</p>
        <p>{'>'} my name is Anjany, i am full stack dev with expertise in machine learning and deep learning.</p>
        <p>{'>'} I solve leetcode do competitive programming in C++ and C.</p>
        <p>{'>'} Some of my noteable projects according to me <a href='https://www.zenviz.xyz' className='text-slate-200 hover:text-green-600 hover:underline hover:cursor-pointer'>[ZenViz]</a> and <a href='https://github.com/AnjanyKumarJaiswal/VisionText-LLM' className='text-slate-200 hover:underline hover:text-orange-400 hover:cursor-pointer'>[VisionTextLLM]</a> </p>
        <p>{'>'} {"I'm passionate about full-stack development with agentic AI workflows, RAG systems and Fine-Tuning LLMs."}</p>
        <p>{'>'} Currently seeking internship opportunities, freelance gigs, full time job offers.</p>
      </div>
      
      <div className="mt-4">
        {history.map((entry, index) => (
          <div key={index} className="mb-2">
            <div className="flex flex-row items-center space-x-2">
              <p className="text-blue-400 text-base sm:text-lg"> {'>'} {entry.command}</p>
            </div>
            <div className="whitespace-pre-wrap text-base sm:text-lg text-green-300 ml-1">{entry.output}</div>
          </div>
        ))}
      </div>
      
      <div className="flex items-center">
        <span className="text-slate-300 text-base sm:text-lg">$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 ml-2 bg-transparent border-none outline-none caret-slate-500 text-zinc-300 placeholder-zinc-500 text-base sm:text-lg"
          autoFocus
          placeholder="type 'help' to see list of commands"
        />
      </div>
    </div>
  );
}