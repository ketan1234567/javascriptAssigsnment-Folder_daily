
async function loginUser() {
    try {
        const data={
           id:1,
           name:"Ketan"
        }
        const profile = await fetchProfile(data)
        return profile;
    } catch (error) {
        console.log(err);


    }

}
loginUser()
    .then(user => fetchProfile(user))
    .then(profile => console.log(profile))
    .catch(err => console.log(err));

