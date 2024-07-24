import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Paper } from '@mui/material';
import styled from '@emotion/styled';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import CipherSelect from './CipherSelect';

const ToolContainer = styled.div`
  padding: 20px;
`;

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

const rot13Cipher = (str) => {
  return caesarCipher(str, 13);
};

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
      let newCode = decrypt ?
        (aInv * (x - b + 26)) % 26 + base :
        (a * x + b) % 26 + base;
      return String.fromCharCode(newCode);
    }
    return char;
  }).join('');
};

const generateCaesarSteps = (str, shift, decrypt = false) => {
  const steps = [];
  if (decrypt) shift = -shift;
  str.split('').forEach((char, index) => {
    if (char.match(/[a-z]/i)) {
      let code = char.charCodeAt();
      let base = code >= 97 ? 97 : 65;
      let newCode = (code - base + shift + 26) % 26 + base;
      steps.push(`Step ${index + 1}: '${char}' (ASCII code: ${code}) is shifted to '${String.fromCharCode(newCode)}' (ASCII code: ${newCode})`);
    } else {
      steps.push(`Step ${index + 1}: '${char}' is not a letter, so it remains unchanged.`);
    }
  });
  return steps;
};

const generateAtbashSteps = (str) => {
  const steps = [];
  str.split('').forEach((char, index) => {
    if (char.match(/[a-z]/i)) {
      let code = char.charCodeAt();
      let base = code >= 97 ? 97 : 65;
      let newCode = base + 25 - (code - base);
      steps.push(`Step ${index + 1}: '${char}' (ASCII code: ${code}) is mapped to '${String.fromCharCode(newCode)}' (ASCII code: ${newCode})`);
    } else {
      steps.push(`Step ${index + 1}: '${char}' is not a letter, so it remains unchanged.`);
    }
  });
  return steps;
};

const generateAffineSteps = (str, a, b, decrypt = false) => {
  const modInverse = (a, m) => {
    a = a % m;
    for (let x = 1; x < m; x++) {
      if ((a * x) % m === 1) return x;
    }
  };
  const aInv = modInverse(a, 26);
  const steps = [];
  str.split('').forEach((char, index) => {
    if (char.match(/[a-z]/i)) {
      let code = char.charCodeAt();
      let base = code >= 97 ? 97 : 65;
      let x = code - base;
      let newCode = decrypt ?
        (aInv * (x - b + 26)) % 26 + base :
        (a * x + b) % 26 + base;
      steps.push(`Step ${index + 1}: '${char}' (ASCII code: ${code}) is transformed to '${String.fromCharCode(newCode)}' (ASCII code: ${newCode})`);
    } else {
      steps.push(`Step ${index + 1}: '${char}' is not a letter, so it remains unchanged.`);
    }
  });
  return steps;
};

const CipherTool = ({ cipherType, setCipherType }) => {
  const [inputText, setInputText] = useState('');
  const [shift, setShift] = useState(0);
  const [outputText, setOutputText] = useState('');
  const [steps, setSteps] = useState([]);

  const handleEncrypt = () => {
    let output;
    let explanationSteps = [];
    switch (cipherType) {
      case 'caesar':
        output = caesarCipher(inputText, parseInt(shift));
        explanationSteps = generateCaesarSteps(inputText, parseInt(shift));
        break;
      case 'rot13':
        output = rot13Cipher(inputText);
        explanationSteps = generateCaesarSteps(inputText, 13);
        break;
      case 'atbash':
        output = atbashCipher(inputText);
        explanationSteps = generateAtbashSteps(inputText);
        break;
      case 'affine':
        output = affineCipher(inputText, 5, 8); // Example keys for affine
        explanationSteps = generateAffineSteps(inputText, 5, 8);
        break;
      default:
        output = inputText;
    }
    setOutputText(output);
    setSteps(explanationSteps);
  };

  const handleDecrypt = () => {
    let output;
    let explanationSteps = [];
    switch (cipherType) {
      case 'caesar':
        output = caesarCipher(inputText, parseInt(shift), true);
        explanationSteps = generateCaesarSteps(inputText, parseInt(shift), true);
        break;
      case 'rot13':
        output = rot13Cipher(inputText); // ROT13 is symmetrical
        explanationSteps = generateCaesarSteps(inputText, 13);
        break;
      case 'atbash':
        output = atbashCipher(inputText); // Atbash is symmetrical
        explanationSteps = generateAtbashSteps(inputText);
        break;
      case 'affine':
        output = affineCipher(inputText, 5, 8, true); // Example keys for affine
        explanationSteps = generateAffineSteps(inputText, 5, 8, true);
        break;
      default:
        output = inputText;
    }
    setOutputText(output);
    setSteps(explanationSteps);
  };

  return (
    <Container>
      <CipherSelect cipherType={cipherType} setCipherType={setCipherType} />
      <ToolContainer>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Typography variant="h4" gutterBottom>Caesar Cipher Tool</Typography>
          <TextField
            label="Input Text"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            value={inputText}
            onChange={e => setInputText(e.target.value)}
            margin="normal"
          />
          {cipherType === 'caesar' && (
            <TextField
              label="Shift"
              type="number"
              variant="outlined"
              fullWidth
              value={shift}
              onChange={e => setShift(e.target.value)}
              margin="normal"
            />
          )}
          <Button
            variant="contained"
            color="primary"
            startIcon={<LockIcon />}
            onClick={handleEncrypt}
            style={{ margin: '10px' }}
          >
            Encrypt
          </Button>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<LockOpenIcon />}
            onClick={handleDecrypt}
            style={{ margin: '10px' }}
          >
            Decrypt
          </Button>
          <TextField
            label="Output Text"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            value={outputText}
            margin="normal"
            InputProps={{ readOnly: true }}
          />
          <Typography variant="h6" gutterBottom>Steps:</Typography>
          <Paper elevation={1} style={{ padding: '10px', margin: '10px 0' }}>
            {steps.map((step, index) => (
              <Typography variant="body1" key={index}>
                {step}
              </Typography>
            ))}
          </Paper>
        </Paper>
      </ToolContainer>
    </Container>
  );
};

export default CipherTool;
