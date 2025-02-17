# Lecture 1 Summary: Introduction & Regular Expressions

## Course Information

- **Code**: COMP 408
- **Title**: Advanced Topics in AI (NLP & MAS)
- **Credit Hours**: 3 (Lecture)
- **Assessment**: Final (105 marks), Midterm (37), Oral (8)

## NLP Overview

- **Objectives**: Learn NLP fundamentals, computational properties of language, and common algorithms.
- **Applications**: Spell checking, sentiment analysis, machine translation, etc.
- **Challenges**: Ambiguity, context, linguistic diversity, idioms, sarcasm, and morphology/syntax complexity.

## Linguistic Knowledge Categories

1. **Phonetics**: Study of speech sounds.
2. **Morphology**: Word formation (e.g., affixes in English/Arabic).
3. **Syntax**: Sentence structure (e.g., parse trees, ambiguity).
4. **Semantics**: Word/sentence meaning.
5. **Pragmatics**: Context-dependent meaning.

## Regular Expressions (REs)

- **Operators**: `[]`, `|`, `?`, `*`, `+`, `{}`, `^`, `$`, `\b`, `.`, `\d`, `\w`, etc.
- **Examples**:
  - `[wW]oodchuck` matches "woodchuck" or "Woodchuck".
  - `B[0-37]` matches "B0", "B1", "B2", "B3", or "B7".

---

# Quiz: Test Your Knowledge!

### Multiple-Choice Questions

1. **Which category of linguistic knowledge deals with word formation?**  
   A. Phonetics  
   B. Syntax  
   C. Morphology  
   D. Pragmatics

2. **The sentence "I made her duck" is ambiguous due to:**  
   A. Syntactic ambiguity  
   B. Lexical semantics of "make"  
   C. Phonetic variations  
   D. All of the above

3. **The RE `B[0-37]` matches:**  
   A. `B37`  
   B. `B3`  
   C. `B4`  
   D. `3`

4. **"The tires are brand new" is pragmatically correct if spoken in response to:**  
   A. A complaint about car speed  
   B. A complaint about car temperature  
   C. A request for car color  
   D. None of the above

5. **Which operator specifies "zero or more occurrences"?**  
   A. `+`  
   B. `?`  
   C. `*`  
   D. `{2,4}`

6. **Arabic morphology differs from English by allowing:**  
   A. Prefixes only  
   B. Infixes  
   C. Suffixes only  
   D. No affixes

7. **The RE `/^The\b/` matches:**  
   A. "There"  
   B. "The cat"  
   C. "Other The"  
   D. "Then"

8. **Which of the following is NOT a common NLP application?**  
   A. Spell Checking  
   B. Sentiment Analysis  
   C. Image Recognition  
   D. Machine Translation

9. **What does the `?` operator in REs signify?**  
   A. Zero or more occurrences  
   B. One or more occurrences  
   C. Optionality (zero or one occurrence)  
   D. Negation

10. **The RE `/colou?r/` matches:**  
    A. "color"  
    B. "colour"  
    C. Both "color" and "colour"  
    D. Neither

11. **Which of the following is an example of syntactic ambiguity?**  
    A. "I saw a man with a telescope."  
    B. "The bank is closed."  
    C. "She gave him a cold shoulder."  
    D. "The cat is on the mat."

12. **The RE `/a{2,4}/` matches:**  
    A. "a"  
    B. "aa"  
    C. "aaa"  
    D. Both "aa" and "aaa"

13. **What does the `^` symbol represent in REs when used inside `[]`?**  
    A. Start of a line  
    B. Negation  
    C. End of a line  
    D. Optionality

14. **Which of the following is an example of a lexical ambiguity?**  
    A. "I saw a man with a telescope."  
    B. "The bank is closed."  
    C. "She gave him a cold shoulder."  
    D. "The cat is on the mat."

15. **The RE `/\bcat\b/` matches:**  
    A. "category"  
    B. "cat"  
    C. "scatter"  
    D. "concatenate"

---

### Definition Questions

1. **Define Syntax**  
   A. Study of word meanings  
   B. Rules for forming grammatical sentences  
   C. Context-dependent interpretation  
   D. Speech sound patterns

2. **What is a morpheme?**  
   A. A speech sound  
   B. The smallest unit of meaning  
   C. A grammatical rule  
   D. A syntactic ambiguity

3. **What does `\b` in REs signify?**  
   A. Word boundary  
   B. Non-word boundary  
   C. Backspace  
   D. Whitespace

4. **Pragmatics focuses on:**  
   A. Sentence structure  
   B. Literal word meanings  
   C. Contextual meaning  
   D. Phonetic variations

5. **What is the purpose of the `*` operator in REs?**  
   A. Matches zero or more occurrences  
   B. Matches one or more occurrences  
   C. Matches exactly one occurrence  
   D. Matches optional occurrences

6. **What is the primary focus of phonetics?**  
   A. Word formation  
   B. Sentence structure  
   C. Speech sounds  
   D. Contextual meaning

7. **What does the `+` operator in REs signify?**  
   A. Zero or more occurrences  
   B. One or more occurrences  
   C. Optionality  
   D. Negation

8. **What is the purpose of the `^` symbol at the start of an RE?**  
   A. Matches the start of a line  
   B. Matches the end of a line  
   C. Negates the following character  
   D. Matches any character

9. **What does the `$` symbol in REs signify?**  
   A. Start of a line  
   B. End of a line  
   C. Word boundary  
   D. Optionality

10. **What is the primary challenge in Named Entity Recognition (NER)?**  
    A. Detecting sarcasm  
    B. Identifying proper nouns  
    C. Understanding idioms  
    D. Parsing syntax

---

### True/False Questions

1. **True or False**: The RE `/a*/` matches zero or more occurrences of the letter "a".

   - **Answer**: True

2. **True or False**: Pragmatics deals with the literal meaning of words.

   - **Answer**: False

3. **True or False**: The RE `/^The/` matches "The" only at the start of a line.

   - **Answer**: True

4. **True or False**: Arabic morphology allows for infixes, unlike English.

   - **Answer**: True

5. **True or False**: The RE `/a{2,4}/` matches "aaaaa".
   - **Answer**: False

---

# Answers

### Multiple-Choice

1. C 2. D 3. B 4. B 5. C 6. B 7. B 8. C 9. C 10. C
2. A 12. D 13. B 14. B 15. B

### Definitions

1. B 2. B 3. A 4. C 5. A 6. C 7. B 8. A 9. B 10. B

### True/False

1. True 2. False 3. True 4. True 5. False
