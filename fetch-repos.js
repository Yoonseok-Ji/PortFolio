// GitHub API를 사용해 리포지토리 정보를 가져오는 스크립트
const fetch = require('node-fetch'); // npm install node-fetch 필요

async function fetchGitHubRepos(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`);
    const repos = await response.json();
    
    const projectData = repos.map(repo => ({
      id: repo.name.toLowerCase().replace(/[^a-z0-9]/g, ''),
      title: repo.name,
      subtitle: 'GitHub Repository',
      description: repo.description || '설명이 없습니다.',
      technologies: repo.language ? [repo.language] : ['기타'],
      githubUrl: repo.html_url,
      homepage: repo.homepage,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      updated: repo.updated_at,
      created: repo.created_at,
      color: '#2563eb'
    }));

    console.log('프로젝트 데이터:');
    console.log(JSON.stringify(projectData, null, 2));
    
    return projectData;
  } catch (error) {
    console.error('리포지토리 가져오기 실패:', error);
  }
}

// 사용법
fetchGitHubRepos('coinalarm-click'); // 원하는 GitHub username 입력
