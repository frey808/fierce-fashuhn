import 'dotenv/config'
import { connect } from '@planetscale/database'

const config = {
  host: env.DATABASE_HOST,
  username: env.DATABASE_USERNAME,
  password: env.DATABASE_PASSWORD
}

// const conn = connect(config)
// const results = await conn.execute('select 1 from dual where 1=?', [1])

function openNav(){
    document.getElementById("nav").style.display = "inline";
    document.getElementById("opennav").style.display = "none";
}

function closeNav(){
    document.getElementById("nav").style.display = "none";
    document.getElementById("opennav").style.display = "inline";
}

function swap(){
    //swap view
}

// function exec_sql_file(path){
//     conn = connect(config)
//     results = await conn.execute('select 1 from dual where 1=?', [1])
//     cur = conn.cursor()
//     with open(path, 'r') as file:
//         cur.execute(file.read())
//     conn.commit()
//     conn.close()
// }

function createTables(){
    sqlCommit("CREATE TABLE Persons (id SERIAL PRIMARY KEY, name VARCHAR(30), image INT, description VARCHAR(255));");
}

function sqlCommit(sql, args={}){
    conn = connect();
    conn.execute(sql, args);
    conn.commit();
    conn.close();
    return result;
}

function sqlGetAll(sql, args={}){
    conn = connect();
    result = conn.query(sql, args);
    conn.close();
    return result;
}

function getData(){
    //load
}

function createItem(){
    //add
}

function editItem(){
    //edit
}

function deleteItem(){
    //delete
}