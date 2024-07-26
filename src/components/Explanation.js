import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import KeyIcon from '@mui/icons-material/VpnKey';
import HistoryIcon from '@mui/icons-material/History';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import styled from '@emotion/styled';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Section = styled(Box)`
  margin: 20px 0;
  padding: 20px;
  background-color: #f0f2f5;
  border-radius: 8px;
`;

const ExplanationBox = styled(Paper)`
  padding: 24px;
  margin: 20px 0;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const HeaderBox = styled(Box)`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const CodeBlock = ({ value }) => (
  <SyntaxHighlighter style={materialDark} language="javascript">
    {value}
  </SyntaxHighlighter>
);

const renderers = {
  code: CodeBlock,
};

const explanations = {
  caesar: {
    title: "Caesar Cipher",
    icon: <LockIcon fontSize="large" />,
    description: `
The Caesar Cipher is one of the simplest and oldest methods of encrypting messages, named after Julius Caesar. This technique involves shifting the letters of the alphabet by a fixed number of places. For example, with a shift of three, the letter ‘A’ becomes ‘D’, ‘B’ becomes ‘E’, and so on.

### What is Caesar Cipher Technique?
Imagine you're a kid writing secret messages to your friends. Instead of writing "MEET ME AT NOON," you shift each letter a few places down the alphabet. With a shift of 3, 'A' becomes 'D', 'B' becomes 'E', and so on. So, "MEET ME AT NOON" becomes "PHHW PH DW QRRQ". Fun, right?

### Cryptography Algorithm For the Caesar Cipher
To cipher a given text, you need an integer value known as the shift, which indicates the number of positions each letter of the text has been moved down. The encryption can be represented using modular arithmetic by transforming the letters into numbers.

For example, if the shift is 3, then the letter A would be replaced by the letter D, B would become E, C would become F, and so on. The alphabet is wrapped around so that after Z, it starts back at A.

### Example:
- Write down the plaintext message: HELLO
- Choose a shift value. In this case, we will use a shift of 3.
- Replace each letter in the plaintext message with the letter that is three positions to the right in the alphabet.
  - H becomes K (shift 3 from H)
  - E becomes H (shift 3 from E)
  - L becomes O (shift 3 from L)
  - O becomes R (shift 3 from O)

The encrypted message is now “KHOOR”.

### Advantages:
- Easy to implement and use, making it suitable for beginners.
- Can be physically implemented with rotating disks or cards.
- Requires only a small set of pre-shared information.
- Can be modified easily to create a more secure variant.

### Disadvantages:
- Not secure against modern decryption methods.
- Vulnerable to brute force attacks.
- Not suitable for long text encryption as it is easy to crack.
- Does not provide confidentiality, integrity, and authenticity.

### Fun Fact:
Did you know Julius Caesar used this cipher to send messages to his generals? Imagine him saying, "Hey, let's meet at the battlefield," but in ciphered text!

### Frequently Asked Questions (FAQs):
**What is the Caesar cipher in cryptography?**
The Caesar Cipher, used by Julius Caesar around 58 BC, is a method that scrambles a message by shifting its letters. For example, shifting ‘A’ by three positions makes it ‘D’. To read the message, the receiver reverses this shift.

**What is an example of decryption in Caesar cipher?**
An example of decryption in the Caesar cipher is decrypting the message KHOOR. If the original shift used to encrypt the message was 3, you would reverse this by shifting each letter back by 3 places in the alphabet. Thus, K shifts to H, H to E, O to L, and R to O, revealing the decrypted message: HELLO.

**What are keys in Caesar cipher?**
In the Caesar cipher, the key is a letter that shows how many places to shift each letter in the message. For example, a key D means “shift 3 places,” and a key M means “shift 12 places.” A key A means “do not shift,” and a key Z means either “shift 25 places” or “shift one place backwards.”
    `,
  },
  vigenere: {
    title: "Vigenère Cipher",
    icon: <KeyIcon fontSize="large" />,
    description: `
The Vigenère Cipher is a method of encrypting alphabetic text by using a simple form of polyalphabetic substitution. This method uses a keyword to generate different Caesar Ciphers for different letters in the message.

### What is Vigenère Cipher Technique?
Imagine you're using a secret code word to send messages to your friends. Each letter in your message is shifted by a different amount, determined by the letters in the keyword. It's like a Caesar Cipher, but with a twist!

### Example:
- **Plaintext:** ATTACKATDAWN
- **Keyword:** LEMON

To encrypt, we repeat the keyword to match the length of the plaintext:
LEMONLEMONLE

Next, we shift each letter of the plaintext by the number of positions defined by the corresponding letter of the keyword (A=0, B=1, ..., Z=25).

**Encryption:**
- A (shift by L) → L
- T (shift by E) → X
- T (shift by M) → F
- A (shift by O) → O
- C (shift by N) → P
- K (shift by L) → V
- A (shift by E) → E
- T (shift by M) → F
- D (shift by O) → R
- A (shift by N) → N
- W (shift by L) → H
- N (shift by E) → R

**Ciphertext:** LXFOPVEFRNHR

### Advantages:
- Harder to break than Caesar Cipher due to the use of multiple shifts.
- Effective for encrypting longer texts.

### Disadvantages:
- Still susceptible to frequency analysis if the keyword is known or guessed.
- Requires a shared keyword between sender and receiver.

### Fun Fact:
The Vigenère Cipher was once considered unbreakable and was known as "le chiffre indéchiffrable" (the indecipherable cipher) until it was broken in the 19th century.

### Frequently Asked Questions (FAQs):
**What is the Vigenère cipher?**
The Vigenère Cipher is a method of encrypting alphabetic text by using a keyword to apply a series of Caesar Ciphers to the plaintext.

**How do you encrypt using the Vigenère cipher?**
To encrypt using the Vigenère cipher, align the keyword with the plaintext, then shift each letter of the plaintext by the number of positions defined by the corresponding letter of the keyword.

**What makes the Vigenère cipher more secure than the Caesar cipher?**
The Vigenère cipher is more secure than the Caesar cipher because it uses multiple shifts, making it harder to break through simple brute force attacks.
    `,
  },
  atbash: {
    title: "Atbash Cipher",
    icon: <HistoryIcon fontSize="large" />,
    description: `
The Atbash Cipher is a simple substitution cipher originally used for the Hebrew alphabet. In the Atbash cipher, each letter of the alphabet is mapped to its reverse.

### What is Atbash Cipher Technique?
Imagine writing the alphabet in order from A to Z, and then writing it backwards from Z to A directly below it. Each letter in the original alphabet is replaced with its reverse counterpart.

### Example:
- **Plaintext:** HELLO
- **Ciphertext:** SVOOL

**Encryption and Decryption:**
- A ↔ Z
- B ↔ Y
- C ↔ X
- D ↔ W
- ...

### Advantages:
- Simple to use and understand.
- No need for a key or complex calculations.

### Disadvantages:
- Very easy to break as it has only one possible key.
- Provides no real security in modern contexts.

### Fun Fact:
The Atbash Cipher was used in the Book of Jeremiah in the Bible! So, it has a long history.

### Frequently Asked Questions (FAQs):
**What is the Atbash cipher?**
The Atbash cipher is a simple substitution cipher that maps each letter of the alphabet to its reverse (A ↔ Z, B ↔ Y, etc.).

**How do you encrypt and decrypt using the Atbash cipher?**
To encrypt or decrypt using the Atbash cipher, replace each letter in the plaintext with its reverse in the alphabet.

**Why is the Atbash cipher not secure?**
The Atbash cipher is not secure because it has only one possible key and provides no real security against modern cryptographic attacks.
    `,
  },
  affine: {
    title: "Affine Cipher",
    icon: <LightbulbIcon fontSize="large" />,
    description: `
The Affine Cipher is a type of monoalphabetic substitution cipher, where each letter in an alphabet is mapped to its numeric equivalent, encrypted using a mathematical function, and converted back to a letter.

### What is Affine Cipher Technique?
The encryption function for an Affine Cipher is:
\[ E(x) = (ax + b) \mod 26 \]

Here, 'a' and 'b' are keys chosen such that 'a' and 26 are coprime.

### Example:
- **Plaintext:** HELLO
- **Keys:** a=5, b=8

First, convert each letter to its numeric equivalent (A=0, B=1, ..., Z=25):
- H = 7
- E = 4
- L = 11
- O = 14

Next, apply the encryption function:
- E(H) = (5*7 + 8) mod 26 = 17 (R)
- E(E) = (5*4 + 8) mod 26 = 2 (C)
- E(L) = (5*11 + 8) mod 26 = 11 (L)
- E(O) = (5*14 + 8) mod 26 = 0 (A)

**Ciphertext:** RCLLA

### Decryption:
The decryption function is:
\[ D(x) = a^{-1} (x - b) \mod 26 \]

Where \( a^{-1} \) is the modular multiplicative inverse of 'a' modulo 26.

### Advantages:
- More secure than simple substitution ciphers.
- Uses mathematical functions for encryption and decryption.

### Disadvantages:
- Requires the keys 'a' and 'b' to be shared securely.
- Not as secure as modern encryption techniques.

### Fun Fact:
Affine Ciphers are like secret recipes! Imagine you have a secret recipe where you mix ingredients (letters) in a special way using two secret spices (keys 'a' and 'b').

### Frequently Asked Questions (FAQs):
**What is the Affine cipher?**
The Affine Cipher is a substitution cipher that uses a mathematical function to encrypt each letter of the plaintext.

**How do you encrypt using the Affine cipher?**
To encrypt using the Affine cipher, convert each letter to its numeric equivalent, apply the encryption function, and convert it back to a letter.

**Why are 'a' and 26 required to be coprime in the Affine cipher?**
'a' and 26 must be coprime to ensure that the encryption function is reversible and a unique decryption function exists.
    `,
  },
};

const Explanation = ({ cipherType }) => {
  const explanation = explanations[cipherType];

  if (!explanation) {
    return (
      <Section>
        <Container>
          <ExplanationBox>
            <Typography variant="h4" gutterBottom>No Cipher Selected</Typography>
            <Typography variant="body1" paragraph>
              Please select a cipher type to see its explanation.
            </Typography>
          </ExplanationBox>
        </Container>
      </Section>
    );
  }

  return (
    <Section>
      <Container>
        <ExplanationBox>
          <HeaderBox>
            {explanation.icon}
            <Typography variant="h4" sx={{ ml: 2 }}>
              {explanation.title}
            </Typography>
          </HeaderBox>
          <ReactMarkdown components={renderers}>
            {explanation.description}
          </ReactMarkdown>
        </ExplanationBox>
      </Container>
    </Section>
  );
};

export default Explanation;
