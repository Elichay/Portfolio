'use strict'
console.log('Starting up')

var gProjs = [
  {
    id: 'minesweeper',
    name: 'Mine Sweeper',
    title: 'Mine Sweeper',
    desc: 'Find those mines and keep safe!',
    url: 'https://elichay.github.io/Mine-sweeper/',
    publishedAt: 1669557600000,
    labels: ['matrix', 'timer', 'render'],
  },
  {
    id: 'touchnums',
    name: 'Touch The Number',
    title: 'Touch The Number',
    desc: 'Tap the numbers by order',
    url: 'https://elichay.github.io/TouchTheNumber/',
    publishedAt: 1669125600000,
    labels: ['matrix', 'timer', 'render'],
  },
  {
    id: 'pacman',
    name: 'PacMan',
    title: 'PacMan',
    desc: 'Avoid ghosts and eat those dots',
    url: 'https://elichay.github.io/PacMan/',
    publishedAt: 1668693600000,
    labels: ['matrix', 'flow', 'render'],
  },
  {
    id: 'bookshop',
    name: 'Book Shop',
    title: 'Siman Kri\'a',
    desc: 'manage your booke store',
    url: 'https://elichay.github.io/BookShop/',
    publishedAt: 1669903200000,
    labels: ['table', 'filter', 'crudl', 'render'],
  },
  {
    id: 'guessMe',
    name: 'guessMe',
    title: 'guessMe',
    desc: 'guessMe - can the reckon',
    url: 'https://elichay.github.io/GuessMe/',
    publishedAt: 1669903200000,
    labels: ['table', 'filter', 'crudl', 'render'],
  }
]


function getProjs() {
 return gProjs
}