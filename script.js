// const APIURL = 'https://api.github.com/users/'



// const main = document.getElementById("main");

// form.addEventListener('submit', function(e){
//     e.preventDefault();

//     //eliminar resultado anterior
//     main.innerHTML='';

//     let user = document.getElementById("search").value;

//    axios.get("https://api.github.com/users/" + user)
//         .then(response =>{
//             const data = response.data;
//             console.log(data);

//             let profile = document.createElement("div");
//             profile.classList.add('card');
//             main.appendChild(profile);

//             let avatarImg = document.createElement("img");
//             avatarImg.src = data.avatar_url;
//             avatarImg.classList.add('avatar');
//             profile.appendChild(avatarImg);
                
//             //Accedemos a los datos de repositorios de la API
//             axios.get(data.repos_url)
//                 .then(response =>{
//                     const repoData = response.data;

//                     let list = document.createElement("ul");
//                     list.classList.add('user-info');
//                     profile.appendChild(list);
                    

//                     repoData.forEach((repo) => {
//                         let listItem = document.createElement("li");
//                         listItem.textContent = repo.name;
//                         listItem.classList.add('repo');
//                         list.appendChild(listItem);   
//                     });                     
//                 })
            
//             //User INFO
//             let profileData = document.createElement("div");
//             profileData.classList.add('user-info');
//             profile.appendChild(profileData);
            
//             //User NAME
//             let nameProfile = document.createElement("h2");
//             nameProfile.textContent = data.name;
//             nameProfile.classList.add('user-info');
//             profileData.appendChild(nameProfile);

//             //User BIO
//             let infoProfile = document.createElement("h5");
//             infoProfile.textContent = data.bio;
//             infoProfile.classList.add('user-info');
//             profileData.appendChild(infoProfile);  
            
//             //LIST DATA PROFILE
//             let listFollow = document.createElement("ul");
//             listFollow.classList.add('user-info');
//             profileData.appendChild(listFollow);

//                 //FOLLOWERS COUNT
//                 let itemFollowers = document.createElement("li");
//                 itemFollowers.textContent = `${data.followers} Followers`;
//                 itemFollowers.classList.add('user-info');
//                 listFollow.appendChild(itemFollowers);

//                 //FOLLOWING COUNT
//                 itemFollowing = document.createElement("li");
//                 itemFollowing.textContent = `${data.following} Following`;
//                 itemFollowing.classList.add('user-info');
//                 listFollow.appendChild(itemFollowing);

//                 //REPOS COUNT
//                 itemRepos = document.createElement("li");
//                 itemRepos.textContent = `${data.public_repos} Repos`;
//                 itemRepos.classList.add('user-info');
//                 listFollow.appendChild(itemRepos);
//         })
//         .catch((error) =>{
//             console.log(error);
//             message = document.createElement("h2");
//             message.classList.add('user-info');
//             message.textContent = "No profile with this username";
//             profile = document.createElement("div");
//             profile.classList.add('card');
//             profile.appendChild(message);
//             main.appendChild(profile);
            
//         });
// });



const APIURL = 'https://api.github.com/users/'



const main = document.getElementById("main");

form.addEventListener('submit', function(e){
    e.preventDefault();

    //eliminar resultado anterior
    main.innerHTML='';

    let user = document.getElementById("search").value;

   axios.get("https://api.github.com/users/" + user)
        .then(response =>{
            const data = response.data;
            console.log(data);

            let profile = document.createElement("div");
            profile.classList.add('card');
            main.appendChild(profile);

            let avatarImg = document.createElement("img");
            avatarImg.src = data.avatar_url;
            avatarImg.classList.add('avatar');
            profile.appendChild(avatarImg);
                
            //Accedemos a los datos de repositorios de la API
            axios.get(data.repos_url)
                .then(response =>{
                    const repoData = response.data;

                    let list = document.createElement("ul");
                    list.classList.add('user-info');
                    profile.appendChild(list);
                    

                    repoData.forEach((repo) => {
                        let listItem = document.createElement("li");
                        listItem.textContent = repo.name;
                        listItem.classList.add('repo');
                        list.appendChild(listItem);   
                    });                     
                })
            
            //User INFO
            let profileData = document.createElement("div");
            profileData.classList.add('user-info');
            profile.appendChild(profileData);
            
            //User NAME
            let nameProfile = document.createElement("h2");
            nameProfile.textContent = data.name;
            nameProfile.classList.add('user-info');
            profileData.appendChild(nameProfile);

            //User BIO
            let infoProfile = document.createElement("h5");
            infoProfile.textContent = data.bio;
            infoProfile.classList.add('user-info');
            profileData.appendChild(infoProfile);  
            
            //LIST DATA PROFILE
            let listFollow = document.createElement("ul");
            listFollow.classList.add('user-info');
            profileData.appendChild(listFollow);

                //FOLLOWERS COUNT
                let itemFollowers = document.createElement("li");
                itemFollowers.textContent = `${data.followers} Followers`;
                itemFollowers.classList.add('user-info');
                listFollow.appendChild(itemFollowers);

                //FOLLOWING COUNT
                itemFollowing = document.createElement("li");
                itemFollowing.textContent = `${data.following} Following`;
                itemFollowing.classList.add('user-info');
                listFollow.appendChild(itemFollowing);

                //REPOS COUNT
                itemRepos = document.createElement("li");
                itemRepos.textContent = `${data.public_repos} Repos`;
                itemRepos.classList.add('user-info');
                listFollow.appendChild(itemRepos);
        })
        .catch((error) =>{
            console.log(error);
            message = document.createElement("h2");
            message.classList.add('user-info');
            message.textContent = "No profile with this username";
            profile = document.createElement("div");
            profile.classList.add('card');
            profile.appendChild(message);
            main.appendChild(profile);
            
        });
});