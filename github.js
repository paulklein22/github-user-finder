class Github {
  constructor() {
    this.client_id = 'b34beb65fd2796b7e697';
    this.client_secret = 'a092c7b03813d278de154abadd284c6e4a5ff46a';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  // prettier-ignore
  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    };
  }
}
