export default class User {
    
    /**
     * @param {string} id
     * @param {string} username
     * @param {string} email
     * @param {string} role
     */
    constructor({id, username, email, role}){
        this._id = id;
        this._username = username;
        this._email = email;
        this._role = role;
    }

    /**
     * @returns {string}
     */
    getId = () => {this._id};

    /**
     * @return {string}
     */
    getUsername = () => this._username;

    /**
     * @return {string}
     */
    getEmail = () => this._email;

    /**
     * @return {{id: string, username: string, email: string, role: string}}
     */
    getRole = () => this._role;


    getData = () => ({
        id: this._id,
        username: this._username,
        email: this._email,
        role: this._role
    });
}