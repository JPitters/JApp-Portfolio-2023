export default {
    name: 'education',
    title: 'Education',
    type: 'document',
    fields: [
        {
            name: 'school',
            title: 'School',
            type: 'string'
        },
        {
            name: 'program',
            title: 'Program Name',
            type: 'string'
        },
        {
            name: 'years',
            title: 'Years',
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
            name: 'overview',
            title: 'Overview',
            type: 'string'
        }
    ]
}