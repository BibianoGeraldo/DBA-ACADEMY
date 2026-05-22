'use client';
import { useState, useEffect } from 'react';

const WORDS = ['Contabilidade.', 'Fiscalidade.', 'Finanças.'];

export function useTypewriter() {
  const [text, setText] = useState('');

  useEffect(() => {
    let wi = 0;
    let ci = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    function tick() {
      const word = WORDS[wi];

      if (deleting) {
        ci--;
        setText(word.slice(0, ci));
      } else {
        ci++;
        setText(word.slice(0, ci));
      }

      let delay = deleting ? 32 : 70;

      if (!deleting && ci === word.length) {
        delay = 1500;
        deleting = true;
      } else if (deleting && ci === 0) {
        deleting = false;
        wi = (wi + 1) % WORDS.length;
        delay = 280;
      }

      timer = setTimeout(tick, delay);
    }

    timer = setTimeout(tick, 400);
    return () => clearTimeout(timer);
  }, []);

  return text;
}
