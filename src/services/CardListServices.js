export function onSetCurrentPage() {
    try {
        const unparsed = localStorage.getItem('tweets');
        const parsed = JSON.parse(unparsed);
        if (parsed !== null) return Math.ceil(parsed.length / 3);
        else return 1;
    } catch (error) {
        console.log(error);
        return 1;
    }
}

export function getFilteredUsers(users, filter) {
    if (filter === " ") return users;
    else if (filter === "follow") return users.filter(user =>
        !user.isFollowing);
    else if (filter === "followings") return users.filter(user =>
        user.isFollowing);
}
