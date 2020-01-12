const slug = require('slug')

const categoriesService = () => {

    const extract = (rows) => {
        const categories = rows.map((row) => {
            return {
                name: row.productCategory,
                slug: row.categorySlug
            };
        });

        return unique(categories);
    }

    const createSlug = (name) => {
        return slug(name, {lower: true});
    }

    const unique = (categories) => {
        return categories.filter((obj, pos, arr) => {
            return arr.map(mapObj => mapObj['slug']).indexOf(obj['slug']) === pos;
        });
    }

    return {
        extract,
        createSlug,
        unique
    };
};

module.exports = categoriesService;