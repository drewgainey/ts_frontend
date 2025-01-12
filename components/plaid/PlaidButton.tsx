import { useEffect, useState } from "react";
import {
  usePlaidLink,
  PlaidLinkOptions,
  PlaidLinkOnSuccess,
} from "react-plaid-link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";

export default function PlaidButton() {
  const [linkToken, setLinkToken] = useState<string | null>(null);

  useEffect(() => {
    const fetchLinkToken = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/v1/api/link/generate-token",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Cache-Control": "no-store",
            },
            body: JSON.stringify({
              clientUserId: "1234",
            }),
          }
        );
        const data = await response.json();
        setLinkToken(data.linkToken);
      } catch (error) {
        console.error("Error fetching link token:", error);
      }
    };

    fetchLinkToken();
  }, []);

  const handleOnSuccess = async (publicToken: string, metadata: any) => {
    try {
      // Send the public token to the backend for exchange
      const response = await fetch(
        "http://localhost:8080/v1/api/link/exchange-token",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ publicToken }), // Send the public token to the backend
        }
      );

      if (!response.ok) {
        const errorDetail = await response.text();
        throw new Error(`Failed to exchange public token: ${errorDetail}`);
      }

      const data = await response.json();
      console.log("Successfully exchanged public token:", data);
      // Handle the access token returned by your backend if needed
    } catch (error) {
      console.error("Error exchanging public token:", error);
    }
  };

  const config: PlaidLinkOptions = {
    onSuccess: handleOnSuccess,
    onExit: (err, metadata) => {},
    onEvent: (eventName, metadata) => {},
    token: linkToken,
    env: "sandbox",
  };
  const { open, exit, ready } = usePlaidLink(config);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Connect Bank Accounts</CardTitle>
        <CardDescription>
          Use Plaid to link bank accounts with SyncLedgers
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button onClick={() => open()} disabled={!ready || !linkToken}>
          Connect
        </Button>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
