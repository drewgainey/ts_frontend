import { Button } from "antd";
import { useEffect, useState } from "react";
import {
  usePlaidLink,
  PlaidLinkOptions,
  PlaidLinkOnSuccess,
} from "react-plaid-link";

export default function PlaidButton() {
  const [linkToken, setLinkToken] = useState<string | null>(null);

  useEffect(() => {
    const fetchLinkToken = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/create_link_token",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        setLinkToken(data.link_token);
      } catch (error) {
        console.error("Error fetching link token:", error);
      }
    };

    fetchLinkToken();
  }, []);

  const handleOnSuccess = async (public_token: string, metadata: any) => {
    try {
      // Send the public token to the backend for exchange
      const response = await fetch(
        "http://localhost:8000/exchange_public_token",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ public_token }), // Send the public token to the backend
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
    <Button
      type="primary"
      onClick={() => open()}
      disabled={!ready || !linkToken}
    >
      Connect
    </Button>
  );
}
