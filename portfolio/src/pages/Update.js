import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import Layout from "./Layout";
dotenv.config({ path: "../../.env" });
function Takoda() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    // Fetch repositories using GitHub API
    const fetchRepositories = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/taka6745/repos",
          {
            headers: {
              Authorization: `token ${process.env.GITHUB_TOKEN}`,
            },
          }
        );
        setRepositories(response.data);
      } catch (error) {
        console.error("Error fetching repositories:", error);
      }
    };

    fetchRepositories();
  }, []);
  console.log(process.env.GITHUB_TOKEN);
  console.log("hi");
  return (
    <>
      <Layout>
        <h1>Updated</h1>
        <ul>
          {repositories.map((repo) => (
            <li key={repo.id}>{repo.name}</li>
          ))}
        </ul>
      </Layout>
    </>
  );
}

export default Takoda;
