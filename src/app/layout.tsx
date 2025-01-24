import "@mantine/core/styles.css";
import React from "react";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { theme } from "../../theme";
import { DoubleHeader } from "@/components/DoubleHeader/DoubleHeader";
import { FooterSocial } from "@/components/FooterSocial/FooterSocial";
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
  title: "UMass Club Golf | University of Massachusetts Golf Team",
  description: "NCCGA Club Golf Team at UMass Amherst",
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider forceColorScheme="light" theme={theme}>
          <DoubleHeader />
          {children}
          <FooterSocial />
        </MantineProvider>
      </body>
    </html>
  );
}
