import Sequelize from 'sequelize'
import {hostname,port , db, username, password} from '../config/postgresql-config.json'
const sequelize = new Sequelize(db, username, password, {
    dialect: 'postgresql',
    host: hostname,
    port: port,
    operatorsAliases: false
})
export default sequelize