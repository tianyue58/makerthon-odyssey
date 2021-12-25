import styled from "styled-components/macro";

export const ProfileWrapper = styled.div`
  width: 90%;
  height: 100%;
  background-color: #fffff0;
  display: flex;
  flex-direction: column;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    background-color: #f5f5f5;
  }
  &::-webkit-scrollbar {
    width: 10px;
    background-color: #f5f5f5;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: radial-gradient(
      circle,
      rgba(206, 250, 107, 1) 0%,
      rgba(93, 206, 242, 1) 100%
    );
  }
`;

export const MainForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: ${({ height }) => (height ? height : "80%")};
  padding: 0 20px 10px 20px;
  overflow-y: scroll;
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    background-color: #f5f5f5;
  }
  &::-webkit-scrollbar {
    width: 10px;
    background-color: #f5f5f5;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: radial-gradient(
      circle,
      rgba(206, 250, 107, 1) 0%,
      rgba(93, 206, 242, 1) 100%
    );
  }
`;

export const InfoRow = styled.div`
  background-color: ${({ dark }) => (dark ? "lightgray" : "white")};
  padding: 15px;
  margin-left: 3px;
  margin-right: 3px;
  font-size: large;
`;

export const Item = styled.div`
  display: inline-block;
  color: #3d3de2;
  font-weight: 800;
  font-family: Cambria;
  margin-right: 5px;
`;

export const FormGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const OptionsGroup = styled.div`
  display: flex;
  width: 250px;
  height: 35px;
  background: lightblue;
`;

export const ProfilePhoto = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  margin-bottom: 30px;
`;
