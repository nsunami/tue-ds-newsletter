import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components"
import * as React from "react"
import { dataStewards } from "../../data/dataStewards"
import { createTable } from "../../lib/createTable"

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : ""

export const StripeWelcomeEmail = () => (
  <Tailwind>
    <Html className="font-sans">
      <Head />
      <Preview>PAR Data Steward Newsletter Vol. 1 (2024-10-18)</Preview>
      <Body>
        <Container className="bg-fuchsia-800 text-white px-3">
          <Section>
            <Text>PAR Data Steward Newsletter October 2024</Text>
            <Img
              src={`${baseUrl}/static/TUe-logo-descriptor-line-white.png`}
              width={150}
              height={41}
              alt="TU/e Logo"
            />
          </Section>
          <Section className="text-center">
            <Heading>Launch of the Research Cockpit</Heading>
            <Img
              src="https://ms.copernica.com/API/base/copernica/imagedata?id=222638141&hashcode=69c8b621460042cf7a1330ee508e3b7b&_language=nl_NL&_timezone=Europe%2FAmsterdam&_account=7713&_user=864064"
              width="100%"
            />
          </Section>
          <Section>
            <Text>
              We are pleased to announce the launch of the Research Cockpit, a
              new system designed to assist researchers in managing their
              research data. This platform will evolve gradually, with
              additional products and services being introduced over time to
              support the entire research data lifecycle.
            </Text>
          </Section>
          <Section>
            <Heading as="h2">Meet your data stewards</Heading>
            {createTable(dataStewards).map((row) => (
              <Row>
                {row.map((cell) => (
                  <Column className="w-1/4 px-2">
                    <Img
                      className="w-full object-cover rounded-lg"
                      height={150}
                      src={cell.photoUrl}
                    />
                    <Text>
                      <Link
                        className="font-bold text-white"
                        href="https://research.tue.nl/en/persons/liz-guzman-ramirez"
                      >
                        {cell.name}
                      </Link>
                      <br />
                      {cell.role}
                    </Text>
                  </Column>
                ))}
              </Row>
            ))}
          </Section>
        </Container>
      </Body>
    </Html>
  </Tailwind>
)

export default StripeWelcomeEmail
