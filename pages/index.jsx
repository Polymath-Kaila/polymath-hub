import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import eggs from '@/data/eggs.json'

const BOOT_LINES = [
  'Booting Evans-OS v1.0.0 ...',
  'Loading modules: projects, teaching, experience, achievements ...',
  'Type "help" to begin.'
]

const HELP = [
  'Available commands:',
  '  help            Show this help',
  '  about           Who is Evans?',
  '  projects        Quick list of projects',
  '  teach           Teaching & mentorship',
  '  experience      Work history',
  '  achievements    Awards & fairs',
  '  contact         How to reach me',
  '  visit           Enter the full experience',
  '  clear           Clear the screen',
  '  sudo inspire    (try it)'
]

export default function TerminalLanding() {
  const [lines, setLines] = useState([])
  const [input, setInput] = useState('')
  const [booted, setBooted] = useState(false)
  const inputRef = useRef(null)
  const router = useRouter()

  useEffect(() => {
    let i = 0
    const id = setInterval(() => {
      setLines(prev => [...prev, BOOT_LINES[i]])
      i++
      if (i >= BOOT_LINES.length) {
        clearInterval(id)
        setBooted(true)
        inputRef.current?.focus()
      }
    }, 600)
    return () => clearInterval(id)
  }, [])

  const pushLine = (l) => setLines(prev => [...prev, l])
  const pushLines = (arr) => setLines(prev => [...prev, ...arr])

  const handleCommand = async (cmd) => {
    const raw = cmd.trim()
    if (!raw) return
    pushLine(`$ ${raw}`)

    // Easter eggs
    if (eggs[raw]) {
      pushLines(eggs[raw])
      setInput('')
      return
    }

    switch (raw) {
      case 'help':
        pushLines(HELP)
        break
      case 'clear':
        setLines([])
        break
      case 'about':
        pushLines([
          'I am Evans Kaila — a builder, mentor, and ambitious computer science student.',
          'I create full‑stack apps, teach peers, and document a journey aimed at studying abroad.'
        ])
        break
      case 'projects':
        pushLines([
          'Type "visit" then open the Projects section.',
          'Featured: youtube-clone, bank-api, mentor-tracker ...'
        ])
        break
      case 'teach':
        pushLine('Mentorship & workshops: JS, Backend APIs, real-world projects.')
        break
      case 'experience':
        pushLine('Equity Bank (IT) — integrations, support, learning fast.')
        break
      case 'achievements':
        pushLine('Science & Engineering Fair — smart banking prototype.')
        break
      case 'contact':
        pushLine('Email: evans@example.com | GitHub: github.com/yourname')
        break
      case 'visit':
        router.push('/home')
        break
      default:
        pushLine(`Command not found: ${raw}. Type "help"`)
    }
    setInput('')
  }

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input)
    } else if (e.key === 'c' && e.ctrlKey) {
      setInput('')
      pushLine('^C')
    }
  }

  return (
    <div className="relative min-h-screen bg-bg-primary font-mono">
      <div className="code-rain">
        <pre className="animate-codeflow text-text-primary/80 select-none">
{`const code = () => {
  for (let i=0;i<1e6;i++) console.log(i)
}
function dream(){ return 'Build. Teach. Inspire.' }`.repeat(60)}
        </pre>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 pt-16 pb-24">
        <div className="border border-emerald-700 rounded-xl p-6 bg-bg-secondary/60 backdrop-blur-md shadow-glow">
          <div className="text-terminal-green glow">Evans-OS :: interactive shell</div>
          <div className="mt-4 space-y-1">
            {lines.map((l, idx) => (
              <div key={idx} className="whitespace-pre-wrap">{l}</div>
            ))}
          </div>

          <div className="mt-4 flex gap-2">
            <span className="text-terminal-green">$</span>
            <input
              ref={inputRef}
              disabled={!booted}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              className="flex-1 bg-transparent outline-none caret-terminal-green placeholder:text-text-muted"
              placeholder={booted ? 'type a command, e.g., help' : 'booting...'}
            />
          </div>
        </div>

        <p className="text-sm text-text-muted mt-4">Hint: try <span className="text-terminal-green">sudo inspire</span> or <span className="text-terminal-green">help</span>.</p>
      </div>
    </div>
  )
}
