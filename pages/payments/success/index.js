import React from "react";
import Head from "next/head";
import styles from "../../../styles/styles.module.css";
import { Typography, Button } from "antd";
import { useRouter } from "next/router";
import {
  SmileTwoTone,
  HeartTwoTone,
  CheckCircleTwoTone,
} from "@ant-design/icons";

function SuccessfulPayment() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Payment-Success</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <main className={styles.main}>
          <CheckCircleTwoTone
            style={{ fontSize: "32px", marginBottom: "8px" }}
            twoToneColor="#52c41a"
          />

          <Typography.Title level={4} style={{ margin: 0 }}>
            Successful Payment
          </Typography.Title>

          <Button type="link" size={"large"} onClick={() => router.push("/")}>
            Go back to homepage
          </Button>
        </main>
      </div>
    </>
  );
}

export default SuccessfulPayment;