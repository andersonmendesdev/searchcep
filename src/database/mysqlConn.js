import Sequelize from 'sequelize'
import {hostname,port , db, username, password} from '../config/mysql-config.json'
const sequelize = new Sequelize(db, username, password, {
    dialect: 'mysql',
    host: hostname,
    port: port,
    operatorsAliases: false
})
export default sequelize