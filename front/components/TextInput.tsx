import React, { useState } from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native';

type InputProps = {
  label? : string;
  placeholder? : string;
}

const Input = ({ label, placeholder }: InputProps) => {
  return (
    <View>
      <Label>{ label }</Label>
      <StyledInput
        placeholder={ placeholder }
      />
    </View>
  )
}

const Label = styled.Text`
  margin-bottom: 8px;
	font-size: 16px;
	font-weight: 700;
	letter-spacing: -.05em;
`

const StyledInput = styled.TextInput`
  padding: 10px 20px;
	border: 1px solid #000;
  &:focus {;
    border-color: #ff0;
  }
`

// const TextInput: React.FC = () => {

//   const [title, setTitle]: [string | null, any] = useState(null);

//   const handleInput: React.ChangeEventHandler = (e) => {
//     setTitle(e.target.value);
//   };

//   return (
//     <TextInput onChange={ handleInput } >{ title }</TextInput>
//   )
// }

export default Input;