import axios from 'axios';

const apiBaseUrl = 'https://api.themoviedb.org/3/list';

export const createListFromAPI = async (name : string, description='', publicList = "1", showComments = "1", sortBy = 'original_order.asc') => {
    const response = await axios.post(apiBaseUrl, {
        name: name,
        description: description,
        public: publicList,
        display_comments: showComments,
        sort_by: sortBy
}, {
    headers: {'Authorization': `Bearer ${process.env.API_ACCESS_TOKEN}`}
});
    return response.data;
};

export const addAnItemToList = async (listId: string, mediaId: string, mediaType: string) => {
    
    const response = await axios.post(`${apiBaseUrl}/${listId}/add_item`, {
        media_id: mediaId,
        media_type: mediaType
    }, {
        headers: {'Authorization': `Bearer ${process.env.API_ACCESS_TOKEN}`}
    });
    return response.data;
}