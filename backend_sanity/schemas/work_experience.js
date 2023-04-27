export default {
    name: 'workExperience',
    title: 'Work Experience',
    type: 'document',
    fields: [
        {
            name: 'company',
            title: 'Company',
            type: 'string'
        },
        {
            name: 'position',
            title: 'Position',
            type: 'string'
        },
        {
            name: 'duration',
            title: 'Duration',
            type: 'string'
        },
        {
            name: 'location',
            title: 'Location',
            type: 'string'
        },
        {
            name: 'imgUrl',
            title: 'ImgURL',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'jobRequirements',
            title: 'Job Requirements',
            type: 'string'
        }
    ]
}