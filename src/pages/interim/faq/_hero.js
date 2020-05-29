import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { Section, ResponsiveHeader, ImgWrapper, ResponsiveFlex } from '../_hero'
import { Container } from 'components/containers'
import { Header, LocalizedLinkText, QueryImage } from 'components/elements'
import { localize, Localize } from 'components/localization'
import { binary_url } from 'common/utility'

const RightWrapper = styled(ImgWrapper)`
    max-width: 69rem;
`

const query = graphql`
    query {
        deriv: file(relativePath: { eq: "interim-faq-bg.png" }) {
            ...fadeIn
        }
    }
`

const Hero = () => {
    const data = useStaticQuery(query)
    return (
        <>
            <Section bg="var(--color-black)" p="8rem 0">
                <Container fw="wrap">
                    <ResponsiveFlex fd="column" max_width="48.6rem" ai="center">
                        <ResponsiveHeader as="h2" mb="1.2rem" align="left" lh="1.25">
                            <Localize
                                translate_text="<0>Binary.com</0> has rebranded to <1>Deriv.com</1> and here is everything you need to know"
                                components={[
                                    <LocalizedLinkText
                                        key={0}
                                        external
                                        color="white"
                                        weight="bold"
                                        to={binary_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    />,
                                    <LocalizedLinkText
                                        key={1}
                                        weight="bold"
                                        to="/"
                                        color="white"
                                    />,
                                ]}
                            />
                        </ResponsiveHeader>
                    </ResponsiveFlex>
                    <RightWrapper>
                        <QueryImage width="100%" data={data['deriv']} alt={`Deriv platforms`} />
                    </RightWrapper>
                </Container>
            </Section>
            <Container p="8rem 0" fd="column">
                <Header as="h4" weight="normal" align="center" mb="4rem">
                    <Localize
                        translate_text="You may have heard about the exciting improvements we’ve made recently to <0>Binary.com</0>. Yes, we’ve rebranded to <1>Deriv.com</1> as part of our renewed commitment to enhance your online trading experience."
                        components={[
                            <LocalizedLinkText
                                key={0}
                                external
                                to={binary_url}
                                target="_blank"
                                rel="noopener noreferrer"
                            />,
                            <LocalizedLinkText key={1} to="/" />,
                        ]}
                    />
                </Header>
                <Header as="h4" weight="normal" align="center">
                    {localize(
                        'We know you may have some questions about these changes, so here are answers to shed light on our transformation. In this FAQ, we explain to you what the rebranding is about, how the rebranding transforms our service delivery, and what it means to you.',
                    )}
                </Header>
            </Container>
        </>
    )
}

export default Hero
