const cats = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN9ypyklm7phGrpacCrXVfz0bzI7vAb44R1RlTqjgomhHo6HiR", "http://catsatthestudios.com/wp-content/uploads/2017/12/12920541_1345368955489850_5587934409579916708_n-2-960x410.jpg", "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&h=350"];
const mouses = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTursT-dd0Q7dB3r1trqYHEq_GqoVbSi-IeikncMsuFunsQKQLL", "https://www.dr.dk/images/article/2017/06/30/mus.jpg", "https://fivethirtyeight.com/wp-content/uploads/2017/07/lyme4x3.jpg?quality=90&strip=info&w=575&ssl=1"];

export const onLoad = () => {
    let randomIndex = Math.random() * (mouses.length);
    return mouses[Math.floor(randomIndex)];
}

export const loadCat = () => {
    let randomIndex = Math.random() * (cats.length);
    return cats[Math.floor(randomIndex)];
}