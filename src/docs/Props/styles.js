export default {
    props: {
        fontSize:12,
        borderCollapse:'collapse'
    },
    th: {
        borderBottom:'1px solid #999',
        padding:3
    },
    tr: {
        '&:nth-child(even)': {
            background:'#f0f0f0'
        }
    },
    td: {
        padding:5
    }
};