import styled from "styled-components";

export const GalleryListItem= styled.li`
  margin-right: 10px;
  margin-bottom: 10px;
`
export const ThumbnailButton = styled.button`
  border: none;
  outline: none;
 background-color: transparent;
 width: 100%;
 cursor: pointer;
`

export const ThumbnailImage = styled.img`
  opacity: 0.5;
  opacity: ${props=>props.isActive&&'1'};
`