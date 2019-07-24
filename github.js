class Github {
  constructor() {
    this.client_id = 'b34beb65fd2796b7e697';
    this.client_secret = 'a092c7b03813d278de154abadd284c6e4a5ff46a';
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${
        this.client_id
      }&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile
    };
  }
}
