import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'

import { FacebookLoginButton, GoogleLoginButton, GithubLoginButton } from 'react-social-login-buttons'
import styled from 'styled-components'
import oc from 'open-color'
import axios from 'axios'

import WaitingModal from './Waiting'

import contextStyle from 'lib/context/style'
import contextWindow from 'lib/context/window'
import contextRoutes from 'lib/context/routes'

const Page = styled.main`
  margin: 0px;
  padding: 0px;

  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
`

const PageWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;

  width: 100%;
  max-width: ${contextStyle.WIDTH_CONTAINER_SIZE};

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
`

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  margin-bottom: 2rem;
`

const IntroducePanel = styled.div`
  display: flex;

  flex: 3;

`

const LoginPanel = styled.div`
  display: flex;
  flex: 2;

  flex-direction: column;
  height: 23em;
  border: 1px solid ${oc.gray[4]};

  background-color: ${oc.white};
`

const Brand = styled.div`
  margin-top: 1rem;
  margin-bottom: 2rem;
  text-align: center;
  font-size: 3rem;
`

const BrandCopyWrite = styled.div`
  text-align: center;
  font-size: 0.9rem;
  line-height: 0.9rem;
  margin-bottom: 1rem;
`

const LoginButtons = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 20rem;

  margin-bottom: 4rem;
  & > button {
    margin-bottom: 0.5rem !important;
  }

  & > button:last-child {
    margin-bottom: 0.25rem !important;
  }
`

const RememberMe = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 20rem;
  text-align: right;
`

const RememberMeLabel = styled.label`
  font-weight: 600;
`

const Footer = styled.div`
  width: 100%;
`


const onClick = (provider: string) => {
  const { REACT_APP_API_SERVER_HOST } = process.env

  axios.get(`${REACT_APP_API_SERVER_HOST}/auth/sso/${provider}`)
    .then(({ data }) => {
      console.log(data)
      contextWindow.location.href = data
    })

}


export default () => {
  useEffect(() => {
    const body = contextWindow.document.body
    body.style.backgroundColor = contextStyle.BASIC_GRAY_BACKGROUND_COLOR

    return () => {
      window.document.body.style.backgroundColor = ''
    }
  })
  return (
    <Page>
      <PageWrapper>
        <Content>
          <Route path={`${contextRoutes.PATH_LOGIN_WAITING}/:provider`} component={WaitingModal} />
          <IntroducePanel>
            소개
          </IntroducePanel>
          <LoginPanel>
            <Brand>noname</Brand>
            <BrandCopyWrite>
              To make friends that's the way to change the world
            </BrandCopyWrite>
            <LoginButtons>
              <GoogleLoginButton onClick={() => onClick("google")} >
                Google
              </GoogleLoginButton>
              <FacebookLoginButton onClick={() => onClick("facebook")} >
                Facebook
              </FacebookLoginButton>
            </LoginButtons>
            <RememberMe>
              <RememberMeLabel id="remember-me">
                Remember me&nbsp;
                <input type="checkbox" value="true" />
              </RememberMeLabel>
            </RememberMe>
          </LoginPanel>
        </Content>
        <Footer>
          모두의마블! 모두의~! 모두의마블! 모두의~! 모두의마블! 모두의~! 모두의마블! 모두의~! 모두의마블! 모두의~!
          모두의마블! 모두의~! 모두의마블! 모두의~! 모두의마블! 모두의~! 모두의마블! 모두의~! 모두의마블! 모두의~!
          모두의마블! 모두의~! 모두의마블! 모두의~! 모두의마블! 모두의~! 모두의마블! 모두의~! 모두의마블! 모두의~!
          모두의마블! 모두의~! 모두의마블! 모두의~! 모두의마블! 모두의~! 모두의마블! 모두의~! 모두의마블! 모두의~!
        </Footer>
      </PageWrapper>
    </Page>
  )
}