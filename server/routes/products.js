import {ProductModel} from '../models/Product';

export default (app) => {

    app.get('/v1/products', async (req, res) => {
        const { categories } = req.query;
        const categoryList = categories ? categories.split(',') : [];
        const users = await ProductModel.find(
            categoryList.length > 0 ? 
            { categories: { $in: categoryList } } : undefined
        ) || [];
        res.send(users);
    });
    
    app.get('/v1/products/:id', async (req, res) => {
        try {
            const user = await ProductModel.findById(req.params.id);
    
            if (user) {
                res.send(user);
            } else {
                res.status(404).end();
            }
        } catch (error) {
            res.status(404).end();
        }
    });
    
    app.post('/v1/products', async (req, res) => {
        if (!req.isAdmin) {
            res.status(403).end();
        } else {
            const product = await ProductModel.create(req.body);
    
            if (product) {
                res.status(200).end();
            } else {
                res.status(500).end();
            }
        }
    });
    
    app.put('/v1/products/:id', (req, res) => {
        const id = req.params.id;
        const product = req.body;

        if (!req.isAdmin) {
            res.status(403).end();
        } else {
            ProductModel.findByIdAndUpdate(id, product, (err) => {
                if (err) {
                    res.status(500).end();
                } else {
                    res.status(200).end();
                }
            });
        }
    });
    
    app.delete('/v1/products/:id', (req, res) => {
        const id = req.params.id;
    
        if (!req.isAdmin) {
            res.status(403).end();
        } else {
            ProductModel.findByIdAndDelete(id, (err) => {
                if (err) {
                    res.status(500).end();
                } else {
                    res.status(200).end();
                }
            });
        }
    });

};