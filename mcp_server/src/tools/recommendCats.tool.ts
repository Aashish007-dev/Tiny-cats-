import axios from "axios"

export const recommendCatsTool = async (kidsFriendly: boolean, apartmentFriendly: boolean) => {
    const response = await axios.post("http://localhost:3000/api/cats/recommend", {
        kidsFriendly,
        apartmentFriendly
    });

    return response.data;
}


export const getAllCatsTool = async () => {
    const response = await axios.get("http://localhost:3000/api/cats");

    return response.data;
}