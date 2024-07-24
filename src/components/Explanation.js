import React from 'react';
import { Container, Typography, Paper } from '@mui/material';
import styled from '@emotion/styled';

const ExplanationContainer = styled.div`
  padding: 20px;
`;

const explanations = {
  caesar: {
    title: "Classic Caesar Cipher",
    description: `
      The Caesar Cipher is one of the simplest and oldest methods of encrypting messages, named after Julius Caesar. This technique involves shifting the letters of the alphabet by a fixed number of places. For example, with a shift of three, the letter ‘A’ becomes ‘D’, ‘B’ becomes ‘E’, and so on.
      
      ### How It Works:
      1. Choose a shift value (e.g., 3).
      2. Replace each letter with the letter that is 'shift' positions ahead in the alphabet.
      3. To decrypt, shift the letters back by the same amount.
      
      ### Example:
      - Plaintext: HELLO
      - Shift: 3
      - Ciphertext: KHOOR
      
      ### Code:
      \`\`\`javascript
      const caesarCipher = (str, shift, decrypt = false) => {
        if (decrypt) shift = -shift;
        return str.split('').map(char => {
          if (char.match(/[a-z]/i)) {
            let code = char.charCodeAt();
            let base = code >= 97 ? 97 : 65;
            return String.fromCharCode((code - base + shift + 26) % 26 + base);
          }
          return char;
        }).join('');
      };
      \`\`\`
    `,
  },
  rot13: {
    title: "ROT13 Cipher",
    description: `
      The ROT13 Cipher is a special case of the Caesar Cipher with a shift of 13. This means that each letter is shifted 13 places forward in the alphabet. For example, 'A' becomes 'N', 'B' becomes 'O', and so on. Applying ROT13 twice returns the original text.
      
      ### How It Works:
      1. Shift each letter by 13 positions.
      2. Since the alphabet has 26 letters, applying ROT13 again restores the original text.
      
      ### Example:
      - Plaintext: HELLO
      - Ciphertext: URYYB
      
      ### Code:
      \`\`\`javascript
      const rot13Cipher = (str) => {
        return caesarCipher(str, 13);
      };
      \`\`\`
    `,
  },
  atbash: {
    title: "Atbash Cipher",
    description: `
      The Atbash Cipher is a substitution cipher where each letter of the alphabet is mapped to its reverse. For example, 'A' becomes 'Z', 'B' becomes 'Y', and so on. It’s a very simple cipher and was originally used for the Hebrew alphabet.
      
      ### How It Works:
      1. Each letter is replaced by its reverse in the alphabet (A -> Z, B -> Y).
      2. This is symmetrical, so applying it again restores the original text.
      
      ### Example:
      - Plaintext: HELLO
      - Ciphertext: SVOOL
      
      ### Code:
      \`\`\`javascript
      const atbashCipher = (str) => {
        return str.split('').map(char => {
          if (char.match(/[a-z]/i)) {
            let code = char.charCodeAt();
            let base = code >= 97 ? 97 : 65;
            return String.fromCharCode(base + 25 - (code - base));
          }
          return char;
        }).join('');
      };
      \`\`\`
    `,
  },
  affine: {
    title: "Affine Cipher",
    description: `
      The Affine Cipher combines both multiplication and addition for the transformation of letters. It uses the formula E(x) = (ax + b) mod 26 for encryption, where 'a' and 'b' are keys. Decryption uses the formula D(x) = a^-1(x - b) mod 26.
      
      ### How It Works:
      1. Choose keys 'a' and 'b'. (Example: a = 5, b = 8)
      2. For each letter, calculate its encrypted form using E(x) = (ax + b) mod 26.
      3. To decrypt, use the modular inverse of 'a' and the formula D(x) = a^-1(x - b) mod 26.
      
      ### Example:
      - Plaintext: HELLO
      - Keys: a = 5, b = 8
      - Ciphertext: ZEBBW
      
      ### Code:
      \`\`\`javascript
      const affineCipher = (str, a, b, decrypt = false) => {
        const modInverse = (a, m) => {
          a = a % m;
          for (let x = 1; x < m; x++) {
            if ((a * x) % m === 1) return x;
          }
        };
        const aInv = modInverse(a, 26);
        return str.split('').map(char => {
          if (char.match(/[a-z]/i)) {
            let code = char.charCodeAt();
            let base = code >= 97 ? 97 : 65;
            let x = code - base;
            let transformedChar = decrypt ? 
              String.fromCharCode((aInv * (x - b + 26)) % 26 + base) :
              String.fromCharCode((a * x + b) % 26 + base);
            return transformedChar;
          }
          return char;
        }).join('');
      };
      \`\`\`
    `,
  },
};

const Explanation = ({ cipherType }) => {
  const explanation = explanations[cipherType];
  if (!explanation) {
    return (
      <ExplanationContainer>
        <Container>
          <Typography variant="h4" gutterBottom>No Cipher Selected</Typography>
          <Typography variant="body1" paragraph>
            Please select a cipher type to see its explanation.
          </Typography>
        </Container>
      </ExplanationContainer>
    );
  }

  return (
    <ExplanationContainer>
      <Container>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Typography variant="h4" gutterBottom>{explanation.title}</Typography>
          <Typography variant="body1" paragraph>
            {explanation.description.split('\n').map((line, index) => (
              <span key={index}>{line}<br /></span>
            ))}
          </Typography>
        </Paper>
      </Container>
    </ExplanationContainer>
  );
};

export default Explanation;
