import {UserModel} from '../models/User';

export default (app) => {

    app.get('/v1/users', async (req, res) => {
        if (!req.isAdmin) {
            res.status(403).end();
        } else {
            const users = await UserModel.find() || [];
            res.send(users);
        }
    });
    
    app.get('/v1/users/:id', async (req, res) => {
        try {
            const user = await UserModel.findById(req.params.id);
    
            if (user) {
                res.send(user);
            } else {
                res.status(404).end();
            }
    
        } catch (error) {
            res.status(404).end();
        }
    });
    
    app.post('/v1/users', (req, res) => {
        const username = req.body.username;
        const email = req.body.email;
        const role = req.body.role;
        console.log('post: data => ', username, email, role);
        
        if (!req.isAdmin) {
            res.status(403).end();
        } else {
            res.status(200).end();
        }
    });
    
    app.put('/v1/users/:id', (req, res) => {
        const id = req.params.id;
        const username = req.body.username;
        const email =  req.body.email;
        const role = req.body.email;
        console.log('put: data => ', id, username, email, role);
        
        if (!req.isAdmin) {
            res.status(403).end();
        } else {
            res.send(200).end();
        }
    });

    app.delete('/v1/users/:id', (req, res) => {
        const id = req.params.id;
        console.log('delete: data => ', id);
        
        if (!req.isAdmin) {
            res.status(403).end();
        } else {
            res.send(200).end();
        }
    });

};
