import styled from 'styled-components'
import variables from '../../data/variables'

export const RepoGrid = styled.div`
  @media (min-width: ${variables.breakpointPhone}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }
`
export const RepoInfo = styled.div`
  display: flex;
  align-items: end;
  justify-content: flex-start;
  margin-bottom: 6rem;
`

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`

export const Avatar = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 0.5rem;
  border: 10px solid #fff;
  box-shadow: 0 0 20px 10px rgb(27 26 26 / 10%);
  margin-right: 1rem;
  background-color: #f9f9f9;
  background-size: cover;
  background-position: center;
`

export const RepoContent = styled.div`
  border-radius: 0.5rem;
  border: 1px solid #e1e4e8;
  margin-bottom: 2rem;
  padding: 1rem;
  font-size: 16;
  transition: all 200ms ease-in-out;
  &:hover {
    box-shadow: 0px 0px 36px 25px rgb(0 0 0 / 3%);
    h2 a {
      color: ${variables.primary};
    }
  }
`
export const Title = styled.h2`
  margin-bottom: 0;
  margin-top: 0;
  font-size: 1.4rem;
  font-family: 'Atkinson-Hyperlegible-Bold';
  @media (max-width: ${variables.breakpointPhone}) {
    font-size: 1rem;
  }
`
export const RepoHead = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Text = styled.p`
  color: rgb(25 27 29);
  margin-bottom: 1rem;
  margin-top: 0.25rem;
  font-size: 1rem;
  @media (max-width: ${variables.breakpointPhone}) {
    font-size: 0.9rem;
  }
`
export const FooterItem = styled.span`
  margin-right: 0.89rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: #242525;
  font-family: 'Atkinson-Hyperlegible-Medium';
  vertical-align: middle;
  display: inline-block;
  > * {
    vertical-align: middle;
  }
  > svg {
    width: 16px;
    height: 16px;
    &.star {
      fill: #fbc02d;
      stroke: #ffc107;
    }
  }
  @media (max-width: ${variables.breakpointPhone}) {
    margin-right: 0.49rem;
    font-size: 0.7rem;
    > svg {
      width: 12px;
      height: 12px;
    }
  }
`
export const Circle = styled.span`
  border-radius: 50%;
  display: inline-block;
  height: 10px;
  width: 10px;
  position: relative;
  vertical-align: initial;
`
