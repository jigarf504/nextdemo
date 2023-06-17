"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import { Table, Col, Row,Badge  } from "react-bootstrap";

const WEBApiTable = () => {
  //const router = useRouter();
  const [apiData, setApiData] = useState<any>([]);
  useEffect(() => {
    axios
      .get(
        "https://cdn.contentful.com/spaces/6j3cicjz6mzw/environments/master/entries?access_token=Dr6gCnB7bD0kHYVyEpOocHeQRcFGiTCid97PV-ptDV4&include=1"
      )
      .then((response: any) => {
        console.log(response.data);
        setApiData(response.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
      ///spaces/yadj1kx9rmg0/environments/staging/assets?access_token=fdb4e7a3102747a02ea69ebac5e282b9e44d28fb340f778a4f5e788625a61abe
  }, []);
  //console.log("Data:", Datas);
  return (
    <>
      <main style={{ padding: "0px" }}>
        <div>
          <h1>API Data</h1>
          <Row>
            <Col lg={12}>
              <Table striped bordered hover size="md">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Podcast</th>
                    <th>Description</th>
                    <th>Attachments</th>
                  </tr>
                </thead>
                <tbody>
                  {apiData.map((data: any, index: number) => (
                    <tr key={index}>
                      <td>{data?.fields?.title}</td>
                      <td>{data?.fields?.podcastFeed}</td>
                      <td>{data?.fields?.description.content[0].content[0].value}</td>
                      <td>{data?.fields?.attachment?.sys?.id}</td>
                    </tr>
                  ))}{" "}
                </tbody>
              </Table>
            </Col>
          </Row>
        </div>
      </main>
    </>
  );
};
export default WEBApiTable;
