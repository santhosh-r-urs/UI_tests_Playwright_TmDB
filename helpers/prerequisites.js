import axios from 'axios';

const createListUrl = 'https://api.themoviedb.org/3/list';

export const createListFromAPI = async (name, description='', publicList = "1", showComments = "1", sortBy = 'original_order.asc') => {
    console.log(process.env.API_ACCESS_TOKEN);
    console.log(name);
    console.log(description);
    console.log(publicList);
    console.log(showComments);
    console.log(sortBy);
    
    const response = await axios.post(createListUrl, {
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