import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Hr,
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

type NewsletterEmailProps = {
  unsubscribeUrl: string
}

export const NewsletterEmail = ({ unsubscribeUrl }: NewsletterEmailProps) => (
  <Tailwind>
    <Html className="font-sans">
      <Head />
      <Preview>Research Data Stewards Newsletter Vol. 1</Preview>
      <Body>
        <Container>
          <Section className="bg-fuchsia-800 text-sm px-4 py-[20px]">
            <Row>
              <Column>
                <Link href="https://www.tue.nl/en/our-university/library/library-for-researchers-and-phds/research-data-management">
                  <Img
                    src={`${baseUrl}/static/TUe-logo-descriptor-line-white.png`}
                    width={150}
                    height={41}
                    alt="TU/e Logo"
                  />
                </Link>
              </Column>

              <Column className="text-right">
                <Link
                  className="text-white [text-decoration:none]"
                  href="https://www.tue.nl/en/our-university/library/library-for-researchers-and-phds/research-data-management"
                >
                  Web
                </Link>
              </Column>
              <Column className="text-right pl-4">
                <Link
                  className="text-white [text-decoration:none] line-clamp-1"
                  href="https://tuenl.sharepoint.com/sites/intranet-LIS/SitePages/Data-stewards(1).aspx"
                >
                  Intranet
                </Link>
              </Column>
            </Row>
          </Section>
        </Container>
        <Container className="bg-fuchsia-800 text-white px-3">
          <Section>
            <Heading className="text-center">
              Research Data Stewards Newsletter
            </Heading>
          </Section>
          <Section>
            <Text>Dear Colleague,</Text>
            <Text>
              Welcome to the one and only newsletter dedicated exclusively to
              researchers at TU/e!
            </Text>
            <Text>
              In this Newsletter you will find news, updates, and services
              strictly targeted to researchers. We plan to send updates twice
              per year only.
            </Text>
            <Text>We hope you enjoy it,</Text>
            <Text>
              Research Data Stewards <br />
              Product Area Research <br />
              Library & Information Services
            </Text>
          </Section>
          <Hr />
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
            <Button
              className="bg-white box-border rounded-md py-3 px-4 text-center font-semibold w-full"
              href="https://tue.atlassian.net/helpcenter/research/"
            >
              Go to the Research Cockpit
            </Button>
          </Section>
          <Section>
            <Heading as="h2">Meet your data stewards</Heading>
            {createTable(dataStewards).map((row) => (
              <Row>
                {row.map((cell) => (
                  <Column className="w-1/4 px-2 align-top">
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
          <Section>
            <Heading as="h2">What can we help you with?</Heading>
            <Section className="px-3">
              <Row className="h-12">
                <Column className="w-1/2">
                  Funder requirements related to RDM
                </Column>
                <Column className="w-1/2">
                  Research data storage solutions
                </Column>
              </Row>
              <Row className="h-12">
                <Column className="w-1/2">Publishing data & software</Column>
                <Column className="w-1/2">
                  Ethics applications & Informed consent forms
                </Column>
              </Row>
              <Row className="h-12">
                <Column className="w-1/2">Implementation of FAIR data</Column>
                <Column>Privacy questions</Column>
              </Row>
              <Row className="h-12">
                <Column className="w-1/2">Data Management Plans</Column>
                <Column className="w-1/2">
                  Legal agreements and Impact assessments
                </Column>
              </Row>
            </Section>
            <Button
              className="bg-white box-border rounded-md py-3 px-4 text-center font-semibold w-full my-4"
              href="https://tuenl.sharepoint.com/sites/intranet-LIS/SitePages/Data-stewards(1).aspx"
            >
              Read more
            </Button>
          </Section>
          <Section>
            <Heading as="h2">
              <span className="text-sm font-normal">
                Trivia from Data Stewards:
                <br />
              </span>
              Planetary Nebula
            </Heading>
            <Row>
              <Column className="w-1/2">
                <Text>
                  Did you know that when our Sun starts to die, for a brief
                  period of time (in astronomical time scales), it will become a
                  Planetary Nebula?
                </Text>
                <Text>
                  We think it will look something like this, with the outer
                  layers reaching the orbit of the Earth.
                </Text>
                <Text>Liz (astrophysics)</Text>
              </Column>
              <Column className="w-1/2 text-center">
                <Img
                  className="w-full object-cover rounded-lg my-4"
                  height={250}
                  src={
                    "https://tracking.tue.nl/pic/acc/7713/2611B9A5/e6c2c9d1054a54522edba9c52db8862f/image.jpeg"
                  }
                />
              </Column>
            </Row>
          </Section>
        </Container>
        <Container className="my-4">
          <Text className="text-center text-gray-700">
            <Link href="https://tue.atlassian.net/helpcenter/research/">
              Research Cockpit
            </Link>{" "}
            |{" "}
            <Link href="https://openpar.pages.tue.nl/solution-searcher/index.html">
              Solution Searcher
            </Link>{" "}
            |{" "}
            <Link href="https://www.tue.nl/en/our-university/library/library-for-researchers-and-phds/research-data-management">
              RDM TU/e Public Website
            </Link>{" "}
            |{" "}
            <Link href="https://tuenl.sharepoint.com/sites/intranet-LIS/SitePages/Data-stewards(1).aspx">
              Intranet
            </Link>
          </Text>
          <Section className="text-center">
            <Link href="https://zenodo.org/communities/tue_rdmsupport/records?q=&l=list&p=1&s=10&sort=newest">
              <Img
                className="mx-auto"
                src="https://about.zenodo.org/static/img/logos/zenodo-black-200.png"
              />
            </Link>
          </Section>
          <Text className="text-center">
            CC0 No Rights Reserved <br />
            Public Domain Dedication 🧡
          </Text>
          <Text className="text-center">
            <Link href={unsubscribeUrl || "#"}>Unsubscribe</Link>
          </Text>
        </Container>
      </Body>
    </Html>
  </Tailwind>
)

export default NewsletterEmail
