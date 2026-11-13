# Personal Chatbot — Browser UI Prototype

A minimal static chat interface wired to the OpenAI Chat Completions API using the gpt-4o-mini model. The repository contains a single HTML page, CSS styling, and a small JavaScript request handler.

[![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?logo=javascript&logoColor=111)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![API](https://img.shields.io/badge/API-OpenAI%20Chat%20Completions-412991?logo=openai)](https://platform.openai.com/docs/)
[![Stars](https://img.shields.io/github/stars/MokuLakshithReddy/My-Personal-ChatBot?style=flat-square)](https://github.com/MokuLakshithReddy/My-Personal-ChatBot/stargazers)
[![Last commit](https://img.shields.io/github/last-commit/MokuLakshithReddy/My-Personal-ChatBot?style=flat-square)](https://github.com/MokuLakshithReddy/My-Personal-ChatBot/commits/main)

## Project flow

~~~mermaid
flowchart LR
    A["Chat input"] --> B["Browser JavaScript"]
    B --> C["OpenAI Chat Completions API"]
    C --> D["Assistant response"]
    D --> E["Chat message list"]
~~~

## Current implementation status

> **Known blockers in the committed version:** index.html loads script.js, but the tracked JavaScript file is named script.js.js. The API key constant in that file is also empty. As committed, the chat handler will not load from the HTML page and a request cannot authenticate.

This README documents the code that exists; it does not claim the current commit is ready to run.

## Security warning

Do **not** put a real OpenAI API key in browser JavaScript. Anyone who can load the page can inspect the key and reuse it. A safe working version should send chat requests through a small server-side endpoint that reads the key from an environment variable, applies usage limits, and never returns the secret to the browser.

## Files

| File | Purpose |
|---|---|
| index.html | Chat page structure and script reference |
| styles.css | Chat layout and message styling |
| script.js.js | Browser-side request and message-handling logic |

## Run / next steps

The UI can be opened as a static page, but the full chat flow needs the two blockers above corrected and the API call moved behind a server-side secret boundary before use with a real key.

No test suite, benchmark, demo recording, or verified production deployment is currently included in this repository.

## Why it matters

This small project is an early exploration of a conversational UI and an API-backed assistant. Its next meaningful engineering step is to turn the browser-only prototype into a safe, runnable client/server application.
