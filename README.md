![HTML](https://img.shields.io/badge/HTML-5-orange)
![CSS](https://img.shields.io/badge/CSS-3-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-yellow)

# WordPulse

WordPulse is a simple and fast web-based text analysis tool that helps users analyze their text instantly.  
It counts words, characters, sentences, paragraphs and also estimates reading and speaking time.

This project is built using **HTML, CSS, and JavaScript** with a clean and responsive UI.

---

## Features

- Character count
- Character count (without spaces)
- Word count
- Sentence count
- Paragraph count
- Estimated reading time
- Estimated speaking time
- Clear text button
- Copy text button
- Responsive design
- Accessible UI (ARIA labels, screen-reader friendly)

---

## Demo

You can try the tool here:

```
https://your-demo-link.com
```

---

## Screenshots

Example interface:

```
Text Input Area
-----------------------------------
| Type or paste text here        |
|                                 |
|                                 |
|                                 |
|                      Copy Clear |
-----------------------------------

Statistics Panel
-----------------------------------
Characters
Characters (No Spaces)
Words
Sentences
Paragraphs

Reading Time
Speaking Time
-----------------------------------
```

---

## Project Structure

```
wordpulse/
│
├── index.html
├── style.css
├── script.js
├── favicon.ico
└── README.md
```

---

## How It Works

### Text Analysis

JavaScript listens for input in the textarea and analyzes the text in real time.

Example:

```javascript
const charCount = input.length;
const wordCount = input.trim().split(/\s+/).length;
const sentenceCount = input.split(/[.!?]/).length - 1;
const paragraphCount = input.split(/\n\s*\n/).length;
```

### Reading Time

Average reading speed:

```
200 words per minute
```

### Speaking Time

Average speaking speed:

```
150 words per minute
```

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)
- Bootstrap Icons

---

## Performance Optimizations

This project includes several small optimizations:

- CSS preload for faster rendering
- `defer` JavaScript loading
- semantic HTML structure
- accessible labels for screen readers
- responsive layout

---

## Accessibility

The project includes accessibility improvements such as:

- `aria-label` for buttons
- `aria-live="polite"` for dynamic counters
- visually hidden labels for screen readers

---

## Future Improvements

Possible future features:

- Reading level analysis
- Keyword density
- Text highlighting
- Dark / light theme switch
- File upload support
- Export statistics

---

## Author

Created by **Shakeel Nooh M**

GitHub:  
https://github.com/shakeelnoohm

---

## License

This project is open source and available under the MIT License.
