import React from 'react';
import { Container, Typography, Box, Paper, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import KeyIcon from '@mui/icons-material/VpnKey';
import HistoryIcon from '@mui/icons-material/History';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
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

const FAQsBox = styled(Box)`
  padding: 16px;
  background-color: #e0f7fa;
  border-radius: 8px;
  margin-top: 20px;
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
    advantages: [
      "Easy to implement and use, making it suitable for beginners.",
      "Can be physically implemented with rotating disks or cards.",
      "Requires only a small set of pre-shared information.",
      "Can be modified easily to create a more secure variant."
    ],
    disadvantages: [
      "Not secure against modern decryption methods.",
      "Vulnerable to brute force attacks.",
      "Not suitable for long text encryption as it is easy to crack.",
      "Does not provide confidentiality, integrity, and authenticity."
    ]
  },
  rot13: {
    title: "ROT13 Cipher",
    icon: <RotateLeftIcon fontSize="large" />,
    description: `
The ROT13 Cipher is a special case of the Caesar Cipher with a shift of 13. This means that each letter is shifted 13 places forward in the alphabet. For example, 'A' becomes 'N', 'B' becomes 'O', and so on. Applying ROT13 twice returns the original text.

### What is ROT13 Cipher Technique?
Imagine a simple way to scramble your text so that it becomes unreadable to others unless they apply the same scrambling technique. ROT13 does exactly that by shifting each letter by 13 positions in the alphabet.

### Example:
- **Plaintext:** HELLO
- **Ciphertext:** URYYB

**Encryption and Decryption:**
- A (shift 13) → N
- B (shift 13) → O
- C (shift 13) → P
- D (shift 13) → Q
- ...

### Advantages:
- Extremely simple to implement.
- Can be used as a basic obfuscation method.

### Disadvantages:
- Provides no real cryptographic security.
- Easily reversible by applying the same algorithm.

### Fun Fact:
ROT13 is often used in online forums to hide spoilers, puzzle solutions, or sensitive content that readers might not want to see immediately.

### Frequently Asked Questions (FAQs):
**What is the ROT13 cipher?**
The ROT13 Cipher is a method of encoding text by shifting each letter 13 places forward in the alphabet. It is a special case of the Caesar Cipher.

**How do you encrypt using the ROT13 cipher?**
To encrypt using the ROT13 cipher, shift each letter in the plaintext by 13 positions in the alphabet.

**Why is the ROT13 cipher not secure?**
The ROT13 cipher is not secure because it is easily reversible by applying the same algorithm, providing no real cryptographic security.
    `,
    advantages: [
      "Extremely simple to implement.",
      "Can be used as a basic obfuscation method."
    ],
    disadvantages: [
      "Provides no real cryptographic security.",
      "Easily reversible by applying the same algorithm."
    ]
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
    advantages: [
      "Simple to use and understand.",
      "No need for a key or complex calculations."
    ],
    disadvantages: [
      "Very easy to break as it has only one possible key.",
      "Provides no real security in modern contexts."
    ]
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
    advantages: [
      "More secure than simple substitution ciphers.",
      "Uses mathematical functions for encryption and decryption."
    ],
    disadvantages: [
      "Requires the keys 'a' and 'b' to be shared securely.",
      "Not as secure as modern encryption techniques."
    ]
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
            {explanation.description.split("### Advantages:")[0]}
          </ReactMarkdown>
          <List>
            <Typography variant="h5">Advantages:</Typography>
            {explanation.advantages.map((advantage, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <CheckCircleIcon color="success" />
                </ListItemIcon>
                <ListItemText primary={advantage} />
              </ListItem>
            ))}
          </List>
          <List>
            <Typography variant="h5">Disadvantages:</Typography>
            {explanation.disadvantages.map((disadvantage, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <CancelIcon color="error" />
                </ListItemIcon>
                <ListItemText primary={disadvantage} />
              </ListItem>
            ))}
          </List>
          <FAQsBox>
            <Typography variant="h5">Frequently Asked Questions (FAQs):</Typography>
            <ReactMarkdown components={renderers}>
              {explanation.description.split("### Frequently Asked Questions (FAQs):")[1]}
            </ReactMarkdown>
          </FAQsBox>
        </ExplanationBox>
      </Container>
    </Section>
  );
};

export default Explanation;
