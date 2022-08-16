import React, { Component } from "react";
import Axios from "axios";
import baseURL from "../api/Github";
import RepoCard from "../components/GithubRepos/RepoCard";
import { Grid } from "@material-ui/core";

class Projects extends Component {
  Title = [];
  state = {
    repo: [],
    language: [],
  };

  async componentDidMount() {
    const api_key = process.env.REACT_APP_API_KEY;

    let repo = [
      baseURL('file-system-JSON-RPC'),
      baseURL('SVM-digits-recognition'),
      baseURL('spectral-clustering-predictions'),
      baseURL('google-file-system'),
      baseURL('DQN-Atari-Pong'),
      baseURL('Portfolio'),
    ];

    await Axios.get("https://github-lang-deploy.herokuapp.com/").then(
      async (res) => await this.setState({ language: res.data })
    );

    repo.map(
      async (url) =>
        await Axios.get(url, {
          headers: {
            Authorization: `token ${api_key}`,
          },
        }).then(async (res) => {
          await this.setState({
            repo: [...this.state.repo, res.data],
          });
        })
    );
  }
  render() {
    const { repo, language } = this.state;
    repo.sort((a, b) =>
      a.stargazers_count > b.stargazers_count
        ? -1
        : b.stargazers_count > a.stargazers_count
        ? 1
        : 0
    );
    return (
      <div>
      {/* <Grid container spacing={1}> */}
        {repo.map((data, i) => (
          <RepoCard repo={data} key={i} language={language} />
        ))}
      {/* </Grid> */}
      </div>
    );
  }
}
export default Projects;