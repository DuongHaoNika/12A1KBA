
const get404Page = (req, res) => {
    res.render('notFound', { layout: false })
} 

export default get404Page