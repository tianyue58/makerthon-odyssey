import styled, { createGlobalStyle } from "styled-components/macro";
import { BsPatchQuestion } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { FcApprove } from "react-icons/fc";
import { FiEdit, FiDownload } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import { GiConfirmed, GiNextButton, GiPreviousButton } from "react-icons/gi";

export const GlobalStyle = createGlobalStyle`
 body {
  margin: 0;
  padding: 0;
 } 
 button {
   :focus{
     outline: none;
   }
 }
`;

export const WholePage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: transparent;
`;

export const PageBelowNavBar = styled(WholePage)`
  top: 15%;
  height: 85%;
`;

export const VideoBackground = styled.video`
  position: fixed;
  z-index: -1;
  width: 100%;
`;

export const LightButton = styled.button`
  margin: ${({ buttonmargin }) => (buttonmargin ? buttonmargin : "10px")};
  padding: 10px 20px;
  color: #fff;
  background: transparent;
  font-size: 16px;
  border: 1px solid white;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: #fff;
    color: ${({ themeColor }) => (themeColor ? themeColor : "#00bfff")};
  }
`;

export const IconButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconButtonContainer = styled.div`
  margin: ${({ margin }) => (margin ? margin : "60px")};
  padding: 10px 13px 10px 0;
  background: rgba(255, 255, 255, 0.4);
  transition: 0.3s;
  color: black;
  font-size: 16px;
  border: 1px solid transparent;
  border-radius: 4px;
  width: 150px;
  height: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover {
    background: rgba(255, 255, 255, 0.7);
  }
`;

export const Button = styled.button`
  margin: ${({ buttonmargin }) => (buttonmargin ? buttonmargin : "10px")};
  width: ${({ buttonwidth }) => (buttonwidth ? buttonwidth : "100px")};
  padding: ${({ buttonpadding }) => (buttonpadding ? buttonpadding : "10px")};
  background: ${({ buttoncolor }) => (buttoncolor ? buttoncolor : "#e9967a")};
  color: #fff;
  font-size: 16px;
  border: 1px solid white;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    color: #a52a2a;
  }
`;

export const RoundButton = styled.button`
  width: ${({ width }) => (width ? width : "25px")};
  height: ${({ height }) => (height ? height : "25px")};
  border: none;
  outline: none;
  border-radius: 50%;
  text-align: center;
  font-size: large;
  color: white;
  background-color: red;
  margin-left: 20px;
`;

export const Wrapper = styled.div`
  position: relative;
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "100%")};
  display: flex;
  flex-direction: ${({ alignment }) => (alignment ? alignment : "column")};
  align-items: center;
  justify-content: center;
`;

export const ToolTipText = styled.span`
  visibility: hidden;
  width: ${({ width }) => (width ? width : "150px")};
  background-color: ${({ background }) =>
    background ? background : "lightgreen"};
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 60%;
  left: 140%;
  margin-left: -60px;
  transition: opacity 1s;
  opacity: 0;
  &:after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
  }
`;

export const ToolTip = styled("div")({
  position: "relative",
  display: "inline-block",
  borderBottom: "none",
  ":hover span": {
    visibility: "visible",
    opacity: 1,
  },
});

export const TitleWrapper = styled.div`
  position: relative;
`;

export const QuestionIcon = styled(BsPatchQuestion)`
  position: absolute;
  border-radius: 1rem;
`;

export const LikeIcon = styled(FaHeart)`
  color: ${({ liked }) => (liked ? "red" : "black")};
  width: 25px;
  height: 25px;
  transition: 0.1s;
  &:hover {
    width: 30px;
    height: 30px;
  }
`;

export const ApprovedIcon = styled(FcApprove)`
  width: 50px;
  height: 50px;
  position: absolute;
  right: 0;
  top: 0;
`;

export const ConfirmIcon = styled(GiConfirmed)`
  width: 30px;
  height: 30px;
  position: absolute;
  bottom: 3%;
  color: green;
  transition: 0.3s;
  &:hover {
    width: 40px;
    height: 40px;
  }
`;

export const EditIcon = styled(FiEdit)`
  width: 35px;
  height: 35px;
  color: blue;
  opacity: 0.5;
  transition: 0.3s;
  &:hover {
    opacity: 1;
  }
`;

export const DeleteIcon = styled(MdDeleteForever)`
  width: 40px;
  height: 40px;
  color: red;
  opacity: 0.5;
  transition: 0.3s;
  &:hover {
    opacity: 1;
  }
`;

export const PreviousIcon = styled(GiPreviousButton)`
  width: 40px;
  height: 40px;
  color: white;
`;

export const NextIcon = styled(GiNextButton)`
  width: 40px;
  height: 40px;
  color: white;
`;

export const DownloadIcon = styled(FiDownload)`
  width: 80px;
  height: 80px;
`;
