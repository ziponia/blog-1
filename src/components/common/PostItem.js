import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { CustomPlaceholder } from "react-placeholder-image";
import Bedge from "./Bedge";
import theme from "../../static/theme";
import RectangleButton from "./RectangleButton";
import { ellipsis } from "../../lib/styles/utils";

const PostItem = (props) => {
  return (
    <Link to="/" style={{ textDecoration: "none" }}>
      <PostItemStyled>
        <Thumbnail>
          {/* <CustomPlaceholder width={800} height={400} src={props.image} /> */}
          <img src={props.image} alt="logo image" />
        </Thumbnail>
        <BlockStyled>
          <div className="title">
            <CateButton />
            <Date>MAR 25 . 2020</Date>
          </div>
        </BlockStyled>
        <PostTitle>{props.title}</PostTitle>
        <PostContent>{props.content}</PostContent>
        <Block>
          <RectangleButton />
        </Block>
      </PostItemStyled>
    </Link>
  );
};

const PostItemStyled = styled.div`
  margin-bottom: 2rem;
`;
const Thumbnail = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
  img {
    width: 100%;
  }
`;
const CateButton = styled(Bedge)`
  background-color: ${theme.colors.yellow0};
  color: #fff;
  margin-top: 1rem;
`;

const PostTitle = styled.h3`
  font-weight: bold;
  color: #000;
  margin-top: 1rem;
  ${ellipsis};
  line-height: 2.5em;
`;

const PostContent = styled.h5`
  color: #aeaeae;
  line-height: 2.5rem;
  margin-top: 1.5rem;
  font-weight: 400;
  height: 6em;
  ${ellipsis};
  white-space: normal;
`;

const Block = styled.div`
  text-align: center;
`;

const BlockStyled = styled.div`
  margin-top: 1rem;
  .title {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
`;

const Date = styled.h4`
  color: ${theme.colors.gray2};
  font-size: 1em;
  margin-right: 10px;
  font-weight: 400;
`;
export default PostItem;
