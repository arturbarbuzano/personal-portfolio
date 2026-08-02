
function updateProfileInfo(profileData){

    const photo = document.getElementById('profile.photo')

    photo.src = profileData.photo;
    photo.alt = profileData.name;

    const name = document.getElementById('profile.name');
    
    name.innerText = profileData.name;

    const nametwo = document.getElementById('profile.nametwo');
    
    nametwo.innerText = profileData.nametwo
    
    const job = document.getElementById('profile.job')
    
    job.innerText = profileData.job

    const age = document.getElementById('profile.age')

    age.innerText = profileData.age

}

function updateHardSkills(profileData){
    const hardSkills = document.getElementById('profile.skills.hardSkills');
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<img src="${skill.logo}" alt="${skill.name}"/>`).join('')

}

function updatePortfolio(profileData){
    const portfolio = document.getElementById('profile.portfolio')

    portfolio.innerHTML = profileData.portfolio.map(project =>{
        return `<div class="repository">
                        <h5>${project.name}</h5>
                        <a href="${project.url}" target="_blank">${project.url}</a>
                </div>`
    }).join('')
}

(async () => {

    const profileData = await fetchProfileData();
    updateProfileInfo(profileData);
    updateHardSkills(profileData);
    updatePortfolio(profileData);
})()