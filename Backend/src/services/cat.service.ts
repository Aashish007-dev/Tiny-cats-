import catModel from "../models/cat.model.ts";


export const createCatService = async (payload: object) => {
    return await catModel.create(payload);
};

export const getAllCatsService = async () => {
    return catModel.find();
};

export const getSingleCatsService = async (id: string) => {
    return catModel.findById(id);
};

export const searchCatsService = async (query: string) => {
    return await catModel.find({
        $or:[
            {
                name: {
                    $regex: query,
                    $options: "i"
                }
            },

            {
                breed: {
                    $regex: query,
                    $options: "i"
                }
            },
        ]
    });
};

export const recommendService = async (kidsFriendly: boolean, apartmentFriendly: boolean) => {
    return await catModel.find({kidsFriendly, apartmentFriendly});
};