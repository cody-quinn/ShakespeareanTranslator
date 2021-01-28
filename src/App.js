import React, { useState } from 'react';

const replaceAll = (string, search, replacement) => {
  return string.split(search).join(replacement);
};

const rules = {
  goodbye: 'adieu',
  soon: 'anon',
  are: 'art',
  yes: 'aye',
  oblged: 'beund',
  soon: 'by and by',
  thought: 'conceit',
  advice: 'counsel',
  order: 'decree',
  speaks: 'discourses',
  kill: 'dispatch',
  does: 'deth',
  farewell: 'fare thee well',
  enemy: 'foe',
  listen: 'hark',
  go: 'hie',
  here: 'hither',
  'pay attention': 'mark',
  'i think': 'methinks',
  no: 'nay',
  nothing: 'nought',
  often: 'oft',
  maybe: 'perchance',
  curse: 'plauge',
  'i beg': 'pray',
  plan: 'resolve',
  boy: 'sirrah',
  there: 'thither',
  news: 'tidings',
  truly: 'verily',
  hello: 'well met',
  why: 'wherefor',
  'to which': 'whereto',
  with: 'withal',
  misery: 'woe',
  provided: 'wrought',
  you: 'thou',
  yours: 'thine',
  your: 'thy',
};

export const App = () => {
  const [english, setEnglish] = useState('');
  const [shakespearean, setShakespearean] = useState('');

  return (
    <div class='App'>
      <div class='container'>
        <h1>Shakespearean Translator</h1>

        <input
          type='text'
          placeholder='English'
          value={english}
          onChange={(e) => {
            const value = e.target.value;

            let text = value.toLowerCase();
            Object.entries(rules).forEach(([key, value]) => {
              text = replaceAll(text, key, value);
            });

            setEnglish(value);
            setShakespearean(text);
          }}
        />

        <input
          type='text'
          placeholder='Shakespearean'
          value={shakespearean}
          onChange={(e) => {
            const value = e.target.value;

            let text = value.toLowerCase();
            Object.entries(rules).forEach(([key, value]) => {
              text = replaceAll(text, value, key);
            });

            setEnglish(text);
            setShakespearean(value);
          }}
        />

        <div>
          <h5>
            Made with{' '}
            <span role='img' aria-label='love'>
              ❤️
            </span>{' '}
            by{' '}
            <a href='https://codyq.me/' target='_blank' rel='noopener noreferrer'>
              Cody
            </a>
            .
          </h5>
          <h5>
            View my code on{' '}
            <a href='https://github.com/CatDevz/ShakespeareanTranslator/' target='_blank' rel='noopener noreferrer'>
              GitHub
            </a>
            .
          </h5>
        </div>
      </div>
    </div>
  );
};
