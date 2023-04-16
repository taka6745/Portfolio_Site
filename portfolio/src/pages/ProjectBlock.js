import { useState, useEffect } from "react";
import { Buffer } from "buffer";

function ProjectBlock({ data }) {
  const [repoList, setRepoList] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const username = "taka6745";
        const url = `https://api.github.com/users/${username}/repos`;
        const headers = {
          Accept: "application/vnd.github.v3+json",
          Authorization: "Bearer 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",
        };
        const response = await fetch(url, {
          method: "GET",
          headers: headers,
        });
        const repos = await response.json();
        const repoNames = repos.map((repo) => repo.name);
        setRepoList(repoNames);
      } catch (error) {
        console.error(error);
      }
    };
    fetchRepos();

    const owner = "taka6745";
    const repo = "Portfolio_Site";
    const path = "portfolio.json";

    // Set the API request headers
    const headers = {
      Accept: "application/vnd.github.v3+json",
      Authorization: "Bearer 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",
    };

    // Set the API endpoint URL
    const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;

    // Make the API request
    fetch(url, {
      method: "GET",
      headers: headers,
    })
      .then((response) => response.json())
      .then((data) => {
        // Get the contents of the file from the API response
        console.log("File created at: ", data[0].commit.author.date);
        const fileContents = Buffer.from(data.content, "base64").toString();
        const jsonContents = JSON.parse(fileContents);

        // Print the contents of the file
        console.log(jsonContents);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      {repoList.map((repoName) => (
        <h1 key={repoName}>THIS IS {repoName}</h1>
      ))}
    </>
  );
}

export default ProjectBlock;
