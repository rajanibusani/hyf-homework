const container = document.getElementById("container");
const userNames = ["rajanibusani", "sandhana14", "JyothiNandyala","soujanyapolavarapu","ccshah298"];

const promises = userNames.map(username => fetch(`https://api.github.com/search/repositories?q=user:${username}`));

async function getGitInfo() {
  try {
    const promisesArray = await Promise.all(promises)
    const jsonArray = await Promise.all(promisesArray.map(response => response.json()))
    const responsesArray = jsonArray.forEach(response => {
      const ulTag = document.createElement("ul");
      ulTag.textContent = `${response.items[0].owner.login}'s Repositories`;
      const repoName = document.createElement("li");
      const urlTag = document.createElement("li");
      repoName.textContent = 'Full Name : ' + response.items[0].full_name;
      urlTag.textContent = 'URL : ' + response.items[0].url;
      ulTag.appendChild(repoName);
      ulTag.appendChild(urlTag);
      container.appendChild(ulTag);
    })

  } catch (error) {
    console.log(error);
  }
}
getGitInfo();

