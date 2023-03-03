{\rtf1\ansi\ansicpg1252\cocoartf2707
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww28600\viewh17440\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 \
\
// JavaScript code\
const searchBtn = document.getElementById('search-btn');\
const dnaSequenceInput = document.getElementById('dna-sequence');\
const searchResults = document.getElementById('search-results');\
\
searchBtn.addEventListener('click', (event) => \{\
  event.preventDefault();\
  const dnaSequence = dnaSequenceInput.value.toUpperCase();\
  if (/^[ATCG]+$/.test(dnaSequence)) \{\
    searchDatabase(dnaSequence);\
  \} else \{\
    searchResults.innerHTML = 'Invalid input sequence. Only A, T, C, and G are allowed.';\
  \}\
\});\
\
function searchDatabase(dnaSequence) \{\
  // write code to search the DNA sequence database\
  // and display the results in the searchResults element\
\}\
}