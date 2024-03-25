export default {
    name: 'freshjuice',
    title: 'Freshjuice',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
                hotspot: true,
            }
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 90,
            }
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
        },
        {
            name: 'calories',
            title: 'Calories',
            type: 'string',
        },
        {
            name: 'highlight',
            title: 'Highlight',
            type: 'string',
        },
        {
            name: 'nutritionFact',
            title: 'NutritionFact',
            type: 'string',
        },
        {
            name: 'ingredients',
            title: 'Ingredients',
            type: 'string',
        },
        {
            name: 'details',
            title: 'Details',
            type: 'string',
        }
    ]
}