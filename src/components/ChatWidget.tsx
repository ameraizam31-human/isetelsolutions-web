// Widget chat: butang terapung yang membuka panel kecil dan bercakap dengan /api/chat.
// Jika API gagal (contohnya kunci belum dimasukkan), ia menunjukkan pautan WhatsApp.
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

type Labels = {
  open: string;
  title: string;
  greeting: string;
  placeholder: string;
  send: string;
  close: string;
  note: string;
  offline: string;
  waCta: string;
  thinking: string;
};
type Msg = { role: 'user' | 'assistant'; content: string; offline?: boolean };

export default function ChatWidget({ labels, whatsappHref }: { labels: Labels; whatsappHref: string }) {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [text, setText] = useState('');
  const [busy, setBusy] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight });
  }, [msgs, busy]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  async function send(e: React.FormEvent) {
    e.preventDefault();
    const message = text.trim().slice(0, 1000);
    if (!message || busy) return;
    const history = msgs
      .filter((m) => !m.offline)
      .slice(-10)
      .map(({ role, content }) => ({ role, content }));
    setMsgs((m) => [...m, { role: 'user', content: message }]);
    setText('');
    setBusy(true);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, history }),
      });
      const data = await res.json().catch(() => null);
      if (res.ok && data?.success && typeof data.response === 'string') {
        setMsgs((m) => [...m, { role: 'assistant', content: data.response }]);
      } else if (res.status === 429 && typeof data?.message === 'string') {
        setMsgs((m) => [...m, { role: 'assistant', content: data.message, offline: true }]);
      } else {
        setMsgs((m) => [...m, { role: 'assistant', content: labels.offline, offline: true }]);
      }
    } catch {
      setMsgs((m) => [...m, { role: 'assistant', content: labels.offline, offline: true }]);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="fixed right-4 bottom-24 z-40 md:right-6 md:bottom-6">
      {open && (
        <div
          role="dialog"
          aria-label={labels.title}
          className="absolute right-0 bottom-16 flex max-h-[min(34rem,70svh)] w-[min(22rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-white shadow-[0_30px_60px_-30px_rgb(20_32_74/0.5)]"
        >
          <div className="flex items-center justify-between gap-4 bg-navy px-5 py-4 text-white">
            <p className="label flex items-center gap-2.5 text-base">
              <span className="lamp" />
              {labels.title}
            </p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={labels.close}
              className="-mr-1 rounded-full p-1 text-white/70 hover:text-white"
            >
              <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>
          </div>

          <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto p-4 text-[0.9375rem]" aria-live="polite">
            <p className="max-w-[85%] rounded-2xl rounded-tl-sm bg-mist px-3.5 py-2.5 text-navy">{labels.greeting}</p>
            {msgs.map((m, i) => (
              <div key={i} className={cn('flex', m.role === 'user' && 'justify-end')}>
                <div
                  className={cn(
                    'max-w-[85%] rounded-2xl px-3.5 py-2.5 whitespace-pre-wrap',
                    m.role === 'user' ? 'rounded-tr-sm bg-steel text-white' : 'rounded-tl-sm bg-mist text-navy',
                  )}
                >
                  {m.content}
                  {m.offline && (
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noopener"
                      className="label mt-2 block text-steel-deep underline underline-offset-4"
                    >
                      {labels.waCta}
                    </a>
                  )}
                </div>
              </div>
            ))}
            {busy && <p className="text-slate">{labels.thinking}</p>}
          </div>

          <form onSubmit={send} className="flex items-center gap-2 border-t border-line p-3">
            <label className="sr-only" htmlFor="chat-input">
              {labels.placeholder}
            </label>
            <input
              id="chat-input"
              ref={inputRef}
              value={text}
              onChange={(e) => setText(e.target.value)}
              maxLength={1000}
              placeholder={labels.placeholder}
              autoComplete="off"
              className="h-11 min-w-0 flex-1 rounded-full border border-line bg-white px-4 text-[0.9375rem] text-navy placeholder:text-slate/70"
            />
            <button
              type="submit"
              disabled={busy || !text.trim()}
              className={cn(buttonVariants({ variant: 'accent', size: 'md' }), 'px-4')}
            >
              {labels.send}
            </button>
          </form>
          <p className="px-4 pb-3 text-xs text-slate">{labels.note}</p>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className={cn(
          buttonVariants({ variant: 'primary', size: 'md' }),
          'h-13 shadow-[0_16px_30px_-14px_rgb(20_32_74/0.7)] max-md:size-13 max-md:px-0',
        )}
      >
        <svg viewBox="0 0 24 24" className="!size-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M4 5h16v11H9l-5 4V5Z" />
        </svg>
        <span className="max-md:sr-only">{open ? labels.close : labels.open}</span>
      </button>
    </div>
  );
}
