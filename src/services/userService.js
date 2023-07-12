import { httpRequest } from '~/utils/httpRequest';
export const getUserSuggested = async (page, perPage = 2) => {
    try {
        const response = await httpRequest.get('/users/suggested', {
            params: {
                page,
                per_page: perPage,
            },
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
