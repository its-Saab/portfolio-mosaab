import React, {useEffect} from 'react'
import Head from 'next/head'
import BaseLayout from 'components/layouts/BaseLayout'
import BasePage from 'components/BasePage'
import {useGetUser} from 'actions/user'
import {Row, Col} from 'reactstrap'
const About= () => {
    const {data,loading} = useGetUser()

    useEffect(() => {
      return () =>{
          window.__isAboutLoaded = true
      }
    },[])

    const createFadeInClass = () => {
        if (typeof window !== 'undefined'){
            return window.__isAboutLoaded? '' : 'fadein'
        }
        return 'fadein'
    }


    return(
        <>
         <Head>
      <title>About</title>
      <link rel="icon" href="/favicon.ico" />
         </Head>
         <BaseLayout
            user={data}
            loading={loading}
            >
            <BasePage className="about-page">
            <Row className="mt-5">
                <Col md="6">
                    <div className="left-side">
                    <h1 className={`title ${createFadeInClass()}`}>Hello, Welcome</h1>
                    <h4 className={`subtitle ${createFadeInClass()}`}>To About Page</h4>
                    <p className={`subsubTitle ${createFadeInClass()}`}>Feel free to read short description about me.</p>
                    </div>
                </Col>
                <Col md="6">
                  <div className={`${createFadeInClass()}`}>
                    <p>My name is Mosaab Abbas and I am a freelance developer. </p>
                    <p>
                        Contrary to popular belief, Lorem Ipsum is not simply random text.
                        It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                    </p>
                    <p>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
                        by injected humour, or randomised words which don't look even slightly believable.
                        If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                    </p>
                  </div>
                </Col>
            </Row>
            </BasePage>
         </BaseLayout>

        </>
    )
}
export default About
