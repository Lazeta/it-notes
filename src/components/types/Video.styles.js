import styled from "styled-components"

const Video = styled.div`
  & > h3 {
    margin: 0;
  }
  & > iframe {
    height: 100%;
    max-width: 100%;
    max-height: 500px;
    object-fit: cover;
  }
`

export const S = {
  Video,
}