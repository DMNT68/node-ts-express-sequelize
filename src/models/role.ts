import { DataTypes } from 'sequelize';
import db from '../db/connection';

export const Role = db.define('roles', {
    roles_id:{type:DataTypes.NUMBER, primaryKey: true},
    description:{type:DataTypes.STRING},
});

/* 
roles_id int AI PK 
description varchar(45) 
created_at timestamp 
deleted_at timestamp 
modified_at timestamp 
created_by int 
deleted_by int 
modified_by int
 */