import React from "react";
import styled, { ThemeContext } from "styled-components";
import { Input } from "ui";
const Signup = () => {
  return (
    <PageBorder>
      <InputContainer>
        <InputLine>
          <InputTitle>name</InputTitle>
          <InputBox></InputBox>
        </InputLine>
        <InputLine>
          <InputTitle>wisc email</InputTitle>
          <InputBox></InputBox>
        </InputLine>
        <InputLine>
          <InputTitle>major</InputTitle>
          <InputBox></InputBox>
        </InputLine>
        {/* <InputLine>
          <InputTitle>생년</InputTitle>
          <InputBox></InputBox>
        </InputLine>
        <InputLine>
          <InputTitle>전화번호</InputTitle>
          <InputBox></InputBox>
        </InputLine> */}
      </InputContainer>
    </PageBorder>
  );
};

export default Signup;

const PageBorder = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
const InputContainer = styled.div``;
const InputLine = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-between;
`;

const InputTitle = styled.div`
  width: 100px;
`;

const InputBox = styled(Input)`
  display: flex;
  padding-left: 20px;
  width: 100%;
  height: 50px;
  font-size: ${({ theme }) => theme.fontSizes.txt_small};
  /* border: 1px solid rgb(192, 192, 192); */
  border: 1px solid ${({ theme }) => theme.colors.color_base_darker};
  line-height: 1.2;
  box-shadow: none;

  &:hover {
    border-color: ${({ theme }) => theme.colors.color_text_light} !important;
    transition: border-color 0.3s;
  }

  &:focus-within {
    border-color: ${({ theme }) =>
      theme.colors.color_primary_regular} !important;
    transition: border-color 0.3s;
  }

  ::placeholder {
    color: ${({ theme }) => theme.colors.color_text_placeholder};
  }
`;
